import { MenuItem, RitualStep, AtmosphereItem } from '../types';

export const CARVE_INFO = {
  name: { en: 'CARVE COFFEE BAR', ar: 'قهوة كارڤ' },
  tagline: { en: 'Coffee, carefully considered.', ar: 'قهوة بتأنٍّ وعناية.' },
  subtagline: {
    en: 'An architectural coffee sanctuary in Al Wurud, Riyadh.',
    ar: 'ملاذ معماري للقهوة المختصة في حي الورود، الرياض.'
  },
  location: {
    address: 'Al Urubah Rd, Al Wurud, Riyadh 12251, Saudi Arabia',
    addressAr: 'طريق العروبة، حي الورود، الرياض 12251، المملكة العربية السعودية',
    city: 'Riyadh',
    cityAr: 'الرياض',
    coordinates: '24.7176° N, 46.6853° E',
    mapsUrl: 'https://maps.google.com/?q=CARVE+COFFEE+BAR+Al+Urubah+Rd+Al+Wurud+Riyadh',
    phone: '+966 11 000 0000',
  },
  instagram: {
    handle: '@carvecoffee.sa',
    url: 'https://www.instagram.com/carvecoffee.sa',
  },
  hours: {
    en: 'Daily: 6:00 AM – 1:00 AM (Weekends until 2:00 AM)',
    ar: 'يومياً: 6:00 صباحاً – 1:00 بعد منتصف الليل (عطلة نهاية الأسبوع حتى 2:00)',
    schedule: [
      { days: { en: 'Saturday – Wednesday', ar: 'السبت – الأربعاء' }, time: '06:00 – 01:00' },
      { days: { en: 'Thursday – Friday', ar: 'الخميس – الجمعة' }, time: '06:00 – 02:00' },
    ]
  }
};

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'ice-v60',
    category: 'coffee',
    name: { en: 'Ice V60', ar: 'إيس V60' },
    description: {
      en: 'Manual pour-over flash-chilled over crystalline ice, highlighting floral notes and clean brightness.',
      ar: 'تقطير يدوي مبرد فورياً على مكعبات الثلج النقية لإبراز الإيحاءات الزهرية والنقاء الفائق.'
    },
    notes: { en: 'Single Origin · Floral · Bergamot & Peach', ar: 'محصول فردي · زهري · برغموت ودراق' },
    presentation: { en: 'Served in CARVE wood-ring cup', ar: 'يُقدم في كوب كارڤ بنقش حلقات الخشب' },
    image: '/carve2.PNG'
  },
  {
    id: 'hot-v60',
    category: 'coffee',
    name: { en: 'Hot V60 Filter', ar: 'V60 حار' },
    description: {
      en: 'Slow-extracted specialty drip calibrated for maximum sweetness, clarity, and layered aromatic depth.',
      ar: 'استخلاص بطيء موزون بأعلى درجات الدقة لتحقيق حلاوة متوازنة وعمق عطري متعدد الطبقات.'
    },
    notes: { en: 'Precision Flow · Jasmine · Honeyed Finish', ar: 'تدفق موزون · ياسمين · لمسة عسلية' },
    presentation: { en: 'Signature CARVE vessel', ar: 'في كوب كارڤ التوقيعي' },
    image: '/carve2.PNG'
  },
  {
    id: 'cappuccino',
    category: 'coffee',
    name: { en: 'Cappuccino', ar: 'كابتشينو' },
    description: {
      en: 'Double shot of nuanced espresso softened with micro-textured velvety steamed milk and silken froth.',
      ar: 'جرعة مزدوجة من الإسبريسو المتوازن مع حليب مبخر بقوام مخملي ناعم ورغوة حريرية.'
    },
    notes: { en: 'Velvety Foam · Cocoa Nibs · Roasted Hazelnut', ar: 'رغوة مخملية · كاكاو · بندق محمص' },
    presentation: { en: 'Ceramic coupe cup', ar: 'كوب سيراميك منحوت' },
    image: '/carve4.PNG'
  },
  {
    id: 'ceremonial-matcha',
    category: 'matcha',
    name: { en: 'Ceremonial Matcha Latte', ar: 'ماتشا لاتيه احتفالية' },
    description: {
      en: 'Stone-milled Japanese ceremonial grade green tea hand-whisked to jade froth with silky milk.',
      ar: 'شاي أخضر ياباني مطحون على الحجر بدرجة احتفالية مخفوق يدوياً مع حليب ناعم كالحرير.'
    },
    notes: { en: 'Uji Origin · Umami · Creamy Sweetness', ar: 'محصول أوجي · أومامي · حلاوة حريرية' },
    presentation: { en: 'Available Iced or Warm', ar: 'متوفر مثلجاً أو دافئاً' },
    image: '/carve5.PNG'
  },
  {
    id: 'hibiscus-cascara',
    category: 'cold',
    name: { en: 'Iced Ruby Hibiscus', ar: 'كركديه مثلج روبي' },
    description: {
      en: 'Slow cold-steeped organic hibiscus blossom and coffee cascara with wild berries and citrus zest.',
      ar: 'منقوع بارد لبتلات الكركديه العضوية وقشور القهوة (كاسكارا) مع توت بري ولمسة حمضية منعشة.'
    },
    notes: { en: 'Tart Berry · Citrus Bloom · Crystalline Ice', ar: 'توت بري · زهر الحمضيات · ثلج نقي' },
    presentation: { en: 'Chilled glass presentation', ar: 'يُقدم في كأس زجاجي بارد' },
    image: '/carve5.PNG'
  },
  {
    id: 'banana-pudding',
    category: 'desserts',
    name: { en: 'Carve Banana Pudding', ar: 'كارڤ بانانا بودنغ' },
    description: {
      en: 'Signature CARVE dessert with velvety whipped mascarpone cream, fresh vanilla custard, and toasted biscuit crumble.',
      ar: 'حلى كارڤ الاستثنائي بكريمة الماسكاربوني المخفوقة مع كاسترد الفانيليا وفتات البسكويت الذهبي المقرمش.'
    },
    notes: { en: 'Whipped Mascarpone · Golden Crumble · Madagascan Vanilla', ar: 'ماسكاربوني مخفوق · بسكويت ذهبي · فانيليا مدغشقر' },
    presentation: { en: 'Served in chilled silver coupe bowl', ar: 'يُقدم في وعاء الكوبيه الفضي البارد' },
    image: '/carve2.PNG'
  },
  {
    id: 'tiramisu',
    category: 'desserts',
    name: { en: 'Artisanal Tiramisu', ar: 'تيراميسو كارڤ' },
    description: {
      en: 'Espresso-soaked savoiardi layered with whipped cream cheese and finished with single-origin cocoa dust.',
      ar: 'أصابع بسكويت مغمورة بإسبريسو كارڤ المركز متراكبة مع كريمة ناعمة وغبار كاكاو فاخر.'
    },
    notes: { en: 'Espresso Soak · French Mascarpone · Raw Cacao', ar: 'نقع إسبريسو · ماسكاربوني فرنسي · كاكاو خام' },
    presentation: { en: 'Chilled serving dish', ar: 'طبق تقديم مبرد' },
    image: '/carve5.PNG'
  },
  {
    id: 'cheesecake',
    category: 'desserts',
    name: { en: 'Burnt Basque Cheesecake', ar: 'تشيز كيك باسك' },
    description: {
      en: 'Caramelized bronzed top with an ultra-creamy molten center, perfectly balancing sweetness and roasted richness.',
      ar: 'سطح مكرمل مذهب وقلب كريمي ذائب يوازن بين الحلاوة ونكهة الكراميل المحمص.'
    },
    notes: { en: 'Caramelized Crust · Custard Core · Sea Salt', ar: 'قشرة مكرملة · قوام ذائب · رشة ملح بحري' },
    presentation: { en: 'Freshly plated slice', ar: 'شريحة محضرة بعناية' },
    image: '/carve3.PNG'
  },
  {
    id: 'almond-croissant',
    category: 'bakes',
    name: { en: 'Almond Twice-Baked Croissant', ar: 'كرواسون اللوز المحمص' },
    description: {
      en: 'Buttery laminated Viennoiserie filled with rich frangipane almond cream and toasted sliced almonds.',
      ar: 'معجنات فرنسية هشة بالزبدة الطبيعية محشوة بكريمة اللوز الغنية ومغطاة بشرائح اللوز المحمص.'
    },
    notes: { en: 'Pure French Butter · Frangipane · Powdered Sugar', ar: 'زبدة فرنسية نقية · كريمة اللوز · سكر بودرة' },
    presentation: { en: 'Displayed under glass cloche', ar: 'معروض تحت قبة زجاجية فاخرة' },
    image: '/carve3.PNG'
  },
  {
    id: 'date-cocoa-truffles',
    category: 'bakes',
    name: { en: 'Artisan Date Truffles & Bakes', ar: 'ترافل التمر والمخبوزات' },
    description: {
      en: 'Handmade local date confections coated in dark chocolate and raw cocoa, paired with fresh brownies.',
      ar: 'كرات التمر المحلي الفاخر المغطى بالشوكولاتة الداكنة وبودرة الكاكاو مع قطع البراوني الطازجة.'
    },
    notes: { en: 'Saudi Dates · Single-Estate Cocoa · Sea Salt', ar: 'تمر سعودي فاخر · كاكاو نقي · ملح بحري' },
    presentation: { en: 'Stone pedestal display', ar: 'على قاعدة حجرية رخامية' },
    image: '/carve3.PNG'
  }
];

