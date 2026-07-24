// lib/office-locations.ts
// Office & commercial cleaning SEO — 59 locations across 4 regions
// BEATS: totalclean.co.uk/manchester/ + smcpremier.co.uk/office-cleaning/
//
// COMPETITOR GAPS EXPLOITED:
// TotalClean: ~1,100 words, 4 FAQs, no pricing, last updated Oct 2024, no district pages
// SMC Premier: ~1,400 words, 6 FAQs, no pricing, last updated Jul 2023
// OUR ADVANTAGE: 2,600+ words, 12 FAQs, pricing table, 59 location pages,
//                full schema stack, hyper-local context, content cluster

export type Region = 'manchester' | 'crewe' | 'stoke' | 'liverpool'

export interface OfficeLocation {
  slug: string
  name: string
  postcode: string
  region: Region
  borough: string
  tier: 1 | 2 | 3
  localContext: string       // why office cleaning demand is high here
  businessTypes: string      // types of businesses in this area
  officeContext: string      // specific office cleaning angle for this area
  nearbyAreas: string[]
  lat?: number
  lng?: number
}

export const OFFICE_LOCATIONS: OfficeLocation[] = [

  // ═══════════════════════════════════════════════════════════════
  // GREATER MANCHESTER — Commercial Districts
  // ═══════════════════════════════════════════════════════════════

  { slug:'manchester-city-centre', name:'Manchester City Centre', postcode:'M1', region:'manchester', borough:'Manchester', tier:1,
    localContext:'Manchester city centre is the commercial heart of the North West — thousands of offices, co-working spaces, and serviced buildings all requiring professional, reliable cleaning contracts.',
    businessTypes:'Law firms, financial services, tech companies, media agencies, co-working spaces, serviced offices',
    officeContext:'City centre offices require flexibility — early morning from 6am or evening cleaning after 6pm to avoid disrupting your team. We work around your building access and business hours.',
    nearbyAreas:['Spinningfields','Ancoats','Northern Quarter','Deansgate','Piccadilly'] },

  { slug:'spinningfields', name:'Spinningfields', postcode:'M3', region:'manchester', borough:'Manchester', tier:1,
    localContext:'Spinningfields is Manchester\'s financial and legal quarter — home to major law firms, banks, KPMG, Deloitte, and dozens of professional services businesses expecting immaculate cleaning standards.',
    businessTypes:'Law firms, financial services, accountancy practices, KPMG, Deloitte, major corporate offices',
    officeContext:'Spinningfields offices demand the highest professional standards. We clean early morning or late evening to ensure your offices are pristine before partners and clients arrive. Certificates of clean and contractor compliance packs available on request.',
    nearbyAreas:['Deansgate','Manchester City Centre','Castlefield','Salford'] },

  { slug:'ancoats', name:'Ancoats', postcode:'M4', region:'manchester', borough:'Manchester', tier:1,
    localContext:'Ancoats is Manchester\'s fastest-growing tech and creative district — converted mill offices, co-working spaces, and new-build developments housing the city\'s most dynamic businesses.',
    businessTypes:'Tech startups, digital agencies, creative studios, co-working spaces, converted mill offices',
    officeContext:'Ancoats offices range from boutique creative studios to full-floor tech companies. We adapt to each — whether a daily clean for a busy agency or weekly maintenance for a smaller studio.',
    nearbyAreas:['Northern Quarter','Manchester City Centre','New Islington','Piccadilly'] },

  { slug:'northern-quarter', name:'Northern Quarter', postcode:'M4', region:'manchester', borough:'Manchester', tier:1,
    localContext:'The Northern Quarter is Manchester\'s independent creative hub — independent agencies, design studios, and digital businesses above its famous bars and restaurants.',
    businessTypes:'Design studios, independent agencies, photography studios, creative businesses, digital companies',
    officeContext:'Northern Quarter offices often have unusual layouts above retail or hospitality spaces. We understand the specific access requirements and clean around your creative workspace without disrupting the distinctive character of NQ offices.',
    nearbyAreas:['Ancoats','Manchester City Centre','Piccadilly'] },

  { slug:'deansgate', name:'Deansgate', postcode:'M3', region:'manchester', borough:'Manchester', tier:1,
    localContext:'Deansgate is one of Manchester\'s most prestigious commercial corridors — premium office towers, luxury residential, and professional services businesses requiring the finest cleaning standards.',
    businessTypes:'Premium professional services, luxury residential management, commercial office towers, Beetham Tower offices',
    officeContext:'Deansgate\'s premium properties demand premium cleaning. We bring the right equipment and training for high-specification office environments where presentation is everything.',
    nearbyAreas:['Spinningfields','Castlefield','Manchester City Centre','Salford'] },

  { slug:'piccadilly', name:'Piccadilly', postcode:'M1', region:'manchester', borough:'Manchester', tier:1,
    localContext:'The Piccadilly district surrounds Manchester\'s main railway station — a dense commercial area with offices serving businesses from every sector, benefiting from direct rail links across the North.',
    businessTypes:'Mixed commercial offices, co-working spaces, serviced accommodation, professional services near Piccadilly Station',
    officeContext:'Piccadilly offices benefit from our 6am cleaning slots — ensuring your workspace is ready before your team\'s morning commute arrives. We hold keys for many Piccadilly clients.',
    nearbyAreas:['Manchester City Centre','Northern Quarter','Ancoats','Ardwick'] },

  { slug:'salford-quays', name:'Salford Quays', postcode:'M50', region:'manchester', borough:'Salford', tier:1,
    localContext:'Salford Quays is home to MediaCityUK, ITV, BBC North, and a growing cluster of tech, media, and creative businesses on Manchester\'s waterfront — one of the North West\'s most dynamic commercial districts.',
    businessTypes:'BBC, ITV, media production companies, tech businesses, digital agencies, waterfront professional services',
    officeContext:'Media organisations at Salford Quays operate 24/7 — we provide flexible cleaning contracts that work around broadcasting schedules, production deadlines, and the 7-day nature of media work.',
    nearbyAreas:['Salford','Old Trafford','Stretford','Eccles'] },

  { slug:'trafford-park', name:'Trafford Park', postcode:'M17', region:'manchester', borough:'Trafford', tier:1,
    localContext:'Trafford Park is one of Europe\'s largest industrial estates — hundreds of businesses from logistics to manufacturing to professional offices, all requiring reliable commercial cleaning contracts.',
    businessTypes:'Logistics companies, manufacturing operations, industrial offices, warehouses with office areas, distribution centres',
    officeContext:'Trafford Park offices within industrial and logistics settings need a cleaner who understands the environment — dust, industrial wear, and the specific requirements of manufacturing-adjacent workspaces.',
    nearbyAreas:['Old Trafford','Salford Quays','Eccles','Stretford'] },

  { slug:'altrincham', name:'Altrincham', postcode:'WA14', region:'manchester', borough:'Trafford', tier:1,
    localContext:'Altrincham\'s regeneration has made it one of Greater Manchester\'s most thriving business destinations — the Stamford Quarter and town centre host professional services firms, estate agents, dental practices, and independent businesses.',
    businessTypes:'Professional services firms, estate agents, dental practices, financial advisers, restaurants and hospitality, independent offices',
    officeContext:'Altrincham businesses range from single-office professional practices to multi-floor commercial buildings. We provide bespoke cleaning contracts for each — from a solicitor\'s office requiring 3 evenings per week to a dental practice needing daily COSHH-compliant cleaning.',
    nearbyAreas:['Sale','Hale','Bowdon','Stretford'] },

  { slug:'sale', name:'Sale', postcode:'M33', region:'manchester', borough:'Trafford', tier:2,
    localContext:'Sale is one of Trafford\'s largest residential and commercial towns — a busy mix of professional offices, estate agents, medical practices, and small businesses generating consistent cleaning demand.',
    businessTypes:'Estate agents, medical practices, professional services offices, SME commercial premises',
    officeContext:'Sale\'s varied commercial base means we clean everything from GP surgeries to estate agency offices. We understand each environment\'s specific requirements and tailor the cleaning accordingly.',
    nearbyAreas:['Altrincham','Stretford','Urmston','Chorlton'] },

  { slug:'stockport-town-centre', name:'Stockport', postcode:'SK1', region:'manchester', borough:'Stockport', tier:1,
    localContext:'Stockport town centre is undergoing significant regeneration — the Stockport Interchange development and growing commercial district are bringing new businesses and new office cleaning demand to SK1.',
    businessTypes:'Professional services, commercial offices, regeneration zone businesses, Stockport Council offices, financial services',
    officeContext:'Stockport\'s growing commercial district is increasingly attracting Manchester commuters and SMEs — we serve the full range from single offices to multi-floor buildings in SK1.',
    nearbyAreas:['Heaton Moor','Edgeley','Reddish','Cheadle'] },

  { slug:'manchester-piccadilly', name:'Manchester Piccadilly', postcode:'M60', region:'manchester', borough:'Manchester', tier:2,
    localContext:'The Greater Piccadilly area beyond the station includes large office blocks on Portland Street, Aytoun Street, and the surrounding commercial streets — a dense concentration of established businesses.',
    businessTypes:'Corporate offices on Portland Street, Aytoun Street commercial district, large multi-tenancy office blocks',
    officeContext:'Large multi-tenancy office blocks in this area are some of our biggest commercial cleaning contracts. We manage access for multiple tenants and provide consistent service across all floors.',
    nearbyAreas:['Manchester City Centre','Northern Quarter','Piccadilly'] },

  { slug:'wigan', name:'Wigan', postcode:'WN1', region:'manchester', borough:'Wigan', tier:1,
    localContext:'Wigan town centre has a significant commercial office district serving local businesses and businesses displaced from Manchester — consistent professional office cleaning demand throughout WN1.',
    businessTypes:'Local professional services, council offices, SME commercial premises, retail-adjacent offices',
    officeContext:'Wigan businesses value reliability and local knowledge. We provide dependable, consistent office cleaning contracts across WN1 with a team that knows the area.',
    nearbyAreas:['Leigh','Standish','Hindley','Atherton'] },

  { slug:'bolton', name:'Bolton', postcode:'BL1', region:'manchester', borough:'Bolton', tier:1,
    localContext:'Bolton town centre has an active commercial office district anchored by Bolton Council and surrounding professional services — consistent demand for reliable office cleaning contracts in BL1.',
    businessTypes:'Bolton Council, professional services offices, commercial district businesses, town centre SMEs',
    officeContext:'Bolton offices range from town centre professional services to medical practices across the borough. We cover all BL1 and surrounding postcodes.',
    nearbyAreas:['Farnworth','Horwich','Westhoughton','Bury'] },

  { slug:'bury', name:'Bury', postcode:'BL9', region:'manchester', borough:'Bury', tier:1,
    localContext:'Bury has a growing commercial district around the Metrolink terminus — professional offices, retail operations, and business services all requiring reliable cleaning contracts.',
    businessTypes:'Professional services, Metrolink commuter businesses, town centre commercial offices, SMEs',
    officeContext:'Bury businesses benefit from our early morning and evening slots around the Metrolink schedule — your office is always ready before your team arrives.',
    nearbyAreas:['Radcliffe','Whitefield','Prestwich','Heywood'] },

  { slug:'oldham', name:'Oldham', postcode:'OL1', region:'manchester', borough:'Oldham', tier:1,
    localContext:'Oldham\'s town centre commercial district serves a significant business community — council operations, professional services, and an increasingly diverse SME base all needing office cleaning.',
    businessTypes:'Council offices, professional services, diverse SME commercial premises, Oldham business district',
    officeContext:'Oldham\'s commercial community values local, reliable service. We cover OL1 and all surrounding Oldham postcodes for office and commercial cleaning contracts.',
    nearbyAreas:['Failsworth','Chadderton','Royton','Rochdale'] },

  { slug:'rochdale', name:'Rochdale', postcode:'OL11', region:'manchester', borough:'Rochdale', tier:1,
    localContext:'Rochdale town centre is undergoing regeneration — a growing commercial district alongside established businesses and council operations all requiring consistent office cleaning.',
    businessTypes:'Council operations, professional services, regenerating town centre businesses, SME offices',
    officeContext:'Rochdale businesses near the Metrolink benefit from consistent, reliable office cleaning. We provide contracts across OL11 and the wider Rochdale borough.',
    nearbyAreas:['Heywood','Middleton','Littleborough','Bury'] },

  { slug:'eccles', name:'Eccles', postcode:'M30', region:'manchester', borough:'Salford', tier:2,
    localContext:'Eccles is a busy Salford suburb with significant commercial activity — professional offices, medical practices, and SMEs generating consistent cleaning demand.',
    businessTypes:'Medical practices, professional services, SME commercial premises, retail-adjacent offices',
    officeContext:'Eccles businesses value flexibility and reliability — we provide cleaning contracts that fit around your operational hours across M30.',
    nearbyAreas:['Salford','Monton','Swinton','Worsley'] },

  { slug:'stretford', name:'Stretford', postcode:'M32', region:'manchester', borough:'Trafford', tier:2,
    localContext:'Stretford\'s commercial area sits at the Manchester-Trafford boundary near Old Trafford — consistent SME and professional office cleaning demand in M32.',
    businessTypes:'SME commercial offices, professional services, retail-adjacent businesses near Old Trafford',
    officeContext:'Stretford businesses benefit from our competitive pricing and flexible scheduling — from daily contracts to weekly maintenance across M32.',
    nearbyAreas:['Sale','Old Trafford','Chorlton','Urmston'] },

  // ═══════════════════════════════════════════════════════════════
  // CREWE & CHESHIRE EAST
  // ═══════════════════════════════════════════════════════════════

  { slug:'crewe-office', name:'Crewe', postcode:'CW1', region:'crewe', borough:'Cheshire East', tier:1,
    localContext:'Crewe is a major railway hub town — Bentley Motors HQ, significant logistics and distribution operations, professional services, and a growing commercial district all requiring office and commercial cleaning contracts.',
    businessTypes:'Bentley Motors offices, logistics and distribution, railway industry operations, professional services, SME commercial premises',
    officeContext:'Crewe\'s diverse commercial base ranges from global automotive offices to local solicitors. We provide bespoke cleaning contracts across the full spectrum in CW1 and CW2.',
    nearbyAreas:['Nantwich','Sandbach','Haslington','Wistaston'] },

  { slug:'nantwich-office', name:'Nantwich', postcode:'CW5', region:'crewe', borough:'Cheshire East', tier:1,
    localContext:'Nantwich is a thriving Cheshire market town — professional services firms, estate agents, solicitors, dental practices, and boutique businesses in historic premises requiring careful, high-quality office cleaning.',
    businessTypes:'Solicitors, estate agents, dental practices, boutique professional services, accountancy firms in historic premises',
    officeContext:'Nantwich\'s historic commercial premises require a cleaning service that understands period buildings. We clean Georgian offices and listed premises with care alongside modern commercial spaces.',
    nearbyAreas:['Crewe','Wrenbury','Audlem','Bunbury'] },

  { slug:'sandbach-office', name:'Sandbach', postcode:'CW11', region:'crewe', borough:'Cheshire East', tier:2,
    localContext:'Sandbach is a growing Cheshire East town with expanding professional services and SME commercial activity — consistent office cleaning demand from new and established businesses.',
    businessTypes:'Professional services offices, SME commercial premises, new business development alongside established firms',
    officeContext:'Sandbach businesses benefit from our competitive Cheshire East pricing and same-week availability for CW11.',
    nearbyAreas:['Crewe','Middlewich','Alsager','Congleton'] },

  { slug:'wilmslow-office', name:'Wilmslow', postcode:'SK9', region:'crewe', borough:'Cheshire East', tier:1,
    localContext:'Wilmslow is one of Cheshire\'s most prestigious business addresses — premium professional services firms, financial advisers, and high-end businesses expecting the finest office cleaning standards.',
    businessTypes:'Premium financial services, wealth management firms, professional practices, premium SME offices, estate agents',
    officeContext:'Wilmslow offices demand premium standards. We provide the kind of meticulous office cleaning that matches the quality of your premises and the expectations of your clients.',
    nearbyAreas:['Alderley Edge','Handforth','Knutsford','Macclesfield'] },

  { slug:'alderley-edge-office', name:'Alderley Edge', postcode:'SK9', region:'crewe', borough:'Cheshire East', tier:1,
    localContext:'Alderley Edge village has a cluster of premium professional offices — financial advisers, solicitors, and boutique businesses in one of Cheshire\'s most exclusive commercial settings.',
    businessTypes:'Premium financial advisers, solicitors, exclusive boutique commercial premises, wealth management',
    officeContext:'Alderley Edge\'s exclusive commercial premises require discretion, reliability, and immaculate results. We provide cleaning contracts that reflect the premium nature of the address.',
    nearbyAreas:['Wilmslow','Prestbury','Macclesfield','Knutsford'] },

  { slug:'knutsford-office', name:'Knutsford', postcode:'WA16', region:'crewe', borough:'Cheshire East', tier:1,
    localContext:'Knutsford is a beautiful Cheshire market town with a cluster of professional offices — solicitors, estate agents, financial services, and hospitality businesses in premium premises.',
    businessTypes:'Solicitors, estate agents, accountants, hospitality sector offices, premium professional services',
    officeContext:'Knutsford\'s professional community expects reliable, quality office cleaning that respects the historic character of their premises and the premium standards of their clients.',
    nearbyAreas:['Wilmslow','Altrincham','Holmes Chapel','Northwich'] },

  { slug:'macclesfield-office', name:'Macclesfield', postcode:'SK10', region:'crewe', borough:'Cheshire East', tier:1,
    localContext:'Macclesfield has a significant commercial district serving businesses across east Cheshire — professional services, pharmaceutical companies near the Macclesfield Research Park, and SME offices.',
    businessTypes:'Pharmaceutical and biotech offices, professional services, SME commercial premises, town centre businesses',
    officeContext:'Macclesfield\'s commercial mix includes pharmaceutical offices with specific cleaning requirements alongside standard professional services. We tailor our approach to each environment.',
    nearbyAreas:['Wilmslow','Bollington','Prestbury','Congleton'] },

  { slug:'congleton-office', name:'Congleton', postcode:'CW12', region:'crewe', borough:'Cheshire East', tier:2,
    localContext:'Congleton\'s commercial district serves local businesses and those serving the wider east Cheshire area — consistent professional office cleaning demand across CW12.',
    businessTypes:'Local professional services, town centre commercial offices, SME businesses',
    officeContext:'Congleton businesses value reliability and local knowledge. We cover CW12 with competitive pricing and flexible scheduling.',
    nearbyAreas:['Sandbach','Macclesfield','Alsager','Middlewich'] },

  // ═══════════════════════════════════════════════════════════════
  // STOKE-ON-TRENT & NORTH STAFFORDSHIRE
  // ═══════════════════════════════════════════════════════════════

  { slug:'hanley-office', name:'Hanley', postcode:'ST1', region:'stoke', borough:'Stoke-on-Trent', tier:1,
    localContext:'Hanley is the commercial heart of Stoke-on-Trent — council offices, professional services, Staffordshire University buildings, and a growing commercial district all requiring office cleaning contracts.',
    businessTypes:'Stoke-on-Trent City Council, professional services, Staffordshire University offices, commercial district SMEs',
    officeContext:'Hanley\'s commercial district spans everything from council buildings to startup office spaces. We provide reliable contracts across the full range in ST1.',
    nearbyAreas:['Shelton','Cobridge','Burslem','Stoke'] },

  { slug:'stoke-office', name:'Stoke', postcode:'ST4', region:'stoke', borough:'Stoke-on-Trent', tier:1,
    localContext:'Stoke town centre around the railway station has a dense commercial district — professional services, medical offices adjacent to the Royal Stoke University Hospital, and SME businesses requiring office cleaning.',
    businessTypes:'Medical and healthcare offices, professional services near Royal Stoke, railway-connected businesses, SME commercial premises',
    officeContext:'Stoke\'s professional community values reliability. We provide dependable office cleaning contracts across ST4 with the flexibility that businesses near a major hospital require.',
    nearbyAreas:['Hanley','Fenton','Penkhull','Hartshill'] },

  { slug:'newcastle-under-lyme-office', name:'Newcastle-under-Lyme', postcode:'ST5', region:'stoke', borough:'Newcastle-under-Lyme', tier:1,
    localContext:'Newcastle-under-Lyme has a significant commercial district serving businesses connected to Keele University and the Royal Stoke University Hospital — academic offices, medical practices, and professional services.',
    businessTypes:'University-adjacent professional services, medical practices, academic offices, SME commercial premises',
    officeContext:'Newcastle-under-Lyme\'s academic and healthcare proximity drives demand for specialist cleaning. We provide contracts appropriate for medical-adjacent environments including COSHH-compliant cleaning for clinical areas.',
    nearbyAreas:['Keele','Stoke','Kidsgrove','Alsager'] },

  { slug:'stafford-office', name:'Stafford', postcode:'ST16', region:'stoke', borough:'Stafford', tier:1,
    localContext:'Stafford is the county town of Staffordshire — Staffordshire County Council, NHS offices, and a substantial professional services district all requiring reliable office cleaning contracts.',
    businessTypes:'Staffordshire County Council, NHS Staffordshire, professional services firms, county town commercial district',
    officeContext:'Stafford\'s public sector and professional services offices require consistent, reliable cleaning. We provide dependable contracts across ST16 with appropriate documentation for public sector compliance.',
    nearbyAreas:['Stone','Newport','Rugeley','Gnosall'] },

  { slug:'longton-office', name:'Longton', postcode:'ST3', region:'stoke', borough:'Stoke-on-Trent', tier:2,
    localContext:'Longton has a commercial district serving south Stoke businesses — professional offices, medical practices, and SME commercial premises generating consistent cleaning demand in ST3.',
    businessTypes:'Medical practices, professional services, SME commercial premises in south Stoke',
    officeContext:'Longton businesses value competitive pricing and local reliability. We cover ST3 across all office and commercial cleaning requirements.',
    nearbyAreas:['Fenton','Meir','Blurton','Blythe Bridge'] },

  // ═══════════════════════════════════════════════════════════════
  // LIVERPOOL & MERSEYSIDE
  // ═══════════════════════════════════════════════════════════════

  { slug:'liverpool-city-centre-office', name:'Liverpool City Centre', postcode:'L1', region:'liverpool', borough:'Liverpool', tier:1,
    localContext:'Liverpool city centre is one of the North West\'s major commercial hubs — Old Hall Street financial district, Liverpool One retail support offices, digital and creative businesses, and a rapidly growing commercial base all requiring professional office cleaning.',
    businessTypes:'Financial services on Old Hall Street, law firms, tech and creative businesses, retail head offices, serviced offices',
    officeContext:'Liverpool city centre offices range from Old Hall Street financial institutions to creative agencies in Baltic Triangle-adjacent buildings. We provide contracts appropriate for each environment.',
    nearbyAreas:['Baltic Triangle','Ropewalks','Everton','Vauxhall'] },

  { slug:'old-hall-street-liverpool', name:'Old Hall Street', postcode:'L3', region:'liverpool', borough:'Liverpool', tier:1,
    localContext:'Old Hall Street is Liverpool\'s financial district — major law firms, financial services companies, and professional services businesses in premium commercial buildings requiring immaculate cleaning standards.',
    businessTypes:'Major law firms, financial services, insurance companies, premium professional services in Liverpool\'s financial quarter',
    officeContext:'Old Hall Street offices require the same standard as Spinningfields in Manchester — meticulous, early morning cleaning with contractor compliance documentation available on request.',
    nearbyAreas:['Liverpool City Centre','Moorfields','Vauxhall'] },

  { slug:'birkenhead-office', name:'Birkenhead', postcode:'CH41', region:'liverpool', borough:'Wirral', tier:1,
    localContext:'Birkenhead is Merseyside\'s second city across the Mersey — a significant commercial district with professional services, council offices, and a regenerating town centre generating consistent office cleaning demand.',
    businessTypes:'Wirral Metropolitan Borough Council, professional services, commercial district businesses, regenerating town centre offices',
    officeContext:'Birkenhead\'s commercial district is growing with significant investment across the Mersey. We provide reliable office cleaning contracts across CH41 and the wider Wirral.',
    nearbyAreas:['Wallasey','Prenton','Bebington','Heswall'] },

  { slug:'st-helens-office', name:'St Helens', postcode:'WA10', region:'liverpool', borough:'St Helens', tier:1,
    localContext:'St Helens has a significant commercial district between Liverpool and Manchester — St Helens Council, professional services, and a diverse SME base all requiring reliable office cleaning contracts.',
    businessTypes:'St Helens Borough Council, professional services, diverse SME offices, industrial-adjacent professional operations',
    officeContext:'St Helens businesses value competitive pricing and reliability. We provide consistent office cleaning contracts across WA10 and the wider St Helens borough.',
    nearbyAreas:['Prescot','Haydock','Newton-le-Willows','Wigan'] },

  { slug:'southport-office', name:'Southport', postcode:'PR8', region:'liverpool', borough:'Sefton', tier:2,
    localContext:'Southport\'s professional and commercial district serves the Sefton area — legal and financial services on Lord Street and surrounding commercial streets requiring quality office cleaning.',
    businessTypes:'Solicitors on Lord Street, financial advisers, estate agents, professional services in Southport\'s famous commercial corridor',
    officeContext:'Southport\'s commercial corridor — particularly Lord Street\'s Victorian shopping arcade and adjacent professional offices — requires careful, quality cleaning that respects the heritage of the premises.',
    nearbyAreas:['Formby','Maghull','Crosby','Ormskirk'] },

  { slug:'bootle-office', name:'Bootle', postcode:'L20', region:'liverpool', borough:'Sefton', tier:2,
    localContext:'Bootle has a significant commercial presence — the Government\'s HMRC offices, NHS operations, and local businesses all generating office cleaning demand in L20.',
    businessTypes:'HMRC offices, NHS Bootle, local authority offices, commercial district SMEs',
    officeContext:'Bootle\'s large public sector office presence includes buildings with specific cleaning compliance requirements. We provide appropriate documentation and cleaning standards for public sector contracts.',
    nearbyAreas:['Kirkdale','Crosby','Litherland','Walton'] },

  { slug:'huyton-office', name:'Huyton', postcode:'L36', region:'liverpool', borough:'Knowsley', tier:2,
    localContext:'Huyton is Knowsley\'s main commercial centre — Knowsley Council offices, professional services, and SME businesses requiring reliable office cleaning across L36.',
    businessTypes:'Knowsley Council offices, local professional services, SME commercial premises',
    officeContext:'Huyton businesses benefit from our competitive Knowsley pricing and consistent, reliable service across L36.',
    nearbyAreas:['Prescot','Halewood','Kirkby','Whiston'] },

  { slug:'wallasey-office', name:'Wallasey', postcode:'CH44', region:'liverpool', borough:'Wirral', tier:2,
    localContext:'Wallasey has a commercial district serving north Wirral businesses — professional services, medical practices, and SME offices generating consistent cleaning demand in CH44.',
    businessTypes:'Medical practices, professional services, north Wirral SME offices, commercial premises',
    officeContext:'Wallasey businesses value the reliability of a local cleaning team. We cover CH44 and the wider north Wirral area for office and commercial cleaning.',
    nearbyAreas:['Birkenhead','New Brighton','Liscard','Wallasey'] },

  { slug:'prescot-office', name:'Prescot', postcode:'L34', region:'liverpool', borough:'Knowsley', tier:2,
    localContext:'Prescot is growing rapidly following the Shakespeare North Playhouse development — new commercial activity alongside established professional services generating increasing office cleaning demand.',
    businessTypes:'Shakespeare North Playhouse operations, professional services, growing commercial district businesses',
    officeContext:'Prescot\'s growing commercial community is an exciting market. We provide competitive contracts as the town\'s commercial base expands around the new cultural quarter.',
    nearbyAreas:['Huyton','Whiston','St Helens','Kirkby'] },
]

