const products = [
  {
    name: "Fire Survival Cables",
    slug: "fire-survival-cables",
    shortDescription:
      "In heat and flame, we stand our ground,  Power stays on when danger surrounds.  Built to protect, where safety is crowned. ",
    longDescription:
      "Bonton Fire Survival Cables are engineered to maintain circuit integrity during fire emergencies, withstanding 950 °C for up to 3 hours under combined fire, water, and impact tests. Built with LSZH insulation and sheathing, they eliminate toxic gas emissions, ensuring maximum safety in evacuation and emergency systems. Certified with Indian, British, and European standards, these cables are trusted for critical infrastructure projects worldwide.",
    images: [
      "/products/fire-survival-cables/top.png",
      "/products/fire-survival-cables/side.png",
    ],

    variants: [
      {
        cores: [1, 2, 3, 4, 5, 7, 8, 9, 10, 12, 37],
        modelNumber: "110341",
        gauge: 1.5,
        coresLength: [500, 1000],
        cableType: ["Copper Conductor", "LSZH Insulated"],
        color: ["Red"],
        colorCustomization: true,
        weight: "20kg - 40kg",
        dimension: "6mm - 8mm",
        packagingType: "Coils/Wooden Drums",
        unitsPerPack: "as per order",
        warrantyPeriod: "1 Year (extendable)",
      },
      {
        cores: [1, 2, 3, 4, 5, 7, 8, 9, 10, 12, 37],
        modelNumber: "110343",
        gauge: 2.5,
        weight: "30kg - 55kg",
        dimension: "7mm - 9mm",
        coresLength: [500, 1000],
        cableType: ["Copper Conductor", "LSZH Insulated"],
        color: ["Red"],
        colorCustomization: true,
        packagingType: "Coils/Wooden Drums",
        unitsPerPack: "as per order",
        warrantyPeriod: "1 Year (extendable)",
      },
      {
        cores: [1, 2, 3, 4, 5, 7, 8, 9, 10, 12, 37],
        modelNumber: "110344",
        gauge: 4,
        weight: "55kg - 80kg",
        dimension: "8mm - 11mm",
        coresLength: [500, 1000],
        cableType: ["Copper Conductor", "LSZH Insulated"],
        color: ["Red"],
        colorCustomization: true,
        packagingType: "Coils/Wooden Drums",
        unitsPerPack: "as per order",
        warrantyPeriod: "1 Year (extendable)",
      },
      {
        cores: [1, 2, 3, 4, 5, 7, 8, 9, 10, 12, 37],
        modelNumber: "110345",
        gauge: 6,
        weight: "80kg - 110kg",
        dimension: "10mm - 13mm",
        coresLength: [500, 1000],
        cableType: ["Copper Conductor", "LSZH Insulated"],
        color: ["Red"],
        colorCustomization: true,
        packagingType: "Coils/Wooden Drums",
        unitsPerPack: "as per order",
        warrantyPeriod: "1 Year (extendable)",
      },
      {
        cores: [1, 2, 3, 4, 5],
        modelNumber: "110346",
        gauge: 10,
        weight: "130kg - 180kg",
        dimension: "12mm - 16mm",
        coresLength: [500, 1000],
        cableType: ["Copper Conductor", "LSZH Insulated"],
        color: ["Red"],
        colorCustomization: true,
        packagingType: "Coils/Wooden Drums",
        unitsPerPack: "as per order",
        warrantyPeriod: "1 Year (extendable)",
      },
      {
        cores: [1, 2, 3, 4, 5],
        modelNumber: "110347",
        gauge: 16,
        weight: "180kg - 260kg",
        dimension: "14mm - 19mm",
        coresLength: [500, 1000],
        cableType: ["Copper Conductor", "LSZH Insulated"],
        color: ["Red"],
        colorCustomization: true,
        packagingType: "Coils/Wooden Drums",
        unitsPerPack: "as per order",
        warrantyPeriod: "1 Year (extendable)",
      },
      {
        cores: [1, 2, 3, 4, 5],
        modelNumber: "110348",
        gauge: 25,
        weight: "260kg - 380kg",
        dimension: "17mm - 22mm",
        coresLength: [500, 1000],
        cableType: ["Copper Conductor", "LSZH Insulated"],
        color: ["Red"],
        colorCustomization: true,
        packagingType: "Coils/Wooden Drums",
        unitsPerPack: "as per order",
        warrantyPeriod: "1 Year (extendable)",
      },
      {
        cores: [1, 2, 3, 4, 5],
        modelNumber: "110349",
        gauge: 35,
        weight: "380kg - 520kg",
        dimension: "20mm - 24mm",
        coresLength: [500, 1000],
        cableType: ["Copper Conductor", "LSZH Insulated"],
        color: ["Red"],
        colorCustomization: true,
        packagingType: "Coils/Wooden Drums",
        unitsPerPack: "as per order",
        warrantyPeriod: "1 Year (extendable)",
      },
      {
        cores: [1, 2, 3, 4, 5],
        modelNumber: "110350",
        gauge: 50,
        weight: "550kg - 680kg",
        dimension: "22mm - 28mm",
        coresLength: [500, 1000],
        cableType: ["Copper Conductor", "LSZH Insulated"],
        color: ["Red"],
        colorCustomization: true,
        packagingType: "Coils/Wooden Drums",
        unitsPerPack: "as per order",
        warrantyPeriod: "1 Year (extendable)",
      },
      {
        cores: [1, 2, 3, 4, 5],
        modelNumber: "110351",
        gauge: 70,
        weight: "750kg - 980kg",
        dimension: "26mm - 32mm",
        coresLength: [500, 1000],
        cableType: ["Copper Conductor", "LSZH Insulated"],
        color: ["Red"],
        colorCustomization: true,
        packagingType: "Coils/Wooden Drums",
        unitsPerPack: "as per order",
        warrantyPeriod: "1 Year (extendable)",
      },
      {
        cores: [1, 2, 3, 4],
        modelNumber: "110352",
        gauge: 95,
        weight: "1000kg - 1300kg",
        dimension: "28mm - 36mm",
        coresLength: [500, 1000],
        cableType: ["Copper Conductor", "LSZH Insulated"],
        color: ["Red"],
        colorCustomization: true,
        packagingType: "Coils/Wooden Drums",
        unitsPerPack: "as per order",
        warrantyPeriod: "1 Year (extendable)",
      },
      {
        cores: [1, 2, 3, 4],
        modelNumber: "110353",
        gauge: 120,
        weight: "1300kg - 1600kg",
        dimension: "32mm - 38mm",
        coresLength: [500, 1000],
        cableType: ["Copper Conductor", "LSZH Insulated"],
        color: ["Red"],
        colorCustomization: true,
        packagingType: "Coils/Wooden Drums",
        unitsPerPack: "as per order",
        warrantyPeriod: "1 Year (extendable)",
      },
      {
        cores: [1, 2, 3, 4],
        modelNumber: "110354",
        gauge: 150,
        weight: "1600kg - 2000kg",
        dimension: "35mm - 42mm",
        coresLength: [500, 1000],
        cableType: ["Copper Conductor", "LSZH Insulated"],
        color: ["Red"],
        colorCustomization: true,
        packagingType: "Coils/Wooden Drums",
        unitsPerPack: "as per order",
        warrantyPeriod: "1 Year (extendable)",
      },
      {
        cores: [1, 2, 3, 4],
        modelNumber: "110355",
        gauge: 185,
        weight: "2000kg - 2400kg",
        dimension: "38mm - 45mm",
        coresLength: [500, 1000],
        cableType: ["Copper Conductor", "LSZH Insulated"],
        color: ["Red"],
        colorCustomization: true,
        packagingType: "Coils/Wooden Drums",
        unitsPerPack: "as per order",
        warrantyPeriod: "1 Year (extendable)",
      },
      {
        cores: [1, 2, 3, 4],
        modelNumber: "110356",
        gauge: 240,
        weight: "2500kg - 3000kg",
        dimension: "42mm - 50mm",
        coresLength: [500, 1000],
        cableType: ["Copper Conductor", "LSZH Insulated"],
        color: ["Red"],
        colorCustomization: true,
        packagingType: "Coils/Wooden Drums",
        unitsPerPack: "as per order",
        warrantyPeriod: "1 Year (extendable)",
      },
      {
        cores: [1, 2, 3, 4],
        modelNumber: "110357",
        gauge: 300,
        weight: "3100kg - 3800kg",
        dimension: "45mm - 55mm",
        coresLength: [500, 1000],
        cableType: ["Copper Conductor", "LSZH Insulated"],
        color: ["Red"],
        colorCustomization: true,
        packagingType: "Coils/Wooden Drums",
        unitsPerPack: "as per order",
        warrantyPeriod: "1 Year (extendable)",
      },
    ],
    construction: [
      {
        component: "Conductor",
        material: "High Conductivity Annealed Copper (Solid / Stranded)",
        description:
          "Ensures excellent current carrying capacity and conductivity",
      },
      {
        component: "Conductor Screen",
        material: "Semi-conducting tape (if applicable)",
        description:
          "Provides smooth surface over conductor (used in higher sizes)",
      },
      {
        component: "Insulation",
        material: "Mica Glass Tape (Thermal Barrier) + LSZH / XLPE",
        description:
          "Mica withstands 950°C; LSZH ensures low smoke, zero halogen, non-toxic emissions",
      },
      {
        component: "Insulation Screen",
        material: "Semi-conducting layer / tape (for specific designs)",
        description: "Maintains dielectric integrity",
      },
      {
        component: "Core Identification",
        material: "Color coded / numbered",
        description: "Simplifies installation & identification",
      },
      {
        component: "Assembly of Cores",
        material: "Laid up together with fillers (FR LSZH)",
        description: "Maintains shape and flexibility",
      },
      {
        component: "Inner Sheath",
        material: "LSZH Compound",
        description:
          "Provides mechanical protection and retains fire-survival properties",
      },
      {
        component: "Armouring",
        material: "Galvanized Steel Wire / Strip (Optional)",
        description:
          "Protection against mechanical stress; used in armoured version",
      },
      {
        component: "Outer Sheath",
        material:
          "Low Smoke Zero Halogen (LSZH) Compound (UV Resistant, Anti-Rodent, Anti-Termite)",
        description: "Ensures safety, durability, and environmental resistance",
      },
      {
        component: "Overall Protection",
        material:
          "Fire-resistant construction tested to IS 17505, BS 6387 CWZ, BS EN 50200, BS 8491",
        description:
          "Maintains circuit integrity during fire, water spray, and mechanical shock for up to 3 hours",
      },
    ],
    Highlights: [
      "Dual protection: Mica + LSZH ensures circuit integrity up to 3 hours under fire.",
      "Available in Armoured & Unarmoured categories.",
      "Designed for Metro, Airports, High-rise, Hospitals, Tunnels, Fire Command Systems.",
      "Complies with IS, BS & International safety standards.",
    ],
    keyFeatures: [
      "Ensures life safety by maintaining circuit integrity in fire conditions",
      "Zero Halogen & Low Smoke – minimizes harm during evacuation",
      "Certified under Indian, British, and International fire standards",
      "Long-lasting durability with UV, Rodent & Termite resistance",
      "Trusted by Metro, Airports, Hospitals, Government & Infrastructure Projects",
    ],
    performanceParameters: [
      { property: "Circuit Integrity", value: "3 hours at 950 °C" },
      {
        property: "Fire Test Compliance",
        value: "BS 6387 CWZ (Fire + Water + Mechanical shock)",
      },
      { property: "Smoke Emission", value: "Low smoke density, <0.5% Halogen" },
      { property: "Toxicity", value: "No toxic gases/fumes" },
      { property: "Voltage Grade", value: "Up to 1100 V" },
      { property: "Operating Temp. Range", value: "–15 °C to +90 °C" },
      { property: "Short Circuit Rating", value: "Up to 250 °C" },
      { property: "UV Resistance", value: "Yes" },
      { property: "Rodent & Termite Resistance", value: "Yes" },
    ],
    applications: [
      {
        image: "/products/fire-survival-cables/application-1.png",
        description: "Fire Alarm Systems",
      },
      {
        image: "/products/fire-survival-cables/application-2.png",
        description: "Emergency Lighting & Exit Signage",
      },
      {
        image: "/products/fire-survival-cables/application-3.png",
        description: "Evacuation & Public Address Systems",
      },
      {
        image: "/products/fire-survival-cables/application-4.png",
        description: "Fire Pumps & Sprinkler Systems",
      },
      {
        image: "/products/fire-survival-cables/application-5.png",
        description: "Pressurization & Smoke Venting Fans",
      },
      {
        image: "/products/fire-survival-cables/application-6.png",
        description: "Fireman’s Lifts & Control Rooms",
      },
      {
        image: "/products/fire-survival-cables/application-7.png",
        description: "Metro Railways, Airports, Hospitals, High-Rise Buildings",
      },
      {
        image: "/products/fire-survival-cables/application-8.png",
        description: "Underground Tunnels, Data Centres, HVAC Installations",
      },
    ],
    certifications: [
      "TUV Certified",
      "UL Listed",
      "CE Marked",
      "RoHS 2 Compliant (Lead, Cadmium, Mercury Free)",
      "REACH Compliant",
      "GC-Mark (Trusted Product)",
      "Tested in NABL-accredited labs",
    ],
    safetyStandards: [
      {
        title: "Indian Standards",
        standards: ["IS 17505"],
      },
      {
        title: "British / International Standards",
        standards: [
          "BS 6387 CWZ",
          "BS EN 50200",
          "BS 8491",
          "BS 8434-2",
          "BS 7846",
          "BS 7211",
          "BS EN 50525",
        ],
      },
    ],
    manufacturing: [
      {
        step: "Copper Selected and Cleaned",
        description:
          "Electrolytic tough-pitch copper rod is inspected, descaled, and cleaned for drawing.",
      },
      {
        step: "Wire Drawn and Annealed",
        description:
          "Copper is drawn through multi-die draw benches to the target diameter and annealed for ductility.",
      },
      {
        step: "Conductors Stranded and Compacted",
        description:
          "Required classes of flexibility are achieved by stranding; compaction is performed where specified for circularity.",
      },
      {
        step: "Fire Barrier Applied with Mica Tape",
        description:
          "Mica or glass-mica tapes are helically or longitudinally wrapped with controlled overlap to form a continuous thermal barrier.",
      },
      {
        step: "Primary Insulation Extruded",
        description:
          "Halogen-free flame-retardant polymer or cross-linked polyethylene insulation is extruded over each conductor.",
      },
      {
        step: "Cores Laid-Up with Fillers",
        description:
          "Insulated cores are laid-up to the specified formation with non-hygroscopic fillers and binder tapes applied.",
      },
      {
        step: "Screens Applied Where Required",
        description:
          "Metallic foil screens with drain conductors or woven braids are applied where electromagnetic compatibility is required.",
      },
      {
        step: "Bedding Extruded and Armour Applied",
        description:
          "A bedding layer is extruded and armour (galvanised steel wire or strip) is applied where mechanical protection is specified.",
      },
      {
        step: "Low Smoke Zero Halogen Sheath Extruded",
        description:
          "A halogen-free, low-smoke outer sheath is extruded, cooled, and embossed with identification and meter marking.",
      },
      {
        step: "Routine and Type Tests Completed",
        description:
          "Conductor resistance, high-voltage, spark, dimensional, and flame-propagation tests are completed; circuit-integrity fire tests with water spray and mechanical shock are executed.",
      },
      {
        step: "Lengths Drummed and Documents Issued",
        description:
          "Tested lengths are drummed, sealed, and quality documents are issued.",
      },
    ],
  },
  {
    name: "Bonton Solar Cables",
    slug: "bonton-solar-cables",
    shortDescription:
      "Harness the sun with wires so bright,​ Eco-powered days and starry night.​ Future-ready, clean, and light.​",
    longDescription:
      "Bonton Solar Cables are specially designed for interconnection of solar panels, inverters, and other balance of system components. Built with tinned copper conductors, XLPE insulation, and UV-resistant LSZH sheathing, these cables ensure long life, high performance, and safety in harsh outdoor environments. They are flame-retardant, halogen-free, and TÜV certified to deliver 25+ years of service life in solar installations.",
    images: [
      "/products/solar-cables/top.png",
      "/products/solar-cables/side.png",
      "/products/solar-cables/hero.jpg",
    ],
    variants: [
      {
        cores: [1, 2, 3, 4, 5, 7, 8, 9, 10, 12, 37],
        modelNumber: "110341",
        gauge: 1.5,
        coresLength: [500, 1000],
        cableType: ["Copper Conductor", "LSZH Insulated"],
        color: ["Red"],
        colorCustomization: true,
        weight: "20kg - 40kg",
        dimension: "6mm - 8mm",
        packagingType: "Coils/Wooden Drums",
        unitsPerPack: "as per order",
        warrantyPeriod: "1 Year (extendable)",
      },
    ],
    construction: [
      {
        component: "Conductor",
        material: "High Conductivity Tinned Copper (Stranded Class 5)",
        description: "Provides excellent conductivity & corrosion resistance",
      },
      {
        component: "Insulation",
        material:
          "Cross-linked Polyolefin (XLPE) – Flame retardant, Halogen-free",
        description: "Ensures high thermal stability & electrical safety",
      },
      {
        component: "Core Identification",
        material: "Standard Black (–) and Red (+) color coding",
        description: "Easy polarity recognition",
      },
      {
        component: "Outer Sheath",
        material: "UV, Moisture & Weather Resistant LSZH Compound",
        description:
          "Provides protection against sunlight, ozone, and harsh environments",
      },
      {
        component: "Operating Voltage",
        material: "Up to 1500 V DC",
        description: "Suitable for all types of solar installations",
      },
      {
        component: "Temperature Rating",
        material: "–40 °C to +90 °C (Ambient), +120 °C (Max conductor)",
        description: "Withstands high thermal stress in outdoor applications",
      },
    ],

    Highlights: [
      "Tinned copper conductor for anti-corrosion and durability",
      "XLPE insulation — flame-retardant, halogen-free",
      "LSZH sheath — UV, rodent, termite and moisture resistant",
      "Designed for 1500 V DC systems",
      "Standard black & red cores for easy polarity identification",
    ],

    keyFeatures: [
      "High conductivity tinned copper conductors",
      "UV, ozone, moisture, and weather resistant",
      "XLPE insulation — halogen-free and flame-retardant",
      "Designed for 1500 V DC solar PV systems",
      "Flexible and easy to install in harsh environments",
      "Long service life of 25+ years",
      "Withstands thermal and mechanical stress",
    ],

    performanceParameters: [
      { property: "Rated Voltage", value: "1500 V DC" },
      { property: "Operating Temperature", value: "–40 °C to +90 °C" },
      { property: "Max. Conductor Temperature", value: "+120 °C" },
      { property: "Flame Test Compliance", value: "IEC 60332-1 & IEC 60332-3" },
      { property: "Smoke Density", value: "IEC 61034" },
      { property: "Halogen Emission", value: "IEC 60754-1 & IEC 60754-2" },
      { property: "Ozone Resistance", value: "EN 50396" },
      { property: "UV Resistance", value: "HD 605/A1" },
      { property: "Service Life", value: "25+ Years" },
    ],

    applications: [
      {
        image: "/products/solar-cables/application-1.png",
        description: "Rooftop, off-grid, and utility-scale solar projects",
      },
      {
        image: "/products/solar-cables/application-2.png",
        description:
          "Interconnection between solar panels, inverters, combiner boxes, and batteries",
      },
      {
        image: "/products/solar-cables/application-3.png",
        description: "Solar farms, industrial, and commercial PV installations",
      },
      {
        image: "/products/solar-cables/application-4.png",
        description:
          "Tunnel, railway, and green energy infrastructure requiring solar integration",
      },
      {
        image: "/products/solar-cables/application-6.png",
        description:
          "Suitable for harsh outdoor conditions with high temperature and UV exposure",
      },
    ],

    certifications: [
      "TÜV Certified (Solar cable specific approvals)",
      "ISO 9001, ISO 14001, ISO 45001, ISO 50001",
      "IATF 16949 (where applicable)",
      "RoHS 2 Compliant (Lead, Cadmium, Mercury free)",
      "REACH Compliant",
      "GC-Mark Certified",
    ],

    safetyStandards: [
      {
        title: "Indian Standards",
        standards: ["IS 694 (wiring), IS/IEC 60332 series (flame tests)"],
      },
      {
        title: "British / International Standards",
        standards: [
          "IEC 62930 (Solar DC cable standard)",
          "EN 50618 (European solar cable standard)",
          "IEC 60754-1 / IEC 60754-2 (halogen acid gas emission)",
          "IEC 61034 (smoke density)",
          "HD 605/A1 (UV resistance)",
          "EN 50396 (ozone resistance)",
        ],
      },
    ],

    manufacturing: [
      {
        step: "Tinning & Stranding of Copper",
        description:
          "Copper conductors are tinned and stranded (Class 5) to improve corrosion resistance and flexibility.",
      },
      {
        step: "XLPE Insulation Extrusion",
        description:
          "Cross-linkable polyolefin insulation is extruded over conductors to required thickness and dielectric properties.",
      },
      {
        step: "Sheath Extrusion & Cross-linking",
        description:
          "LSZH outer sheath is extruded and cross-linked (e-beam or silane) to raise thermal, chemical and UV endurance.",
      },
      {
        step: "Stabiliser & UV Package",
        description:
          "UV and weathering stabilisers are added and curing verified for long-term outdoor exposure.",
      },
      {
        step: "Electrical & Ageing Tests",
        description:
          "High-voltage, insulation resistance, thermal cycling, damp heat, ozone and flame tests are performed.",
      },
      {
        step: "Printing, Drumming & Labelling",
        description:
          "Polarity, voltage class and temperature ratings are printed; reels are packed and QC documents issued.",
      },
    ],
  },

  {
    name: "Co axial Cables",
    slug: "co-axial-cables",
    shortDescription:
      "Signal sharp, no static sway,​ From screens to sounds, we lead the way.​ Reliable reach every day.​ ",
    longDescription: "",
    images: [
      "/products/co-axial-cables/top.png",
      "/products/co-axial-cables/side.png",
    ],
  },

  {
    name: "Heavey Duty Cables",
    slug: "heavy-duty-cables",
    shortDescription:
      "For power that lifts, hauls, and drives,​ Tough and rugged where force thrives.​ Industrial strength that always survives.​",
    longDescription: "",
    images: [
      "/products/heavy-duty-cables/top.png",
      "/products/heavy-duty-cables/side.png",
    ],
  },

  {
    name: "LAN Cables",
    slug: "lan-cables",
    shortDescription:
      "Fast as thought, across each floor,​Streaming signals through every core.​ Connect. Communicate. Explore.​",
    longDescription: "",
    images: ["/products/lan-cables/top.png", "/products/lan-cables/side.png"],
  },

  {
    name: "Telecom Cables",
    slug: "telecom-cables",
    shortDescription:
      "Crystal clear from end to end,​Voices, data, messages send.​Built for networks that never bend.​​",
    longDescription: "",
    images: [
      "/products/telecom-cables/top.png",
      "/products/telecom-cables/side.png",
    ],
  },

  {
    name: "Building Wires",
    slug: "building-wires",
    shortDescription:
      "Homes and towers, safe and neat,​ Wiring lives from wall to street.​ Reliable strength in every beat.​​",
    longDescription: "",
    images: [
      "/products/building-wires/side2.png",
      "/products/building-wires/side.png",

      "/products/building-wires/HRFR (Gold Star).png",
      "/products/building-wires/HRFR (Green Wires).png",
      "/products/building-wires/ZHFR.png",
    ],
  },

  {
    name: "Uninyvin Cables",
    slug: "uninyvin-cables",
    shortDescription:
      "Heat-defying, lean, and light,​Wiring tech that takes its flight.​ From UPS to skies in silent might.​​",
    longDescription: "",
    images: [
      "/products/uninyvin-cables/top.png",
      "/products/uninyvin-cables/side.png",
    ],
  },

  {
    name: "Control and Instrumentation Cables",
    slug: "control-and-instrumentation-cables",
    shortDescription:
      "Signals flow smooth, no room for fear,​Precision and control are always clear. We carry commands both far and near.​​​",
    longDescription: "",
    images: [
      "/products/control-and-instumentation-cables/top.png",
      "/products/control-and-instumentation-cables/side.png",
    ],
  },
  {
    name: "Automotive Cables",
    slug: "automotive-cables",
    shortDescription:
      "Racing, road, and the drive,​ Wires that know no bounds.​ Built for speed, where limits are defied.​​",
    longDescription: "",
    images: [
      "/products/automobile-cables/top.png",
      "/products/automobile-cables/side.png",
    ],
  },

  {
    name: "Multicore Cables",
    slug: "multicore-cables",
    shortDescription:
      "Many hearts in one strong skin,​Organized power flows within. Smart wiring for every win.​​",
    longDescription: "",
    images: [
      "/products/multicore-cables/top.png",
      "/products/multicore-cables/side.png",
    ],
  },

  {
    name: "Power Cables",
    slug: "power-cables",
    shortDescription:
      "​",
    longDescription: "",
    images: [
      "/products/power-cables/top.png",
      "/products/power-cables/side.png",
    ],
  },
];

export default products;
