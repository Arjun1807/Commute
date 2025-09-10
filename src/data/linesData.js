// Mumbai Metro Line 1 (Blue Line) - Versova to Ghatkopar
export const blueLineStations = [
  {
    id: 1,
    name: "Versova",
    coordinates: [19.13030672036282, 72.82133317465833],
    line: "Blue Line"
  },
  {
    id: 2,
    name: "D.N. Nagar",
    coordinates: [19.128379575458, 72.83017810596357],
    line: "Blue Line"
  },
  {
    id: 3,
    name: "Azad Nagar",
    coordinates: [19.12677698476089, 72.83804611911995],
    line: "Blue Line"
  },
  {
    id: 4,
    name: "Andheri",
    coordinates: [19.120568366187936, 72.84878641579083],
    line: "Blue Line"
  },
  {
    id: 5,
    name: "Western Express Highway",
    coordinates: [19.11601584079627, 72.85645196346219],
    line: "Blue Line"
  },
  {
    id: 6,
    name: "Chakala (J.B. Nagar)",
    coordinates: [19.112020678729138, 72.86758233055905],
    line: "Blue Line"
  },
  {
    id: 7,
    name: "Airport Road",
    coordinates: [19.110199831959665, 72.87418955698575],
    line: "Blue Line"
  },
  {
    id: 8,
    name: "Marol Naka",
    coordinates: [19.108076190970994, 72.87949490665218],
    line: "Blue Line"
  },
  {
    id: 9,
    name: "Saki Naka",
    coordinates: [19.103457301679377, 72.8880303887124],
    line: "Blue Line"
  },
  {
    id: 10,
    name: "Asalpha",
    coordinates: [19.096299171440947, 72.89497328060138],
    line: "Blue Line"
  },
  {
    id: 11,
    name: "Jagruti Nagar",
    coordinates: [19.092656210758328, 72.90161905793394],
    line: "Blue Line"
  },
  {
    id: 12,
    name: "Ghatkopar",
    coordinates: [19.08730641207907, 72.90801392485005],
    line: "Blue Line"
  }
];

// Get coordinates array for drawing the line
export const blueLineCoordinates = blueLineStations.map(station => station.coordinates);



// This data represents the combined Red Line (Line 7 & Line 9).
export const redLineStations = [
  {
    id: 1,
    name: "Gundavali", // Interchange with Blue Line
    coordinates: [19.11507754913673, 72.8551994462991],
    line: "Red Line"
  },
  {
    id: 2,
    name: "Mogra",
    coordinates: [19.12861342568735, 72.85536751306242],
    line: "Red Line"
  },
  {
    id: 3,
    name: "Jogeshwari (East)",
    coordinates: [19.142787567350304, 72.85507774331235],
    line: "Red Line"
  },
  {
    id: 4,
    name: "Goregaon (East)",
    coordinates: [19.152480918748207, 72.85651538240978],
    line: "Red Line"
  },
  {
    id: 5,
    name: "Aarey",
    coordinates: [19.169303515196788, 72.85874703999076],
    line: "Red Line"
  },
  {
    id: 6,
    name: "Kurar",
    coordinates: [19.187198103897313, 72.85845964460465],
    line: "Red Line"
  },
  {
    id: 7,
    name: "Akurli",
    coordinates: [19.19829212989317, 72.86067913152738],
    line: "Red Line"
  },
  {
    id: 8,
    name: "Poisar",
    coordinates: [19.20394320192308, 72.86342065023187],
    line: "Red Line"
  },
  {
    id: 9,
    name: "Magathane",
    coordinates: [19.21722484592675, 72.86670875411518],
    line: "Red Line"
  },
  {
    id: 10,
    name: "Devipada",
    coordinates: [19.224271179787195, 72.86421028894291],
    line: "Red Line"
  },
  {
    id: 11,
    name: "Rashtriya Udyan",
    coordinates: [19.23462361820006, 72.86310785025434],
    line: "Red Line"
  },
  {
    id: 12,
    name: "Ovari Pada",
    coordinates: [19.243259359126935, 72.86421315349371],
    line: "Red Line"
  },
  {
    id: 13,
    name: "Dahisar (East)", // Interchange station
    coordinates: [19.250913378820837, 72.86689168679621],
    line: "Red Line"
  }
];

// Get coordinates array for drawing the line
export const redLineCoordinates = redLineStations.map(station => station.coordinates);

