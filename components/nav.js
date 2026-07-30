const navHTML = `
<!-- Global Navigation -->
<nav class="fixed w-full z-50 top-6 transition-all duration-300" id="global-nav">
  <div class="max-w-[95%] md:max-w-6xl mx-auto relative z-50">
    <div class="bg-[#fbf5eb] border border-earth-light shadow-xl rounded-full px-6 flex justify-between items-center h-[72px] transition-all duration-300 relative" id="nav-container">
      
      <!-- Mobile Menu Button (Left) -->
      <div class="lg:hidden flex items-center flex-1">
        <button aria-label="Toggle Menu" class="text-ash hover:text-gold focus:outline-none p-2 transition-colors relative w-10 h-10 flex items-center justify-center" id="mobile-menu-btn">
          <i id="menu-icon" class="ri-menu-line text-2xl absolute transition-all duration-300"></i>
          <i id="close-icon" class="ri-close-line text-2xl absolute transition-all duration-300 opacity-0 scale-50"></i>
        </button>
      </div>

      <!-- Left Links (Desktop) -->
      <div class="hidden lg:flex items-center justify-end space-x-6 lg:space-x-10 flex-1 pr-4 lg:pr-8">
        <div class="group h-full flex items-center relative">
          <button class="flex items-center text-ash hover:text-gold text-sm uppercase tracking-widest font-bold transition-colors focus:outline-none h-[72px]">
            Über uns
            <i class="ri-arrow-down-s-line ml-1 transition-transform group-hover:rotate-180 text-gold font-bold"></i>
          </button>
          <div class="absolute left-0 top-full w-48 bg-[#fbf5eb] border border-earth-light shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top z-50 rounded-2xl p-4 flex flex-col space-y-3">
            <a class="text-ash hover:text-gold text-sm font-bold transition-colors" href="ueber-uns.html">Über uns</a>
            <a class="text-ash hover:text-gold text-sm font-bold transition-colors" href="philosophie.html">Philosophie</a>
          </div>
        </div>
        <a class="text-ash hover:text-gold text-sm uppercase tracking-widest font-bold transition-colors" href="rezepte.html">Rezepte</a>
      </div>

      <!-- Logo (Center) -->
      <a class="flex-shrink-0 flex justify-center items-center group relative z-50 w-48 lg:w-[260px]" href="index.html">
        <img alt="Anadoa Naturhaus Logo" class="h-16 md:h-24 w-auto object-contain transition-transform duration-500 group-hover:scale-110 drop-shadow-xl scale-125 md:scale-125" src="assets/anadoa-logo-1000-500.png"/>
      </a>

      <!-- Right Links (Desktop) & Search Icon -->
      <div class="hidden lg:flex justify-start items-center space-x-6 lg:space-x-8 h-full flex-1 pl-4 lg:pl-8">
        <a class="text-ash hover:text-gold text-sm uppercase tracking-widest font-bold transition-colors" href="magazin.html">Magazin</a>
        
        <!-- Mega Menu Dropdown -->
        <div class="group h-full flex items-center">
          <button class="flex items-center text-ash hover:text-gold text-sm uppercase tracking-widest font-bold transition-colors focus:outline-none h-full">
            Kategorien
            <i class="ri-arrow-down-s-line ml-1 transition-transform group-hover:rotate-180 text-gold font-bold"></i>
          </button>
          
          <!-- The Dropdown (Tam ortalandı: -translate-x-1/2 eklendi) -->
          <div class="absolute left-1/2 -translate-x-1/2 top-[72px] w-[95vw] max-w-[1250px] bg-[#fbf5eb] border border-earth-light shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top z-50 rounded-3xl mt-4">
            <div class="p-8">
              <div class="grid grid-cols-5 gap-6 items-start">
                
                <!-- Col 1: Oele -->
                <div>
                  <h3 class="font-serif font-bold text-base text-mocha mb-3 border-b border-earth-light pb-2"><a class="hover:text-gold" href="kaltgepresste-oele.html">Kaltgepresste Öle</a></h3>
                  <ul class="space-y-2 text-sm max-h-[220px] overflow-y-auto custom-scrollbar pr-2">
                    <li><a class="text-gold font-medium hover:text-mocha block" href="schwarzkummelol.html">Premium Schwarzkümmelöl</a></li>
                    <li><a class="text-ash-light hover:text-gold block ml-3 text-[11px] uppercase tracking-wider" href="schwarzkummelol-fuer-kinder.html">↳ Für Kinder (Orange)</a></li>
                    <li><a class="text-ash-light hover:text-gold block ml-3 text-[11px] uppercase tracking-wider" href="schwarzkummelol-kinder-erdbeer.html">↳ Für Kinder (Erdbeer)</a></li>
                    <li><a class="text-ash-light hover:text-gold block ml-3 mb-2 text-[11px] uppercase tracking-wider" href="schwarzkummelol-mit-minze.html">↳ Mit Minze</a></li>
                    <li><a class="text-ash-light hover:text-gold block" href="leinoel.html">Leinöl</a></li>
                    <li><a class="text-ash-light hover:text-gold block" href="kuerbiskernoel.html">Kürbiskernöl</a></li>
                    <li><a class="text-ash-light hover:text-gold block" href="granatapfelkernoel.html">Granatapfelkernöl</a></li>
                    <li><a class="text-ash-light hover:text-gold block" href="walnussoel.html">Walnussöl</a></li>
                    <li><a class="text-ash-light hover:text-gold block" href="mandelol.html">Mandelöl</a></li>
                    <li><a class="text-ash-light hover:text-gold block" href="jojobaoel.html">Jojobaöl</a></li>
                    <li><a class="text-ash-light hover:text-gold block" href="aprikosenkernoel.html">Aprikosenkernöl</a></li>
                    <li><a class="text-ash-light hover:text-gold block" href="traubenkernoel.html">Traubenkernöl</a></li>
                    <li><a class="text-ash-light hover:text-gold block" href="sesamoel.html">Sesamöl</a></li>
                    <li><a class="text-ash-light hover:text-gold block" href="hanfoel.html">Hanföl</a></li>
                    <li><a class="text-ash-light hover:text-gold block" href="nachtkerzenoel.html">Nachtkerzenöl</a></li>
                    <li><a class="text-ash-light hover:text-gold block" href="arganoel.html">Arganöl</a></li>
                    <li><a class="text-sage hover:text-gold block mt-2 text-xs uppercase tracking-wider font-bold" href="kaltgepresste-oele.html">Alle 29 Öle ansehen →</a></li>
                  </ul>
                  <h3 class="font-serif font-bold text-base text-mocha mb-3 border-b border-earth-light pb-2 mt-5"><a class="hover:text-gold" href="pflanzenwasser.html">Pflanzenwasser</a></h3>
                  <ul class="space-y-2 text-sm mb-5">
                    <li><a class="text-ash-light hover:text-gold block" href="rosenwasser.html">Rosenwasser (Gül Suyu)</a></li>
                    <li><a class="text-ash-light hover:text-gold block" href="rosmarinwasser.html">Rosmarinwasser</a></li>
                  </ul>
                </div>

                <!-- Col 2: Ätherische Öle & Gewürze -->
                <div>
                  <h3 class="font-serif font-bold text-base text-mocha mb-3 border-b border-earth-light pb-2"><a class="hover:text-gold" href="aetherische-oele.html">Ätherische Öle</a></h3>
                  <ul class="space-y-2 text-sm max-h-[220px] overflow-y-auto custom-scrollbar pr-2">
                    <li><a class="text-ash-light hover:text-gold block" href="lavendeloel.html">Lavendelöl</a></li>
                    <li><a class="text-ash-light hover:text-gold block" href="rosenoel.html">Rosenöl</a></li>
                    <li><a class="text-ash-light hover:text-gold block" href="teebaumoel.html">Teebaumöl</a></li>
                    <li><a class="text-ash-light hover:text-gold block" href="pfefferminzoel.html">Pfefferminzöl</a></li>
                    <li><a class="text-ash-light hover:text-gold block" href="weihrauchoel.html">Weihrauchöl</a></li>
                    <li><a class="text-ash-light hover:text-gold block" href="eukalyptusoel.html">Eukalyptusöl</a></li>
                    <li><a class="text-ash-light hover:text-gold block" href="zitronenoel.html">Zitronenöl</a></li>
                    <li><a class="text-ash-light hover:text-gold block" href="orangenoel.html">Orangenöl</a></li>
                    <li><a class="text-ash-light hover:text-gold block" href="oreganool.html">Oreganoöl</a></li>
                    <li><a class="text-ash-light hover:text-gold block" href="nelkenoel.html">Nelkenöl</a></li>
                    <li><a class="text-ash-light hover:text-gold block" href="zirbenoel.html">Zirbenöl</a></li>
                    <li><a class="text-ash-light hover:text-gold block" href="bergamotteoel.html">Bergamotteöl</a></li>
                    <li><a class="text-sage hover:text-gold block mt-2 text-xs uppercase tracking-wider font-bold" href="aetherische-oele.html">Alle 30 Öle ansehen →</a></li>
                  </ul>
                  <h3 class="font-serif font-bold text-base text-mocha mb-3 border-b border-earth-light pb-2 mt-5"><a class="hover:text-gold" href="gewuerze.html">Natürliche Gewürze</a></h3>
                  <ul class="space-y-2 text-sm mb-4">
                    <li><a class="text-ash-light hover:text-gold block" href="sumach-kerne.html">Sumach Kerne</a></li>
                    <li><a class="text-ash-light hover:text-gold block" href="sumach-pulver.html">Sumach Pulver</a></li>
                    <li><a class="text-ash-light hover:text-gold block" href="tuerkischer-oregano.html">Türkischer Oregano</a></li>
                  </ul>
                </div>

                <!-- Col 3: Pasten, Naturkosmetik & Essig/Säfte (Essig buraya taşındı) -->
                <div>
                  <h3 class="font-serif font-bold text-base text-mocha mb-3 border-b border-earth-light pb-2"><a class="hover:text-gold" href="pasten.html">Traditionelle Pasten</a></h3>
                  <ul class="space-y-2 text-sm mb-6">
                    <li><a class="text-ash-light hover:text-gold block" href="zypressenzapfen-paste.html">Zypressenzapfen Paste</a></li>
                    <li><a class="text-ash-light hover:text-gold block" href="tannenzapfen-paste-kinder.html">Tannenzapfen Paste (Kinder)</a></li>
                    <li><a class="text-ash-light hover:text-gold block" href="mariendistel-paste.html">Mariendistel Paste</a></li>
                    <li><a class="text-ash-light hover:text-gold block" href="paste-fuer-maenner.html">Paste für Männer (Mesir)</a></li>
                    <li><a class="text-ash-light hover:text-gold block" href="paste-fuer-frauen.html">Paste für Frauen (Kadın)</a></li>
                    <li><a class="text-ash-light hover:text-gold block" href="bittermelone-paste-honig.html">Bittermelone Paste</a></li>
                    <li><a class="text-ash-light hover:text-gold block" href="tahini.html">Tahini (Sesammus)</a></li>
                  </ul>
                  <h3 class="font-serif font-bold text-base text-mocha mb-3 border-b border-earth-light pb-2 mt-5"><a class="hover:text-gold" href="rushur-stein.html">Naturkosmetik & Peeling</a></h3>
                  <ul class="space-y-2 text-sm mb-5">
                    <li><a class="text-gold font-bold hover:text-mocha block" href="rushur-stein.html">Rushur Stein (5er Set)</a></li>
                  </ul>
                  
                  <!-- Lebendiger Essig & Säfte buraya, Naturkosmetik altına alındı -->
                  <h3 class="font-serif font-bold text-base text-mocha mb-3 border-b border-earth-light pb-2 mt-5"><a class="hover:text-gold" href="essig.html">Lebendiger Essig & Säfte</a></h3>
                  <ul class="space-y-2 text-sm">
                    <li><a class="text-gold font-medium hover:text-mocha block" href="gilaburu-saft.html">Gilaburu Saft</a></li>
                    <li><a class="text-ash-light hover:text-gold block" href="apfelessig.html">Apfelessig</a></li>
                    <li><a class="text-ash-light hover:text-gold block" href="traubenessig.html">Traubenessig</a></li>
                    <li><a class="text-ash-light hover:text-gold block" href="weissdorn-essig.html">Weißdorn Essig</a></li>
                  </ul>
                </div>

                <!-- Col 4: Melassen & Tees -->
                <div>
                  <h3 class="font-serif font-bold text-base text-mocha mb-3 border-b border-earth-light pb-2"><a class="hover:text-gold" href="melassen.html">Melassen (Pekmez)</a></h3>
                  <ul class="space-y-2 text-sm mb-5">
                    <li><a class="text-ash-light hover:text-gold block" href="traubenmelasse.html">Traubenmelasse</a></li>
                    <li><a class="text-ash-light hover:text-gold block" href="johannisbrot-melasse.html">Johannisbrot Melasse</a></li>
                    <li><a class="text-ash-light hover:text-gold block" href="wacholderbeeren-melasse.html">Wacholderbeeren</a></li>
                    <li><a class="text-ash-light hover:text-gold block" href="maulbeeren-melasse.html">Maulbeeren Melasse</a></li>
                    <li><a class="text-ash-light hover:text-gold block" href="dattel-melasse.html">Dattel Melasse</a></li>
                  </ul>
                  <h3 class="font-serif font-bold text-base text-mocha mb-3 border-b border-earth-light pb-2 mt-5"><a class="hover:text-gold" href="tee.html">Naturtee & Kuren</a></h3>
                  <ul class="space-y-2 text-sm mb-6 max-h-[140px] overflow-y-auto custom-scrollbar pr-2">
                    <li><a class="text-ash-light hover:text-gold block" href="spitzwegerich-tee.html">Spitzwegerich Tee</a></li>
                    <li><a class="text-ash-light hover:text-gold block" href="kirschstiel-tee.html">Kirschstiel Tee</a></li>
                    <li><a class="text-ash-light hover:text-gold block" href="atom-tee.html">Atom Tee (Winter-Mix)</a></li>
                    <li><a class="text-ash-light hover:text-gold block" href="schopflavendel-tee.html">Schopflavendel Tee</a></li>
                    <li><a class="text-sage hover:text-gold block mt-2 text-xs uppercase tracking-wider font-bold" href="tee.html">Alle 15 Tees ansehen →</a></li>
                  </ul>
                </div>

                <!-- Col 5: Promo -->
                <div class="flex flex-col min-h-0">
                  <div class="rounded-2xl overflow-hidden relative group/promo shadow-lg border border-gold/20" style="min-height:280px">
                    <img alt="Premium Produkte" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover/promo:scale-110" src="assets/zypressenzapfen-paste-anadoa-naturhaus.png"/>
                    <div class="absolute inset-0 bg-gradient-to-t from-mocha/90 via-mocha/40 to-transparent flex flex-col items-center justify-end p-6">
                      <span class="text-earth font-serif text-xl text-center drop-shadow-md mb-2">Entdecken Sie die Essenz der Natur</span>
                      <a class="inline-block mt-3 px-5 py-2 bg-gold text-white text-sm font-medium rounded-full shadow-md hover:bg-white hover:text-mocha transition-colors" href="zypressenzapfen-paste.html">Zum Bestseller</a>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Search Icon (Right) -->
<div class="flex items-center justify-end flex-1 lg:flex-none">
        <button aria-label="Suche öffnen" id="search-open-btn" class="text-ash hover:text-gold focus:outline-none p-2 transition-colors">
          <i class="ri-search-line text-2xl"></i>
        </button>
      </div>

    </div>
  </div>

  <!-- Mobile Drawer Menu -->
  <div class="fixed inset-0 bg-[#fbf5eb] z-40 transition-all duration-500 opacity-0 pointer-events-none lg:hidden flex flex-col" id="mobile-menu">
    <div class="flex-1 overflow-y-auto pt-32 pb-20 px-8 flex flex-col gap-8 custom-scrollbar">
      
      <nav class="flex flex-col space-y-6">
        <!-- Über uns Accordion -->
        <div class="w-full">
          <button class="w-full text-left flex justify-between items-center text-4xl md:text-5xl font-serif text-mocha hover:text-gold transition-colors group" onclick="this.nextElementSibling.classList.toggle('max-h-0'); this.nextElementSibling.classList.toggle('max-h-[200px]'); this.nextElementSibling.classList.toggle('mt-4'); this.nextElementSibling.classList.toggle('opacity-0'); this.querySelector('svg').classList.toggle('rotate-180');">
            Über uns
            <i class="ri-arrow-down-s-line text-gold text-2xl transition-transform duration-300"></i>
          </button>
          <div class="max-h-0 opacity-0 overflow-hidden transition-all duration-500 ease-in-out px-2 space-y-4 flex flex-col">
            <a class="text-xl font-serif text-mocha hover:text-gold transition-colors block pl-6 mt-2" href="ueber-uns.html">Über uns</a>
            <a class="text-xl font-serif text-mocha hover:text-gold transition-colors block pl-6" href="philosophie.html">Philosophie</a>
          </div>
        </div>
        <a class="text-4xl md:text-5xl font-serif text-mocha hover:text-gold transition-colors block mobile-link" href="rezepte.html">Rezepte</a>
        <a class="text-4xl md:text-5xl font-serif text-mocha hover:text-gold transition-colors block mobile-link" href="magazin.html">Magazin</a>
      </nav>

      <hr class="border-earth-light my-2"/>

      <!-- Mobile Categories Accordion -->
      <div class="space-y-6">
        <h2 class="text-xs uppercase tracking-[0.2em] text-ash/50 font-bold mb-4">Unsere Kategorien</h2>
        
        <!-- 1. Kaltgepresste Öle -->
        <div class="border-b border-earth-light pb-4">
          <button class="w-full text-left flex justify-between items-center text-2xl font-serif text-mocha hover:text-gold transition-colors group" onclick="this.nextElementSibling.classList.toggle('max-h-0'); this.nextElementSibling.classList.toggle('max-h-[500px]'); this.nextElementSibling.classList.toggle('mt-4'); this.nextElementSibling.classList.toggle('opacity-0'); this.querySelector('svg').classList.toggle('rotate-180');">
            Kaltgepresste Öle
            <i class="ri-arrow-down-s-line text-gold text-2xl transition-transform duration-300"></i>
          </button>
          <div class="max-h-0 opacity-0 overflow-hidden transition-all duration-500 ease-in-out px-2 space-y-4">
            <a class="block text-gold font-bold text-lg mb-2 uppercase tracking-widest text-sm" href="kaltgepresste-oele.html">Übersicht ansehen</a>
            <a class="block text-ash hover:text-gold text-lg font-light" href="schwarzkummelol.html">Premium Schwarzkümmelöl</a>
            <a class="block text-ash hover:text-gold text-lg font-light" href="leinoel.html">Leinöl</a>
            <a class="block text-ash hover:text-gold text-lg font-light" href="kuerbiskernoel.html">Kürbiskernöl</a>
            <a class="block text-ash hover:text-gold text-lg font-light" href="walnussoel.html">Walnussöl</a>
            <a class="block text-ash hover:text-gold text-lg font-light" href="arganoel.html">Arganöl</a>
          </div>
        </div>

        <!-- 2. Pflanzenwasser -->
        <div class="border-b border-earth-light pb-4">
          <button class="w-full text-left flex justify-between items-center text-2xl font-serif text-mocha hover:text-gold transition-colors group" onclick="this.nextElementSibling.classList.toggle('max-h-0'); this.nextElementSibling.classList.toggle('max-h-[300px]'); this.nextElementSibling.classList.toggle('mt-4'); this.nextElementSibling.classList.toggle('opacity-0'); this.querySelector('svg').classList.toggle('rotate-180');">
            Pflanzenwasser
            <i class="ri-arrow-down-s-line text-gold text-2xl transition-transform duration-300"></i>
          </button>
          <div class="max-h-0 opacity-0 overflow-hidden transition-all duration-500 ease-in-out px-2 space-y-4">
            <a class="block text-gold font-bold text-lg mb-2 uppercase tracking-widest text-sm" href="pflanzenwasser.html">Übersicht ansehen</a>
            <a class="block text-ash hover:text-gold text-lg font-light" href="rosenwasser.html">Rosenwasser (Gül Suyu)</a>
            <a class="block text-ash hover:text-gold text-lg font-light" href="rosmarinwasser.html">Rosmarinwasser</a>
          </div>
        </div>

        <!-- 3. Ätherische Öle -->
        <div class="border-b border-earth-light pb-4">
          <button class="w-full text-left flex justify-between items-center text-2xl font-serif text-mocha hover:text-gold transition-colors group" onclick="this.nextElementSibling.classList.toggle('max-h-0'); this.nextElementSibling.classList.toggle('max-h-[500px]'); this.nextElementSibling.classList.toggle('mt-4'); this.nextElementSibling.classList.toggle('opacity-0'); this.querySelector('svg').classList.toggle('rotate-180');">
            Ätherische Öle
            <i class="ri-arrow-down-s-line text-gold text-2xl transition-transform duration-300"></i>
          </button>
          <div class="max-h-0 opacity-0 overflow-hidden transition-all duration-500 ease-in-out px-2 space-y-4">
            <a class="block text-gold font-bold text-lg mb-2 uppercase tracking-widest text-sm" href="aetherische-oele.html">Übersicht ansehen</a>
            <a class="block text-ash hover:text-gold text-lg font-light" href="lavendeloel.html">Lavendelöl</a>
            <a class="block text-ash hover:text-gold text-lg font-light" href="rosenoel.html">Rosenöl</a>
            <a class="block text-ash hover:text-gold text-lg font-light" href="teebaumoel.html">Teebaumöl</a>
            <a class="block text-ash hover:text-gold text-lg font-light" href="pfefferminzoel.html">Pfefferminzöl</a>
          </div>
        </div>

        <!-- 4. Natürliche Gewürze -->
        <div class="border-b border-earth-light pb-4">
          <button class="w-full text-left flex justify-between items-center text-2xl font-serif text-mocha hover:text-gold transition-colors group" onclick="this.nextElementSibling.classList.toggle('max-h-0'); this.nextElementSibling.classList.toggle('max-h-[300px]'); this.nextElementSibling.classList.toggle('mt-4'); this.nextElementSibling.classList.toggle('opacity-0'); this.querySelector('svg').classList.toggle('rotate-180');">
            Natürliche Gewürze
            <i class="ri-arrow-down-s-line text-gold text-2xl transition-transform duration-300"></i>
          </button>
          <div class="max-h-0 opacity-0 overflow-hidden transition-all duration-500 ease-in-out px-2 space-y-4">
            <a class="block text-gold font-bold text-lg mb-2 uppercase tracking-widest text-sm" href="gewuerze.html">Übersicht ansehen</a>
            <a class="block text-ash hover:text-gold text-lg font-light" href="sumach-kerne.html">Sumach Kerne</a>
            <a class="block text-ash hover:text-gold text-lg font-light" href="sumach-pulver.html">Sumach Pulver</a>
            <a class="block text-ash hover:text-gold text-lg font-light" href="tuerkischer-oregano.html">Türkischer Oregano</a>
          </div>
        </div>

        <!-- 5. Traditionelle Pasten -->
        <div class="border-b border-earth-light pb-4">
          <button class="w-full text-left flex justify-between items-center text-2xl font-serif text-mocha hover:text-gold transition-colors group" onclick="this.nextElementSibling.classList.toggle('max-h-0'); this.nextElementSibling.classList.toggle('max-h-[500px]'); this.nextElementSibling.classList.toggle('mt-4'); this.nextElementSibling.classList.toggle('opacity-0'); this.querySelector('svg').classList.toggle('rotate-180');">
            Traditionelle Pasten
            <i class="ri-arrow-down-s-line text-gold text-2xl transition-transform duration-300"></i>
          </button>
          <div class="max-h-0 opacity-0 overflow-hidden transition-all duration-500 ease-in-out px-2 space-y-4">
            <a class="block text-gold font-bold text-lg mb-2 uppercase tracking-widest text-sm" href="pasten.html">Übersicht ansehen</a>
            <a class="block text-ash hover:text-gold text-lg font-light" href="zypressenzapfen-paste.html">Zypressenzapfen Paste</a>
            <a class="block text-ash hover:text-gold text-lg font-light" href="tannenzapfen-paste-kinder.html">Tannenzapfen Paste (Kinder)</a>
            <a class="block text-ash hover:text-gold text-lg font-light" href="mariendistel-paste.html">Mariendistel Paste</a>
          </div>
        </div>

        <!-- 6. Naturkosmetik & Peeling -->
        <div class="border-b border-earth-light pb-4">
          <button class="w-full text-left flex justify-between items-center text-2xl font-serif text-mocha hover:text-gold transition-colors group" onclick="this.nextElementSibling.classList.toggle('max-h-0'); this.nextElementSibling.classList.toggle('max-h-[300px]'); this.nextElementSibling.classList.toggle('mt-4'); this.nextElementSibling.classList.toggle('opacity-0'); this.querySelector('svg').classList.toggle('rotate-180');">
            Naturkosmetik &amp; Peeling
            <i class="ri-arrow-down-s-line text-gold text-2xl transition-transform duration-300"></i>
          </button>
          <div class="max-h-0 opacity-0 overflow-hidden transition-all duration-500 ease-in-out px-2 space-y-4">
            <a class="block text-gold font-bold text-lg mb-2 uppercase tracking-widest text-sm" href="rushur-stein.html">Übersicht ansehen</a>
            <a class="block text-ash hover:text-gold text-lg font-light" href="rushur-stein.html">Rushur Stein (5er Set)</a>
          </div>
        </div>

        <!-- 7. Lebendiger Essig & Säfte -->
        <div class="border-b border-earth-light pb-4">
          <button class="w-full text-left flex justify-between items-center text-2xl font-serif text-mocha hover:text-gold transition-colors group" onclick="this.nextElementSibling.classList.toggle('max-h-0'); this.nextElementSibling.classList.toggle('max-h-[400px]'); this.nextElementSibling.classList.toggle('mt-4'); this.nextElementSibling.classList.toggle('opacity-0'); this.querySelector('svg').classList.toggle('rotate-180');">
            Lebendiger Essig &amp; Säfte
            <i class="ri-arrow-down-s-line text-gold text-2xl transition-transform duration-300"></i>
          </button>
          <div class="max-h-0 opacity-0 overflow-hidden transition-all duration-500 ease-in-out px-2 space-y-4">
            <a class="block text-gold font-bold text-lg mb-2 uppercase tracking-widest text-sm" href="essig.html">Übersicht ansehen</a>
            <a class="block text-ash hover:text-gold text-lg font-light" href="gilaburu-saft.html">Gilaburu Saft</a>
            <a class="block text-ash hover:text-gold text-lg font-light" href="apfelessig.html">Apfelessig</a>
            <a class="block text-ash hover:text-gold text-lg font-light" href="traubenessig.html">Traubenessig</a>
          </div>
        </div>

        <!-- 8. Melassen (Pekmez) -->
        <div class="border-b border-earth-light pb-4">
          <button class="w-full text-left flex justify-between items-center text-2xl font-serif text-mocha hover:text-gold transition-colors group" onclick="this.nextElementSibling.classList.toggle('max-h-0'); this.nextElementSibling.classList.toggle('max-h-[400px]'); this.nextElementSibling.classList.toggle('mt-4'); this.nextElementSibling.classList.toggle('opacity-0'); this.querySelector('svg').classList.toggle('rotate-180');">
            Melassen (Pekmez)
            <i class="ri-arrow-down-s-line text-gold text-2xl transition-transform duration-300"></i>
          </button>
          <div class="max-h-0 opacity-0 overflow-hidden transition-all duration-500 ease-in-out px-2 space-y-4">
            <a class="block text-gold font-bold text-lg mb-2 uppercase tracking-widest text-sm" href="melassen.html">Übersicht ansehen</a>
            <a class="block text-ash hover:text-gold text-lg font-light" href="traubenmelasse.html">Traubenmelasse</a>
            <a class="block text-ash hover:text-gold text-lg font-light" href="johannisbrot-melasse.html">Johannisbrot Melasse</a>
            <a class="block text-ash hover:text-gold text-lg font-light" href="dattel-melasse.html">Dattel Melasse</a>
          </div>
        </div>

        <!-- 9. Naturtee & Kuren -->
        <div class="border-b border-earth-light pb-4">
          <button class="w-full text-left flex justify-between items-center text-2xl font-serif text-mocha hover:text-gold transition-colors group" onclick="this.nextElementSibling.classList.toggle('max-h-0'); this.nextElementSibling.classList.toggle('max-h-[400px]'); this.nextElementSibling.classList.toggle('mt-4'); this.nextElementSibling.classList.toggle('opacity-0'); this.querySelector('svg').classList.toggle('rotate-180');">
            Naturtee &amp; Kuren
            <i class="ri-arrow-down-s-line text-gold text-2xl transition-transform duration-300"></i>
          </button>
          <div class="max-h-0 opacity-0 overflow-hidden transition-all duration-500 ease-in-out px-2 space-y-4">
            <a class="block text-gold font-bold text-lg mb-2 uppercase tracking-widest text-sm" href="tee.html">Übersicht ansehen</a>
            <a class="block text-ash hover:text-gold text-lg font-light" href="spitzwegerich-tee.html">Spitzwegerich Tee</a>
            <a class="block text-ash hover:text-gold text-lg font-light" href="atom-tee.html">Atom Tee (Winter-Mix)</a>
            <a class="block text-ash hover:text-gold text-lg font-light" href="schopflavendel-tee.html">Schopflavendel Tee</a>
          </div>
        </div>
      </div>
      </div>

      <div class="mt-4 mb-4">
        <div class="bg-earth-light/30 rounded-2xl p-5 border border-earth-light text-center relative overflow-hidden group">
          <div class="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <p class="text-ash/60 text-xs mb-2 relative z-10 uppercase tracking-widest">Kundenservice</p>
          <p class="text-mocha font-serif text-base mb-4 relative z-10">Haben Sie Fragen zu unseren Naturkuren?</p>
          <a class="inline-block bg-gold text-white font-bold py-2.5 px-6 rounded-full shadow-lg text-xs relative z-10 hover:bg-mocha transition-colors duration-300" href="tel:+490000000">
            Kundenservice anrufen
          </a>
        </div>
      </div>

    </div>
  </div>
</nav>

<!-- SEARCH MODAL -->
<div id="search-modal" class="fixed inset-0 bg-mocha/60 backdrop-blur-md z-50 flex items-start justify-center pt-28 px-4 opacity-0 pointer-events-none transition-all duration-300">
  <div class="bg-[#fbf5eb] w-full max-w-2xl rounded-3xl p-6 md:p-8 shadow-2xl border border-earth-light relative flex flex-col max-h-[80vh]">
    <button id="search-close-btn" class="absolute top-6 right-6 text-ash hover:text-gold p-2 rounded-full transition-colors">
      <i class="ri-close-line text-2xl"></i>
    </button>
    <h3 class="font-serif text-2xl text-mocha mb-4 flex-shrink-0">Produkte suchen</h3>
    <div class="relative flex-shrink-0">
      <input type="text" id="search-input" placeholder="z.B. Schwarzkümmelöl, Atom Tee, Rushur Stein..." class="w-full bg-white border border-earth-light rounded-full py-4 pl-12 pr-6 text-ash placeholder-ash/40 focus:outline-none focus:border-gold shadow-inner text-base">
      <i class="ri-search-line text-lg text-ash/40 absolute left-4 top-1/2 -translate-y-1/2"></i>
    </div>
    
    <!-- Search Results Container -->
    <div id="search-results" class="mt-6 overflow-y-auto custom-scrollbar flex-1 pr-2 space-y-3 hidden">
      <!-- Results will be dynamically populated here -->
    </div>
    
    <div class="mt-6 text-xs text-ash/60 tracking-wider uppercase flex-shrink-0">
      Beliebte Suchen: 
      <button class="popular-search-tag text-gold font-medium hover:underline focus:outline-none ml-1 lowercase">Schwarzkümmelöl</button>, 
      <button class="popular-search-tag text-gold font-medium hover:underline focus:outline-none ml-1 lowercase">Gilaburu Saft</button>, 
      <button class="popular-search-tag text-gold font-medium hover:underline focus:outline-none ml-1 lowercase">Rushur Stein</button>, 
      <button class="popular-search-tag text-gold font-medium hover:underline focus:outline-none ml-1 lowercase">Zypressenzapfen Paste</button>
    </div>
  </div>
</div>
`;

