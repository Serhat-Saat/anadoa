const navHTML = `
<!-- Global Navigation -->
<nav class="fixed w-full z-50 top-6 transition-all duration-300" id="global-nav">
  <div class="max-w-[95%] md:max-w-6xl mx-auto relative z-50">
    <div class="bg-earth border border-earth-light shadow-xl rounded-full px-6 flex justify-between items-center h-[72px] transition-all duration-300 relative" id="nav-container">
      
      <!-- Mobile Menu Button (Left) -->
      <div class="lg:hidden flex items-center flex-1">
        <button aria-label="Toggle Menu" class="text-ash hover:text-gold focus:outline-none p-2 transition-colors relative w-10 h-10 flex items-center justify-center" id="mobile-menu-btn">
          <i id="menu-icon" class="ri-menu-line nav-icon-2xl absolute transition-all duration-300"></i>
          <i id="close-icon" class="ri-close-line nav-icon-2xl absolute transition-all duration-300 opacity-0 scale-50"></i>
        </button>
      </div>

      <!-- Left Links (Desktop) -->
      <div class="hidden lg:flex items-center justify-end space-x-6 lg:space-x-10 flex-1 pr-4 lg:pr-8">
        <div class="group h-full flex items-center relative">
          <button class="flex items-center text-ash hover:text-gold text-sm uppercase tracking-widest font-bold transition-colors focus:outline-none h-[72px]">
            Über uns
            <i class="ri-arrow-down-s-line ml-1 transition-transform group-hover:rotate-180 text-gold font-bold"></i>
          </button>
          <div class="absolute left-0 top-full w-48 bg-earth border border-earth-light shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top z-50 rounded-2xl p-4 flex flex-col space-y-3">
            <a class="text-ash hover:text-gold text-sm font-bold transition-colors" href="ueber-uns.html">Über uns</a>
            <a class="text-ash hover:text-gold text-sm font-bold transition-colors" href="philosophie.html">Philosophie</a>
          </div>
        </div>
        <a class="text-ash hover:text-gold text-sm uppercase tracking-widest font-bold transition-colors" href="rezepte.html">Rezepte</a>
      </div>

      <!-- Logo (Center) -->
      <a class="flex-shrink-0 flex justify-center items-center group relative z-50 w-48 lg:w-[260px]" href="/">
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
          <div class="absolute left-1/2 -translate-x-1/2 top-[72px] w-[95vw] max-w-[1250px] bg-earth border border-earth-light shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top z-50 rounded-3xl mt-4">
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
                    <li><a class="text-ash-light hover:text-gold block" href="lorbeerkernoel.html">Lorbeerkernöl</a></li>
                    <li><a class="text-ash-light hover:text-gold block" href="mandeloel.html">Mandelöl</a></li>
                    <li><a class="text-ash-light hover:text-gold block" href="jojobaoel.html">Jojobaöl</a></li>
                    <li><a class="text-ash-light hover:text-gold block" href="aprikosenkernoel.html">Aprikosenkernöl</a></li>
                    <li><a class="text-ash-light hover:text-gold block" href="traubenkernoel.html">Traubenkernöl</a></li>
                    <li><a class="text-ash-light hover:text-gold block" href="sesamoel.html">Sesamöl</a></li>
                    <li><a class="text-ash-light hover:text-gold block" href="hanfoel.html">Hanföl</a></li>
                    <li><a class="text-ash-light hover:text-gold block" href="nachtkerzenoel.html">Nachtkerzenöl</a></li>
                    <li><a class="text-ash-light hover:text-gold block" href="arganoel.html">Arganöl</a></li>
                    <li><a class="text-sage hover:text-gold block mt-2 text-xs uppercase tracking-wider font-bold" href="kaltgepresste-oele.html">Alle 29 Öle ansehen →</a></li>
                  </ul>
                                    <h3 class="font-serif font-bold text-base text-mocha mb-3 border-b border-earth-light pb-2 mt-5"><a class="hover:text-gold" href="traegeroele.html">Trägeröle (Basisöle)</a></h3>
                  <ul class="space-y-2 text-sm mb-5">
                    <li><a class="text-ash-light hover:text-gold block" href="mandeloel.html">Mandelöl</a></li>
                    <li><a class="text-ash-light hover:text-gold block" href="jojobaoel.html">Jojobaöl</a></li>
                    <li><a class="text-ash-light hover:text-gold block" href="arganoel.html">Arganöl</a></li>
                    <li><a class="text-ash-light hover:text-gold block" href="traubenkernoel.html">Traubenkernöl</a></li>
                    <li><a class="text-sage hover:text-gold block mt-2 text-xs uppercase tracking-wider font-bold" href="traegeroele.html">Alle Trägeröle ansehen →</a></li>
                  </ul>
                  <h3 class="font-serif font-bold text-base text-mocha mb-3 border-b border-earth-light pb-2 mt-5"><a class="hover:text-gold" href="pflanzenwasser.html">Pflanzenwasser</a></h3>
                  <ul class="space-y-2 text-sm mb-5">
                    <li><a class="text-ash-light hover:text-gold block" href="rosenwasser.html">Rosenwasser</a></li>
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
                  <h3 class="font-serif font-bold text-base text-mocha mb-3 border-b border-earth-light pb-2 mt-5"><span class="text-mocha cursor-default">Spezielle Kollektionen</span></h3>
                  <ul class="space-y-2 text-sm mb-5">
                    <li><a class="text-[#006C3E] font-bold hover:text-gold block" href="kinder-kollektion.html">Für unsere kleinen Helden</a></li>
                    <li><a class="text-gold font-bold hover:text-mocha block" href="sumix.html">Sumix (Sumak Komplex)</a></li>
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
                    <li><a class="text-ash-light hover:text-gold block" href="paste-fuer-frauen.html">Paste für Frauen</a></li>
                    <li><a class="text-ash-light hover:text-gold block" href="bittermelone-paste-honig.html">Bittermelone Paste</a></li>
                    <li><a class="text-ash-light hover:text-gold block" href="tahini.html">Tahini (Sesammus)</a></li>
                  </ul>
                  <h3 class="font-serif font-bold text-base text-mocha mb-3 border-b border-earth-light pb-2 mt-5"><a class="hover:text-gold" href="naturseifen.html">Naturkosmetik & Seifen</a></h3>
                  <ul class="space-y-2 text-sm mb-5">
                    <li><a class="text-ash-light hover:text-gold block" href="naturseifen.html">Handgemachte Naturseifen</a></li>
                    <li><a class="text-ash-light hover:text-gold block" href="the-nioli.html">The Nioli Pflegeset</a></li>
                    <li><a class="text-ash-light hover:text-gold block" href="luffa-seifen.html">Luffa Peeling Seifen</a></li>
                    <li><a class="text-gold font-bold hover:text-mocha block mt-2" href="rushur-stein.html">Rushur Stein (5er Set)</a></li>
                  </ul>
                  
                  <!-- Lebendiger Essig & Säfte buraya, Naturkosmetik altına alındı -->
                  <h3 class="font-serif font-bold text-base text-mocha mb-3 border-b border-earth-light pb-2 mt-5"><a class="hover:text-gold" href="essig.html">Lebendiger Essig & Säfte</a></h3>
                  <ul class="space-y-2 text-sm">
                    <li><a class="text-gold font-medium hover:text-mocha block" href="gilaburu-saft.html">Gilaburu Saft</a></li>
                    <li><a class="text-ash-light hover:text-gold block" href="apfelessig.html">Apfelessig</a></li>
                    <li><a class="text-ash-light hover:text-gold block" href="traubenessig.html">Traubenessig</a></li>
                    <li><a class="text-ash-light hover:text-gold block" href="weissdorn-essig.html">Weißdorn Essig</a></li>
                    <li><a class="text-ash-light hover:text-gold block" href="kraeutermischung-essig.html">Kräutermischung Essig</a></li>
                  </ul>
                </div>

                <!-- Col 4: Melassen & Tees -->
                <div>
                  <h3 class="font-serif font-bold text-base text-mocha mb-3 border-b border-earth-light pb-2"><a class="hover:text-gold" href="melassen.html">Melassen</a></h3>
                  <ul class="space-y-2 text-sm mb-5">
                    <li><a class="text-ash-light hover:text-gold block" href="traubenmelasse.html">Traubenmelasse</a></li>
                    <li><a class="text-ash-light hover:text-gold block" href="johannisbrot-melasse.html">Johannisbrot Melasse</a></li>
                    <li><a class="text-ash-light hover:text-gold block" href="wacholderbeeren-melasse.html">Wacholderbeeren</a></li>
                    <li><a class="text-ash-light hover:text-gold block" href="maulbeeren-melasse.html">Maulbeeren Melasse</a></li>
                    <li><a class="text-ash-light hover:text-gold block" href="dattel-melasse.html">Dattel Melasse</a></li>
                  </ul>
                  <h3 class="font-serif font-bold text-base text-mocha mb-3 border-b border-earth-light pb-2 mt-5"><a class="hover:text-gold" href="sirupe.html">Natürliche Sirupe</a></h3>
                  <ul class="space-y-2 text-sm mb-5">
                    <li><a class="text-ash-light hover:text-gold block" href="tannenzapfen-sirup.html">Tannenzapfen Sirup</a></li>
                    <li><a class="text-ash-light hover:text-gold block" href="schwarzer-maulbeersirup.html">Schwarzer Maulbeersirup</a></li>
                    <li><a class="text-ash-light hover:text-gold block" href="schwarze-maulbeere-sirup-fur-kinder.html">Maulbeere Sirup (Kinder)</a></li>
                    <li><a class="text-ash-light hover:text-gold block" href="granatapfelsirup.html">Granatapfelsirup</a></li>
                    <li><a class="text-ash-light hover:text-gold block" href="kinder-sirup-mix-mit-honig-propolis.html">Kinder Sirup Mix</a></li>
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
          <i class="ri-search-line nav-icon-2xl"></i>
        </button>
      </div>

    </div>
  </div>

  <!-- Mobile Drawer Menu -->
  <div class="fixed inset-0 bg-earth z-40 transition-all duration-500 opacity-0 pointer-events-none lg:hidden flex flex-col" id="mobile-menu">
    <div class="flex-1 overflow-y-auto pt-32 pb-12 px-8 flex flex-col gap-8 custom-scrollbar">
      
      <nav class="flex flex-col space-y-6">
        <!-- Über uns Accordion -->
        <div class="w-full">
          <button class="w-full text-left flex justify-between items-center mobile-nav-hero-link font-serif text-mocha hover:text-gold transition-colors group" onclick="this.nextElementSibling.classList.toggle('max-h-0'); this.nextElementSibling.classList.toggle('max-h-[200px]'); this.nextElementSibling.classList.toggle('mt-4'); this.nextElementSibling.classList.toggle('opacity-0'); this.querySelector('i').classList.toggle('rotate-180');">
            Über uns
            <i class="ri-arrow-down-s-line text-gold text-2xl transition-transform duration-300"></i>
          </button>
          <div class="max-h-0 opacity-0 overflow-hidden transition-all duration-500 ease-in-out px-2 space-y-4 flex flex-col">
            <a class="text-xl font-serif text-mocha hover:text-gold transition-colors block pl-6 mt-2" href="ueber-uns.html">Über uns</a>
            <a class="text-xl font-serif text-mocha hover:text-gold transition-colors block pl-6" href="philosophie.html">Philosophie</a>
          </div>
        </div>
        <a class="mobile-nav-hero-link font-serif text-mocha hover:text-gold transition-colors block mobile-link" href="rezepte.html">Rezepte</a>
        <a class="mobile-nav-hero-link font-serif text-mocha hover:text-gold transition-colors block mobile-link" href="magazin.html">Magazin</a>
      </nav>

      <hr class="border-earth-light my-2"/>

      <!-- Mobile Categories Accordion -->
      <div class="space-y-6">
        <h2 class="text-xs uppercase tracking-[0.2em] text-ash/50 font-bold mb-4">Unsere Kategorien</h2>
        
        <!-- 1. Kaltgepresste Öle -->
        <div class="border-b border-earth-light pb-4">
          <button class="w-full text-left flex justify-between items-center mobile-nav-category-link font-serif text-mocha hover:text-gold transition-colors group" onclick="this.nextElementSibling.classList.toggle('max-h-0'); this.nextElementSibling.classList.toggle('max-h-[700px]'); this.nextElementSibling.classList.toggle('mt-4'); this.nextElementSibling.classList.toggle('opacity-0'); this.querySelector('i').classList.toggle('rotate-180');">
            Kaltgepresste Öle
            <i class="ri-arrow-down-s-line text-gold text-2xl transition-transform duration-300"></i>
          </button>
          <div class="max-h-0 opacity-0 overflow-hidden transition-all duration-500 ease-in-out px-2 space-y-4">
            <a class="block text-gold font-bold text-lg mb-2 uppercase tracking-widest text-sm" href="kaltgepresste-oele.html">Übersicht ansehen</a>
            <a class="block text-ash hover:text-gold text-lg font-light" href="schwarzkummelol.html">Premium Schwarzkümmelöl</a>
            <a class="block text-ash-light hover:text-gold text-base font-light ml-4" href="schwarzkummelol-fuer-kinder.html">↳ Für Kinder (Orange)</a>
            <a class="block text-ash-light hover:text-gold text-base font-light ml-4" href="schwarzkummelol-kinder-erdbeer.html">↳ Für Kinder (Erdbeer)</a>
            <a class="block text-ash-light hover:text-gold text-base font-light ml-4" href="schwarzkummelol-mit-minze.html">↳ Mit Minze</a>
            <a class="block text-ash hover:text-gold text-lg font-light" href="leinoel.html">Leinöl</a>
            <a class="block text-ash hover:text-gold text-lg font-light" href="kuerbiskernoel.html">Kürbiskernöl</a>
            <a class="block text-ash hover:text-gold text-lg font-light" href="lorbeerkernoel.html">Lorbeerkernöl</a>
            <a class="block text-ash hover:text-gold text-lg font-light" href="arganoel.html">Arganöl</a>
          </div>
        </div>

        <!-- 2. Ätherische Öle -->
        <div class="border-b border-earth-light pb-4">
          <button class="w-full text-left flex justify-between items-center mobile-nav-category-link font-serif text-mocha hover:text-gold transition-colors group" onclick="this.nextElementSibling.classList.toggle('max-h-0'); this.nextElementSibling.classList.toggle('max-h-[500px]'); this.nextElementSibling.classList.toggle('mt-4'); this.nextElementSibling.classList.toggle('opacity-0'); this.querySelector('i').classList.toggle('rotate-180');">
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

        <!-- 2.5 Trägeröle -->
        <div class="border-b border-earth-light pb-4">
          <button class="w-full text-left flex justify-between items-center mobile-nav-category-link font-serif text-mocha hover:text-gold transition-colors group" onclick="this.nextElementSibling.classList.toggle('max-h-0'); this.nextElementSibling.classList.toggle('max-h-[300px]'); this.nextElementSibling.classList.toggle('mt-4'); this.nextElementSibling.classList.toggle('opacity-0'); this.querySelector('i').classList.toggle('rotate-180');">
            Trägeröle (Basisöle)
            <i class="ri-arrow-down-s-line text-gold text-2xl transition-transform duration-300"></i>
          </button>
          <div class="max-h-0 opacity-0 overflow-hidden transition-all duration-500 ease-in-out px-2 space-y-4">
            <a class="block text-gold font-bold text-lg mb-2 uppercase tracking-widest text-sm" href="traegeroele.html">Übersicht ansehen</a>
            <a class="block text-ash hover:text-gold text-lg font-light" href="mandeloel.html">Mandelöl</a>
            <a class="block text-ash hover:text-gold text-lg font-light" href="jojobaoel.html">Jojobaöl</a>
            <a class="block text-ash hover:text-gold text-lg font-light" href="arganoel.html">Arganöl</a>
            <a class="block text-ash hover:text-gold text-lg font-light" href="traubenkernoel.html">Traubenkernöl</a>
          </div>
        </div>

        <!-- 3. Melassen -->
        <div class="border-b border-earth-light pb-4">
          <button class="w-full text-left flex justify-between items-center mobile-nav-category-link font-serif text-mocha hover:text-gold transition-colors group" onclick="this.nextElementSibling.classList.toggle('max-h-0'); this.nextElementSibling.classList.toggle('max-h-[600px]'); this.nextElementSibling.classList.toggle('mt-4'); this.nextElementSibling.classList.toggle('opacity-0'); this.querySelector('i').classList.toggle('rotate-180');">
            Melassen
            <i class="ri-arrow-down-s-line text-gold text-2xl transition-transform duration-300"></i>
          </button>
          <div class="max-h-0 opacity-0 overflow-hidden transition-all duration-500 ease-in-out px-2 space-y-4">
            <a class="block text-gold font-bold text-lg mb-2 uppercase tracking-widest text-sm" href="melassen.html">Übersicht ansehen</a>
            <a class="block text-ash hover:text-gold text-lg font-light" href="traubenmelasse.html">Traubenmelasse</a>
            <a class="block text-ash hover:text-gold text-lg font-light" href="johannisbrot-melasse.html">Johannisbrot Melasse</a>
            <a class="block text-ash hover:text-gold text-lg font-light" href="wacholderbeeren-melasse.html">Wacholderbeeren Melasse</a>
            <a class="block text-ash hover:text-gold text-lg font-light" href="maulbeeren-melasse.html">Maulbeeren Melasse</a>
            <a class="block text-ash hover:text-gold text-lg font-light" href="dattel-melasse.html">Dattel Melasse</a>
          </div>
        </div>

        <!-- 3.5 Sirupe -->
        <div class="border-b border-earth-light pb-4">
          <button class="w-full text-left flex justify-between items-center mobile-nav-category-link font-serif text-mocha hover:text-gold transition-colors group" onclick="this.nextElementSibling.classList.toggle('max-h-0'); this.nextElementSibling.classList.toggle('max-h-[600px]'); this.nextElementSibling.classList.toggle('mt-4'); this.nextElementSibling.classList.toggle('opacity-0'); this.querySelector('i').classList.toggle('rotate-180');">
            Natürliche Sirupe
            <i class="ri-arrow-down-s-line text-gold text-2xl transition-transform duration-300"></i>
          </button>
          <div class="max-h-0 opacity-0 overflow-hidden transition-all duration-500 ease-in-out px-2 space-y-4">
            <a class="block text-gold font-bold text-lg mb-2 uppercase tracking-widest text-sm" href="sirupe.html">Übersicht ansehen</a>
            <a class="block text-ash hover:text-gold text-lg font-light" href="tannenzapfen-sirup.html">Tannenzapfen Sirup</a>
            <a class="block text-ash hover:text-gold text-lg font-light" href="schwarzer-maulbeersirup.html">Schwarzer Maulbeersirup</a>
            <a class="block text-ash hover:text-gold text-lg font-light" href="schwarze-maulbeere-sirup-fur-kinder.html">Maulbeere Sirup (Kinder)</a>
            <a class="block text-ash hover:text-gold text-lg font-light" href="granatapfelsirup.html">Granatapfelsirup</a>
            <a class="block text-ash hover:text-gold text-lg font-light" href="kinder-sirup-mix-mit-honig-propolis.html">Kinder Sirup Mix</a>
          </div>
        </div>

        <!-- 4. Traditionelle Pasten -->
        <div class="border-b border-earth-light pb-4">
          <button class="w-full text-left flex justify-between items-center mobile-nav-category-link font-serif text-mocha hover:text-gold transition-colors group" onclick="this.nextElementSibling.classList.toggle('max-h-0'); this.nextElementSibling.classList.toggle('max-h-[1000px]'); this.nextElementSibling.classList.toggle('mt-4'); this.nextElementSibling.classList.toggle('opacity-0'); this.querySelector('i').classList.toggle('rotate-180');">
            Traditionelle Pasten
            <i class="ri-arrow-down-s-line text-gold text-2xl transition-transform duration-300"></i>
          </button>
          <div class="max-h-0 opacity-0 overflow-hidden transition-all duration-500 ease-in-out px-2 space-y-4">
            <a class="block text-gold font-bold text-lg mb-2 uppercase tracking-widest text-sm" href="pasten.html">Übersicht ansehen</a>
            <a class="block text-ash hover:text-gold text-lg font-light" href="zypressenzapfen-paste.html">Zypressenzapfen Paste</a>
            <a class="block text-ash hover:text-gold text-lg font-light" href="tannenzapfen-paste-kinder.html">Tannenzapfen Paste (Kinder)</a>
            <a class="block text-ash hover:text-gold text-lg font-light" href="mariendistel-paste.html">Mariendistel Paste</a>
            <a class="block text-ash hover:text-gold text-lg font-light" href="paste-fuer-maenner.html">Paste für Männer (Mesir)</a>
            <a class="block text-ash hover:text-gold text-lg font-light" href="paste-fuer-frauen.html">Paste für Frauen</a>
            <a class="block text-ash hover:text-gold text-lg font-light" href="bittermelone-paste-honig.html">Bittermelone Paste mit Honig</a>
            <a class="block text-ash hover:text-gold text-lg font-light" href="bittermelone-paste-olivenoel.html">Bittermelone Paste mit Olivenöl</a>
            <a class="block text-ash hover:text-gold text-lg font-light" href="tahini.html">Tahini (Sesammus)</a>
          </div>
        </div>

        <!-- 4.5 Spezielle Produkte -->
        <div class="border-b border-earth-light pb-4">
          <button class="w-full text-left flex justify-between items-center mobile-nav-category-link font-serif text-mocha hover:text-gold transition-colors group" onclick="this.nextElementSibling.classList.toggle('max-h-0'); this.nextElementSibling.classList.toggle('max-h-[300px]'); this.nextElementSibling.classList.toggle('mt-4'); this.nextElementSibling.classList.toggle('opacity-0'); this.querySelector('i').classList.toggle('rotate-180');">
            Spezielle Kollektionen
            <i class="ri-arrow-down-s-line text-gold text-2xl transition-transform duration-300"></i>
          </button>
          <div class="max-h-0 opacity-0 overflow-hidden transition-all duration-500 ease-in-out px-2 space-y-4">
            <a class="block text-[#006C3E] font-bold text-lg" href="kinder-kollektion.html">Für unsere kleinen Helden</a>
            <a class="block text-ash hover:text-gold text-lg font-light" href="sumix.html">Sumix (Sumak Komplex)</a>
          </div>
        </div>

        <!-- 5. Lebendiger Essig & Säfte -->
        <div class="border-b border-earth-light pb-4">
          <button class="w-full text-left flex justify-between items-center mobile-nav-category-link font-serif text-mocha hover:text-gold transition-colors group" onclick="this.nextElementSibling.classList.toggle('max-h-0'); this.nextElementSibling.classList.toggle('max-h-[700px]'); this.nextElementSibling.classList.toggle('mt-4'); this.nextElementSibling.classList.toggle('opacity-0'); this.querySelector('i').classList.toggle('rotate-180');">
            Lebendiger Essig &amp; Säfte
            <i class="ri-arrow-down-s-line text-gold text-2xl transition-transform duration-300"></i>
          </button>
          <div class="max-h-0 opacity-0 overflow-hidden transition-all duration-500 ease-in-out px-2 space-y-4">
            <a class="block text-gold font-bold text-lg mb-2 uppercase tracking-widest text-sm" href="essig.html">Übersicht ansehen</a>
            <a class="block text-ash hover:text-gold text-lg font-light" href="gilaburu-saft.html">Gilaburu Saft</a>
            <a class="block text-ash hover:text-gold text-lg font-light" href="apfelessig.html">Apfelessig</a>
            <a class="block text-ash hover:text-gold text-lg font-light" href="traubenessig.html">Traubenessig</a>
            <a class="block text-ash hover:text-gold text-lg font-light" href="weissdorn-essig.html">Weißdorn Essig</a>
            <a class="block text-ash hover:text-gold text-lg font-light" href="ananas-essig.html">Ananas Essig</a>
            <a class="block text-ash hover:text-gold text-lg font-light" href="oxymel-gold-essig.html">Oxymel Gold Essig</a>
          </div>
        </div>

        <!-- 6. Natürliche Gewürze -->
        <div class="border-b border-earth-light pb-4">
          <button class="w-full text-left flex justify-between items-center mobile-nav-category-link font-serif text-mocha hover:text-gold transition-colors group" onclick="this.nextElementSibling.classList.toggle('max-h-0'); this.nextElementSibling.classList.toggle('max-h-[500px]'); this.nextElementSibling.classList.toggle('mt-4'); this.nextElementSibling.classList.toggle('opacity-0'); this.querySelector('i').classList.toggle('rotate-180');">
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

        <!-- 7. Naturtee & Kuren -->
        <div class="border-b border-earth-light pb-4">
          <button class="w-full text-left flex justify-between items-center mobile-nav-category-link font-serif text-mocha hover:text-gold transition-colors group" onclick="this.nextElementSibling.classList.toggle('max-h-0'); this.nextElementSibling.classList.toggle('max-h-[400px]'); this.nextElementSibling.classList.toggle('mt-4'); this.nextElementSibling.classList.toggle('opacity-0'); this.querySelector('i').classList.toggle('rotate-180');">
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

        <!-- 8. Pflanzenwasser -->
        <div class="border-b border-earth-light pb-4">
          <button class="w-full text-left flex justify-between items-center mobile-nav-category-link font-serif text-mocha hover:text-gold transition-colors group" onclick="this.nextElementSibling.classList.toggle('max-h-0'); this.nextElementSibling.classList.toggle('max-h-[300px]'); this.nextElementSibling.classList.toggle('mt-4'); this.nextElementSibling.classList.toggle('opacity-0'); this.querySelector('i').classList.toggle('rotate-180');">
            Pflanzenwasser
            <i class="ri-arrow-down-s-line text-gold text-2xl transition-transform duration-300"></i>
          </button>
          <div class="max-h-0 opacity-0 overflow-hidden transition-all duration-500 ease-in-out px-2 space-y-4">
            <a class="block text-gold font-bold text-lg mb-2 uppercase tracking-widest text-sm" href="pflanzenwasser.html">Übersicht ansehen</a>
            <a class="block text-ash hover:text-gold text-lg font-light" href="rosenwasser.html">Rosenwasser (Gül Suyu)</a>
            <a class="block text-ash hover:text-gold text-lg font-light" href="rosmarinwasser.html">Rosmarinwasser</a>
          </div>
        </div>

        <!-- 9. Naturkosmetik & Seifen -->
        <div class="border-b border-earth-light pb-4">
          <button class="w-full text-left flex justify-between items-center mobile-nav-category-link font-serif text-mocha hover:text-gold transition-colors group" onclick="this.nextElementSibling.classList.toggle('max-h-0'); this.nextElementSibling.classList.toggle('max-h-[400px]'); this.nextElementSibling.classList.toggle('mt-4'); this.nextElementSibling.classList.toggle('opacity-0'); this.querySelector('i').classList.toggle('rotate-180');">
            Naturkosmetik &amp; Seifen
            <i class="ri-arrow-down-s-line text-gold text-2xl transition-transform duration-300"></i>
          </button>
          <div class="max-h-0 opacity-0 overflow-hidden transition-all duration-500 ease-in-out px-2 space-y-4">
            <a class="block text-gold font-bold text-lg mb-2 uppercase tracking-widest text-sm" href="naturseifen.html">Übersicht ansehen</a>
            <a class="block text-ash hover:text-gold text-lg font-light" href="naturseifen.html">Naturseifen</a>
            <a class="block text-ash hover:text-gold text-lg font-light" href="the-nioli.html">The Nioli Pflegeset</a>
            <a class="block text-ash hover:text-gold text-lg font-light" href="luffa-seifen.html">Luffa Seifen</a>
            <a class="block text-ash hover:text-gold text-lg font-light" href="rushur-stein.html">Rushur Stein (5er Set)</a>
          </div>
        </div>
      </div>
      
      <!-- Compact bottom-aligned Kundenservice section (mt-auto pushes it to the bottom of scroll area) -->
      <div class="mt-auto pt-8 border-t border-earth-light/60 text-center">
        <p class="text-ash/50 text-[10px] uppercase tracking-[0.2em] mb-1 font-bold">Kundenservice</p>
        <p class="text-mocha font-serif text-sm mb-3">Haben Sie Fragen zu unseren Naturkuren?</p>
        <a class="inline-flex items-center gap-2 bg-[#006C3E] text-white font-bold py-2.5 px-6 rounded-full shadow-md text-xs hover:bg-ash transition-colors duration-300" href="tel:+490000000">
          <i class="ri-phone-line"></i> Kundenservice anrufen
        </a>
      </div>

    </div>
  </div>
</nav>

<!-- SEARCH MODAL -->
<div id="search-modal" class="fixed inset-0 bg-mocha/60 backdrop-blur-md z-50 flex items-start justify-center pt-28 px-4 opacity-0 pointer-events-none transition-all duration-300">
  <div class="bg-earth w-full max-w-2xl rounded-3xl p-6 md:p-8 shadow-2xl border border-earth-light relative flex flex-col max-h-[80vh]">
    <button id="search-close-btn" class="absolute top-6 right-6 text-ash hover:text-gold p-2 rounded-full transition-colors">
      <i class="ri-close-line nav-icon-2xl"></i>
    </button>
    <h3 class="font-serif text-2xl text-mocha mb-4 flex-shrink-0">Produkte suchen</h3>
    <div class="relative flex-shrink-0">
      <input type="text" id="search-input" placeholder="z.B. Schwarzkümmelöl, Atom Tee, Rushur Stein..." class="w-full bg-white border border-earth-light rounded-full py-4 pl-12 pr-6 text-ash placeholder-ash/40 focus:outline-none focus:border-gold shadow-inner text-base">
      <i class="ri-search-line nav-icon-lg text-ash/40 absolute left-4 top-1/2 -translate-y-1/2"></i>
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
      "description": "Entdecken Sie unsere Kollektion an 100% naturreinen aetherischen Oelen. Von beruhigendem Lavendel bis zu kraeftigem Oregano - die...",
      "h1": "Ätherische Öle",
      "url": "aetherische-oele.html",
      "image": "assets/lavendeloel-anadoa-naturhaus.png",
      "category": "Kategorien Übersicht",
      "keywords": "ätherische öle kategorie, uçucu yağlar, essential oils, aromatherapie, lavendelöl, eukalyptusöl",
      "isProduct": false
    },
    {
      "title": "Kategorien Übersicht – Entdecken Sie Anadoa Naturprodukte",
      "description": "Entdecken Sie unsere gesamte Produktvielfalt aus Anatolien: Kaltgepresste Öle, ätherische Essenzen, traditionelle Kräuterpasten (Macun),...",
      "h1": "Unsere Kategorien",
      "url": "alle-kategorien.html",
      "image": "assets/schwarzkuemmeloel-hoher-thymochinongehalt-anadoa-naturhaus.png",
      "category": "Kategorien Übersicht",
      "keywords": "alle kategorien, tüm kategoriler, anadoa produktkatalog, sortiment",
      "isProduct": false
    },
    {
      "title": "Ananas Essig",
      "description": "Tropische Fermentation | Enzym-Kraftpaket",
      "h1": "Ananas Essig",
      "url": "ananas-essig.html",
      "image": "assets/ananas-essig-anadoa-naturhaus.png",
      "category": "Lebendige Essige & Säfte",
      "keywords": "ananas essig, ananas sirkesi, pineapple vinegar, bromelain, enzym, fruchtessig, stoffwechsel",
      "isProduct": true
    },
    {
      "title": "Naturtrüber Apfelessig mit der Mutter: Wirkung & Anwendung Magazin",
      "description": "Erfahren Sie alles über naturtrüben Apfelessig mit Essigmutter: Warum unpasteurisierter Essig ein probiotisches Kraftpaket für Darm,...",
      "h1": "Naturtrüber Apfelessig mit der Mutter: Das probiotische Elixier",
      "url": "apfelessig-mit-mutter-wirkung-gesundheit.html",
      "image": "assets/magazin_apfelessig.png",
      "category": "Ratgeber & Wissen",
      "keywords": "ratgeber, wissen, gesundheit, anatolische tradition, apfelessig mit mutter wirkung gesundheit",
      "isProduct": false
    },
    {
      "title": "Apfelessig",
      "description": "Talkim Apfel | Naturtrüb & Lebendig",
      "h1": "Apfelessig",
      "url": "apfelessig.html",
      "image": "assets/apfelessig-anadoa-naturhaus.png",
      "category": "Lebendige Essige & Säfte",
      "keywords": "apfelessig, elma sirkesi, apfel essig, apple cider vinegar, naturtrüb, unpasteurisiert, essigmutter, probiotisch",
      "isProduct": true
    },
    {
      "title": "Aprikosenkernöl Kaltgepresst 100% Nativ (Prunus armeniaca)",
      "description": "Das seidenweiche Gesichtsöl: Kaltgepresstes Aprikosenkernöl. Zieht extrem schnell ein, verleiht einen frischen Glow und ist perfekt für...",
      "h1": "Aprikosenkernöl",
      "url": "aprikosenkernoel.html",
      "image": "assets/anadoa-logo-1100-1100.png",
      "category": "Kaltgepresste Öle",
      "keywords": "aprikosenkernöl, kayısı çekirdeği yağı, apricot kernel oil, prunus armeniaca, glow, gesichtsöl",
      "isProduct": true
    },
    {
      "title": "Reines Arganöl: Wirkung für Haut, Haare & Anti-Aging Magazin",
      "description": "Erfahren Sie alles über reines kaltgepresstes Arganöl: Vitamin E, Squalen und essentielle Fettsäuren für strahlende Haut, gesundes Haar...",
      "h1": "Reines Arganöl: Das flüssige Gold für samtige Haut & glänzendes Haar",
      "url": "arganoel-wirkung-haut-haare-anti-aging.html",
      "image": "assets/magazin_arganoel.png",
      "category": "Ratgeber & Wissen",
      "keywords": "ratgeber, wissen, gesundheit, anatolische tradition, arganoel wirkung haut haare anti aging",
      "isProduct": false
    },
    {
      "title": "Arganöl Kaltgepresst 100% Nativ Kosmetik (Argania spinosa)",
      "description": "Das Gold Marokkos: Ungeröstetes, kaltgepresstes Arganöl. Das ultimative Anti-Aging-Öl für Gesicht, Haare und rissige Haut. Nicht...",
      "h1": "Arganöl",
      "url": "arganoel.html",
      "image": "assets/arganoel-anadoa-naturhaus.png",
      "category": "Kaltgepresste Öle",
      "keywords": "arganöl, argan yağı, argan oil, argania spinosa, anti aging, haaröl, marokkanisches gold",
      "isProduct": true
    },
    {
      "title": "Artischockenblätter Tee kaufen | Enginar Yaprağı Çayı",
      "description": "Premium Artischockenblätter Tee (Enginar Yaprağı). Ein extrem starkes Bitterkraut aus der Ägäis zur Reinigung der Leber, Förderung der...",
      "h1": "Artischockenblätter Tee (Enginar Yaprağı)",
      "url": "artischockenblaetter-tee.html",
      "image": "assets/artischockenblaetter-tee-anadoa-naturhaus.png",
      "category": "Natürliche Tees & Kräuter",
      "keywords": "artischockenblätter tee, enginar yaprağı çayı, artichoke leaf tea, leber, galle, bitterstoffe",
      "isProduct": true
    },
    {
      "title": "Atom Tee kaufen | Türkischer Atom Tee mit Ingwer",
      "description": "Original türkischer Atom Tee. Die kraftvolle, wärmende Gewürzmischung aus Ingwer, Zimt, Galgant und Nelken zur Stärkung des Immunsystems.",
      "h1": "Atom Tee (Türkischer Atom Tee)",
      "url": "atom-tee.html",
      "image": "assets/atom_tee.png",
      "category": "Natürliche Tees & Kräuter",
      "keywords": "atom tee, atom çayı, türkischer wintertee, ingwer zimt gewürztee, erkältungstee, wärmend",
      "isProduct": true
    },
    {
      "title": "Avocadoöl Kaltgepresst 100% Nativ (Persea gratissima)",
      "description": "Der grüne Retter für trockene Haut: Kaltgepresstes natives Avocadoöl. Extrem reichhaltig, zieht tief ein und repariert rissige Haut und...",
      "h1": "Avocadoöl",
      "url": "avocadooel.html",
      "image": "assets/anadoa-logo-1100-1100.png",
      "category": "Kaltgepresste Öle",
      "keywords": "avocadoöl, avokado yağı, avocado oil, persea gratissima, trockene haut, reichhaltig",
      "isProduct": true
    },
    {
      "title": "Bergamotteöl 100% Naturrein (Citrus bergamia)",
      "description": "Das stärkste natürliche Antidepressivum: Echtes Bergamotteöl. Wirkt extrem stimmungsaufhellend, angstlösend und entspannend. Anwendung &...",
      "h1": "Bergamotteöl",
      "url": "bergamotteoel.html",
      "image": "assets/bergamotte-oel-anadoa-naturhaus.png",
      "category": "Ätherische Öle",
      "keywords": "bergamotteöl, bergamot yağı, bergamot oil, citrus bergamia, stimmung, beruhigung",
      "isProduct": true
    },
    {
      "title": "Bittermelone Paste mit Honig | Kudret Narı",
      "description": "Original Kudret Narı (Bittermelone) mit reinem Honig. Das traditionelle Naturheilmittel zur Beruhigung von Magen und Verdauungssystem.",
      "h1": "Bittermelone Paste mit Honig",
      "url": "bittermelone-paste-honig.html",
      "image": "assets/bittermelone-paste-mit-honig-anadoa-naturhaus.png",
      "category": "Traditionelle Pasten (Macun)",
      "keywords": "bittermelone paste honig, kudret narı ballı, kudret nari macunu, momordica charantia, magen, sodbrennen",
      "isProduct": true
    },
    {
      "title": "Bittermelone mit Olivenöl | Kudret Narı",
      "description": "Bittermelone (Kudret Narı) mazeriert in kaltgepresstem Olivenöl. Natürlicher Balsam für die Magenschleimhaut bei Sodbrennen und Gastritis.",
      "h1": "Bittermelone Paste mit Olivenöl",
      "url": "bittermelone-paste-olivenoel.html",
      "image": "assets/bittermelone_paste_olivenoel.png",
      "category": "Traditionelle Pasten (Macun)",
      "keywords": "bittermelone paste olivenöl, kudret narı zeytinyağlı, kudret nari zeytinyagli, magen balsam, zuckerfrei",
      "isProduct": true
    },
    {
      "title": "Borretschöl Kaltgepresst 100% Nativ (Borago officinalis)",
      "description": "Der Weltmeister bei Neurodermitis: Kaltgepresstes Borretschöl. Liefert über 20% Gamma-Linolensäure (GLA) gegen Juckreiz, Akne und...",
      "h1": "Borretschöl",
      "url": "borretschoel.html",
      "image": "assets/anadoa-logo-1100-1100.png",
      "category": "Kaltgepresste Öle",
      "keywords": "borretschöl, hodan yağı, borage oil, borago officinalis, gla, gamma linolensäure, neurodermitis",
      "isProduct": true
    },
    {
      "title": "Brokkolisamenöl Kaltgepresst 100% Nativ (Brassica oleracea)",
      "description": "Der natürliche Silikon-Ersatz für die Haare: Kaltgepresstes Brokkolisamenöl. Stoppt Frizz, sorgt für extremen Glanz ohne zu beschweren...",
      "h1": "Brokkolisamenöl",
      "url": "brokkolisamenoel.html",
      "image": "assets/anadoa-logo-1100-1100.png",
      "category": "Kaltgepresste Öle",
      "keywords": "brokkolisamenöl, brokoli tohumu yağı, broccoli seed oil, silikonersatz, haaröl, brassica",
      "isProduct": true
    },
    {
      "title": "Cajeputöl 100% Naturrein (Melaleuca leucadendron)",
      "description": "Der milde Teebaum: Echtes Cajeputöl. Der Spezialist der Aromatherapie gegen Ohrenschmerzen, Erkältungen bei Kindern und...",
      "h1": "Cajeputöl",
      "url": "cajeputoel.html",
      "image": "assets/anadoa-logo-1100-1100.png",
      "category": "Ätherische Öle",
      "keywords": "cajeputöl, kayeput yağı, cajeput oil, melaleuca leucadendra, ohrenschmerzen, kinderfreundlich",
      "isProduct": true
    },
    {
      "title": "Dattel Melasse (Hurma Pekmezi)",
      "description": "Verdauungsfreundliche Dattelmelasse. Reich an Ballaststoffen, Kalium und Magnesium. Die perfekte vegane Honig-Alternative für Pancakes.",
      "h1": "Dattel Melasse (Hurma Pekmezi)",
      "url": "dattel-melasse.html",
      "image": "assets/dattel-melasse-anadoa-naturhaus.png",
      "category": "Fruchtmelassen & Sirupe",
      "keywords": "dattel melasse, hurma pekmezi, date molasses, date syrup, dattel sirup, vegane süße, datteln",
      "isProduct": true
    },
    {
      "title": "Eibischblüten Tee kaufen | Hatmi Çiçeği Çayı",
      "description": "Wunderschöne Eibischblüten (Hatmi Çiçeği). Das sanfteste, pflanzliche Heilmittel aus Anatolien bei Reizhusten, Heiserkeit und...",
      "h1": "Eibischblüten Tee (Hatmi Çiçeği)",
      "url": "eibischblueten-tee.html",
      "image": "assets/eibischblueten-tee-anadoa-naturhaus.png",
      "category": "Natürliche Tees & Kräuter",
      "keywords": "eibischblüten tee, hatmi çiçeği çayı, marshmallow flower tea, reizhusten, heiserkeit, schleimstoffe",
      "isProduct": true
    },
    {
      "title": "Lebendige Essige (Sirke) & Detox Elixiere",
      "description": "Entdecken Sie unsere naturtrüben, unpasteurisierten Essige und Oxymel Elixiere. Traditionell fermentiert, reich an lebenden Kulturen und...",
      "h1": "Lebendige Essige",
      "url": "essig.html",
      "image": "assets/anadoa-logo-1000-500.png",
      "category": "Kategorien Übersicht",
      "keywords": "lebendige essige kategorie, anadolu sirkeleri, raw vinegar, apfelessig, alıç sirkesi, oxymel, gilaburu",
      "isProduct": false
    },
    {
      "title": "Eukalyptusöl 100% Naturrein (Eucalyptus globulus)",
      "description": "Der stärkste natürliche Schleimlöser: Echtes Eukalyptusöl (Globulus). Befreit die Atemwege, wirkt antiviral und extrem erfrischend....",
      "h1": "Eukalyptusöl",
      "url": "eukalyptusoel.html",
      "image": "assets/eukalyptusoel-anadoa-naturhaus.png",
      "category": "Ätherische Öle",
      "keywords": "eukalyptusöl, okaliptüs yağı, eucalyptus oil, eucalyptus globulus, atemwege, erkältung, schleimlöser",
      "isProduct": true
    },
    {
      "title": "Fencheltee kaufen | Rezene Çayı bei Blähungen",
      "description": "Premium Fenchelsamen (Rezene Çayı). Der sanfte Klassiker für die ganze Familie zur Linderung von Magenkrämpfen, Blähungen und Völlegefühl.",
      "h1": "Fencheltee (Rezene)",
      "url": "fenchel-tee.html",
      "image": "assets/fenchelsamen-tee-anadoa-naturhaus.png",
      "category": "Natürliche Tees & Kräuter",
      "keywords": "fencheltee, rezene çayı, fennel tea, fenchelsamen, verdauung, blähungen, krampflösend",
      "isProduct": true
    },
    {
      "title": "Flohsamenschalen Pulver kaufen | Karnıyarık Tozu",
      "description": "Premium Flohsamenschalen Pulver (Karnıyarık Tozu). Die höchste Qualität an pflanzlichen Ballaststoffen für einen gesunden Darm und...",
      "h1": "Flohsamenschalen (Karnıyarık Tozu)",
      "url": "flohsamenschalen.html",
      "image": "assets/flohsamenchalen-anadoa-naturhaus.png",
      "category": "Natürliche Tees & Kräuter",
      "keywords": "flohsamenschalen pulver, karnıyarık tozu, psyllium husk powder, ballaststoffe, darmgesundheit, quellstoffe",
      "isProduct": true
    },
    {
      "title": "Gelbe Tonerde Zitrone Seife kaufen | Handgemachte Naturseife",
      "description": "Die Perle der Natur: Vitalisierende Seife mit gelber Tonerde und frischer Zitrone. Mildert Pigmentflecken, reinigt tief und strafft die...",
      "h1": "Gelbe Tonerde & Zitrone",
      "url": "gelbe-tonerde-zitrone-seife.html",
      "image": "assets/gelbe-tonerde-zitrone-seife.png",
      "category": "Naturkosmetik, Seifen & Pflege",
      "keywords": "gelbe tonerde zitrone seife, sarı kil limon sabunu, yellow clay lemon soap, klärend",
      "isProduct": true
    },
    {
      "title": "Geranienöl 100% Naturrein (Pelargonium graveolens)",
      "description": "Der Balancer für Haut und Hormone: Echtes Rosengeranienöl (Bourbon). Wirkt extrem ausgleichend, hautstraffend und schützt natürlich vor...",
      "h1": "Geranienöl",
      "url": "geranienoel.html",
      "image": "assets/anadoa-logo-1100-1100.png",
      "category": "Ätherische Öle",
      "keywords": "geranienöl rosengeranie, sardunya yağı, geranium oil, pelargonium graveolens, ausgleichend",
      "isProduct": true
    },
    {
      "title": "Natürliche Gewürze & Superfoods",
      "description": "Entdecken Sie unsere hochwertigen Gewürze: Ungemahlener und gemahlener Sumach sowie wilder türkischer Berg-Oregano für die natürliche Küche.",
      "h1": "Gewürze",
      "url": "gewuerze.html",
      "image": "assets/gewuerze.png",
      "category": "Kategorien Übersicht",
      "keywords": "anatolische gewürze kategorie, baharatlar, sumach, dağ kekiği, tarhana, tahin",
      "isProduct": false
    },
    {
      "title": "Original Gilaburu Saft (Schneeball)",
      "description": "100% purer, traditionell gepresster Gilaburu Saft aus Anatolien. Das bewährte Naturheilmittel für urologische Gesundheit und die Nieren.",
      "h1": "100% Purer Gilaburu Saft",
      "url": "gilaburu-saft.html",
      "image": "assets/gilaburu-saft-anadoa-naturhaus.png",
      "category": "Lebendige Essige & Säfte",
      "keywords": "gilaburu saft, gilaburu suyu, schneeball saft, viburnum opulus, nieren, blase, cranberrybush",
      "isProduct": true
    },
    {
      "title": "Granatapfel Seife kaufen | Handgemachte pH-neutrale Seife",
      "description": "Natürliche Pflege für Haut und Haar. Die Granatapfel Seife bietet eine sanfte Reinigung, Anti-Aging-Effekte und spürbare Feuchtigkeit...",
      "h1": "Granatapfel Seife",
      "url": "granatapfel-seife.html",
      "image": "assets/granatapfelseife.png",
      "category": "Naturkosmetik, Seifen & Pflege",
      "keywords": "granatapfel seife, nar sabunu, pomegranate soap, anti aging seife, elastizität",
      "isProduct": true
    },
    {
      "title": "Granatapfel & Punicinsäure: Zellschutz, Herz & Haut Magazin",
      "description": "Erfahren Sie alles über die biochemische Kraft des Granatapfels: Punicinsäure (Omega-5), Ellagsäure und die Wirkung von 100% reinem...",
      "h1": "Granatapfel & Punicinsäure: Zellschutz, Herz & jugendliche Haut",
      "url": "granatapfel-wirkung-punicinsaeure-haut.html",
      "image": "assets/magazin_granatapfel.png",
      "category": "Ratgeber & Wissen",
      "keywords": "ratgeber, wissen, gesundheit, anatolische tradition, granatapfel wirkung punicinsaeure haut",
      "isProduct": false
    },
    {
      "title": "Granatapfelkernöl Kaltgepresst 100% Nativ (Punica granatum)",
      "description": "Das stärkste natürliche Anti-Aging-Öl: Kaltgepresstes Granatapfelkernöl. Punicinsäure kurbelt die Kollagenproduktion an und festigt...",
      "h1": "Granatapfelkernöl",
      "url": "granatapfelkernoel.html",
      "image": "assets/granatapfelkern-oel-anadoa-naturhaus.png",
      "category": "Kaltgepresste Öle",
      "keywords": "granatapfelkernöl, nar çekirdeği yağı, pomegranate seed oil, punica granatum, punicinsäure, falten",
      "isProduct": true
    },
    {
      "title": "Granatapfelsirup | Nar Ekşisi",
      "description": "Original anatolische Zypressenzapfen Paste mit Honig und Propolis. Das traditionelle Naturheilmittel für freie Atemwege, ideal auch für...",
      "h1": "Granatapfelsirup | Nar Ekşisi",
      "url": "granatapfelsirup.html",
      "image": "assets/grantapfel-sirup-anadoa-naturhaus.png",
      "category": "Fruchtmelassen & Sirupe",
      "keywords": "granatapfelsirup, nar ekşisi, pomegranate molasses, 100% granatapfel, ohne zucker, salatdressing",
      "isProduct": true
    },
    {
      "title": "Grapefruitöl 100% Naturrein (Citrus paradisi)",
      "description": "Flüssige Motivation und Gewebestraffung: Echtes Grapefruitöl. Kurbelt die Lymphe an, vertreibt Heißhunger und sorgt für extrem gute...",
      "h1": "Grapefruitöl",
      "url": "grapefruitoel.html",
      "image": "assets/anadoa-logo-1100-1100.png",
      "category": "Ätherische Öle",
      "keywords": "grapefruitöl, greyfurt yağı, grapefruit oil, citrus paradisi, stoffwechsel, straffend",
      "isProduct": true
    },
    {
      "title": "Grüne Tonerde & Teebaum Seife | pH-neutrale Naturseife",
      "description": "Grüne Tonerde Teebaum Naturseife zur Entgiftung und Reinigung. Bekämpft Hautprobleme wie Akne und Mitesser und verengt die Poren für ein...",
      "h1": "Grüne Tonerde & Teebaum Seife",
      "url": "gruene-tonerde-teebaum-seife.html",
      "image": "assets/gruene-tonerde-teebaum-naturseife.png",
      "category": "Naturkosmetik, Seifen & Pflege",
      "keywords": "grüne tonerde teebaum seife, yeşil kil çay ağacı sabunu, green clay tea tree soap, akne seife, mitesser",
      "isProduct": true
    },
    {
      "title": "Grüner Tee kaufen | Magischer Grüntee für Stoffwechsel",
      "description": "Premium Grüner Tee zur natürlichen Stoffwechselanregung und für antioxidativen Zellschutz. Handverlesene Qualität für den perfekten Fokus.",
      "h1": "Magischer Grüntee",
      "url": "gruener-tee.html",
      "image": "assets/gruene-tee-anadoa-naturhaus.png",
      "category": "Natürliche Tees & Kräuter",
      "keywords": "grüner tee, yeşil çay, green tea, stoffwechsel, antioxidantien, eckg",
      "isProduct": true
    },
    {
      "title": "Naturreiner Hagebutten Pulver kaufen | Vitamin C für Immunsystem",
      "description": "100% reines, fein gemahlenes Naturrein Hagebutten Pulver (Kuşburnu). Natürliche, hochdosierte Vitamin-C-Quelle für Immunsystem, Gelenke...",
      "h1": "Hagebutten Naturrein Pulver",
      "url": "hagebutten-pulver.html",
      "image": "assets/hagebutten_pulver.png",
      "category": "Natürliche Tees & Kräuter",
      "keywords": "hagebutten pulver, kuşburnu tozu, rosehip powder, gelenke, vitamin c, galaktolipide",
      "isProduct": true
    },
    {
      "title": "Hagebutten Tee kaufen | Kuşburnu Çayı",
      "description": "Traditioneller Hagebutten Tee (Kuşburnu). Hergestellt aus ganzen, schonend getrockneten Wildfrüchten. Säuerlich-frischer Geschmack und...",
      "h1": "Hagebutten Tee (Kuşburnu)",
      "url": "hagebutten-tee.html",
      "image": "assets/hagebutten-tee-anadoa-naturhaus.png",
      "category": "Natürliche Tees & Kräuter",
      "keywords": "hagebutten tee, kuşburnu çayı, rosehip tea, vitamin c, säuerlich erfrischend",
      "isProduct": true
    },
    {
      "title": "Hagebuttenkernöl Kaltgepresst 100% Nativ (Rosa canina)",
      "description": "Das pflanzliche Retinol: Kaltgepresstes Hagebuttenkernöl. Das ultimative, schnell einziehende Anti-Aging Öl gegen Falten, Pigmentflecken...",
      "h1": "Hagebuttenkernöl",
      "url": "hagebuttenkernoel.html",
      "image": "assets/hagebuttenkernoel-anadoa-naturhaus.png",
      "category": "Kaltgepresste Öle",
      "keywords": "öl, pflanzenöl, hagebuttenkernoel",
      "isProduct": true
    },
    {
      "title": "Hanföl Kaltgepresst 100% Nativ (Cannabis sativa)",
      "description": "Das grüne Wunder bei Neurodermitis und Akne: Kaltgepresstes Hanfsamenöl. Ein nicht-komedogenes",
      "h1": "Hanföl",
      "url": "hanfoel.html",
      "image": "assets/anadoa-logo-1100-1100.png",
      "category": "Kaltgepresste Öle",
      "keywords": "hanföl, kenevir yağı, hemp seed oil, cannabis sativa, trockene haut, ungesättigte fettsäuren",
      "isProduct": true
    },
    {
      "title": "Hibiskus Tee kaufen | Natürlicher Blutdrucksenker",
      "description": "Premium Hibiskus Tee (Nar Çiçeği / Hibiscus Sabdariffa). Reich an organischen Säuren und Antioxidantien. Unterstützt das...",
      "h1": "Hibiskus Tee",
      "url": "hibiskus-tee.html",
      "image": "assets/hibiskus-tee-anadoa-naturhaus.png",
      "category": "Natürliche Tees & Kräuter",
      "keywords": "hibiskus tee, hibiskus çayı, nar çiçeği, hibiscus sabdariffa, blutdruck, antiox",
      "isProduct": true
    },
    {
      "title": "Anadoa Naturhaus | Traditionelle Naturheilkunde &amp; Heilmittel",
      "description": "Entdecken Sie die reinste Form der anatolischen Naturheilkunde. Premium Kaltpressungen, Zypressenzapfen Paste und Gilaburu Saft für Ihre...",
      "h1": "Natur aus Liebe",
      "url": "index.html",
      "image": "assets/hero-background.png",
      "category": "Naturprodukte",
      "keywords": "anadoa naturhaus | traditionelle naturheilkunde &amp; heilmittel, natur aus liebe",
      "isProduct": false
    },
    {
      "title": "Johannisbrot-Melasse (Keçiboynuzu Özü): Wirkung & Vorteile Magazin",
      "description": "Erfahren Sie alles über Johannisbrot-Melasse: Reich an Kalzium, Eisen & Antioxidantien. Warum kaltgepresster Carob-Extrakt die Atemwege...",
      "h1": "Johannisbrot-Melasse (Keçiboynuzu Özü): Das antike Superfood",
      "url": "johannisbrot-melasse-wirkung-vorteile.html",
      "image": "assets/magazin_johannisbrot.png",
      "category": "Ratgeber & Wissen",
      "keywords": "ratgeber, wissen, gesundheit, anatolische tradition, johannisbrot melasse wirkung vorteile",
      "isProduct": false
    },
    {
      "title": "Johannisbrotmelasse kaufen | Keciboynuzu Oezue",
      "description": "Echte anatolische Johannisbrotmelasse (Keciboynuzu Oezue): Kaltgepresst im Vakuumverfahren. Reich an Kalzium, Eisen und frei von...",
      "h1": "Johannisbrotmelasse",
      "url": "johannisbrot-melasse.html",
      "image": "assets/johannisbrot-melasse-anadoa-naturhaus.png",
      "category": "Fruchtmelassen & Sirupe",
      "keywords": "johannisbrot melasse, keçiboynuzu pekmezi, harnup pekmezi, carob molasses, carob syrup, calcium, husten",
      "isProduct": true
    },
    {
      "title": "Jojobaöl Kaltgepresst 100% Nativ (Simmondsia chinensis)",
      "description": "Das flüssige Gold, das nie ranzig wird: Kaltgepresstes Jojobaöl (Golden Jojoba). Perfekt für fettige Haut, Akne und als Abschmink-Öl....",
      "h1": "Jojobaöl",
      "url": "jojobaoel.html",
      "image": "assets/jojoba-oel-anadoa-naturhaus.png",
      "category": "Kaltgepresste Öle",
      "keywords": "jojobaöl, jojoba yağı, jojoba oil, simmondsia chinensis, gesichtsöl, nicht komedogen",
      "isProduct": true
    },
    {
      "title": "Kaffee Seife kaufen | Handgemachte pH-neutrale Seife",
      "description": "Tauchen Sie ein in die erfrischende Welt der Kaffee Seife. Ein natürliches Peeling mit Antioxidantien, das die Haut strafft, reinigt und...",
      "h1": "Kaffee Seife",
      "url": "kaffee-seife.html",
      "image": "assets/kaffeseife.png",
      "category": "Naturkosmetik, Seifen & Pflege",
      "keywords": "kaffee seife, kahve sabunu, coffee peeling soap, peeling seife, durchblutung",
      "isProduct": true
    },
    {
      "title": "Kaktusfeigenkernöl Kaltgepresst 100% Nativ",
      "description": "Das luxuriöseste Anti-Aging-Öl der Welt: Kaltgepresstes Kaktusfeigenkernöl. Extrem reich an Vitamin E, glättet Augenringe, Falten und...",
      "h1": "Kaktusfeigenkernöl",
      "url": "kaktusfeigenkernoel.html",
      "image": "assets/anadoa-logo-1100-1100.png",
      "category": "Kaltgepresste Öle",
      "keywords": "kaktusfeigenkernöl, dikenli incir çekirdeği yağı, prickly pear seed oil, opuntia, luxusöl, augenringe",
      "isProduct": true
    },
    {
      "title": "Kaltgepresste Öle",
      "description": "Entdecken Sie unsere hochwertigen, schonend kaltgepressten Premium-Öle: Granatapfelkernöl, Feigenkernöl, Mariendistelöl und mehr für...",
      "h1": "Kaltgepresste Premium Öle",
      "url": "kaltgepresste-oele.html",
      "image": "assets/arganoel-anadoa-naturhaus.png",
      "category": "Kategorien Übersicht",
      "keywords": "kaltgepresste öle kategorie, soğuk sıkım yağlar, carrier oils, schwarzkümmelöl, arganöl, mandelöl",
      "isProduct": false
    },
    {
      "title": "Die Wahrheit über Kaltpressung: Warum Temperatur den Unterschied macht Magazin",
      "description": "Erfahren Sie, warum die echte, temperaturkontrollierte Kaltpressung entscheidend für die Qualität, den Geschmack und die Heilwirkung von...",
      "h1": "Die Wahrheit über Kaltpressung: Warum Temperatur den Unterschied macht",
      "url": "kaltpressung-oele-herstellung-qualitaet.html",
      "image": "assets/magazin_4.png",
      "category": "Kaltgepresste Öle",
      "keywords": "öl, pflanzenöl, kaltpressung oele herstellung qualitaet",
      "isProduct": true
    },
    {
      "title": "Kamelmilch Seife kaufen | Handgemachte pH Neutrale Seife",
      "description": "Handgemachte Kamelmilch Seife für eine Tiefenreinigung. Reich an Vitaminen und Proteinen. Unterstützt bei Akne, Mitessern und Haarausfall.",
      "h1": "Kamelmilch Seife",
      "url": "kamelmilch-seife.html",
      "image": "assets/kamellmilchseife.png",
      "category": "Naturkosmetik, Seifen & Pflege",
      "keywords": "kamelmilch seife, deve sütü sabunu, camel milk soap, premium naturseife, vitaminreich",
      "isProduct": true
    },
    {
      "title": "Kamillen Seife kaufen | Handgemachte pH-neutrale Seife",
      "description": "Die beruhigende Kamillenseife lindert Hautreizungen, pflegt sanft und bietet natürlichen Schutz bei Akne und fettiger Haut.",
      "h1": "Kamillen Seife",
      "url": "kamillen-seife.html",
      "image": "assets/kamilleseife.png",
      "category": "Naturkosmetik, Seifen & Pflege",
      "keywords": "kamillen seife, papatya sabunu, chamomile soap, beruhigende seife, sensible haut",
      "isProduct": true
    },
    {
      "title": "Kamillenöl 100% Naturrein (Echte &amp; Römische Kamille)",
      "description": "Der sanfte Heiler: Ätherisches Kamillenöl. Wirkt extrem stark gegen Hautentzündungen (Blaue Kamille) und Panik/Stress (Römische...",
      "h1": "Kamillenöl",
      "url": "kamillenoel.html",
      "image": "assets/anadoa-logo-1100-1100.png",
      "category": "Ätherische Öle",
      "keywords": "kamillenöl blaue kamille, papatya yağı, chamomile oil, matricaria chamomilla, reizlindernd",
      "isProduct": true
    },
    {
      "title": "Kiefernnadelöl 100% Naturrein (Pinus sylvestris)",
      "description": "Die Lunge des Waldes: Echtes Kiefernnadelöl. Wirkt stark schleimlösend, cortisonähnlich bei Rheuma und gibt Kraft bei extremem Burnout....",
      "h1": "Kiefernnadelöl",
      "url": "kiefernnadeloel.html",
      "image": "assets/anadoa-logo-1100-1100.png",
      "category": "Ätherische Öle",
      "keywords": "kiefernnadelöl, çam yağı, pine needle oil, pinus sylvestris, waldduft, atemwege",
      "isProduct": true
    },
    {
      "title": "Kinder Sirup Mix | Mit Honig &amp; Propolis",
      "description": "Original anatolische Zypressenzapfen Paste mit Honig und Propolis. Das traditionelle Naturheilmittel für freie Atemwege, ideal auch für...",
      "h1": "Anadoa Kinder Sirup Mix",
      "url": "kinder-sirup-mix-mit-honig-propolis.html",
      "image": "assets/kinder-sirup-mix-mit-propolis-anadoa-naturhaus.png",
      "category": "Fruchtmelassen & Sirupe",
      "keywords": "kinder sirup mix honig propolis, çocuk karışımı propolis ballı, anadoa kinder sirup, abwehrkräfte",
      "isProduct": true
    },
    {
      "title": "Kirschstiel Tee (Kiraz Sapı) kaufen",
      "description": "Reine Kirschstiele zur sanften Entwässerung und Detox. Das traditionelle Naturheilmittel zur Nierenreinigung und Reduzierung von Ödemen.",
      "h1": "Kirschstiel Tee (Kiraz Sapı)",
      "url": "kirschstiel-tee.html",
      "image": "assets/kirschenstaengel-tee-anadoa-naturhaus.png",
      "category": "Natürliche Tees & Kräuter",
      "keywords": "kirschstiel tee, kiraz sapı çayı, cherry stalk tea, entwässerung, nieren, ödeme",
      "isProduct": true
    },
    {
      "title": "Knoblauch Seife kaufen | Handgemacht pH-neutral Seife",
      "description": "Handgemachte Knoblauch Seife für Haar und Haut. Reinigt tief, versorgt intensiv mit Feuchtigkeit und fördert ein gesundes Haarwachstum.",
      "h1": "Knoblauch Seife",
      "url": "knoblauch-seife.html",
      "image": "assets/knoblauchseife.png",
      "category": "Naturkosmetik, Seifen & Pflege",
      "keywords": "knoblauch seife, sarımsak sabunu, garlic soap, haarpflege seife, haarwurzel",
      "isProduct": true
    },
    {
      "title": "Kokosöl Kaltgepresst 100% Nativ (Virgin Coconut Oil)",
      "description": "Der duftende Alleskönner: Natives Natives Kokosöl. Stark antibakteriell (als Deo), tiefenwirksam für trockene Haare und natürlicher...",
      "h1": "Kokosöl (Nativ / Virgin)",
      "url": "kokosoel.html",
      "image": "assets/anadoa-logo-1100-1100.png",
      "category": "Kaltgepresste Öle",
      "keywords": "kokosöl nativ, hindistan cevizi yağı, virgin coconut oil, cocos nucifera, kaltgepresst",
      "isProduct": true
    },
    {
      "title": "Kräutermischung Essig",
      "description": "Traditionelle Kräutermischung auf Apfelessig-Basis mit Rosmarin, Kirschstielen und erlesenen Heilkräutern. Naturtrüb & unpasteurisiert.",
      "h1": "Kräutermischung Essig",
      "url": "kraeutermischung-essig.html",
      "image": "assets/kraeutermix-essig-detox-essig-anadoa-naturhaus.png",
      "category": "Lebendige Essige & Säfte",
      "keywords": "kräutermischung essig, kraeutermischung essig, kräuter essig, kraeuter essig, apfelessig kräuter, rosmarin essig, detox essig",
      "isProduct": true
    },
    {
      "title": "Kürbiskernöl Kaltgepresst 100% Nativ (Prostata & Blase)",
      "description": "Echtes, kaltgepresstes Kürbiskernöl in seiner reinsten Form. Reich an Zink, Selen, Phytosterolen und Vitamin E. Schützt Blase &...",
      "h1": "Kürbiskernöl",
      "url": "kuerbiskernoel.html",
      "image": "assets/anadoa-logo-1100-1100.png",
      "category": "Kaltgepresste Öle",
      "keywords": "öl, pflanzenöl, kuerbiskernoel",
      "isProduct": true
    },
    {
      "title": "Lavendeltee kaufen | Lavanta Çayı für Beruhigung",
      "description": "Premium Lavendeltee (Lavanta Çayı) aus echten Blüten. Der florale Ruhepol zur Beruhigung von Nerven, bei Stress und leichten...",
      "h1": "Lavendeltee (Lavanta Çayı)",
      "url": "lavendel-tee.html",
      "image": "assets/lavendelblueten-tee-anadoa-naturhaus.png",
      "category": "Natürliche Tees & Kräuter",
      "keywords": "lavendeltee, lavanta çayı, lavender tea, schlaftee, beruhigung, nerven",
      "isProduct": true
    },
    {
      "title": "Lavendelöl 100% Naturrein (Lavandula angustifolia)",
      "description": "Entdecken Sie die Kraft des echten Lavendelöls. Ein vollstandiger Ratgeber zu Wirkung, Herstellung, Rezepten und der Anwendung von...",
      "h1": "Lavendelöl",
      "url": "lavendeloel.html",
      "image": "assets/lavendeloel-anadoa-naturhaus.png",
      "category": "Ätherische Öle",
      "keywords": "lavendelöl, lavanta yağı, lavender oil, lavandula angustifolia, beruhigung, schlaf, aromatherapie",
      "isProduct": true
    },
    {
      "title": "Leinöl Kaltgepresst 100% Nativ (Omega-3)",
      "description": "Die stärkste pflanzliche Omega-3-Quelle der Welt: Kaltgepresstes Leinöl. Stoppt Entzündungen im Körper, schützt das Herz und ist extrem...",
      "h1": "Leinöl",
      "url": "leinoel.html",
      "image": "assets/anadoa-logo-1100-1100.png",
      "category": "Kaltgepresste Öle",
      "keywords": "leinöl, keten tohumu yağı, flaxseed oil, linseed oil, omega 3, leinsamenöl",
      "isProduct": true
    },
    {
      "title": "Löwenzahn Tee kaufen | Karahindiba Çayı für Leber Detox",
      "description": "Reiner Löwenzahn Tee aus Anatolien. Das ultimative Detox-Kraut zur Leberreinigung, Unterstützung der Galle und Entschlackung.",
      "h1": "Löwenzahn Tee (Karahindiba)",
      "url": "loewenzahn-tee.html",
      "image": "assets/loewenzahn-tee-anadoa-naturhaus.png",
      "category": "Natürliche Tees & Kräuter",
      "keywords": "löwenzahn tee, karahindiba çayı, dandelion tea, leber, entgiftung, verdauungssäfte",
      "isProduct": true
    },
    {
      "title": "Lorbeerkernöl Kaltgepresst / Nativ (Laurus nobilis)",
      "description": "Das grüne Heil-Gold des Orients: Natives Lorbeerkernöl (Defne Tohumu Yağı). Entdecken Sie die Kraft der Samen, Blätter und Kerne. 100%...",
      "h1": "Lorbeerkernöl",
      "url": "lorbeerkernoel.html",
      "image": "assets/lorbeerkernoel-100ml-anadoa-naturhaus.png",
      "category": "Kaltgepresste Öle",
      "keywords": "lorbeerkernöl, defne tohumu yağı, laurel seed oil, defne yağı, aleppo, gelenke",
      "isProduct": true
    },
    {
      "title": "Love Tee kaufen | Aphrodisierende Kräutermischung",
      "description": "Sinnlicher Love Tee. Eine meisterhaft komponierte, aphrodisierende Kräutermischung für romantische Abende, Stressabbau und tiefe...",
      "h1": "Love Tee (Spezial Mix)",
      "url": "love-tee.html",
      "image": "assets/love-tee-kraeutermix-tee-anadoa-naturhaus.png",
      "category": "Natürliche Tees & Kräuter",
      "keywords": "love tee, aşk çayı, love tea kräutermix, aphrodisierend, entspannend, romantisch",
      "isProduct": true
    },
    {
      "title": "Aloe Vera-Seife mit Luffaschwamm kaufen | pH-neutral & Natürlich",
      "description": "Handgemachte Naturseife mit beruhigender Aloe Vera und integriertem Luffaschwamm. Bietet intensive Feuchtigkeit, lindert Akne und...",
      "h1": "Aloe Vera Luffa Seife",
      "url": "luffa-aloe-vera-seife.html",
      "image": "assets/luffa-aloe-vera-seife.png",
      "category": "Naturkosmetik, Seifen & Pflege",
      "keywords": "luffa aloe vera seife, kabak lifli aloe vera sabunu, loofah aloe vera soap, peeling",
      "isProduct": true
    },
    {
      "title": "Arganseife mit Luffaschwamm kaufen | pH Neutrale Naturseife",
      "description": "Natürliche, handgemachte Arganseife mit Luffaschwamm. Reduziert Sonnenflecken, spendet intensive Feuchtigkeit und pflegt trockene Haut...",
      "h1": "Arganseife mit Luffa",
      "url": "luffa-argan-seife.html",
      "image": "assets/luffa-argan-seife.png",
      "category": "Naturkosmetik, Seifen & Pflege",
      "keywords": "luffa argan seife, kabak lifli argan sabunu, loofah argan soap, nährstoffreich",
      "isProduct": true
    },
    {
      "title": "Eselsmilch-Honig-Seife mit Luffa kaufen | Naturkosmetik",
      "description": "Handgemachte pH-neutrale Eselsmilch-Honig-Seife mit Natur-Luffaschwamm. Ideal für trockene, empfindliche Haut. Sanfte Reinigung,...",
      "h1": "Eselsmilch-Honig-Seife",
      "url": "luffa-eselsmilch-honig-seife.html",
      "image": "assets/luffa-eselsmilchseife-mit-honig.png",
      "category": "Naturkosmetik, Seifen & Pflege",
      "keywords": "luffa eselsmilch honig seife, kabak lifli eşek sütü ballı sabun, loofah donkey milk honey",
      "isProduct": true
    },
    {
      "title": "Eselsmilchseife mit Luffa kaufen | Handgemacht & pH-neutral",
      "description": "Reine, handgemachte Eselsmilchseife mit integriertem Luffaschwamm. Die anatolische Naturpflege für reife, strapazierte Haut. Fördert...",
      "h1": "Eselsmilchseife mit Luffa",
      "url": "luffa-eselsmilch-seife.html",
      "image": "assets/luffa-eselsmilch-seife.png",
      "category": "Naturkosmetik, Seifen & Pflege",
      "keywords": "luffa eselsmilch seife, kabak lifli eşek sütü sabunu, loofah donkey milk",
      "isProduct": true
    },
    {
      "title": "Lavendel-Seife mit Luffaschwamm kaufen | Handgemacht & pH Neutrale",
      "description": "Entspannende, pH-neutrale Lavendelseife mit Luffaschwamm. Lindert Hautempfindlichkeiten, reinigt verstopfte Poren und reduziert Stress...",
      "h1": "Lavendelseife mit Luffa",
      "url": "luffa-lavendel-seife.html",
      "image": "assets/luffa-lavendel-seife.png",
      "category": "Naturkosmetik, Seifen & Pflege",
      "keywords": "luffa lavendel seife, kabak lifli lavanta sabunu, loofah lavender soap, entspannend",
      "isProduct": true
    },
    {
      "title": "Lorbeer Seife mit Luffaschwamm kaufen | Handgemacht & pH Neutrale",
      "description": "Handgemachte Lorbeer Seife mit integriertem Luffaschwamm. Unterstützt die Zellerneuerung, reduziert Falten und wirkt porenverfeinernd....",
      "h1": "Lorbeer Seife mit Luffa",
      "url": "luffa-lorbeer-seife.html",
      "image": "assets/luffa-lorbeerkern-seife.png",
      "category": "Naturkosmetik, Seifen & Pflege",
      "keywords": "luffa lorbeer seife, kabak lifli defne sabunu, loofah laurel soap, tiefenreinigung",
      "isProduct": true
    },
    {
      "title": "Orchideen-Seife mit Luffaschwamm kaufen | Handgemacht & pH Neutrale",
      "description": "Handgemachte, pH-neutrale Orchideenseife mit Luffaschwamm. Bietet sanfte Reinigung, intensive Feuchtigkeitspflege und ein leichtes...",
      "h1": "Orchideenseife mit Luffa",
      "url": "luffa-orchideen-seife.html",
      "image": "assets/luffa-orchideen-seife.png",
      "category": "Naturkosmetik, Seifen & Pflege",
      "keywords": "luffa orchideen seife, kabak lifli orkide sabunu, loofah orchid soap, samtweich",
      "isProduct": true
    },
    {
      "title": "Ozean Seife mit Luffaschwamm kaufen | Handgemachte pH Neutrale Seife",
      "description": "Handgemachte pH-neutrale Ozean Seife mit Luffaschwamm. Entfernt Toxine, spendet tiefe Feuchtigkeit und wirkt gegen Mitesser und Akne....",
      "h1": "Ozean Seife mit Luffa",
      "url": "luffa-ozean-seife.html",
      "image": "assets/luffa-ozean-seife.png",
      "category": "Naturkosmetik, Seifen & Pflege",
      "keywords": "seife, naturseife, luffa ozean seife",
      "isProduct": true
    },
    {
      "title": "Rosenseife mit Luffaschwamm kaufen | pH-neutral & Handgemacht",
      "description": "Handgemachte pH-neutrale Rosenseife mit natürlichem Luffaschwamm. Reinigt sanft, peelt die Haut und spendet intensiv Feuchtigkeit. Mit...",
      "h1": "Rosenseife mit Luffaschwamm",
      "url": "luffa-rosenseife.html",
      "image": "assets/luffa-rosenseife.png",
      "category": "Naturkosmetik, Seifen & Pflege",
      "keywords": "luffa rosen seife, kabak lifli gül sabunu, loofah rose soap, duftend",
      "isProduct": true
    },
    {
      "title": "Handgemachte Luffa Seifen kaufen | Natürliches Peeling",
      "description": "Entdecken Sie handgemachte Seifen mit integriertem Natur-Luffaschwamm. Das perfekte 2-in-1 Pflegeerlebnis aus Reinigung und sanftem...",
      "h1": "Handgemachte Luffa Seifen",
      "url": "luffa-seifen.html",
      "image": "assets/luffa-rosenseife.png",
      "category": "Naturkosmetik, Seifen & Pflege",
      "keywords": "seife, naturseife, luffa seifen",
      "isProduct": true
    },
    {
      "title": "Zitronen Seife mit Luffa kaufen | Handgemachte pH Neutrale Seife",
      "description": "Handgemachte, pH-neutrale Zitronenseife mit Luffaschwamm. Beugt Akne vor, hellt Pigmentflecken auf und reguliert den Ölhaushalt. Ideal...",
      "h1": "Zitronen Seife mit Luffa",
      "url": "luffa-zitronen-seife.html",
      "image": "assets/luffa-zitronen-seife.png",
      "category": "Naturkosmetik, Seifen & Pflege",
      "keywords": "luffa zitronen seife, kabak lifli limon sabunu, loofah lemon soap, erfrischend",
      "isProduct": true
    },
    {
      "title": "Macadamianussöl Kaltgepresst 100% Nativ",
      "description": "Der seidige Luxus für die Haut: Natives Macadamianussöl. Ersetzt abgebautes Hautfett bei reifer Haut (ab 30) und zieht extrem schnell...",
      "h1": "Macadamianussöl",
      "url": "macadamianussoel.html",
      "image": "assets/anadoa-logo-1100-1100.png",
      "category": "Kaltgepresste Öle",
      "keywords": "macadamianussöl, makademya yağı, macadamia nut oil, trockene haut, samtweich",
      "isProduct": true
    },
    {
      "title": "Wissen aus Anatolien Magazin",
      "description": "Tauchen Sie ein in die jahrhundertealte Naturheilkunde Anatoliens. Erfahren Sie alles über Kaltpressung, ätherische Öle, Tahin und...",
      "h1": "Wissen aus Anatolien",
      "url": "magazin.html",
      "image": "assets/hero-background.png",
      "category": "Ratgeber & Wissen",
      "keywords": "magazin, ratgeber, gesundheitswissen, naturheilkunde blog, anatolische tradition",
      "isProduct": false
    },
    {
      "title": "Maisbart Tee kaufen | Mısır Püskülü",
      "description": "Maisbart Tee (Mısır Püskülü) aus Anatolien. Das sanfteste, natürliche Entwässerungsmittel zur Durchspülung von Niere, Blase und Harnwegen.",
      "h1": "Maisbart Tee (Mısır Püskülü)",
      "url": "maisbart-tee.html",
      "image": "assets/maisbart-tee-anadoa-naturhaus.png",
      "category": "Natürliche Tees & Kräuter",
      "keywords": "maisbart tee, mısır püskülü çayı, corn silk tea, blase, nieren, harntreibend",
      "isProduct": true
    },
    {
      "title": "Malvenblüten Tee kaufen | Blaue Ebegümeci",
      "description": "Wunderschöne, blaue Malvenblüten (Ebegümeci). Der sanfte Schleimlöser bei hartnäckigem Reizhusten und Entzündungen der Magenschleimhaut.",
      "h1": "Malvenblüten Tee (Ebegümeci)",
      "url": "malvenblueten-tee.html",
      "image": "assets/malvenblueten-tee-anadoa-naturhaus.png",
      "category": "Natürliche Tees & Kräuter",
      "keywords": "malvenblüten tee, ebegümeci çayı, mallow flower tea, magenschleimhaut, husten, blau",
      "isProduct": true
    },
    {
      "title": "Mandelöl (Süßmandel) Kaltgepresst 100% Nativ",
      "description": "Der sanfte Alleskönner: Kaltgepresstes Süßmandelöl. Das perfekte, reizarme Massageöl für Schwangerschaft, Babypflege und sensible Haut....",
      "h1": "Mandelöl (Süßmandel)",
      "url": "mandeloel.html",
      "image": "assets/mandeloel-anadoa-naturhaus.png",
      "category": "Kaltgepresste Öle",
      "keywords": "mandelöl süßmandel, tatlı badem yağı, sweet almond oil, prunus amygdalus, babyöl, massageöl",
      "isProduct": true
    },
    {
      "title": "Mango Seife kaufen | Handgemachte pH-neutrale Seife",
      "description": "Die Mango Seife, auch Hautverjüngungsseife genannt, ist reich an Vitamin C, spendet trockener Haut Feuchtigkeit und wirkt aufbauend...",
      "h1": "Mango Seife",
      "url": "mango-seife.html",
      "image": "assets/mangoseife.png",
      "category": "Naturkosmetik, Seifen & Pflege",
      "keywords": "mango seife, mango sabunu, mango soap, fruchtige naturseife, feuchtigkeit",
      "isProduct": true
    },
    {
      "title": "Mariendistel Paste kaufen | Leber Macun",
      "description": "Mariendistel Paste (Deve Dikeni Macunu) mit Honig: Das traditionelle anatolische Kraeutergemisch zur Unterstuetzung. Mit...",
      "h1": "Mariendistel Paste",
      "url": "mariendistel-paste.html",
      "image": "assets/mariendistel-paste-anadoa-naturhaus.png",
      "category": "Traditionelle Pasten (Macun)",
      "keywords": "mariendistel paste, deve dikeni macunu, milk thistle paste, silymarin, leber, entgiftung",
      "isProduct": true
    },
    {
      "title": "Maulbeeren Melasse (Dut Pekmezi)",
      "description": "Die Beauty-Molasse aus schwarzen Maulbeeren. Extrem reich an Antioxidantien, Eisen und Resveratrol. Perfekt für Smoothie-Bowls.",
      "h1": "Maulbeeren Melasse (Dut Pekmezi)",
      "url": "maulbeeren-melasse.html",
      "image": "assets/maulbeeren-melasse-anadoa-naturhaus.png",
      "category": "Fruchtmelassen & Sirupe",
      "keywords": "maulbeeren melasse, dut pekmezi, mulberry molasses, karadut pekmezi, eisen, halspflege, mund",
      "isProduct": true
    },
    {
      "title": "Fruchtmelassen (Pekmez)",
      "description": "Kaltgepresste anatolische Fruchtmelassen (Pekmez) aus Maulbeeren, Trauben, Johannisbrot und Wacholder. 100% rein, ohne Zuckerzusatz und...",
      "h1": "Fruchtmelassen (Pekmez)",
      "url": "melassen.html",
      "image": "assets/pekmez_hero.png",
      "category": "Kategorien Übersicht",
      "keywords": "fruchtmelassen kategorie, pekmezler, traubenmelasse, johannisbrot, dattelmelasse",
      "isProduct": false
    },
    {
      "title": "Muskatellersalbeiöl 100% Naturrein (Salvia sclarea)",
      "description": "Das wichtigste Frauen-Öl der Aromatherapie: Echtes Muskatellersalbeiöl. Wirkt extrem krampflösend bei Menstruation, lindert...",
      "h1": "Muskatellersalbeiöl",
      "url": "muskatellersalbeioel.html",
      "image": "assets/anadoa-logo-1100-1100.png",
      "category": "Ätherische Öle",
      "keywords": "muskatellersalbeiöl, misk adaçayı yağı, clary sage oil, salvia sclarea, frauenöl, krampflösend",
      "isProduct": true
    },
    {
      "title": "Myrrheöl 100% Naturrein (Commiphora myrrha)",
      "description": "Der Spezialist für Wundheilung und Zahnfleisch: Echtes Myrrheöl. Wirkt stark adstringierend, entzündungshemmend und zellregenerierend....",
      "h1": "Myrrheöl",
      "url": "myrrheoel.html",
      "image": "assets/anadoa-logo-1100-1100.png",
      "category": "Ätherische Öle",
      "keywords": "myrrheöl, mür yağı, myrrh oil, commiphora myrrha, mundpflege, wundheilung",
      "isProduct": true
    },
    {
      "title": "Nachtkerzenöl Kaltgepresst 100% Nativ (Oenothera biennis)",
      "description": "Die medizinische Rettung bei Neurodermitis: Kaltgepresstes Nachtkerzenöl. Extrem reich an Gamma-Linolensäure (GLA). Stoppt starken...",
      "h1": "Nachtkerzenöl",
      "url": "nachtkerzenoel.html",
      "image": "assets/anadoa-logo-1100-1100.png",
      "category": "Kaltgepresste Öle",
      "keywords": "nachtkerzenöl, çuha çiçeği yağı, evening primrose oil, oenothera biennis, gla, juckreiz",
      "isProduct": true
    },
    {
      "title": "Handgemachte Naturseifen kaufen | pH-neutral & Vegan",
      "description": "Entdecken Sie unsere pH-neutralen, handgemachten Naturseifen aus kaltgepressten Ölen. Perfekt für unreine, trockene und empfindliche...",
      "h1": "Naturseifen Kollektion",
      "url": "naturseifen.html",
      "image": "assets/reishi-seife.png",
      "category": "Naturkosmetik, Seifen & Pflege",
      "keywords": "seife, naturseife, naturseifen",
      "isProduct": true
    },
    {
      "title": "Neemöl Kaltgepresst 100% Nativ (Azadirachta indica)",
      "description": "Der stärkste natürliche Pflanzenschutz &amp; Parasiten-Killer: Kaltgepresstes Neemöl. Vernichtet Blattläuse, Flöhe, Kopfläuse und...",
      "h1": "Neemöl (Niemöl)",
      "url": "neemoel.html",
      "image": "assets/anadoa-logo-1100-1100.png",
      "category": "Kaltgepresste Öle",
      "keywords": "neemöl, neem yağı, niemöl, azadirachta indica, pflanzenschutz, milben, neem",
      "isProduct": true
    },
    {
      "title": "Nelkenöl 100% Naturrein (Nelkenknospe)",
      "description": "Der stärkste Schmerzkiller bei Zahnschmerzen: Echtes Nelkenknospenöl (Eugenia caryophyllata). Wirkt extrem antibakteriell und betäubend....",
      "h1": "Nelkenöl (Knospe)",
      "url": "nelkenoel.html",
      "image": "assets/nelkenoel-anadoa-naturhaus.png",
      "category": "Ätherische Öle",
      "keywords": "nelkenöl nelkenknospe, karanfil yağı, clove bud oil, eugenia caryophyllata, zahnschmerzen, betäubend",
      "isProduct": true
    },
    {
      "title": "Neroliöl 100% Naturrein (Bitterorangenblüte)",
      "description": "Der seelische Notfalltropfen: Echtes Neroliöl. Hilft extrem stark bei Schock, Panik, Liebeskummer und wirkt zellerneuernd (Anti-Aging)....",
      "h1": "Neroliöl",
      "url": "nerolioel.html",
      "image": "assets/anadoa-logo-1100-1100.png",
      "category": "Ätherische Öle",
      "keywords": "neroliöl orangenblüte, neroli yağı, neroli oil, citrus aurantium, beruhigung, stress",
      "isProduct": true
    },
    {
      "title": "Niaouliöl 100% Naturrein (Melaleuca quinquenervia)",
      "description": "Der stärkste Virus-Killer der Aromatherapie: Echtes Niaouliöl. Wirkt extrem schnell bei Herpes, Akne und stärkt das Immunsystem massiv....",
      "h1": "Niaouliöl",
      "url": "niaoulioel.html",
      "image": "assets/nioli-oel-anadoa-naturhaus.png",
      "category": "Ätherische Öle",
      "keywords": "niaouliöl, niaouli yağı, niaouli oil, melaleuca quinquenervia, immun, viren",
      "isProduct": true
    },
    {
      "title": "Orangenöl 100% Naturrein Kaltgepresst (Citrus sinensis)",
      "description": "Das Happy-Öl der Aromatherapie: Kaltgepresstes Orangenöl (Süßorange). Wirkt extrem stimmungsaufhellend, angstlösend und harmonisierend....",
      "h1": "Orangenöl",
      "url": "orangenoel.html",
      "image": "assets/orangenoel-anadoa-naturhaus.png",
      "category": "Ätherische Öle",
      "keywords": "orangenöl süßorange, portakal yağı, sweet orange oil, citrus sinensis, gute laune, stimmung",
      "isProduct": true
    },
    {
      "title": "Oreganoöl 100% Naturrein (Origanum vulgare)",
      "description": "Das stärkste natürliche Antibiotikum: Ätherisches Oreganoöl. Extrem hoher Carvacrol-Gehalt gegen Bakterien und Pilze. Wichtige...",
      "h1": "Oreganoöl",
      "url": "oreganool.html",
      "image": "assets/anadoa-logo-1100-1100.png",
      "category": "Ätherische Öle",
      "keywords": "oreganoöl, kekik yağı, oregano oil, origanum vulgare, carvacrol, abwehrkräfte, stark",
      "isProduct": true
    },
    {
      "title": "Oxymel Gold Tonic",
      "description": "Erfahren Sie alles über Anadoa Oxymel Gold Essig: Ein traditioneller Sauerhonig verfeinert mit reinem Propolis, Kurkuma und Ingwer für...",
      "h1": "Oxymel Gold Essig",
      "url": "oxymel-gold-essig.html",
      "image": "assets/oxymel-gold-essig-anadoa-naturhaus.png",
      "category": "Lebendige Essige & Säfte",
      "keywords": "oxymel gold essig, sauerhonig, sirkencubin, oxymel tonic, apfelessig honig propolis kurkuma",
      "isProduct": true
    },
    {
      "title": "Paste für Frauen | Kadın Macunu kaufen",
      "description": "Spezielle Frauenpaste (Kadın Macunu) aus Anatolien. Harmonische Kräutermischung zur sanften Regulation und Stärkung des weiblichen Zyklus.",
      "h1": "Paste für Frauen (Kadın Macunu)",
      "url": "paste-fuer-frauen.html",
      "image": "assets/paste-fuer-frauen.png",
      "category": "Traditionelle Pasten (Macun)",
      "keywords": "paste für frauen, kadın macunu, frauenpaste, phytoöstrogene, zyklus, hormonbalance",
      "isProduct": true
    },
    {
      "title": "Paste für Männer | Mesir Macunu kaufen",
      "description": "Traditionelle Mesir Macunu für Männer. Eine kraftvolle anatolische Kräuterpaste zur natürlichen Steigerung von Energie, Ausdauer und...",
      "h1": "Paste für Männer (Mesir Macunu)",
      "url": "paste-fuer-maenner.html",
      "image": "assets/paste-fuer-maenner.png",
      "category": "Traditionelle Pasten (Macun)",
      "keywords": "paste für männer, mesir macunu, erkek macunu, epimedium macun, anatolische kraftpaste, vitalität",
      "isProduct": true
    },
    {
      "title": "Traditionelle Anatolische Pasten & Macun",
      "description": "Entdecken Sie unsere hochwertigen Kräuterpasten: Zypressenzapfen, Mariendistel, Bittermelone (Kudret Narı) und vitalisierende Mischungen...",
      "h1": "Traditionelle Pasten",
      "url": "pasten.html",
      "image": "assets/zypressenzapfen-paste-anadoa-naturhaus.png",
      "category": "Kategorien Übersicht",
      "keywords": "traditionelle pasten kategorie, macunlar, kozalak macunu, kudret narı, mariendistel",
      "isProduct": false
    },
    {
      "title": "Patchouliöl 100% Naturrein (Pogostemon cablin)",
      "description": "Der süße, erdende Duft der Tiefe: Ätherisches Patchouliöl. Wirkt extrem zellregenerierend bei reifer Haut und stark erdend bei Angst und...",
      "h1": "Patchouliöl",
      "url": "patchoulioel.html",
      "image": "assets/anadoa-logo-1100-1100.png",
      "category": "Ätherische Öle",
      "keywords": "patchouliöl, paçuli yağı, patchouli oil, pogostemon cablin, erdend, orientalischer duft",
      "isProduct": true
    },
    {
      "title": "Pfefferminzöl 100% Naturrein (Mentha piperita)",
      "description": "Der stärkste Frische-Kick der Natur: Echtes Pfefferminzöl. Hilft bei Kopfschmerzen, Müdigkeit und Übelkeit. Ein Ratgeber zur Anwendung.",
      "h1": "Pfefferminzöl",
      "url": "pfefferminzoel.html",
      "image": "assets/pfefferminzoel-anadoa-naturhaus.png",
      "category": "Ätherische Öle",
      "keywords": "pfefferminzöl, nane yağı, peppermint oil, mentha piperita, kopfschmerzen, frische, menthol",
      "isProduct": true
    },
    {
      "title": "Naturreine Pflanzenwasser & Hydrolate",
      "description": "Naturreine Pflanzenwasser & Hydrolate aus Dampfdestillation. Rosenwasser und Rosmarinwasser ohne Alkohol, ideal für die natürliche Haut-...",
      "h1": "Produkt",
      "url": "pflanzenwasser.html",
      "image": "assets/anadoa-logo-1100-1100.png",
      "category": "Kategorien Übersicht",
      "keywords": "pflanzenwasser hydrolate kategorie, bitki suları, gül suyu, biberiye suyu",
      "isProduct": false
    },
    {
      "title": "Unsere Philosophie",
      "description": "Die Philosophie von Anadoa Naturhaus: Wo jahrhundertealtes anatolisches Naturwissen auf unberührte Natur, reine Handwerkskunst und...",
      "h1": "Unsere Philosophie",
      "url": "philosophie.html",
      "image": "assets/anadoa-logo-1100-1100.png",
      "category": "Über Anadoa",
      "keywords": "unsere philosophie, über anadoa, tradition, herkunft, anatolien, nachhaltigkeit",
      "isProduct": false
    },
    {
      "title": "Platanen Seife kaufen | Handgemachte pH-neutrale Seife",
      "description": "Handgemachte Platanen Seife (Sycamore). Tiefenreinigend, entzündungshemmend und ideal bei extremer Trockenheit, Juckreiz und Ekzemen....",
      "h1": "Platanen Seife",
      "url": "platanen-seife.html",
      "image": "assets/platanen-seife.png",
      "category": "Naturkosmetik, Seifen & Pflege",
      "keywords": "platanen seife, çınar yaprağı sabunu, plane tree soap, anatolische seife",
      "isProduct": true
    },
    {
      "title": "Reishi & Ectoin Repair-Seife kaufen | Handgemachte pH Neutrale Seife",
      "description": "Handgemachte Reishi & Ectoin Repair-Seife. Intensive Zellpflege und Regeneration mit Anti-Aging-Effekt. Schützt vor oxidativem Stress...",
      "h1": "Reishi & Ectoin Repair-Seife",
      "url": "reishi-seife.html",
      "image": "assets/reishi-seife.png",
      "category": "Naturkosmetik, Seifen & Pflege",
      "keywords": "reishi seife, reishi mantarı sabunu, reishi mushroom soap, antiox",
      "isProduct": true
    },
    {
      "title": "Traditionelle Anatolische Tarhana-Suppe Rezepte",
      "description": "Die Königin der anatolischen Heilsuppen. Hergestellt aus fermentiertem Gemüse und Joghurt, ist diese Suppe nicht nur wärmend, sondern...",
      "h1": "Traditionelle Anatolische Tarhana-Suppe",
      "url": "rezept-anatolische-tarhana-suppe.html",
      "image": "assets/rezept_tarhana.png",
      "category": "Rezepte & Kulinarik",
      "keywords": "rezept, anatolische küche, traditionelles rezept, anatolische tarhana suppe",
      "isProduct": false
    },
    {
      "title": "Original Cevizli Sucuk (Walnuss-Pestil) Rezepte Rezepte",
      "description": "Die anatolische Energiebombe: Selbstgemachter Cevizli Sucuk (Şıra-Pestil / Churchkhela) aus handverlesenen Walnusshälften und...",
      "h1": "Original Cevizli Sucuk (Walnuss-Pestil) | Anadoa Rezepte",
      "url": "rezept-cevizli-sucuk-pekmez.html",
      "image": "assets/rezept_cevizli_sucuk.png",
      "category": "Rezepte & Kulinarik",
      "keywords": "rezept, anatolische küche, traditionelles rezept, cevizli sucuk pekmez",
      "isProduct": false
    },
    {
      "title": "Gefüllte Weinblätter (Sarma) Rezepte",
      "description": "Die Königsdisziplin der anatolischen Küche! Zarte Weinblätter, gefüllt mit einer aromatischen Reismischung, die durch Anadoa Sumach und...",
      "h1": "Gefüllte Weinblätter (Sarma)",
      "url": "rezept-gefuellte-weinblaetter.html",
      "image": "assets/rezept_sarma.png",
      "category": "Rezepte & Kulinarik",
      "keywords": "rezept, anatolische küche, traditionelles rezept, gefuellte weinblaetter",
      "isProduct": false
    },
    {
      "title": "Glutenfreies Fladenbrot Rezepte",
      "description": "Endlich ein glutenfreies Brot, das nicht zerbröselt! Das Anadoa Flohsamenschalen Pulver wirkt hier als natürlicher Kleber und verleiht...",
      "h1": "Glutenfreies Fladenbrot",
      "url": "rezept-glutenfreies-fladenbrot.html",
      "image": "assets/rezept_brot.png",
      "category": "Rezepte & Kulinarik",
      "keywords": "rezept, anatolische küche, traditionelles rezept, glutenfreies fladenbrot",
      "isProduct": false
    },
    {
      "title": "Türkischer Salat mit Granatapfel (Gavurdağı Salatası) | Rezept",
      "description": "Original türkischer Salat mit Granatapfel, Walnüssen & Sumach (Gavurdağı Salatası). Knackig, fruchtig, in 15 Min. zubereitet.",
      "h1": "Türkischer Salat mit Granatapfel & Walnüssen (Gavurdağı Salatası)",
      "url": "rezept-granatapfel-walnuss-salat.html",
      "image": "assets/rezept_salat.png",
      "category": "Rezepte & Kulinarik",
      "keywords": "türkischer salat mit granatapfel, gavurdagi salatasi, gavurdağı salatası, löffelsalat, loeffelsalat, granatapfel walnuss salat, nar eksisi, sumach, rezept",
      "isProduct": false
    },
    {
      "title": "Johannisbrot-Pudding Rezepte",
      "description": "Ein herrliches Dessert mit einer faszinierenden, karamellig-schokoladigen Note. Durch die schonende Zugabe der Anadoa...",
      "h1": "Johannisbrot-Pudding",
      "url": "rezept-johannisbrot-pudding.html",
      "image": "assets/rezept_pudding.png",
      "category": "Rezepte & Kulinarik",
      "keywords": "rezept, anatolische küche, traditionelles rezept, johannisbrot pudding",
      "isProduct": false
    },
    {
      "title": "Klassischer Anatolischer Hummus Rezepte",
      "description": "Ein himmlisch cremiger Hummus nach traditioneller anatolischer Art. Das Geheimnis liegt in der Qualität des Anadoa Tahins und der...",
      "h1": "Klassischer Anatolischer Hummus",
      "url": "rezept-klassischer-hummus.html",
      "image": "assets/rezept_hummus.png",
      "category": "Rezepte & Kulinarik",
      "keywords": "rezept, anatolische küche, traditionelles rezept, klassischer hummus",
      "isProduct": false
    },
    {
      "title": "Cremiger Pekmez-Milchpudding (Muhallebi) Rezepte Rezepte",
      "description": "Seidiger Milchpudding nach anatolischer Tradition: Unser cremiger Muhallebi wird ganz ohne Kristallzucker mit mineralstoffreicher Anadoa...",
      "h1": "Cremiger Pekmez-Milchpudding (Muhallebi) | Anadoa Rezepte",
      "url": "rezept-pekmez-muhallebi-pudding.html",
      "image": "assets/rezept_pekmez_muhallebi.png",
      "category": "Rezepte & Kulinarik",
      "keywords": "rezept, anatolische küche, traditionelles rezept, pekmez muhallebi pudding",
      "isProduct": false
    },
    {
      "title": "Traditionelle Pekmez-Pelte (Hasude) Rezepte Rezepte",
      "description": "Die 10-Minuten-Götterspeise aus Anatolien: Samtig-glänzende Pekmez-Pelte (Hasude) aus naturreiner Anadoa Traubenmelasse, Stärke und...",
      "h1": "Traditionelle Pekmez-Pelte (Hasude) | Anadoa Rezepte",
      "url": "rezept-pekmez-pelte-hasude.html",
      "image": "assets/rezept_pekmez_pelte.png",
      "category": "Rezepte & Kulinarik",
      "keywords": "rezept, anatolische küche, traditionelles rezept, pekmez pelte hasude",
      "isProduct": false
    },
    {
      "title": "Knusprige Pekmez-Sesam-Kekse Rezepte Rezepte",
      "description": "Unwiderstehlich mürbe und knusprig: Traditionelle anatolische Sesam-Kekse, die vor dem Backen in Anadoa Traubenmelasse getaucht und in...",
      "h1": "Knusprige Pekmez-Sesam-Kekse | Anadoa Rezepte",
      "url": "rezept-susamli-pekmez-kurabiye.html",
      "image": "assets/rezept_susamli_kurabiye.png",
      "category": "Rezepte & Kulinarik",
      "keywords": "rezept, anatolische küche, traditionelles rezept, susamli pekmez kurabiye",
      "isProduct": false
    },
    {
      "title": "Saftiger Tahin-Pekmez-Kuchen Rezepte Rezepte",
      "description": "Herrlich saftig, aromatisch nussig und ganz ohne raffinierten Zucker: Unser traditioneller Tahin-Pekmez-Kuchen mit original Anadoa...",
      "h1": "Saftiger Tahin-Pekmez-Kuchen | Anadoa Rezepte",
      "url": "rezept-tahin-pekmez-kuchen.html",
      "image": "assets/rezept_tahin_kuchen.png",
      "category": "Rezepte & Kulinarik",
      "keywords": "rezept, anatolische küche, traditionelles rezept, tahin pekmez kuchen",
      "isProduct": false
    },
    {
      "title": "Vegane Tahin-Kekse Rezepte",
      "description": "Diese Kekse sind ein echter Geheimtipp. Sie sind außen wunderbar knusprig, innen leicht weich (",
      "h1": "Vegane Tahin-Kekse",
      "url": "rezept-vegane-tahin-kekse.html",
      "image": "assets/rezept_kekse.png",
      "category": "Rezepte & Kulinarik",
      "keywords": "rezept, anatolische küche, traditionelles rezept, vegane tahin kekse",
      "isProduct": false
    },
    {
      "title": "Zuckerfreier Schoko-Kuchen Rezepte",
      "description": "Ein unwiderstehlich saftiger, dunkler Schokoladenkuchen, der komplett ohne raffinierten weißen Zucker auskommt. Die tiefe Süße und...",
      "h1": "Zuckerfreier Schoko-Kuchen",
      "url": "rezept-zuckerfreier-schoko-kuchen.html",
      "image": "assets/rezept_kuchen.png",
      "category": "Rezepte & Kulinarik",
      "keywords": "rezept, anatolische küche, traditionelles rezept, zuckerfreier schoko kuchen",
      "isProduct": false
    },
    {
      "title": "Anadoa Naturhaus Rezepte &amp; Kuren",
      "description": "Entdecken Sie leckere, gesunde und traditionelle anatolische Rezepte sowie heilsame Kuren mit den reinen, naturbelassenen Produkten von...",
      "h1": "Rezepte aus der Natur",
      "url": "rezepte.html",
      "image": "assets/anadoa-logo-1000-500.png",
      "category": "Rezepte & Kulinarik",
      "keywords": "rezepte, traditionelle anatolische küche, gesunde rezepte, pekmez rezepte, tahin",
      "isProduct": false
    },
    {
      "title": "Rizinusöl Kaltgepresst 100% Nativ (Castor Oil)",
      "description": "Das Wundermittel für extrem lange Wimpern und dichte Augenbrauen: Kaltgepresstes Rizinusöl (Castor Oil). Porentiefe Gesichtsreinigung...",
      "h1": "Rizinusöl",
      "url": "rizinusoel.html",
      "image": "assets/rizinusoel-anadoa-naturhaus.png",
      "category": "Kaltgepresste Öle",
      "keywords": "rizinusöl, hint yağı, castor oil, ricinus communis, wimpernöl, haarwuchs, augenbrauen",
      "isProduct": true
    },
    {
      "title": "Rosenholzöl 100% Naturrein (Aniba rosaeodora)",
      "description": "Der flüssige Luxus für die Haut: Echtes Rosenholzöl. Wirkt extrem zellerneuernd (Anti-Aging), angstlösend und ist perfekt für...",
      "h1": "Rosenholzöl",
      "url": "rosenholzoel.html",
      "image": "assets/anadoa-logo-1100-1100.png",
      "category": "Ätherische Öle",
      "keywords": "rosenholzöl, gül ağacı yağı, rosewood oil, aniba rosaeodora, zellregeneration",
      "isProduct": true
    },
    {
      "title": "Rosenöl 100% Naturrein (Rosa damascena)",
      "description": "Entdecken Sie das reinste ätherische Rosenöl (Rose Otto) aus Anatolien. Ein vollständiger Ratgeber zu Wirkung, Anwendung und...",
      "h1": "Rosenöl",
      "url": "rosenoel.html",
      "image": "assets/rosenoel-anadoa-naturhaus.png",
      "category": "Ätherische Öle",
      "keywords": "rosenöl damascena, gül yağı, rose otto oil, rosa damascena, kostbares öl, damaszener",
      "isProduct": true
    },
    {
      "title": "Rosenwasser (Gül Suyu) 100% Naturrein",
      "description": "100% naturreines Rosenwasser (Hydrolat) aus Damaszener Rosen. Ausgleichend, aknebekämpfend und feuchtigkeitsspendend. Ohne Alkohol, in...",
      "h1": "Rosenwasser (Gül Suyu)",
      "url": "rosenwasser.html",
      "image": "assets/rosenwasser-anadoa-naturhaus.png",
      "category": "Naturkosmetik, Seifen & Pflege",
      "keywords": "rosenwasser, gül suyu, rose water, damascena hydrolat, gesichtswasser rose, rosa damascena, alkoholfrei",
      "isProduct": true
    },
    {
      "title": "Rosmarin Seife mit Schwarzer Tonerde kaufen | pH-neutrale Seife",
      "description": "Handgemachte Rosmarin Seife mit schwarzer (violetter) Tonerde. Belebende Pflege, reguliert die Talgproduktion und schützt vor...",
      "h1": "Rosmarin & Schwarze Tonerde",
      "url": "rosmarin-seife.html",
      "image": "assets/rosmarin-seife.png",
      "category": "Naturkosmetik, Seifen & Pflege",
      "keywords": "rosmarin seife, biberiye sabunu, rosemary soap, haar und haut, belebend",
      "isProduct": true
    },
    {
      "title": "Rosmarinöl 100% Naturrein (Rosmarinus officinalis)",
      "description": "Der stärkste mentale Wachmacher: Ätherisches Rosmarinöl. Fördert massiv das Haarwachstum, die Durchblutung und die Konzentration....",
      "h1": "Rosmarinöl",
      "url": "rosmarinoel.html",
      "image": "assets/rosmarinoel-anadoa-naturhaus.png",
      "category": "Ätherische Öle",
      "keywords": "rosmarinöl, biberiye yağı, rosemary oil, rosmarinus officinalis, haarwuchs, fokus, konzentration",
      "isProduct": true
    },
    {
      "title": "Rosmarinwasser (Biberiye Suyu) Haar & Haut",
      "description": "100% naturreines Rosmarinwasser (Hydrolat). Fördert das Haarwachstum, beruhigt die Kopfhaut und klärt unreine Haut. Ohne Alkohol, in der...",
      "h1": "Rosmarinwasser (Biberiye)",
      "url": "rosmarinwasser.html",
      "image": "assets/rosmarinwasser-anadoa-naturhaus.png",
      "category": "Naturkosmetik, Seifen & Pflege",
      "keywords": "rosmarinwasser, biberiye suyu, rosemary water, rosmarinhydrolat, haartonikum, scalp spray, haarwuchs",
      "isProduct": true
    },
    {
      "title": "Original Rushur Stein (Ruşur Taşı) 6 Stück",
      "description": "Original persischer Rushur Stein (Ruşur Taşı) 6 Stück. Natürliches Mineral-Peeling gegen Pigmentflecken, Sonnenflecken und unreinheiten....",
      "h1": "Original Rushur Stein (Ruşur Taşı)",
      "url": "rushur-stein.html",
      "image": "assets/rushur-stein-anadoa-naturhaus.png",
      "category": "Naturkosmetik, Seifen & Pflege",
      "keywords": "rushur stein, ruşur taşı, sefidab, peeling stein, hammam stein, mineral peeling, pigmentflecken, sonnenflecken",
      "isProduct": true
    },
    {
      "title": "Salbei Tee kaufen | Adaçayı Naturheilkunde",
      "description": "Traditioneller Salbei Tee (Adaçayı) aus den Bergen Anatoliens. Das stärkste Kraut gegen Halsschmerzen, Entzündungen und starkes Schwitzen.",
      "h1": "Salbei Tee (Adaçayı)",
      "url": "salbei-tee.html",
      "image": "assets/salbei-tee-anadoa-naturhaus.png",
      "category": "Natürliche Tees & Kräuter",
      "keywords": "salbei tee, adaçayı, sage tea, salvia officinalis, halsschmerzen, schwitzen, heiserkeit",
      "isProduct": true
    },
    {
      "title": "Sanddornfruchtöl Kaltgepresst 100% Nativ",
      "description": "Der rote Anti-Aging-Booster: Kaltgepresstes Sanddornfruchtfleischöl. Repariert UV-Schäden, spendet Feuchtigkeit und verleiht einen...",
      "h1": "Sanddornfruchtöl",
      "url": "sanddornfruchtoel.html",
      "image": "assets/anadoa-logo-1100-1100.png",
      "category": "Kaltgepresste Öle",
      "keywords": "sanddornfruchtöl, yabani iğde yağı, sea buckthorn oil, hippophae rhamnoides, provitamin a, glow",
      "isProduct": true
    },
    {
      "title": "Sandelholzöl 100% Naturrein (Santalum album)",
      "description": "Der heilige Duft Indiens: Echtes Sandelholzöl. Wirkt extrem erdend, stark beruhigend bei Panik und luxuriös zellregenerierend....",
      "h1": "Sandelholzöl",
      "url": "sandelholzoel.html",
      "image": "assets/sandelholzoel-anadoa-naturhaus.png",
      "category": "Ätherische Öle",
      "keywords": "sandelholzöl, sandal ağacı yağı, sandalwood oil, santalum album, beruhigend",
      "isProduct": true
    },
    {
      "title": "Schafgarbentee kaufen | Civan Perçemi Çayı für Frauen",
      "description": "Premium Schafgarbentee (Civan Perçemi) aus Anatolien. Das ultimative, traditionelle Heilkraut zur Hormonbalance und Linderung von...",
      "h1": "Schafgarbentee (Civan Perçemi)",
      "url": "schafgarben-tee.html",
      "image": "assets/schafgarben-tee-anadoa-naturhaus.png",
      "category": "Natürliche Tees & Kräuter",
      "keywords": "schafgarbentee, civan perçemi çayı, yarrow tea, achillea millefolium, frauenkraut, krampflösend",
      "isProduct": true
    },
    {
      "title": "Scharfe Tarhana Suppe (Ac&#305;l&#305;) kaufen | W&#252;rzig &amp; Fermentiert",
      "description": "Scharfe Tarhana Suppe (Ac&#305;l&#305;) kaufen &#8211; mit Cayennepfeffer &amp; Capia-Paprika fermentiert. Authentisch anatolisch, 100%...",
      "h1": "Scharfe Tarhana Suppe (Acılı)",
      "url": "scharfe-tarhana-suppe.html",
      "image": "assets/scharfe-tarhana.png",
      "category": "Gewürze & Vorratskammer",
      "keywords": "scharfe tarhana suppe acılı, acılı tarhana çorbası, spicy soup powder, wärmend",
      "isProduct": true
    },
    {
      "title": "Schopflavendel Tee (Karabaş Otu) kaufen",
      "description": "Seltener Karabaş Otu Tee aus Anatolien. Das Heilkraut des osmanischen Hofes zur starken Nervenberuhigung, Entspannung und zum Zellschutz.",
      "h1": "Schopflavendel Tee (Karabaş Otu)",
      "url": "schopflavendel-tee.html",
      "image": "assets/schopflavendel-tee-anadoa-naturhaus.png",
      "category": "Natürliche Tees & Kräuter",
      "keywords": "schopflavendel tee, karabaş otu çayı, french lavender, lavandula stoechas, kopfkraut",
      "isProduct": true
    },
    {
      "title": "Schwarze Maulbeere Sirup fuer Kinder | Dut Pekmezi Kinder",
      "description": "Schwarzer Maulbeersirup fuer Kinder: natuerlich sues, eisenreich und ohne Zuckerzusatz. Die sanfte Variante des traditionellen Dut...",
      "h1": "Schwarze Maulbeere Sirup f&uuml;r Kinder",
      "url": "schwarze-maulbeere-sirup-fur-kinder.html",
      "image": "assets/schwarze-maulbeere-sirup-mix-fuer-kinder-anadoa-naturhaus.png",
      "category": "Fruchtmelassen & Sirupe",
      "keywords": "schwarze maulbeere sirup kinder, çocuklar için karadut, çocuk şurup, kinder sirup maulbeere",
      "isProduct": true
    },
    {
      "title": "Schwarzer Maulbeer-Sirup | Karadut Şurubu",
      "description": "Original anatolische Zypressenzapfen Paste mit Honig und Propolis. Das traditionelle Naturheilmittel für freie Atemwege, ideal auch für...",
      "h1": "Schwarzer Maulbeer-Sirup",
      "url": "schwarzer-maulbeersirup.html",
      "image": "assets/schwarze-maulbeere-sirup-anadoa-naturhaus.png",
      "category": "Fruchtmelassen & Sirupe",
      "keywords": "schwarzer maulbeer sirup, karadut şurubu, black mulberry syrup, karadut özü, vitamin c",
      "isProduct": true
    },
    {
      "title": "Schwarzkümmelöl &amp; Thymoquinon: Das Gold der Pharaonen Magazin",
      "description": "Eine tiefgreifende wissenschaftliche und historische Analyse von Schwarzkümmelöl (Nigella sativa), seinem Hauptwirkstoff Thymoquinon und...",
      "h1": "Schwarzkümmelöl &amp; Thymoquinon: Das Gold der Pharaonen",
      "url": "schwarzkuemmeloel-thymoquinon-wirkung.html",
      "image": "assets/magazin_1.png",
      "category": "Ratgeber & Wissen",
      "keywords": "ratgeber, wissen, gesundheit, anatolische tradition, schwarzkuemmeloel thymoquinon wirkung",
      "isProduct": false
    },
    {
      "title": "Schwarzkümmelöl für Kinder (Orange) kaufen",
      "description": "Natives Schwarzkümmelöl für Kinder, verfeinert mit echtem Orangenöl. Der fruchtige Geschmack überdeckt die Bitterstoffe. Reich an...",
      "h1": "Schwarzk&uuml;mmel&ouml;l f&uuml;r Kinder (Orange)",
      "url": "schwarzkummelol-fuer-kinder.html",
      "image": "assets/schwarzkuemmeloel-fuer-kinder-mit-orangengeschmack-anadoa-naturhaus.png",
      "category": "Kaltgepresste Öle",
      "keywords": "schwarzkümmelöl für kinder, çocuklar için çörek otu, kinder schwarzkümmelöl, orangengeschmack, çocuk takviye",
      "isProduct": true
    },
    {
      "title": "Schwarzkümmelöl für Kinder (Erdbeere) kaufen",
      "description": "Natives Schwarzkümmelöl aus Ägypten, kindgerecht verfeinert mit echtem Erdbeer-Aroma. Für die problemlose Einnahme der wertvollen...",
      "h1": "Schwarzk&uuml;mmel&ouml;l f&uuml;r Kinder (Erdbeere)",
      "url": "schwarzkummelol-kinder-erdbeer.html",
      "image": "assets/schwarzkuemmeloel-mit-erdbeerengeschmack-hoher-thymochinongehalt-anadoa-naturhaus.png",
      "category": "Kaltgepresste Öle",
      "keywords": "schwarzkümmelöl kinder erdbeere, çilekli çörek otu, kinder erdbeer, strawberry black seed oil",
      "isProduct": true
    },
    {
      "title": "Schwarzkümmelöl mit Minze kaufen",
      "description": "Kaltgepresstes ägyptisches Schwarzkümmelöl, verfeinert mit echtem Pfefferminzöl. Ideal für sensible Mägen. Angenehm kühlender Abgang,...",
      "h1": "Schwarzk&uuml;mmel&ouml;l mit Minze",
      "url": "schwarzkummelol-mit-minze.html",
      "image": "assets/schwarzkuemmeloel-mit-minze-hoher-thymochinongehalt-anadoa-naturhaus.png",
      "category": "Kaltgepresste Öle",
      "keywords": "schwarzkümmelöl mit minze, nane çörek otu, black seed oil mint, frischer geschmack, pfefferminze",
      "isProduct": true
    },
    {
      "title": "Schwarzkümmelöl kaufen | Ägyptische Saat",
      "description": "Reines, ungefiltertes Schwarzkümmelöl aus ägyptischer Saat (Nigella Sativa). Kaltgepresst, mit außergewöhnlich hohem Thymochinon-Gehalt....",
      "h1": "Natives Schwarzk&uuml;mmel&ouml;l",
      "url": "schwarzkummelol.html",
      "image": "assets/schwarzkuemmeloel-hoher-thymochinongehalt-anadoa-naturhaus.png",
      "category": "Kaltgepresste Öle",
      "keywords": "schwarzkümmelöl, çörek otu yağı, corek otu yagi, black seed oil, nigella sativa, thymoquinon, thymochinon, kaltgepresst, ägyptisch",
      "isProduct": true
    },
    {
      "title": "Senna Blättertee kaufen | Sinameki Çayı für Verdauung",
      "description": "Alexandrische Senna (Sinameki Çayı). Das stärkste, anatolische Kraut zur akuten, kurzfristigen Behandlung von schwerer Verstopfung....",
      "h1": "Alexandrische Senna (Sinameki)",
      "url": "senna-blaettertee.html",
      "image": "assets/alexandrische-senna-blaettertee-anadoa-naturhaus.png",
      "category": "Natürliche Tees & Kräuter",
      "keywords": "tee, kräutertee, senna blaettertee",
      "isProduct": true
    },
    {
      "title": "Sesamöl Kaltgepresst 100% Nativ (Ölziehen & Haut)",
      "description": "Kaltgepresstes Sesamöl aus erlesenen Sesamsamen. Reich an Sesamin, Omega-6-9 und Vitamin E. Ideal für die asiatische Küche,...",
      "h1": "Sesamöl",
      "url": "sesamoel.html",
      "image": "assets/anadoa-logo-1100-1100.png",
      "category": "Kaltgepresste Öle",
      "keywords": "sesamöl, susam yağı, sesame oil, sesamum indicum, ayurveda, ölziehen",
      "isProduct": true
    },
    {
      "title": "Natürliche Sirupe & Fruchtsirupe",
      "description": "Schonend im Vakuumverfahren hergestellte Natürliche Sirupe: Tannenzapfen (Kozalak), Schwarze Maulbeere (Karadut), Granatapfel (Nar...",
      "h1": "Natur Sirupe & Fruchtsirupe",
      "url": "sirupe.html",
      "image": "assets/zypressenzapfen-sirup-anadoa-naturhaus.png",
      "category": "Kategorien Übersicht",
      "keywords": "natürliche sirupe kategorie, şuruplar, karadut sirup, granatapfelsirup",
      "isProduct": false
    },
    {
      "title": "Spitzwegerich Tee (Sinir Otu) kaufen",
      "description": "Handverlesener Spitzwegerich Tee. Natürlicher Hustenstiller und Lungenunterstützung. Premium Qualität aus der Türkei.",
      "h1": "Spitzwegerich Tee (Sinir Otu)",
      "url": "spitzwegerich-tee.html",
      "image": "assets/spitzwegerich-tee-anadoa-naturhaus.png",
      "category": "Natürliche Tees & Kräuter",
      "keywords": "spitzwegerich tee, sinir otu çayı, plantago lanceolata, ribwort plantain, husten, bronchien",
      "isProduct": true
    },
    {
      "title": "Süßholzwurzel Tee kaufen | Meyan Kökü Çayı",
      "description": "Naturreine Süßholzwurzel (Meyan Kökü). Der anatolische Balsam für Magen und Atemwege. 50-mal süßer als Zucker, aber ohne Kalorien.",
      "h1": "Süßholzwurzel Tee (Meyan Kökü)",
      "url": "suessholzwurzel-tee.html",
      "image": "assets/suessholzwurzel-tee-anadoa-naturhaus.png",
      "category": "Natürliche Tees & Kräuter",
      "keywords": "süßholzwurzel tee, meyan kökü çayı, licorice root tea, glycyrrhiza glabra, magen, stimme",
      "isProduct": true
    },
    {
      "title": "Sumach Pulver (Sumak): Das Antioxidantien-Wunder Magazin",
      "description": "Erfahren Sie alles über Sumach (Sumak): Das rubinrote anatolische Gewürz mit dem höchsten ORAC-Wert, entzündungshemmenden Tanninen und...",
      "h1": "Sumach Pulver (Sumak): Das zitronig-fruchtige Wundergewürz",
      "url": "sumach-gewuerz-gesundheit-antioxidantien.html",
      "image": "assets/magazin_sumach.png",
      "category": "Naturprodukte",
      "keywords": "sumach pulver (sumak): das antioxidantien-wunder magazin, sumach pulver (sumak): das zitronig-fruchtige wundergewürz",
      "isProduct": false
    },
    {
      "title": "Sumach Kerne – ungemahlen | Natürliche Gewürze",
      "description": "Entdecke den reinen, ursprünglichen Geschmack des Sumachgewürzes mit unseren ungemahlenen Sumachkernen (Rhus coriaria). 100% Natur,...",
      "h1": "Sumach Kerne – ungemahlen",
      "url": "sumach-kerne.html",
      "image": "assets/sumach-sumak-kerne-anadoa-naturhaus.png",
      "category": "Gewürze & Vorratskammer",
      "keywords": "sumach kerne, tane sumak, sumac berries, ganze sumachfrüchte, anatolisch",
      "isProduct": true
    },
    {
      "title": "Sumach Pulver – Gemahlen (Ohne Salz) | Natürliche Gewürze",
      "description": "Fein gemahlener, tiefroter Sumach aus schonend getrockneten Beeren. Ein säuerlich-fruchtiges Geschmackserlebnis – 100% rein und...",
      "h1": "Sumach Pulver – Gemahlen (Ohne Salz)",
      "url": "sumach-pulver.html",
      "image": "assets/sumach-sumak-kerne-anadoa-naturhaus.png",
      "category": "Naturprodukte",
      "keywords": "sumach pulver – gemahlen (ohne salz) | natürliche gewürze, sumach pulver – gemahlen (ohne salz)",
      "isProduct": false
    },
    {
      "title": "Sumach &amp; Traditionelle Gewürze",
      "description": "Entdecken Sie unsere anatolischen Gewürzspezialitäten: Sumach Pulver, Sumach Kerne, den flüssigen Sumix Komplex und unsere proteinreiche...",
      "h1": "Sumach & Traditionelle Gewürze",
      "url": "sumak.html",
      "image": "assets/product_dekupe-sumak-gemahlen.png",
      "category": "Naturprodukte",
      "keywords": "sumach &amp; traditionelle gewürze, sumach & traditionelle gewürze",
      "isProduct": false
    },
    {
      "title": "Sumix – Sumak Komplex 150ml | Kraft-Mix für Regeneration",
      "description": "Entdecken Sie den Sumix Sumak Komplex. Eine natürliche, harmonische Komposition aus Sumach, Ingwer, Kurkuma und Schwarzkümmelöl für Ihre...",
      "h1": "Sumix",
      "url": "sumix.html",
      "image": "assets/sumix-main-image.png",
      "category": "Spezial-Elixiere",
      "keywords": "sumix, sumak komplex, sumak özü, sumach extrakt, kraft mix, flüssigextrakt",
      "isProduct": true
    },
    {
      "title": "Traditionelles Tahin: Die Kunst der Steinmühle Magazin",
      "description": "Erfahren Sie, warum die traditionelle Steinvermahlung von geröstetem Sesam der einzige Weg ist, um das seidige, aromatische und...",
      "h1": "Traditionelles Tahin: Die Kunst der Steinmühle",
      "url": "tahin-sesammus-gesundheit.html",
      "image": "assets/magazin_2.png",
      "category": "Naturprodukte",
      "keywords": "traditionelles tahin: die kunst der steinmühle magazin, traditionelles tahin: die kunst der steinmühle",
      "isProduct": false
    },
    {
      "title": "Premium Tahini | 100% Reines Sesammus",
      "description": "Schonend geröstetes, reines Tahini (Sesammus) aus anatolischer Ernte. Reich an pflanzlichem Kalzium und gesunden Fettsäuren.",
      "h1": "Tahini | Sesammus",
      "url": "tahini.html",
      "image": "assets/tahin-anadoa-naturhaus.png",
      "category": "Gewürze & Vorratskammer",
      "keywords": "tahini sesampaste, çifte kavrulmuş tahin, sesame paste, tahin, hummus, sesam",
      "isProduct": true
    },
    {
      "title": "Tamanuöl Kaltgepresst 100% Nativ (Calophyllum inophyllum)",
      "description": "Das grüne Narben-Wunder: Natives Tamanuöl. Heilt schwere Akne-Narben, Verbrennungen und Ekzeme durch einzigartige, extrem...",
      "h1": "Tamanuöl",
      "url": "tamanuoel.html",
      "image": "assets/anadoa-logo-1100-1100.png",
      "category": "Kaltgepresste Öle",
      "keywords": "öl, pflanzenöl, tamanuoel",
      "isProduct": true
    },
    {
      "title": "Zypressenzapfen Paste fuer Kinder",
      "description": "Zypressenzapfen Paste fuer Kinder (Cupressus sempervirens). Sanfte, honigbasierte Rezeptur zur Unterstuetzung in der kalten Jahreszeit....",
      "h1": "Zypressenzapfen Paste f&uuml;r Kinder",
      "url": "tannenzapfen-paste-kinder.html",
      "image": "assets/zypressenzapfen-paste-fuer-kinder-anadoa-naturhaus.png",
      "category": "Traditionelle Pasten (Macun)",
      "keywords": "tannenzapfen paste kinder, çocuklar için kozalak macunu, kinder tannenzapfen paste, mild",
      "isProduct": true
    },
    {
      "title": "Zypressenzapfen Sirup | Tannenzapfen Sirup kaufen",
      "description": "Zypressenzapfen-Sirup: traditionelles anatolisches Heilmittel aus echten Cupressus sempervirens Zapfen. Balsamisch, reich an Terpenen,...",
      "h1": "Zypressenzapfen-Sirup",
      "url": "tannenzapfen-sirup.html",
      "image": "assets/zypressenzapfen-sirup-anadoa-naturhaus.png",
      "category": "Fruchtmelassen & Sirupe",
      "keywords": "tannenzapfen sirup, çam kozalağı şurubu, pine cone syrup, kozalak şurubu, atemwege",
      "isProduct": true
    },
    {
      "title": "Klassische Tarhana Suppe kaufen | Fermentiert & Gesund",
      "description": "Klassische Tarhana Suppe kaufen – fermentiert, probiotisch und authentisch anatolisch. Jetzt bei Anadoa Naturhaus bestellen. Schnelle...",
      "h1": "Klassische",
      "url": "tarhana-suppe.html",
      "image": "assets/klassiche-tarhana.png",
      "category": "Naturprodukte",
      "keywords": "klassische tarhana suppe kaufen | fermentiert & gesund, klassische",
      "isProduct": false
    },
    {
      "title": "Tarhana Suppe | Authentisch & Fermentiert",
      "description": "Die Seele der anatolischen Küche: Fermentiert, gesund, aromatisch und voller Tradition. Entdecken Sie unsere Acılı (scharfe) und...",
      "h1": "Traditionelle Tarhana Suppe",
      "url": "tarhana.html",
      "image": "assets/klassiche-tarhana.png",
      "category": "Gewürze & Vorratskammer",
      "keywords": "tarhana suppe natur, tarhana çorbası, fermented soup powder, probiotische suppe, anatolisch",
      "isProduct": true
    },
    {
      "title": "Naturtee & Traditionelle Kräuterkuren kaufen",
      "description": "Entdecken Sie anatolische Naturtees & Kräuterkuren: Wildgesammelter Atom Tee, Schopflavendel, Kirschstiel & Detox-Mischungen aus reiner...",
      "h1": "Naturtee & Kuren",
      "url": "tee.html",
      "image": "assets/lavendel_tee.png",
      "category": "Natürliche Tees & Kräuter",
      "keywords": "tee, kräutertee, tee",
      "isProduct": true
    },
    {
      "title": "Teebaumöl 100% Naturrein (Melaleuca alternifolia)",
      "description": "Das stärkste natürliche Antiseptikum: Echtes Teebaumöl. Hilft bei Akne, Pilzinfektionen und Insektenstichen. Komplett-Ratgeber zur...",
      "h1": "Teebaumöl",
      "url": "teebaumoel.html",
      "image": "assets/teebaumoel-anadoa-naturhaus.png",
      "category": "Ätherische Öle",
      "keywords": "teebaumöl, çay ağacı yağı, tea tree oil, melaleuca alternifolia, akne, unreine haut, desinfizierend",
      "isProduct": true
    },
    {
      "title": "The Nioli – L’Essence Secrète – Intim Pflegeset",
      "description": "Die sanfte Intimpflege für moderne Selbstfürsorge – mit Nioli & Jojoba. Dieses 2-in-1 Pflegeset vereint das kraftvolle Nioli-Öl mit...",
      "h1": "The Nioli",
      "url": "the-nioli.html",
      "image": "assets/the-nioli-intimpflegeset.png",
      "category": "Naturkosmetik, Seifen & Pflege",
      "keywords": "the nioli, nioli öl, niaouli, intimpflege, intimöl, intimseife, intimpflegeset, niaouli oil, damenhygiene",
      "isProduct": true
    },
    {
      "title": "Thymianöl 100% Naturrein (Thymus vulgaris)",
      "description": "Das stärkste Öl für Lunge und Immunsystem: Ätherisches Thymianöl (CT Linalool &amp; Thymol). Hilft massiv bei Husten, Bronchitis und...",
      "h1": "Thymianöl",
      "url": "thymianoel.html",
      "image": "assets/thymianoel-anadoa-naturhaus.png",
      "category": "Ätherische Öle",
      "keywords": "thymianöl, kekik yağı, thyme oil, thymus vulgaris, thymol, atemwege, immun",
      "isProduct": true
    },
    {
      "title": "Trägeröle &amp; Basisöle kaufen | 100% Nativ",
      "description": "Entdecken Sie unsere naturreinen Trägeröle und Basisöle (Mandelöl, Jojobaöl, Arganöl etc.) – Perfekt zum Mischen mit ätherischen Ölen...",
      "h1": "Kaltgepresste Premium Öle",
      "url": "traegeroele.html",
      "image": "assets/arganoel-anadoa-naturhaus.png",
      "category": "Kaltgepresste Öle",
      "keywords": "öl, pflanzenöl, traegeroele",
      "isProduct": true
    },
    {
      "title": "Traubenessig",
      "description": "Naturtrüb & Traditionell Fermentiert",
      "h1": "Traubenessig",
      "url": "traubenessig.html",
      "image": "assets/traubenessig-anadoa-naturhaus.png",
      "category": "Lebendige Essige & Säfte",
      "keywords": "traubenessig, üzüm sirkesi, grape vinegar, weinessig, traditionell fermentiert, naturtrüb",
      "isProduct": true
    },
    {
      "title": "Traubenkernöl Kaltgepresst 100% Nativ (Vitis vinifera)",
      "description": "Das Anti-Aging Öl für fettige Haut: Kaltgepresstes Traubenkernöl. Extrem reich an OPC. Ein",
      "h1": "Traubenkernöl",
      "url": "traubenkernoel.html",
      "image": "assets/traubenkernoel-anadoa-naturhaus.png",
      "category": "Kaltgepresste Öle",
      "keywords": "traubenkernöl, üzüm çekirdeği yağı, grape seed oil, vitis vinifera, opc, leichtes öl",
      "isProduct": true
    },
    {
      "title": "Anatolische Traubenmelasse (Pekmez): Natürliche Energie Magazin",
      "description": "Erfahren Sie, wie aus sonnengereiften anatolischen Trauben durch stundenlanges Einkochen die dickflüssige, mineralstoffreiche Melasse",
      "h1": "Anatolische Traubenmelasse (Pekmez): Natürliche Energie",
      "url": "traubenmelasse-pekmez-eisen-gesundheit.html",
      "image": "assets/hero-background.png",
      "category": "Naturprodukte",
      "keywords": "anatolische traubenmelasse (pekmez): natürliche energie magazin, anatolische traubenmelasse (pekmez): natürliche energie",
      "isProduct": false
    },
    {
      "title": "Premium Traubenmelasse (Üzüm Pekmezi)",
      "description": "Kaltgepresste Traubenmelasse aus anatolischer Ernte. 100% zuckerfrei, extrem reich an Eisen, Resveratrol und Kalium. Natürliche Süße.",
      "h1": "Traubenmelasse (Üzüm Pekmezi)",
      "url": "traubenmelasse.html",
      "image": "assets/product_dekupe-traubenmelasse.png",
      "category": "Fruchtmelassen & Sirupe",
      "keywords": "traubenmelasse, üzüm pekmezi, grape molasses, grape syrup, pekmez, anatolische trauben, eisen",
      "isProduct": true
    },
    {
      "title": "Türkischer Oregano – Bilyeli Kekik | Natürliche Gewürze",
      "description": "Aromatische Wildwürze aus den sonnenverwöhnten Bergen der Ägäis. Wilder Bergthymian (Origanum onites) mit intensiv herber Note.",
      "h1": "Türkischer Oregano – Bilyeli Kekik",
      "url": "tuerkischer-oregano.html",
      "image": "assets/tuerkischer-oregano.png",
      "category": "Gewürze & Vorratskammer",
      "keywords": "türkischer oregano, dağ kekiği, turkish mountain oregano, zatar, kekik, bergwürze",
      "isProduct": true
    },
    {
      "title": "Udi Hindi Öl für Kinder Kaufen | Mit Orangengeschmack",
      "description": "Speziell für Kinder: Echtes Udi Hindi Öl (Kust al Hindi) mit leckerem Orangenöl. Mildert den herben Geschmack, ideal bei Husten &...",
      "h1": "Udi Hindi Öl Für Kinder (Mit Orange)",
      "url": "udi-hindi-oel-fuer-kinder.html",
      "image": "assets/udi-hindi-oel-mit-orangengeschmack-100ml-anadoa-naturhaus.png",
      "category": "Kaltgepresste Öle",
      "keywords": "öl, pflanzenöl, udi hindi oel fuer kinder",
      "isProduct": true
    },
    {
      "title": "Udi Hindi Öl mit Minze Kaufen | Natürliches Antibiotikum",
      "description": "Die erfrischende Kraft: Echtes Udi Hindi Öl (Kust al Hindi) verfeinert mit natürlichem Minzöl. Ideal zur Befreiung der Atemwege und bei...",
      "h1": "Udi Hindi Öl Mit erfrischender Minze",
      "url": "udi-hindi-oel-mit-minze.html",
      "image": "assets/udi-hindi-oel-mit-minze-100ml-anadoa-naturhaus.png",
      "category": "Kaltgepresste Öle",
      "keywords": "öl, pflanzenöl, udi hindi oel mit minze",
      "isProduct": true
    },
    {
      "title": "Udi Hindi Öl (Kust al Hindi) Kaufen | 100% Naturreiner Auszug",
      "description": "Das natürliche Antibiotikum Asiens: Echtes Udi Hindi Öl (Kust-i Bahri / Kust-i Hindi). Traditionell hergestellt durch Mazeration in...",
      "h1": "Udi Hindi Öl",
      "url": "udi-hindi-oel.html",
      "image": "assets/udi-hindi-oel-100ml-anadoa-naturhaus.png",
      "category": "Kaltgepresste Öle",
      "keywords": "udi hindi öl, öd ağacı yağı, costus root oil, udi hindi yagi, prophetenmedizin, kusti hindi",
      "isProduct": true
    },
    {
      "title": "Über Uns – Unsere Geschichte & Philosophie",
      "description": "Entdecken Sie die reinste Form der anatolischen Naturheilkunde. Premium Kaltpressungen, Zypressenzapfen Paste und Gilaburu Saft für Ihre...",
      "h1": "Über uns",
      "url": "ueber-uns.html",
      "image": "assets/anadoa-naturhaus-shop.png",
      "category": "Naturprodukte",
      "keywords": "über uns – unsere geschichte & philosophie, über uns",
      "isProduct": false
    },
    {
      "title": "Vetiveröl 100% Naturrein (Vetiveria zizanioides)",
      "description": "Das stärkste erdende Öl der Aromatherapie: Echtes Vetiveröl. Wirkt massiv beruhigend bei Schlaflosigkeit, Stress und Überreizung....",
      "h1": "Vetiveröl",
      "url": "vetiveroel.html",
      "image": "assets/vetiveroel-anadoa-naturhaus.png",
      "category": "Ätherische Öle",
      "keywords": "vetiveröl, güve otu yağı, vetiver oil, vetiveria zizanioides, erdung, schlaf",
      "isProduct": true
    },
    {
      "title": "Wabenhonig Seife kaufen | Handgemachte pH-neutrale Seife",
      "description": "Entdecken Sie die revitalisierende Kraft unserer Wabenhonig Seife für strahlende Haut und gesundes Haar. Feuchtigkeitsspendend,...",
      "h1": "Wabenhonig Seife",
      "url": "wabenhonig-seife.html",
      "image": "assets/wabenhonig-seife.png",
      "category": "Naturkosmetik, Seifen & Pflege",
      "keywords": "wabenhonig seife, petek balı sabunu, honeycomb soap, honigseife, beruhigend",
      "isProduct": true
    },
    {
      "title": "Wacholderbeeren Melasse (Andız Pekmezi)",
      "description": "Andız Pekmezi aus wilden Wacholderzapfen des Taurusgebirges. Starkes Antioxidans, Detox-Unterstützer und traditioneller Lungenbalsam.",
      "h1": "Wacholderbeeren Melasse (Andız)",
      "url": "wacholderbeeren-melasse.html",
      "image": "assets/wacholderbeeren-melasse-anadoa-naturhaus.png",
      "category": "Fruchtmelassen & Sirupe",
      "keywords": "wacholder melasse, andız pekmezi, andiz pekmezi, juniper berry molasses, andiz pekmez, atemwege",
      "isProduct": true
    },
    {
      "title": "Walnussöl Kaltgepresst 100% Nativ (Juglans regia)",
      "description": "Natives, kaltgepresstes Walnussöl voller Omega-3 Fettsäuren. Das edle Gourmet-Öl für Salate und natürliche Hautpflege. Premium Qualität...",
      "h1": "Walnussöl",
      "url": "walnussoel.html",
      "image": "assets/anadoa-logo-1100-1100.png",
      "category": "Kaltgepresste Öle",
      "keywords": "öl, pflanzenöl, walnussoel",
      "isProduct": true
    },
    {
      "title": "Weihrauchöl 100% Naturrein (Boswellia)",
      "description": "Das flüssige Gold der Antike: Echtes Weihrauchöl (Boswellia carterii). Wirkt extrem zellerneuernd, entzündungshemmend und erdend....",
      "h1": "Weihrauchöl",
      "url": "weihrauchoel.html",
      "image": "assets/anadoa-logo-1100-1100.png",
      "category": "Ätherische Öle",
      "keywords": "weihrauchöl boswellia, akgünlük yağı, frankincense oil, boswellia carterii, meditation, zellschutz",
      "isProduct": true
    },
    {
      "title": "Weißdorn Essig",
      "description": "100 % Natur | Lebendiges Herz-Tonikum",
      "h1": "Weißdorn Essig",
      "url": "weissdorn-essig.html",
      "image": "assets/weissdornessig-anadoa-naturhaus.png",
      "category": "Lebendige Essige & Säfte",
      "keywords": "weißdorn essig, alıç sirkesi, alic sirkesi, hawthorn vinegar, crataegus, herz, kreislauf",
      "isProduct": true
    },
    {
      "title": "Wildrosenöl Kaltgepresst 100% Nativ (Rosa mosqueta)",
      "description": "Das südamerikanische Anti-Aging Wunder: Kaltgepresstes Wildrosenöl. Das Premium-Öl gegen Pigmentflecken, Schwangerschaftsstreifen und...",
      "h1": "Wildrosenöl (Rosa mosqueta)",
      "url": "wildrosenoel.html",
      "image": "assets/anadoa-logo-1100-1100.png",
      "category": "Kaltgepresste Öle",
      "keywords": "öl, pflanzenöl, wildrosenoel",
      "isProduct": true
    },
    {
      "title": "Wintertee kaufen | Natürliche Kräutermischung",
      "description": "Anadoa Wintertee. Eine wärmende, harmonische Kräutermischung aus Anatolien zur Stärkung der Abwehrkräfte an kalten Tagen.",
      "h1": "Wintertee (Winter Mix)",
      "url": "wintertee.html",
      "image": "assets/winter-tee-anadoa-naturhaus.png",
      "category": "Natürliche Tees & Kräuter",
      "keywords": "wintertee, kış çayı, anatolian winter tea, kräutermischung immun, wärmend",
      "isProduct": true
    },
    {
      "title": "Ylang-Ylang Öl 100% Naturrein (Cananga odorata)",
      "description": "Die Blume der Blumen: Echtes Ylang-Ylang Öl. Wirkt stark blutdrucksenkend, aphrodisierend und tiefenentspannend. Alles zur Anwendung und...",
      "h1": "Ylang-Ylang-Öl",
      "url": "ylang-ylang-oel.html",
      "image": "assets/ylang-ylang-oel-anadoa-naturhaus.png",
      "category": "Ätherische Öle",
      "keywords": "ylang ylang öl, ylang ylang yağı, cananga odorata, sinnlich, entspannung, blumig",
      "isProduct": true
    },
    {
      "title": "Zaatar Tee kaufen | Zahter Çayı (Schwarzer Thymian)",
      "description": "Zahter (Schwarzer Thymian) aus dem anatolischen Taurusgebirge. Stark antiseptisch, bei Magenproblemen und Entzündungen im Rachen.",
      "h1": "Zaatar Tee (Schwarzer Thymian)",
      "url": "zaatar-tee.html",
      "image": "assets/zaatar-tee-anadoa-naturhaus.png",
      "category": "Natürliche Tees & Kräuter",
      "keywords": "zaatar tee, zahter çayı, wilder thymian tee, zahter tea, dağ kekiği, würzig",
      "isProduct": true
    },
    {
      "title": "Zedernholzöl 100% Naturrein (Cedrus atlantica)",
      "description": "Die erdende Kraft des Waldes: Ätherisches Zedernholzöl (Atlaszeder). Wirkt extrem gut bei Haarausfall, Schuppen und als natürlicher...",
      "h1": "Zedernholzöl",
      "url": "zedernholzoel.html",
      "image": "assets/zedernoel-anadoa-naturhaus.png",
      "category": "Ätherische Öle",
      "keywords": "zedernholzöl atlaszeder, sedir ağacı yağı, cedarwood oil, cedrus atlantica, kopfhaut",
      "isProduct": true
    },
    {
      "title": "Ziegenmilchseife kaufen | Handgemachte pH-neutrale Seife",
      "description": "Handgemachte pH-neutrale Ziegenmilchseife. Milde Reinigung und intensive Pflege für Gesicht, Haut und Haar. Ideal bei empfindlicher und...",
      "h1": "Ziegenmilchseife",
      "url": "ziegenmilch-seife.html",
      "image": "assets/ziegenmilchseife.png",
      "category": "Naturkosmetik, Seifen & Pflege",
      "keywords": "ziegenmilch seife, keçi sütü sabunu, goat milk soap, zarte pflege, rückfettend",
      "isProduct": true
    },
    {
      "title": "Zirbenöl 100% Naturrein (Pinus cembra)",
      "description": "Die Königin der Alpen: Echtes Zirbenöl (Pinus cembra). Bewiesen für besseren Schlaf, niedrigere Herzfrequenz und freie Atemwege....",
      "h1": "Zirbenöl",
      "url": "zirbenoel.html",
      "image": "assets/anadoa-logo-1100-1100.png",
      "category": "Kaltgepresste Öle",
      "keywords": "öl, pflanzenöl, zirbenoel",
      "isProduct": true
    },
    {
      "title": "Zitronengrasöl (Lemongrass) 100% Naturrein",
      "description": "Der spritzige Energie-Booster: Ätherisches Zitronengrasöl (Lemongrass). Wirkt stark gegen Mücken, strafft das Bindegewebe und vertreibt...",
      "h1": "Zitronengrasöl (Lemongrass)",
      "url": "zitronengrasoel.html",
      "image": "assets/anadoa-logo-1100-1100.png",
      "category": "Kaltgepresste Öle",
      "keywords": "öl, pflanzenöl, zitronengrasoel",
      "isProduct": true
    },
    {
      "title": "Zitronenöl 100% Naturrein Kaltgepresst (Citrus limon)",
      "description": "Der ultimative Frische-Kick: Kaltgepresstes Zitronenöl. Wirkt extrem stimmungsaufhellend, konzentrationsfördernd und luftreinigend....",
      "h1": "Zitronenöl",
      "url": "zitronenoel.html",
      "image": "assets/zitronenoel-anadoa-naturhaus.png",
      "category": "Ätherische Öle",
      "keywords": "zitronenöl, limon yağı, lemon oil, citrus limon, konzentration, frische, zitrone",
      "isProduct": true
    },
    {
      "title": "Das alte Geheimnis der Berge: Zypressenzapfen Paste Magazin",
      "description": "Entdecken Sie die historische Bedeutung und die atmungsunterstützenden Eigenschaften der traditionellen anatolischen Zypressenzapfen Paste.",
      "h1": "Das alte Geheimnis der Berge: Zypressenzapfen Paste",
      "url": "zypressenzapfen-paste-husten-naturheilkunde.html",
      "image": "assets/magazin_3.png",
      "category": "Naturprodukte",
      "keywords": "das alte geheimnis der berge: zypressenzapfen paste magazin, das alte geheimnis der berge: zypressenzapfen paste",
      "isProduct": false
    },
    {
      "title": "Traditionelle Zypressenzapfen Paste",
      "description": "Original anatolische Zypressenzapfen Paste mit Honig und Propolis. Das traditionelle Naturheilmittel für freie Atemwege, ideal auch für...",
      "h1": "Zypressenzapfen Paste",
      "url": "zypressenzapfen-paste.html",
      "image": "assets/zypressenzapfen-paste-anadoa-naturhaus.png",
      "category": "Traditionelle Pasten (Macun)",
      "keywords": "zypressenzapfen paste, kozalak macunu, kiefernzapfen paste, pine cone paste, atemwege, smoker, lunge",
      "isProduct": true
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
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function performSearch(query) {
    if (!searchIndex) return;
    const normalizedQuery = normalizeString(query.trim());
    if (!normalizedQuery) {
      searchResults.innerHTML = '';
      searchResults.classList.add('hidden');
      return;
    }

    const isShortQuery = normalizedQuery.length <= 3;
    const scoredItems = [];

    searchIndex.forEach(item => {
      const normalizedTitle = normalizeString(item.title || '');
      const normalizedH1 = normalizeString(item.h1 || '');
      const normalizedCategory = normalizeString(item.category || '');
      const normalizedKeywords = normalizeString(item.keywords || '');
      const normalizedDesc = normalizeString(item.description || '');

      let score = 0;

      // 1. Title Match (Exact or startsWith or word-start)
      if (normalizedTitle === normalizedQuery) {
        score += 600;
      } else if (normalizedTitle.startsWith(normalizedQuery)) {
        score += 350;
      } else {
        const titleWords = normalizedTitle.split(/[^a-z0-9]+/);
        if (titleWords.some(w => w.startsWith(normalizedQuery))) {
          score += 250;
        } else if (!isShortQuery && normalizedTitle.includes(normalizedQuery)) {
          score += 100;
        }
      }

      // 2. Keywords / Synonyms Match (Token-based)
      const kwTokens = normalizedKeywords.split(/[,\s]+/);
      if (kwTokens.some(k => k === normalizedQuery)) {
        score += 300;
      } else if (kwTokens.some(k => k.startsWith(normalizedQuery))) {
        score += 200;
      } else if (!isShortQuery && normalizedKeywords.includes(normalizedQuery)) {
        score += 80;
      }

      // 3. H1 Match
      if (normalizedH1 === normalizedQuery) {
        score += 250;
      } else {
        const h1Words = normalizedH1.split(/[^a-z0-9]+/);
        if (h1Words.some(w => w.startsWith(normalizedQuery))) {
          score += 150;
        }
      }

      // 4. Category Match
      if (normalizedCategory.startsWith(normalizedQuery)) {
        score += 80;
      }

      // 5. Description Match (Only for queries > 3 chars to avoid false substring matches like 'dat' in 'antioxidativ')
      if (!isShortQuery) {
        const descWords = normalizedDesc.split(/[^a-z0-9]+/);
        if (descWords.some(w => w.startsWith(normalizedQuery))) {
          score += 30;
        }
      }

      // Bonus for Direct Products
      if (score > 0 && item.isProduct) {
        score += 100;
      }

      if (score > 0) {
        scoredItems.push({ item, score });
      }
    });

    // Sort descending by score
    scoredItems.sort((a, b) => b.score - a.score);

    // Limit to top 15 results
    const matches = scoredItems.slice(0, 15).map(si => si.item);

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
        <a href="${escapeHtml(item.url)}" class="flex items-center gap-4 p-3 rounded-2xl hover:bg-earth-light/40 transition-colors group">
          <div class="w-14 h-14 rounded-xl overflow-hidden bg-white flex-shrink-0 border border-gold/10 flex items-center justify-center shadow-xs">
            <img src="${escapeHtml(imgSrc)}" alt="${escapeHtml(item.title)}" class="${imgClass}" onerror="this.src='assets/anadoa-logo-1100-1100.png'; this.className='w-full h-full object-contain p-2'; this.onerror=null;">
          </div>
          <div class="flex-1 min-w-0">
            <span class="text-[10px] uppercase tracking-wider text-sage font-bold block">${escapeHtml(item.category)}</span>
            <h4 class="font-serif font-bold text-ash group-hover:text-gold transition-colors text-sm md:text-base truncate m-0 leading-tight">${escapeHtml(item.title)}</h4>
            ${item.description ? `<p class="text-xs text-ash-light truncate mt-1 mb-0">${escapeHtml(item.description)}</p>` : ''}
          </div>
          <svg class="w-5 h-5 text-ash-light/40 group-hover:text-gold group-hover:translate-x-1 transition-all flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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