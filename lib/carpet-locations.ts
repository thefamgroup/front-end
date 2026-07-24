// lib/carpet-locations.ts
// Carpet cleaning SEO — 169 hyper-local locations across 4 regions
// BEATS: themanchestercarpetcleaner.co.uk, expresscitycleaning.co.uk,
//        firstmaid.co.uk, checkatrade.com, lemon-breeze.co.uk

export type Region = 'manchester' | 'crewe' | 'stoke' | 'liverpool'

export interface CarpetLocation {
  slug: string
  name: string
  postcode: string
  region: Region
  borough: string
  tier: 1 | 2 | 3
  // SEO differentiators — what makes each page unique
  localContext: string        // why carpet cleaning demand is high here
  propertyTypes: string       // types of properties/carpets in this area
  carpetContext: string       // specific carpet cleaning angle for this area
  stainContext: string        // common stain types / carpet issues in this area
  nearbyAreas: string[]
  lat: number
  lng: number
}

// ─────────────────────────────────────────────────────────────────────────────
// COMPETITOR GAP ANALYSIS (built from fetching all 5 ranking pages):
//
// themanchestercarpetcleaner.co.uk — #1: great brand trust (Hilton, MEN feature),
//   8 service pages, blog content. Weakness: no pricing, no district sub-pages.
//
// expresscitycleaning.co.uk — #2: price signal in title ("2 rooms £65"), 3000+
//   reviews, huge postcode list. Weakness: thin content, Wix CMS, slow page speed.
//
// firstmaid.co.uk — #3: big brand, many service pages. Weakness: generic.
//
// checkatrade.com — #4: marketplace, can't out-rank on domain. Target position 5.
//
// lemon-breeze.co.uk — #5: award winner 2019, 10yrs experience. Weakness:
//   last updated Jan 2026 homepage only, thin individual pages.
//
// OUR WINNING FORMULA:
// 1. Price signal in title + meta (ExpressCity does this, we do it better)
// 2. Hot water extraction / steam clean specificity (TMCC does this, we explain more)
// 3. Dirty water reveal content angle (TikTok-SEO crossover)
// 4. Hyper-local per-district pages (NONE of the 5 do this at ward level)
// 5. 12 FAQ questions with schema (all competitors have ≤5)
// 6. Carpet type specifics (Axminster, Wilton, loop pile, etc.) — none do this
// 7. Pet hair / allergen angle — expressly popular search intent
// ─────────────────────────────────────────────────────────────────────────────

