const navHTML = `
<!-- Global Navigation -->
<nav class="fixed w-full z-50 top-6 transition-all duration-300" id="global-nav">
  <div class="max-w-[95%] md:max-w-6xl mx-auto relative z-50">
    <!-- Blur kaldırıldı: bg-earth yerine net renk ve backdrop-blur iptal edildi -->
    <div class="bg-[#fbf5eb] border border-earth-light shadow-xl rounded-full px-6 flex justify-between items-center h-[72px] transition-all duration-300" id="nav-container">
      
      <!-- Mobile Menu Button (Left) -->
      <div class="lg:hidden flex items-center flex-1">
        <button aria-label="Toggle Menu" class="text-ash hover:text-gold focus:outline-none p-2 bg-white/50 rounded-full transition-colors" id="mobile-menu-btn">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path id="menu-icon" d="M4 6h16M4 12h16M4 18h16" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
            <path id="close-icon" class="hidden" d="M6 18L18 6M6 6l12 12" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
          </svg>
        </button>
      </div>

      <!-- Left Links (Desktop) -->
      <div class="hidden lg:flex items-center justify-end space-x-6 lg:space-x-10 flex-1 pr-4 lg:pr-8">
        <a class="text-ash hover:text-gold text-sm uppercase tracking-widest font-bold transition-colors" href="ueber-uns.html">Über uns</a>
        <a class="text-ash hover:text-gold text-sm uppercase tracking-widest font-bold transition-colors" href="rezepte.html">Rezepte</a>
      </div>

      <!-- Logo (Center) -->
      <a class="flex-shrink-0 flex justify-center items-center group relative z-50 w-48 lg:w-[260px]" href="index.html">
        <img alt="Anadoa Naturhaus Logo" class="h-16 md:h-24 w-auto object-contain transition-transform duration-500 group-hover:scale-110 drop-shadow-xl scale-125 md:scale-125" src="assets/anadoa-logo-1000-500.png"/>
      </a>

      <!-- Right Links (Desktop) -->
      <div class="hidden lg:flex justify-start items-center space-x-6 lg:space-x-10 h-full flex-1 pl-4 lg:pl-8">
        <a class="text-ash hover:text-gold text-sm uppercase tracking-widest font-bold transition-colors" href="magazin.html">Magazin</a>
        
        <!-- Mega Menu Dropdown -->
        <div class="group h-full flex items-center relative">
          <button class="flex items-center text-ash hover:text-gold text-sm uppercase tracking-widest font-bold transition-colors focus:outline-none h-full">
            Kategorien
            <svg class="w-4 h-4 ml-1 transition-transform group-hover:rotate-180 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M19 9l-7 7-7-7" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
            </svg>
          </button>
          
          <!-- The Dropdown -->
          <div class="absolute left-1/2 -translate-x-1/2 top-[72px] w-[90vw] max-w-[1300px] bg-[#fbf5eb] border border-earth-light shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top z-50 rounded-3xl mt-4">
            <div class="p-8">
              <div class="grid grid-cols-5 gap-6 items-start">
                
                <!-- Col 1: Öle & Pflanzenwasser -->
                <div>
                  <h3 class="font-serif font-bold text-lg text-mocha mb-3 border-b border-earth-light pb-2"><a class="hover:text-gold" href="kaltgepresste-oele.html">Kaltgepresste Öle</a></h3>
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
                  <h3 class="font-serif font-bold text-lg text-mocha mb-3 border-b border-earth-light pb-2 mt-5"><a class="hover:text-gold" href="pflanzenwasser.html">Pflanzenwasser</a></h3>
                  <ul class="space-y-2 text-sm">
                    <li><a class="text-ash-light hover:text-gold block" href="rosenwasser.html">Rosenwasser (Gül Suyu)</a></li>
                    <li><a class="text-ash-light hover:text-gold block" href="rosmarinwasser.html">Rosmarinwasser (Biberiye Suyu)</a></li>
                  </ul>
                </div>

                <!-- Col 2: Ätherische Öle & Essig -->
                <div>
                  <h3 class="font-serif font-bold text-lg text-mocha mb-3 border-b border-earth-light pb-2"><a class="hover:text-gold" href="aetherische-oele.html">Ätherische Öle</a></h3>
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
                  <h3 class="font-serif font-bold text-lg text-mocha mb-3 border-b border-earth-light pb-2 mt-5"><a class="hover:text-gold" href="essig.html">Lebendiger Essig</a></h3>
                  <ul class="space-y-2 text-sm">
                    <li><a class="text-ash-light hover:text-gold block" href="apfelessig.html">Apfelessig</a></li>
                    <li><a class="text-ash-light hover:text-gold block" href="traubenessig.html">Traubenessig</a></li>
                    <li><a class="text-ash-light hover:text-gold block" href="weissdorn-essig.html">Weißdorn Essig</a></li>
                    <li><a class="text-ash-light hover:text-gold block" href="ananas-essig.html">Ananas Essig</a></li>
                    <li><a class="text-ash-light hover:text-gold block" href="oxymel-gold-essig.html">Oxymel Gold Essig</a></li>
                    <li><a class="text-gold font-medium hover:text-mocha block" href="detox-mix.html">Detox Mix Elixier</a></li>
                  </ul>
                </div>

                <!-- Col 3: Pasten & Melassen -->
                <div>
                  <h3 class="font-serif font-bold text-lg text-mocha mb-3 border-b border-earth-light pb-2"><a class="hover:text-gold" href="pasten.html">Traditionelle Pasten</a></h3>
                  <ul class="space-y-2 text-sm mb-6">
                    <li><a class="text-ash-light hover:text-gold block" href="zypressenzapfen-paste.html">Zypressenzapfen Paste</a></li>
                    <li><a class="text-ash-light hover:text-gold block" href="tannenzapfen-paste-kinder.html">Tannenzapfen Paste (Kinder)</a></li>
                    <li><a class="text-ash-light hover:text-gold block" href="mariendistel-paste.html">Mariendistel Paste</a></li>
                    <li><a class="text-ash-light hover:text-gold block" href="paste-fuer-maenner.html">Paste für Männer (Mesir)</a></li>
                    <li><a class="text-ash-light hover:text-gold block" href="paste-fuer-frauen.html">Paste für Frauen (Kadın)</a></li>
                    <li><a class="text-ash-light hover:text-gold block" href="bittermelone-paste-honig.html">Bittermelone Paste</a></li>
                    <li><a class="text-ash-light hover:text-gold block" href="tahini.html">Tahini (Sesammus)</a></li>
                  </ul>
                  <h3 class="font-serif font-bold text-lg text-mocha mb-3 border-b border-earth-light pb-2"><a class="hover:text-gold" href="melassen.html">Melassen</a></h3>
                  <ul class="space-y-2 text-sm">
                    <li><a class="text-ash-light hover:text-gold block" href="traubenmelasse.html">Traubenmelasse</a></li>
                    <li><a class="text-ash-light hover:text-gold block" href="johannisbrot-melasse.html">Johannisbrot Melasse</a></li>
                    <li><a class="text-ash-light hover:text-gold block" href="wacholderbeeren-melasse.html">Wacholderbeeren</a></li>
                    <li><a class="text-ash-light hover:text-gold block" href="maulbeeren-melasse.html">Maulbeeren Melasse</a></li>
                    <li><a class="text-ash-light hover:text-gold block" href="dattel-melasse.html">Dattel Melasse</a></li>
                  </ul>
                </div>

                <!-- Col 4: Tees, Sirupe & Gewürze -->
                <div>
                  <h3 class="font-serif font-bold text-lg text-mocha mb-3 border-b border-earth-light pb-2"><a class="hover:text-gold" href="tee.html">Naturtee & Kuren</a></h3>
                  <ul class="space-y-2 text-sm mb-6 max-h-[160px] overflow-y-auto custom-scrollbar pr-2">
                    <li><a class="text-ash-light hover:text-gold block" href="spitzwegerich-tee.html">Spitzwegerich Tee</a></li>
                    <li><a class="text-ash-light hover:text-gold block" href="kirschstiel-tee.html">Kirschstiel Tee</a></li>
                    <li><a class="text-ash-light hover:text-gold block" href="atom-tee.html">Atom Tee (Winter-Mix)</a></li>
                    <li><a class="text-ash-light hover:text-gold block" href="schopflavendel-tee.html">Schopflavendel Tee</a></li>
                    <li><a class="text-ash-light hover:text-gold block" href="gruener-tee.html">Magischer Grüntee</a></li>
                    <li><a class="text-ash-light hover:text-gold block" href="love-tee.html">Love Tee</a></li>
                    <li><a class="text-ash-light hover:text-gold block" href="wintertee.html">Wintertee</a></li>
                    <li><a class="text-sage hover:text-gold block mt-2 text-xs uppercase tracking-wider font-bold" href="tee.html">Alle 15 Tees ansehen →</a></li>
                  </ul>
                  <h3 class="font-serif font-bold text-lg text-mocha mb-3 border-b border-earth-light pb-2"><a class="hover:text-gold" href="sirupe.html">Sirupe</a></h3>
                  <ul class="space-y-2 text-sm mb-6">
                    <li><a class="text-ash-light hover:text-gold block" href="tannenzapfen-sirup.html">Tannenzapfen Sirup</a></li>
                    <li><a class="text-ash-light hover:text-gold block" href="granatapfelsirup.html">Granatapfelsirup</a></li>
                    <li><a class="text-ash-light hover:text-gold block" href="schwarzer-maulbeersirup.html">Maulbeer-Sirup</a></li>
                  </ul>
                  <h3 class="font-serif font-bold text-lg text-mocha mb-3 border-b border-earth-light pb-2 mt-5"><a class="hover:text-gold" href="gewuerze.html">Natürliche Gewürze</a></h3>
                  <ul class="space-y-2 text-sm mb-4">
                    <li><a class="text-ash-light hover:text-gold block" href="sumach-kerne.html">Sumach Kerne</a></li>
                    <li><a class="text-ash-light hover:text-gold block" href="sumach-pulver.html">Sumach Pulver</a></li>
                    <li><a class="text-ash-light hover:text-gold block" href="tuerkischer-oregano.html">Türkischer Oregano</a></li>
                  </ul>
                </div>

                <!-- Col 5: Promo Card -->
                <div class="flex flex-col min-h-0">
                  <div class="rounded-2xl overflow-hidden relative group/promo shadow-lg border border-gold/20 min-h-[300px]">
                    <img alt="Zypressenzapfen Paste Bestseller" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover/promo:scale-110" src="assets/zypressenzapfen_paste.png"/>
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

      <!-- Empty div for balance on mobile -->
      <div class="lg:hidden flex-1"></div>
    </div>
  </div>

  <!-- Mobile Drawer Menu (Blur kaldırıldı, pt-24 ile tam ekran boşluğu sıfırlandı) -->
  <div class="fixed inset-0 bg-[#fbf5eb] z-40 transition-all duration-500 opacity-0 pointer-events-none lg:hidden flex flex-col h-screen" id="mobile-menu">
    <div class="flex-1 overflow-y-auto pt-24 pb-20 px-8 flex flex-col gap-8 custom-scrollbar">
      
      <nav class="flex flex-col space-y-6">
        <a class="text-4xl md:text-5xl font-serif text-mocha hover:text-gold transition-colors block mobile-link" href="ueber-uns.html">Über uns</a>
        <a class="text-4xl md:text-5xl font-serif text-mocha hover:text-gold transition-colors block mobile-link" href="rezepte.html">Rezepte</a>
        <a class="text-4xl md:text-5xl font-serif text-mocha hover:text-gold transition-colors block mobile-link" href="magazin.html">Magazin</a>
      </nav>

      <hr class="border-earth-light my-2"/>

      <!-- Mobile Categories Accordion -->
      <div class="space-y-6">
        <h2 class="text-xs uppercase tracking-[0.2em] text-ash/50 font-bold mb-4">Unsere Kategorien</h2>

        <!-- Accordion Item 1 -->
        <div class="border-b border-earth-light pb-4">
          <button class="w-full text-left flex justify-between items-center text-2xl font-serif text-mocha hover:text-gold transition-colors accordion-btn">
            Kaltgepresste Öle
            <svg class="w-6 h-6 text-gold transition-transform duration-300 icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg>
          </button>
          <div class="max-h-0 opacity-0 overflow-hidden transition-all duration-500 ease-in-out px-2 space-y-4 accordion-content">
            <a class="block text-gold font-bold text-lg mb-2 uppercase tracking-widest text-sm mt-4" href="kaltgepresste-oele.html">Übersicht ansehen</a>
            <a class="block text-ash hover:text-gold text-lg font-light" href="schwarzkummelol.html">Premium Schwarzkümmelöl</a>
            <a class="block text-ash hover:text-gold text-lg font-light" href="leinoel.html">Leinöl</a>
            <a class="block text-ash hover:text-gold text-lg font-light" href="kuerbiskernoel.html">Kürbiskernöl</a>
            <a class="block text-ash hover:text-gold text-lg font-light" href="walnussoel.html">Walnussöl</a>
            <a class="block text-ash hover:text-gold text-lg font-light" href="arganoel.html">Arganöl</a>
          </div>
        </div>

        <!-- Accordion Item 2 -->
        <div class="border-b border-earth-light pb-4">
          <button class="w-full text-left flex justify-between items-center text-2xl font-serif text-mocha hover:text-gold transition-colors accordion-btn">
            Ätherische Öle
            <svg class="w-6 h-6 text-gold transition-transform duration-300 icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg>
          </button>
          <div class="max-h-0 opacity-0 overflow-hidden transition-all duration-500 ease-in-out px-2 space-y-4 accordion-content">
            <a class="block text-gold font-bold text-lg mb-2 uppercase tracking-widest text-sm mt-4" href="aetherische-oele.html">Übersicht ansehen</a>
            <a class="block text-ash hover:text-gold text-lg font-light" href="lavendeloel.html">Lavendelöl</a>
            <a class="block text-ash hover:text-gold text-lg font-light" href="rosenoel.html">Rosenöl</a>
            <a class="block text-ash hover:text-gold text-lg font-light" href="teebaumoel.html">Teebaumöl</a>
            <a class="block text-ash hover:text-gold text-lg font-light" href="oreganool.html">Oreganoöl</a>
          </div>
        </div>

        <!-- Accordion Item 3 -->
        <div class="border-b border-earth-light pb-4">
          <button class="w-full text-left flex justify-between items-center text-2xl font-serif text-mocha hover:text-gold transition-colors accordion-btn">
            Pasten &amp; Melassen
            <svg class="w-6 h-6 text-gold transition-transform duration-300 icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg>
          </button>
          <div class="max-h-0 opacity-0 overflow-hidden transition-all duration-500 ease-in-out px-2 space-y-4 accordion-content">
            <a class="block text-gold font-bold text-lg mb-2 uppercase tracking-widest text-sm mt-4" href="pasten.html">Pasten Übersicht</a>
            <a class="block text-ash hover:text-gold text-lg font-light" href="zypressenzapfen-paste.html">Zypressenzapfen Paste</a>
            <a class="block text-ash hover:text-gold text-lg font-light" href="mariendistel-paste.html">Mariendistel Paste</a>
            <a class="block text-ash hover:text-gold text-lg font-light" href="bittermelone-paste-olivenoel.html">Bittermelone Paste</a>
            <a class="block text-ash hover:text-gold text-lg font-light mt-4" href="traubenmelasse.html">Traubenmelasse</a>
            <a class="block text-ash hover:text-gold text-lg font-light" href="johannisbrot-melasse.html">Johannisbrot Melasse</a>
          </div>
        </div>

        <!-- Accordion Item 4 -->
        <div class="border-b border-earth-light pb-4">
          <button class="w-full text-left flex justify-between items-center text-2xl font-serif text-mocha hover:text-gold transition-colors accordion-btn">
            Naturtee &amp; Kuren
            <svg class="w-6 h-6 text-gold transition-transform duration-300 icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg>
          </button>
          <div class="max-h-0 opacity-0 overflow-hidden transition-all duration-500 ease-in-out px-2 space-y-4 accordion-content">
            <a class="block text-gold font-bold text-lg mb-2 uppercase tracking-widest text-sm mt-4" href="tee.html">Alle Tees ansehen</a>
            <a class="block text-ash hover:text-gold text-lg font-light" href="spitzwegerich-tee.html">Spitzwegerich Tee</a>
            <a class="block text-ash hover:text-gold text-lg font-light" href="atom-tee.html">Atom Tee (Winter-Mix)</a>
            <a class="block text-ash hover:text-gold text-lg font-light" href="wintertee.html">Wintertee</a>
            <a class="block text-ash hover:text-gold text-lg font-light" href="schopflavendel-tee.html">Schopflavendel Tee</a>
          </div>
        </div>

        <!-- Accordion Item 5 -->
        <div class="border-b border-earth-light pb-4">
          <button class="w-full text-left flex justify-between items-center text-2xl font-serif text-mocha hover:text-gold transition-colors accordion-btn">
            Essig &amp; Gewürze
            <svg class="w-6 h-6 text-gold transition-transform duration-300 icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg>
          </button>
          <div class="max-h-0 opacity-0 overflow-hidden transition-all duration-500 ease-in-out px-2 space-y-4 accordion-content">
            <a class="block text-gold font-bold text-lg mb-2 uppercase tracking-widest text-sm mt-4" href="essig.html">Essig ansehen</a>
            <a class="block text-ash hover:text-gold text-lg font-light" href="apfelessig.html">Apfelessig</a>
            <a class="block text-ash hover:text-gold text-lg font-light" href="detox-mix.html">Detox Mix Elixier</a>
            <a class="block text-gold font-bold text-lg mb-2 mt-4 uppercase tracking-widest text-sm" href="gewuerze.html">Gewürze ansehen</a>
            <a class="block text-ash hover:text-gold text-lg font-light" href="sumach-kerne.html">Sumach Kerne</a>
          </div>
        </div>
      </div>

      <div class="mt-8 mb-8">
        <div class="bg-earth-light/30 rounded-[2rem] p-8 border border-earth-light text-center relative overflow-hidden group">
          <div class="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <p class="text-ash/60 text-sm mb-4 relative z-10 uppercase tracking-widest">Premium Service</p>
          <p class="text-mocha font-serif text-xl mb-6 relative z-10">Haben Sie Fragen zu unseren Naturkuren?</p>
          <a class="inline-block bg-gold text-white font-bold py-3 px-8 rounded-full shadow-lg text-sm relative z-10 hover:bg-mocha transition-colors duration-300" href="tel:+490000000">
            Kundenservice anrufen
          </a>
        </div>
      </div>

    </div>
  </div>
</nav>
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

    if (!mobileBtn || !mobileMenu) return;

    function toggleMobileMenu() {
        const isOpen = !mobileMenu.classList.contains('opacity-0');

        mobileMenu.classList.toggle('opacity-0', isOpen);
        mobileMenu.classList.toggle('pointer-events-none', isOpen);
        menuIcon.classList.toggle('hidden', !isOpen);
        closeIcon.classList.toggle('hidden', isOpen);

        document.body.style.overflow = isOpen ? '' : 'hidden';
    }

    mobileBtn.addEventListener('click', toggleMobileMenu);

    // Close menu when clicking main links
    document.querySelectorAll('.mobile-link').forEach(link => {
        link.addEventListener('click', toggleMobileMenu);
    });

    // Accordion Functionality
    document.querySelectorAll('.accordion-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            const content = this.nextElementSibling;
            const icon = this.querySelector('.icon');

            const isExpanded = content.classList.contains('max-h-screen');

            // Close all other accordions
            document.querySelectorAll('.accordion-content').forEach(c => {
                c.classList.remove('max-h-screen', 'opacity-100');
                c.classList.add('max-h-0', 'opacity-0');
            });
            document.querySelectorAll('.accordion-btn .icon').forEach(i => {
                i.classList.remove('rotate-180');
            });

            // Toggle current
            if (!isExpanded) {
                content.classList.remove('max-h-0', 'opacity-0');
                content.classList.add('max-h-screen', 'opacity-100');
                icon.classList.add('rotate-180');
            }
        });
    });
}

// DOM yüklenince çalıştır
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNavigation);
} else {
    initNavigation();
}
