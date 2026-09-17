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
                    <!-- Card 1: Schwarzkümmelöl nüchterner Magen -->
                    <a class="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1.5 flex flex-col border border-earth-light/50 flex-none w-[85vw] md:w-auto snap-center md:snap-align-none" href="schwarzkuemmeloel-nuechterner-magen-wirkung-verdauung.html">
                        <div class="relative h-48 overflow-hidden bg-earth-light">
                            <div class="absolute inset-0 bg-mocha/5 opacity-10 group-hover:opacity-0 transition-opacity duration-500 z-10"></div>
                            <img alt="Schwarzkümmelöl auf nüchternen Magen" class="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105" src="assets/magazin_schwarzkuemmeloel_nuechtern.png"/>
                        </div>
                        <div class="p-5 flex flex-col flex-grow">
                            <span class="text-[10px] uppercase tracking-widest text-sage font-extrabold mb-2 block">Öle & Gesundheit</span>
                            <h3 class="text-lg font-bold font-serif text-mocha mb-2 group-hover:text-gold transition-colors leading-tight line-clamp-2">Schwarzkümmelöl auf nüchternen Magen: Wirkung & Verdauung</h3>
                            <p class="text-ash/70 text-xs mb-4 line-clamp-3 leading-relaxed">Was passiert, wenn man morgens auf nüchternen Magen 1 TL Schwarzkümmelöl trinkt? Schleimhautschutz, Mikrobiom & Blutzucker im Fokus.</p>
                            <div class="flex items-center justify-between text-[10px] text-ash-light font-medium mt-auto pt-4 border-t border-earth-light/60">
                                <span>17. September 2026</span>
                                <span>8 Min. Lesezeit</span>
                            </div>
                        </div>
                    </a>

                    <!-- Card 2: Gökova Goldsesam -->
                    <a class="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1.5 flex flex-col border border-earth-light/50 flex-none w-[85vw] md:w-auto snap-center md:snap-align-none" href="gokova-goldsesam-tahin-superfood-wirkung.html">
                        <div class="relative h-48 overflow-hidden bg-earth-light">
                            <div class="absolute inset-0 bg-mocha/5 opacity-10 group-hover:opacity-0 transition-opacity duration-500 z-10"></div>
                            <img alt="Gökova Goldsesam & Tahin" class="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105" src="assets/magazin_gokova_sesam.png"/>
                        </div>
                        <div class="p-5 flex flex-col flex-grow">
                            <span class="text-[10px] uppercase tracking-widest text-sage font-extrabold mb-2 block">Öle & Superfoods</span>
                            <h3 class="text-lg font-bold font-serif text-mocha mb-2 group-hover:text-gold transition-colors leading-tight line-clamp-2">Gökova Goldsesam: Warum der ägäische Sesam der wertvollste ist</h3>
                            <p class="text-ash/70 text-xs mb-4 line-clamp-3 leading-relaxed">Alles über Gökova Altın Susam (Sesamum indicum): Mikroklima, Trockenanbau, Ark of Taste Schutz, Steinmühlen-Tahin & Nährwerte.</p>
                            <div class="flex items-center justify-between text-[10px] text-ash-light font-medium mt-auto pt-4 border-t border-earth-light/60">
                                <span>27. August 2026</span>
                                <span>9 Min. Lesezeit</span>
                            </div>
                        </div>
                    </a>

                    <!-- Card 3: Gilaburu Saft -->
                    <a class="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1.5 flex flex-col border border-earth-light/50 flex-none w-[85vw] md:w-auto snap-center md:snap-align-none" href="gilaburu-saft-wirkung-beere-gesundheit.html">
                        <div class="relative h-48 overflow-hidden bg-earth-light">
                            <div class="absolute inset-0 bg-mocha/5 opacity-10 group-hover:opacity-0 transition-opacity duration-500 z-10"></div>
                            <img alt="Gilaburu Saft: Wirkung, Ernte & Nierensteine" class="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105" src="assets/magazin_gilaburu.png"/>
                        </div>
                        <div class="p-5 flex flex-col flex-grow">
                            <span class="text-[10px] uppercase tracking-widest text-sage font-extrabold mb-2 block">Melassen & Saft</span>
                            <h3 class="text-lg font-bold font-serif text-mocha mb-2 group-hover:text-gold transition-colors leading-tight line-clamp-2">Gilaburu Saft: Wirkung, Ernte & die Kraft für Nieren & Harnwege</h3>
                            <p class="text-ash/70 text-xs mb-4 line-clamp-3 leading-relaxed">Alles über die anatolische Wunderbeere Gilaburu: Von der frostigen Ernte ve Wasserfermentation bis zur Wirkung bei Nierensteinen.</p>
                            <div class="flex items-center justify-between text-[10px] text-ash-light font-medium mt-auto pt-4 border-t border-earth-light/60">
                                <span>27. August 2026</span>
                                <span>8 Min. Lesezeit</span>
                            </div>
                        </div>
                    </a>

                    <!-- Card 4: Mariendistel & Silymarin -->
                    <a class="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1.5 flex flex-col border border-earth-light/50 flex-none w-[85vw] md:w-auto snap-center md:snap-align-none" href="mariendistel-wirkung-leber-entgiftung.html">
                        <div class="relative h-48 overflow-hidden bg-earth-light">
                            <div class="absolute inset-0 bg-mocha/5 opacity-10 group-hover:opacity-0 transition-opacity duration-500 z-10"></div>
                            <img alt="Mariendistel & Silymarin" class="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105" src="assets/magazin_mariendistel.png"/>
                        </div>
                        <div class="p-5 flex flex-col flex-grow">
                            <span class="text-[10px] uppercase tracking-widest text-sage font-extrabold mb-2 block">Kaltgepresste Öle</span>
                            <h3 class="text-lg font-bold font-serif text-mocha mb-2 group-hover:text-gold transition-colors leading-tight line-clamp-2">Mariendistel & Silymarin: Schutz & Regeneration für die Leber</h3>
                            <p class="text-ash/70 text-xs mb-4 line-clamp-3 leading-relaxed">Wie der Silymarin-Wirkkomplex, Mariendistel-Paste und kaltgepresstes Mariendistelöl die Leber und den Fettstoffwechsel natürlich unterstützen.</p>
                            <div class="flex items-center justify-between text-[10px] text-ash-light font-medium mt-auto pt-4 border-t border-earth-light/60">
                                <span>27. August 2026</span>
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