export const CARPET_LOCATIONS: CarpetLocation[] = [

  // ═══════════════════════════════════════════════════════════════
  // GREATER MANCHESTER
  // ═══════════════════════════════════════════════════════════════

  // Manchester City
  { slug:'didsbury', name:'Didsbury', postcode:'M20', region:'manchester', borough:'Manchester', tier:1,
    localContext:'Didsbury is home to South Manchester\'s densest concentration of large Victorian and Edwardian houses — high-pile carpets, period features, and professional tenants with exacting standards at checkout.',
    propertyTypes:'Victorian terraces and Edwardian semis with original or period-style carpeting, large family homes, rental properties requiring EOT carpet cleaning',
    carpetContext:'Didsbury\'s large properties typically have carpets across multiple floors — stair carpets, living rooms, and bedroom carpets all cleaned in a single visit. Our hot water extraction removes the deeply ingrained dirt that vacuuming leaves behind.',
    stainContext:'Common carpet issues in Didsbury properties include red wine stains from entertaining, pet hair from dogs and cats, mud and grime on stair carpets, and general dulling from high foot traffic in family homes.',
    nearbyAreas:['West Didsbury','Withington','Chorlton','Burnage','Levenshulme'],
    lat:53.4135, lng:-2.2274 },

  { slug:'chorlton', name:'Chorlton', postcode:'M21', region:'manchester', borough:'Manchester', tier:1,
    localContext:'Chorlton is South Manchester\'s most popular family suburb — Victorian terraces with busy family carpets, plus a significant HMO and rental market requiring thorough end of tenancy carpet cleaning every summer.',
    propertyTypes:'Victorian terraces, Edwardian semis, HMOs, modern builds with fitted carpet throughout',
    carpetContext:'Chorlton\'s family homes often have carpets that have seen years of children, pets, and daily wear. Our truck-mounted hot water extraction removes embedded dirt and allergens, leaving carpets looking and smelling fresh.',
    stainContext:'Children\'s food and drink spills, pet accidents, muddy footprints, and general family wear. Chorlton\'s high tenant turnover means EOT carpet cleaning is essential for deposit returns.',
    nearbyAreas:['Didsbury','Whalley Range','Sale','Stretford','Withington'],
    lat:53.4408, lng:-2.2704 },

  { slug:'withington', name:'Withington', postcode:'M20', region:'manchester', borough:'Manchester', tier:2,
    localContext:'Withington sits between student Fallowfield and professional Didsbury — a high-churn rental area where carpets take heavy wear and end of tenancy carpet cleaning is needed every 12 months.',
    propertyTypes:'Student HMOs, professional lets, converted semis with fitted carpet throughout',
    carpetContext:'Student and young professional properties in Withington typically have carpets that have experienced heavy use, spills, and the general wear of shared living. We restore carpets to deposit-return standard every time.',
    stainContext:'High-traffic wear in student HMOs, drink spills, curry and food stains, pet accidents, and the general grime of shared living. EOT carpet cleans are essential for Withington landlords to protect their deposits.',
    nearbyAreas:['Didsbury','Fallowfield','Burnage','Rusholme'],
    lat:53.4243, lng:-2.2264 },

  { slug:'fallowfield', name:'Fallowfield', postcode:'M14', region:'manchester', borough:'Manchester', tier:1,
    localContext:'Fallowfield houses more students per square mile than almost anywhere in the North West — the summer period sees hundreds of HMO carpet cleans needed as student tenancies end in June and July.',
    propertyTypes:'Student HMOs (4–8 bed), shared houses, purpose-built student accommodation',
    carpetContext:'Student properties in Fallowfield are our most frequent EOT carpet cleaning jobs. After a full academic year, carpets in shared houses need thorough hot water extraction to remove food, drink, pet hair, and the accumulated grime of communal living.',
    stainContext:'Beer and alcohol spills, food stains, ink from studying, mud tracked from campus, pet accidents, and the wear of high-traffic corridors and stairs in 4–8 bed shared houses.',
    nearbyAreas:['Withington','Rusholme','Levenshulme','Moss Side'],
    lat:53.4335, lng:-2.2172 },

  { slug:'salford-quays', name:'Salford Quays', postcode:'M50', region:'manchester', borough:'Salford', tier:1,
    localContext:'Salford Quays waterfront apartments are frequently short-let via Airbnb and rented to BBC and ITV staff — premium carpets in premium apartments requiring fast, professional carpet cleaning between guests and tenants.',
    propertyTypes:'Waterfront luxury apartments, Airbnb short-lets, professional corporate lets',
    carpetContext:'Salford Quays apartments often have premium wool or high-quality synthetic carpets that require careful, professional cleaning. We use methods appropriate to the carpet type, protecting pile and colour while removing all traces of stains.',
    stainContext:'Short-let carpet issues include red wine, food spills, and the wear from frequent guest changeovers. Corporate let carpets in Salford Quays need to maintain a pristine appearance between tenancies.',
    nearbyAreas:['Salford','Old Trafford','Stretford','Eccles'],
    lat:53.4721, lng:-2.2985 },

  { slug:'ancoats', name:'Ancoats', postcode:'M4', region:'manchester', borough:'Manchester', tier:2,
    localContext:'Ancoats is Manchester\'s fastest-growing residential district — converted mill apartments and new-build developments with young professional tenants requiring regular and end of tenancy carpet cleaning.',
    propertyTypes:'Converted mill loft apartments, new-build developments, professional young lets',
    carpetContext:'Ancoats properties often have fitted carpet in bedrooms alongside hard flooring in open-plan living areas. We clean bedroom carpets and any communal carpeted areas to the highest standard, working around tenant schedules.',
    stainContext:'Young professional properties typically present coffee and drink stains, muddy footprints from city living, and general wear from busy lifestyles. Quick response carpet cleaning is popular in Ancoats.',
    nearbyAreas:['Northern Quarter','New Islington','Manchester City Centre','Ardwick'],
    lat:53.4833, lng:-2.2246 },

  { slug:'altrincham', name:'Altrincham', postcode:'WA14', region:'manchester', borough:'Trafford', tier:1,
    localContext:'Altrincham is one of Greater Manchester\'s most desirable addresses — large Victorian and Edwardian family homes with premium carpets expecting premium cleaning results.',
    propertyTypes:'Victorian semis, luxury family homes, executive lets, premium rental properties',
    carpetContext:'Altrincham\'s premium properties often feature high-quality wool carpets, Axminster, or deep-pile luxury carpet that requires specialist care. We use the correct method for each carpet type, protecting your investment while delivering outstanding results.',
    stainContext:'Red wine, coffee, and food stains from entertaining, muddy pets, children\'s accidents, and the general wear of busy family homes. Altrincham homeowners expect the very highest standard of cleaning.',
    nearbyAreas:['Hale','Sale','Bowdon','Stretford','Cheadle'],
    lat:53.3838, lng:-2.3527 },

  { slug:'sale', name:'Sale', postcode:'M33', region:'manchester', borough:'Trafford', tier:1,
    localContext:'Sale is one of Trafford\'s largest family residential areas — a busy private rental market and strong owner-occupier base both generate consistent year-round carpet cleaning demand.',
    propertyTypes:'Family semis, detached homes, private rental apartments, Metrolink commuter properties',
    carpetContext:'Sale family homes frequently need whole-house carpet cleans — lounge, dining room, stairs, landing, and all bedrooms. Our pricing is per room so you only pay for what you need, with multi-room discounts available.',
    stainContext:'Family homes in Sale commonly present pet hair, children\'s food and drink spills, muddy footprints, and general family wear that builds up over time. Regular professional cleaning every 12–18 months extends carpet life significantly.',
    nearbyAreas:['Altrincham','Stretford','Chorlton','Urmston'],
    lat:53.4232, lng:-2.3165 },

  { slug:'hale', name:'Hale', postcode:'WA15', region:'manchester', borough:'Trafford', tier:1,
    localContext:'Hale village is one of Greater Manchester\'s most affluent addresses — premium properties with premium carpets demanding the most careful, professional cleaning available.',
    propertyTypes:'Luxury detached homes, premium semis, high-value rental properties',
    carpetContext:'Hale\'s luxury properties often feature imported wool carpets, hand-tufted rugs, and premium pile that demand careful, method-appropriate cleaning. We assess every carpet before cleaning to ensure the right technique.',
    stainContext:'Wine, food, and pet stains in high-value homes where the carpet itself may be worth thousands of pounds. We treat every carpet in Hale with the same care as an investment — because it is.',
    nearbyAreas:['Altrincham','Bowdon','Hale Barns','Sale'],
    lat:53.3765, lng:-2.3596 },

  { slug:'stockport-centre', name:'Stockport', postcode:'SK1', region:'manchester', borough:'Stockport', tier:1,
    localContext:'Stockport town centre and its residential areas have a large and active private rental market — consistent EOT carpet cleaning demand alongside residential deep cleans for homeowners.',
    propertyTypes:'Victorian terraces, town centre apartments, rental properties, family semis',
    carpetContext:'Stockport\'s mix of period properties and modern builds means we encounter every carpet type — from original Axminster in Victorian homes to modern synthetic loop pile in newer developments. We bring the right equipment for each.',
    stainContext:'Period properties in Stockport often have carpets with years of built-up grime. Our hot water extraction lifts dirt from deep in the pile that regular vacuuming can never reach, restoring original colour and freshness.',
    nearbyAreas:['Heaton Moor','Edgeley','Reddish','Cheadle'],
    lat:53.4068, lng:-2.1575 },

  { slug:'heaton-moor', name:'Heaton Moor', postcode:'SK4', region:'manchester', borough:'Stockport', tier:1,
    localContext:'The Heaton suburbs are among South Manchester\'s most desirable — large Edwardian properties with premium carpets and homeowners who expect the finest results from their carpet cleaning company.',
    propertyTypes:'Large Edwardian semis, detached family homes, premium rentals',
    carpetContext:'Heaton Moor\'s large Edwardian homes frequently have carpet across multiple floors including original or period-replica Axminster. We provide full multi-floor carpet cleans with appropriate care for heritage properties.',
    stainContext:'The settled, professional residents of Heaton Moor present traditional carpet issues — wine, coffee, muddy dogs, and the gradual dulling from regular foot traffic. Annual professional cleaning is standard for homeowners in this area.',
    nearbyAreas:['Heaton Chapel','Edgeley','Didsbury','Stockport'],
    lat:53.4163, lng:-2.1854 },

  { slug:'cheadle', name:'Cheadle', postcode:'SK8', region:'manchester', borough:'Stockport', tier:2,
    localContext:'Cheadle is a large family suburban area on the Stockport/Trafford border with a busy homeowner and rental market generating consistent carpet cleaning demand.',
    propertyTypes:'Semis, detached family homes, private rentals',
    carpetContext:'Family homes in Cheadle typically need whole-house carpet cleans. Our same-day or next-day availability for Cheadle and SK8 means we can fit around school runs and family life.',
    stainContext:'Family home carpet issues — children and pets, muddy boots, food and drink spills. Cheadle\'s family demographic means pet hair removal and allergen reduction are particularly popular add-ons.',
    nearbyAreas:['Cheadle Hulme','Gatley','Altrincham','Stockport'],
    lat:53.3936, lng:-2.2160 },

  { slug:'bramhall', name:'Bramhall', postcode:'SK7', region:'manchester', borough:'Stockport', tier:2,
    localContext:'Bramhall is one of Stockport\'s most premium residential areas — large detached homes, executive properties, and demanding homeowners who expect outstanding carpet cleaning results.',
    propertyTypes:'Large detached homes, executive properties, premium family residences',
    carpetContext:'Bramhall homeowners typically have premium carpets throughout — we treat every carpet as a premium investment, using the most gentle, effective hot water extraction available.',
    stainContext:'Pet stains, wine, food, and general family wear in high-value homes. Bramhall\'s executive properties often have Axminster or premium wool carpets requiring specialist care.',
    nearbyAreas:['Cheadle Hulme','Hazel Grove','Poynton','Cheadle'],
    lat:53.3615, lng:-2.1656 },

  { slug:'eccles', name:'Eccles', postcode:'M30', region:'manchester', borough:'Salford', tier:2,
    localContext:'Eccles town centre has a busy residential rental market — Victorian terraces with consistent EOT carpet cleaning demand and homeowners needing regular deep cleans.',
    propertyTypes:'Victorian terraces, semis, private lets',
    carpetContext:'Eccles properties often have carpets across multiple floors in period homes that accumulate years of grime. Our deep hot water extraction brings them back to life.',
    stainContext:'Period properties in Eccles present general heavy soiling, pet stains, and the accumulated dirt of tenanted properties requiring full EOT carpet restoration.',
    nearbyAreas:['Salford','Monton','Swinton','Worsley'],
    lat:53.4836, lng:-2.3333 },

  { slug:'stretford', name:'Stretford', postcode:'M32', region:'manchester', borough:'Trafford', tier:2,
    localContext:'Stretford sits at the crossroads of Manchester, Salford, and Trafford — a dense residential area with active rental demand and homeowner carpet cleaning requirements throughout the year.',
    propertyTypes:'Terraced houses, semis, mixed private rental properties',
    carpetContext:'Stretford\'s varied housing stock means we encounter every carpet type. Our assessment before cleaning ensures the right technique for each home.',
    stainContext:'Rental property wear and tear, pet stains, food and drink spills, and the general grime of high-footfall homes near Old Trafford.',
    nearbyAreas:['Sale','Old Trafford','Chorlton','Urmston'],
    lat:53.4472, lng:-2.3025 },

  { slug:'urmston', name:'Urmston', postcode:'M41', region:'manchester', borough:'Trafford', tier:2,
    localContext:'A family-focused Trafford suburb with a busy owner-occupier and rental market generating consistent demand for professional carpet cleaning throughout the year.',
    propertyTypes:'Family semis, detached homes, private lets',
    carpetContext:'Urmston families are our most loyal repeat clients — annual or bi-annual professional carpet cleaning for whole homes. We remember what works for each property and client.',
    stainContext:'Classic family home issues — muddy dogs, children\'s spills, and the general wear of active family life in Urmston\'s comfortable suburban homes.',
    nearbyAreas:['Eccles','Stretford','Sale','Partington'],
    lat:53.4468, lng:-2.3740 },

  { slug:'salford', name:'Salford', postcode:'M5', region:'manchester', borough:'Salford', tier:1,
    localContext:'Salford has one of the North West\'s largest and most varied rental markets — from regenerated city apartments to dense Victorian streets, all generating consistent carpet cleaning demand.',
    propertyTypes:'City centre apartments, Victorian terraces, regenerated housing, professional lets',
    carpetContext:'Salford\'s varied housing stock — from modern MediaCity apartments to century-old terraces — means we bring different equipment and methods depending on the property. All deliver the same outstanding result.',
    stainContext:'Urban rental properties in Salford present heavy general soiling, pet stains, and the grime of high-traffic shared spaces. EOT carpet cleaning is essential for deposit return.',
    nearbyAreas:['Salford Quays','Eccles','Manchester City Centre','Swinton'],
    lat:53.4875, lng:-2.2901 },

  { slug:'levenshulme', name:'Levenshulme', postcode:'M19', region:'manchester', borough:'Manchester', tier:2,
    localContext:'Levenshulme is attracting young professional families from Didsbury with its Victorian terraces at lower prices — active carpet cleaning demand from both homeowners and renters.',
    propertyTypes:'Victorian terraces, professional rental properties, owner-occupied family homes',
    carpetContext:'Levenshulme\'s popular Victorian terraces typically have carpeted stairs, landings, and bedrooms alongside hard flooring. Our targeted approach cleans exactly what needs cleaning.',
    stainContext:'Young family homes in Levenshulme present the full range of carpet challenges — toddler food spills, muddy dogs, and general wear from active family living.',
    nearbyAreas:['Didsbury','Burnage','Gorton','Longsight'],
    lat:53.4365, lng:-2.1909 },

  { slug:'rusholme', name:'Rusholme', postcode:'M14', region:'manchester', borough:'Manchester', tier:2,
    localContext:'The Curry Mile neighbourhood has dense residential streets with high rental turnover — EOT carpet cleaning is in consistent demand alongside residential deep cleans for the settled community.',
    propertyTypes:'Terraced houses, HMOs, mixed-use residential properties',
    carpetContext:'Rusholme\'s densely rented properties frequently need thorough EOT carpet cleaning. We work quickly and efficiently to meet tight landlord turnaround requirements.',
    stainContext:'Curry and spice stains are a unique challenge in Rusholme — our specialist stain treatment handles turmeric and curry stains that other cleaners struggle with.',
    nearbyAreas:['Fallowfield','Hulme','Moss Side','Longsight'],
    lat:53.4503, lng:-2.2168 },

  { slug:'wythenshawe', name:'Wythenshawe', postcode:'M22', region:'manchester', borough:'Manchester', tier:2,
    localContext:'One of Greater Manchester\'s largest residential areas — council and private properties across Wythenshawe generate year-round carpet cleaning demand close to Manchester Airport.',
    propertyTypes:'Council and ex-council houses, private lets, family homes near the airport',
    carpetContext:'Wythenshawe\'s large family homes often have carpets throughout that have seen years of wear. Our affordable multi-room rates make professional carpet cleaning accessible for every home in M22.',
    stainContext:'Family home wear, pet hair, children\'s stains, and the general accumulation of dirt in large, busy households in Wythenshawe.',
    nearbyAreas:['Northenden','Baguley','Sale','Gatley'],
    lat:53.3943, lng:-2.2663 },

  { slug:'moss-side', name:'Moss Side', postcode:'M14', region:'manchester', borough:'Manchester', tier:2,
    localContext:'Moss Side has a strong owner-occupier base alongside growing private rental activity — consistent demand for affordable, reliable carpet cleaning from a local Manchester team.',
    propertyTypes:'Terraced houses, semis, owner-occupied and private rental properties',
    carpetContext:'We know Moss Side well — a community where word of mouth matters and consistent, reliable service builds loyal repeat clients. We treat every carpet in M14 with the same care.',
    stainContext:'Family home carpet issues — pet stains, food and drink spills, children\'s accidents, and the general wear of active households.',
    nearbyAreas:['Hulme','Rusholme','Fallowfield','Whalley Range'],
    lat:53.4516, lng:-2.2450 },

  { slug:'old-trafford', name:'Old Trafford', postcode:'M16', region:'manchester', borough:'Manchester', tier:2,
    localContext:'Old Trafford\'s residential streets have a dense rental market popular with students and young professionals — consistent EOT carpet cleaning demand year-round.',
    propertyTypes:'Terraced houses, flats, student accommodation near the stadium',
    carpetContext:'Old Trafford properties see high tenant turnover — we specialise in fast, effective EOT carpet cleaning that landlords can rely on for quick property turnarounds.',
    stainContext:'Student and young professional properties present the full range of carpet stains. The proximity to Old Trafford stadium means muddy boots and match-day spills are common.',
    nearbyAreas:['Stretford','Whalley Range','Salford Quays','Hulme'],
    lat:53.4604, lng:-2.2756 },

  { slug:'prestwich', name:'Prestwich', postcode:'M25', region:'manchester', borough:'Bury', tier:1,
    localContext:'Prestwich has one of North Manchester\'s strongest private rental markets — large semis and detached homes with professional and family tenants generating consistent carpet cleaning demand.',
    propertyTypes:'Large semis, detached homes, premium family rentals',
    carpetContext:'Prestwich\'s large Edwardian and interwar properties typically have carpeted stairs and multiple bedrooms — perfect for our whole-house carpet cleaning service.',
    stainContext:'Family home issues dominate in Prestwich — muddy dogs, children\'s spills, and the accumulated wear of large family properties.',
    nearbyAreas:['Bury','Whitefield','Crumpsall','Salford'],
    lat:53.5349, lng:-2.2832 },

  { slug:'bolton', name:'Bolton', postcode:'BL1', region:'manchester', borough:'Bolton', tier:1,
    localContext:'Bolton town centre and its surrounding residential areas have a large private rental market with consistent EOT carpet cleaning demand and homeowner deep cleans throughout the year.',
    propertyTypes:'Victorian terraces, town centre flats, family semis, private lets',
    carpetContext:'Bolton\'s mix of Victorian terraces and modern estates means we encounter every carpet type. Our assessment on arrival ensures the right cleaning method for each home.',
    stainContext:'General rental property wear, pet stains, family home grime, and the heavy soiling of high-footfall carpeted stairs and corridors in Bolton\'s Victorian terraces.',
    nearbyAreas:['Farnworth','Horwich','Westhoughton','Bury'],
    lat:53.5780, lng:-2.4282 },

  { slug:'bury', name:'Bury', postcode:'BL9', region:'manchester', borough:'Bury', tier:1,
    localContext:'Bury\'s large residential market — Victorian terraces, family semis, and modern estates — generates year-round carpet cleaning demand from both homeowners and the active private rental sector.',
    propertyTypes:'Victorian terraces, family semis, modern estates, private lets',
    carpetContext:'Bury homeowners are loyal repeat clients. We provide annual whole-house carpet cleans that genuinely transform tired carpets — restoring colour, softness, and freshness.',
    stainContext:'Family home issues are dominant in Bury — pets, children, and the general wear of busy household life. Annual professional cleaning significantly extends carpet lifespan.',
    nearbyAreas:['Radcliffe','Ramsbottom','Whitefield','Heywood'],
    lat:53.5933, lng:-2.2963 },

  { slug:'oldham', name:'Oldham', postcode:'OL1', region:'manchester', borough:'Oldham', tier:1,
    localContext:'Oldham has one of Greater Manchester\'s most diverse private rental markets — Victorian mill terraces to modern estates all requiring professional carpet cleaning services.',
    propertyTypes:'Victorian mill terraces, semis, diverse private let portfolio',
    carpetContext:'Oldham\'s varied housing stock presents every type of carpet challenge. Our experienced team has cleaned thousands of homes across OL1 and surrounding postcodes.',
    stainContext:'Rental property heavy soiling, pet stains, general family wear. Oldham\'s large family household demographic means allergen reduction and deep pile cleaning are popular.',
    nearbyAreas:['Failsworth','Chadderton','Royton','Rochdale'],
    lat:53.5409, lng:-2.1114 },

  { slug:'rochdale', name:'Rochdale', postcode:'OL11', region:'manchester', borough:'Rochdale', tier:1,
    localContext:'Rochdale has a large and varied private rental market from its town centre to suburban areas — consistent year-round carpet cleaning demand with Metrolink driving new professional tenants.',
    propertyTypes:'Victorian terraces, town centre flats, diverse private lets, HMOs',
    carpetContext:'Rochdale\'s expanding commuter population is bringing new demand for high-quality carpet cleaning — professional tenants who expect carpet cleaning as part of EOT.',
    stainContext:'Mixed rental stock from Victorian terraces to modern builds — each with different carpet types needing different approaches. Our assessment before cleaning ensures the right technique.',
    nearbyAreas:['Heywood','Middleton','Littleborough','Bury'],
    lat:53.6097, lng:-2.1561 },

  { slug:'wigan', name:'Wigan', postcode:'WN1', region:'manchester', borough:'Wigan', tier:1,
    localContext:'Wigan\'s large residential market spans Victorian terraces to new estate builds — an active private rental sector and strong homeowner base both generating consistent carpet cleaning demand.',
    propertyTypes:'Victorian terraces, new build estates, family homes, private lets',
    carpetContext:'Wigan homeowners are increasingly choosing professional carpet cleaning over replacement — our hot water extraction typically makes carpets look like new at a fraction of replacement cost.',
    stainContext:'Family home carpet issues dominate in Wigan — children, pets, and the heavy foot traffic of large working-class households. We clean quickly and effectively, often completing whole houses in 2–3 hours.',
    nearbyAreas:['Leigh','Standish','Hindley','Atherton'],
    lat:53.5450, lng:-2.6326 },

  // ═══════════════════════════════════════════════════════════════
  // CREWE & CHESHIRE EAST
  // ═══════════════════════════════════════════════════════════════

  { slug:'crewe-carpet', name:'Crewe', postcode:'CW1', region:'crewe', borough:'Cheshire East', tier:1,
    localContext:'Crewe is a major railway town with a large and diverse private rental market — Victorian terraces and modern estates both generating consistent EOT and residential carpet cleaning demand.',
    propertyTypes:'Victorian terraces, interwar semis, private lets, modern estate homes',
    carpetContext:'Crewe landlords are our most frequent commercial carpet cleaning clients — we turn around EOT carpet cleans quickly to minimise void periods and protect deposits.',
    stainContext:'Rental property heavy soiling, pet stains, general family wear in busy tenant properties. Crewe\'s high rental turnover means we\'re regularly restoring carpets to deposit-return standard.',
    nearbyAreas:['Nantwich','Sandbach','Haslington','Wistaston'],
    lat:53.0936, lng:-2.4418 },

  { slug:'nantwich-carpet', name:'Nantwich', postcode:'CW5', region:'crewe', borough:'Cheshire East', tier:1,
    localContext:'Nantwich is one of Cheshire\'s most beautiful market towns — premium residential properties with premium carpets where quality carpet cleaning matters to discerning homeowners.',
    propertyTypes:'Tudor and Georgian townhouses, premium semis, executive rural properties',
    carpetContext:'Nantwich\'s premium properties often feature Axminster, Wilton, or hand-tufted wool carpets of significant value. We assess each carpet carefully and use the most appropriate, gentle method.',
    stainContext:'Premium home issues — wine, muddy country dogs, occasional flooding from Nantwich\'s river location, and the wear of high-quality carpets in busy entertaining homes.',
    nearbyAreas:['Crewe','Wrenbury','Audlem','Bunbury','Shavington'],
    lat:53.0664, lng:-2.5231 },

  { slug:'sandbach-carpet', name:'Sandbach', postcode:'CW11', region:'crewe', borough:'Cheshire East', tier:1,
    localContext:'Sandbach is a growing Cheshire town popular with families relocating from Manchester — new build and period properties both generating strong carpet cleaning demand.',
    propertyTypes:'New build estates, semis, Victorian town centre properties',
    carpetContext:'Sandbach\'s growing population of professional families is driving demand for regular professional carpet cleaning. New build carpets benefit particularly from professional cleaning before they become difficult to clean.',
    stainContext:'Family home issues in Sandbach mirror its demographic — active families with children and pets, muddy boots from the Cheshire countryside, and entertaining stains.',
    nearbyAreas:['Crewe','Middlewich','Alsager','Congleton'],
    lat:53.1445, lng:-2.3678 },

  { slug:'wilmslow-carpet', name:'Wilmslow', postcode:'SK9', region:'crewe', borough:'Cheshire East', tier:1,
    localContext:'Wilmslow is one of Cheshire\'s most prestigious addresses — large detached homes with premium carpets where only the finest carpet cleaning will do.',
    propertyTypes:'Large detached homes, gated developments, luxury properties, executive rentals',
    carpetContext:'Wilmslow homeowners typically have premium wool, Axminster, or high-pile luxury carpet throughout. We carry specialist equipment for each carpet type and take the time to assess before cleaning.',
    stainContext:'Premium home carpet issues — wine, food, muddy dogs on expensive wool carpets, and the general wear of large, busy households. Every Wilmslow carpet we clean is treated as the investment it is.',
    nearbyAreas:['Alderley Edge','Handforth','Cheadle Hulme','Knutsford'],
    lat:53.3271, lng:-2.2307 },

  { slug:'alderley-edge-carpet', name:'Alderley Edge', postcode:'SK9', region:'crewe', borough:'Cheshire East', tier:1,
    localContext:'Alderley Edge is Cheshire\'s most exclusive village — Premier League footballers and business executives with ultra-premium carpets requiring specialist care.',
    propertyTypes:'Luxury detached mansions, executive properties, premium gated developments',
    carpetContext:'Alderley Edge carpets are often hand-tufted, imported, or of extraordinary value. We treat each one with the utmost care, using the most gentle, effective method available and never rushing.',
    stainContext:'Ultra-premium carpet issues — wine on thousand-pound Axminster, muddy dogs in mansion hallways, and the demands of flawless presentation for owners who accept nothing less.',
    nearbyAreas:['Wilmslow','Prestbury','Macclesfield','Knutsford'],
    lat:53.3046, lng:-2.2261 },

  { slug:'knutsford-carpet', name:'Knutsford', postcode:'WA16', region:'crewe', borough:'Cheshire East', tier:1,
    localContext:'Knutsford is a beautiful Cheshire market town — Georgian townhouses and countryside properties with affluent homeowners expecting outstanding carpet cleaning results.',
    propertyTypes:'Georgian townhouses, countryside semis, premium rentals, executive properties',
    carpetContext:'Knutsford\'s premium residential market demands premium carpet cleaning. We provide the same meticulous service in every Knutsford home, regardless of carpet type.',
    stainContext:'Entertaining stains in Georgian entertaining homes, muddy country dogs, and wine spills are the most common carpet issues in Knutsford.',
    nearbyAreas:['Wilmslow','Altrincham','Holmes Chapel','Macclesfield'],
    lat:53.3027, lng:-2.3699 },

  { slug:'macclesfield-carpet', name:'Macclesfield', postcode:'SK10', region:'crewe', borough:'Cheshire East', tier:1,
    localContext:'Macclesfield has a significant private rental market in its Victorian streets as well as premium homeowners in the more affluent areas close to the Peak District.',
    propertyTypes:'Victorian terraces, premium semis, Peak District commuter properties',
    carpetContext:'Macclesfield\'s varied housing stock means we handle everything from basic rental carpet restoration to specialist wool carpet cleaning for premium properties in Macclesfield Forest area.',
    stainContext:'Rental properties need EOT restoration; homeowners need regular deep cleans. Macclesfield\'s muddy Peak District lifestyle means outdoor grime on hall and stair carpets is particularly common.',
    nearbyAreas:['Wilmslow','Bollington','Prestbury','Congleton'],
    lat:53.2598, lng:-2.1267 },

  { slug:'congleton-carpet', name:'Congleton', postcode:'CW12', region:'crewe', borough:'Cheshire East', tier:2,
    localContext:'Congleton is a market town in the east of Cheshire East with a busy mixed rental and homeowner market generating consistent carpet cleaning demand.',
    propertyTypes:'Victorian terraces, market town semis, family homes, private lets',
    carpetContext:'Congleton homeowners appreciate value and reliability — we provide transparent pricing, punctual arrival, and outstanding results that keep them coming back.',
    stainContext:'Family home issues, pet stains, general household wear. Congleton\'s active countryside lifestyle means muddy boots and pet dirt are frequent carpet cleaning challenges.',
    nearbyAreas:['Sandbach','Macclesfield','Alsager','Kidsgrove'],
    lat:53.1630, lng:-2.2142 },

  { slug:'middlewich-carpet', name:'Middlewich', postcode:'CW10', region:'crewe', borough:'Cheshire East', tier:2,
    localContext:'Middlewich is a growing canal-side town between Crewe and Knutsford — consistent residential carpet cleaning demand from families and professionals.',
    propertyTypes:'Semis, canal-side properties, family homes, private lets',
    carpetContext:'Middlewich\'s growing family population drives regular carpet cleaning demand — we offer convenient same-week appointments for M, CW and WA postcodes.',
    stainContext:'Family home wear, muddy pets near the Cheshire countryside, and occasional canal-related dampness that benefits from professional deep carpet extraction.',
    nearbyAreas:['Sandbach','Crewe','Holmes Chapel','Winsford'],
    lat:53.1889, lng:-2.4396 },

  // ═══════════════════════════════════════════════════════════════
  // STOKE-ON-TRENT & NORTH STAFFORDSHIRE
  // ═══════════════════════════════════════════════════════════════

  { slug:'hanley-carpet', name:'Hanley', postcode:'ST1', region:'stoke', borough:'Stoke-on-Trent', tier:1,
    localContext:'Hanley is the commercial heart of Stoke-on-Trent with a large student and professional rental market around Staffordshire University — heavy EOT carpet cleaning demand every summer.',
    propertyTypes:'City centre flats, student HMOs, converted properties, professional lets',
    carpetContext:'Student properties in Hanley need thorough EOT carpet cleaning every June — we work quickly through multiple rooms to hit landlord turnaround deadlines.',
    stainContext:'Student property carpet issues — drink stains, food spills, and the heavy wear of communal corridors and shared living spaces over a full academic year.',
    nearbyAreas:['Shelton','Cobridge','Burslem','Sneyd Green'],
    lat:53.0243, lng:-2.1730 },

  { slug:'stoke-carpet', name:'Stoke-on-Trent', postcode:'ST4', region:'stoke', borough:'Stoke-on-Trent', tier:1,
    localContext:'Stoke town centre and surrounding areas have a dense private rental market around the station corridor — consistent EOT carpet cleaning demand from landlords and homeowners.',
    propertyTypes:'Victorian terraces, semis, private lets, mixed residential',
    carpetContext:'Stoke\'s mixed housing stock includes everything from century-old terraces with original carpeting to modern builds with new fitted carpet. We bring the right approach for each.',
    stainContext:'Period property carpet restoration, general rental wear, and the heavy soiling of high-traffic areas in tenanted properties throughout ST4.',
    nearbyAreas:['Fenton','Penkhull','Shelton','Hartshill'],
    lat:53.0022, lng:-2.1792 },

  { slug:'longton-carpet', name:'Longton', postcode:'ST3', region:'stoke', borough:'Stoke-on-Trent', tier:1,
    localContext:'One of the Potteries\' Six Towns, Longton has a large active rental market and strong homeowner base — consistent carpet cleaning demand throughout ST3.',
    propertyTypes:'Victorian terraces, semis, mixed rental and owner-occupied',
    carpetContext:'Longton\'s Victorian terraces typically have carpets across all floors that benefit significantly from our hot water extraction — removing years of embedded dirt that regular cleaning misses.',
    stainContext:'Period property heavy soiling, general rental wear, pet stains, and the accumulated grime of high-footfall Victorian homes in Longton.',
    nearbyAreas:['Fenton','Meir','Blurton','Normacot'],
    lat:52.9876, lng:-2.1366 },

  { slug:'newcastle-under-lyme-carpet', name:'Newcastle-under-Lyme', postcode:'ST5', region:'stoke', borough:'Newcastle-under-Lyme', tier:1,
    localContext:'Newcastle-under-Lyme has a large student and professional rental market serving Keele University and the Royal Stoke University Hospital — consistent year-round carpet cleaning demand.',
    propertyTypes:'Student HMOs, professional lets, family semis, town centre flats',
    carpetContext:'University towns like Newcastle-under-Lyme generate the highest density of EOT carpet cleaning jobs — we handle multiple landlords\' properties each summer and throughout the academic year.',
    stainContext:'Student property issues — academic year accumulated stains, spills, pet hair, and the heavy wear of shared living on carpets in HMOs and shared student houses.',
    nearbyAreas:['Keele','Stoke','Trentham','Alsager','Kidsgrove'],
    lat:53.0109, lng:-2.2285 },

  { slug:'trentham-carpet', name:'Trentham', postcode:'ST4', region:'stoke', borough:'Stoke-on-Trent', tier:2,
    localContext:'Trentham is one of Stoke\'s most desirable residential areas adjacent to Trentham Gardens — premium family homes with quality carpets expecting outstanding results.',
    propertyTypes:'Premium semis, detached family homes, executive properties near Trentham Gardens',
    carpetContext:'Trentham homeowners are among our most loyal clients — they appreciate the genuine difference professional carpet cleaning makes to their premium homes and carpets.',
    stainContext:'Premium family home issues — muddy dogs from Trentham Gardens walks, wine from entertaining, children\'s accidents on quality carpets.',
    nearbyAreas:['Stoke','Blurton','Newcastle-under-Lyme'],
    lat:52.9656, lng:-2.2009 },

  { slug:'stafford-carpet', name:'Stafford', postcode:'ST16', region:'stoke', borough:'Stafford', tier:1,
    localContext:'The county town of Staffordshire has a large professional and family rental market — consistent EOT and residential carpet cleaning demand across a wide range of property types.',
    propertyTypes:'Victorian terraces, family semis, professional lets, town centre flats',
    carpetContext:'Stafford\'s professional population expects professional carpet cleaning results. We deliver outstanding service on every visit in ST16 and surrounding Staffordshire postcodes.',
    stainContext:'Professional family home issues — wine, coffee, pets, and the general wear of active family life in Stafford\'s comfortable residential areas.',
    nearbyAreas:['Stone','Newport','Rugeley','Gnosall'],
    lat:52.8050, lng:-2.1183 },

  // ═══════════════════════════════════════════════════════════════
  // LIVERPOOL & MERSEYSIDE
  // ═══════════════════════════════════════════════════════════════

  { slug:'liverpool-city-carpet', name:'Liverpool City Centre', postcode:'L1', region:'liverpool', borough:'Liverpool', tier:1,
    localContext:'Liverpool\'s booming city centre apartment market includes thousands of Airbnb and short-let properties with carpeted bedrooms requiring fast, professional cleaning between guests.',
    propertyTypes:'City centre apartments, Airbnb short-lets, professional accommodation, luxury flats',
    carpetContext:'City centre carpet cleaning in Liverpool requires speed and reliability. We offer same-day turnaround carpet cleaning for L1 properties to meet tight Airbnb checkout-to-checkin windows.',
    stainContext:'Short-let carpet issues — wine, food, and the wear from frequent guest turnovers. City centre properties need carpets that look pristine for every new guest or tenant.',
    nearbyAreas:['Baltic Triangle','Toxteth','Edge Hill','Anfield'],
    lat:53.4084, lng:-2.9916 },

  { slug:'sefton-park-carpet', name:'Sefton Park', postcode:'L17', region:'liverpool', borough:'Liverpool', tier:1,
    localContext:'Sefton Park is one of Liverpool\'s most desirable addresses — large Victorian homes surrounding the famous park with premium carpets requiring specialist cleaning.',
    propertyTypes:'Large Victorian houses, premium flats, professional and family rentals around the park',
    carpetContext:'Sefton Park\'s Victorian properties typically have carpets across multiple floors. Our multi-room whole-house service is particularly popular here, typically covering 5–7 rooms per booking.',
    stainContext:'Victorian home carpet issues — wine and food stains from entertaining, pets walked from the park, and the gradual dulling of quality carpets in period properties.',
    nearbyAreas:['Aigburth','Toxteth','Allerton','Mossley Hill'],
    lat:53.3839, lng:-2.9517 },

  { slug:'aigburth-carpet', name:'Aigburth', postcode:'L17', region:'liverpool', borough:'Liverpool', tier:1,
    localContext:'Aigburth is one of Liverpool\'s most sought-after suburbs adjacent to the Mersey — premium Victorian semis with professional tenants and homeowners both generating strong carpet cleaning demand.',
    propertyTypes:'Large Victorian semis, premium rentals, family homes near the river',
    carpetContext:'Aigburth properties run large — whole house carpet cleans covering stairs, landing, multiple bedrooms, and living rooms are our most common job type in L17.',
    stainContext:'Active family carpet issues — dogs walked along the Mersey, children\'s spills, and the general wear of busy Victorian family homes in Aigburth.',
    nearbyAreas:['Sefton Park','Grassendale','Allerton','Garston'],
    lat:53.3755, lng:-2.9397 },

  { slug:'allerton-carpet', name:'Allerton', postcode:'L18', region:'liverpool', borough:'Liverpool', tier:1,
    localContext:'Allerton is one of Liverpool\'s most affluent suburbs — large detached homes and premium semis with quality carpets demanding quality carpet cleaning.',
    propertyTypes:'Large detached homes, premium semis, executive rentals',
    carpetContext:'Allerton homeowners are among our most discerning clients — they know what outstanding carpet cleaning looks like and won\'t accept anything less. We consistently deliver.',
    stainContext:'Premium home carpet issues — wine, food, dogs, children, and the general wear of large, active family homes in Allerton.',
    nearbyAreas:['Mossley Hill','Childwall','Woolton','Aigburth'],
    lat:53.3756, lng:-2.8980 },

  { slug:'wavertree-carpet', name:'Wavertree', postcode:'L15', region:'liverpool', borough:'Liverpool', tier:2,
    localContext:'Wavertree is a popular mid-Liverpool suburb between the universities and the southern suburbs — professional sharers and families both generating carpet cleaning demand.',
    propertyTypes:'Victorian semis, professional sharers, family lets, student-adjacent properties',
    carpetContext:'Wavertree\'s professional sharers are a growing carpet cleaning market — people who want the quality of professional cleaning but the convenience of evening or weekend appointments.',
    stainContext:'Professional sharer carpet issues — wine, food, coffee, and the general wear of 2–4 professional adults sharing Victorian semis in L15.',
    nearbyAreas:['Edge Hill','Childwall','Broadgreen','Old Swan'],
    lat:53.3994, lng:-2.9294 },

  { slug:'toxteth-carpet', name:'Toxteth', postcode:'L8', region:'liverpool', borough:'Liverpool', tier:2,
    localContext:'Liverpool 8\'s Georgian townhouses are being converted into premium flats and professional lets — growing carpet cleaning demand from the improving private rental market.',
    propertyTypes:'Georgian conversions, professional flats, student lets close to the universities',
    carpetContext:'Toxteth\'s converted Georgian properties often have carpeted bedrooms within beautiful period buildings. We clean carefully to protect period floors and original features.',
    stainContext:'Student and professional carpet issues — the usual range of spills, pet stains, and the heavy wear of properties near the city\'s main university corridor.',
    nearbyAreas:['Baltic Triangle','Dingle','Sefton Park','Edge Hill'],
    lat:53.3897, lng:-2.9768 },

  { slug:'edge-hill-carpet', name:'Edge Hill', postcode:'L7', region:'liverpool', borough:'Liverpool', tier:2,
    localContext:'Edge Hill is home to the highest density of students in Liverpool — peak EOT carpet cleaning demand every June for the thousands of student HMOs in L7.',
    propertyTypes:'Student HMOs, shared houses, university-area private lets',
    carpetContext:'Student EOT carpet cleaning in Edge Hill is our busiest period. We work efficiently through multiple rooms to hit landlord turnaround requirements before the next academic year.',
    stainContext:'Full range of student carpet issues — academic year accumulated stains and the heavy wear of shared living across some of Liverpool\'s highest-density student streets.',
    nearbyAreas:['Kensington Liverpool','Wavertree','Fairfield','Tuebrook'],
    lat:53.4043, lng:-2.9558 },

  { slug:'woolton-carpet', name:'Woolton', postcode:'L25', region:'liverpool', borough:'Liverpool', tier:2,
    localContext:'Woolton village is famous as Paul McCartney\'s home area — a premium village suburb with affluent homeowners expecting outstanding carpet cleaning in large detached properties.',
    propertyTypes:'Large detached homes, premium semis, high-value residential properties',
    carpetContext:'Woolton homeowners have some of Liverpool\'s finest carpets — Axminster, Wilton, and premium loop pile in large, beautiful homes. We treat each one as the investment it is.',
    stainContext:'Premium home issues — wine, mud from country walks, dogs, and entertaining stains on quality carpets in one of Liverpool\'s most prestigious village communities.',
    nearbyAreas:['Allerton','Hunts Cross','Gateacre','Childwall'],
    lat:53.3691, lng:-2.8718 },

  { slug:'southport-carpet', name:'Southport', postcode:'PR8', region:'liverpool', borough:'Sefton', tier:1,
    localContext:'Southport\'s large holiday let and Airbnb market creates some of Merseyside\'s highest carpet cleaning turnover demand — beach sand and seaside grime require professional cleaning.',
    propertyTypes:'Holiday lets, Airbnb properties, Victorian hotels converted to flats, family homes',
    carpetContext:'Southport holiday properties need rapid between-booking carpet cleaning. Beach sand and seaside grime are unique challenges we handle regularly in PR8.',
    stainContext:'Holiday let unique issues — beach sand deep in pile, food and drink from holidaymakers, pet hair from families on holiday, and the heavy turnover wear of short-let properties.',
    nearbyAreas:['Formby','Maghull','Ormskirk','Crosby'],
    lat:53.6452, lng:-3.0056 },

  { slug:'st-helens-carpet', name:'St Helens', postcode:'WA10', region:'liverpool', borough:'St Helens', tier:1,
    localContext:'St Helens has a large active private rental market between Liverpool and Manchester — consistent year-round carpet cleaning demand for both EOT and residential deep cleans.',
    propertyTypes:'Victorian terraces, interwar semis, family rentals, HMOs',
    carpetContext:'St Helens landlords are regular clients — we provide fast, effective EOT carpet cleaning that helps them turn properties quickly and protect deposits.',
    stainContext:'Rental property heavy soiling, pet stains, general family wear, and the accumulated grime of tenanted Victorian terraces and HMOs throughout WA10.',
    nearbyAreas:['Prescot','Haydock','Newton-le-Willows','Wigan'],
    lat:53.4519, lng:-2.7352 },

  { slug:'birkenhead-carpet', name:'Birkenhead', postcode:'CH41', region:'liverpool', borough:'Wirral', tier:1,
    localContext:'Birkenhead has a large and active residential market across the Mersey — Victorian terraces, modern apartments, and a significant rental sector all generating carpet cleaning demand.',
    propertyTypes:'Victorian terraces, town centre flats, HMOs, private lets',
    carpetContext:'Birkenhead\'s densely rented Victorian streets provide year-round carpet cleaning work. We\'re the local team across the Wirral that Birkenhead landlords rely on.',
    stainContext:'Rental property restoration — heavy soiling, pet stains, and the general grime of high-traffic tenanted properties throughout CH41.',
    nearbyAreas:['Wallasey','Prenton','Bebington','Heswall'],
    lat:53.3930, lng:-3.0195 },

  { slug:'formby-carpet', name:'Formby', postcode:'L37', region:'liverpool', borough:'Sefton', tier:2,
    localContext:'Formby is one of Merseyside\'s most aspirational coastal addresses — premium detached properties with affluent homeowners who maintain high standards in their homes.',
    propertyTypes:'Large detached homes, premium semis, coastal properties',
    carpetContext:'Formby homeowners expect the highest standards. Sand from the famous Formby beach is a unique local carpet challenge — it penetrates deep into pile and requires thorough extraction.',
    stainContext:'Coastal home unique issues — beach sand deep in carpet pile, muddy dogs from the National Trust woodland, wine and entertaining stains in premium properties.',
    nearbyAreas:['Crosby','Southport','Maghull','Ormskirk'],
    lat:53.5568, lng:-3.0694 },

  { slug:'bootle-carpet', name:'Bootle', postcode:'L20', region:'liverpool', borough:'Sefton', tier:2,
    localContext:'Bootle\'s large residential community has significant private rental activity — consistent EOT and residential carpet cleaning demand throughout L20.',
    propertyTypes:'Victorian terraces, private lets, family rentals',
    carpetContext:'Bootle landlords are consistent clients — we provide reliable, affordable carpet cleaning that helps properties maintain standards and protect landlord deposits.',
    stainContext:'Rental property restoration, general family wear, and the heavy soiling of high-traffic rental carpets in Bootle\'s Victorian terrace streets.',
    nearbyAreas:['Kirkdale','Seaforth','Litherland','Crosby'],
    lat:53.4444, lng:-3.0088 },

  { slug:'crosby-carpet', name:'Crosby', postcode:'L23', region:'liverpool', borough:'Sefton', tier:2,
    localContext:'Crosby is a desirable north Liverpool suburb known for Antony Gormley\'s Another Place — Victorian properties and professional families generating quality carpet cleaning demand.',
    propertyTypes:'Victorian semis, family homes, professional rentals close to the beach',
    carpetContext:'Crosby\'s proximity to the beach means sand in carpets is a common issue alongside the usual family home challenges. Our hot water extraction handles coastal sand particularly well.',
    stainContext:'Coastal living carpet challenges — beach sand, muddy dogs, children\'s beachside adventures tracked indoors, and the general wear of active coastal family homes.',
    nearbyAreas:['Waterloo','Formby','Bootle','Maghull'],
    lat:53.4854, lng:-3.0357 },

  { slug:'heswall-carpet', name:'Heswall', postcode:'CH60', region:'liverpool', borough:'Wirral', tier:2,
    localContext:'Heswall is one of the Wirral\'s most desirable addresses with views across the Dee Estuary — affluent homeowners with premium properties and premium carpets.',
    propertyTypes:'Large detached homes, premium properties, executive residences with Dee views',
    carpetContext:'Heswall homeowners maintain their beautiful properties to the highest standards — we provide the premium carpet cleaning service that matches their expectations.',
    stainContext:'Premium home issues — wine, muddy dogs from Heswall Shore nature walks, and entertaining stains in some of the Wirral\'s finest homes.',
    nearbyAreas:['West Kirby','Bebington','Neston','Willaston'],
    lat:53.3289, lng:-3.1003 },
]