export const RITUAL_STEPS: RitualStep[] = [
  {
    step: '01',
    title: { en: 'CHOOSE', ar: 'الاختيار' },
    subtitle: { en: 'The Origin & The Harvest', ar: 'المحصول والمصدر' },
    description: {
      en: 'Every cup begins with intentional selection: handpicked single-origin micro-lots sourced for clarity, balance, and distinctive terroirs.',
      ar: 'كل فنجان يبدأ باختيار مقصود: محاصيل فردية المصدر تم انتقاؤها لنقاء الإيحاءات وتوازن النكهة.'
    },
    details: {
      en: 'Ethiopian Guji · Colombian Huila · Geisha Selections',
      ar: 'غوجي إثيوبي · ويلا كولومبي · محاصيل غيشا المختارة'
    },
    image: '/carve.PNG'
  },
  {
    step: '02',
    title: { en: 'BREW', ar: 'التحضير' },
    subtitle: { en: 'Geometry & Thermal Precision', ar: 'الهندسة والدقة الحرارية' },
    description: {
      en: 'Water measured at 93.5°C over calibrated cone geometry. Gentle bloom reveals natural aromatics before an even spiral pour.',
      ar: 'حرارة ماء مضبوطة عند 93.5 درجة مئوية فوق قمع استخلاص موزون بدقة لتحرير أصدق الروائح العطرية.'
    },
    details: {
      en: '45-second bloom · 1:16 ratio · 240ml yield',
      ar: 'ترطيب 45 ثانية · نسبة 1:16 · استخلاص نقي'
    },
    image: '/carve1.PNG'
  },
  {
    step: '03',
    title: { en: 'POUR', ar: 'السكب' },
    subtitle: { en: 'Into The Woodcut Vessel', ar: 'في الكوب المنقوش' },
    description: {
      en: 'The brew streams into CARVE’s signature vessel, adorned with annual wood growth rings reflecting the craft of time and carving.',
      ar: 'ينساب المشروب في كوب كارڤ الخاص والمزين بنقش حلقات نمو الشجر السنوية تعبيراً عن قيمة الوقت والنحت.'
    },
    details: {
      en: 'Signature annual rings illustration · Insulated craft paper',
      ar: 'رسم حلقات الخشب التوقيعي · ورق عازل فاخر'
    },
    image: '/carve2.PNG'
  },
  {
    step: '04',
    title: { en: 'TASTE', ar: 'التذوق' },
    subtitle: { en: 'A Moment of Stillness', ar: 'لحظة من السكون' },
    description: {
      en: 'Paired with our chilled banana pudding in a silver coupe, taste notes unfold layer by layer as temperature softens.',
      ar: 'تتناغم القهوة مع بودنغ الموز البارد في كأس الكوبيه الفضي، لتتكشف طبقات النكهة مع كل رشفة هادئة.'
    },
    details: {
      en: 'Layered mouthfeel · Lingering sweet acidity · Thermal evolution',
      ar: 'قوام متوازن · حلاوة ممتدة · تطور حراري ممتع'
    },
    image: '/carve5.PNG'
  },
  {
    step: '05',
    title: { en: 'REPEAT', ar: 'التكرار' },
    subtitle: { en: 'An Enduring Riyadh Habit', ar: 'عادة يومية في الرياض' },
    description: {
      en: 'A quiet refuge amidst Al Urubah Road. A place to return to, to converse, to read, and to carve out stillness.',
      ar: 'ملاذ هادئ على طريق العروبة. مساحة تعود إليها دائماً للقاء، أو القراءة، أو لاقتطاع لحظة سكينة.'
    },
    details: {
      en: 'Open daily from 6:00 AM until past midnight',
      ar: 'نستقبلكم يومياً من السادسة صباحاً حتى منتصف الليل'
    },
    image: '/carve4.PNG'
  }
];

