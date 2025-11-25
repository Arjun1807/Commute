export const blueLineStations = [
  { id: 1, name: "Versova", coordinates: [19.13030672036282, 72.82133317465833], line: "Blue Line" },
  { id: 2, name: "D.N. Nagar", coordinates: [19.128379575458, 72.83017810596357], line: "Blue Line" },
  { id: 3, name: "Azad Nagar", coordinates: [19.12677698476089, 72.83804611911995], line: "Blue Line" },
  { id: 4, name: "Andheri", coordinates: [19.120568366187936, 72.84878641579083], line: "Blue Line" },
  { id: 5, name: "Western Express Highway", coordinates: [19.11601584079627, 72.85645196346219], line: "Blue Line" },
  { id: 6, name: "Chakala (J.B. Nagar)", coordinates: [19.112020678729138, 72.86758233055905], line: "Blue Line" },
  { id: 7, name: "Airport Road", coordinates: [19.110199831959665, 72.87418955698575], line: "Blue Line" },
  { id: 8, name: "Marol Naka", coordinates: [19.108076190970994, 72.87949490665218], line: "Blue Line" },
  { id: 9, name: "Saki Naka", coordinates: [19.103457301679377, 72.8880303887124], line: "Blue Line" },
  { id: 10, name: "Asalpha", coordinates: [19.096299171440947, 72.89497328060138], line: "Blue Line" },
  { id: 11, name: "Jagruti Nagar", coordinates: [19.092656210758328, 72.90161905793394], line: "Blue Line" },
  { id: 12, name: "Ghatkopar", coordinates: [19.08730641207907, 72.90801392485005], line: "Blue Line" }
];

export const blueLineCoordinates = blueLineStations.map(station => station.coordinates);


export const redLineStations = [
  { id: 1, name: "Gundavali", coordinates: [19.11507754913673, 72.8551994462991], line: "Red Line" },
  { id: 2, name: "Mogra", coordinates: [19.12861342568735, 72.85536751306242], line: "Red Line" },
  { id: 3, name: "Jogeshwari (East)", coordinates: [19.142787567350304, 72.85507774331235], line: "Red Line" },
  { id: 4, name: "Goregaon (East)", coordinates: [19.152480918748207, 72.85651538240978], line: "Red Line" },
  { id: 5, name: "Aarey", coordinates: [19.169303515196788, 72.85874703999076], line: "Red Line" },
  { id: 6, name: "Kurar", coordinates: [19.187198103897313, 72.85845964460465], line: "Red Line" },
  { id: 7, name: "Akurli", coordinates: [19.19829212989317, 72.86067913152738], line: "Red Line" },
  { id: 8, name: "Poisar", coordinates: [19.20394320192308, 72.86342065023187], line: "Red Line" },
  { id: 9, name: "Magathane", coordinates: [19.21722484592675, 72.86670875411518], line: "Red Line" },
  { id: 10, name: "Devipada", coordinates: [19.224271179787195, 72.86421028894291], line: "Red Line" },
  { id: 11, name: "Rashtriya Udyan", coordinates: [19.23462361820006, 72.86310785025434], line: "Red Line" },
  { id: 12, name: "Ovari Pada", coordinates: [19.243259359126935, 72.86421315349371], line: "Red Line" },
  { id: 13, name: "Dahisar (East)", coordinates: [19.250913378820837, 72.86689168679621], line: "Red Line" }
];

export const redLineCoordinates = redLineStations.map(station => station.coordinates);