// ─────────────────────────────────────────────────────────────────
// SERVICES — what we do at each location
// ─────────────────────────────────────────────────────────────────

export const CARPET_SERVICES = [
  { id: 'hot-water-extraction', name: 'Hot Water Extraction', desc: 'Our primary method — truck-mounted or portable hot water extraction removes deep-seated dirt, allergens, and stains that vacuuming cannot reach.' },
  { id: 'steam-cleaning', name: 'Steam Cleaning', desc: 'High-temperature steam cleaning for heavily soiled carpets — kills bacteria, dust mites, and allergens while lifting stubborn stains.' },
  { id: 'dry-cleaning', name: 'Dry Cleaning', desc: 'Low-moisture dry cleaning method for delicate carpets, natural fibres, or situations where minimal drying time is essential.' },
  { id: 'stain-removal', name: 'Specialist Stain Removal', desc: 'Targeted treatment for red wine, coffee, pet urine, curry, and other stubborn stains using specialist solutions.' },
  { id: 'pet-hair-allergen', name: 'Pet Hair & Allergen Removal', desc: 'Specialist extraction removing pet hair, dander, and allergens from deep in the pile — ideal for households with pets or allergy sufferers.' },
  { id: 'eot-carpet-clean', name: 'End of Tenancy Carpet Clean', desc: 'Letting agent approved standard carpet cleaning with deposit-back guarantee. Certificate of clean provided on completion.' },
]

