import os
import glob
import re

nav_replacement = '<div id="nav-placeholder"></div>\n<script src="components/nav.js"></script>'

html_files = glob.glob('*.html')
processed_count = 0
failed_nav_count = 0

for file in html_files:
    if file == 'index.html':
        continue
        
    with open(file, 'r', encoding='utf-8') as f:
        html = f.read()
        
    if 'id="nav-placeholder"' in html:
        continue
        
    original_html = html
    
    # Find start of nav
    # It might start with <!-- Global Navigation --> or just <nav class="..." id="global-nav">
    start_idx = html.find('<!-- Global Navigation -->')
    if start_idx == -1:
        # Try finding the <nav id="global-nav"
        start_idx = html.find('<nav class="fixed')
        if start_idx == -1 or 'id="global-nav"' not in html[start_idx:start_idx+200]:
            start_idx = html.find('<nav ')
            if start_idx == -1 or 'id="global-nav"' not in html[start_idx:start_idx+200]:
                failed_nav_count += 1
                print(f"Warning: Nav start not found in {file}")
                continue
    
    if start_idx != -1:
        # Find the second </nav> after start_idx
        first_nav_close = html.find('</nav>', start_idx)
        if first_nav_close != -1:
            second_nav_close = html.find('</nav>', first_nav_close + 6)
            if second_nav_close != -1:
                end_idx = second_nav_close + 6
                html = html[:start_idx] + nav_replacement + html[end_idx:]
            else:
                failed_nav_count += 1
                print(f"Warning: Only one </nav> found in {file}")
        else:
            failed_nav_count += 1
            print(f"Warning: No </nav> found in {file}")
            
    if html != original_html:
        with open(file, 'w', encoding='utf-8') as f:
            f.write(html)
        processed_count += 1
        
print(f"Successfully processed {processed_count} files for NAV fixing.")
if failed_nav_count > 0:
    print(f"Warning: {failed_nav_count} files failed nav replacement.")