export const yellowLineStations = [
  { id: 1, name: "Dahisar (East)", coordinates: [19.25104722409493, 72.86677738452657], line: "Yellow Line" },
  { id: 2, name: "Anand Nagar", coordinates: [19.257267897664644, 72.86588978590606], line: "Yellow Line" },
  { id: 3, name: "Kandarpada", coordinates: [19.25655519000629, 72.85054876660715], line: "Yellow Line" },
  { id: 4, name: "Mandapeshwar IC Colony", coordinates: [19.24937341032944, 72.8456810276152], line: "Yellow Line" },
  { id: 5, name: "Eksar", coordinates: [19.24030897751022, 72.84349468670835], line: "Yellow Line" },
  { id: 6, name: "Borivali (West)", coordinates: [19.231324449791593, 72.84140966625135], line: "Yellow Line" },
  { id: 7, name: "Shimpoli", coordinates: [19.222825687481716, 72.84089227497563], line: "Yellow Line" },
  { id: 8, name: "Kandivali (West)", coordinates: [19.213981977760437, 72.8371641844231], line: "Yellow Line" },
  { id: 9, name: "Dahanukarwadi", coordinates: [19.206113887771092, 72.83548458617626], line: "Yellow Line" },
  { id: 10, name: "Valnai-Meeth Chowky", coordinates: [19.196833281875755, 72.83429450057906], line: "Yellow Line" },
  { id: 11, name: "Malad (West)", coordinates: [19.18526019918959, 72.83586668863595], line: "Yellow Line" },
  { id: 12, name: "Lower Malad", coordinates: [19.172886649208944, 72.8363583166035], line: "Yellow Line" },
  { id: 13, name: "Bangur Nagar", coordinates: [19.16238327032085, 72.83480643344411], line: "Yellow Line" },
  { id: 14, name: "Goregaon (West)", coordinates: [19.15323216008299, 72.83579152300784], line: "Yellow Line" },
  { id: 15, name: "Oshiwara", coordinates: [19.14607711647737, 72.83396525859379], line: "Yellow Line" },
  { id: 16, name: "Lower Oshiwara", coordinates: [19.14068954178849, 72.83161126080198], line: "Yellow Line" },
  { id: 17, name: "Andheri West", coordinates: [19.129172095953, 72.83138055597574], line: "Yellow Line" }
];

export const yellowLineCoordinates = yellowLineStations.map(station => station.coordinates);


export const aquaLineStations = [
  { id: 1, name: "Aarey JVLR", coordinates: [19.131207739314434, 72.8843394417036], line: "Aqua Line" },
  { id: 2, name: "SEEPZ", coordinates: [19.125764671756635, 72.87336718145343], line: "Aqua Line" },
  { id: 3, name: "MIDC Andheri", coordinates: [19.117331951319134, 72.8735155437823], line: "Aqua Line" },
  { id: 4, name: "Marol Naka", coordinates: [19.108070260367633, 72.87938960631938], line: "Aqua Line" },
  { id: 5, name: "CSMIA International", coordinates: [19.10203889518251, 72.87444732072296], line: "Aqua Line" },
  { id: 6, name: "Sahar Road", coordinates: [19.10208574739517, 72.86474320061329], line: "Aqua Line" },
  { id: 7, name: "CSMIA Domestic", coordinates: [19.093904030772364, 72.85351959859315], line: "Aqua Line" },
  { id: 8, name: "Santacruz Metro", coordinates: [19.07898784334897, 72.84692728868653], line: "Aqua Line" },
  { id: 9, name: "Bandra Colony", coordinates: [19.06996664065692, 72.8494195346189], line: "Aqua Line" },
  { id: 10, name: "BKC", coordinates: [19.060419404687647, 72.85493569334803], line: "Aqua Line" },
  { id: 11, name: "Dharavi", coordinates: [19.046275530027064, 72.8499622557821], line: "Aqua Line" },
  { id: 12, name: "Shitladevi Temple", coordinates: [19.03829806243753, 72.84233421403934], line: "Aqua Line" },
  { id: 13, name: "Dadar", coordinates: [19.02368953485568, 72.83926653980969], line: "Aqua Line" },
  { id: 14, name: "Siddhivinayak", coordinates: [19.017881294412007, 72.83197513321262], line: "Aqua Line" },
  { id: 15, name: "Worli", coordinates: [19.008684093226485, 72.81938819563699], line: "Aqua Line" },
  { id: 16, name: "Acharya Atre Chowk", coordinates: [18.997128988460588, 72.818172245545], line: "Aqua Line" },
  { id: 17, name: "Science Centre", coordinates: [18.990457102874203, 72.8215962478641], line: "Aqua Line" },
  { id: 18, name: "Mahalaxmi", coordinates: [18.979482174829787, 72.82526965185944], line: "Aqua Line" },
  { id: 19, name: "JaganthJagannath Shankar Sheth", coordinates: [18.970609013470394, 72.82138032246334], line: "Aqua Line" },
  { id: 20, name: "Girgaon", coordinates: [18.951939712641533, 72.82259774303033], line: "Aqua Line" },
  { id: 21, name: "Kalbadevi", coordinates: [18.94688702325133, 72.82693203344141], line: "Aqua Line" },
  { id: 22, name: "Chhatrapati Shivaji Maharaj", coordinates: [18.94060270630871, 72.83217519994545], line: "Aqua Line" },
  { id: 23, name: "Hutatma Chowk", coordinates: [18.934574817970027, 72.83284232325786], line: "Aqua Line" },
  { id: 24, name: "Churchgate", coordinates: [18.93061515020992, 72.82612105252878], line: "Aqua Line" },
  { id: 25, name: "Vidhan Bhavan", coordinates: [18.92469352695677, 72.82560776571272], line: "Aqua Line" },
  { id: 26, name: "Cuffe parade", coordinates: [18.912914092630135, 72.82019883720193], line: "Aqua Line" }
];

