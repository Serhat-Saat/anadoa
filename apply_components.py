import os
import glob
import re

nav_pattern = re.compile(r'(<!-- Global Navigation -->.*?</div></div></nav>)', re.DOTALL)
footer_pattern = re.compile(r'(<footer[^>]* id="mega-footer".*?</footer>)', re.DOTALL)
rogue_js_pattern = re.compile(r'\s*const btn = document\.getElementById\(\'mobile-menu-btn\'\);\s*const menu = document\.getElementById\(\'mobile-menu\'\);\s*const mi = document\.getElementById\(\'menu-icon\'\);\s*const ci = document\.getElementById\(\'close-icon\'\);\s*if\(btn\) \{ btn\.addEventListener\(\'click\', \(\) => \{ menu\.classList\.toggle\(\'translate-x-full\'\); mi\.classList\.toggle\(\'hidden\'\); ci\.classList\.toggle\(\'hidden\'\); \}\); \}', re.DOTALL)

nav_replacement = '<div id="nav-placeholder"></div>\n<script src="components/nav.js"></script>'
footer_replacement = '<div id="footer-placeholder"></div>\n<script src="components/footer.js"></script>'

html_files = glob.glob('*.html')
processed_count = 0
failed_nav_count = 0

for file in html_files:
    if file == 'index.html':
        continue
        
    with open(file, 'r', encoding='utf-8') as f:
        html = f.read()
        
    # Check if file has already been componentized
    if 'id="nav-placeholder"' in html and 'id="footer-placeholder"' in html:
        continue
        
    original_html = html
    
    # 1. Replace nav
    html = nav_pattern.sub(nav_replacement, html)
    if html == original_html:
        # Nav replacement failed
        print(f"Warning: Nav pattern not found in {file}")
        failed_nav_count += 1
        
    # 2. Replace footer
    html = footer_pattern.sub(footer_replacement, html)
    
    # 3. Remove rogue JS
    html = rogue_js_pattern.sub('', html)
    
    if html != original_html:
        with open(file, 'w', encoding='utf-8') as f:
            f.write(html)
        processed_count += 1
        
print(f"Successfully processed {processed_count} files.")
if failed_nav_count > 0:
    print(f"Warning: {failed_nav_count} files failed nav replacement.")