// This data represents the Yellow Line (Line 2A), which is currently operational.
export const yellowLineStations = [
  {
    id: 1,
    name: "Dahisar (East)", // Interchange with Red Line
    coordinates: [19.25104722409493, 72.86677738452657],
    line: "Yellow Line"
  },
  {
    id: 2,
    name: "Anand Nagar",
    coordinates: [19.257267897664644, 72.86588978590606],
    line: "Yellow Line"
  },
  {
    id: 3,
    name: "Kandarpada",
    coordinates: [19.25655519000629, 72.85054876660715],
    line: "Yellow Line"
  },
  {
    id: 4,
    name: "Mandapeshwar IC Colony",
    coordinates: [19.24937341032944, 72.8456810276152],
    line: "Yellow Line"
  },
  {
    id: 5,
    name: "Eksar",
    coordinates: [19.24030897751022, 72.84349468670835],
    line: "Yellow Line"
  },
  {
    id: 6,
    name: "Borivali (West)",
    coordinates: [19.231324449791593, 72.84140966625135],
    line: "Yellow Line"
  },
  {
    id: 7,
    name: "Shimpoli",
    coordinates: [19.222825687481716, 72.84089227497563],
    line: "Yellow Line"
  },
  {
    id: 8,
    name: "Kandivali (West)",
    coordinates: [19.213981977760437, 72.8371641844231],
    line: "Yellow Line"
  },
  {
    id: 9,
    name: "Dahanukarwadi",
    coordinates: [19.206113887771092, 72.83548458617626],
    line: "Yellow Line"
  },
  {
    id: 10,
    name: "Valnai-Meeth Chowky",
    coordinates: [19.196833281875755, 72.83429450057906],
    line: "Yellow Line"
  },
  {
    id: 11,
    name: "Malad (West)",
    coordinates: [19.18526019918959, 72.83586668863595],
    line: "Yellow Line"
  },
  {
    id: 12,
    name: "Lower Malad",
    coordinates: [19.172886649208944, 72.8363583166035],
    line: "Yellow Line"
  },
  {
    id: 13,
    name: "Bangur Nagar",
    coordinates: [19.16238327032085, 72.83480643344411],
    line: "Yellow Line"
  },
  {
    id: 14,
    name: "Goregaon (West)",
    coordinates: [19.15323216008299, 72.83579152300784],
    line: "Yellow Line"
  },
  {
    id: 15,
    name: "Oshiwara",
    coordinates: [19.14607711647737, 72.83396525859379],
    line: "Yellow Line"
  },
  {
    id: 16,
    name: "Lower Oshiwara",
    coordinates: [19.14068954178849, 72.83161126080198],
    line: "Yellow Line"
  },
  {
    id: 17,
    name: "Andheri West", // Interchange with Blue Line
    coordinates: [19.129172095953, 72.83138055597574],
    line: "Yellow Line"
  }
];

// Get coordinates array for drawing the line
export const yellowLineCoordinates = yellowLineStations.map(station => station.coordinates);

// This data represents the Aqua Line (Line 3).
export const aquaLineStations = [
  {
    id: 1,
    name: "Aarey JVLR",
    coordinates: [19.131207739314434, 72.8843394417036],
    line: "Aqua Line"
  },
  {
    id: 2,
    name: "SEEPZ",
    coordinates: [19.125764671756635, 72.87336718145343],
    line: "Aqua Line"
  },
  {
    id: 3,
    name: "MIDC Andheri",
    coordinates: [19.117331951319134, 72.8735155437823],
    line: "Aqua Line"
  },
  {
    id: 4,
    name: "Marol Naka", // Interchange with Blue Line
    coordinates: [19.108070260367633, 72.87938960631938],
    line: "Aqua Line"
  },
  {
    id: 5,
    name: "CSMIA International",
    coordinates: [19.10203889518251, 72.87444732072296],
    line: "Aqua Line"
  },
  {
    id: 6,
    name: "Sahar Road",
    coordinates: [19.10208574739517, 72.86474320061329],
    line: "Aqua Line"
  },
  {
    id: 7,
    name: "CSMIA Domestic",
    coordinates: [19.093904030772364, 72.85351959859315],
    line: "Aqua Line"
  },
  {
    id: 8,
    name: "Santacruz Metro",
    coordinates: [19.07898784334897, 72.84692728868653],
    line: "Aqua Line"
  },
  {
    id: 9,
    name: "Bandra Colony",
    coordinates: [19.06996664065692, 72.8494195346189],
    line: "Aqua Line"
  },
  {
    id: 10,
    name: "BKC",
    coordinates: [19.060419404687647, 72.85493569334803],
    line: "Aqua Line"
  },
  {
    id: 11,
    name: "Dharavi",
    coordinates: [19.046275530027064, 72.8499622557821],
    line: "Aqua Line"
  },
  {
    id: 12,
    name: "Shitladevi Temple",
    coordinates: [19.03829806243753, 72.84233421403934],
    line: "Aqua Line"
  },
  {
    id: 13,
    name: "Dadar",
    coordinates: [19.02368953485568, 72.83926653980969],
    line: "Aqua Line"
  },
  {
    id: 14,
    name: "Siddhivinayak",
    coordinates: [19.017881294412007, 72.83197513321262],
    line: "Aqua Line"
  },
  {
    id: 15,
    name: "Worli",
    coordinates: [19.008684093226485, 72.81938819563699],
    line: "Aqua Line"
  },
  {
    id: 16,
    name: "Acharya Atre Chowk",
    coordinates: [18.997128988460588, 72.818172245545],
    line: "Aqua Line"
  }
];