export const aquaLineCoordinates = aquaLineStations.map(station => station.coordinates);


export const centralRailwayStations = [
  { id: 1, name: "CSMT", coordinates: [18.941862064637345, 72.8368088487594], line: "Central Line" },
  { id: 2, name: "Masjid Bunder", coordinates: [18.95194166229304, 72.83820813833364], line: "Central Line" },
  { id: 3, name: "Sandhurst Road", coordinates: [18.961006824304828, 72.83942196936079], line: "Central Line" },
  { id: 4, name: "Byculla", coordinates: [18.976714187004387, 72.83259436082419], line: "Central Line" },
  { id: 5, name: "Chinchpokli", coordinates: [18.98725825623234, 72.83275387912366], line: "Central Line" },
  { id: 6, name: "Currey Road", coordinates: [18.994426844185924, 72.8329032593186], line: "Central Line" },
  { id: 7, name: "Parel", coordinates: [19.009204939968594, 72.83740306504504], line: "Central Line" },
  { id: 8, name: "Dadar", coordinates: [19.019216790002815, 72.8440274758097], line: "Central Line" },
  { id: 9, name: "Matunga", coordinates: [19.027584708242777, 72.85039077104614], line: "Central Line" },
  { id: 10, name: "Sion", coordinates: [19.04635777572877, 72.86315442888707], line: "Central Line" },
  { id: 11, name: "Kurla", coordinates: [19.06563545266339, 72.87915513917555], line: "Central Line" },
  { id: 12, name: "Vidyavihar", coordinates: [19.079085222380826, 72.8972594518805], line: "Central Line" },
  { id: 13, name: "Ghatkopar", coordinates: [19.08572142321421, 72.90901614612001], line: "Central Line" },
  { id: 14, name: "Vikhroli", coordinates: [19.110949657302, 72.92788503385596], line: "Central Line" },
  { id: 15, name: "Kanjurmarg", coordinates: [19.128319629135927, 72.9281382696454], line: "Central Line" },
  { id: 16, name: "Bhandup", coordinates: [19.14212622684024, 72.9373555060219], line: "Central Line" },
  { id: 17, name: "Nahur", coordinates: [19.154562366312753, 72.94674317779953], line: "Central Line" },
  { id: 18, name: "Mulund", coordinates: [19.172252035198234, 72.956672556866], line: "Central Line" },
  { id: 19, name: "Thane", coordinates: [19.186429284423447, 72.97528261847404], line: "Central Line" },
  { id: 20, name: "Kalwa", coordinates: [19.196832894729642, 72.99757217475208], line: "Central Line" },
  { id: 21, name: "Mumbra", coordinates: [19.190359336820293, 73.0231055039386], line: "Central Line" },
  { id: 22, name: "Diva Junction", coordinates: [19.18884402512801, 73.04297703236743], line: "Central Line" },
  { id: 23, name: "Kopar", coordinates: [19.211106186822587, 73.07732956885674], line: "Central Line" },
  { id: 24, name: "Dombivli", coordinates: [19.217997671868417, 73.08669453417023], line: "Central Line" },
  { id: 25, name: "Thakurli", coordinates: [19.22585204579749, 73.09741093739804], line: "Central Line" },
  { id: 26, name: "Kalyan Junction", coordinates: [19.23568452034846, 73.1310330575293], line: "Central Line" },

  // Karjat Branch
  { id: 27, name: "Vithalwadi", coordinates: [19.227221, 73.144444], line: "Central Line" },
  { id: 28, name: "Ulhasnagar", coordinates: [19.217778, 73.161389], line: "Central Line" },
  { id: 29, name: "Ambernath", coordinates: [19.200278, 73.187222], line: "Central Line" },
  { id: 30, name: "Badlapur", coordinates: [19.157778, 73.225556], line: "Central Line" },
  { id: 31, name: "Vangani", coordinates: [19.117222, 73.243611], line: "Central Line" },
  { id: 32, name: "Shelu", coordinates: [19.0825, 73.277778], line: "Central Line" },
  { id: 33, name: "Neral Junction", coordinates: [19.028889, 73.315], line: "Central Line" },
  { id: 34, name: "Bhivpuri Road", coordinates: [18.983611, 73.333056], line: "Central Line" },
  { id: 35, name: "Karjat Junction", coordinates: [18.911111, 73.3275], line: "Central Line" },
  { id: 36, name: "Palasdari", coordinates: [18.8833, 73.35], line: "Central Line" },

  
  { id: 37, name: "Khopoli", coordinates: [18.7865, 73.3482], line: "Central Line" },
  { id: 38, name: "Shahad", coordinates: [19.243547, 73.156108], line: "Central Line" },
  { id: 39, name: "Ambivli", coordinates: [19.259021, 73.176465], line: "Central Line" },
  { id: 40, name: "Titwala", coordinates: [19.29653, 73.20668], line: "Central Line" },
  { id: 41, name: "Khadavli", coordinates: [19.33694, 73.238497], line: "Central Line" },
  { id: 42, name: "Vasind", coordinates: [19.406987, 73.2676], line: "Central Line" },
  { id: 43, name: "Asangaon", coordinates: [19.442302, 73.305141], line: "Central Line" },
  { id: 44, name: "Atgaon", coordinates: [19.479636, 73.332306], line: "Central Line" },
  { id: 45, name: "Thansit", coordinates: [19.509893, 73.355152], line: "Central Line" },
  { id: 46, name: "Khardi", coordinates: [19.558296, 73.385536], line: "Central Line" },
  { id: 47, name: "Umbermali", coordinates: [19.601004, 73.418147], line: "Central Line" },
  { id: 48, name: "Kasara", coordinates: [19.637286, 73.487802], line: "Central Line" }
];