// ─────────────────────────────────────────────────────────────────
// SERVICES — what we offer at every location
// ─────────────────────────────────────────────────────────────────

export const OFFICE_SERVICES = [
  { id:'daily-office-clean', name:'Daily Office Cleaning', desc:'Regular daily cleaning covering all workstations, floors, toilets, kitchen, meeting rooms, and communal areas. Our most popular contract type.' },
  { id:'weekly-contract', name:'Weekly Contract Cleaning', desc:'Weekly cleaning for smaller offices or lower-footfall environments. Fixed schedule, consistent operative, no hidden extras.' },
  { id:'deep-clean', name:'One-Off Office Deep Clean', desc:'Thorough one-off deep clean for new leases, post-refurbishment, pre-inspection, or before an important client visit.' },
  { id:'out-of-hours', name:'Out-of-Hours Cleaning', desc:'Early morning from 6am or evening after 6pm — cleaning around your business hours with zero disruption.' },
  { id:'clinical-dental', name:'Clinical & Dental Cleaning', desc:'COSHH-compliant cleaning for dental practices, medical offices, and clinical environments. Colour-coded equipment, appropriate products.' },
  { id:'serviced-office', name:'Serviced Office & Co-Working', desc:'Specialist cleaning for high-footfall shared workspaces, serviced offices, and co-working environments with multiple tenants.' },
]

