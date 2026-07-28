import re

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

nav_match = re.search(r'(<!-- Global Navigation -->.*?<!-- Mobile Drawer Menu -->.*?<div class="fixed inset-0[^>]* id="mobile-menu".*?</div>\s*</div>\s*</div>)', html, re.DOTALL)
if nav_match:
    nav_html = nav_match.group(1).replace('`', '\\`')
    nav_js = f"const navHTML = `\n{nav_html}\n`;\ndocument.getElementById('nav-placeholder').outerHTML = navHTML;\n"
    with open('components/nav.js', 'w', encoding='utf-8') as f:
        f.write(nav_js)
    print('nav.js created')

footer_match = re.search(r'(<footer[^>]* id="mega-footer".*?</footer>)', html, re.DOTALL)
if footer_match:
    footer_html = footer_match.group(1).replace('`', '\\`')
    footer_js = f"const footerHTML = `\n{footer_html}\n`;\ndocument.getElementById('footer-placeholder').outerHTML = footerHTML;\n"
    with open('components/footer.js', 'w', encoding='utf-8') as f:
        f.write(footer_js)
    print('footer.js created')
