import re

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Replace nav
nav_pattern = r'(<!-- Global Navigation -->.*?<!-- Mobile Drawer Menu -->.*?<div class="fixed inset-0[^>]* id="mobile-menu".*?</div>\s*</div>\s*</div>)'
html = re.sub(nav_pattern, '<div id="nav-placeholder"></div>\n<script src="components/nav.js"></script>', html, flags=re.DOTALL)

# Replace footer
footer_pattern = r'(<footer[^>]* id="mega-footer".*?</footer>)'
html = re.sub(footer_pattern, '<div id="footer-placeholder"></div>\n<script src="components/footer.js"></script>', html, flags=re.DOTALL)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)

print('index.html updated successfully')
