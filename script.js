/* ===========================================================
   Dongpai Metal · Editorial site interactions
   - i18n (en / zh-Hant / zh-Hans)
   - scroll reveal
   - sticky header state
   - mobile menu
   - enquiry → mailto:
   =========================================================== */

(() => {
  "use strict";

  // Progressive enhancement flag — CSS uses .js to enable hide-then-reveal pattern.
  document.documentElement.classList.add("js");

  /* ───────── Translations ───────── */
  const dict = {
    en: {
      htmlLang: "en",
      title: "Dongpai Metal · Architectural Metalworks Atelier for Hong Kong's Skyline",
      description:
        "Dongpai Metal Group — 47,000 m² flagship plant in Huizhou (Dongpai) + 12,000 m² original workshop in Dongguan (Changlei) + Hong Kong sales & engineering offices. Delivering bronze, aluminium and stainless-steel façades, balustrades and feature walls for Hong Kong's most distinguished addresses since 2012.",
      brandName: "Dongpai Metal",
      brandMeta: "Architectural Metalworks · Est. 2012",
      navWork: "Selected Work",
      navCapabilities: "Capabilities",
      navStudio: "The Studio",
      navProcess: "Process",
      navContact: "Contact",
      navEnquire: "Enquire ↗",

      heroEyebrow: "Est. 2012 · Hong Kong · Greater Bay Area",
      heroTitle:
        '<span class="line">Hong Kong\'s</span><span class="line"><em>metal envelope.</em></span>',
      heroCopy:
        "The bronze, aluminium and stainless-steel skin behind the city's most distinguished addresses — drawn, machined and installed by one group, since 2012.",
      heroPrimary: "See Selected Work",
      heroSecondary: "Enquire about a project",
      heroScroll: "Scroll",
      metricYears: "Atelier established 2012",
      metricArea: "Flagship plant, Huizhou",
      metricTeam: "Huizhou · Dongguan · 2× Hong Kong",
      metricFlats: "Flats delivered, HK · GBA",
      metric1Unit: "yrs",
      metric2Unit: "m²",
      metric3Unit: "entities",
      metric4Unit: "+",

      manifestoKicker: "№ 01 — Manifesto",
      manifestoBody:
        "A façade is the <em>first promise</em> a building makes — and the last one a city remembers. For thirteen years we have kept that promise in <em>bronze</em>, <em>aluminium</em> and <em>stainless steel</em>, from the first shop drawing to the final installed panel.",
      manifestoK1: "Discipline",
      manifestoV1: "Architectural Metalworks",
      manifestoK2: "Materials",
      manifestoV2: "Bronze · Aluminium · Stainless Steel",
      manifestoK3: "Sectors",
      manifestoV3: "Residential · Commercial · Public",
      manifestoK4: "Geography",
      manifestoV4: "Hong Kong · Greater Bay Area",

      capabilitiesTitle: 'Five disciplines, <em>one atelier</em>.',
      cap1Title: 'Aluminium Cladding',
      cap1Meta: "Bronze · Champagne ·<br />Graphite Anodised",
      cap1Desc:
        "Curtain-wall panels, podium feature panels, ventilated façades. Anodised, PVDF-coated and powder-coated finishes — engineered to BD wind-load and curtain-wall codes.",
      cap2Title: 'Balustrade &amp; Handrail',
      cap2Meta: "Glass-clamped · Perforated ·<br />Vertical Fin",
      cap2Desc:
        "Balcony, podium and lift-lobby balustrades. Designed to BS EN 1991 wind loads, finished in the same anodised tone as the surrounding cladding.",
      cap3Title: 'AC Grill &amp; Louvre',
      cap3Meta: "Air-Discharge Code ·<br />Matched Finish",
      cap3Desc:
        "Fabricated to BD's Air Discharge Code, matched to the cladding finish so the building reads as one continuous skin — no visible service interruption.",
      cap4Title: 'Feature Wall &amp; Ceiling',
      cap4Meta: "Rhombic · Fluted ·<br />Sculptural",
      cap4Desc:
        "Stainless steel, bronze and copper-anodised aluminium for lobbies, lift halls and clubhouses. For interiors that need to read as art, not as cladding.",
      cap5Title: 'Stainless Steel Decoration',
      cap5Meta: "Hairline · Mirror ·<br />Vibrated",
      cap5Desc:
        "Custom column cladding, signage and decorative screens. Hand-finished by craftsmen who have spent ten years polishing nothing else.",

      workTitle: "The metal envelope behind <em>Hong Kong's</em> most distinguished addresses.",
      specClient: "Client",
      specArchitect: "Architect",
      specScope: "Scope",
      specQty: "Quantity",
      work1Copy:
        "A fifty-one-storey, MTR-podium development above Wong Chuk Hang station — a joint venture between five of Hong Kong's most established names. Our atelier delivered every aluminium balcony — <em>handrail, AC grill, pipe-duct cladding</em> — for all 804 flats, in a continuous bronze finish that wraps the building's gentle curve.",
      work1Scope: "Alum. handrail · AC grill · pipe-duct cladding",
      work1Qty: "804 flats",
      work2Copy:
        "A new harbourfront address from SHK at Kai Tak. The podium's external cladding and <em>1,010 m² rhombic-shape suspended ceiling — 2,020 individual panels</em> — were drawn, mocked up, fabricated and installed by our team from atelier to site.",
      work2Scope: "Podium cladding · suspended ceiling",
      work2Qty: "~4,000 m² · 2,020 pcs",
      work3Copy:
        "Twenty-eight slender storeys above the King's Road tram line. <em>Vertical bronze fins</em> frame each balcony — a quiet rhythm against North Point's older skyline.",
      work3Scope: "Alum. handrail · AC grill · pipe-duct cladding",
      work3Qty: "251 flats",
      work4Copy:
        "A boutique Wan Chai address where the metalwork carries from podium to penthouse — <em>feature wall, column cladding, ceiling and balcony</em> all detailed by the same atelier so the building reads as one piece.",
      work4Scope: "Feature wall · column cladding · ceiling · balcony",
      work4Qty: "88 flats",
      work5Copy:
        "Lu Tang Lai's first Kowloon high-rise for Wang On. We supplied the <em>external cladding, balcony grill and ceiling panels</em> — bronze and graphite-anodised aluminium, factory-finished to remove on-site touch-up entirely.",
      work5Scope: "Ext. cladding · grill &amp; railing · ceiling panel",
      work5Qty: "230 flats",

      archiveTitle: "A <em>partial record</em> of buildings we've helped to clad.",
      archiveFootP: "A continuing record — <em>1,500+ flats</em> and counting, across thirteen years.",
      archiveFootCta: "Request full project list",
      archHdrYear: "Year",
      archHdrProject: "Project",
      archHdrClient: "Client",
      archHdrArchitect: "Architect",
      archHdrScope: "Scope",
      archLabelClient: "Client",
      archLabelArchitect: "Architect",
      archLabelScope: "Scope",

      studioTitle: 'Four entities. <em>One envelope</em>.',
      studioLead:
        "Dongpai Metal is a Greater Bay Area metalworks group structured as four entities under one delivery contract. Our <em>47,000 m² flagship plant</em> sits in Huizhou; <em>Changlei Hardware</em>, our 12,000 m² original workshop, runs in Dongguan; and our <em>Hong Kong sales office in Tsuen Wan</em> together with our <em>engineering office in Kwun Tong</em> handle shop-drawing collaboration with the city's architects and developers — New World, Sun Hung Kai, MTR Corporation, Wheelock, Wang On.",
      studioH2: "<em>47,000 m²</em>. <br />Huizhou, the easternmost<br />edge of the Greater <br />Bay Area.",
      studioP1:
        "Dongpai's <em>flagship plant in Huizhou</em> spans 47,000 m² — laser cutting, brake forming, robotic welding, anodising and final finishing all under one roof. Together with our Dongguan partner Changlei (12,000 m²), the group delivers façade and structural metalwork at the scale Hong Kong podium projects demand.",
      studioP2:
        "Every project begins the same way — with a drawing reviewed at our Hong Kong office, a 1:1 mock-up erected in Huizhou, and a long meeting with the client and architect. We don't subcontract the parts that matter.",
      equip1Name: "Laser Cutting Cell",
      equip2Name: "Laser Tube Cutting",
      equip3Name: "500-Ton Press Brake",
      equip4Name: "Robotic Welding Cell",

      logisticTitle: "Two hours from <em>any HK site</em>. <br />Two plants, one route.",
      logisticP:
        "Our Huizhou flagship and Dongguan partner workshop sit <em>16 km apart</em> on the eastern edge of the Greater Bay Area. From either loading dock to the Hong Kong border, it is around <em>two hours</em>. Most components leave our gate in the morning, clear the border by noon and are on site the next day — under a single bill of lading coordinated from our Hong Kong offices in Tsuen Wan and Kwun Tong.",

      certTitle: "Engineered to <em>EN&nbsp;1090-2 · EXC3</em>.",
      certLead:
        "Our structural steel and curtain-wall fabrication is certified to the European norm <strong>EN&nbsp;1090-2 Execution Class EXC3</strong> — the class reserved for <em>complex structures</em>: high-rise façades, structures with seismic, fatigue or wind-fatigue loading, and elements where failure has serious safety consequences. It is the same execution class specified for landmark super-tall curtain-wall projects across Europe and Asia where façade failure would have public-safety consequences.",

      processTitle: "Drawing. Mock-up. <em>Then</em> production.",
      process1Title: "Shop Drawing",
      process1Copy:
        "We work with the project's curtain-wall consultant and the architect to translate the design intent into manufacturing reality. Every node, every joint, every tolerance.",
      process2Title: "Mock-up",
      process2Copy:
        "We build a 1:1 mock-up before a single panel is fabricated. The mock-up is the contract — when the architect signs it, we know exactly what to deliver.",
      process3Title: "Fabrication",
      process3Copy:
        "Laser, brake, weld, anodise, polish. Five processes, one roof — with two QC checkpoints between each. Nothing leaves the atelier without sign-off.",
      process4Title: "Installation",
      process4Copy:
        "Our installation crew travels from Dongguan to the Hong Kong site. The same supervisor sees a panel from its mock-up day to its handover.",

      clientsTitle: "The company we keep.",
      clientsDevs: "Developers",
      clientsArchs: "Architects &amp; Consultants",

      contactTitle: "Send us a drawing. <br />We'll send back a <em>mock-up</em>.",
      contactCopy:
        "If you're an architect, curtain-wall consultant or main contractor with a façade in scope, we'd like to see your drawings. We respond to enquiries within two business days — usually with a question, a clarification, and a rough capacity slot.",
      contactSingleKey: "One contact · four entities · two plants · two HK offices.",
      contactSingleNote: 'For the full group structure — Huizhou flagship, Dongguan workshop, Hong Kong sales &amp; engineering offices — see <a href="#studio">Group Structure ↗</a>',
      contactEnt1Tag: "Flagship Plant · Huizhou",
      contactEnt1Addr: "No. 1 Nantang East Road, Chenjiang Street,<br />Zhongkai High-tech Zone, Huizhou, Guangdong",
      contactEnt2Tag: "Original Workshop · Dongguan",
      contactEnt2Addr: "Room 102, Building 1, No. 20 Daxing Road,<br />Xiegang Town, Dongguan, Guangdong",
      contactEnt3Tag: "HK Sales · Tsuen Wan",
      contactEnt3Addr: "Room 11, 1/F, Block B, Hi-Tech Industrial Centre,<br />491–501 Castle Peak Road, Tsuen Wan, N.T., HK",
      contactEnt4Tag: "HK Engineering · Kwun Tong",
      contactEnt4Addr: "RM 9042, 9/F, Block B, Chung Mei Centre,<br />15–17 Hing Yip Street, Kwun Tong, Kowloon, HK",
      contactLabelHZ: "Flagship Plant · Huizhou",
      contactLabelDG: "Original Workshop · Dongguan",
      contactLabelHKsales: "HK Sales · Tsuen Wan",
      contactLabelHKeng: "HK Engineering · Kwun Tong",
      contactSpecHZ: "47,000 m² · façade, balustrade, anodising",
      contactSpecDG: "12,000 m² · stainless steel, feature wall & ceiling",
      enquiryTitle: "New Enquiry",
      enquiryTag: "№ 09 / Response within 2 days",
      formName: "Name / Company",
      formEmail: "Email",
      formProject: "Project — name & location",
      formScope: "Scope of enquiry",
      formOpt1: "Aluminium cladding · curtain-wall panels",
      formOpt2: "Balustrade · handrail · grill",
      formOpt3: "Feature wall · metal ceiling",
      formOpt4: "Stainless steel decoration",
      formOpt5: "Mixed scope / not sure",
      formBrief: "Brief",
      formSubmit: "Send enquiry ↗",
      formSending: "Sending… ↗",
      inquirySubject: "Project enquiry — Dongpai Metal",
      footerSub: "Dongpai Metal · Dongpai Metal (HK)",
      footerTagline:
        "Architectural metalworks atelier since 2012. Bronze, aluminium and stainless steel for the developers and architects shaping Hong Kong's skyline.",
      footerNav: "Navigate",
      footerContact: "Contact",
      footerPrivacy: "Privacy Policy",
      footerHK: "Tsuen Wan · Kwun Tong, Hong Kong",
      footerHZ: "Zhongkai High-tech Zone, Huizhou",
      footerDG: "Xiegang Town, Dongguan",
      footerMotto: "Craftsmanship builds dreams · Intelligence shapes the future",
      railTel: "Tel",
      railWhatsApp: "WhatsApp",
      railWeChat: "WeChat",
      railWeChatScan: "Scan WeChat",
      railWeChatQr: "QR · 9667 0869",
      railEmail: "Email",
      railTop: "Top",
      backTop: "Back to Top ↑",
      // ─── auto-filled from HTML defaults (audit fix pass 2) ───
      aboutStat1: "Large-scale projects delivered",
      aboutStat2: "Flagship plant · Huizhou",
      aboutStat3: "Original workshop · Dongguan",
      aboutStat4: "Technology patents granted",
      aboutStat5: "R&D engineers, in-house",
      aboutStat6: "Product pass-rate, key processes",
      aboutStat7: "Automation on key processes",
      aboutStat8: "CQM · EN 1090-2 EXC3",
      adv1P1: "senior engineers in design & R&D",
      adv1P2: "annual R&D spend as a share of revenue",
      adv1P3: "technology patents granted",
      adv1Title: "Design & R&D Team",
      adv2P1: "Design → fabrication → installation → after-sales — one stop",
      adv2P2: "Lifelong client profile · full-cycle product tracking",
      adv2Title: "All-Round Service",
      adv3P1: "large-scale engineering projects delivered cumulatively",
      adv3P2: "Complete project management — scheme design through installation and maintenance",
      adv3Title: "Rich Project Experience",
      adv4P1: "quality management system certified (CQM)",
      adv4P2: "Full chain — raw metals, precision hardware, curtain-wall systems, customised products",
      adv4Title: "Standardised Smart Production Line",
      adv5P1: "Plate & profile laser machines, CNC bending, robotic welding, anodising line",
      adv5P2: "automation on key production processes",
      adv5Title: "International Production Equipment",
      adv6P1: "Triple QC checkpoints between every key process",
      adv6P2: "first-pass pass-rate — above industry standard",
      adv6P3: "European complex-structure execution class",
      adv6Title: "Quality Assurance",
      advLead: "The reasons developers and architects keep coming back to Dongpai — drawn straight from how the group is built, audited and benchmarked.",
      advTitle: "Six reasons our work <em>stays delivered</em>.",
      certCap: "EN 1090-2 Class EXC3 — Complex Structure",
      certV1: "Highest execution class for façade & structural members with fatigue, seismic or high-consequence loading.",
      certV2: "CE-marking compliant. Documented welding-procedure specifications, NDT records and material traceability per panel.",
      certV3: "Two QC checkpoints between each process: laser, brake, weld, anodise, finish. No piece leaves the atelier un-signed.",
      certV4: "Hong Kong Buildings Department wind-load & Air Discharge Code conformant. Independent third-party testing on request.",
      group1Role: "Flagship plant — façade, balustrade, structural fabrication, anodising line. Est. 2022.",
      group2Role: "Stainless steel decoration, feature wall & ceiling, mock-up assembly. Est. 2014; group lineage from Zezhen Metal (est. 2012).",
      group3Role: "Hong Kong commercial entity — sales, invoicing, client liaison for HK / Macau / overseas projects.",
      group4Role: "Curtain-wall engineering entity — shop drawings, on-site supervision, mock-up sign-off. Founded 2016 (Heguang Curtain Wall lineage).",
      groupArea: "Area",
      groupKicker: "№ 06.01 — Group Structure",
      groupLoc: "Location",
      groupMotto: "Craftsmanship builds dreams · Intelligence shapes the future",
      groupMottoEn: "Craftsmanship builds dreams · Intelligence shapes the future",
      groupRole: "Role",
      groupTag1: "Flagship · Production",
      groupTag2: "Original Workshop",
      groupTag3: "HK Sales",
      groupTag4: "HK Engineering",
      heroPdf: "Group Profile",
      logisticH1: "Huizhou ↔ Dongguan",
      logisticH2: "Huizhou → Shenzhen",
      logisticH3: "Huizhou → HK SAR",
      logisticT1: "≈ 0.5 hrs",
      logisticT2: "≈ 2 hrs",
      logisticT3: "≈ 2 hrs",
      navAdvantages: "Core Advantages",
      navCert: "Certification",
      navProducts: "Products",
      ownerBoth: "Client + Dongpai",
      ownerCL: "Dongpai Metal",
      ownerClient: "Client",
      phase1Name: "深化圖紙協作",
      phase2Name: "1:1 樣板協作",
      process5Copy: "The full-scale mock-up is erected — at our atelier, or on a designated site bay — for visual, weather and tolerance review.",
      process5Title: "Erect Mock-up",
      process6Copy: "We rehearse the install sequence on the mock-up — fixings, sealing, tolerances, water test. Adjustments fold back into the drawing.",
      process6Title: "Installation Review",
      process7Copy: "The mock-up becomes the contract. The architect signs the drawing-of-record — and only then is it released to production.",
      process7Title: "Drawing Sign-off",
      process8Copy: "Production proper — with two QC checkpoints between each process. Same atelier, same supervisor, panel-to-handover.",
      process8Title: "Mass Production",
      processLead: "Eight steps, in two collaborative loops. No panel is mass-produced until the architect has signed off a 1:1 mock-up of every node.",
      productCta: "View Projects",
      productsLead: "From façade panels to feature ceilings — the entire metal envelope, drawn, machined and installed by one team. Bronze, aluminium, stainless steel.",
      studioCta: "Visit our plants",
      studioFloorCap: "Six bays under one roof — laser, brake, weld, finish and assembly. No subcontracted parts.",
      studioFloorKicker: "№ 06.02 — Production Floor",
      timeline1: "Zezhen Metal founded — focused on precision metalworking",
      timeline2: "Changlei Hardware founded — production lines extended into the supply chain",
      timeline3: "Heguang Curtain Wall founded — entered curtain-wall & façade engineering",
      timeline4: "Dongpai Metal Products — 47,000 m² Huizhou flagship · one-stop hardware partner for large-scale HK projects",
      work1Tag: "South Side · Phase 5",
      work2Tag: "Kai Tak · 6551",
      work3Tag: "North Point",
      work4Tag: "Wan Chai",
      work5Tag: "Wong Tai Sin",
      work4Arch: "Wheelock (in-house)",
      work1H3: "Deep Water Pavilia",
      work2H3: "Cullinan Harbour",
      work3H3: "101 King's Road",
      work4H3: "38 Spring Garden Lane",
      work5H3: "Phoenext",
    },

    "zh-hant": {
      htmlLang: "zh-Hant",
      title: "東排金屬 · 香港建築外立面金屬工坊",
      description:
        "東排金屬集團——惠州 47,000 平方米旗艦廠（東排金屬）+ 東莞 12,000 平方米創始工廠（長磊五金）+ 香港銷售與工程辦公室。自 2012 年起為新世界、新鴻基、港鐵、會德豐、宏安等香港頂級開發商交付鋁、銅、不鏽鋼外立面、欄杆與裝飾金屬構件。",
      brandName: "東排金屬",
      brandMeta: "建築金屬工程 · 自 2012",
      heroPdf: "集團簡介",
      navProducts: "產品",
      navAdvantages: "核心優勢",
      navCert: "認證",
      navWork: "代表作品",
      navCapabilities: "工程範疇",
      navStudio: "工廠與裝置",
      navProcess: "協作流程",
      navContact: "聯絡",
      navEnquire: "詢價 ↗",

      heroEyebrow: "成立於 2012 · 香港 · 大灣區",
      heroTitle:
        '<span class="line">塑造香港</span><span class="line"><em>天際線。</em></span>',
      heroCopy:
        "為新世界、新鴻基、港鐵、會德豐、宏安等香港頂級地產商，交付銅、鋁、不鏽鋼外立面、欄杆與裝飾金屬構件——一個集團，自 2012 年起。",
      heroPrimary: "檢視代表作品",
      heroSecondary: "聯絡專案詢價",
      heroScroll: "向下",
      metricYears: "自 2012 年成立",
      metricArea: "惠州旗艦廠面積",
      metricTeam: "惠州 · 東莞 · 2× 香港",
      metricFlats: "已交付公寓數 · 港 / 大灣區",
      metric1Unit: "年",
      metric2Unit: "㎡",
      metric3Unit: "法人",
      metric4Unit: "+",

      manifestoKicker: "№ 01 — 我們的信念",
      manifestoBody:
        "建築外立面，是一座大廈與城市最初的<em>承諾</em>，也是被記住最久的部分。十三年來，我們以<em>銅</em>、<em>鋁</em>、<em>不鏽鋼</em>守住這份承諾——從第一張深化圖到最後一塊裝上去的金屬板。",
      manifestoK1: "專業範疇",
      manifestoV1: "建築金屬工程",
      manifestoK2: "主要材料",
      manifestoV2: "銅 · 鋁合金 · 不鏽鋼",
      manifestoK3: "服務範圍",
      manifestoV3: "住宅 · 商業 · 公共",
      manifestoK4: "地理覆蓋",
      manifestoV4: "香港 · 大灣區",

      capabilitiesTitle: "五大專業，<em>一間工坊</em>。",
      cap1Title: '鋁合金外牆包覆',
      cap1Meta: "銅色 · 香檳色 ·<br />石墨陽極氧化",
      cap1Desc:
        "幕牆板、平臺特色包板、通風外立面。陽極氧化、PVDF 噴塗、粉末塗層——符合屋宇署風荷載與幕牆規範。",
      cap2Title: '欄杆與扶手',
      cap2Meta: "玻璃夾持 · 衝孔 ·<br />垂直豎梃",
      cap2Desc:
        "陽臺、平臺、升降機大堂欄杆——按 BS EN 1991 風荷載設計，與周邊包板同色陽極氧化處理。",
      cap3Title: '空調格柵與百葉',
      cap3Meta: "屋宇署排風規範 ·<br />同色處理",
      cap3Desc:
        "依屋宇署排風條例加工，與包板同色，讓建築外立面連續完整——看不見服務口的縫隙。",
      cap4Title: '特色裝飾牆與吊頂',
      cap4Meta: "菱形 · 凹槽 ·<br />雕塑感",
      cap4Desc:
        "為大堂、升降機廳、會所提供不鏽鋼、銅、銅色陽極鋁裝飾。讓內裝呈現為藝術，而非包板。",
      cap5Title: '不鏽鋼裝飾',
      cap5Meta: "拉絲 · 鏡面 ·<br />振紋",
      cap5Desc:
        "訂製柱身包板、標識、裝飾屏風。由十年只磨不鏽鋼的工匠手工完成。",

      workTitle: "<em>香港</em>頂級地址背後的金屬外衣。",
      specClient: "客戶",
      specArchitect: "建築師",
      specScope: "範疇",
      specQty: "數量",
      work1Copy:
        "黃竹坑港鐵上蓋 51 層住宅專案，由五大開發商聯合開發。東排提供全部 804 戶的<em>鋁合金欄杆、空調格柵、管井包板</em>——以連續銅色陽極處理，包覆建築柔和的弧形外立面。",
      work1Scope: "鋁合金欄杆 · 空調格柵 · 管井包板",
      work1Qty: "804 戶",
      work2Copy:
        "新鴻基於啟德海濱推出的新地址。平臺外牆包板與 <em>1,010 平方米菱形懸掛天花——共 2,020 件</em>，從深化、樣板、加工到安裝全程由我們完成。",
      work2Scope: "平臺包板 · 懸掛天花",
      work2Qty: "約 4,000㎡ · 2,020 件",
      work3Copy:
        "英皇道電車軌道上的 28 層住宅。每個陽臺以<em>垂直銅色豎梃</em>包覆——在北角舊街景中織出安靜的金屬節奏。",
      work3Scope: "鋁合金欄杆 · 空調格柵 · 管井包板",
      work3Qty: "251 戶",
      work4Copy:
        "灣仔精品住宅專案，金屬構件貫穿底層平臺至頂層——<em>特色牆、柱身包板、天花、陽臺</em>由同一工坊細化處理，讓整棟讀來如一體。",
      work4Scope: "特色牆 · 柱身包板 · 天花 · 陽臺",
      work4Qty: "88 戶",
      work5Copy:
        "盧棠黎建築師為宏安地產設計的首個九龍高層專案。我們提供<em>外牆包板、陽臺格柵與天花板</em>——銅色與石墨色陽極鋁，工廠完成終飾，現場無需補漆。",
      work5Scope: "外牆包板 · 格柵 · 天花板",
      work5Qty: "230 戶",

      archiveTitle: "一份<em>部分專案記錄</em>。",
      archiveFootP: "持續更新——十三年累計交付<em>1,500+ 戶</em>。",
      archiveFootCta: "索取完整專案清單",
      archHdrYear: "年份",
      archHdrProject: "專案",
      archHdrClient: "業主",
      archHdrArchitect: "建築師",
      archHdrScope: "範圍",
      archLabelClient: "業主",
      archLabelArchitect: "建築師",
      archLabelScope: "範圍",

      studioTitle: '四家法人，<em>一張外立面</em>。',
      studioLead:
        "東排金屬——大灣區金屬製造集團，由四家法人組成、以一張交付合同對外供貨。<em>47,000 平方米的旗艦廠</em>位於惠州；<em>長磊五金</em>，12,000 平方米的創始車間，運營於東莞；<em>香港銷售辦事處</em>（荃灣）與<em>工程辦事處</em>（觀塘）負責與本地建築師、開發商深化圖紙——新世界、新鴻基、港鐵、會德豐、宏安。",
      studioH2: "<em>47,000 平方米</em>。<br />惠州——大灣區東緣，<br />距香港口岸兩小時。",
      studioP1:
        "東排的<em>惠州旗艦廠</em>佔地 47,000 平方米——雷射切割、折彎、機械手焊接、陽極氧化、終飾，全部在一個屋頂下。配合東莞長磊夥伴工廠（12,000 平方米），集團能以香港頂級平臺專案所需的規模交付幕牆與結構金屬。",
      studioP2:
        "每個專案都以同一種方式開始——在香港辦事處審圖、惠州廠房 1:1 樣板、與客戶和建築師的一場長會議。重要的部分，我們從不外包。",
      equip1Name: "雷射切割",
      equip2Name: "管材雷射切割",
      equip3Name: "500 噸折彎",
      equip4Name: "機械手焊接",

      processTitle: "圖紙、樣板，<em>然後</em>才生產。",
      process1Title: "深化圖紙",
      process1Copy: "配合專案幕牆顧問與建築師，將設計意圖轉化為製造現實。每個節點、每個收口、每個公差。",
      process2Title: "1:1 樣板",
      process2Copy: "在量產前先做 1:1 樣板。樣板就是合約——建築師簽字那刻，我們知道要交付什麼。",
      process3Title: "加工生產",
      process3Copy: "切割、折彎、焊接、陽極、拋光——五道工序、一個屋簷下、每道之間兩道 QC。",
      process4Title: "現場安裝",
      process4Copy: "安裝團隊從東莞來到香港工地。從樣板那天到專案交付，同一位現場主管全程跟進。",

      clientsTitle: "與我們同行的夥伴。",
      clientsDevs: "開發商",
      clientsArchs: "建築師與顧問",

      contactTitle: "把圖紙發給我們。<br />我們回你一塊<em>樣板</em>。",
      contactCopy:
        "若您是建築師、幕牆顧問或總承建商，專案中有外立面金屬範疇，歡迎發來圖紙。我們會在兩個工作天內回覆——通常附一個問題、一個澄清，與一個粗略的產能時段。",
      contactLabelHZ: "旗艦廠 · 惠州",
      contactLabelDG: "創始工廠 · 東莞",
      contactLabelHKsales: "香港銷售 · 荃灣",
      contactLabelHKeng: "香港工程 · 觀塘",
      contactSpecHZ: "47,000㎡ · 幕牆、欄杆、陽極氧化",
      contactSpecDG: "12,000㎡ · 不鏽鋼裝飾、特色裝飾牆與吊頂",
      enquiryTitle: "新專案詢價",
      enquiryTag: "№ 09 / 兩個工作天內回覆",
      formName: "姓名 / 公司",
      formEmail: "電郵",
      formProject: "專案——名稱與位置",
      formScope: "詢價範疇",
      formOpt1: "鋁合金包板 · 幕牆構件",
      formOpt2: "欄杆 · 扶手 · 格柵",
      formOpt3: "特色牆 · 金屬天花",
      formOpt4: "不鏽鋼裝飾",
      formOpt5: "混合範疇 / 待定",
      formBrief: "簡述",
      formSubmit: "傳送詢價 ↗",
      formSending: "傳送中… ↗",
      inquirySubject: "專案詢價——東排金屬",
      footerSub: "東排金屬 · 東排金屬（香港）",
      footerTagline:
        "建築金屬工坊，自 2012 年。為塑造香港天際線的開發商與建築師，提供銅、鋁、不鏽鋼外立面構件。",
      footerNav: "導覽",
      footerContact: "聯絡",
      footerPrivacy: "私隱政策",
      footerHK: "荃灣 · 觀塘 · 香港",
      footerHZ: "惠州市仲愷高新區",
      footerDG: "東莞市謝崗鎮",
      footerMotto: "匠心築夢 · 智造未來",
      footerMottoCN: "匠心築夢 · 智造未來",
      railTel: "電話",
      railWhatsApp: "WhatsApp",
      railWeChat: "微信",
      railWeChatScan: "掃描加微信",
      railWeChatQr: "微信號 · 9667 0869",
      railEmail: "電郵",
      railTop: "返頂",
      footerMottoCN2: "乘風破浪 · 逐夢遠航",
      backTop: "返回頂部 ↑",

      /* ─── Products section lead ─── */
      productsLead:
        "從外立面板到特色吊頂——整套金屬外衣，由同一團隊完成深化、加工與安裝。銅、鋁、不鏽鋼。",
      productCta: "檢視相關專案",

      /* ─── Core Advantages (PDF P-05 六大優勢) ─── */
      advTitle: "我們的作品<em>持續被交付</em>的六個原因。",
      advLead:
        "新世界、新鴻基、會德豐、宏安等開發商和建築師為什麼會持續回到東排——以下是集團的底氣，按真實審計與對標提煉而來。",
      adv1Title: '設計研發團隊',
      adv1P1: "20+ 名高階工程師組成設計研發團隊",
      adv1P2: "年研發投入佔營收 5%",
      adv1P3: "已授權技術專利 30+ 項",
      adv2Title: '全方位優質服務',
      adv2P1: "設計 → 生產 → 安裝 → 售後 · 一站式",
      adv2P2: "建立客戶終身檔案 · 提供全週期產品追蹤",
      adv3Title: '豐富工程專案經驗',
      adv3P1: "累計交付 500+ 個大型工程專案",
      adv3P2: "完整專案管理體系——方案設計直到安裝維護",
      adv4Title: '標準化智慧生產線',
      adv4P1: "通過 ISO 9001 質量管理體系認證（CQM）",
      adv4P2: "全產業鏈佈局——金屬原材料、精密五金、幕牆系統、定製化產品",
      adv5Title: '國際先進生產裝置',
      adv5P1: "板材 / 型材雷射切割、CNC 折彎、機械手焊接、陽極氧化生產線",
      adv5P2: "關鍵工序 100% 自動化生產",
      adv6Title: '卓越產品品質保障',
      adv6P1: "關鍵工序之間三重質檢制度",
      adv6P2: "產品合格率 99.98% · 高於行業標準",
      adv6P3: "歐洲 EN 1090-2 EXC3 複雜結構等級",

      /* ─── Group Structure ─── */
      groupKicker: "№ 06.01 — 集團架構",
      groupMotto: "匠心築夢 · 智造未來",
      groupMottoEn: "Craftsmanship builds dreams · Intelligence shapes the future",
      groupTag1: "旗艦廠 · 生產主體",
      groupTag2: "創始工廠 · 協作生產",
      groupTag3: "香港銷售 · 專案對接",
      groupTag4: "香港工程 · 幕牆深化",
      groupArea: "廠房面積",
      groupLoc: "地點",
      groupRole: "職能",
      group1Role: "旗艦生產主體——幕牆、欄杆、結構件加工、陽極氧化生產線。2022 年建立。",
      group2Role: "創始工廠——不鏽鋼裝飾、特色牆與吊頂、1:1 樣板組裝。2014 年成立；集團淵源可追溯至 2012 年成立的澤正金屬。",
      group3Role: "香港銷售法人——銷售、開票、港 / 澳 / 海外專案客戶對接。",
      group4Role: "香港幕牆工程法人——深化圖紙、現場監理、樣板簽字。2016 年起。",

      /* ─── Brand timeline ─── */
      timeline1: "澤正金屬成立——專注金屬材料精加工",
      timeline2: "長磊五金成立——生產線擴充套件進入供應鏈",
      timeline3: "和廣幕牆成立——進入建築幕牆領域",
      timeline4: "東排金屬——47,000㎡ 惠州旗艦廠 · 香港大型工程一站式金屬配套",

      /* ─── About stats (PDF 硬資料) ─── */
      aboutStat1: "已交付大型工程專案數",
      aboutStat2: "惠州旗艦廠 · 東排金屬",
      aboutStat3: "東莞創始工廠 · 長磊五金",
      aboutStat4: "已授權技術專利",
      aboutStat5: "在職 R&D 工程師",
      aboutStat6: "關鍵工序產品合格率",
      aboutStat7: "關鍵工序自動化比例",
      aboutStat8: "CQM 認證 · 歐洲 EN 1090-2 EXC3",

      /* ─── Studio floor ─── */
      studioFloorKicker: "№ 06.02 — 生產車間",
      studioFloorCap: "一個屋簷下六個車間——雷射、折彎、焊接、終飾、組裝。重要的部分不外包。",
      studioCta: "預約參觀工廠",

      /* ─── Logistic ─── */
      logisticTitle: "<em>兩小時</em>到香港任何工地。<br />兩廠一條路。",
      logisticP:
        "惠州旗艦廠與東莞協作工廠僅<em>相距 16 公里</em>，位於大灣區東緣。從任一裝車碼頭到香港口岸約 <em>兩小時</em>。多數構件早晨發車，中午過關，次日上工地——由香港荃灣與觀塘辦事處統一協調出貨單。",
      logisticH1: "惠州 ↔ 東莞",
      logisticT1: "約 0.5 小時",
      logisticH2: "惠州 → 深圳",
      logisticT2: "約 2 小時",
      logisticH3: "惠州 → 香港",
      logisticT3: "約 2 小時",

      /* ─── Process ─── */
      processLead: "八個步驟，分兩階段協作。建築師簽字 1:1 樣板前，沒有一塊板會量產。",
      phase1Name: "深化圖紙協作",
      phase2Name: "1:1 樣板協作",
      ownerClient: "客戶方",
      ownerCL: "東排",
      ownerBoth: "客戶 + 東排",
      process5Title: "樣板搭建",
      process5Copy: "全尺寸樣板在工廠或現場指定區域搭建——目視、風雨、公差三方面審查。",
      process6Title: "安裝複檢",
      process6Copy: "在樣板上預演安裝順序——固定件、密封、公差、水密測試。調整折回深化圖。",
      process7Title: "圖紙定稿",
      process7Copy: "樣板即合約。建築師簽字 定稿圖紙——只有這一刻起進入量產。",
      process8Title: "批次生產",
      process8Copy: "正式量產——每道工序之間兩道 QC 檢查。從樣板到交付，同一位車間主管全程。",

      /* ─── Certification ─── */
      certTitle: "按 <em>EN 1090-2 · EXC3</em> 標準執行。",
      certLead:
        "結構鋼與幕牆加工已通過歐洲規範 <strong>EN 1090-2 執行等級 EXC3</strong> 認證——專門為<em>複雜結構</em>預留的等級：高層建築外立面、抗震 / 抗疲勞 / 抗風疲勞的結構件，以及失效後果嚴重的構件。歐亞各地超高層幕牆專案中，凡是外立面失效會危及公共安全的，均要求此執行等級。",
      certCap: "EN 1090-2 EXC3 — 複雜結構",
      certV1: "最高執行等級 · 適用於含疲勞、抗震或高後果荷載的幕牆與結構件。",
      certV2: "CE 標識合規 · 焊接工藝規範、無損檢測記錄、按板件追溯材料。",
      certV3: "每道工序之間兩道 QC 檢查——雷射、折彎、焊接、陽極、終飾，無簽字不出貨。",
      certV4: "符合屋宇署風荷載與排風規範，可按需求做第三方測試。",

      /* ─── Contact single ─── */
      contactSingleKey: "一個對接人 · 四家法人 · 兩個工廠 · 兩個香港辦事處。",
      contactSingleNote: "完整集團架構——惠州旗艦廠、東莞協作工廠、香港銷售與工程辦公室——請見 <a href=\"#studio\">集團架構 ↗</a>",
      contactEnt1Tag: "旗艦廠 · 惠州",
      contactEnt1Addr: "廣東省惠州市仲愷高新區陳江街道<br />南塘東路 1 號",
      contactEnt2Tag: "創始工廠 · 東莞",
      contactEnt2Addr: "廣東省東莞市謝崗鎮大興路 20 號<br />1 棟 102 室",
      contactEnt3Tag: "香港銷售 · 荃灣",
      contactEnt3Addr: "香港新界荃灣青山公路 491-501 號<br />Hi-Tech Industrial Centre B 座 1 樓 11 室",
      contactEnt4Tag: "香港工程 · 觀塘",
      contactEnt4Addr: "香港九龍觀塘興業街 15-17 號<br />鍾美中心 B 座 9 樓 9042 室",

      /* ─── Footer (minimal) ─── */
      footerTagline:
        "建築金屬工程集團，自 2012 年。惠州 47,000㎡ 旗艦廠 · 東莞 12,000㎡ 協作工廠 · 香港銷售與工程辦公室。為塑造香港天際線的開發商與建築師，提供銅、鋁、不鏽鋼外立面構件。",
      footerEntities: "法人主體",
      footerEnt1: "Dongpai Metal Products (Guangdong) Co., Ltd. · 惠州旗艦",
      footerEnt2: "Dongguan Changlei Hardware Product Co., Ltd. · 集團起源 2009",
      footerEnt3: "Chang Lei Metal Products Limited · 香港銷售",
      footerEnt4: "Changqing Curtain Wall Engineering (Asia) Ltd. · 香港工程",

      /* ─── Footer nav (new keys) ─── */
      navProducts: "產品系列",
      navAdvantages: "核心優勢",
      navCert: "品質認證",
      navNews: "公司動態",
      work1Tag: "南區 · 第五期",
      work2Tag: "啟德 · 6551",
      work3Tag: "北角",
      work4Tag: "灣仔",
      work5Tag: "黃大仙",
      work4Arch: "Wheelock（內部設計團隊）",
      work1H3: "滶晨 · 南區第五期",
      work2H3: "天璽·海 · 啟德 6551",
      work3H3: "英皇道 101 號 · 北角",
      work4H3: "春園街 38 號 · 灣仔",
      work5H3: "薈鳴 · 明豐街 28 號",
    },

    "zh-hans": {
      htmlLang: "zh-Hans",
      title: "东排金属 · 香港建筑外立面金属工坊",
      description:
        "东排金属集团——惠州 47,000 平方米旗舰厂（东排金属）+ 东莞 12,000 平方米创始工厂（长磊五金）+ 香港销售与工程办公室。自 2012 年起为新世界、新鸿基、港铁、会德丰、宏安等香港顶级开发商交付铝、铜、不锈钢外立面、栏杆与装饰金属构件。",
      brandName: "东排金属",
      brandMeta: "建筑金属工程 · 自 2012",
      heroPdf: "集团简介",
      navProducts: "产品",
      navAdvantages: "核心优势",
      navCert: "认证",
      navWork: "代表作品",
      navCapabilities: "工程范畴",
      navStudio: "工厂与设备",
      navProcess: "协作流程",
      navContact: "联系",
      navEnquire: "询价 ↗",

      heroEyebrow: "成立于 2012 · 香港 · 大湾区",
      heroTitle:
        '<span class="line">塑造香港</span><span class="line"><em>天际线。</em></span>',
      heroCopy:
        "为新世界、新鸿基、港铁、会德丰、宏安等香港顶级地产商，交付铜、铝、不锈钢外立面、栏杆与装饰金属构件——一个集团，自 2012 年起。",
      heroPrimary: "查看代表作品",
      heroSecondary: "联系项目询价",
      heroScroll: "向下",
      metricYears: "自 2012 年成立",
      metricArea: "惠州旗舰厂面积",
      metricTeam: "在职工匠团队",
      metricFlats: "已交付公寓数 · 港 / 大湾区",
      metric1Unit: "年",
      metric2Unit: "㎡",
      metric3Unit: "法人",
      metric4Unit: "+",

      manifestoKicker: "№ 01 — 我们的信念",
      manifestoBody:
        "建筑外立面，是一座大厦与城市最初的<em>承诺</em>，也是被记住最久的部分。十三年来，我们以<em>铜</em>、<em>铝</em>、<em>不锈钢</em>守住这份承诺——从第一张深化图到最后一块装上去的金属板。",
      manifestoK1: "专业范畴",
      manifestoV1: "建筑金属工程",
      manifestoK2: "主要材料",
      manifestoV2: "铜 · 铝合金 · 不锈钢",
      manifestoK3: "服务范围",
      manifestoV3: "住宅 · 商业 · 公共",
      manifestoK4: "地理覆盖",
      manifestoV4: "香港 · 大湾区",

      capabilitiesTitle: "五大专业，<em>一间工坊</em>。",
      cap1Title: '铝合金外墙包覆',
      cap1Meta: "铜色 · 香槟色 ·<br />石墨阳极氧化",
      cap1Desc:
        "幕墙板、平台特色包板、通风外立面。阳极氧化、PVDF 喷涂、粉末涂层——符合屋宇署风荷载与幕墙规范。",
      cap2Title: '栏杆与扶手',
      cap2Meta: "玻璃夹持 · 冲孔 ·<br />垂直竖梃",
      cap2Desc:
        "阳台、平台、升降机大堂栏杆——按 BS EN 1991 风荷载设计，与周边包板同色阳极氧化处理。",
      cap3Title: '空调格栅与百叶',
      cap3Meta: "屋宇署排风规范 ·<br />同色处理",
      cap3Desc:
        "依屋宇署排风条例加工，与包板同色，让建筑外立面连续完整——看不见服务口的缝隙。",
      cap4Title: '特色装饰墙与吊顶',
      cap4Meta: "菱形 · 凹槽 ·<br />雕塑感",
      cap4Desc:
        "为大堂、升降机厅、会所提供不锈钢、铜、铜色阳极铝装饰。让内装呈现为艺术，而非包板。",
      cap5Title: '不锈钢装饰',
      cap5Meta: "拉丝 · 镜面 ·<br />振纹",
      cap5Desc:
        "订制柱身包板、标识、装饰屏风。由十年只磨不锈钢的工匠手工完成。",

      workTitle: "<em>香港</em>顶级地址背后的金属外衣。",
      specClient: "客户",
      specArchitect: "建筑师",
      specScope: "范畴",
      specQty: "数量",
      work1Tag: "南区 · 第五期",
      work2Tag: "启德 · 6551",
      work3Tag: "北角",
      work4Tag: "湾仔",
      work5Tag: "黄大仙",
      work4Arch: "Wheelock（内部设计团队）",
      work1H3: "漶晨 · Deep Water Pavilia",
      work2H3: "天玺·海 · Cullinan Harbour",
      work3H3: "英皇道 101 号 · 101 King's Road",
      work4H3: "春园街 38 号 · 38 Spring Garden Lane",
      work5H3: "荟鸣 · Phoenext",
      work1Copy:
        "黄竹坑港铁上盖 51 层住宅项目，由五大开发商联合开发。东排提供全部 804 户的<em>铝合金栏杆、空调格栅、管井包板</em>——以连续铜色阳极处理，包覆建筑柔和的弧形外立面。",
      work1Scope: "铝合金栏杆 · 空调格栅 · 管井包板",
      work1Qty: "804 户",
      work2Copy:
        "新鸿基于启德海滨推出的新地址。平台外墙包板与 <em>1,010 平方米菱形悬挂天花——共 2,020 件</em>，从深化、样板、加工到安装全程由我们完成。",
      work2Scope: "平台包板 · 悬挂天花",
      work2Qty: "约 4,000㎡ · 2,020 件",
      work3Copy:
        "英皇道电车轨道上的 28 层住宅。每个阳台以<em>垂直铜色竖梃</em>包覆——在北角旧街景中织出安静的金属节奏。",
      work3Scope: "铝合金栏杆 · 空调格栅 · 管井包板",
      work3Qty: "251 户",
      work4Copy:
        "湾仔精品住宅项目，金属构件贯穿底层平台至顶层——<em>特色墙、柱身包板、天花、阳台</em>由同一工坊细化处理，让整栋读来如一体。",
      work4Scope: "特色墙 · 柱身包板 · 天花 · 阳台",
      work4Qty: "88 户",
      work5Copy:
        "卢棠黎建筑师为宏安地产设计的首个九龙高层项目。我们提供<em>外墙包板、阳台格栅与天花板</em>——铜色与石墨色阳极铝，工厂完成终饰，现场无需补漆。",
      work5Scope: "外墙包板 · 格栅 · 天花板",
      work5Qty: "230 户",

      archiveTitle: "一份<em>部分项目记录</em>。",
      archiveFootP: "持续更新——十三年累计交付<em>1,500+ 户</em>。",
      archiveFootCta: "索取完整项目清单",
      archHdrYear: "年份",
      archHdrProject: "项目",
      archHdrClient: "业主",
      archHdrArchitect: "建筑师",
      archHdrScope: "范围",
      archLabelClient: "业主",
      archLabelArchitect: "建筑师",
      archLabelScope: "范围",

      studioTitle: '四家法人，<em>一张外立面</em>。',
      studioLead:
        "东排金属——大湾区金属制造集团，由四家法人组成、以一张交付合同对外供货。<em>47,000 平方米的旗舰厂</em>位于惠州；<em>长磊五金</em>，12,000 平方米的原始车间，运营于东莞；<em>香港销售办事处</em>（荃湾）与<em>工程办事处</em>（观塘）负责与本地建筑师、开发商深化图纸——新世界、新鸿基、港铁、会德丰、宏安。",
      studioH2: "<em>47,000 平方米</em>。<br />惠州——大湾区东缘，<br />距香港口岸两小时。",
      studioP1:
        "东排的<em>惠州旗舰厂</em>占地 47,000 平方米——激光切割、折弯、机械手焊接、阳极氧化、终饰，全部在一个屋顶下。配合东莞长磊伙伴工厂（12,000 平方米），集团能以香港顶级平台项目所需的规模交付幕墙与结构金属。",
      studioP2:
        "每个项目都以同一种方式开始——在香港办事处审图、惠州厂房 1:1 样板、与客户和建筑师的一场长会议。重要的部分，我们从不外包。",
      equip1Name: "激光切割",
      equip2Name: "管材激光切割",
      equip3Name: "500 吨折弯",
      equip4Name: "机械手焊接",

      processTitle: "图纸、样板，<em>然后</em>才生产。",
      process1Title: "深化图纸",
      process1Copy: "配合项目幕墙顾问与建筑师，将设计意图转化为制造现实。每个节点、每个收口、每个公差。",
      process2Title: "1:1 样板",
      process2Copy: "在量产前先做 1:1 样板。样板就是合约——建筑师签字那刻，我们知道要交付什么。",
      process3Title: "加工生产",
      process3Copy: "切割、折弯、焊接、阳极、抛光——五道工序、一个屋檐下、每道之间两道 QC。",
      process4Title: "现场安装",
      process4Copy: "安装团队从东莞来到香港工地。从样板那天到项目交付，同一位现场主管全程跟进。",

      clientsTitle: "与我们同行的伙伴。",
      clientsDevs: "开发商",
      clientsArchs: "建筑师与顾问",

      contactTitle: "把图纸发给我们。<br />我们回你一块<em>样板</em>。",
      contactCopy:
        "若您是建筑师、幕墙顾问或总承建商，项目中有外立面金属范畴，欢迎发来图纸。我们会在两个工作天内回复——通常附一个问题、一个澄清，与一个粗略的产能时段。",
      contactLabelHZ: "旗舰厂 · 惠州",
      contactLabelDG: "创始工厂 · 东莞",
      contactLabelHKsales: "香港销售 · 荃湾",
      contactLabelHKeng: "香港工程 · 观塘",
      contactSpecHZ: "47,000㎡ · 幕墙、栏杆、阳极氧化",
      contactSpecDG: "12,000㎡ · 不锈钢装饰、特色装饰墙与吊顶",
      enquiryTitle: "新项目询价",
      enquiryTag: "№ 09 / 两个工作天内回复",
      formName: "姓名 / 公司",
      formEmail: "电邮",
      formProject: "项目——名称与位置",
      formScope: "询价范畴",
      formOpt1: "铝合金包板 · 幕墙构件",
      formOpt2: "栏杆 · 扶手 · 格栅",
      formOpt3: "特色墙 · 金属天花",
      formOpt4: "不锈钢装饰",
      formOpt5: "混合范畴 / 待定",
      formBrief: "简述",
      formSubmit: "发送询价 ↗",
      formSending: "发送中… ↗",
      inquirySubject: "项目询价——东排金属",
      footerSub: "东排金属 · 东排金属（香港）",
      footerTagline:
        "建筑金属工坊，自 2012 年。为塑造香港天际线的开发商与建筑师，提供铜、铝、不锈钢外立面构件。",
      footerNav: "导览",
      footerContact: "联系",
      footerPrivacy: "隐私政策",
      footerHK: "荃湾 · 观塘 · 香港",
      footerHZ: "惠州市仲恺高新区",
      footerDG: "东莞市谢岗镇",
      footerMotto: "匠心筑梦 · 智造未来",
      footerMottoCN: "匠心筑梦 · 智造未来",
      railTel: "电话",
      railWhatsApp: "WhatsApp",
      railWeChat: "微信",
      railWeChatScan: "扫描加微信",
      railWeChatQr: "微信号 · 9667 0869",
      railEmail: "邮箱",
      railTop: "返顶",
      footerMottoCN2: "乘风破浪 · 逐梦远航",
      backTop: "返回顶部 ↑",

      /* ─── Products section lead ─── */
      productsLead:
        "从外立面板到特色吊顶——整套金属外衣，由同一团队完成深化、加工与安装。铜、铝、不锈钢。",
      productCta: "查看相关项目",

      /* ─── Core Advantages (PDF P-05 六大优势) ─── */
      advTitle: "我们的作品<em>持续被交付</em>的六个原因。",
      advLead:
        "新世界、新鸿基、会德丰、宏安等开发商和建筑师为什么会持续回到东排——以下是集团的底气，按真实审计与对标提炼而来。",
      adv1Title: '设计研发团队',
      adv1P1: "20+ 名高级工程师组成设计研发团队",
      adv1P2: "年研发投入占营收 5%",
      adv1P3: "已授权技术专利 30+ 项",
      adv2Title: '全方位优质服务',
      adv2P1: "设计 → 生产 → 安装 → 售后 · 一站式",
      adv2P2: "建立客户终身档案 · 提供全周期产品追踪",
      adv3Title: '丰富工程项目经验',
      adv3P1: "累计交付 500+ 个大型工程项目",
      adv3P2: "完整项目管理体系——方案设计直到安装维护",
      adv4Title: '标准化智能生产线',
      adv4P1: "通过 ISO 9001 质量管理体系认证（CQM）",
      adv4P2: "全产业链布局——金属原材料、精密五金、幕墙系统、定制化产品",
      adv5Title: '国际先进生产设备',
      adv5P1: "板材 / 型材激光切割、CNC 折弯、机械手焊接、阳极氧化生产线",
      adv5P2: "关键工序 100% 自动化生产",
      adv6Title: '卓越产品品质保障',
      adv6P1: "关键工序之间三重质检制度",
      adv6P2: "产品合格率 99.98% · 高于行业标准",
      adv6P3: "欧洲 EN 1090-2 EXC3 复杂结构等级",

      /* ─── Group Structure ─── */
      groupKicker: "№ 06.01 — 集团架构",
      groupMotto: "匠心筑梦 · 智造未来",
      groupMottoEn: "Craftsmanship builds dreams · Intelligence shapes the future",
      groupTag1: "旗舰厂 · 生产主体",
      groupTag2: "创始工厂 · 协作生产",
      groupTag3: "香港销售 · 项目对接",
      groupTag4: "香港工程 · 幕墙深化",
      groupArea: "厂房面积",
      groupLoc: "地点",
      groupRole: "职能",
      group1Role: "旗舰生产主体——幕墙、栏杆、结构件加工、阳极氧化生产线。2022 年建立。",
      group2Role: "创始工厂——不锈钢装饰、特色墙与吊顶、1:1 样板组装。2014 年成立；集团渊源可追溯至 2012 年成立的泽正金属。",
      group3Role: "香港销售法人——销售、开票、港 / 澳 / 海外项目客户对接。",
      group4Role: "香港幕墙工程法人——深化图纸、现场监理、样板签字。2016 年起。",

      /* ─── Brand timeline ─── */
      timeline1: "泽正金属成立——专注金属材料精加工",
      timeline2: "长磊五金成立——生产线扩展进入供应链",
      timeline3: "和广幕墙成立——进入建筑幕墙领域",
      timeline4: "东排金属——47,000㎡ 惠州旗舰厂 · 香港大型工程一站式金属配套",

      /* ─── About stats (PDF 硬数据) ─── */
      aboutStat1: "已交付大型工程项目数",
      aboutStat2: "惠州旗舰厂 · 东排金属",
      aboutStat3: "东莞创始工厂 · 长磊五金",
      aboutStat4: "已授权技术专利",
      aboutStat5: "在职 R&D 工程师",
      aboutStat6: "关键工序产品合格率",
      aboutStat7: "关键工序自动化比例",
      aboutStat8: "CQM 认证 · 欧洲 EN 1090-2 EXC3",

      /* ─── Studio floor ─── */
      studioFloorKicker: "№ 06.02 — 生产车间",
      studioFloorCap: "一个屋檐下六个车间——激光、折弯、焊接、终饰、组装。重要的部分不外包。",
      studioCta: "预约参观工厂",

      /* ─── Logistic ─── */
      logisticTitle: "<em>两小时</em>到香港任何工地。<br />两厂一条路。",
      logisticP:
        "惠州旗舰厂与东莞协作工厂仅<em>相距 16 公里</em>，位于大湾区东缘。从任一装车码头到香港口岸约 <em>两小时</em>。多数构件早晨发车，中午过关，次日上工地——由香港荃湾与观塘办事处统一协调出货单。",
      logisticH1: "惠州 ↔ 东莞",
      logisticT1: "约 0.5 小时",
      logisticH2: "惠州 → 深圳",
      logisticT2: "约 2 小时",
      logisticH3: "惠州 → 香港",
      logisticT3: "约 2 小时",

      /* ─── Process ─── */
      processLead: "八个步骤，分两阶段协作。建筑师签字 1:1 样板前，没有一块板会量产。",
      phase1Name: "深化圖紙協作",
      phase2Name: "1:1 樣板協作",
      ownerClient: "客户方",
      ownerCL: "东排",
      ownerBoth: "客户 + 东排",
      process5Title: "样板搭建",
      process5Copy: "全尺寸样板在工厂或现场指定区域搭建——目视、风雨、公差三方面审查。",
      process6Title: "安装复检",
      process6Copy: "在样板上预演安装顺序——固定件、密封、公差、水密测试。调整折回深化图。",
      process7Title: "图纸定稿",
      process7Copy: "样板即合约。建筑师签字 定稿图纸——只有这一刻起进入量产。",
      process8Title: "批量生产",
      process8Copy: "正式量产——每道工序之间两道 QC 检查。从样板到交付，同一位车间主管全程。",

      /* ─── Certification ─── */
      certTitle: "按 <em>EN 1090-2 · EXC3</em> 标准执行。",
      certLead:
        "结构钢与幕墙加工已通过欧洲规范 <strong>EN 1090-2 执行等级 EXC3</strong> 认证——专门为<em>复杂结构</em>预留的等级：高层建筑外立面、抗震 / 抗疲劳 / 抗风疲劳的结构件，以及失效后果严重的构件。欧亚各地超高层幕墙项目中，凡是外立面失效会危及公共安全的，均要求此执行等级。",
      certCap: "EN 1090-2 EXC3 — 复杂结构",
      certV1: "最高执行等级 · 适用于含疲劳、抗震或高后果荷载的幕墙与结构件。",
      certV2: "CE 标识合规 · 焊接工艺规范、无损检测记录、按板件追溯材料。",
      certV3: "每道工序之间两道 QC 检查——激光、折弯、焊接、阳极、终饰，无签字不出货。",
      certV4: "符合屋宇署风荷载与排风规范，可按需求做第三方测试。",

      /* ─── Contact single ─── */
      contactSingleKey: "一个对接人 · 四家法人 · 两个工厂 · 两个香港办事处。",
      contactSingleNote: "完整集团架构——惠州旗舰厂、东莞协作工厂、香港销售与工程办公室——请见 <a href=\"#studio\">集团架构 ↗</a>",
      contactEnt1Tag: "旗舰厂 · 惠州",
      contactEnt1Addr: "广东省惠州市仲恺高新区陈江街道<br />南塘东路 1 号",
      contactEnt2Tag: "创始工厂 · 东莞",
      contactEnt2Addr: "广东省东莞市谢岗镇大兴路 20 号<br />1 栋 102 室",
      contactEnt3Tag: "香港销售 · 荃湾",
      contactEnt3Addr: "香港新界荃湾青山公路 491-501 号<br />Hi-Tech Industrial Centre B 座 1 楼 11 室",
      contactEnt4Tag: "香港工程 · 观塘",
      contactEnt4Addr: "香港九龙观塘兴业街 15-17 号<br />钟美中心 B 座 9 楼 9042 室",

      /* ─── Footer (minimal) ─── */
      footerTagline:
        "建筑金属工程集团，自 2012 年。惠州 47,000㎡ 旗舰厂 · 东莞 12,000㎡ 协作工厂 · 香港销售与工程办公室。为塑造香港天际线的开发商与建筑师，提供铜、铝、不锈钢外立面构件。",
      footerEntities: "法人主体",
      footerEnt1: "Dongpai Metal Products (Guangdong) Co., Ltd. · 惠州旗舰",
      footerEnt2: "Dongguan Changlei Hardware Product Co., Ltd. · 集团起源 2009",
      footerEnt3: "Chang Lei Metal Products Limited · 香港销售",
      footerEnt4: "Changqing Curtain Wall Engineering (Asia) Ltd. · 香港工程",

      /* ─── Footer nav (new keys) ─── */
      navProducts: "产品系列",
      navAdvantages: "核心优势",
      navCert: "品质认证",
      navNews: "公司动态",
      work1H3: "滶晨 · 南區第五期",
      work2H3: "天璽·海 · 啟德 6551",
      work3H3: "英皇道 101 號 · 北角",
      work4H3: "春園街 38 號 · 灣仔",
      work5H3: "薈鳴 · 明豐街 28 號",
    },
  };

  /* ───────── i18n apply ───────── */
  const STORAGE_KEY = "cl-lang";
  const detectLang = () => {
    const param = new URLSearchParams(location.search).get("lang");
    // Simplified Chinese is disabled — route any zh-hans request to zh-hant
    if (param === "zh-hans" || param === "zh-cn" || param === "zh") return "zh-hant";
    if (param && dict[param]) return param;
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "zh-hans") return "zh-hant";
    if (saved && dict[saved]) return saved;
    const nav = (navigator.language || "en").toLowerCase();
    if (nav.startsWith("ar")) return "ar";
    if (nav.startsWith("zh")) return "zh-hant"; // all Chinese variants → traditional
    return "en";
  };

  const applyLang = (lang) => {
    const t = dict[lang];
    if (!t) return;
    document.documentElement.lang = t.htmlLang;
    // RTL for Arabic
    if (lang === "ar") {
      document.documentElement.setAttribute("dir", "rtl");
    } else {
      document.documentElement.setAttribute("dir", "ltr");
    }
    // body class for CSS-level EN/繁 inline-span toggling (archive table etc.)
    document.body.className = document.body.className
      .replace(/\blang-[a-z-]+\b/g, "")
      .trim() + " lang-" + lang;
    document.title = t.title;
    const meta = document.querySelector('meta[name="description"]');
    if (meta && t.description) meta.setAttribute("content", t.description);

    // text-only data-i18n
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (t[key] != null) el.textContent = t[key];
    });

    // HTML data-i18n-html (allows <em>, <br>, <span class="zh">)
    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      const key = el.getAttribute("data-i18n-html");
      if (t[key] != null) el.innerHTML = t[key];
    });

    // alt
    document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
      const key = el.getAttribute("data-i18n-alt");
      if (t[key] != null) el.setAttribute("alt", t[key]);
    });

    // language switcher state
    document.querySelectorAll(".lang-switch [data-lang]").forEach((b) => {
      const isActive = b.getAttribute("data-lang") === lang;
      b.setAttribute("aria-pressed", String(isActive));
    });

    localStorage.setItem(STORAGE_KEY, lang);
  };

  /* ───────── Sticky header ───────── */
  const header = document.querySelector(".site-header");
  const onScroll = () => {
    const y = window.scrollY || window.pageYOffset;
    if (header) header.setAttribute("data-elevated", y > 60 ? "true" : "false");
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ───────── Scroll reveal ───────── */
  const reveals = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window && reveals.length) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add("is-visible"));
  }

  /* ───────── Mobile menu ───────── */
  const mobileNav = document.getElementById("mobile-nav");
  const menuToggle = document.getElementById("menu-toggle");
  const menuClose = document.getElementById("menu-close");
  const openMenu = () => mobileNav && mobileNav.setAttribute("data-open", "true");
  const closeMenu = () => mobileNav && mobileNav.setAttribute("data-open", "false");
  if (menuToggle) menuToggle.addEventListener("click", openMenu);
  if (menuClose) menuClose.addEventListener("click", closeMenu);
  if (mobileNav) {
    mobileNav.querySelectorAll("a").forEach((a) => a.addEventListener("click", closeMenu));
  }

  /* ───────── Language switch click ───────── */
  document.querySelectorAll(".lang-switch [data-lang]").forEach((b) => {
    b.addEventListener("click", () => {
      const lang = b.getAttribute("data-lang");
      applyLang(lang);
      const url = new URL(location.href);
      url.searchParams.set("lang", lang);
      history.replaceState({}, "", url);
    });
  });

  /* ───────── Enquiry form (AJAX + 自跳 thanks.html)
     用 fetch POST 到 FormSubmit AJAX endpoint, 获 JSON, 自主控制成功后跳转。
     原因: FormSubmit 的 _next 参数对真浏览器经常不生效, 改用 AJAX 100% 可控.
     失败 fallback: 让浏览器原生 form submit (至少能看到 FormSubmit 自带成功页). */
  const form = document.getElementById("enquiry-form");
  if (form) {
    const submitBtn = form.querySelector("button[type='submit']");
    const originalBtnText = submitBtn ? submitBtn.textContent : "";
    const getLang = () => {
      const lang = document.documentElement.lang || "en";
      return lang.toLowerCase().startsWith("zh-hant") ? "zh-hant"
        : lang.toLowerCase().startsWith("zh") ? "zh-hans" : "en";
    };
    // 标记位避免 form.submit() 重新触发自己
    let nativeFallback = false;
    form.addEventListener("submit", async (e) => {
      if (nativeFallback) return; // 已经是 fallback, 让浏览器原生走
      e.preventDefault();
      if (submitBtn) {
        const sendingTxt = (dict[getLang()] && dict[getLang()].formSending) || "Sending…";
        submitBtn.textContent = sendingTxt;
        submitBtn.disabled = true;
      }
      // 收集表单数据
      const fd = new FormData(form);
      const payload = {};
      fd.forEach((v, k) => { payload[k] = v; });
      // AJAX endpoint = /ajax/{email}, 返回 JSON
      const email = (form.action || "").replace(/^.*\/formsubmit\.co\//, "");
      const ajaxUrl = `https://formsubmit.co/ajax/${email}`;
      const goNative = () => {
        // 任何 AJAX 失败 → 静默降级原生 form POST, 浏览器跳 FormSubmit 自带 success 页
        nativeFallback = true;
        if (submitBtn) submitBtn.disabled = false;
        form.submit();
      };
      try {
        const resp = await fetch(ajaxUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "X-Requested-With": "XMLHttpRequest",
          },
          body: JSON.stringify(payload),
        });
        const data = await resp.json().catch(() => ({}));
        if (resp.ok && (data.success === "true" || data.success === true)) {
          // 触发 GA4 / Google Ads conversion event (boss 启用 gtag 后立刻生效, 没启用也无害 noop)
          try {
            if (typeof gtag === "function") {
              gtag("event", "generate_lead", {
                event_category: "enquiry",
                event_label: payload.scope || "form",
                value: 1,
              });
              // Google Ads conversion (boss 拿到 conversion ID + label 后填进 send_to)
              // gtag('event', 'conversion', { send_to: 'AW-XXXXXXXXX/XXXXXXXXXX_X' });
            }
          } catch (_) {}
          window.location.href = "/thanks.html";
        } else {
          goNative();
        }
      } catch (err) {
        // 网络错误 (VPN/代理拦截/CORS) — 也降级原生, 不弹 alert
        console.warn("Enquiry AJAX failed, falling back to native form POST:", err);
        goNative();
      }
    });
  }

  /* ───────── Init ───────── */
  applyLang(detectLang());
})();

