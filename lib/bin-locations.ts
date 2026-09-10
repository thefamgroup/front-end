// lib/bin-locations.ts
// Wheelie bin cleaning SEO — Manchester-first, 48 locations
// BEATS: gleamiebins.co.uk, wheelie-bincleaning.co.uk/manchester, greencleen.co.uk/manchester
//
// COMPETITOR GAP ANALYSIS:
// wheelie-bincleaning.co.uk — ranks #1, £7.99/bin, covers M1–M90, good page but no district sub-pages
// greencleen.co.uk — franchise, £6/bin, 17 years, no district sub-pages
// gleamiebins.co.uk — thin content, no pricing transparency
// wheeliecleanukltd.co.uk — 25 years, Oldham/NE Manchester only, no hyper-local pages
//
// OUR WINNING EDGE:
// 1. Hyper-local district pages (NONE of competitors have Didsbury/Chorlton/Ancoats specific pages)
// 2. Transparent pricing — launch at £6.99/bin (beats wheelie-bincleaning.co.uk £7.99, matches greencleen £6)
// 3. 10 FAQ questions with FAQPage schema (competitors have 0–3)
// 4. Council collection day integration per district
// 5. Word count 2,000+ per page vs competitors' 300–600 words
// 6. Combined with domestic cleaning = cross-sell angle none of competitors mention

export type BinRegion = 'manchester' | 'crewe' | 'stoke' | 'liverpool'

export interface BinLocation {
  slug: string
  name: string
  postcode: string
  region: BinRegion
  borough: string
  tier: 1 | 2 | 3
  councilName: string           // e.g. "Manchester City Council"
  collectionFrequency: string   // e.g. "weekly general waste, fortnightly recycling"
  localContext: string          // why bin cleaning demand is high here
  propertyTypes: string         // dominant property types and bin situations
  nearbyAreas: string[]
}

