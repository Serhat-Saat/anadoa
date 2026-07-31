document.addEventListener('DOMContentLoaded', () => {
    const placeholder = document.getElementById('latest-recipes-placeholder');
    if (placeholder) {
        placeholder.innerHTML = `
        <div class="bg-earth py-16 relative overflow-hidden">
            <div class="absolute inset-0 bg-noise opacity-20"></div>
            <div class="max-w-7xl mx-auto pl-6 md:px-6 relative z-10">
                <div class="flex flex-col md:flex-row justify-between items-end mb-10 pr-6 md:pr-0">
                    <div class="mb-4 md:mb-0">
                        <span class="text-sage font-bold tracking-widest uppercase text-sm mb-2 block">Küche & Genuss</span>
                        <h2 class="text-3xl md:text-4xl font-bold font-serif text-mocha">Unsere Lieblingsrezepte</h2>
                        <p class="text-ash-light mt-2 max-w-xl">Lassen Sie sich inspirieren und entdecken Sie köstliche Rezepte aus der anatolischen Naturküche.</p>
                    </div>
                    <a href="rezepte.html" class="inline-flex items-center justify-center px-6 py-3 border-2 border-mocha text-mocha hover:bg-mocha hover:text-white rounded-full font-medium transition-all duration-300 group">
                        Alle Rezepte ansehen
                        <i class="ri-arrow-right-line ml-2 transform group-hover:translate-x-1 transition-transform"></i>
                    </a>
                </div>
                
                <div class="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-6 pr-6 md:pr-0 md:grid md:grid-cols-2 lg:grid-cols-4 md:overflow-visible md:pb-0 custom-scrollbar">
                    <!-- Card 1 -->
                    <a class="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1.5 flex flex-col border border-earth-light/50 flex-none w-[85vw] md:w-auto snap-center md:snap-align-none" href="rezept-anatolische-tarhana-suppe.html">
                        <div class="relative h-48 overflow-hidden bg-earth-light">
                            <div class="absolute inset-0 bg-mocha/5 opacity-10 group-hover:opacity-0 transition-opacity duration-500 z-10"></div>
                            <img alt="Traditionelle Anatolische Tarhana-Suppe" class="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105" src="assets/rezept_tarhana.png"/>
                            <div class="absolute top-3 right-3 bg-white/90 backdrop-blur text-mocha font-bold text-[10px] py-1 px-2 rounded-full shadow-sm z-20">Suppe / Hauptspeise</div>
                        </div>
                        <div class="p-5 flex flex-col flex-grow justify-between">
                            <h3 class="text-lg font-bold font-serif text-mocha mb-3 group-hover:text-gold transition-colors leading-tight">Traditionelle Anatolische Tarhana-Suppe</h3>
                            <span class="inline-flex items-center text-[10px] font-bold text-sage uppercase tracking-wider group-hover:text-gold transition-colors mt-auto">Rezept ansehen <i class="ri-arrow-right-line ml-1"></i></span>
                        </div>
                    </a>

                    <!-- Card 2 -->
                    <a class="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1.5 flex flex-col border border-earth-light/50 flex-none w-[85vw] md:w-auto snap-center md:snap-align-none" href="rezept-zuckerfreier-schoko-kuchen.html">
                        <div class="relative h-48 overflow-hidden bg-earth-light">
                            <div class="absolute inset-0 bg-mocha/5 opacity-10 group-hover:opacity-0 transition-opacity duration-500 z-10"></div>
                            <img alt="Zuckerfreier Schoko-Kuchen" class="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105" src="assets/rezept_kuchen.png"/>
                            <div class="absolute top-3 right-3 bg-white/90 backdrop-blur text-mocha font-bold text-[10px] py-1 px-2 rounded-full shadow-sm z-20">Backen / Dessert</div>
                        </div>
                        <div class="p-5 flex flex-col flex-grow justify-between">
                            <h3 class="text-lg font-bold font-serif text-mocha mb-3 group-hover:text-gold transition-colors leading-tight">Zuckerfreier Schoko-Kuchen</h3>
                            <span class="inline-flex items-center text-[10px] font-bold text-sage uppercase tracking-wider group-hover:text-gold transition-colors mt-auto">Rezept ansehen <i class="ri-arrow-right-line ml-1"></i></span>
                        </div>
                    </a>

                    <!-- Card 3 -->
                    <a class="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1.5 flex flex-col border border-earth-light/50 flex-none w-[85vw] md:w-auto snap-center md:snap-align-none" href="rezept-glutenfreies-fladenbrot.html">
                        <div class="relative h-48 overflow-hidden bg-earth-light">
                            <div class="absolute inset-0 bg-mocha/5 opacity-10 group-hover:opacity-0 transition-opacity duration-500 z-10"></div>
                            <img alt="Glutenfreies Fladenbrot" class="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105" src="assets/rezept_brot.png"/>
                            <div class="absolute top-3 right-3 bg-white/90 backdrop-blur text-mocha font-bold text-[10px] py-1 px-2 rounded-full shadow-sm z-20">Backen / Brot</div>
                        </div>
                        <div class="p-5 flex flex-col flex-grow justify-between">
                            <h3 class="text-lg font-bold font-serif text-mocha mb-3 group-hover:text-gold transition-colors leading-tight">Glutenfreies Fladenbrot</h3>
                            <span class="inline-flex items-center text-[10px] font-bold text-sage uppercase tracking-wider group-hover:text-gold transition-colors mt-auto">Rezept ansehen <i class="ri-arrow-right-line ml-1"></i></span>
                        </div>
                    </a>

                    <!-- Card 4 -->
                    <a class="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1.5 flex flex-col border border-earth-light/50 flex-none w-[85vw] md:w-auto snap-center md:snap-align-none" href="rezept-vegane-tahin-kekse.html">
                        <div class="relative h-48 overflow-hidden bg-earth-light">
                            <div class="absolute inset-0 bg-mocha/5 opacity-10 group-hover:opacity-0 transition-opacity duration-500 z-10"></div>
                            <img alt="Vegane Tahin-Kekse" class="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105" src="assets/rezept_kekse.png"/>
                            <div class="absolute top-3 right-3 bg-white/90 backdrop-blur text-mocha font-bold text-[10px] py-1 px-2 rounded-full shadow-sm z-20">Backen / Kekse</div>
                        </div>
                        <div class="p-5 flex flex-col flex-grow justify-between">
                            <h3 class="text-lg font-bold font-serif text-mocha mb-3 group-hover:text-gold transition-colors leading-tight">Vegane Tahin-Kekse</h3>
                            <span class="inline-flex items-center text-[10px] font-bold text-sage uppercase tracking-wider group-hover:text-gold transition-colors mt-auto">Rezept ansehen <i class="ri-arrow-right-line ml-1"></i></span>
                        </div>
                    </a>
                </div>
            </div>
        </div>
        `;
    }
});
