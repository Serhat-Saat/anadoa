document.addEventListener('DOMContentLoaded', () => {
    const placeholder = document.getElementById('latest-blogs-placeholder');
    if (placeholder) {
        placeholder.innerHTML = `
        <div class="bg-earth-light/30 border-y border-earth-light py-16 mt-8 relative overflow-hidden">
            <div class="absolute inset-0 bg-noise opacity-20"></div>
            <div class="max-w-7xl mx-auto pl-6 md:px-6 relative z-10">
                <div class="flex flex-col md:flex-row justify-between items-end mb-10 pr-6 md:pr-0">
                    <div class="mb-4 md:mb-0">
                        <span class="text-sage font-bold tracking-widest uppercase text-sm mb-2 block">Wissen & Natur</span>
                        <h2 class="text-3xl md:text-4xl font-bold font-serif text-mocha">Entdecken Sie unser Magazin</h2>
                        <p class="text-ash-light mt-2 max-w-xl">Tauchen Sie ein in die faszinierende Welt der anatolischen Naturheilkunde und erfahren Sie mehr über unsere reinen Zutaten.</p>
                    </div>
                    <a href="magazin.html" class="inline-flex items-center justify-center px-6 py-3 border-2 border-mocha text-mocha hover:bg-mocha hover:text-white rounded-full font-medium transition-all duration-300 group">
                        Alle Beiträge lesen
                        <i class="ri-arrow-right-line ml-2 transform group-hover:translate-x-1 transition-transform"></i>
                    </a>
                </div>
                
                <div class="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-6 pr-6 md:pr-0 md:grid md:grid-cols-2 lg:grid-cols-4 md:overflow-visible md:pb-0 custom-scrollbar">
                    <!-- Card 1 -->
                    <a class="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1.5 flex flex-col border border-earth-light/50 flex-none w-[85vw] md:w-auto snap-center md:snap-align-none" href="schwarzkuemmeloel-thymoquinon-wirkung.html">
                        <div class="relative h-48 overflow-hidden bg-earth-light">
                            <div class="absolute inset-0 bg-mocha/5 opacity-10 group-hover:opacity-0 transition-opacity duration-500 z-10"></div>
                            <img alt="Schwarzkümmelöl & Thymoquinon" class="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105" src="assets/magazin_1.png"/>
                        </div>
                        <div class="p-5 flex flex-col flex-grow">
                            <span class="text-[10px] uppercase tracking-widest text-sage font-extrabold mb-2 block">Kaltgepresste Öle</span>
                            <h3 class="text-lg font-bold font-serif text-mocha mb-2 group-hover:text-gold transition-colors leading-tight">Schwarzkümmelöl & Thymoquinon: Das Gold der Pharaonen</h3>
                            <p class="text-ash/70 text-xs mb-4 line-clamp-3 leading-relaxed">Eine tiefgreifende wissenschaftliche und historische Analyse von Schwarzkümmelöl (Nigella sativa), seinem Hauptwirkstoff Thymoquinon...</p>
                            <div class="flex items-center justify-between text-[10px] text-ash-light font-medium mt-auto pt-4 border-t border-earth-light/60">
                                <span>24. Juli 2026</span>
                                <span>8 Min. Lesezeit</span>
                            </div>
                        </div>
                    </a>

                    <!-- Card 2 -->
                    <a class="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1.5 flex flex-col border border-earth-light/50 flex-none w-[85vw] md:w-auto snap-center md:snap-align-none" href="tahin-sesammus-gesundheit.html">
                        <div class="relative h-48 overflow-hidden bg-earth-light">
                            <div class="absolute inset-0 bg-mocha/5 opacity-10 group-hover:opacity-0 transition-opacity duration-500 z-10"></div>
                            <img alt="Traditionelles Tahin" class="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105" src="assets/magazin_2.png"/>
                        </div>
                        <div class="p-5 flex flex-col flex-grow">
                            <span class="text-[10px] uppercase tracking-widest text-sage font-extrabold mb-2 block">Traditionelle Pasten</span>
                            <h3 class="text-lg font-bold font-serif text-mocha mb-2 group-hover:text-gold transition-colors leading-tight">Traditionelles Tahin: Die Kunst der Steinmühle</h3>
                            <p class="text-ash/70 text-xs mb-4 line-clamp-3 leading-relaxed">Erfahren Sie, warum die traditionelle Steinvermahlung von geröstetem Sesam der einzige Weg ist, um das seidige, aromatische Tahin zu produzieren.</p>
                            <div class="flex items-center justify-between text-[10px] text-ash-light font-medium mt-auto pt-4 border-t border-earth-light/60">
                                <span>22. Juli 2026</span>
                                <span>5 Min. Lesezeit</span>
                            </div>
                        </div>
                    </a>

                    <!-- Card 3 -->
                    <a class="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1.5 flex flex-col border border-earth-light/50 flex-none w-[85vw] md:w-auto snap-center md:snap-align-none" href="zypressenzapfen-paste-husten-naturheilkunde.html">
                        <div class="relative h-48 overflow-hidden bg-earth-light">
                            <div class="absolute inset-0 bg-mocha/5 opacity-10 group-hover:opacity-0 transition-opacity duration-500 z-10"></div>
                            <img alt="Zypressenzapfen Paste" class="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105" src="assets/magazin_3.png"/>
                        </div>
                        <div class="p-5 flex flex-col flex-grow">
                            <span class="text-[10px] uppercase tracking-widest text-sage font-extrabold mb-2 block">Traditionelle Pasten</span>
                            <h3 class="text-lg font-bold font-serif text-mocha mb-2 group-hover:text-gold transition-colors leading-tight">Das alte Geheimnis der Berge: Zypressenzapfen Paste</h3>
                            <p class="text-ash/70 text-xs mb-4 line-clamp-3 leading-relaxed">Entdecken Sie die historische Bedeutung und die atmungsunterstützenden Eigenschaften der traditionellen anatolischen Zypressenzapfen Paste.</p>
                            <div class="flex items-center justify-between text-[10px] text-ash-light font-medium mt-auto pt-4 border-t border-earth-light/60">
                                <span>18. Juli 2026</span>
                                <span>6 Min. Lesezeit</span>
                            </div>
                        </div>
                    </a>

                    <!-- Card 4 -->
                    <a class="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1.5 flex flex-col border border-earth-light/50 flex-none w-[85vw] md:w-auto snap-center md:snap-align-none" href="kaltpressung-oele-herstellung-qualitaet.html">
                        <div class="relative h-48 overflow-hidden bg-earth-light">
                            <div class="absolute inset-0 bg-mocha/5 opacity-10 group-hover:opacity-0 transition-opacity duration-500 z-10"></div>
                            <img alt="Wahrheit über Kaltpressung" class="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105" src="assets/magazin_4.png"/>
                        </div>
                        <div class="p-5 flex flex-col flex-grow">
                            <span class="text-[10px] uppercase tracking-widest text-sage font-extrabold mb-2 block">Öle & Qualität</span>
                            <h3 class="text-lg font-bold font-serif text-mocha mb-2 group-hover:text-gold transition-colors leading-tight">Die Wahrheit über Kaltpressung: Temperatur macht den Unterschied</h3>
                            <p class="text-ash/70 text-xs mb-4 line-clamp-3 leading-relaxed">Erfahren Sie, warum die echte, temperaturkontrollierte Kaltpressung entscheidend für die Qualität, den Geschmack und die Heilwirkung von Pflanzenölen ist.</p>
                            <div class="flex items-center justify-between text-[10px] text-ash-light font-medium mt-auto pt-4 border-t border-earth-light/60">
                                <span>15. Juli 2026</span>
                                <span>7 Min. Lesezeit</span>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
        `;
    }
});