export const BIN_LOCATIONS: BinLocation[] = [

  // ═══════════════════════════════════════════════
  // GREATER MANCHESTER — Priority 1 areas
  // ═══════════════════════════════════════════════

  { slug:'didsbury-bin', name:'Didsbury', postcode:'M20',
    region:'manchester', borough:'Manchester', tier:1,
    councilName:'Manchester City Council',
    collectionFrequency:'Weekly general waste (black bin), fortnightly recycling (brown and blue bins alternating)',
    localContext:'Didsbury is South Manchester\'s most sought-after suburb — large Victorian and Edwardian family homes with bins that take a beating from busy family life. The area\'s pet-owning professional families generate organic waste and strong smells that make regular bin cleaning essential.',
    propertyTypes:'Victorian terraces and Edwardian semis with rear bin stores, large family homes, converted flats with communal bin areas',
    nearbyAreas:['west-didsbury-bin','chorlton-bin','withington-bin','burnage-bin'] },

  { slug:'chorlton-bin', name:'Chorlton', postcode:'M21',
    region:'manchester', borough:'Manchester', tier:1,
    councilName:'Manchester City Council',
    collectionFrequency:'Weekly general waste (black bin), fortnightly recycling (brown and blue bins alternating)',
    localContext:'Chorlton is Manchester\'s most eco-conscious suburb — residents here care deeply about hygiene, sustainability, and using biodegradable products. This demographic is the perfect bin cleaning customer: they dislike unpleasant smells, they appreciate the environmental angle, and they subscribe readily.',
    propertyTypes:'Victorian terraces, Edwardian semis, HMOs, modern builds — high density of family rental properties generating significant organic waste',
    nearbyAreas:['didsbury-bin','whalley-range-bin','sale-bin','stretford-bin'] },

  { slug:'withington-bin', name:'Withington', postcode:'M20',
    region:'manchester', borough:'Manchester', tier:2,
    councilName:'Manchester City Council',
    collectionFrequency:'Weekly general waste, fortnightly recycling',
    localContext:'Between student Fallowfield and professional Didsbury, Withington has high rental density — student and professional tenants who leave dirty bins for landlords to deal with. Landlord clients in Withington are our highest-volume repeat customers.',
    propertyTypes:'Student HMOs, professional lets, converted semis — all with bins that see heavy use from multiple occupants',
    nearbyAreas:['didsbury-bin','fallowfield-bin','burnage-bin'] },

  { slug:'fallowfield-bin', name:'Fallowfield', postcode:'M14',
    region:'manchester', borough:'Manchester', tier:1,
    councilName:'Manchester City Council',
    collectionFrequency:'Weekly general waste, fortnightly recycling',
    localContext:'Fallowfield has the highest student density in South Manchester — HMOs with 4–8 students generate extremely dirty bins filled with food waste, recyclables, and general grime. Landlords in Fallowfield are increasingly adding bin cleaning to their service contracts to protect properties and avoid complaints.',
    propertyTypes:'4–8 bed student HMOs, large shared houses — bins receive maximum wear from multiple heavy users throughout the academic year',
    nearbyAreas:['withington-bin','rusholme-bin','levenshulme-bin'] },

  { slug:'salford-quays-bin', name:'Salford Quays', postcode:'M50',
    region:'manchester', borough:'Salford', tier:1,
    councilName:'Salford City Council',
    collectionFrequency:'Weekly general waste, fortnightly recycling managed by Salford City Council',
    localContext:'Salford Quays apartment buildings have large communal bin stores shared by hundreds of residents — these become serious hygiene and odour problems. Building managers and property management companies are our primary commercial bin cleaning clients in M50.',
    propertyTypes:'Waterfront apartment towers with communal bin stores, Airbnb short-let apartments with high turnover generating excessive waste',
    nearbyAreas:['salford-bin','eccles-bin','stretford-bin'] },

  { slug:'ancoats-bin', name:'Ancoats', postcode:'M4',
    region:'manchester', borough:'Manchester', tier:1,
    councilName:'Manchester City Council',
    collectionFrequency:'Weekly general waste, fortnightly recycling',
    localContext:'Ancoats\' rapidly growing professional population in converted mill apartments and new builds creates a premium client base. Young professionals here are exactly the demographic that subscribes to convenience services — they don\'t want to deal with dirty bins themselves.',
    propertyTypes:'Converted mill apartments, new-build developments — many with individual wheelie bins despite shared building access, creating unique cleaning logistics we understand',
    nearbyAreas:['northern-quarter-bin','manchester-city-centre-bin','new-islington-bin'] },

  { slug:'northern-quarter-bin', name:'Northern Quarter', postcode:'M4',
    region:'manchester', borough:'Manchester', tier:2,
    councilName:'Manchester City Council',
    collectionFrequency:'Weekly general waste, fortnightly recycling',
    localContext:'The Northern Quarter\'s residential streets above its famous bars and restaurants have a dense apartment population. Food smells from below combine with residential waste above to make bin hygiene particularly challenging — and particularly valued by residents.',
    propertyTypes:'Apartments above commercial premises, loft-style flats — bins often in shared rear yards with mixed commercial and residential use',
    nearbyAreas:['ancoats-bin','manchester-city-centre-bin','piccadilly-bin'] },

  { slug:'manchester-city-centre-bin', name:'Manchester City Centre', postcode:'M1',
    region:'manchester', borough:'Manchester', tier:1,
    councilName:'Manchester City Council',
    collectionFrequency:'Weekly general waste, fortnightly recycling — city centre routes often have adjusted timing',
    localContext:'City centre apartment buildings — Deansgate Square, One Port Street, The Castings — have communal bin stores that become serious problems without regular professional cleaning. Residents and building managers in M1–M3 are the fastest-growing segment for commercial bin cleaning contracts.',
    propertyTypes:'High-rise apartment towers with large communal bin stores, serviced apartments, Airbnb properties with rapid waste turnover',
    nearbyAreas:['ancoats-bin','deansgate-bin','piccadilly-bin'] },

  { slug:'deansgate-bin', name:'Deansgate', postcode:'M3',
    region:'manchester', borough:'Manchester', tier:1,
    councilName:'Manchester City Council',
    collectionFrequency:'Weekly general waste, fortnightly recycling',
    localContext:'Deansgate Square\'s four towers house 1,500+ apartments — the communal bin stores for these buildings are large-scale commercial cleaning opportunities. We target building managers with contracts covering weekly bin store sanitisation alongside monthly bin cleaning.',
    propertyTypes:'Premium apartment tower bin stores, luxury residential buildings — Deansgate Square, Beetham Tower, Elizabeth Tower communal waste areas',
    nearbyAreas:['manchester-city-centre-bin','castlefield-bin','spinningfields-bin'] },

  { slug:'altrincham-bin', name:'Altrincham', postcode:'WA14',
    region:'manchester', borough:'Trafford', tier:1,
    councilName:'Trafford Council',
    collectionFrequency:'Weekly general waste, fortnightly recycling managed by Trafford Council',
    localContext:'Altrincham\'s affluent professional families are among the most likely subscribers to bin cleaning in Greater Manchester. The area\'s regeneration has brought a premium mindset — residents here invest in services that maintain their home\'s presentation and hygiene.',
    propertyTypes:'Victorian semis, luxury family homes, executive properties — bins are a key part of kerbside presentation in Altrincham\'s well-kept streets',
    nearbyAreas:['sale-bin','hale-bin','bowdon-bin'] },

  { slug:'sale-bin', name:'Sale', postcode:'M33',
    region:'manchester', borough:'Trafford', tier:1,
    councilName:'Trafford Council',
    collectionFrequency:'Weekly general waste, fortnightly recycling managed by Trafford Council',
    localContext:'Sale is one of Trafford\'s largest family residential towns — dense streets of family homes with busy bins generating consistent demand for regular four-weekly cleaning. Route density in Sale is excellent, making it one of the most efficient areas for bin cleaning operations.',
    propertyTypes:'Family semis, detached homes, private rental properties — dense suburban streets ideal for route efficiency',
    nearbyAreas:['altrincham-bin','stretford-bin','chorlton-bin'] },

  { slug:'hale-bin', name:'Hale', postcode:'WA15',
    region:'manchester', borough:'Trafford', tier:1,
    councilName:'Trafford Council',
    collectionFrequency:'Weekly general waste, fortnightly recycling managed by Trafford Council',
    localContext:'Hale is one of Greater Manchester\'s wealthiest villages — premium homeowners who maintain their properties to the highest standard are exactly the demographic that subscribes to bin cleaning. They expect the same professional approach to their bins as to everything else in their home.',
    propertyTypes:'Luxury detached homes, premium semis — bins are part of kerbside presentation, and Hale residents have zero tolerance for smells or pests',
    nearbyAreas:['altrincham-bin','hale-barns-bin','bowdon-bin'] },

  { slug:'stockport-bin', name:'Stockport', postcode:'SK1',
    region:'manchester', borough:'Stockport', tier:1,
    councilName:'Stockport Metropolitan Borough Council',
    collectionFrequency:'Weekly general waste, fortnightly recycling managed by Stockport MBC',
    localContext:'Stockport town centre and its surrounding residential areas have a large and active private rental market — consistent demand for bin cleaning from both homeowners and landlords managing multiple properties across SK postcodes.',
    propertyTypes:'Victorian terraces, town centre apartments, family semis — varied housing stock with correspondingly varied bin situations',
    nearbyAreas:['heaton-moor-bin','cheadle-bin','reddish-bin'] },

  { slug:'heaton-moor-bin', name:'Heaton Moor', postcode:'SK4',
    region:'manchester', borough:'Stockport', tier:1,
    councilName:'Stockport Metropolitan Borough Council',
    collectionFrequency:'Weekly general waste, fortnightly recycling managed by Stockport MBC',
    localContext:'The Heaton suburbs — Moor, Chapel, Mersey — are South Manchester\'s professional heartland. Large Edwardian properties with families, dogs, and active lifestyles generate bins that need regular attention. This demographic subscribes and rarely cancels.',
    propertyTypes:'Large Edwardian semis, detached family homes — bins often in rear alleys or dedicated side-gate storage areas',
    nearbyAreas:['stockport-bin','cheadle-bin','didsbury-bin'] },

  { slug:'cheadle-bin', name:'Cheadle', postcode:'SK8',
    region:'manchester', borough:'Stockport', tier:2,
    councilName:'Stockport Metropolitan Borough Council',
    collectionFrequency:'Weekly general waste, fortnightly recycling managed by Stockport MBC',
    localContext:'Cheadle is a large family suburb on the Stockport/Trafford border — dense streets of family homes generating consistent bin cleaning demand, with excellent route density for efficient operations.',
    propertyTypes:'Semis, detached family homes, private rentals — suburban density ideal for route building',
    nearbyAreas:['stockport-bin','cheadle-hulme-bin','altrincham-bin'] },

  { slug:'cheadle-hulme-bin', name:'Cheadle Hulme', postcode:'SK8',
    region:'manchester', borough:'Stockport', tier:2,
    councilName:'Stockport Metropolitan Borough Council',
    collectionFrequency:'Weekly general waste, fortnightly recycling managed by Stockport MBC',
    localContext:'Cheadle Hulme is popular with professional families who care about their home environment — regular bin cleaning subscribers who stay for years once they experience the difference.',
    propertyTypes:'Family semis, detached homes — active families with children and pets generating food waste and general mess',
    nearbyAreas:['cheadle-bin','bramhall-bin','wilmslow-bin'] },

  { slug:'bramhall-bin', name:'Bramhall', postcode:'SK7',
    region:'manchester', borough:'Stockport', tier:2,
    councilName:'Stockport Metropolitan Borough Council',
    collectionFrequency:'Weekly general waste, fortnightly recycling managed by Stockport MBC',
    localContext:'One of Stockport\'s most premium residential areas — large detached homes with demanding homeowners who expect professional standards for every aspect of their property management including bin hygiene.',
    propertyTypes:'Large detached homes, executive properties — bins positioned prominently on well-maintained driveways where appearance matters',
    nearbyAreas:['cheadle-hulme-bin','hazel-grove-bin','stockport-bin'] },

  { slug:'eccles-bin', name:'Eccles', postcode:'M30',
    region:'manchester', borough:'Salford', tier:2,
    councilName:'Salford City Council',
    collectionFrequency:'Weekly general waste, fortnightly recycling managed by Salford City Council',
    localContext:'Eccles has a busy residential rental market — Victorian terraces with high tenant turnover create consistent demand, and landlords managing multiple properties are ideal commercial bin cleaning clients.',
    propertyTypes:'Victorian terraces, semis, private rental properties — dense residential streets with good route density',
    nearbyAreas:['salford-bin','monton-bin','salford-quays-bin'] },

  { slug:'stretford-bin', name:'Stretford', postcode:'M32',
    region:'manchester', borough:'Trafford', tier:2,
    councilName:'Trafford Council',
    collectionFrequency:'Weekly general waste, fortnightly recycling managed by Trafford Council',
    localContext:'Stretford sits between Manchester city and Trafford — a dense residential area with active family and rental properties generating steady bin cleaning demand within our established service area.',
    propertyTypes:'Terraced houses, semis, mixed rental and owner-occupied properties — consistent route density',
    nearbyAreas:['sale-bin','chorlton-bin','eccles-bin'] },

  { slug:'urmston-bin', name:'Urmston', postcode:'M41',
    region:'manchester', borough:'Trafford', tier:2,
    councilName:'Trafford Council',
    collectionFrequency:'Weekly general waste, fortnightly recycling managed by Trafford Council',
    localContext:'A family-focused Trafford suburb where homeowners take pride in their properties — bin cleaning fits perfectly into Urmston families\' household service routines.',
    propertyTypes:'Family semis, detached homes, private lets — residential streets with good kerbside access',
    nearbyAreas:['sale-bin','eccles-bin','stretford-bin'] },

  { slug:'salford-bin', name:'Salford', postcode:'M5',
    region:'manchester', borough:'Salford', tier:1,
    councilName:'Salford City Council',
    collectionFrequency:'Weekly general waste, fortnightly recycling managed by Salford City Council',
    localContext:'Salford\'s large residential market — from city centre regenerated apartments to Victorian terrace streets — creates consistent bin cleaning demand across a wide range of property types and clients.',
    propertyTypes:'City centre apartments, Victorian terraces, HMOs — varied stock generating varied bin cleaning needs',
    nearbyAreas:['salford-quays-bin','eccles-bin','manchester-city-centre-bin'] },

  { slug:'prestwich-bin', name:'Prestwich', postcode:'M25',
    region:'manchester', borough:'Bury', tier:1,
    councilName:'Bury Metropolitan Borough Council',
    collectionFrequency:'Weekly general waste, fortnightly recycling managed by Bury MBC',
    localContext:'One of North Manchester\'s most sought-after suburbs — large family properties with professional residents who regularly invest in home services including bin cleaning.',
    propertyTypes:'Large Edwardian and interwar semis, detached family homes — bins typically stored at side of house or in rear gardens',
    nearbyAreas:['bury-bin','whitefield-bin','salford-bin'] },

  { slug:'bury-bin', name:'Bury', postcode:'BL9',
    region:'manchester', borough:'Bury', tier:1,
    councilName:'Bury Metropolitan Borough Council',
    collectionFrequency:'Weekly general waste, fortnightly recycling managed by Bury MBC',
    localContext:'Bury\'s large residential base and active Metrolink commuter population create consistent demand — family homes and rental properties alike benefit from regular bin hygiene maintenance.',
    propertyTypes:'Victorian terraces, family semis, modern estate housing — dense residential streets with good route potential',
    nearbyAreas:['prestwich-bin','radcliffe-bin','whitefield-bin'] },

  { slug:'bolton-bin', name:'Bolton', postcode:'BL1',
    region:'manchester', borough:'Bolton', tier:1,
    councilName:'Bolton Council',
    collectionFrequency:'Weekly general waste, fortnightly recycling managed by Bolton Council',
    localContext:'Bolton\'s large family residential base across its Victorian terraces and modern estates creates consistent demand for affordable, reliable bin cleaning from a local team.',
    propertyTypes:'Victorian terraces, family semis, council and private housing — high density residential areas with strong route potential',
    nearbyAreas:['bury-bin','wigan-bin'] },

  { slug:'wigan-bin', name:'Wigan', postcode:'WN1',
    region:'manchester', borough:'Wigan', tier:1,
    councilName:'Wigan Council',
    collectionFrequency:'Weekly general waste, fortnightly recycling managed by Wigan Council',
    localContext:'Wigan\'s large residential market spans Victorian terraces to new estate builds — active homeowner and rental base generating consistent bin cleaning demand, with relatively low existing competition.',
    propertyTypes:'Victorian terraces, new build estates, family homes — mixed housing stock with good suburban density',
    nearbyAreas:['bolton-bin','leigh-bin'] },

  { slug:'oldham-bin', name:'Oldham', postcode:'OL1',
    region:'manchester', borough:'Oldham', tier:1,
    councilName:'Oldham Council',
    collectionFrequency:'Weekly general waste, fortnightly recycling managed by Oldham Council',
    localContext:'Oldham\'s diverse residential market — from Victorian mill terraces to modern estates — creates consistent demand for affordable, reliable bin cleaning. Competition in Oldham is thin despite the population.',
    propertyTypes:'Victorian terraces, semis, diverse private rental and owner-occupied mix — dense residential streets',
    nearbyAreas:['rochdale-bin','failsworth-bin'] },

  { slug:'rochdale-bin', name:'Rochdale', postcode:'OL11',
    region:'manchester', borough:'Rochdale', tier:1,
    councilName:'Rochdale Borough Council',
    collectionFrequency:'Weekly general waste, fortnightly recycling managed by Rochdale Borough Council',
    localContext:'Rochdale\'s expanding commuter population via Metrolink is driving demand for home services including bin cleaning — a growing market with low existing competition.',
    propertyTypes:'Victorian terraces, family semis, modern developments — varied stock along the Metrolink corridor',
    nearbyAreas:['oldham-bin','bury-bin','heywood-bin'] },

  { slug:'levenshulme-bin', name:'Levenshulme', postcode:'M19',
    region:'manchester', borough:'Manchester', tier:2,
    councilName:'Manchester City Council',
    collectionFrequency:'Weekly general waste, fortnightly recycling',
    localContext:'Levenshulme is attracting young professional families from Didsbury — its Victorian terraces and growing rental market bring a new wave of bin cleaning subscribers who expect the same quality as Didsbury at a slightly lower price point.',
    propertyTypes:'Victorian terraces, owner-occupied family homes, professional rental properties',
    nearbyAreas:['didsbury-bin','burnage-bin','fallowfield-bin'] },

  { slug:'rusholme-bin', name:'Rusholme', postcode:'M14',
    region:'manchester', borough:'Manchester', tier:2,
    councilName:'Manchester City Council',
    collectionFrequency:'Weekly general waste, fortnightly recycling',
    localContext:'The Curry Mile\'s dense residential streets behind the restaurants have a very active rental market — food smells from the hospitality strip make bin hygiene particularly important for residents, driving above-average demand.',
    propertyTypes:'Terraced houses, HMOs, mixed-use residential — bins regularly challenged by strong food odours from nearby restaurant activity',
    nearbyAreas:['fallowfield-bin','moss-side-bin','hulme-bin'] },

  { slug:'hulme-bin', name:'Hulme', postcode:'M15',
    region:'manchester', borough:'Manchester', tier:2,
    councilName:'Manchester City Council',
    collectionFrequency:'Weekly general waste, fortnightly recycling',
    localContext:'Hulme\'s regenerated estates and proximity to the city centre create a diverse residential client base — from long-term council tenants to new private renters in modern builds.',
    propertyTypes:'New-build estates, regenerated housing, modern flats and private lets',
    nearbyAreas:['manchester-city-centre-bin','moss-side-bin','rusholme-bin'] },

  { slug:'whalley-range-bin', name:'Whalley Range', postcode:'M16',
    region:'manchester', borough:'Manchester', tier:2,
    councilName:'Manchester City Council',
    collectionFrequency:'Weekly general waste, fortnightly recycling',
    localContext:'Whalley Range\'s large Victorian properties split into flats generate significant bin demand — multiple flat bins in one property means multiple subscription opportunities from a single address.',
    propertyTypes:'Large Victorian houses converted to flats, family rentals — buildings with multiple bin sets per property',
    nearbyAreas:['chorlton-bin','moss-side-bin','old-trafford-bin'] },

  { slug:'burnage-bin', name:'Burnage', postcode:'M19',
    region:'manchester', borough:'Manchester', tier:2,
    councilName:'Manchester City Council',
    collectionFrequency:'Weekly general waste, fortnightly recycling',
    localContext:'A quiet residential suburb between Didsbury and Levenshulme — stable family homeowner base who appreciate reliable, recurring services.',
    propertyTypes:'Interwar semis, terraced houses, family rental and owner-occupied mix',
    nearbyAreas:['didsbury-bin','levenshulme-bin','withington-bin'] },

  { slug:'hazel-grove-bin', name:'Hazel Grove', postcode:'SK7',
    region:'manchester', borough:'Stockport', tier:2,
    councilName:'Stockport Metropolitan Borough Council',
    collectionFrequency:'Weekly general waste, fortnightly recycling managed by Stockport MBC',
    localContext:'A busy residential suburb on the A6 corridor — family homes with active children and pets generate consistent bin cleaning demand throughout the year.',
    propertyTypes:'Semis, terraces, family rentals — active family households generating regular organic waste',
    nearbyAreas:['bramhall-bin','stockport-bin','marple-bin'] },

  { slug:'reddish-bin', name:'Reddish', postcode:'SK5',
    region:'manchester', borough:'Stockport', tier:2,
    councilName:'Stockport Metropolitan Borough Council',
    collectionFrequency:'Weekly general waste, fortnightly recycling managed by Stockport MBC',
    localContext:'On the Stockport/Manchester border, Reddish has a dense private rental market — consistent bin cleaning demand from both landlords and resident homeowners.',
    propertyTypes:'Terraced houses, interwar semis, private rental properties',
    nearbyAreas:['stockport-bin','levenshulme-bin','gorton-bin'] },

  { slug:'gorton-bin', name:'Gorton', postcode:'M18',
    region:'manchester', borough:'Manchester', tier:2,
    councilName:'Manchester City Council',
    collectionFrequency:'Weekly general waste, fortnightly recycling',
    localContext:'Gorton has a growing private rental market alongside long-established residential streets — a large, underserved market for affordable professional bin cleaning.',
    propertyTypes:'Terraced houses, council and private lets, regeneration housing',
    nearbyAreas:['levenshulme-bin','longsight-bin','reddish-bin'] },

  { slug:'longsight-bin', name:'Longsight', postcode:'M12',
    region:'manchester', borough:'Manchester', tier:2,
    councilName:'Manchester City Council',
    collectionFrequency:'Weekly general waste, fortnightly recycling',
    localContext:'One of Manchester\'s most densely populated inner suburbs — large private rental market with high occupancy rates generating consistent bin demand across M12.',
    propertyTypes:'Terraced houses, HMOs, mixed-use residential and private lets',
    nearbyAreas:['gorton-bin','rusholme-bin','ardwick-bin'] },

  // ═══════════════════════════════════════════════
  // CREWE & CHESHIRE EAST
  // ═══════════════════════════════════════════════

  { slug:'crewe-bin', name:'Crewe', postcode:'CW1',
    region:'crewe', borough:'Cheshire East', tier:1,
    councilName:'Cheshire East Council',
    collectionFrequency:'Fortnightly general waste, fortnightly recycling on alternate weeks (Cheshire East)',
    localContext:'Crewe\'s large and diverse private rental market — from Victorian terraces to modern estates — creates consistent bin cleaning demand. Cheshire East\'s fortnightly collections mean bins can get very dirty between empties, increasing demand for regular cleaning.',
    propertyTypes:'Victorian terraces, modern estate homes, private lets — all generating fortnightly waste that builds up significantly',
    nearbyAreas:['nantwich-bin','sandbach-bin'] },

  { slug:'nantwich-bin', name:'Nantwich', postcode:'CW5',
    region:'crewe', borough:'Cheshire East', tier:1,
    councilName:'Cheshire East Council',
    collectionFrequency:'Fortnightly general waste, fortnightly recycling on alternate weeks',
    localContext:'Nantwich\'s affluent homeowners and premium rural properties create a high-value bin cleaning market — they expect the same professional standards for their bins as for everything else on their beautiful properties.',
    propertyTypes:'Georgian townhouses, premium semis, rural cottages — bins often on prominent display in well-maintained front approaches',
    nearbyAreas:['crewe-bin','sandbach-bin'] },

  { slug:'wilmslow-bin', name:'Wilmslow', postcode:'SK9',
    region:'crewe', borough:'Cheshire East', tier:1,
    councilName:'Cheshire East Council',
    collectionFrequency:'Fortnightly general waste, fortnightly recycling on alternate weeks',
    localContext:'Wilmslow is Cheshire\'s most prestigious address — Premier League footballer territory where professional bin cleaning is simply part of maintaining an immaculate property. Cheshire East\'s fortnightly collections make regular cleaning between empties even more valuable.',
    propertyTypes:'Large detached homes, gated developments, luxury properties — bins are part of kerbside presentation in one of England\'s wealthiest postcodes',
    nearbyAreas:['alderley-edge-bin','knutsford-bin','cheadle-hulme-bin'] },

  { slug:'knutsford-bin', name:'Knutsford', postcode:'WA16',
    region:'crewe', borough:'Cheshire East', tier:1,
    councilName:'Cheshire East Council',
    collectionFrequency:'Fortnightly general waste, fortnightly recycling on alternate weeks',
    localContext:'A beautiful Cheshire market town with affluent homeowners — they maintain their Georgian properties and countryside homes to the highest standard, and expect the same from their bin cleaning provider.',
    propertyTypes:'Georgian townhouses, countryside semis, premium rural properties',
    nearbyAreas:['wilmslow-bin','altrincham-bin'] },

  { slug:'macclesfield-bin', name:'Macclesfield', postcode:'SK10',
    region:'crewe', borough:'Cheshire East', tier:1,
    councilName:'Cheshire East Council',
    collectionFrequency:'Fortnightly general waste, fortnightly recycling on alternate weeks',
    localContext:'Macclesfield\'s mix of Victorian terraces and premium Peak District properties creates a varied bin cleaning market — from rental turnovers to premium homeowner subscriptions.',
    propertyTypes:'Victorian terraces, premium semis, Peak District commuter homes',
    nearbyAreas:['wilmslow-bin','crewe-bin'] },

  { slug:'sandbach-bin', name:'Sandbach', postcode:'CW11',
    region:'crewe', borough:'Cheshire East', tier:2,
    councilName:'Cheshire East Council',
    collectionFrequency:'Fortnightly general waste, fortnightly recycling on alternate weeks',
    localContext:'Sandbach is a growing family town — new builds and period properties with young professional families who appreciate the convenience of subscription bin cleaning.',
    propertyTypes:'New build estates, semis, Victorian town centre properties',
    nearbyAreas:['crewe-bin','middlewich-bin'] },

  // ═══════════════════════════════════════════════
  // LIVERPOOL (selective key areas)
  // ═══════════════════════════════════════════════

  { slug:'sefton-park-bin', name:'Sefton Park', postcode:'L17',
    region:'liverpool', borough:'Liverpool', tier:1,
    councilName:'Liverpool City Council',
    collectionFrequency:'Weekly general waste, fortnightly recycling managed by Liverpool City Council',
    localContext:'Sefton Park\'s large Victorian houses and premium residential streets are exactly the demographic that subscribes to bin cleaning — professional families who invest in maintaining their beautiful properties.',
    propertyTypes:'Large Victorian houses, premium flats — bins typically in rear yards or side access, some with street-facing presentation',
    nearbyAreas:['aigburth-bin','allerton-bin'] },

  { slug:'allerton-bin', name:'Allerton', postcode:'L18',
    region:'liverpool', borough:'Liverpool', tier:1,
    councilName:'Liverpool City Council',
    collectionFrequency:'Weekly general waste, fortnightly recycling managed by Liverpool City Council',
    localContext:'One of Liverpool\'s most affluent suburbs — large family homes where residents maintain high standards across every aspect of their property, including bin hygiene.',
    propertyTypes:'Large detached homes, premium semis, executive properties',
    nearbyAreas:['sefton-park-bin','woolton-bin','mossley-hill-bin'] },

  { slug:'southport-bin', name:'Southport', postcode:'PR8',
    region:'liverpool', borough:'Sefton', tier:1,
    councilName:'Sefton Council',
    collectionFrequency:'Weekly general waste, fortnightly recycling managed by Sefton Council',
    localContext:'Southport\'s large Airbnb and holiday let market creates exceptional bin cleaning demand — holiday properties generate excessive waste from guest changeovers, and owners need reliable cleaning between bookings.',
    propertyTypes:'Holiday lets, Airbnb properties, Victorian family homes — unique demand from short-term rental changeovers',
    nearbyAreas:['formby-bin'] },

  // ═══════════════════════════════════════════════
  // STOKE (selective key areas)
  // ═══════════════════════════════════════════════

  { slug:'newcastle-under-lyme-bin', name:'Newcastle-under-Lyme', postcode:'ST5',
    region:'stoke', borough:'Newcastle-under-Lyme', tier:1,
    councilName:'Newcastle-under-Lyme Borough Council',
    collectionFrequency:'Fortnightly general waste, fortnightly recycling on alternate weeks',
    localContext:'Newcastle-under-Lyme\'s student and professional population around Keele University creates consistent bin cleaning demand — landlords managing student HMOs particularly benefit from regular bin hygiene service.',
    propertyTypes:'Student HMOs, family semis, professional lets around the university',
    nearbyAreas:['stoke-bin'] },

  { slug:'stoke-bin', name:'Stoke-on-Trent', postcode:'ST4',
    region:'stoke', borough:'Stoke-on-Trent', tier:1,
    councilName:'Stoke-on-Trent City Council',
    collectionFrequency:'Weekly general waste, fortnightly recycling managed by Stoke-on-Trent City Council',
    localContext:'Stoke\'s large residential market and active rental sector create consistent demand for affordable, reliable bin cleaning across all six towns.',
    propertyTypes:'Victorian terraces, semis, mixed private and social rental housing',
    nearbyAreas:['newcastle-under-lyme-bin'] },
]