// Get coordinates array for drawing the line
export const aquaLineCoordinates = aquaLineStations.map(station => station.coordinates);


export const centralRailwayStations = [
  {
    id: 1,
    name: "CSMT",
    coordinates: [18.941862064637345, 72.8368088487594],
    line: "Central Line"
  },
  {
    id: 2,
    name: "Masjid Bunder",
    coordinates: [18.95194166229304, 72.83820813833364],
    line: "Central Line"
  },
  {
    id: 3,
    name: "Sandhurst Road",
    coordinates: [18.961006824304828, 72.83942196936079],
    line: "Central Line"
  },
  {
    id: 4,
    name: "Byculla",
    coordinates: [18.976714187004387, 72.83259436082419],
    line: "Central Line"
  },
  {
    id: 5,
    name: "Chinchpokli",
    coordinates: [18.98725825623234, 72.83275387912366],
    line: "Central Line"
  },
  {
    id: 6,
    name: "Currey Road",
    coordinates: [18.994426844185924, 72.8329032593186],
    line: "Central Line"
  },
  {
    id: 7,
    name: "Parel",
    coordinates: [19.009204939968594, 72.83740306504504],
    line: "Central Line"
  },
  {
    id: 8,
    name: "Dadar",
    coordinates: [19.019216790002815, 72.8440274758097],
    line: "Central Line"
  },
  {
    id: 9,
    name: "Matunga",
    coordinates: [19.027584708242777, 72.85039077104614],
    line: "Central Line"
  },
  {
    id: 10,
    name: "Sion",
    coordinates: [19.04635777572877, 72.86315442888707],
    line: "Central Line"
  },
  {
    id: 11,
    name: "Kurla",
    coordinates: [19.06563545266339, 72.87915513917555],
    line: "Central Line"
  },
  {
    id: 12,
    name: "Vidyavihar",
    coordinates: [19.079085222380826, 72.8972594518805],
    line: "Central Line"
  },
  {
    id: 13,
    name: "Ghatkopar", // Interchange with Blue Metro Line
    coordinates: [19.08572142321421, 72.90901614612001],
    line: "Central Line"
  },
  {
    id: 14,
    name: "Vikhroli",
    coordinates: [19.110949657302, 72.92788503385596],
    line: "Central Line"
  },
  {
    id: 15,
    name: "Kanjurmarg",
    coordinates: [19.128319629135927, 72.9281382696454],
    line: "Central Line"
  },
  {
    id: 16,
    name: "Bhandup",
    coordinates: [19.14212622684024, 72.9373555060219],
    line: "Central Line"
  },
  {
    id: 17,
    name: "Nahur",
    coordinates: [19.154562366312753, 72.94674317779953],
    line: "Central Line"
  },
  {
    id: 18,
    name: "Mulund",
    coordinates: [19.172252035198234, 72.956672556866],
    line: "Central Line"
  },
  {
    id: 19,
    name: "Thane",
    coordinates: [19.186429284423447, 72.97528261847404],
    line: "Central Line"
  },
  {
    id: 20,
    name: "Kalwa",
    coordinates: [19.196832894729642, 72.99757217475208],
    line: "Central Line"
  },
  {
    id: 21,
    name: "Mumbra",
    coordinates: [19.190359336820293, 73.0231055039386],
    line: "Central Line"
  },
  {
    id: 22,
    name: "Diva Junction",
    coordinates: [19.18884402512801, 73.04297703236743],
    line: "Central Line"
  },
  {
    id: 23,
    name: "Kopar",
    coordinates: [19.211106186822587, 73.07732956885674],
    line: "Central Line"
  },
  {
    id: 24,
    name: "Dombivli",
    coordinates: [19.217997671868417, 73.08669453417023],
    line: "Central Line"
  },
  {
    id: 25,
    name: "Thakurli",
    coordinates: [19.22585204579749, 73.09741093739804],
    line: "Central Line"
  },
  {
    id: 26,
    name: "Kalyan Junction",
    coordinates: [19.23568452034846, 73.1310330575293],
    line: "Central Line"
  }
];