export const centralLineCoordinates = centralRailwayStations.map(station => station.coordinates);

// Split Central Line into main line and branches
const cloneWithLine = (station, lineLabel) => ({ ...station, line: lineLabel });
const cloneArrayWithLine = (stations, lineLabel) => stations.map((st) => cloneWithLine(st, lineLabel));

const kalyanStation = centralRailwayStations.find((s) => s.id === 26);
const karjatBranchStations = centralRailwayStations.filter((station) => station.id >= 27 && station.id <= 37);
const kasaraBranchStations = centralRailwayStations.filter((station) => station.id >= 38 && station.id <= 48);

// Main Central Line: CSMT to Kalyan Junction
export const centralRailwayMainStations = cloneArrayWithLine(
  centralRailwayStations.filter((station) => station.id <= 26),
  'Central Line'
);

// Karjat Branch: Kalyan Junction to Khopoli (unique line label)
export const centralRailwayKarjatBranchStations = [
  cloneWithLine(kalyanStation, 'Central Line (Karjat Branch)'),
  ...cloneArrayWithLine(karjatBranchStations, 'Central Line (Karjat Branch)'),
];

// Kasara Branch: Kalyan Junction to Kasara (unique line label)
export const centralRailwayKasaraBranchStations = [
  cloneWithLine(kalyanStation, 'Central Line (Kasara Branch)'),
  ...cloneArrayWithLine(kasaraBranchStations, 'Central Line (Kasara Branch)'),
];