/* ═════════════════════════════════════════════════════════════
   Cookie Consent Banner (GDPR + HK PDPO 合规)
   - localStorage key: dp-cookie-consent (granted | denied)
   - Google Consent Mode v2: 默认 denied, accept 后 update
   - 独立 IIFE, 跟上面平级, 不嵌套
   ═════════════════════════════════════════════════════════════ */
(function(){
  // 检查 localStorage 是否有 cookie consent 决定
  const KEY = 'dp-cookie-consent'; // 值: 'granted' | 'denied'
  const saved = localStorage.getItem(KEY);

  // Google Consent Mode v2 — 默认 denied
  window.dataLayer = window.dataLayer || [];
  function gtag(){ dataLayer.push(arguments); }
  if (saved === 'granted') {
    gtag('consent', 'default', {
      'ad_storage': 'granted', 'ad_user_data': 'granted', 'ad_personalization': 'granted',
      'analytics_storage': 'granted', 'functionality_storage': 'granted', 'security_storage': 'granted'
    });
  } else {
    gtag('consent', 'default', {
      'ad_storage': 'denied', 'ad_user_data': 'denied', 'ad_personalization': 'denied',
      'analytics_storage': 'denied', 'functionality_storage': 'granted', 'security_storage': 'granted'
    });
  }

  // 如果用户已经做出决定, 不显示 banner
  if (saved) return;

  // 等 DOM ready 后注入 banner HTML — 单语言版本 (不依赖 CSS class 切换避免缓存问题)
  document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('cookie-banner')) return;
    // 当前 lang detect (跟主网站的 detectLang 一致)
    const bodyCls = document.body.className || '';
    const isZh = /lang-zh/.test(bodyCls) || (document.documentElement.lang || '').toLowerCase().startsWith('zh');
    const isHans = /lang-zh-hans/.test(bodyCls);
    const txt = {
      en:    { body: 'We use cookies for site analytics and ad performance. Essentials always on; analytics & ads need your consent.', link: 'Privacy details ↗', decline: 'Decline', accept: 'Accept' },
      hant:  { body: '本網站使用 cookies 進行流量分析和廣告效能追蹤。必要 cookies 一直開啟；分析和廣告 cookies 需您同意。', link: '私隱詳情 ↗', decline: '拒絕', accept: '同意' },
      hans:  { body: '本网站使用 cookies 进行流量分析和广告效能追踪。必要 cookies 一直开启；分析和广告 cookies 需您同意。', link: '隐私详情 ↗', decline: '拒绝', accept: '同意' },
    };
    const t = isHans ? txt.hans : (isZh ? txt.hant : txt.en);
    const b = document.createElement('div');
    b.id = 'cookie-banner';
    b.className = 'cookie-banner';
    b.innerHTML = `
      <div class="cookie-banner-inner">
        <p class="cookie-banner-text">${t.body} <a href="/privacy.html">${t.link}</a></p>
        <div class="cookie-banner-actions">
          <button type="button" class="cookie-btn-decline">${t.decline}</button>
          <button type="button" class="cookie-btn-accept">${t.accept}</button>
        </div>
      </div>`;
    document.body.appendChild(b);

    function handle(value) {
      localStorage.setItem(KEY, value);
      if (value === 'granted') {
        gtag('consent', 'update', {
          'ad_storage': 'granted', 'ad_user_data': 'granted', 'ad_personalization': 'granted',
          'analytics_storage': 'granted'
        });
      }
      b.classList.add('is-hidden');
      setTimeout(() => b.remove(), 350);
    }
    b.querySelector('.cookie-btn-accept').addEventListener('click', () => handle('granted'));
    b.querySelector('.cookie-btn-decline').addEventListener('click', () => handle('denied'));
  });
})();