// Get coordinates array for drawing the line
export const centralLineCoordinates = centralRailwayStations.map(station => station.coordinates);

export const westernRailwayStations = [
  {
    id: 1,
    name: "Churchgate",
    coordinates: [18.935363057915282, 72.82722881269822],
    line: "Western Line"
  },
  {
    id: 2,
    name: "Marine Lines",
    coordinates: [18.946071109030918, 72.82357306356657],
    line: "Western Line"
  },
  {
    id: 3,
    name: "Charni Road",
    coordinates: [18.951759482061014, 72.81838425858571],
    line: "Western Line"
  },
  {
    id: 4,
    name: "Grant Road",
    coordinates: [18.96319140950526, 72.81614363815623],
    line: "Western Line"
  },
  {
    id: 5,
    name: "Mumbai Central",
    coordinates: [18.969604098943638, 72.81938664136356],
    line: "Western Line"
  },
  {
    id: 6,
    name: "Mahalaxmi",
    coordinates: [18.981753168573675, 72.82351858668783],
    line: "Western Line"
  },
  {
    id: 7,
    name: "Lower Parel",
    coordinates: [18.99641690626466, 72.83078489733963],
    line: "Western Line"
  },
  {
    id: 8,
    name: "Prabhadevi",
    coordinates: [19.00757311996626, 72.8359613156898],
    line: "Western Line"
  },
  {
    id: 9,
    name: "Dadar",
    coordinates: [19.01909747805727, 72.84398252021086],
    line: "Western Line"
  },
  {
    id: 10,
    name: "Matunga Road",
    coordinates: [19.02865054889961, 72.84694256374814],
    line: "Western Line"
  },
  {
    id: 11,
    name: "Mahim Junction",
    coordinates: [19.040550977953174, 72.8466599313901],
    line: "Western Line"
  },
  {
    id: 12,
    name: "Bandra",
    coordinates: [19.054799686457965, 72.84075963840027],
    line: "Western Line"
  },
  {
    id: 13,
    name: "Khar Road",
    coordinates: [19.069713248150027, 72.8401474500673],
    line: "Western Line"
  },
  {
    id: 14,
    name: "Santacruz",
    coordinates: [19.08167497445701, 72.84167850711106],
    line: "Western Line"
  },
  {
    id: 15,
    name: "Vile Parle",
    coordinates: [19.100450326274842, 72.84396462187485],
    line: "Western Line"
  },
  {
    id: 16,
    name: "Andheri", // Interchange with Blue Metro Line
    coordinates: [19.119927611315827, 72.84662614909493],
    line: "Western Line"
  },
  {
    id: 17,
    name: "Jogeshwari",
    coordinates: [19.136345663549232, 72.84843789987326],
    line: "Western Line"
  },
  {
    id: 18,
    name: "Ram Mandir",
    coordinates: [19.149191080858312, 72.850455095649],
    line: "Western Line"
  },
  {
    id: 19,
    name: "Goregaon",
    coordinates: [19.164666183404655, 72.84931484024429],
    line: "Western Line"
  },
  {
    id: 20,
    name: "Malad",
    coordinates: [19.186954106341076, 72.84885208964977],
    line: "Western Line"
  },
  {
    id: 21,
    name: "Kandivali",
    coordinates: [19.204155645750212, 72.85174872255156],
    line: "Western Line"
  },
  {
    id: 22,
    name: "Borivali",
    coordinates: [19.229003705149776, 72.85731756995587],
    line: "Western Line"
  },
  {
    id: 23,
    name: "Dahisar",
    coordinates: [19.249578287441455, 72.85954647680947],
    line: "Western Line"
  },
  {
    id: 24,
    name: "Mira Road",
    coordinates: [19.280732488014404, 72.85601039998433],
    line: "Western Line"
  },
  {
    id: 25,
    name: "Bhayandar",
    coordinates: [19.311256516008317, 72.85248276044646],
    line: "Western Line"
  },
  {
    id: 26,
    name: "Naigaon",
    coordinates: [19.351211505987408, 72.84621650944011],
    line: "Western Line"
  },
  {
    id: 27,
    name: "Vasai Road",
    coordinates: [19.38259676224325, 72.83191299919308],
    line: "Western Line"
  },
  {
    id: 28,
    name: "Nallasopara",
    coordinates: [19.417655100600044, 72.81888106999534],
    line: "Western Line"
  },
  {
    id: 29,
    name: "Virar",
    coordinates: [19.454746074655404, 72.81193085090473],
    line: "Western Line"
  }
];