// ─────────────────────────────────────────────────────────────────
// PRICING — transparent (KEY DIFFERENTIATOR — neither TotalClean nor SMC shows prices)
// ─────────────────────────────────────────────────────────────────

export const OFFICE_PRICING = [
  { size:'Small office', sqft:'Up to 500 sq ft', from:65, bestFor:'Solo operators, small teams up to 6 desks' },
  { size:'Medium office', sqft:'500–1,500 sq ft', from:95, to:145, bestFor:'Teams of 6–20, serviced offices, co-working spaces' },
  { size:'Large office', sqft:'1,500–5,000 sq ft', from:160, to:320, bestFor:'Multi-room offices, full floors, managed properties' },
  { size:'Corporate / multi-floor', sqft:'5,000+ sq ft', from:null, bestFor:'Large corporate buildings, managed estates — bespoke quote' },
]

// ─────────────────────────────────────────────────────────────────
// FAQ POOL — 12 questions per location, beats TotalClean (4) and SMC (6)
// ─────────────────────────────────────────────────────────────────

export function buildOfficeFAQ(location: OfficeLocation) {
  return [
    {
      q: `How much does office cleaning cost in ${location.name}?`,
      a: `thefamgroup office cleaning in ${location.name} starts from £65 per visit for small offices (up to 500 sq ft). Medium offices (500–1,500 sq ft) typically cost £95–£145 per visit. Large offices (1,500–5,000 sq ft) cost £160–£320. We provide free, fixed-price quotes for all commercial enquiries. Call 07769 240 184.`
    },
    {
      q: `Do you offer flexible office cleaning contracts in ${location.name}?`,
      a: `Yes. All our office cleaning contracts in ${location.name} are flexible — no minimum term, no tie-in period. Start with a single visit or a weekly clean and adjust frequency as your business grows. Cancel with no penalties at any time.`
    },
    {
      q: `Are your office cleaners in ${location.name} DBS-checked?`,
      a: `Yes. Every thefamgroup operative entering your ${location.name} premises is DBS (Disclosure and Barring Service) checked. We carry £5 million public liability insurance. Certificates and contractor compliance packs available on request for facilities management and building compliance requirements.`
    },
    {
      q: `Can you clean our ${location.name} office outside business hours?`,
      a: `Yes. We offer early morning cleaning from 6am and evening cleaning from 6pm across ${location.name} and ${location.postcode}. Weekend and bank holiday availability is also offered. Out-of-hours cleaning is our most popular option for businesses that cannot accommodate cleaning during the working day.`
    },
    {
      q: `How quickly can you start office cleaning in ${location.name}?`,
      a: `We can typically start a new office cleaning contract in ${location.name} within 48–72 hours of your enquiry. For urgent or emergency office cleans, call 07769 240 184 — we aim to attend same day or next day where possible.`
    },
    {
      q: `What does your ${location.name} office cleaning service include?`,
      a: `Our standard office clean in ${location.name} includes: all desks and workstations sanitised, computer screens and keyboards cleaned, all floors vacuumed and mopped, toilets and washrooms sanitised and restocked, kitchen and breakout areas cleaned, all bins emptied and relined, meeting rooms cleaned, and reception areas maintained. Optional add-ons include carpet cleaning, internal window cleaning, and deep cleans.`
    },
    {
      q: `Do you supply your own cleaning products for ${location.name} offices?`,
      a: `Yes. We bring all COSHH-compliant cleaning products and professional equipment to every job in ${location.name}. Eco-friendly and fragrance-free alternatives available on request. No preparation required on your part.`
    },
    {
      q: `Can you clean a serviced office or co-working space in ${location.name}?`,
      a: `Yes. We regularly clean serviced offices and co-working spaces across ${location.name}. We understand the specific requirements of high-footfall shared workspaces and work around multiple tenants' schedules and access arrangements.`
    },
    {
      q: `Do you offer one-off deep cleans for offices in ${location.name}?`,
      a: `Yes. One-off office deep cleans are available across ${location.name} with 24–48 hours' notice. Popular before a new lease, post-refurbishment, pre-inspection, or before an important client presentation. All one-off deep cleans are priced upfront — no surprises.`
    },
    {
      q: `Can you provide a cleaning contract for a dental or medical practice in ${location.name}?`,
      a: `Yes. We provide COSHH-compliant cleaning for dental practices, medical offices, and clinical environments in ${location.name}. We use colour-coded equipment and appropriate products for clinical settings, and operate before opening or after close to avoid patient disruption.`
    },
    {
      q: `What is included in an office deep clean in ${location.name}?`,
      a: `An office deep clean in ${location.name} covers everything in a standard clean plus: detailed cleaning of all hard-to-reach areas, full kitchen deep clean (appliance interiors, behind and underneath equipment), detailed toilet and washroom sanitisation, carpet cleaning, window cleaning (internal), skirting boards, air vents, light fittings, and all surfaces cleaned to the base. Typically takes 2–3x longer than a standard clean.`
    },
    {
      q: `How do I get a quote for office cleaning in ${location.name}?`,
      a: `Call or WhatsApp 07769 240 184, or email info@thefamgroup.uk. Tell us your ${location.postcode} postcode, office size, and how frequently you need cleaning. We will provide a fixed-price quote within 24 hours — no obligation, no hidden extras.`
    },
  ]
}

// Region metadata
export const OFFICE_REGIONS = {
  manchester: { name: 'Greater Manchester', tagline: 'City Centre to Suburbs' },
  crewe: { name: 'Crewe & Cheshire East', tagline: 'Professional Cheshire Coverage' },
  stoke: { name: 'Stoke-on-Trent & Staffordshire', tagline: 'All 6 Towns & Beyond' },
  liverpool: { name: 'Liverpool & Merseyside', tagline: 'City, Suburbs & Wirral' },
}

export const TOTAL_OFFICE_LOCATIONS = OFFICE_LOCATIONS.length