export const westernRailwayStations = [
  { id: 1, name: "Churchgate", coordinates: [18.935363057915282, 72.82722881269822], line: "Western Line" },
  { id: 2, name: "Marine Lines", coordinates: [18.946071109030918, 72.82357306356657], line: "Western Line" },
  { id: 3, name: "Charni Road", coordinates: [18.951759482061014, 72.81838425858571], line: "Western Line" },
  { id: 4, name: "Grant Road", coordinates: [18.96319140950526, 72.81614363815623], line: "Western Line" },
  { id: 5, name: "Mumbai Central", coordinates: [18.969604098943638, 72.81938664136356], line: "Western Line" },
  { id: 6, name: "Mahalaxmi", coordinates: [18.981753168573675, 72.82351858668783], line: "Western Line" },
  { id: 7, name: "Lower Parel", coordinates: [18.99641690626466, 72.83078489733963], line: "Western Line" },
  { id: 8, name: "Prabhadevi", coordinates: [19.00757311996626, 72.8359613156898], line: "Western Line" },
  { id: 9, name: "Dadar", coordinates: [19.01909747805727, 72.84398252021086], line: "Western Line" },
  { id: 10, name: "Matunga Road", coordinates: [19.02865054889961, 72.84694256374814], line: "Western Line" },
  { id: 11, name: "Mahim Junction", coordinates: [19.040550977953174, 72.8466599313901], line: "Western Line" },
  { id: 12, name: "Bandra", coordinates: [19.054799686457965, 72.84075963840027], line: "Western Line" },
  { id: 13, name: "Khar Road", coordinates: [19.069713248150027, 72.8401474500673], line: "Western Line" },
  { id: 14, name: "Santacruz", coordinates: [19.08167497445701, 72.84167850711106], line: "Western Line" },
  { id: 15, name: "Vile Parle", coordinates: [19.100450326274842, 72.84396462187485], line: "Western Line" },
  { id: 16, name: "Andheri", coordinates: [19.119927611315827, 72.84662614909493], line: "Western Line" },
  { id: 17, name: "Jogeshwari", coordinates: [19.136345663549232, 72.84843789987326], line: "Western Line" },
  { id: 18, name: "Ram Mandir", coordinates: [19.149191080858312, 72.850455095649], line: "Western Line" },
  { id: 19, name: "Goregaon", coordinates: [19.164666183404655, 72.84931484024429], line: "Western Line" },
  { id: 20, name: "Malad", coordinates: [19.186954106341076, 72.84885208964977], line: "Western Line" },
  { id: 21, name: "Kandivali", coordinates: [19.204155645750212, 72.85174872255156], line: "Western Line" },
  { id: 22, name: "Borivali", coordinates: [19.229003705149776, 72.85731756995587], line: "Western Line" },
  { id: 23, name: "Dahisar", coordinates: [19.249578287441455, 72.85954647680947], line: "Western Line" },
  { id: 24, name: "Mira Road", coordinates: [19.280732488014404, 72.85601039998433], line: "Western Line" },
  { id: 25, name: "Bhayandar", coordinates: [19.311256516008317, 72.85248276044646], line: "Western Line" },
  { id: 26, name: "Naigaon (Western Line)", coordinates: [19.351211505987408, 72.84621650944011], line: "Western Line" },
  { id: 27, name: "Vasai Road", coordinates: [19.38259676224325, 72.83191299919308], line: "Western Line" },
  { id: 28, name: "Nallasopara", coordinates: [19.417655100600044, 72.81888106999534], line: "Western Line" },
  { id: 29, name: "Virar", coordinates: [19.454746074655404, 72.81193085090473], line: "Western Line" },
  { id: 30, name: "Vaitarna", coordinates: [19.508611, 72.848889], line: "Western Line" },
  { id: 31, name: "Saphale", coordinates: [19.577222, 72.824167], line: "Western Line" },
  { id: 32, name: "Kelva Road", coordinates: [19.633889, 72.793333], line: "Western Line" },
  { id: 33, name: "Palghar", coordinates: [19.696389, 72.764444], line: "Western Line" },
  { id: 34, name: "Umroli Road", coordinates: [19.748333, 72.748333], line: "Western Line" },
  { id: 35, name: "Boisar", coordinates: [19.799722, 72.758333], line: "Western Line" },
  { id: 36, name: "Vangaon", coordinates: [19.873333, 72.762222], line: "Western Line" },
  { id: 37, name: "Dahanu Road", coordinates: [19.972222, 72.730556], line: "Western Line" }
];

export const westernLineCoordinates = westernRailwayStations.map(station => station.coordinates);


export const monorailStations = [
  { id: 1, name: "Chembur", coordinates: [19.06124782882847, 72.89751927533082], line: "Mumbai Monorail" },
  { id: 2, name: "VNP and RC Marg Junction", coordinates: [19.05266142568508, 72.89422750277076], line: "Mumbai Monorail" },
  { id: 3, name: "Fertilizer Township", coordinates: [19.043927425427427, 72.89344268394865], line: "Mumbai Monorail" },
  { id: 4, name: "Bharat Petroleum", coordinates: [19.035382086697513, 72.8955177071051], line: "Mumbai Monorail" },
  { id: 5, name: "Mysore Colony", coordinates: [19.027715783962947, 72.8913336454702], line: "Mumbai Monorail" },
  { id: 6, name: "Bhakti Park", coordinates: [19.02900090345829, 72.87763011135779], line: "Mumbai Monorail" },
  { id: 7, name: "Wadala Depot", coordinates: [19.038898154588193, 72.87401702751806], line: "Mumbai Monorail" },
  { id: 8, name: "GTB Nagar", coordinates: [19.036752567565895, 72.8708322995191], line: "Mumbai Monorail" },
  { id: 9, name: "Antop Hill", coordinates: [19.030257364135025, 72.86698004854509], line: "Mumbai Monorail" },
  { id: 10, name: "Acharya Atre Nagar", coordinates: [19.02391285477393, 72.863876073683], line: "Mumbai Monorail" },
  { id: 11, name: "Wadala Bridge", coordinates: [19.017518728502367, 72.8593789515127], line: "Mumbai Monorail" },
  { id: 12, name: "Dadar East", coordinates: [19.016210959734615, 72.85229901529665], line: "Mumbai Monorail" },
  { id: 13, name: "Naigaon (Monorail)", coordinates: [19.009618477921602, 72.84790901468239], line: "Mumbai Monorail" },
  { id: 14, name: "Ambedkar Nagar", coordinates: [19.001625293419455, 72.84419384984331], line: "Mumbai Monorail" },
  { id: 15, name: "Mint Colony", coordinates: [18.994534360868766, 72.84330859192974], line: "Mumbai Monorail" },
  { id: 16, name: "Lower Parel Monorail", coordinates: [18.993203101240166, 72.83149128426928], line: "Mumbai Monorail" },
  { id: 17, name: "Sant Gadge Maharaj Chowk", coordinates: [18.98317248433001, 72.82862242060163], line: "Mumbai Monorail" }
];