export const ATMOSPHERE_GALLERY: AtmosphereItem[] = [
  {
    id: 'facade',
    title: { en: 'The Urubah Facade', ar: 'واجهة العروبة' },
    caption: {
      en: 'Warm travertine stone exterior beneath the Riyadh sky, grounded by the white portal and black CARVE emblem.',
      ar: 'واجهة من حجر الترافرتين الدافئ تحت سماء الرياض، تتوسطها بوابة بيضاء وشعار كارڤ الأسود.'
    },
    material: { en: 'Travertine stone · Metal signage · Sidewalk brick', ar: 'حجر ترافرتين · شعار معدني بارز · رصيف حجري' },
    image: '/carve.PNG',
    tag: { en: 'EXTERIOR', ar: 'الواجهة' }
  },
  {
    id: 'portal',
    title: { en: 'The Chiseled Portal', ar: 'البوابة المنحوتة' },
    caption: {
      en: 'The heavy solid dark timber entrance door with carved modular blocks and a smooth organic pebble stone handle.',
      ar: 'باب المدخل الخشبي الداكن المصنوع من كتل هندسية محفورة ومقبض حجري ناعم مستوحى من الطبيعة.'
    },
    material: { en: 'Carved dark oak · Stone pebble handle · Relief plaster', ar: 'خشب بلوط محفور · مقبض حجري · جص متموج' },
    image: '/carve1.PNG',
    tag: { en: 'ENTRANCE', ar: 'المدخل' }
  },
  {
    id: 'lounge',
    title: { en: 'The Evening Lounge', ar: 'صالة المساء' },
    caption: {
      en: 'Floating curved paper sail pendant light casting warm diffused glow over origami black geometric table and canvas sling chairs.',
      ar: 'إضاءة معلقة كالشراع المنحني تلقي توهجاً دافئاً فوق طاولة الأوريغامي السوداء ومقاعد القماش الكتاني.'
    },
    material: { en: 'Translucent paper · Honed limestone · Matte steel', ar: 'ورق نصف شفاف · حجر جيري مصقول · فولاذ مطفي' },
    image: '/carve4.PNG',
    tag: { en: 'INTERIOR', ar: 'المساحة الداخلية' }
  },
  {
    id: 'wood-wall',
    title: { en: 'Hand-Gouged Walnut Wall', ar: 'جدار الخشب المحفور يدوياً' },
    caption: {
      en: 'A continuous wall of solid walnut sculpted with concave chisel marks, demonstrating the visceral tactile spirit of CARVE.',
      ar: 'جدار متصل من خشب الجوز الصلب منقوش بضربات الإزميل الغائرة، يجسد روح النحت الحقيقية لكارڤ.'
    },
    material: { en: 'Solid chiseled walnut · Curved travertine counter', ar: 'خشب جوز محفور بالإزميل · رخام ترافرتين' },
    image: '/carve_wood_texture_1791260808841.jpg',
    tag: { en: 'CRAFT', ar: 'الحرفة' }
  },
  {
    id: 'pastry-bar',
    title: { en: 'The Cloche Pastry Bar', ar: 'بار الحلويات الزجاجي' },
    caption: {
      en: 'Curved stone counter presenting artisanal croissants and confections under hand-blown glass bell jars.',
      ar: 'كاونتر حجري منحنٍ يستعرض مخبوزات طازجة وحلويات راقية تحت قباب زجاجية أنيقة.'
    },
    material: { en: 'Glass cloches · Ceramic pedestals · Fluted stone', ar: 'قباب زجاجية · قواعد سيراميك · حجر مخدد' },
    image: '/carve3.PNG',
    tag: { en: 'BAKERY', ar: 'المخبوزات' }
  },
  {
    id: 'tabletop',
    title: { en: 'The Silver Coupe & Cold Drip', ar: 'الكوبيه الفضي والتقطير البارد' },
    caption: {
      en: 'Signature tree-ring paper cup alongside chilled ruby cold brew and golden-crumbed banana pudding.',
      ar: 'كوب كارڤ السنوي بجانب مشروب الكركديه الياقوتي البارد وبودنغ الموز الذهبي.'
    },
    material: { en: 'Stainless coupe · Natural oak tray · Double-wall glass', ar: 'وعاء فضي · صينية خشب البلوط · زجاج مزدوج' },
    image: '/carve5.PNG',
    tag: { en: 'TASTING', ar: 'التذوق' }
  }
];