// HTML Injection
const placeholder = document.getElementById('nav-placeholder');
if (placeholder) {
  placeholder.outerHTML = navHTML;
}

// Navigation Handler Functionality
function initNavigation() {
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIcon = document.getElementById('menu-icon');
  const closeIcon = document.getElementById('close-icon');

  const searchOpenBtn = document.getElementById('search-open-btn');
  const searchCloseBtn = document.getElementById('search-close-btn');
  const searchModal = document.getElementById('search-modal');
  const searchInput = document.getElementById('search-input');
  const searchResults = document.getElementById('search-results');

  if (!mobileBtn || !mobileMenu) return;
  // SEARCH_INDEX_START
  const searchIndex = [
    {
      "title": "Aetherische Oele - 100% Naturreine Essenzen",
      "description": "Entdecken Sie unsere Kollektion an 100% naturreinen aetherischen Oelen. Von beruhigendem Lavendel bis zu kraeftigem Oregano - die konzentrierte Kraft der Natur.",
      "h1": "Aetherische Oele",
      "url": "aetherische-oele.html",
      "image": "assets/anadoa-logo-1100-1100.png",
      "category": "Kaltgepresste Öle",
      "keywords": ""
    },
    {
      "title": "Ananas Essig",
      "description": "Tropische Fermentation | Enzym-Kraftpaket",
      "h1": "Ananas Essig",
      "url": "ananas-essig.html",
      "image": "assets/ananas-essig-anadoa-naturhaus.png",
      "category": "Lebendige Essige",
      "keywords": "apple cider vinegar, vinegar, elma sirkesi, sirke, alıç sirkesi, alic sirkesi"
    },
    {
      "title": "Apfelessig",
      "description": "Talkim Apfel | Naturtrüb & Lebendig",
      "h1": "Apfelessig",
      "url": "apfelessig.html",
      "image": "assets/apfelessig-anadoa-naturhaus.png",
      "category": "Lebendige Essige",
      "keywords": "apple cider vinegar, vinegar, elma sirkesi, sirke, alıç sirkesi, alic sirkesi"
    },
    {
      "title": "Aprikosenkernöl Kaltgepresst 100% Nativ (Prunus armeniaca)",
      "description": "Das seidenweiche Gesichtsöl: Kaltgepresstes Aprikosenkernöl. Zieht extrem schnell ein, verleiht einen frischen Glow und ist perfekt für empfindliche Babyhaut.",
      "h1": "Aprikosenkernöl",
      "url": "aprikosenkernoel.html",
      "image": "assets/anadoa-logo-1100-1100.png",
      "category": "Kaltgepresste Öle",
      "keywords": "apricot kernel oil, apricot, kayısı çekirdeği yağı, kayisi cekirdegi"
    },
    {
      "title": "Arganöl Kaltgepresst 100% Nativ Kosmetik (Argania spinosa)",
      "description": "Das Gold Marokkos: Ungeröstetes, kaltgepresstes Arganöl. Das ultimative Anti-Aging-Öl für Gesicht, Haare und rissige Haut. Nicht komedogen. Ratgeber.",
      "h1": "Arganöl",
      "url": "arganoel.html",
      "image": "assets/arganoel-anadoa-naturhaus.png",
      "category": "Kaltgepresste Öle",
      "keywords": "argan oil, argan, argan yağı, argan yagi"
    },
    {
      "title": "Artischockenblätter Tee kaufen",
      "description": "Premium Artischockenblätter Tee (Enginar Yaprağı). Ein extrem starkes Bitterkraut aus der Ägäis zur Reinigung der Leber, Förderung der Galle und Cholesterinsenkung.",
      "h1": "Artischockenblätter Tee (Enginar Yaprağı)",
      "url": "artischockenblaetter-tee.html",
      "image": "assets/artischockenblaetter-tee-anadoa-naturhaus.png",
      "category": "Tee",
      "keywords": ""
    },
    {
      "title": "Atom Tee kaufen",
      "description": "Original türkischer Atom Tee. Die kraftvolle, wärmende Gewürzmischung aus Ingwer, Zimt, Galgant und Nelken zur Stärkung des Immunsystems.",
      "h1": "Atom Tee (Türkischer Wintertee)",
      "url": "atom-tee.html",
      "image": "assets/atom_tee.png",
      "category": "Tee",
      "keywords": ""
    },
    {
      "title": "Avocadoöl Kaltgepresst 100% Nativ (Persea gratissima)",
      "description": "Der grüne Retter für trockene Haut: Kaltgepresstes natives Avocadoöl. Extrem reichhaltig, zieht tief ein und repariert rissige Haut und spröde Haare. Ratgeber.",
      "h1": "Avocadoöl",
      "url": "avocadooel.html",
      "image": "assets/anadoa-logo-1100-1100.png",
      "category": "Kaltgepresste Öle",
      "keywords": ""
    },
    {
      "title": "Bergamotteöl 100% Naturrein (Citrus bergamia)",
      "description": "Das stärkste natürliche Antidepressivum: Echtes Bergamotteöl. Wirkt extrem stimmungsaufhellend, angstlösend und entspannend. Anwendung & Sicherheit.",
      "h1": "Bergamotteöl",
      "url": "bergamotteoel.html",
      "image": "assets/bergamotte-oel-anadoa-naturhaus.png",
      "category": "Ätherische Öle",
      "keywords": "bergamot oil, bergamot, bergamot yağı, bergamot yagi"
    },
    {
      "title": "Bittermelone Paste mit Honig",
      "description": "Original Kudret Narı (Bittermelone) mit reinem Honig. Das traditionelle Naturheilmittel zur Beruhigung von Magen und Verdauungssystem.",
      "h1": "Bittermelone Paste mit Honig",
      "url": "bittermelone-paste-honig.html",
      "image": "assets/bittermelone-paste-mit-honig-anadoa-naturhaus.png",
      "category": "Traditionelle Pasten",
      "keywords": ""
    },
    {
      "title": "Bittermelone mit Olivenöl",
      "description": "Bittermelone (Kudret Narı) mazeriert in kaltgepresstem Olivenöl. Natürlicher Balsam für die Magenschleimhaut bei Sodbrennen und Gastritis.",
      "h1": "Bittermelone Paste mit Olivenöl",
      "url": "bittermelone-paste-olivenoel.html",
      "image": "assets/product_dekupe-bittermelone-paste-mit-olivenoel.png",
      "category": "Kaltgepresste Öle",
      "keywords": "olive oil, olive, zeytinyağı, zeytin yagi"
    },
    {
      "title": "Borretschöl Kaltgepresst 100% Nativ (Borago officinalis)",
      "description": "Der Weltmeister bei Neurodermitis: Kaltgepresstes Borretschöl. Liefert über 20% Gamma-Linolensäure (GLA) gegen Juckreiz, Akne und extreme Hautentzündungen.",
      "h1": "Borretschöl",
      "url": "borretschoel.html",
      "image": "assets/borretschoel.png",
      "category": "Kaltgepresste Öle",
      "keywords": "borage oil, borage starflower, hodan yağı, hodan yagi"
    },
    {
      "title": "Brokkolisamenöl Kaltgepresst 100% Nativ (Brassica oleracea)",
      "description": "Der natürliche Silikon-Ersatz für die Haare: Kaltgepresstes Brokkolisamenöl. Stoppt Frizz, sorgt für extremen Glanz ohne zu beschweren und glättet reife Haut.",
      "h1": "Brokkolisamenöl",
      "url": "brokkolisamenoel.html",
      "image": "assets/brokkolisamenoel.png",
      "category": "Kaltgepresste Öle",
      "keywords": ""
    },
    {
      "title": "Cajeputöl 100% Naturrein (Melaleuca leucadendron)",
      "description": "Der milde Teebaum: Echtes Cajeputöl. Der Spezialist der Aromatherapie gegen Ohrenschmerzen, Erkältungen bei Kindern und Muskelverspannungen. Ratgeber.",
      "h1": "Cajeputöl",
      "url": "cajeputoel.html",
      "image": "assets/cajeputoel.png",
      "category": "Ätherische Öle",
      "keywords": ""
    },
    {
      "title": "Dattel Melasse (Hurma Pekmezi)",
      "description": "Verdauungsfreundliche Dattelmelasse. Reich an Ballaststoffen, Kalium und Magnesium. Die perfekte vegane Honig-Alternative für Pancakes.",
      "h1": "Dattel Melasse (Hurma Pekmezi)",
      "url": "dattel-melasse.html",
      "image": "assets/dattel-melasse-anadoa-naturhaus.png",
      "category": "Melassen (Pekmez)",
      "keywords": "grape molasses, grape syrup, carob, keçiboynuzu, pekmez, üzüm pekmezi, harnup pekmezi"
    },
    {
      "title": "Detox Mix Elixier",
      "description": "Kräutermischung mit Apfelessig & Rosmarin",
      "h1": "Detox Mix Elixier",
      "url": "detox-mix.html",
      "image": "assets/detox-und-form-pulver-anadoa-naturhaus.png",
      "category": "Produkt",
      "keywords": ""
    },
    {
      "title": "Eibischblüten Tee kaufen",
      "description": "Wunderschöne Eibischblüten (Hatmi Çiçeği). Das sanfteste, pflanzliche Heilmittel aus Anatolien bei Reizhusten, Heiserkeit und Magenbeschwerden.",
      "h1": "Eibischblüten Tee (Hatmi Çiçeği)",
      "url": "eibischblueten-tee.html",
      "image": "assets/eibischblueten-tee-anadoa-naturhaus.png",
      "category": "Tee",
      "keywords": ""
    },
    {
      "title": "Lebendige Essige (Sirke) & Detox Elixiere",
      "description": "Entdecken Sie unsere naturtrüben, unpasteurisierten Essige und Oxymel Elixiere. Traditionell fermentiert, reich an lebenden Kulturen und der Essigmutter.",
      "h1": "Lebendige Essige",
      "url": "essig.html",
      "image": "assets/anadoa-logo-1000-500.png",
      "category": "Lebendige Essige",
      "keywords": "apple cider vinegar, vinegar, elma sirkesi, sirke, alıç sirkesi, alic sirkesi"
    },
    {
      "title": "Eukalyptusöl 100% Naturrein (Eucalyptus globulus)",
      "description": "Der stärkste natürliche Schleimlöser: Echtes Eukalyptusöl (Globulus). Befreit die Atemwege, wirkt antiviral und extrem erfrischend. Komplett-Ratgeber.",
      "h1": "Eukalyptusöl",
      "url": "eukalyptusoel.html",
      "image": "assets/eukalyptusoel-anadoa-naturhaus.png",
      "category": "Ätherische Öle",
      "keywords": "eucalyptus oil, eucalyptus, okaliptüs yağı, okaliptus yagi"
    },
    {
      "title": "Fencheltee kaufen",
      "description": "Premium Fenchelsamen (Rezene Çayı). Der sanfte Klassiker für die ganze Familie zur Linderung von Magenkrämpfen, Blähungen und Völlegefühl.",
      "h1": "Fencheltee (Rezene)",
      "url": "fenchel-tee.html",
      "image": "assets/fenchelsamen-tee-anadoa-naturhaus.png",
      "category": "Tee",
      "keywords": ""
    },
    {
      "title": "Flohsamenschalen Pulver kaufen",
      "description": "Premium Flohsamenschalen Pulver (Karnıyarık Tozu). Die höchste Qualität an pflanzlichen Ballaststoffen für einen gesunden Darm und sanfte Verdauung.",
      "h1": "Flohsamenschalen (Karnıyarık Tozu)",
      "url": "flohsamenschalen.html",
      "image": "assets/flohsamenchalen-anadoa-naturhaus.png",
      "category": "Produkt",
      "keywords": ""
    },
    {
      "title": "Geranienöl 100% Naturrein (Pelargonium graveolens)",
      "description": "Der Balancer für Haut und Hormone: Echtes Rosengeranienöl (Bourbon). Wirkt extrem ausgleichend, hautstraffend und schützt natürlich vor Zecken. Ratgeber.",
      "h1": "Geranienöl",
      "url": "geranienoel.html",
      "image": "assets/geranienoel.png",
      "category": "Ätherische Öle",
      "keywords": ""
    },
    {
      "title": "Natürliche Gewürze & Superfoods",
      "description": "Entdecken Sie unsere hochwertigen Gewürze: Ungemahlener und gemahlener Sumach sowie wilder türkischer Berg-Oregano für die natürliche Küche.",
      "h1": "Gewürze",
      "url": "gewuerze.html",
      "image": "assets/gewuerze.png",
      "category": "Gewürze",
      "keywords": ""
    },
    {
      "title": "Original Gilaburu Saft (Schneeball)",
      "description": "100% purer, traditionell gepresster Gilaburu Saft aus Anatolien. Das bewährte Naturheilmittel für urologische Gesundheit und die Nieren.",
      "h1": "100% Purer Gilaburu Saft",
      "url": "gilaburu-saft.html",
      "image": "assets/gilaburu-saft-anadoa-naturhaus.png",
      "category": "Produkt",
      "keywords": "gilaburu juice, cramp bark juice, gilaburu suyu, gilaburu"
    },
    {
      "title": "Granatapfelkernöl Kaltgepresst 100% Nativ (Punica granatum)",
      "description": "Das stärkste natürliche Anti-Aging-Öl: Kaltgepresstes Granatapfelkernöl. Punicinsäure kurbelt die Kollagenproduktion an und festigt reife, trockene Haut. Ratgeber.",
      "h1": "Granatapfelkernöl",
      "url": "granatapfelkernoel.html",
      "image": "assets/granatapfelkern-oel-anadoa-naturhaus.png",
      "category": "Kaltgepresste Öle",
      "keywords": "pomegranate seed oil, pomegranate, nar çekirdeği yağı, nar cekirdegi"
    },
    {
      "title": "Granatapfelsirup",
      "description": "Original anatolische Zypressenzapfen Paste mit Honig und Propolis. Das traditionelle Naturheilmittel für freie Atemwege, ideal auch für Kinder.",
      "h1": "Granatapfelsirup | Nar Ekşisi",
      "url": "granatapfelsirup.html",
      "image": "assets/grantapfel-sirup-anadoa-naturhaus.png",
      "category": "Natürliche Sirupe",
      "keywords": "pomegranate seed oil, pomegranate, nar çekirdeği yağı, nar cekirdegi"
    },
    {
      "title": "Grapefruitöl 100% Naturrein (Citrus paradisi)",
      "description": "Flüssige Motivation und Gewebestraffung: Echtes Grapefruitöl. Kurbelt die Lymphe an, vertreibt Heißhunger und sorgt für extrem gute Laune. Ratgeber.",
      "h1": "Grapefruitöl",
      "url": "grapefruitoel.html",
      "image": "assets/grapefruitoel.png",
      "category": "Ätherische Öle",
      "keywords": ""
    },
    {
      "title": "Grüner Tee kaufen",
      "description": "Premium Grüner Tee zur natürlichen Stoffwechselanregung und für antioxidativen Zellschutz. Handverlesene Qualität für den perfekten Fokus.",
      "h1": "Magischer Grüntee",
      "url": "gruener-tee.html",
      "image": "assets/gruene-tee-anadoa-naturhaus.png",
      "category": "Tee",
      "keywords": ""
    },
    {
      "title": "Bio Hagebutten Pulver kaufen",
      "description": "100% reines, fein gemahlenes BIO Hagebutten Pulver (Kuşburnu). Natürliche, hochdosierte Vitamin-C-Quelle für Immunsystem, Gelenke und Haut.",
      "h1": "Hagebutten BIO Pulver",
      "url": "hagebutten-pulver.html",
      "image": "assets/hagebutten_pulver.png",
      "category": "Produkt",
      "keywords": ""
    },
    {
      "title": "Hagebutten Tee kaufen",
      "description": "Traditioneller Hagebutten Tee (Kuşburnu). Hergestellt aus ganzen, schonend getrockneten Wildfrüchten. Säuerlich-frischer Geschmack und reich an Vitaminen.",
      "h1": "Hagebutten Tee (Kuşburnu)",
      "url": "hagebutten-tee.html",
      "image": "assets/hagebutten-tee-anadoa-naturhaus.png",
      "category": "Tee",
      "keywords": ""
    },
    {
      "title": "Hagebuttenkernöl Kaltgepresst 100% Nativ (Rosa canina)",
      "description": "Das pflanzliche Retinol: Kaltgepresstes Hagebuttenkernöl. Das ultimative, schnell einziehende Anti-Aging Öl gegen Falten, Pigmentflecken und Narben. Ratgeber.",
      "h1": "Hagebuttenkernöl",
      "url": "hagebuttenkernoel.html",
      "image": "assets/hagebuttenkernoel-anadoa-naturhaus.png",
      "category": "Kaltgepresste Öle",
      "keywords": ""
    },
    {
      "title": "Hanföl Kaltgepresst 100% Nativ (Cannabis sativa)",
      "description": "Das grüne Wunder bei Neurodermitis und Akne: Kaltgepresstes Hanfsamenöl. Ein nicht-komedogenes 'trockenes Öl' mit perfektem Omega-3-Verhältnis. Ratgeber.",
      "h1": "Hanföl",
      "url": "hanfoel.html",
      "image": "assets/hanfoel.png",
      "category": "Kaltgepresste Öle",
      "keywords": "hemp oil, hemp seed oil, hemp, kenevir yağı, kenevir tohumu"
    },
    {
      "title": "Hibiskus Tee kaufen",
      "description": "Premium Hibiskus Tee (Nar Çiçeği / Hibiscus Sabdariffa). Reich an organischen Säuren und Antioxidantien. Unterstützt das Herz-Kreislauf-System.",
      "h1": "Hibiskus Tee",
      "url": "hibiskus-tee.html",
      "image": "assets/hibiskus-tee-anadoa-naturhaus.png",
      "category": "Tee",
      "keywords": ""
    },
    {
      "title": "Johannisbrot Melasse (Keçiboynuzu Pekmezi)",
      "description": "Natürliche Kalziumquelle und Hustenstiller. Johannisbrotmelasse aus dem Mittelmeerraum, 100% rein, ohne Zucker und glutenfrei.",
      "h1": "Johannisbrot Melasse (Keçiboynuzu)",
      "url": "johannisbrot-melasse.html",
      "image": "assets/johannisbrot-melasse-anadoa-naturhaus.png",
      "category": "Melassen (Pekmez)",
      "keywords": "grape molasses, grape syrup, carob, keçiboynuzu, pekmez, üzüm pekmezi, harnup pekmezi"
    },
    {
      "title": "Jojobaöl Kaltgepresst 100% Nativ (Simmondsia chinensis)",
      "description": "Das flüssige Gold, das nie ranzig wird: Kaltgepresstes Jojobaöl (Golden Jojoba). Perfekt für fettige Haut, Akne und als Abschmink-Öl. Nicht komedogen.",
      "h1": "Jojobaöl",
      "url": "jojobaoel.html",
      "image": "assets/jojoba-oel-anadoa-naturhaus.png",
      "category": "Kaltgepresste Öle",
      "keywords": "jojoba oil, jojoba, jojoba yağı, jojoba yagi"
    },
    {
      "title": "Kaktusfeigenkernöl Kaltgepresst 100% Nativ",
      "description": "Das luxuriöseste Anti-Aging-Öl der Welt: Kaltgepresstes Kaktusfeigenkernöl. Extrem reich an Vitamin E, glättet Augenringe, Falten und zieht sofort ein.",
      "h1": "Kaktusfeigenkernöl",
      "url": "kaktusfeigenkernoel.html",
      "image": "assets/kaktusfeigenkernoel.png",
      "category": "Kaltgepresste Öle",
      "keywords": ""
    },
    {
      "title": "Kaltgepresste Öle",
      "description": "Entdecken Sie unsere hochwertigen, schonend kaltgepressten Premium-Öle: Granatapfelkernöl, Feigenkernöl, Mariendistelöl und mehr für Gesundheit und Pflege.",
      "h1": "Kaltgepresste Premium Öle",
      "url": "kaltgepresste-oele.html",
      "image": "assets/anadoa-logo-1100-1100.png",
      "category": "Kaltgepresste Öle",
      "keywords": ""
    },
    {
      "title": "Die Wahrheit über Kaltpressung: Warum Temperatur den Unterschied macht",
      "description": "Erfahren Sie, warum die echte, temperaturkontrollierte Kaltpressung entscheidend für die Qualität, den Geschmack und die Heilwirkung von Pflanzenölen ist.",
      "h1": "Die Wahrheit über Kaltpressung: Warum Temperatur den Unterschied macht",
      "url": "kaltpressung-oele-herstellung-qualitaet.html",
      "image": "assets/anadoa-logo-1100-1100.png",
      "category": "Kaltgepresste Öle",
      "keywords": ""
    },
    {
      "title": "Kamillenöl 100% Naturrein (Echte & Römische Kamille)",
      "description": "Der sanfte Heiler: Ätherisches Kamillenöl. Wirkt extrem stark gegen Hautentzündungen (Blaue Kamille) und Panik/Stress (Römische Kamille). Für Babys geeignet.",
      "h1": "Kamillenöl",
      "url": "kamillenoel.html",
      "image": "assets/kamillenoel.png",
      "category": "Ätherische Öle",
      "keywords": ""
    },
    {
      "title": "Kiefernnadelöl 100% Naturrein (Pinus sylvestris)",
      "description": "Die Lunge des Waldes: Echtes Kiefernnadelöl. Wirkt stark schleimlösend, cortisonähnlich bei Rheuma und gibt Kraft bei extremem Burnout. Kompletter Ratgeber.",
      "h1": "Kiefernnadelöl",
      "url": "kiefernnadeloel.html",
      "image": "assets/kiefernnadeloel.png",
      "category": "Ätherische Öle",
      "keywords": ""
    },
    {
      "title": "Kinder Sirup Mix",
      "description": "Original anatolische Zypressenzapfen Paste mit Honig und Propolis. Das traditionelle Naturheilmittel für freie Atemwege, ideal auch für Kinder.",
      "h1": "Anadoa Kinder Sirup Mix",
      "url": "kinder-sirup-mix-mit-honig-propolis.html",
      "image": "assets/anadoa-logo-1100-1100.png",
      "category": "Kaltgepresste Öle",
      "keywords": ""
    },
    {
      "title": "Kirschstiel Tee (Kiraz Sapı) kaufen",
      "description": "Reine Kirschstiele zur sanften Entwässerung und Detox. Das traditionelle Naturheilmittel zur Nierenreinigung und Reduzierung von Ödemen.",
      "h1": "Kirschstiel Tee (Kiraz Sapı)",
      "url": "kirschstiel-tee.html",
      "image": "assets/kirschenstaengel-tee-anadoa-naturhaus.png",
      "category": "Tee",
      "keywords": ""
    },
    {
      "title": "Kokosöl Kaltgepresst 100% Nativ (Virgin Coconut Oil)",
      "description": "Der duftende Alleskönner: Natives Bio-Kokosöl. Stark antibakteriell (als Deo), tiefenwirksam für trockene Haare und natürlicher Zeckenschutz für Hunde. Ratgeber.",
      "h1": "Kokosöl (Nativ / Virgin)",
      "url": "kokosoel.html",
      "image": "assets/anadoa-logo-1100-1100.png",
      "category": "Kaltgepresste Öle",
      "keywords": ""
    },
    {
      "title": "Lavendeltee kaufen",
      "description": "Premium Lavendeltee (Lavanta Çayı) aus echten Blüten. Der florale Ruhepol zur Beruhigung von Nerven, bei Stress und leichten Schlafproblemen.",
      "h1": "Lavendeltee (Lavanta Çayı)",
      "url": "lavendel-tee.html",
      "image": "assets/lavendelblueten-tee-anadoa-naturhaus.png",
      "category": "Tee",
      "keywords": "lavender oil, lavender, lavanta yağı, lavanta yagi"
    },
    {
      "title": "Lavendelöl 100% Naturrein (Lavandula angustifolia)",
      "description": "Entdecken Sie die Kraft des echten Lavendelöls. Ein vollstandiger Ratgeber zu Wirkung, Herstellung, Rezepten und der Anwendung von Lavandula angustifolia.",
      "h1": "Lavendelöl",
      "url": "lavendeloel.html",
      "image": "assets/lavendeloel-anadoa-naturhaus.png",
      "category": "Ätherische Öle",
      "keywords": "lavender oil, lavender, lavanta yağı, lavanta yagi"
    },
    {
      "title": "Leinöl Kaltgepresst 100% Nativ (Omega-3)",
      "description": "Die stärkste pflanzliche Omega-3-Quelle der Welt: Kaltgepresstes Leinöl. Stoppt Entzündungen im Körper, schützt das Herz und ist extrem mild im Geschmack.",
      "h1": "Leinöl",
      "url": "leinoel.html",
      "image": "assets/anadoa-logo-1100-1100.png",
      "category": "Kaltgepresste Öle",
      "keywords": "linseed oil, flaxseed oil, flaxseed, linseed, keten tohumu yağı, keten tohumu"
    },
    {
      "title": "Löwenzahn Tee kaufen",
      "description": "Reiner Löwenzahn Tee aus Anatolien. Das ultimative Detox-Kraut zur Leberreinigung, Unterstützung der Galle und Entschlackung.",
      "h1": "Löwenzahn Tee (Karahindiba)",
      "url": "loewenzahn-tee.html",
      "image": "assets/loewenzahn-tee-anadoa-naturhaus.png",
      "category": "Tee",
      "keywords": ""
    },
    {
      "title": "Lorbeerkernöl Kaltgepresst / Nativ (Laurus nobilis)",
      "description": "Das grüne Heil-Gold des Orients: Natives Lorbeerkernöl. Die Seele der Aleppo-Seife. Wirkt massiv antibakteriell bei Akne und extrem durchblutungsfördernd bei Rheuma.",
      "h1": "Lorbeerkernöl",
      "url": "lorbeerkernoel.html",
      "image": "assets/lorbeerkernoel-100ml-anadoa-naturhaus.png",
      "category": "Kaltgepresste Öle",
      "keywords": ""
    },
    {
      "title": "Love Tee kaufen",
      "description": "Sinnlicher Love Tee. Eine meisterhaft komponierte, aphrodisierende Kräutermischung für romantische Abende, Stressabbau und tiefe Entspannung.",
      "h1": "Love Tee (Spezial Mix)",
      "url": "love-tee.html",
      "image": "assets/love-tee-kraeutermix-tee-anadoa-naturhaus.png",
      "category": "Tee",
      "keywords": ""
    },
    {
      "title": "Macadamianussöl Kaltgepresst 100% Nativ",
      "description": "Der seidige Luxus für die Haut: Natives Macadamianussöl. Ersetzt abgebautes Hautfett bei reifer Haut (ab 30) und zieht extrem schnell und samtig ein. Ratgeber.",
      "h1": "Macadamianussöl",
      "url": "macadamianussoel.html",
      "image": "assets/macadamianussoel.png",
      "category": "Kaltgepresste Öle",
      "keywords": "macadamia oil, macadamia nut, makadamya yağı, makademya"
    },
    {
      "title": "Maisbart Tee kaufen",
      "description": "Maisbart Tee (Mısır Püskülü) aus Anatolien. Das sanfteste, natürliche Entwässerungsmittel zur Durchspülung von Niere, Blase und Harnwegen.",
      "h1": "Maisbart Tee (Mısır Püskülü)",
      "url": "maisbart-tee.html",
      "image": "assets/maisbart-tee-anadoa-naturhaus.png",
      "category": "Tee",
      "keywords": ""
    },
    {
      "title": "Malvenblüten Tee kaufen",
      "description": "Wunderschöne, blaue Malvenblüten (Ebegümeci). Der sanfte Schleimlöser bei hartnäckigem Reizhusten und Entzündungen der Magenschleimhaut.",
      "h1": "Malvenblüten Tee (Ebegümeci)",
      "url": "malvenblueten-tee.html",
      "image": "assets/malvenblueten-tee-anadoa-naturhaus.png",
      "category": "Tee",
      "keywords": ""
    },
    {
      "title": "Mandelöl (Süßmandel) Kaltgepresst 100% Nativ",
      "description": "Der sanfte Alleskönner: Kaltgepresstes Süßmandelöl. Das perfekte, reizarme Massageöl für Schwangerschaft, Babypflege und sensible Haut. Ratgeber.",
      "h1": "Mandelöl (Süßmandel)",
      "url": "mandeloel.html",
      "image": "assets/mandeloel-anadoa-naturhaus.png",
      "category": "Kaltgepresste Öle",
      "keywords": "almond oil, almond, badem yağı, badem yagi"
    },
    {
      "title": "Mariendistel Paste kaufen",
      "description": "Original anatolische Mariendistel Paste. Hochwertige Kräuterpaste mit Silymarin zur natürlichen Unterstützung der Leberfunktion und Entgiftung.",
      "h1": "Mariendistel Paste",
      "url": "mariendistel-paste.html",
      "image": "assets/mariendistel-paste-anadoa-naturhaus.png",
      "category": "Traditionelle Pasten",
      "keywords": "safflower oil, safflower, aspir yağı, aspir yagi"
    },
    {
      "title": "Maulbeeren Melasse (Dut Pekmezi)",
      "description": "Die Beauty-Molasse aus schwarzen Maulbeeren. Extrem reich an Antioxidantien, Eisen und Resveratrol. Perfekt für Smoothie-Bowls.",
      "h1": "Maulbeeren Melasse (Dut Pekmezi)",
      "url": "maulbeeren-melasse.html",
      "image": "assets/maulbeeren-melasse-anadoa-naturhaus.png",
      "category": "Melassen (Pekmez)",
      "keywords": "grape molasses, grape syrup, carob, keçiboynuzu, pekmez, üzüm pekmezi, harnup pekmezi"
    },
    {
      "title": "Fruchtmelassen (Pekmez)",
      "description": "Kaltgepresste anatolische Fruchtmelassen (Pekmez) aus Maulbeeren, Trauben, Johannisbrot und Wacholder. 100% rein, ohne Zuckerzusatz und extrem eisenreich.",
      "h1": "Fruchtmelassen (Pekmez)",
      "url": "melassen.html",
      "image": "assets/anadoa-logo-1100-1100.png",
      "category": "Fruchtmelassen",
      "keywords": "grape molasses, grape syrup, carob, keçiboynuzu, pekmez, üzüm pekmezi, harnup pekmezi"
    },
    {
      "title": "Muskatellersalbeiöl 100% Naturrein (Salvia sclarea)",
      "description": "Das wichtigste Frauen-Öl der Aromatherapie: Echtes Muskatellersalbeiöl. Wirkt extrem krampflösend bei Menstruation, lindert Hitzewallungen und tiefen Stress.",
      "h1": "Muskatellersalbeiöl",
      "url": "muskatellersalbeioel.html",
      "image": "assets/muskatellersalbeioel.png",
      "category": "Ätherische Öle",
      "keywords": ""
    },
    {
      "title": "Myrrheöl 100% Naturrein (Commiphora myrrha)",
      "description": "Der Spezialist für Wundheilung und Zahnfleisch: Echtes Myrrheöl. Wirkt stark adstringierend, entzündungshemmend und zellregenerierend. Kompletter Ratgeber.",
      "h1": "Myrrheöl",
      "url": "myrrheoel.html",
      "image": "assets/myrrheoel.png",
      "category": "Ätherische Öle",
      "keywords": ""
    },
    {
      "title": "Nachtkerzenöl Kaltgepresst 100% Nativ (Oenothera biennis)",
      "description": "Die medizinische Rettung bei Neurodermitis: Kaltgepresstes Nachtkerzenöl. Extrem reich an Gamma-Linolensäure (GLA). Stoppt starken Juckreiz und Schuppung sofort.",
      "h1": "Nachtkerzenöl",
      "url": "nachtkerzenoel.html",
      "image": "assets/nachtkerzenoel.png",
      "category": "Kaltgepresste Öle",
      "keywords": "evening primrose oil, primrose, çuha çiçeği yağı, cuha cicegi"
    },
    {
      "title": "Neemöl Kaltgepresst 100% Nativ (Azadirachta indica)",
      "description": "Der stärkste natürliche Pflanzenschutz & Parasiten-Killer: Kaltgepresstes Neemöl. Vernichtet Blattläuse, Flöhe, Kopfläuse und Fußpilz extrem zuverlässig.",
      "h1": "Neemöl (Niemöl)",
      "url": "neemoel.html",
      "image": "assets/neemoel.png",
      "category": "Kaltgepresste Öle",
      "keywords": ""
    },
    {
      "title": "Nelkenöl 100% Naturrein (Nelkenknospe)",
      "description": "Der stärkste Schmerzkiller bei Zahnschmerzen: Echtes Nelkenknospenöl (Eugenia caryophyllata). Wirkt extrem antibakteriell und betäubend. Kompletter Ratgeber.",
      "h1": "Nelkenöl (Knospe)",
      "url": "nelkenoel.html",
      "image": "assets/nelkenoel-anadoa-naturhaus.png",
      "category": "Ätherische Öle",
      "keywords": "clove oil, clove, karanfil yağı, karanfil yagi"
    },
    {
      "title": "Neroliöl 100% Naturrein (Bitterorangenblüte)",
      "description": "Der seelische Notfalltropfen: Echtes Neroliöl. Hilft extrem stark bei Schock, Panik, Liebeskummer und wirkt zellerneuernd (Anti-Aging). Kompletter Ratgeber.",
      "h1": "Neroliöl",
      "url": "nerolioel.html",
      "image": "assets/nerolioel.png",
      "category": "Ätherische Öle",
      "keywords": ""
    },
    {
      "title": "Niaouliöl 100% Naturrein (Melaleuca quinquenervia)",
      "description": "Der stärkste Virus-Killer der Aromatherapie: Echtes Niaouliöl. Wirkt extrem schnell bei Herpes, Akne und stärkt das Immunsystem massiv. Kompletter Ratgeber.",
      "h1": "Niaouliöl",
      "url": "niaoulioel.html",
      "image": "assets/nioli-oel-anadoa-naturhaus.png",
      "category": "Ätherische Öle",
      "keywords": ""
    },
    {
      "title": "Orangenöl 100% Naturrein Kaltgepresst (Citrus sinensis)",
      "description": "Das Happy-Öl der Aromatherapie: Kaltgepresstes Orangenöl (Süßorange). Wirkt extrem stimmungsaufhellend, angstlösend und harmonisierend. Komplett-Ratgeber.",
      "h1": "Orangenöl",
      "url": "orangenoel.html",
      "image": "assets/orangenoel-anadoa-naturhaus.png",
      "category": "Ätherische Öle",
      "keywords": "orange oil, sweet orange, portakal yağı, portakal yagi"
    },
    {
      "title": "Oreganoöl 100% Naturrein (Origanum vulgare)",
      "description": "Das stärkste natürliche Antibiotikum: Ätherisches Oreganoöl. Extrem hoher Carvacrol-Gehalt gegen Bakterien und Pilze. Wichtige Sicherheits- und Anwendungstipps.",
      "h1": "Oreganoöl",
      "url": "oreganool.html",
      "image": "assets/oreganool.png",
      "category": "Ätherische Öle",
      "keywords": "oregano oil, oregano, kekik yağı, kekik yagi"
    },
    {
      "title": "Oxymel Gold Tonic",
      "description": "Traditioneller Sauerhonig mit Propolis & Kurkuma",
      "h1": "Oxymel Gold Essig",
      "url": "oxymel-gold-essig.html",
      "image": "assets/oxymel-gold-essig-anadoa-naturhaus.png",
      "category": "Kaltgepresste Öle",
      "keywords": "apple cider vinegar, vinegar, elma sirkesi, sirke, alıç sirkesi, alic sirkesi"
    },
    {
      "title": "Paste für Frauen",
      "description": "Spezielle Frauenpaste (Kadın Macunu) aus Anatolien. Harmonische Kräutermischung zur sanften Regulation und Stärkung des weiblichen Zyklus.",
      "h1": "Paste für Frauen (Kadın Macunu)",
      "url": "paste-fuer-frauen.html",
      "image": "assets/paste_fuer_frauen.png",
      "category": "Traditionelle Pasten",
      "keywords": ""
    },
    {
      "title": "Paste für Männer",
      "description": "Traditionelle Mesir Macunu für Männer. Eine kraftvolle anatolische Kräuterpaste zur natürlichen Steigerung von Energie, Ausdauer und Vitalität.",
      "h1": "Paste für Männer (Mesir Macunu)",
      "url": "paste-fuer-maenner.html",
      "image": "assets/paste_fuer_maenner.png",
      "category": "Traditionelle Pasten",
      "keywords": ""
    },
    {
      "title": "Traditionelle Anatolische Pasten & Macun",
      "description": "Entdecken Sie unsere hochwertigen Kräuterpasten: Zypressenzapfen, Mariendistel, Bittermelone (Kudret Narı) und vitalisierende Mischungen für natürliche Stärkung.",
      "h1": "Traditionelle Pasten",
      "url": "pasten.html",
      "image": "assets/anadoa-logo-1100-1100.png",
      "category": "Traditionelle Pasten",
      "keywords": ""
    },
    {
      "title": "Patchouliöl 100% Naturrein (Pogostemon cablin)",
      "description": "Der süße, erdende Duft der Tiefe: Ätherisches Patchouliöl. Wirkt extrem zellregenerierend bei reifer Haut und stark erdend bei Angst und Stress. Kompletter Ratgeber.",
      "h1": "Patchouliöl",
      "url": "patchoulioel.html",
      "image": "assets/patchoulioel.png",
      "category": "Ätherische Öle",
      "keywords": ""
    },
    {
      "title": "Pfefferminzöl 100% Naturrein (Mentha piperita)",
      "description": "Der stärkste Frische-Kick der Natur: Echtes Pfefferminzöl. Hilft bei Kopfschmerzen, Müdigkeit und Übelkeit. Ein Ratgeber zur Anwendung.",
      "h1": "Pfefferminzöl",
      "url": "pfefferminzoel.html",
      "image": "assets/pfefferminzoel-anadoa-naturhaus.png",
      "category": "Ätherische Öle",
      "keywords": "peppermint oil, peppermint, mint, nane yağı, nane yagi"
    },
    {
      "title": "Naturreine Pflanzenwasser & Hydrolate",
      "description": "Entdecken Sie unsere hochwertigen, naturreinen Pflanzenwasser und Hydrolate aus Dampfdestillation. Rosenwasser und Rosmarinwasser ohne Alkohol, für natürliche Hautpflege.",
      "h1": "",
      "url": "pflanzenwasser.html",
      "image": "assets/anadoa-logo-1100-1100.png",
      "category": "Produkt",
      "keywords": ""
    },
    {
      "title": "Traditionelle Anatolische Tarhana-Suppe",
      "description": "Die Königin der anatolischen Heilsuppen. Hergestellt aus fermentiertem Gemüse und Joghurt, ist diese Suppe nicht nur wärmend, sondern auch ein echter probiotischer Booster für das Immunsystem.",
      "h1": "Traditionelle Anatolische Tarhana-Suppe",
      "url": "rezept-anatolische-tarhana-suppe.html",
      "image": "assets/rezept_tarhana.png",
      "category": "Rezepte",
      "keywords": ""
    },
    {
      "title": "Gefüllte Weinblätter (Sarma)",
      "description": "Die Königsdisziplin der anatolischen Küche! Zarte Weinblätter, gefüllt mit einer aromatischen Reismischung, die durch Anadoa Sumach und Granatapfelsirup eine unvergleichlich tiefe, angenehm säuerliche Note erhält.",
      "h1": "Gefüllte Weinblätter (Sarma)",
      "url": "rezept-gefuellte-weinblaetter.html",
      "image": "assets/rezept_sarma.png",
      "category": "Rezepte",
      "keywords": ""
    },
    {
      "title": "Glutenfreies Fladenbrot",
      "description": "Endlich ein glutenfreies Brot, das nicht zerbröselt! Das Anadoa Flohsamenschalen Pulver wirkt hier als natürlicher Kleber und verleiht dem Teig eine fantastische Elastizität und Feuchtigkeit.",
      "h1": "Glutenfreies Fladenbrot",
      "url": "rezept-glutenfreies-fladenbrot.html",
      "image": "assets/rezept_brot.png",
      "category": "Rezepte",
      "keywords": ""
    },
    {
      "title": "Frischer Granatapfel-Walnuss-Salat",
      "description": "Ein Fest der Sinne! Knackig, fruchtig, nussig und dank der Kombination aus Anadoa Granatapfelsirup und Sumach herrlich süß-säuerlich.",
      "h1": "Frischer Granatapfel-Walnuss-Salat",
      "url": "rezept-granatapfel-walnuss-salat.html",
      "image": "assets/rezept_salat.png",
      "category": "Rezepte",
      "keywords": "pomegranate seed oil, pomegranate, nar çekirdeği yağı, nar cekirdegi, walnut oil, walnut, ceviz yağı, ceviz yagi"
    },
    {
      "title": "Johannisbrot-Pudding",
      "description": "Ein herrliches Dessert mit einer faszinierenden, karamellig-schokoladigen Note. Durch die schonende Zugabe der Anadoa Johannisbrotmelasse bleiben alle wertvollen Mineralstoffe erhalten.",
      "h1": "Johannisbrot-Pudding",
      "url": "rezept-johannisbrot-pudding.html",
      "image": "assets/rezept_pudding.png",
      "category": "Rezepte",
      "keywords": ""
    },
    {
      "title": "Klassischer Anatolischer Hummus",
      "description": "Ein himmlisch cremiger Hummus nach traditioneller anatolischer Art. Das Geheimnis liegt in der Qualität des Anadoa Tahins und der richtigen Mix-Technik mit Eiswasser.",
      "h1": "Klassischer Anatolischer Hummus",
      "url": "rezept-klassischer-hummus.html",
      "image": "assets/rezept_hummus.png",
      "category": "Rezepte",
      "keywords": ""
    },
    {
      "title": "Vegane Tahin-Kekse",
      "description": "Diese Kekse sind ein echter Geheimtipp. Sie sind außen wunderbar knusprig, innen leicht weich ('chewy') und haben ein unglaubliches Karamell-Nuss-Aroma, ganz ohne Milch oder Eier.",
      "h1": "Vegane Tahin-Kekse",
      "url": "rezept-vegane-tahin-kekse.html",
      "image": "assets/rezept_kekse.png",
      "category": "Rezepte",
      "keywords": "tahini, sesame paste, tahin, susam ezmesi"
    },
    {
      "title": "Zuckerfreier Schoko-Kuchen",
      "description": "Ein unwiderstehlich saftiger, dunkler Schokoladenkuchen, der komplett ohne raffinierten weißen Zucker auskommt. Die tiefe Süße und Feuchtigkeit stammt allein aus der hochwertigen Anadoa Traubenmelasse (Pekmez).",
      "h1": "Zuckerfreier Schoko-Kuchen",
      "url": "rezept-zuckerfreier-schoko-kuchen.html",
      "image": "assets/rezept_kuchen.png",
      "category": "Rezepte",
      "keywords": ""
    },
    {
      "title": "Rizinusöl Kaltgepresst 100% Nativ (Castor Oil)",
      "description": "Das Wundermittel für extrem lange Wimpern und dichte Augenbrauen: Kaltgepresstes Rizinusöl (Castor Oil). Porentiefe Gesichtsreinigung (Cleansing). Ratgeber.",
      "h1": "Rizinusöl",
      "url": "rizinusoel.html",
      "image": "assets/rizinusoel-anadoa-naturhaus.png",
      "category": "Kaltgepresste Öle",
      "keywords": "castor oil, castor, hint yağı, hint yagi"
    },
    {
      "title": "Rosenholzöl 100% Naturrein (Aniba rosaeodora)",
      "description": "Der flüssige Luxus für die Haut: Echtes Rosenholzöl. Wirkt extrem zellerneuernd (Anti-Aging), angstlösend und ist perfekt für empfindliche Haut. Ratgeber.",
      "h1": "Rosenholzöl",
      "url": "rosenholzoel.html",
      "image": "assets/rosenholzoel.png",
      "category": "Ätherische Öle",
      "keywords": "rose oil, rose essential oil, gül yağı, gul yagi"
    },
    {
      "title": "Rosenöl 100% Naturrein (Rosa damascena)",
      "description": "Entdecken Sie das reinste ätherische Rosenöl (Rose Otto) aus Anatolien. Ein vollständiger Ratgeber zu Wirkung, Anwendung und Anti-Aging-Rezepten.",
      "h1": "Rosenöl",
      "url": "rosenoel.html",
      "image": "assets/rosenoel-anadoa-naturhaus.png",
      "category": "Ätherische Öle",
      "keywords": "rose oil, rose essential oil, gül yağı, gul yagi"
    },
    {
      "title": "Rosenwasser (Gül Suyu) 100% Naturrein",
      "description": "100% naturreines Rosenwasser (Hydrolat) aus Damaszener Rosen. Ausgleichend, aknebekämpfend und feuchtigkeitsspendend. Ohne Alkohol, in der 100ml Glasflasche.",
      "h1": "Rosenwasser (Gül Suyu)",
      "url": "rosenwasser.html",
      "image": "assets/rosenwasser-anadoa-naturhaus.png",
      "category": "Produkt",
      "keywords": "rose oil, rose essential oil, gül yağı, gul yagi"
    },
    {
      "title": "Rosmarinöl 100% Naturrein (Rosmarinus officinalis)",
      "description": "Der stärkste mentale Wachmacher: Ätherisches Rosmarinöl. Fördert massiv das Haarwachstum, die Durchblutung und die Konzentration. Kompletter Ratgeber.",
      "h1": "Rosmarinöl",
      "url": "rosmarinoel.html",
      "image": "assets/rosmarinoel-anadoa-naturhaus.png",
      "category": "Ätherische Öle",
      "keywords": ""
    },
    {
      "title": "Rosmarinwasser (Biberiye Suyu) Haar & Haut",
      "description": "100% naturreines Rosmarinwasser (Hydrolat). Fördert das Haarwachstum, beruhigt die Kopfhaut und klärt unreine Haut. Ohne Alkohol, in der 100ml Glasflasche.",
      "h1": "Rosmarinwasser (Biberiye)",
      "url": "rosmarinwasser.html",
      "image": "assets/rosmarinwasser-anadoa-naturhaus.png",
      "category": "Produkt",
      "keywords": ""
    },
    {
      "title": "Original Rushur Stein (Ruşur Taşı) 5 Stück",
      "description": "Original persischer Rushur Stein (Ruşur Taşı) 5 Stück. Natürliches Mineral-Peeling gegen Pigmentflecken, Sonnenflecken und unreinheiten. 100% rein.",
      "h1": "Original Rushur Stein (Ruşur Taşı)",
      "url": "rusur-stein.html",
      "image": "assets/rushur-stein-anadoa-naturhaus.png",
      "category": "Traditionelle Pasten",
      "keywords": ""
    },
    {
      "title": "Salbei Tee kaufen",
      "description": "Traditioneller Salbei Tee (Adaçayı) aus den Bergen Anatoliens. Das stärkste Kraut gegen Halsschmerzen, Entzündungen und starkes Schwitzen.",
      "h1": "Salbei Tee (Adaçayı)",
      "url": "salbei-tee.html",
      "image": "assets/salbei-tee-anadoa-naturhaus.png",
      "category": "Tee",
      "keywords": ""
    },
    {
      "title": "Sanddornfruchtöl Kaltgepresst 100% Nativ",
      "description": "Der rote Anti-Aging-Booster: Kaltgepresstes Sanddornfruchtfleischöl. Repariert UV-Schäden, spendet Feuchtigkeit und verleiht einen sofortigen 'Glow'. Ratgeber.",
      "h1": "Sanddornfruchtöl",
      "url": "sanddornfruchtoel.html",
      "image": "assets/sanddornfruchtoel.png",
      "category": "Kaltgepresste Öle",
      "keywords": "sea buckthorn fruit oil, seabuckthorn, yabani iğde yağı, yabani igde"
    },
    {
      "title": "Sandelholzöl 100% Naturrein (Santalum album)",
      "description": "Der heilige Duft Indiens: Echtes Sandelholzöl. Wirkt extrem erdend, stark beruhigend bei Panik und luxuriös zellregenerierend. Kompletter Ratgeber.",
      "h1": "Sandelholzöl",
      "url": "sandelholzoel.html",
      "image": "assets/sandelholzoel.png",
      "category": "Ätherische Öle",
      "keywords": ""
    },
    {
      "title": "Schafgarbentee kaufen",
      "description": "Premium Schafgarbentee (Civan Perçemi) aus Anatolien. Das ultimative, traditionelle Heilkraut zur Hormonbalance und Linderung von Menstruationsbeschwerden.",
      "h1": "Schafgarbentee (Civan Perçemi)",
      "url": "schafgarben-tee.html",
      "image": "assets/schafgarben-tee-anadoa-naturhaus.png",
      "category": "Tee",
      "keywords": ""
    },
    {
      "title": "Scharfe Tarhana Suppe (Acılı) kaufen",
      "description": "Scharfe Tarhana Suppe (Acılı) kaufen – mit Cayennepfeffer & Capia-Paprika fermentiert. Authentisch anatolisch, 100% natürlich, schnell zubereitet. Jetzt bei Anadoa.",
      "h1": "Scharfe Tarhana Suppe (Acılı)",
      "url": "scharfe-tarhana-suppe.html",
      "image": "assets/anadoa-logo-1100-1100.png",
      "category": "Produkt",
      "keywords": ""
    },
    {
      "title": "Schopflavendel Tee (Karabaş Otu) kaufen",
      "description": "Seltener Karabaş Otu Tee aus Anatolien. Das Heilkraut des osmanischen Hofes zur starken Nervenberuhigung, Entspannung und zum Zellschutz.",
      "h1": "Schopflavendel Tee (Karabaş Otu)",
      "url": "schopflavendel-tee.html",
      "image": "assets/schopflavendel-tee-anadoa-naturhaus.png",
      "category": "Tee",
      "keywords": "lavender oil, lavender, lavanta yağı, lavanta yagi"
    },
    {
      "title": "Schwarze Maulbeere Sirup Mix für Kinder",
      "description": "Original anatolische Zypressenzapfen Paste mit Honig und Propolis. Das traditionelle Naturheilmittel für freie Atemwege, ideal auch für Kinder.",
      "h1": "Maulbeere Sirup Mix für Kinder",
      "url": "schwarze-maulbeere-sirup-fur-kinder.html",
      "image": "assets/schwarze-maulbeere-sirup-mix-fuer-kinder-anadoa-naturhaus.png",
      "category": "Natürliche Sirupe",
      "keywords": ""
    },
    {
      "title": "Schwarzer Maulbeer-Sirup",
      "description": "Original anatolische Zypressenzapfen Paste mit Honig und Propolis. Das traditionelle Naturheilmittel für freie Atemwege, ideal auch für Kinder.",
      "h1": "Schwarzer Maulbeer-Sirup",
      "url": "schwarzer-maulbeersirup.html",
      "image": "assets/schwarze-maulbeere-sirup-anadoa-naturhaus.png",
      "category": "Natürliche Sirupe",
      "keywords": ""
    },
    {
      "title": "Schwarzkümmelöl & Thymoquinon: Das Gold der Pharaonen",
      "description": "Eine tiefgreifende wissenschaftliche und historische Analyse von Schwarzkümmelöl (Nigella sativa), seinem Hauptwirkstoff Thymoquinon und seinen unzähligen gesundheitlichen Vorteilen.",
      "h1": "Schwarzkümmelöl & Thymoquinon: Das Gold der Pharaonen",
      "url": "schwarzkuemmeloel-thymoquinon-wirkung.html",
      "image": "assets/schwarzkuemmeloel-hoher-thymochinongehalt-anadoa-naturhaus.png",
      "category": "Kaltgepresste Öle",
      "keywords": ""
    },
    {
      "title": "Schwarzkümmelöl für Kinder (Orangengeschmack)",
      "description": "Sanfte Pflege für kleine Entdecker: Schwarzkümmelöl kombiniert mit hautmildem Aspiröl und frischem Orangenöl. Die perfekte, pflanzliche Omega-Quelle für Kinder.",
      "h1": "Schwarzkümmelöl für Kinder (Orangengeschmack)",
      "url": "schwarzkummelol-fuer-kinder.html",
      "image": "assets/schwarzkuemmeloel-fuer-kinder-mit-orangengeschmack-anadoa-naturhaus.png",
      "category": "Kaltgepresste Öle",
      "keywords": "black seed oil, black cumin, nigella sativa, blackseed, çörek otu yağı, çörekotu, corek otu yagi"
    },
    {
      "title": "Schwarzkümmelöl für Kinder (Erdbeergeschmack)",
      "description": "Fruchtiger Genuss für kleine Entdecker: Hochwertiges Schwarzkümmelöl mit echtem Erdbeerpulver. Voller Omega-Power ohne bitteren Beigeschmack.",
      "h1": "Schwarzkümmelöl für Kinder (Erdbeergeschmack)",
      "url": "schwarzkummelol-kinder-erdbeer.html",
      "image": "assets/schwarzkuemmeloel-mit-erdbeerengeschmack-hoher-thymochinongehalt-anadoa-naturhaus.png",
      "category": "Kaltgepresste Öle",
      "keywords": "black seed oil, black cumin, nigella sativa, blackseed, çörek otu yağı, çörekotu, corek otu yagi"
    },
    {
      "title": "Schwarzkümmelöl mit Minze",
      "description": "Die atemöffnende Kraft der Natur: Kaltgepresstes Schwarzkümmelöl verfeinert mit echtem Pfefferminzöl. Ideal für sensible Mägen und klare Atemwege.",
      "h1": "Schwarzkümmelöl mit Minze",
      "url": "schwarzkummelol-mit-minze.html",
      "image": "assets/schwarzkuemmeloel-mit-minze-hoher-thymochinongehalt-anadoa-naturhaus.png",
      "category": "Kaltgepresste Öle",
      "keywords": "black seed oil, black cumin, nigella sativa, blackseed, çörek otu yağı, çörekotu, corek otu yagi"
    },
    {
      "title": "Schwarzkümmelöl (Nigella Sativa)",
      "description": "100% naturreines, kaltgepresstes Schwarzkümmelöl aus Nigella Sativa. Premium-Qualität mit extra hohem Thymochinongehalt. Das pure, vegane Gold Anatoliens.",
      "h1": "Schwarzkümmelöl (Nigella Sativa)",
      "url": "schwarzkummelol.html",
      "image": "assets/schwarzkuemmeloel-hoher-thymochinongehalt-anadoa-naturhaus.png",
      "category": "Kaltgepresste Öle",
      "keywords": "black seed oil, black cumin, nigella sativa, blackseed, çörek otu yağı, çörekotu, corek otu yagi"
    },
    {
      "title": "Senna Blättertee kaufen",
      "description": "Alexandrische Senna (Sinameki Çayı). Das stärkste, anatolische Kraut zur akuten, kurzfristigen Behandlung von schwerer Verstopfung. Hochwirksam.",
      "h1": "Alexandrische Senna (Sinameki)",
      "url": "senna-blaettertee.html",
      "image": "assets/alexandrische-senna-blaettertee-anadoa-naturhaus.png",
      "category": "Tee",
      "keywords": ""
    },
    {
      "title": "Natürliche Sirupe & Fruchtsirupe",
      "description": "Hochkonzentrierte, im Vakuumverfahren schonend hergestellte Sirupe: Kozalak (Tannenzapfen), Karadut (Schwarze Maulbeere), Granatapfel (Nar Ekşisi) und Kinder Sirup Mix.",
      "h1": "Natur Sirupe & Fruchtsirupe",
      "url": "sirupe.html",
      "image": "assets/anadoa-logo-1100-1100.png",
      "category": "Sirupe",
      "keywords": ""
    },
    {
      "title": "Spitzwegerich Tee (Sinir Otu) kaufen",
      "description": "Handverlesener Spitzwegerich Tee. Natürlicher Hustenstiller und Lungenunterstützung. Premium Qualität aus der Türkei.",
      "h1": "Spitzwegerich Tee (Sinir Otu)",
      "url": "spitzwegerich-tee.html",
      "image": "assets/spitzwegerich-tee-anadoa-naturhaus.png",
      "category": "Tee",
      "keywords": ""
    },
    {
      "title": "Süßholzwurzel Tee kaufen",
      "description": "Naturreine Süßholzwurzel (Meyan Kökü). Der anatolische Balsam für Magen und Atemwege. 50-mal süßer als Zucker, aber ohne Kalorien.",
      "h1": "Süßholzwurzel Tee (Meyan Kökü)",
      "url": "suessholzwurzel-tee.html",
      "image": "assets/suessholzwurzel-tee-anadoa-naturhaus.png",
      "category": "Tee",
      "keywords": ""
    },
    {
      "title": "Sumach Kerne – ungemahlen",
      "description": "Entdecke den reinen, ursprünglichen Geschmack des Sumachgewürzes mit unseren ungemahlenen Sumachkernen (Rhus coriaria). 100% Natur, intensiv säuerlich und vielseitig anwendbar.",
      "h1": "Sumach Kerne – ungemahlen",
      "url": "sumach-kerne.html",
      "image": "assets/sumach-sumak-kerne-anadoa-naturhaus.png",
      "category": "Produkt",
      "keywords": ""
    },
    {
      "title": "Sumach Pulver – Gemahlen (Ohne Salz)",
      "description": "Fein gemahlener, tiefroter Sumach aus schonend getrockneten Beeren. Ein säuerlich-fruchtiges Geschmackserlebnis – 100% rein und garantiert ohne Salzzusatz.",
      "h1": "Sumach Pulver – Gemahlen (Ohne Salz)",
      "url": "sumach-pulver.html",
      "image": "assets/sumach-sumak-kerne-anadoa-naturhaus.png",
      "category": "Produkt",
      "keywords": ""
    },
    {
      "title": "Sumach & Traditionelle Gewürze",
      "description": "Entdecken Sie unsere anatolischen Gewürzspezialitäten: Sumach Pulver, Sumach Kerne, den flüssigen Sumix Komplex und unsere proteinreiche Tarhana Suppe.",
      "h1": "Sumach & Traditionelle Gewürze",
      "url": "sumak.html",
      "image": "assets/product_dekupe-sumak-gemahlen.png",
      "category": "Produkt",
      "keywords": ""
    },
    {
      "title": "Traditionelles Tahin: Die Kunst der Steinmühle",
      "description": "Erfahren Sie, warum die traditionelle Steinvermahlung von geröstetem Sesam der einzige Weg ist, um das seidige, aromatische und hochnährwertige Tahin zu produzieren.",
      "h1": "Traditionelles Tahin: Die Kunst der Steinmühle",
      "url": "tahin-sesammus-gesundheit.html",
      "image": "assets/tahin-anadoa-naturhaus.png",
      "category": "Produkt",
      "keywords": "sesame oil, sesame, susam yağı, susam yagi, tahini, sesame paste, tahin, susam ezmesi"
    },
    {
      "title": "Premium Tahini",
      "description": "Schonend geröstetes, reines Tahini (Sesammus) aus anatolischer Ernte. Reich an pflanzlichem Kalzium und gesunden Fettsäuren.",
      "h1": "Tahini | Sesammus",
      "url": "tahini.html",
      "image": "assets/tahin-anadoa-naturhaus.png",
      "category": "Produkt",
      "keywords": "tahini, sesame paste, tahin, susam ezmesi"
    },
    {
      "title": "Tamanuöl Kaltgepresst 100% Nativ (Calophyllum inophyllum)",
      "description": "Das grüne Narben-Wunder: Natives Tamanuöl. Heilt schwere Akne-Narben, Verbrennungen und Ekzeme durch einzigartige, extrem entzündungshemmende Pflanzenharze.",
      "h1": "Tamanuöl",
      "url": "tamanuoel.html",
      "image": "assets/tamanuoel.png",
      "category": "Kaltgepresste Öle",
      "keywords": ""
    },
    {
      "title": "Tannenzapfen Paste für Kinder",
      "description": "Milde, honigbasierte Zypressenzapfen-Paste speziell für Kinder. Natürliche Stärkung der Atemwege und des kindlichen Immunsystems.",
      "h1": "Tannenzapfen Paste für Kinder",
      "url": "tannenzapfen-paste-kinder.html",
      "image": "assets/zypressenzapfen-paste-fuer-kinder-anadoa-naturhaus.png",
      "category": "Traditionelle Pasten",
      "keywords": "pine cone paste, cypress cone paste, kozalak macunu, çam kozalağı pekmezi, selvi kozalagi"
    },
    {
      "title": "Tannenzapfen Sirup",
      "description": "Original anatolische Zypressenzapfen Paste mit Honig und Propolis. Das traditionelle Naturheilmittel für freie Atemwege, ideal auch für Kinder.",
      "h1": "Tannenzapfen Sirup",
      "url": "tannenzapfen-sirup.html",
      "image": "assets/zypressenzapfen-sirup-anadoa-naturhaus.png",
      "category": "Natürliche Sirupe",
      "keywords": "pine cone paste, cypress cone paste, kozalak macunu, çam kozalağı pekmezi, selvi kozalagi"
    },
    {
      "title": "Klassische Tarhana Suppe kaufen",
      "description": "Klassische Tarhana Suppe kaufen – fermentiert, probiotisch und authentisch anatolisch. Jetzt bei Anadoa Naturhaus bestellen. Schnelle Zubereitung, 100% natürlich.",
      "h1": "Klassische",
      "url": "tarhana-suppe.html",
      "image": "assets/product_dekupe-tarhana.png",
      "category": "Produkt",
      "keywords": ""
    },
    {
      "title": "Tarhana Suppe",
      "description": "Die Seele der anatolischen Küche: Fermentiert, gesund, aromatisch und voller Tradition. Entdecken Sie unsere Acılı (scharfe) und klassische Tarhana.",
      "h1": "Traditionelle Tarhana Suppe",
      "url": "tarhana.html",
      "image": "assets/product_dekupe-tarhana.png",
      "category": "Produkt",
      "keywords": ""
    },
    {
      "title": "Naturtee & Traditionelle Kräuterkuren kaufen",
      "description": "Entdecken Sie anatolische Naturtees & Kräuterkuren: Wildgesammelter Atom Tee, Schopflavendel, Kirschstiel & Detox-Mischungen aus reiner Hochebenen-Wildsammlung.",
      "h1": "Naturtee & Kuren",
      "url": "tee.html",
      "image": "assets/lavendel_tee.png",
      "category": "Naturtee & Kuren",
      "keywords": ""
    },
    {
      "title": "Teebaumöl 100% Naturrein (Melaleuca alternifolia)",
      "description": "Das stärkste natürliche Antiseptikum: Echtes Teebaumöl. Hilft bei Akne, Pilzinfektionen und Insektenstichen. Komplett-Ratgeber zur Anwendung.",
      "h1": "Teebaumöl",
      "url": "teebaumoel.html",
      "image": "assets/teebaumoel-anadoa-naturhaus.png",
      "category": "Ätherische Öle",
      "keywords": "tea tree oil, teatree, çay ağacı yağı, cay agaci yagi"
    },
    {
      "title": "Thymianöl 100% Naturrein (Thymus vulgaris)",
      "description": "Das stärkste Öl für Lunge und Immunsystem: Ätherisches Thymianöl (CT Linalool & Thymol). Hilft massiv bei Husten, Bronchitis und Infektionen. Anwendung & Tipps.",
      "h1": "Thymianöl",
      "url": "thymianoel.html",
      "image": "assets/thymianoel-anadoa-naturhaus.png",
      "category": "Ätherische Öle",
      "keywords": ""
    },
    {
      "title": "Traubenessig",
      "description": "Naturtrüb & Traditionell Fermentiert",
      "h1": "Traubenessig",
      "url": "traubenessig.html",
      "image": "assets/traubenessig-anadoa-naturhaus.png",
      "category": "Lebendige Essige",
      "keywords": "apple cider vinegar, vinegar, elma sirkesi, sirke, alıç sirkesi, alic sirkesi"
    },
    {
      "title": "Traubenkernöl Kaltgepresst 100% Nativ (Vitis vinifera)",
      "description": "Das Anti-Aging Öl für fettige Haut: Kaltgepresstes Traubenkernöl. Extrem reich an OPC. Ein 'trockenes Öl', das sofort matt einzieht. Perfekt bei Akne.",
      "h1": "Traubenkernöl",
      "url": "traubenkernoel.html",
      "image": "assets/traubenkernoel-anadoa-naturhaus.png",
      "category": "Kaltgepresste Öle",
      "keywords": "grapeseed oil, grape seed, grape, üzüm çekirdeği yağı, uzum cekirdegi"
    },
    {
      "title": "Anatolische Traubenmelasse (Pekmez): Natürliche Energie",
      "description": "Erfahren Sie, wie aus sonnengereiften anatolischen Trauben durch stundenlanges Einkochen die dickflüssige, mineralstoffreiche Melasse 'Pekmez' entsteht und warum sie so gesund ist.",
      "h1": "Anatolische Traubenmelasse (Pekmez): Natürliche Energie",
      "url": "traubenmelasse-pekmez-eisen-gesundheit.html",
      "image": "assets/product_dekupe-traubenmelasse.png",
      "category": "Melassen (Pekmez)",
      "keywords": "grape molasses, grape syrup, carob, keçiboynuzu, pekmez, üzüm pekmezi, harnup pekmezi, grape molasses, grape syrup, carob, keçiboynuzu, pekmez, üzüm pekmezi, harnup pekmezi"
    },
    {
      "title": "Premium Traubenmelasse (Üzüm Pekmezi)",
      "description": "Kaltgepresste Traubenmelasse aus anatolischer Ernte. 100% zuckerfrei, extrem reich an Eisen, Resveratrol und Kalium. Natürliche Süße.",
      "h1": "Traubenmelasse (Üzüm Pekmezi)",
      "url": "traubenmelasse.html",
      "image": "assets/product_dekupe-traubenmelasse.png",
      "category": "Melassen (Pekmez)",
      "keywords": "grape molasses, grape syrup, carob, keçiboynuzu, pekmez, üzüm pekmezi, harnup pekmezi"
    },
    {
      "title": "Türkischer Oregano – Bilyeli Kekik",
      "description": "Aromatische Wildwürze aus den sonnenverwöhnten Bergen der Ägäis. Wilder Bergthymian (Origanum onites) mit intensiv herber Note.",
      "h1": "Türkischer Oregano – Bilyeli Kekik",
      "url": "tuerkischer-oregano.html",
      "image": "assets/tuerkischer-oregano.png",
      "category": "Produkt",
      "keywords": "oregano oil, oregano, kekik yağı, kekik yagi"
    },
    {
      "title": "Udi Hindi Öl (Kust al Hindi Auszug) 100% Naturrein",
      "description": "Das Antibiotikum der Natur: Echtes Udi Hindi Öl (Mazerat). Traditionelles asiatisches Heilmittel bei Halsschmerzen, Mandelentzündung und Bronchitis. Ratgeber.",
      "h1": "Udi Hindi Öl (Kust al Hindi)",
      "url": "udi-hindi-oel.html",
      "image": "assets/udi-hindi-oel-100ml-anadoa-naturhaus.png",
      "category": "Kaltgepresste Öle",
      "keywords": ""
    },
    {
      "title": "Vetiveröl 100% Naturrein (Vetiveria zizanioides)",
      "description": "Das stärkste erdende Öl der Aromatherapie: Echtes Vetiveröl. Wirkt massiv beruhigend bei Schlaflosigkeit, Stress und Überreizung. Kompletter Ratgeber.",
      "h1": "Vetiveröl",
      "url": "vetiveroel.html",
      "image": "assets/vetiveroel-anadoa-naturhaus.png",
      "category": "Ätherische Öle",
      "keywords": ""
    },
    {
      "title": "Wacholderbeeren Melasse (Andız Pekmezi)",
      "description": "Andız Pekmezi aus wilden Wacholderzapfen des Taurusgebirges. Starkes Antioxidans, Detox-Unterstützer und traditioneller Lungenbalsam.",
      "h1": "Wacholderbeeren Melasse (Andız)",
      "url": "wacholderbeeren-melasse.html",
      "image": "assets/wacholderbeeren-melasse-anadoa-naturhaus.png",
      "category": "Kaltgepresste Öle",
      "keywords": "grape molasses, grape syrup, carob, keçiboynuzu, pekmez, üzüm pekmezi, harnup pekmezi"
    },
    {
      "title": "Walnussöl Kaltgepresst 100% Nativ (Juglans regia)",
      "description": "Natives, kaltgepresstes Walnussöl voller Omega-3 Fettsäuren. Das edle Gourmet-Öl für Salate und natürliche Hautpflege. Premium Qualität aus der ersten Pressung.",
      "h1": "Walnussöl",
      "url": "walnussoel.html",
      "image": "assets/walnussoel.png",
      "category": "Kaltgepresste Öle",
      "keywords": "walnut oil, walnut, ceviz yağı, ceviz yagi"
    },
    {
      "title": "Weihrauchöl 100% Naturrein (Boswellia)",
      "description": "Das flüssige Gold der Antike: Echtes Weihrauchöl (Boswellia carterii). Wirkt extrem zellerneuernd, entzündungshemmend und erdend. Ratgeber & Anwendung.",
      "h1": "Weihrauchöl",
      "url": "weihrauchoel.html",
      "image": "assets/weihrauchoel.png",
      "category": "Ätherische Öle",
      "keywords": "frankincense oil, frankincense, günlük yağı, akgünlük, gunluk yagi"
    },
    {
      "title": "Weißdorn Essig",
      "description": "100 % Natur | Lebendiges Herz-Tonikum",
      "h1": "Weißdorn Essig",
      "url": "weissdorn-essig.html",
      "image": "assets/weissdornessig-anadoa-naturhaus.png",
      "category": "Lebendige Essige",
      "keywords": "apple cider vinegar, vinegar, elma sirkesi, sirke, alıç sirkesi, alic sirkesi, hawthorn vinegar, alıç sirkesi, alic sirkesi"
    },
    {
      "title": "Wildrosenöl Kaltgepresst 100% Nativ (Rosa mosqueta)",
      "description": "Das südamerikanische Anti-Aging Wunder: Kaltgepresstes Wildrosenöl. Das Premium-Öl gegen Pigmentflecken, Schwangerschaftsstreifen und tiefe Narben.",
      "h1": "Wildrosenöl (Rosa mosqueta)",
      "url": "wildrosenoel.html",
      "image": "assets/wildrosenoel.png",
      "category": "Kaltgepresste Öle",
      "keywords": "rosehip seed oil, rosehip, wild rose, kuşburnu yağı, kusburnu cekirdegi yagi, rose oil, rose essential oil, gül yağı, gul yagi"
    },
    {
      "title": "Wintertee kaufen",
      "description": "Anadoa Wintertee. Eine wärmende, harmonische Kräutermischung aus Anatolien zur Stärkung der Abwehrkräfte an kalten Tagen.",
      "h1": "Wintertee (Winter Mix)",
      "url": "wintertee.html",
      "image": "assets/winter-tee-anadoa-naturhaus.png",
      "category": "Tee",
      "keywords": ""
    },
    {
      "title": "Ylang-Ylang Öl 100% Naturrein (Cananga odorata)",
      "description": "Die Blume der Blumen: Echtes Ylang-Ylang Öl. Wirkt stark blutdrucksenkend, aphrodisierend und tiefenentspannend. Alles zur Anwendung und Dosierung.",
      "h1": "Ylang-Ylang-Öl",
      "url": "ylang-ylang-oel.html",
      "image": "assets/ylang-ylang-oel-anadoa-naturhaus.png",
      "category": "Ätherische Öle",
      "keywords": ""
    },
    {
      "title": "Zaatar Tee kaufen",
      "description": "Zahter (Schwarzer Thymian) aus dem anatolischen Taurusgebirge. Stark antiseptisch, bei Magenproblemen und Entzündungen im Rachen.",
      "h1": "Zaatar Tee (Schwarzer Thymian)",
      "url": "zaatar-tee.html",
      "image": "assets/zaatar-tee-anadoa-naturhaus.png",
      "category": "Tee",
      "keywords": ""
    },
    {
      "title": "Zedernholzöl 100% Naturrein (Cedrus atlantica)",
      "description": "Die erdende Kraft des Waldes: Ätherisches Zedernholzöl (Atlaszeder). Wirkt extrem gut bei Haarausfall, Schuppen und als natürlicher Mottenschutz. Ratgeber.",
      "h1": "Zedernholzöl",
      "url": "zedernholzoel.html",
      "image": "assets/zedernoel-anadoa-naturhaus.png",
      "category": "Ätherische Öle",
      "keywords": ""
    },
    {
      "title": "Zirbenöl 100% Naturrein (Pinus cembra)",
      "description": "Die Königin der Alpen: Echtes Zirbenöl (Pinus cembra). Bewiesen für besseren Schlaf, niedrigere Herzfrequenz und freie Atemwege. Kompletter Ratgeber.",
      "h1": "Zirbenöl",
      "url": "zirbenoel.html",
      "image": "assets/zirbenoel.png",
      "category": "Ätherische Öle",
      "keywords": "stone pine oil, swiss pine, çam yağı, cem yagi, arve"
    },
    {
      "title": "Zitronengrasöl (Lemongrass) 100% Naturrein",
      "description": "Der spritzige Energie-Booster: Ätherisches Zitronengrasöl (Lemongrass). Wirkt stark gegen Mücken, strafft das Bindegewebe und vertreibt Müdigkeit. Alles zur Anwendung.",
      "h1": "Zitronengrasöl (Lemongrass)",
      "url": "zitronengrasoel.html",
      "image": "assets/zitronengrasoel.png",
      "category": "Ätherische Öle",
      "keywords": "lemon oil, lemon, limon yağı, limon yagi"
    },
    {
      "title": "Zitronenöl 100% Naturrein Kaltgepresst (Citrus limon)",
      "description": "Der ultimative Frische-Kick: Kaltgepresstes Zitronenöl. Wirkt extrem stimmungsaufhellend, konzentrationsfördernd und luftreinigend. Kompletter Ratgeber.",
      "h1": "Zitronenöl",
      "url": "zitronenoel.html",
      "image": "assets/zitronen-oel-anadoa-naturhaus.png",
      "category": "Ätherische Öle",
      "keywords": "lemon oil, lemon, limon yağı, limon yagi"
    },
    {
      "title": "Das alte Geheimnis der Berge: Zypressenzapfen Paste",
      "description": "Entdecken Sie die historische Bedeutung und die atmungsunterstützenden Eigenschaften der traditionellen anatolischen Zypressenzapfen Paste.",
      "h1": "Das alte Geheimnis der Berge: Zypressenzapfen Paste",
      "url": "zypressenzapfen-paste-husten-naturheilkunde.html",
      "image": "assets/zypressenzapfen-paste-anadoa-naturhaus.png",
      "category": "Traditionelle Pasten",
      "keywords": "pine cone paste, cypress cone paste, kozalak macunu, çam kozalağı pekmezi, selvi kozalagi"
    },
    {
      "title": "Traditionelle Zypressenzapfen Paste",
      "description": "Original anatolische Zypressenzapfen Paste mit Honig und Propolis. Das traditionelle Naturheilmittel für freie Atemwege, ideal auch für Kinder.",
      "h1": "Zypressenzapfen Paste",
      "url": "zypressenzapfen-paste.html",
      "image": "assets/zypressenzapfen-paste-anadoa-naturhaus.png",
      "category": "Traditionelle Pasten",
      "keywords": "pine cone paste, cypress cone paste, kozalak macunu, çam kozalağı pekmezi, selvi kozalagi"
    }
  ];
  // SEARCH_INDEX_END

  function normalizeString(str) {
    return str
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/ı/g, 'i')
      .replace(/ö/g, 'o')
      .replace(/ü/g, 'u')
      .replace(/ş/g, 's')
      .replace(/ç/g, 'c')
      .replace(/ğ/g, 'g')
      .replace(/ß/g, 'ss')
      .replace(/ae/g, 'a')
      .replace(/oe/g, 'o')
      .replace(/ue/g, 'u');
  }

  function escapeHtml(str) {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function performSearch(query) {
    if (!searchIndex) return;
    const normalizedQuery = normalizeString(query);
    if (!normalizedQuery) {
      searchResults.innerHTML = '';
      searchResults.classList.add('hidden');
      return;
    }

    const scoredItems = [];

    searchIndex.forEach(item => {
      const normalizedTitle = normalizeString(item.title || '');
      const normalizedDesc = normalizeString(item.description || '');
      const normalizedH1 = normalizeString(item.h1 || '');
      const normalizedCategory = normalizeString(item.category || '');
      const normalizedKeywords = normalizeString(item.keywords || '');

      let score = 0;

      // 1. Title Match (Highest relevance weight)
      if (normalizedTitle === normalizedQuery) {
        score += 500;
      } else if (normalizedTitle.startsWith(normalizedQuery)) {
        score += 300;
      } else if (normalizedTitle.includes(normalizedQuery)) {
        score += 150;
      }

      // 2. Keywords/Synonyms Match (Second weight)
      if (normalizedKeywords.includes(normalizedQuery)) {
        if (normalizedKeywords === normalizedQuery) {
          score += 250;
        } else {
          score += 100;
        }
      }

      // 3. H1 Match
      if (normalizedH1 === normalizedQuery) {
        score += 200;
      } else if (normalizedH1.includes(normalizedQuery)) {
        score += 80;
      }

      // 4. Category Match
      if (normalizedCategory.includes(normalizedQuery)) {
        score += 40;
      }

      // 5. Description Match (Lowest weight)
      if (normalizedDesc.includes(normalizedQuery)) {
        score += 20;
      }

      if (score > 0) {
        scoredItems.push({ item, score });
      }
    });

    // Sort descending by score
    scoredItems.sort((a, b) => b.score - a.score);

    // Extract sorted items
    const matches = scoredItems.map(si => si.item);

    renderResults(matches, query);
  }

  function renderResults(matches, query) {
    if (!searchResults) return;
    searchResults.classList.remove('hidden');

    if (matches.length === 0) {
      searchResults.innerHTML = `
                <div class="text-center py-10 text-ash-light">
                    <svg class="w-12 h-12 text-ash-light/30 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <p class="font-medium text-sm">Keine Produkte für "<span class="text-mocha font-bold">${escapeHtml(query)}</span>" gefunden.</p>
                    <p class="text-xs text-ash-light/60 mt-1">Versuchen Sie es mit einem anderen Begriff.</p>
                </div>
            `;
      return;
    }

    searchResults.innerHTML = matches.map(item => {
      let imgSrc = item.image || '';
      const isFallback = !imgSrc || imgSrc === 'assets/anadoa-favicon.png' || imgSrc.includes('favicon');
      if (isFallback) {
        imgSrc = 'assets/anadoa-logo-1100-1100.png';
      }
      const isLogo = imgSrc.includes('logo');
      const imgClass = isLogo ? 'w-full h-full object-contain p-2' : 'w-full h-full object-cover';

      return `
            <a href="${item.url}" class="flex items-center gap-4 p-3 rounded-2xl hover:bg-earth-light/40 transition-colors group">
                <div class="w-16 h-16 rounded-xl overflow-hidden bg-white flex-shrink-0 border border-gold/10 flex items-center justify-center">
                    <img src="${imgSrc}" alt="${item.title}" class="${imgClass}" onerror="this.src='assets/anadoa-logo-1100-1100.png'; this.className='w-full h-full object-contain p-2'; this.onerror=null;">
                </div>
                <div class="flex-1 min-w-0">
                    <span class="text-[10px] uppercase tracking-wider text-sage font-bold block">${item.category}</span>
                    <h4 class="font-serif font-bold text-ash group-hover:text-gold transition-colors text-base truncate">${item.title}</h4>
                    <p class="text-xs text-ash-light truncate mt-0.5">${item.description}</p>
                </div>
                <svg class="w-5 h-5 text-ash-light/40 group-hover:text-gold group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
            </a>
            `;
    }).join('');
  }

  if (searchOpenBtn && searchModal) {
    searchOpenBtn.addEventListener('click', () => {
      searchModal.classList.remove('opacity-0', 'pointer-events-none');
      searchModal.classList.add('opacity-100', 'pointer-events-auto');
      if (searchInput) {
        searchInput.value = '';
        searchInput.focus();
      }
      if (searchResults) {
        searchResults.innerHTML = '';
        searchResults.classList.add('hidden');
      }
      // Search index is now pre-loaded statically to support local file:// protocol
      document.body.style.overflow = 'hidden';
    });
  }

  if (searchCloseBtn && searchModal) {
    searchCloseBtn.addEventListener('click', () => {
      searchModal.classList.remove('opacity-100', 'pointer-events-auto');
      searchModal.classList.add('opacity-0', 'pointer-events-none');
      document.body.style.overflow = '';
    });
  }

  if (searchModal) {
    searchModal.addEventListener('click', (e) => {
      if (e.target === searchModal) {
        searchCloseBtn.click();
      }
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.trim();
      if (!query) {
        if (searchResults) {
          searchResults.innerHTML = '';
          searchResults.classList.add('hidden');
        }
        return;
      }

      performSearch(query);
    });
  }

  // Popular Searches Event Listeners
  document.querySelectorAll('.popular-search-tag').forEach(tag => {
    tag.addEventListener('click', () => {
      if (searchInput) {
        searchInput.value = tag.textContent.trim();
        searchInput.dispatchEvent(new Event('input'));
        searchInput.focus();
      }
    });
  });

  function toggleMobileMenu() {
    const isOpen = !mobileMenu.classList.contains('opacity-0');

    mobileMenu.classList.toggle('opacity-0', isOpen);
    mobileMenu.classList.toggle('pointer-events-none', isOpen);

    // İkonların mantığını düzelttik: Biri gizlenirken diğeri gösterilecek
    // Animasyonlu SVG geçişi için opacity ve scale kullanıyoruz
    menuIcon.classList.toggle('opacity-0', !isOpen);
    menuIcon.classList.toggle('scale-50', !isOpen);
    closeIcon.classList.toggle('opacity-0', isOpen);
    closeIcon.classList.toggle('scale-50', isOpen);

    document.body.style.overflow = isOpen ? '' : 'hidden';
  }

  mobileBtn.addEventListener('click', toggleMobileMenu);

  document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', toggleMobileMenu);
  });
}

// DOM yüklenince çalıştır
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initNavigation);
} else {
  initNavigation();
}