// ─────────────────────────────────────────────────────────────────
// PRICING — transparent (competitors range £6–£7.99/bin/month)
// Our launch pricing undercuts wheelie-bincleaning.co.uk by £1/bin
// ─────────────────────────────────────────────────────────────────

export const BIN_PRICING = {
  subscription: [
    { label: '1 bin — 4-weekly', monthlyPerBin: 6.99, annualPerBin: 79.99, saving: 'Save £4/year' },
    { label: '2 bins — 4-weekly', monthlyPerBin: 6.49, annualPerBin: 74.99, saving: 'Most popular' },
    { label: '3+ bins — 4-weekly', monthlyPerBin: 5.99, annualPerBin: 69.99, saving: 'Best value' },
  ],
  oneOff: { perBin: 10.00, label: 'One-off clean' },
  commercial: { from: 12.00, label: 'Commercial bins (240L–1100L) — from £12/bin' },
}

// ─────────────────────────────────────────────────────────────────
// FAQ BUILDER — 10 questions unique per location
// Beats all Manchester competitors (most have 0–3 FAQs)
// ─────────────────────────────────────────────────────────────────

export function buildBinFAQ(loc: BinLocation) {
  return [
    {
      q: `How much does wheelie bin cleaning cost in ${loc.name}?`,
      a: `thefamgroup wheelie bin cleaning in ${loc.name} starts from £6.99 per bin per month on a four-weekly subscription. Two bins cost £6.49 each per month. One-off cleans are £10 per bin. We beat most local competitors on price while offering a more thorough clean — hot water pressure wash, biodegradable sanitiser, and deodoriser every visit.`
    },
    {
      q: `How often should I have my wheelie bins cleaned in ${loc.name}?`,
      a: `We recommend cleaning every four weeks for most ${loc.name} households — this aligns with ${loc.councilName}'s ${loc.collectionFrequency}. Cleaning immediately after your bin is emptied on collection day means we can always access a completely empty bin for the most thorough clean possible.`
    },
    {
      q: `Do I need to be home for wheelie bin cleaning in ${loc.name}?`,
      a: `No. We work from the kerbside on your collection day — after ${loc.councilName} empties your bin and returns it to your property, our team cleans it without any need for access to your home. We send a text message when the clean is complete. Most ${loc.name} clients never need to be present.`
    },
    {
      q: `What does your bin cleaning service in ${loc.name} include?`,
      a: `Every bin clean includes: full high-pressure wash inside and out with 90°C water, application of biodegradable antibacterial sanitiser (kills 99.9% of bacteria), deodoriser treatment eliminating smells at source, and safe capture and disposal of all waste water in compliance with Environment Agency guidelines. We never let waste water drain into roads or gardens.`
    },
    {
      q: `Which bins do you clean in ${loc.name}?`,
      a: `We clean all standard ${loc.councilName} wheelie bins — general waste (black or grey), recycling bins (brown and blue), and garden waste bins. We also clean commercial bins for businesses, restaurants, and managed properties in ${loc.name}. If your bin is unusual or oversized, call 07767 759 013 and we'll confirm we can accommodate it.`
    },
    {
      q: `Is your bin cleaning service in ${loc.name} environmentally safe?`,
      a: `Yes. We use 100% biodegradable cleaning agents and capture all wastewater in our onboard tank — it never enters drains, gutters, or watercourses. We operate under a Waste Carrier Licence from the Environment Agency and comply with all water company discharge regulations. Environmentally responsible operation is a legal requirement, and we take it seriously.`
    },
    {
      q: `Can you clean communal bins for an apartment building in ${loc.name}?`,
      a: `Yes. We offer commercial bin cleaning contracts for apartment buildings, managed properties, student accommodation, and commercial premises across ${loc.name}. Communal bin stores and large wheelie bins (240L, 360L, 660L, 1100L) are all catered for. Contact us to discuss a bespoke contract for your building.`
    },
    {
      q: `How do I cancel my bin cleaning subscription?`,
      a: `There is no minimum contract and no tie-in period. You can cancel at any time with no penalty by calling 07767 759 013 or emailing info@thefamgroup.uk. We're confident our service quality will keep you — but we never lock customers in.`
    },
    {
      q: `What areas near ${loc.name} do you cover for bin cleaning?`,
      a: `In addition to ${loc.name} (${loc.postcode}), we cover ${loc.nearbyAreas.slice(0,3).map(a => a.replace('-bin','')).join(', ')} and the wider ${loc.borough} area. Call 07767 759 013 to confirm coverage for your specific postcode.`
    },
    {
      q: `Can you also clean my house alongside my bins in ${loc.name}?`,
      a: `Yes — and this is where thefamgroup is unique. We're the only bin cleaning provider in ${loc.name} that also offers domestic cleaning, carpet cleaning, end of tenancy cleaning, and office cleaning. Many clients combine a bin cleaning subscription with a fortnightly home clean, saving on travel costs. Ask about our combined service discount when you book.`
    },
  ]
}

export const BIN_REGIONS = {
  manchester: { name: 'Greater Manchester', tagline: 'All 10 Boroughs', councils: ['Manchester City Council','Salford City Council','Trafford Council','Stockport MBC','Tameside MBC','Wigan Council','Bolton Council','Bury MBC','Oldham Council','Rochdale Borough Council'] },
  crewe: { name: 'Crewe & Cheshire East', tagline: 'Cheshire Coverage', councils: ['Cheshire East Council'] },
  stoke: { name: 'Stoke-on-Trent & Staffordshire', tagline: 'The Potteries', councils: ['Stoke-on-Trent City Council','Newcastle-under-Lyme Borough Council'] },
  liverpool: { name: 'Liverpool & Merseyside', tagline: 'City & Suburbs', councils: ['Liverpool City Council','Sefton Council'] },
}

export const TOTAL_BIN_LOCATIONS = BIN_LOCATIONS.length