export const COFFEE_LAB_DATA = {
  espresso: {
    name: { en: 'ESPRESSO CRAFT', ar: 'فن الإسبريسو' },
    subtitle: { en: 'Pressure, Texture & Extraction', ar: 'الضغط والقوام والاستخلاص' },
    description: {
      en: 'Extracted at 9 bars of pressure across 28 seconds to yield a rich, viscous body with honeyed notes and balanced crema.',
      ar: 'يُستخلص عند ضغط 9 بار خلال 28 ثانية لينتج قواماً كثيفاً وحريرياً بنكهات عسلية وكريما متوازنة.'
    },
    parameters: [
      { label: { en: 'Dose', ar: 'الجرعة' }, val: '19.5g' },
      { label: { en: 'Yield', ar: 'الاستخلاص' }, val: '38.0g' },
      { label: { en: 'Temp', ar: 'الحرارة' }, val: '93.2°C' },
      { label: { en: 'Time', ar: 'الوقت' }, val: '27-29s' },
    ],
    image: '/carve4.PNG'
  },
  filter: {
    name: { en: 'FILTER & MANUAL V60', ar: 'التقطير اليدوي V60' },
    subtitle: { en: 'Purity, Clarity & Florals', ar: 'النقاء والوضوح والزهور' },
    description: {
      en: 'Using slow conical extraction to separate every nuanced aromatic compound. Clean, vibrant, and effortlessly drinkable.',
      ar: 'باستخدام الاستخلاص المخروطي المتأني لإبراز أدق المركبات العطرية. مشروب نقي، حيوي، وسلس التذوق.'
    },
    parameters: [
      { label: { en: 'Grind', ar: 'الطحنة' }, val: 'Medium-Coarse' },
      { label: { en: 'Water', ar: 'الماء' }, val: '250ml @ 93.5°C' },
      { label: { en: 'Ratio', ar: 'النسبة' }, val: '1 : 16.5' },
      { label: { en: 'TDS', ar: 'التركيز' }, val: '1.38%' },
    ],
    image: '/carve2.PNG'
  },
  coldBrew: {
    name: { en: 'SLOW COLD EXTRACTION', ar: 'الاستخلاص البارد المتأني' },
    subtitle: { en: '16-Hour Steep & Zero Acidity', ar: 'نقع 16 ساعة وحموضة صفرية' },
    description: {
      en: 'Cold water percolation over 16 continuous hours produces a silky, naturally sweet nectar with notes of dark cacao and dried dates.',
      ar: 'تقطير بماء بارد على مدى 16 ساعة متواصلة ينتج شراباً حريرياً حالياً بطبيعته بنكهات الكاكاو الداكن والتمر.'
    },
    parameters: [
      { label: { en: 'Steep Time', ar: 'مدة النقع' }, val: '16 Hours' },
      { label: { en: 'Temp', ar: 'الحرارة' }, val: '3.5°C' },
      { label: { en: 'Serving', ar: 'التقديم' }, val: 'Over Clear Ice' },
      { label: { en: 'Body', ar: 'القوام' }, val: 'Ultra Silky' },
    ],
    image: '/carve5.PNG'
  },
  matcha: {
    name: { en: 'CEREMONIAL GRADE MATCHA', ar: 'ماتشا الدرجة الاحتفالية' },
    subtitle: { en: 'Shaded Harvest from Uji, Kyoto', ar: 'محصول مظلل من أوجي، كيوتو' },
    description: {
      en: 'First harvest stone-ground tencha leaves hand-whisked with bamboo chasen to create an emerald liquor rich in L-theanine.',
      ar: 'أوراق تينشا الحصاد الأول المطحونة على حجر الغرانيت تُخفق بفرشاة البامبو لتشكل رغوة زمردية فائقة النقاء.'
    },
    parameters: [
      { label: { en: 'Grade', ar: 'الدرجة' }, val: 'Ceremonial First Flush' },
      { label: { en: 'Whisk', ar: 'الخفق' }, val: '100-Prong Chasen' },
      { label: { en: 'Water Temp', ar: 'حرارة الماء' }, val: '78°C' },
      { label: { en: 'Flavor', ar: 'الإيحاء' }, val: 'Sweet Grass & Umami' },
    ],
    image: '/carve3.PNG'
  }
};
