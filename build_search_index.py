import os
import glob
import re
import json
from html.parser import HTMLParser

class PageParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.title = ""
        self.description = ""
        self.h1 = ""
        self.og_image = ""
        self.json_ld_data = []
        self.current_tag = ""
        self.in_title = False
        self.in_h1 = False
        self.in_script = False
        self.script_type = ""

    def handle_starttag(self, tag, attrs):
        self.current_tag = tag
        attrs_dict = dict(attrs)
        
        if tag == 'title':
            self.in_title = True
        elif tag == 'h1':
            self.in_h1 = True
        elif tag == 'meta':
            if attrs_dict.get('name', '').lower() == 'description':
                self.description = attrs_dict.get('content', '')
            elif attrs_dict.get('property', '').lower() == 'og:image':
                self.og_image = attrs_dict.get('content', '')
        elif tag == 'script':
            if attrs_dict.get('type', '').lower() == 'application/ld+json':
                self.in_script = True
                self.script_type = 'application/ld+json'

    def handle_endtag(self, tag):
        if tag == 'title':
            self.in_title = False
        elif tag == 'h1':
            self.in_h1 = False
        elif tag == 'script':
            self.in_script = False

    def handle_data(self, data):
        if self.in_title:
            self.title += data.strip()
        elif self.in_h1 and not self.h1:
            self.h1 += data.strip()
        elif self.in_script and self.script_type == 'application/ld+json':
            try:
                cleaned_data = data.strip()
                if cleaned_data:
                    self.json_ld_data.append(json.loads(cleaned_data))
            except Exception as e:
                pass

def extract_category_from_breadcrumbs(json_ld_list):
    for data in json_ld_list:
        if isinstance(data, dict):
            if data.get('@type') == 'BreadcrumbList' or 'itemListElement' in data:
                items = data.get('itemListElement', [])
                if len(items) >= 2:
                    second_item = items[1]
                    if isinstance(second_item, dict):
                        return second_item.get('name', '')
            elif '@graph' in data:
                for graph_item in data['@graph']:
                    if graph_item.get('@type') == 'BreadcrumbList':
                        items = graph_item.get('itemListElement', [])
                        if len(items) >= 2:
                            return items[1].get('name', '')
    return ""

def process_html_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        html_content = f.read()

    parser = PageParser()
    try:
        parser.feed(html_content)
    except Exception as e:
        print(f"Error parsing {filepath}: {e}")
        return None

    category = extract_category_from_breadcrumbs(parser.json_ld_data)
    
    if not category:
        if 'tee' in filepath:
            category = "Naturtee & Kuren"
        elif 'oel' in filepath or 'ol' in filepath:
            category = "Kaltgepresste Öle"
        elif 'paste' in filepath:
            category = "Traditionelle Pasten"
        elif 'essig' in filepath:
            category = "Lebendige Essige"
        elif 'sirup' in filepath:
            category = "Natürliche Sirupe"
        elif 'melasse' in filepath:
            category = "Melassen (Pekmez)"
        else:
            category = "Produkt"

    image = parser.og_image
    if image:
        image = re.sub(r'^https?://(www\.)?anadoa\.(com|de|at|ch)/', '', image)
        image = re.sub(r'^https?://(www\.)?anadoanaturhaus\.(com|de|at|ch)/', '', image)

    title = parser.title
    if title:
        title = title.split('|')[0].strip()
    else:
        title = parser.h1 if parser.h1 else os.path.basename(filepath).replace('.html', '').replace('-', ' ').title()

    return {
        "title": title,
        "description": parser.description,
        "h1": parser.h1,
        "url": os.path.basename(filepath),
        "image": image if image else "assets/anadoa-logo-1100-1100.png",
        "category": category
    }

if __name__ == "__main__":
    html_files = glob.glob('*.html')
    search_index = []
    
    exclude_files = ['index.html', 'rezept_template.html', 'magazin.html', 'rezepte.html', 'ueber-uns.html']
    
    for file in html_files:
        if file.lower() in exclude_files:
            continue
        
        page_data = process_html_file(file)
        if page_data:
            search_index.append(page_data)
            
    # Inline it into components/nav.js
    nav_path = 'components/nav.js'
    if os.path.exists(nav_path):
        with open(nav_path, 'r', encoding='utf-8') as f:
            nav_content = f.read()

        # Generate the replacement block
        index_js = json.dumps(search_index, ensure_ascii=False, indent=2)
        # We need to indent the JSON array lines to match the JS code block style
        indented_lines = []
        for line in index_js.split('\n'):
            indented_lines.append("    " + line)
        indented_index_js = "\n".join(indented_lines).strip()

        replacement = f"    // SEARCH_INDEX_START\n    const searchIndex = {indented_index_js};\n    // SEARCH_INDEX_END"

        # Regex replace the search index block
        pattern = re.compile(r'(\s*// SEARCH_INDEX_START.*?// SEARCH_INDEX_END)', re.DOTALL)
        new_nav_content, count = pattern.subn(f"\n{replacement}", nav_content)

        if count > 0:
            with open(nav_path, 'w', encoding='utf-8') as f:
                f.write(new_nav_content)
            print(f"Successfully inlined search index of {len(search_index)} items into {nav_path}")
        else:
            print("Error: Could not find // SEARCH_INDEX_START ... // SEARCH_INDEX_END tags in components/nav.js")
    else:
        print(f"Error: {nav_path} does not exist.")