// Get coordinates array for drawing the line
export const westernLineCoordinates = westernRailwayStations.map(station => station.coordinates);

export const monorailStations = [
  {
    id: 1,
    name: "Chembur",
    coordinates: [19.06124782882847, 72.89751927533082],
    line: "Mumbai Monorail"
  },
  {
    id: 2,
    name: "VNP and RC Marg Junction",
    coordinates: [19.05266142568508, 72.89422750277076],
    line: "Mumbai Monorail"
  },
  {
    id: 3,
    name: "Fertilizer Township",
    coordinates: [19.043927425427427, 72.89344268394865],
    line: "Mumbai Monorail"
  },
  {
    id: 4,
    name: "Bharat Petroleum",
    coordinates: [19.035382086697513, 72.8955177071051],
    line: "Mumbai Monorail"
  },
  {
    id: 5,
    name: " Mysore Colony",
    coordinates: [19.027715783962947, 72.8913336454702],
    line: "Mumbai Monorail"
  },
  {
    id: 6,
    name: "Bhakti Park",
    coordinates: [19.02900090345829, 72.87763011135779],
    line: "Mumbai Monorail"
  },
  {
    id: 7,
    name: "Wadala Depot",
    coordinates: [19.038898154588193, 72.87401702751806],
    line: "Mumbai Monorail"
  },
  {
    id: 8,
    name: "GTB Nagar",
    coordinates: [19.036752567565895, 72.8708322995191],
    line: "Mumbai Monorail"
  },
  {
    id: 9,
    name: "Antop Hill",
    coordinates: [19.030257364135025, 72.86698004854509],
    line: "Mumbai Monorail"
  },
  {
    id: 10,
    name: "Acharya Atre Nagar",
    coordinates: [19.02391285477393, 72.863876073683],
    line: "Mumbai Monorail"
  },
  {
    id: 11,
    name: "Wadala Bridge",
    coordinates: [19.017518728502367, 72.8593789515127],
    line: "Mumbai Monorail"
  },
  {
    id: 12,
    name: "Dadar East",
    coordinates: [19.016210959734615, 72.85229901529665],
    line: "Mumbai Monorail"
  },
  {
    id: 13,
    name: "Naigaon",
    coordinates: [19.009618477921602, 72.84790901468239],
    line: "Mumbai Monorail"
  },
  {
    id: 14,
    name: "Ambedkar Nagar",
    coordinates: [19.001625293419455, 72.84419384984331],
    line: "Mumbai Monorail"
  },
  {
    id: 15,
    name: "Mint Colony",
    coordinates: [18.994534360868766, 72.84330859192974],
    line: "Mumbai Monorail"
  },
  {
    id: 16,
    name: "Lower Parel Monorail",
    coordinates: [18.993203101240166, 72.83149128426928],
    line: "Mumbai Monorail"
  },
  {
    id: 17,
    name: "Sant Gadge Maharaj Chowk",
    coordinates: [18.98317248433001, 72.82862242060163],
    line: "Mumbai Monorail"
  } 
];

// Get coordinates array for drawing the line
export const monorailLineCoordinates = monorailStations.map(station => station.coordinates);



// Transit line colors
export const transitColors = {
  blue: '#0066CC',
  red: '#CC0000',
  green: '#00CC00',
  turquoise: '#00C9C9',
  yellow: '#FFCC00',
  purple: '#6600CC',
  orange: '#FF6600',
};

// Unified lines descriptor to allow adding new lines only here
export const transitLines = [
  {
    label: 'Blue Line',
    color: transitColors.blue,
    stations: blueLineStations,
  },
  {
    label: 'Red Line',
    color: transitColors.red,
    stations: redLineStations,
  },
  {
    label: 'Yellow Line',
    color: transitColors.yellow,
    stations: yellowLineStations,
  },
  {
    label: 'Aqua Line',
    color: transitColors.turquoise,
    stations: aquaLineStations,
  },
  {
    label: 'Central Line',
    color: transitColors.green,
    stations: centralRailwayStations,
  },
  {
    label: 'Western Line',
    color: transitColors.purple,
    stations: westernRailwayStations,
  },
  {
    label: 'Mumbai Monorail',
    color: transitColors.orange,
    stations: monorailStations,
  },
];

// Helper: derived coordinates per line
export const transitLineCoordinates = transitLines.map(line => ({
  label: line.label,
  color: line.color,
  coordinates: line.stations.map(s => s.coordinates),
}));