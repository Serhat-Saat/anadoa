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
<i class="ri-instagram-line text-lg"></i>
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
<li><a class="hover:text-gold hover:translate-x-1 transform transition-all block" href="philosophie.html">Unsere Philosophie</a></li>
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
<span class="flex items-center gap-2"><i class="ri-shield-check-line text-gold text-lg"></i> Sichere Zahlung</span>
<span class="flex items-center gap-2"><i class="ri-truck-line text-gold text-lg"></i> Schneller Versand (DHL)</span>
</div>
</div>
</div>
</footer>
`;
document.getElementById('footer-placeholder').outerHTML = footerHTML;