export const monorailLineCoordinates = monorailStations.map(station => station.coordinates);



// Harbour Line stations - converted to use 'line' property
export const harbourLineStations = [
  // --- 1. CSMT Trunk (Shared by Panvel & Goregaon Trains) ---
  { id: 1, name: "CSMT", coordinates: [18.94263796396591, 72.83676643972873], line: "Harbour Line" },
  { id: 2, name: "Masjid", coordinates: [18.95184031171876, 72.838427696503], line: "Harbour Line" },
  { id: 3, name: "Sandhurst Road", coordinates: [18.960993669024496, 72.83962266653903], line: "Harbour Line" },
  { id: 4, name: "Dockyard Road", coordinates: [18.967332736038443, 72.84457450480714], line: "Harbour Line" },
  { id: 5, name: "Reay Road", coordinates: [18.976486888497114, 72.84409505843423], line: "Harbour Line" },
  { id: 6, name: "Cotton Green", coordinates: [18.98774874809883, 72.84447966702334], line: "Harbour Line" },
  { id: 7, name: "Sewri", coordinates: [18.99864699158841, 72.85454225816088], line: "Harbour Line" },
  { id: 8, name: "Wadala Road", coordinates: [19.016040411503564, 72.85874328607024], line: "Harbour Line" },

  // --- 2. The Goregaon Branch (Splits from Wadala) ---
  { id: 9, name: "King's Circle", coordinates: [19.032770847157558, 72.85610562208963], line: "Harbour Line" },
  { id: 10, name: "Mahim Junction", coordinates: [19.04084396049123, 72.84718733934908], line: "Harbour Line" },
  { id: 11, name: "Bandra", coordinates: [19.05490557012962, 72.84093939317926], line: "Harbour Line" },
  { id: 12, name: "Khar Road", coordinates: [19.069591326062486, 72.84039181873774], line: "Harbour Line" },
  { id: 13, name: "Santacruz", coordinates: [19.081672455337298, 72.84204078642502], line: "Harbour Line" },
  { id: 14, name: "Vile Parle", coordinates: [19.100418118677318, 72.8443769583962], line: "Harbour Line" },
  { id: 15, name: "Andheri", coordinates: [19.11979827735131, 72.84713345289198], line: "Harbour Line" },
  { id: 16, name: "Jogeshwari", coordinates: [19.136135776480764, 72.8492886559528], line: "Harbour Line " },
  { id: 17, name: "Ram Mandir", coordinates: [19.149413467025397, 72.85081018244077], line: "Harbour Line" },
  { id: 18, name: "Goregaon", coordinates: [19.164624289268186, 72.8498425103888], line: "Harbour Line" },

  // --- 3. The Panvel Branch (Splits from Wadala towards Navi Mumbai) ---
  { id: 19, name: "GTB Nagar", coordinates: [19.036948, 72.864162], line: "Harbour Line" },
  { id: 20, name: "Chunabhatti", coordinates: [19.051390, 72.868337], line: "Harbour Line" },
  { id: 21, name: "Kurla", coordinates: [19.065010, 72.879720], line: "Harbour Line" },
  { id: 22, name: "Tilak Nagar", coordinates: [19.065839, 72.891669], line: "Harbour Line" },
  { id: 23, name: "Chembur", coordinates: [19.062229, 72.901667], line: "Harbour Line" },
  { id: 24, name: "Govandi", coordinates: [19.055556, 72.914723], line: "Harbour Line" },
  { id: 25, name: "Mankhurd", coordinates: [19.048612, 72.931111], line: "Harbour Line" },
  { id: 26, name: "Vashi", coordinates: [19.06375454107168, 72.99786145915697], line: "Harbour Line" },
  { id: 27, name: "Sanpada", coordinates: [19.067028893376097, 73.00951767625428], line: "Harbour Line" },
  { id: 28, name: "Juinagar", coordinates: [19.056303305389328, 73.01777983167999], line: "Harbour Line" },
  { id: 29, name: "Nerul", coordinates: [19.033392189779413, 73.01822258901404], line: "Harbour Line" },
  { id: 30, name: "Seawoods - Darave", coordinates: [19.022088496865933, 73.0186943005196], line: "Harbour Line" },
  { id: 31, name: "CBD Belapur", coordinates: [19.018830228389938, 73.0389569390119], line: "Harbour Line" },
  { id: 32, name: "Kharghar", coordinates: [19.026498284469213, 73.05893403175308], line: "Harbour Line" },
  { id: 33, name: "Mansarovar", coordinates: [19.01654565119284, 73.08070308887353], line: "Harbour Line" },
  { id: 34, name: "Khandeshwar", coordinates: [19.007895257453356, 73.0952267931493], line: "Harbour Line" },
  { id: 35, name: "Panvel", coordinates: [18.990494838161116, 73.12174915888926], line: "Harbour Line" },
];

