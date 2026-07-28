import re

with open('lavendeloel.html', 'r', encoding='utf-8') as f:
    html = f.read()

nav_pattern = r'(<!-- Global Navigation -->.*?</div></div></nav>)'
nav_match = re.search(nav_pattern, html, re.DOTALL)
if nav_match:
    nav_html = nav_match.group(1).replace('`', '\\`')
    nav_js = f"const navHTML = `\n{nav_html}\n`;\ndocument.getElementById('nav-placeholder').outerHTML = navHTML;\n"
    with open('components/nav.js', 'w', encoding='utf-8') as f:
        f.write(nav_js)
    print('nav.js fixed correctly')
else:
    print('Pattern not found')
