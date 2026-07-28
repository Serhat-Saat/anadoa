const footerHTML = `
<footer class="bg-mocha text-white pt-24 pb-12 relative overflow-hidden" id="mega-footer">
<div class="max-w-7xl mx-auto px-6 relative z-10">
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
<!-- Col 1: Brand & About -->
<div class="space-y-6 transform">
<img alt="Anadoa Logo" class="h-20 w-auto brightness-0 invert opacity-90 -ml-2" src="assets/anadoa-logo-1000-500.png"/>
<p class="text-white/70 font-light text-sm leading-relaxed pr-4">
                    Die pure Kraft anatolischer Natur. Entdecken Sie traditionelle Heilmittel, schonend kaltgepresste Öle und natürliche Pflegeprodukte für Ihr tiefes Wohlbefinden.
                </p>
<div class="flex space-x-4 pt-2">
<a class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold transition-colors shadow-lg" href="#">
<svg class="w-5 h-5" fill="currentColor" viewbox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"></path></svg>
</a>
</div>
</div>
<!-- Col 2: Shop -->
<div class="transform">
<h4 class="font-serif font-bold text-lg mb-6 text-gold border-b border-white/10 pb-2 inline-block">Online Shop</h4>
<ul class="space-y-3 text-white/70 text-sm font-medium">
<li><a class="hover:text-gold hover:translate-x-1 transform transition-all block" href="kaltgepresste-oele.html">Kaltgepresste Öle</a></li>
<li><a class="hover:text-gold hover:translate-x-1 transform transition-all block" href="aetherische-oele.html">Ätherische Öle</a></li>
<li><a class="hover:text-gold hover:translate-x-1 transform transition-all block" href="pasten.html">Traditionelle Pasten</a></li>
<li><a class="hover:text-gold hover:translate-x-1 transform transition-all block" href="tee.html">Naturtee &amp; Kuren</a></li>
<li><a class="hover:text-gold hover:translate-x-1 transform transition-all block" href="sirupe.html">Natürliche Sirupe</a></li>
<li><a class="hover:text-gold hover:translate-x-1 transform transition-all block" href="essig.html">Lebendige Essige</a></li>
<li><a class="hover:text-gold hover:translate-x-1 transform transition-all block" href="gewuerze.html">Natürliche Gewürze</a></li>
</ul>
</div>
<!-- Col 3: Unternehmen -->
<div class="transform">
<h4 class="font-serif font-bold text-lg mb-6 text-gold border-b border-white/10 pb-2 inline-block">Unternehmen</h4>
<ul class="space-y-3 text-white/70 text-sm font-medium">
<li><a class="hover:text-gold hover:translate-x-1 transform transition-all block" href="index.html#philosophie">Unsere Philosophie</a></li>
<li><a class="hover:text-gold hover:translate-x-1 transform transition-all block" href="index.html#qualitaet">Qualitätsversprechen</a></li>
<li><a class="hover:text-gold hover:translate-x-1 transform transition-all block" href="magazin.html">Magazin (Wissen)</a></li>
<li><a class="hover:text-gold hover:translate-x-1 transform transition-all block" href="rezepte.html">Rezepte &amp; Kochen</a></li>
<li><a class="hover:text-gold hover:translate-x-1 transform transition-all block" href="index.html#faq">Häufige Fragen (FAQ)</a></li>
</ul>
</div>
<!-- Col 4: Rechtliches & Kontakt -->
<div class="transform">
<h4 class="font-serif font-bold text-lg mb-6 text-gold border-b border-white/10 pb-2 inline-block">Rechtliches &amp; Service</h4>
<ul class="space-y-3 text-white/70 text-sm font-medium">
<li><a class="hover:text-gold hover:translate-x-1 transform transition-all block" href="#">Impressum</a></li>
<li><a class="hover:text-gold hover:translate-x-1 transform transition-all block" href="#">AGB</a></li>
<li><a class="hover:text-gold hover:translate-x-1 transform transition-all block" href="#">Datenschutz</a></li>
<li><a class="hover:text-gold hover:translate-x-1 transform transition-all block" href="#">Widerrufsbelehrung</a></li>
<li><a class="hover:text-gold hover:translate-x-1 transform transition-all block" href="#">Versand &amp; Zahlung</a></li>
</ul>
</div>
</div>
<!-- Bottom Bar -->
<div class="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p class="text-white/50 text-xs text-center md:text-left">
                © 2026 Anadoa Naturhaus. Alle Rechte vorbehalten.
            </p>
<div class="flex items-center gap-6 text-white/50 text-xs font-medium">
<span class="flex items-center gap-2"><svg class="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg> Sichere Zahlung</span>
<span class="flex items-center gap-2"><svg class="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg> Schneller Versand (DHL)</span>
</div>
</div>
</div>
</footer>
`;
document.getElementById('footer-placeholder').outerHTML = footerHTML;