// Split Harbour Line into main line and branches
// Main Harbour Line: CSMT to Wadala Road
export const harbourLineMainStations = harbourLineStations.filter(
  station => station.id <= 8
);

// Goregaon Branch: Wadala Road to Goregaon
export const harbourLineGoregaonBranchStations = [
  harbourLineStations.find(s => s.id === 8), // Wadala Road
  ...harbourLineStations.filter(
    station => station.id >= 9 && station.id <= 18
  )
];

// Panvel Branch: Wadala Road to Panvel
export const harbourLinePanvelBranchStations = [
  harbourLineStations.find(s => s.id === 8), // Wadala Road
  ...harbourLineStations.filter(
    station => station.id >= 19 && station.id <= 35
  )
];



export const transHarbourLineStations = [
  // Main line: Thane to Turbhe
  { id: 1, name: "Thane", coordinates: [19.186111, 72.975833], line: "TransHarbour Line" },
  { id: 2, name: "Digha Gaon", coordinates: [19.180775137473802, 72.99455875082367], line: "TransHarbour Line" },
  { id: 3, name: "Airoli", coordinates: [19.160502577750268, 72.99880413654341], line: "TransHarbour Line" },
  { id: 4, name: "Rabale", coordinates: [19.136670379211843, 73.00275924139581], line: "TransHarbour Line" },
  { id: 5, name: "Ghansoli", coordinates: [19.11619422119895, 73.00655559929713], line: "TransHarbour Line" },
  //{ id: 6, name: "Kopar Khairane", coordinates: [19.103300, 73.011300], line: "TransHarbour Line" },
  { id: 7, name: "Turbhe", coordinates: [19.075757953074177, 73.01779578549885], line: "TransHarbour Line" },
  
  // Branch 1: Turbhe to Vashi (via Sanpada)
  { id: 8, name: "Sanpada", coordinates: [19.067506143520642, 73.00939471125999], line: "TransHarbour Line (Vashi Branch)" },
  { id: 9, name: "Vashi", coordinates: [19.064365654098886, 72.99771823280405], line: "TransHarbour Line (Vashi Branch)" },
  
  // Branch 2: Turbhe to Panvel (via Juinagar)
  { id: 10, name: "Juinagar", coordinates: [19.055994178610828, 73.0182242718487], line: "TransHarbour Line (Panvel Branch)" },
  { id: 11, name: "Nerul", coordinates: [19.033359480985627, 73.01874225636435], line: "TransHarbour Line (Panvel Branch)" },
  { id: 12, name: "Seawoods - Darave", coordinates: [19.022423715166802, 73.01892215006517], line: "TransHarbour Line (Panvel Branch)" },
  { id: 13, name: "CBD Belapur", coordinates: [19.019313635138214, 73.03846409988192], line: "TransHarbour Line (Panvel Branch)" },
  { id: 14, name: "Kharghar", coordinates: [19.026926549161463, 73.05863194842392], line: "TransHarbour Line (Panvel Branch)" },
  { id: 15, name: "Mansarovar", coordinates: [19.016945282898284, 73.0809558409041], line: "TransHarbour Line (Panvel Branch)" },
  { id: 16, name: "Khandeshwar", coordinates: [19.00822714400866, 73.0954890297155], line: "TransHarbour Line (Panvel Branch)" },
  { id: 17, name: "Panvel", coordinates: [18.99153347415522, 73.12116930096956], line: "TransHarbour Line (Panvel Branch)" },
];

// Split Trans-Harbour Line into main line and branches
// Main Trans-Harbour Line: Thane to Turbhe
export const transHarbourLineMainStations = transHarbourLineStations.filter(
  station => station.id <= 7
);