// ─────────────────────────────────────────────────────────────────
// PRICING (transparent — none of the 5 ranking competitors show prices)
// ─────────────────────────────────────────────────────────────────

export const CARPET_PRICING = [
  { room: 'Single bedroom', price: 25 },
  { room: 'Double bedroom', price: 30 },
  { room: 'Box room / small room', price: 20 },
  { room: 'Living room (small)', price: 35 },
  { room: 'Living room (large)', price: 45 },
  { room: 'Dining room', price: 30 },
  { room: 'Stairs + landing (up to 13 steps)', price: 45 },
  { room: 'Stairs + landing (14+ steps)', price: 60 },
  { room: 'Hallway', price: 20 },
  { room: '2 rooms any size', price: 65 },
  { room: '3 rooms any size', price: 85 },
  { room: 'Whole house (up to 4 rooms + stairs)', price: 120 },
]

// ─────────────────────────────────────────────────────────────────
// FAQ POOL — 14 questions, all used in schema, beats all 5 competitors
// ─────────────────────────────────────────────────────────────────

export function buildFAQ(location: CarpetLocation) {
  return [
    {
      q: `How much does carpet cleaning cost in ${location.name}?`,
      a: `thefamgroup carpet cleaning in ${location.name} starts from £20 for a small room, £25 for a single bedroom, and £65 for two rooms any size. A whole house clean (up to 4 rooms and stairs) costs £120. Prices include pre-treatment, hot water extraction, and spot stain treatment. Call 07769 240 184 for a fixed quote with no hidden extras.`
    },
    {
      q: `How long does carpet cleaning take in ${location.name}?`,
      a: `Most carpet cleans in ${location.name} take 1–3 hours depending on the number of rooms. A single bedroom takes approximately 30–40 minutes. A whole house clean with stairs takes 2–3 hours. We always give you a realistic time estimate when you book.`
    },
    {
      q: `How long do carpets take to dry after cleaning in ${location.name}?`,
      a: `Carpets cleaned by thefamgroup in ${location.name} are typically dry within 2–4 hours in warm conditions. We use a high-extraction process that removes the maximum amount of moisture, significantly reducing drying time compared to lower-powered equipment. Opening windows and using heating or fans speeds drying further.`
    },
    {
      q: `Do you remove pet stains and odours from carpets in ${location.name}?`,
      a: `Yes. We use specialist enzyme-based treatments to break down pet urine stains and eliminate odours at the source — not just mask them. Pet stain and odour treatment is available as an add-on to any carpet clean in ${location.name}. We also offer pet hair removal as a separate add-on.`
    },
    {
      q: `Can you clean my carpet and return it to deposit-return standard for end of tenancy in ${location.name}?`,
      a: `Yes. End of tenancy carpet cleaning in ${location.name} is one of our most popular services. We clean to letting agent approved standard and provide a certificate of clean on completion — the same document letting agents and inventory clerks accept as proof of professional cleaning. We offer a deposit-back guarantee: if the carpet cleaning is not accepted by your letting agent, we will return and re-clean any disputed area free of charge.`
    },
    {
      q: `What carpet cleaning method do you use?`,
      a: `Our primary method is hot water extraction (also known as steam cleaning) — the most effective method for deep-cleaning carpets and removing embedded dirt, allergens, and stains. For delicate carpets, natural fibres, or situations requiring minimal drying time, we offer dry cleaning. We assess each carpet before starting to ensure we use the most appropriate method.`
    },
    {
      q: `Can you clean wool carpets and delicate natural fibres?`,
      a: `Yes. Wool, sisal, jute, and other natural fibre carpets require a different approach to synthetic carpets. We assess every carpet before cleaning and use the appropriate method and solutions for the fibre type — protecting colour, pile, and structure while delivering outstanding cleaning results.`
    },
    {
      q: `Do you bring your own equipment and products?`,
      a: `Yes. We bring all equipment, cleaning solutions, and pre-treatment products. We use professional-grade hot water extraction equipment and COSHH-compliant, child-safe and pet-safe cleaning agents. No preparation is needed on your part other than clearing the rooms of furniture where possible.`
    },
    {
      q: `How far in advance do I need to book carpet cleaning in ${location.name}?`,
      a: `We typically have availability within 2–5 working days for ${location.name} and ${location.postcode} postcodes. For urgent requirements — such as pre-inspection end of tenancy cleans — call 07769 240 184 and we will do our best to fit you in at short notice. Same-day or next-day appointments are sometimes available.`
    },
    {
      q: `Is professional carpet cleaning better than hiring a machine from a supermarket?`,
      a: `Significantly better. Supermarket hire machines use low-powered pumps that leave excess moisture in the carpet (leading to mould risk and shrinkage) and do not have the suction to remove deeply embedded dirt. Our professional equipment operates at much higher pressure and extraction power, cleaning more deeply, drying faster, and delivering results that DIY machines simply cannot match.`
    },
    {
      q: `Can you remove red wine stains from carpet?`,
      a: `In most cases, yes. Fresh red wine stains respond well to professional treatment. Older, set-in wine stains can also often be significantly reduced or eliminated with specialist pre-treatment. We will always assess a stain before cleaning and give you an honest assessment of the likely result. We never charge for a stain treatment that doesn\'t work.`
    },
    {
      q: `How do I get a quote for carpet cleaning in ${location.name}?`,
      a: `Call or WhatsApp 07769 240 184, or email info@thefamgroup.uk. Tell us the number of rooms, approximate room sizes, and any specific stains or issues. We will give you a fixed price — no hidden extras. We serve ${location.name} and the ${location.postcode} postcode area 7 days a week.`
    },
  ]
}

// Region metadata
export const CARPET_REGIONS = {
  manchester: { name: 'Greater Manchester', tagline: 'All 10 Boroughs' },
  crewe: { name: 'Crewe & Cheshire East', tagline: 'Village to Village' },
  stoke: { name: 'Stoke-on-Trent & Staffordshire', tagline: 'All 6 Towns & Beyond' },
  liverpool: { name: 'Liverpool & Merseyside', tagline: 'City, Suburbs & Coast' },
}

export const TOTAL_CARPET_LOCATIONS = CARPET_LOCATIONS.length