// Vashi Branch: Turbhe to Vashi (via Sanpada)
export const transHarbourLineVashiBranchStations = [
  // Create Turbhe with branch line name for proper connection
  { ...transHarbourLineStations.find(s => s.id === 7), line: "TransHarbour Line (Vashi Branch)" },
  ...transHarbourLineStations.filter(
    station => station.id >= 8 && station.id <= 9
  )
];

// Panvel Branch: Turbhe to Panvel (via Juinagar)
export const transHarbourLinePanvelBranchStations = [
  // Create Turbhe with branch line name for proper connection
  { ...transHarbourLineStations.find(s => s.id === 7), line: "TransHarbour Line (Panvel Branch)" },
  ...transHarbourLineStations.filter(
    station => station.id >= 10 && station.id <= 17
  )
];

export const naviMumbaiMetroStations = [
  { id: 1, name: "CBD Belapur", coordinates: [19.02052765206316, 73.04007435860285], line: "Navi Mumbai Metro Line 1" },
  { id: 2, name: "RBI Colony", coordinates: [19.02295664195898, 73.04790096631596], line: "Navi Mumbai Metro Line 1" },
  { id: 3, name: "Belpada", coordinates: [19.025437717794016, 73.05526736792919], line: "Navi Mumbai Metro Line 1" },
  { id: 4, name: "Utsav Chowk", coordinates: [19.03273237595444, 73.05911111896712], line: "Navi Mumbai Metro Line 1" },
  { id: 5, name: "Kendriya Vidyalaya Metro Station", coordinates: [19.037682601614367, 73.064169823244], line: "Navi Mumbai Metro Line 1" },
  { id: 6, name: "Kharghar Village", coordinates: [19.04330683583316, 73.07447670681846], line: "Navi Mumbai Metro Line 1" },
  { id: 7, name: "Central Park", coordinates: [19.05345148291211, 73.07595424523777], line: "Navi Mumbai Metro Line 1" },
  { id: 8, name: "Pethpada", coordinates: [19.064017562995115, 73.07746256625946], line: "Navi Mumbai Metro Line 1" },
  { id: 9, name: "Amandoot", coordinates: [19.073747702164383, 73.08182369641783], line: "Navi Mumbai Metro Line 1" },
  { id: 10, name: "Pethali-Taloja", coordinates: [19.074660038308394, 73.09074629595845], line: "Navi Mumbai Metro Line 1" },
  { id: 11, name: "Pendhar", coordinates: [19.072288772564136, 73.09777843179062], line: "Navi Mumbai Metro Line 1" }
];

// Coordinates for drawing the polyline
export const naviMumbaiMetroCoordinates = naviMumbaiMetroStations.map(station => station.coordinates);



// Transit line colors
export const transitColors = {
  blue: '#0066CC',
  red: '#CC0000',
  green: '#00CC00',
  turquoise: '#00C9C9',
  yellow: '#FFCC00',
  purple: '#6600CC',
  orange: '#FF6600',
  brown: '#8B4513',
  black: '#000000',
  darkblue: '#00008B',
  darkgreen: '#006600',
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
    stations: centralRailwayMainStations,
  },
  {
    label: 'Central Line (Karjat Branch)',
    color: transitColors.green,
    stations: centralRailwayKarjatBranchStations,
  },
  {
    label: 'Central Line (Kasara Branch)',
    color: transitColors.green,
    stations: centralRailwayKasaraBranchStations,
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
  {
    label: 'Harbour Line',
    color: transitColors.brown,
    stations: harbourLineMainStations,
  },
  {
    label: 'Harbour Line (Goregaon Branch)',
    color: transitColors.brown,
    stations: harbourLineGoregaonBranchStations,
  },
  {
    label: 'Harbour Line (Panvel Branch)',
    color: transitColors.brown,
    stations: harbourLinePanvelBranchStations,
  },
  {
    label: 'Trans-Harbour Line',
    color: transitColors.darkblue,
    stations: transHarbourLineMainStations,
  },
  {
    label: 'Trans-Harbour Line (Vashi Branch)',
    color: transitColors.darkblue,
    stations: transHarbourLineVashiBranchStations,
  },
  {
    label: 'Trans-Harbour Line (Panvel Branch)',
    color: transitColors.darkblue,
    stations: transHarbourLinePanvelBranchStations,
  },{
    label : 'Navi Mumbai Metor Line',
    color : transitColors.black,
    stations : naviMumbaiMetroStations
  }
];

// Helper: derived coordinates per line
export const transitLineCoordinates = transitLines.map(line => ({
  label: line.label,
  color: line.color,
  coordinates: line.stations.map(s => s.coordinates),
}));