// lib/postcode-gap-locations.ts
// 25 Greater Manchester postcode districts with zero prior page coverage,
// found via a cross-check against Wikipedia's official M/OL/WN/BL/SK postcode-area
// coverage tables. Merged into LOCATIONS_EXPANDED so each gets a service page
// per entry in SERVICES automatically. Lat/lng are approximate area centres.
import type { LocationData } from './locations-expanded'

export const POSTCODE_GAP_LOCATIONS: LocationData[] = [
  // ── M2: Manchester city centre, civic/business core ──
  { slug:'st-peters-square', name:'St Peter\'s Square', postcode:'M2', region:'manchester', borough:'Manchester', tier:1, localContext:'The civic and business heart of Manchester around the Town Hall and Peter Street — a dense mix of corporate offices, hotels, and a fast-growing number of new-build apartments above street level.', propertyTypes:'High-rise apartments, serviced offices, hotel-adjacent lets', nearbyAreas:['Manchester City Centre','Spinningfields','Deansgate'], lat:53.4794, lng:-2.2453 },

  // ── M6: Salford, Pendleton ──
  { slug:'pendleton', name:'Pendleton', postcode:'M6', region:'manchester', borough:'Salford', tier:2, localContext:'A long-established Salford residential district with a large council and ex-council housing stock alongside newer private developments — consistent demand for affordable regular cleaning and end of tenancy turnovers.', propertyTypes:'Ex-council semis and maisonettes, terraces, private lets', nearbyAreas:['Eccles','Weaste','Charlestown'], lat:53.4889, lng:-2.2869 },

  // ── M7: Salford, Broughton ──
  { slug:'broughton', name:'Broughton', postcode:'M7', region:'manchester', borough:'Salford', tier:2, localContext:'Higher and Lower Broughton sit just north of Salford city centre with a large, diverse private rental population including a significant student and young professional base near the universities.', propertyTypes:'Victorian terraces, converted flats, student lets, HMOs', nearbyAreas:['Salford','Cheetham Hill','Crumpsall'], lat:53.5041, lng:-2.2550 },

  // ── M11: Manchester, Openshaw ──
  { slug:'openshaw', name:'Openshaw', postcode:'M11', region:'manchester', borough:'Manchester', tier:2, localContext:'An east Manchester district of Victorian terraces and post-war estates undergoing steady regeneration, with an active private rental market serving the nearby Etihad Campus and industrial employers.', propertyTypes:'Victorian terraces, estate housing, private lets', nearbyAreas:['Gorton','Clayton','Beswick'], lat:53.4784, lng:-2.1811 },

  // ── M13: Manchester, Chorlton-on-Medlock (university area) ──
  { slug:'chorlton-on-medlock', name:'Chorlton-on-Medlock', postcode:'M13', region:'manchester', borough:'Manchester', tier:1, localContext:'Sandwiched between the Manchester and MMU campuses, this is one of the city\'s densest student and young-professional rental markets — extremely high EOT turnover every summer and a strong recurring-clean market the rest of the year.', propertyTypes:'Student HMOs, converted townhouses, purpose-built student accommodation', nearbyAreas:['Ardwick','Longsight','Manchester City Centre'], lat:53.4653, lng:-2.2280 },

  // ── M17: Trafford, Trafford Park ──
  { slug:'trafford-park', name:'Trafford Park', postcode:'M17', region:'manchester', borough:'Trafford', tier:1, localContext:'Europe\'s largest industrial estate and home to the Trafford Centre and intu retail complex — heavy demand here is commercial: office cleaning, retail unit cleaning, and warehouse/industrial contracts rather than residential.', propertyTypes:'Industrial units, retail premises, office parks, warehousing', nearbyAreas:['Stretford','Old Trafford','Urmston'], lat:53.4631, lng:-2.3159 },

  // ── M23: Manchester, Baguley (Wythenshawe) ──
  { slug:'baguley', name:'Baguley', postcode:'M23', region:'manchester', borough:'Manchester', tier:2, localContext:'Part of the wider Wythenshawe estate, Baguley is a large residential area close to Manchester Airport with a strong family rental market and consistent demand for affordable regular cleaning.', propertyTypes:'Estate semis, council and ex-council housing, family rentals', nearbyAreas:['Wythenshawe','Northenden','Brooklands'], lat:53.3880, lng:-2.2900 },

  // ── M29: Wigan, Tyldesley ──
  { slug:'tyldesley', name:'Tyldesley', postcode:'M29', region:'manchester', borough:'Wigan', tier:2, localContext:'A former mill town between Wigan and Manchester with a mix of Victorian terraces and newer estates — an active private rental market with good transport links keeping EOT and regular cleaning demand steady.', propertyTypes:'Victorian terraces, semis, modern estates', nearbyAreas:['Atherton','Leigh','Astley'], lat:53.5176, lng:-2.4717 },

  // ── M38: Salford, Little Hulton ──
  { slug:'little-hulton', name:'Little Hulton', postcode:'M38', region:'manchester', borough:'Salford', tier:3, localContext:'A residential township on the western edge of Salford with a large proportion of social and ex-council housing, giving steady demand for affordable regular and end of tenancy cleaning.', propertyTypes:'Ex-council semis, estate housing, family rentals', nearbyAreas:['Walkden','Worsley','Boothstown'], lat:53.5265, lng:-2.3989 },

  // ── M44: Salford, Irlam ──
  { slug:'irlam', name:'Irlam', postcode:'M44', region:'manchester', borough:'Salford', tier:2, localContext:'A Manchester Ship Canal town with a mix of established family housing and newer riverside developments — a settled, family-led rental and homeowner market with consistent regular-cleaning demand.', propertyTypes:'Semis, terraces, newer canal-side developments', nearbyAreas:['Cadishead','Partington','Urmston'], lat:53.4357, lng:-2.4209 },

  // ── OL2: Oldham, Royton ──
  { slug:'royton', name:'Royton', postcode:'OL2', region:'manchester', borough:'Oldham', tier:2, localContext:'A large Oldham suburb with a strong owner-occupier and family rental base — steady demand for regular cleaning and end of tenancy turnovers between the town\'s mix of older and newer housing stock.', propertyTypes:'Victorian terraces, interwar semis, modern estates', nearbyAreas:['Oldham','Shaw','Chadderton'], lat:53.5656, lng:-2.1264 },

  // ── OL3: Oldham, Saddleworth ──
  { slug:'saddleworth', name:'Saddleworth', postcode:'OL3', region:'manchester', borough:'Oldham', tier:2, localContext:'A cluster of Pennine villages (Uppermill, Dobcross, Delph, Diggle) on the edge of the Peak District — premium stone cottages and a strong holiday-let market mean demand leans towards deep cleaning, Airbnb turnovers, and periodic carpet care.', propertyTypes:'Stone cottages, period townhouses, holiday lets', nearbyAreas:['Oldham','Mossley','Diggle'], lat:53.5444, lng:-2.0239 },

  // ── OL4: Oldham, Lees/Waterhead ──
  { slug:'lees', name:'Lees', postcode:'OL4', region:'manchester', borough:'Oldham', tier:3, localContext:'A residential village on Oldham\'s eastern edge bordering Saddleworth, with a mix of terraced streets and larger family homes giving a varied spread of regular cleaning and deep cleaning demand.', propertyTypes:'Terraces, semis, larger family homes', nearbyAreas:['Oldham','Saddleworth','Waterhead'], lat:53.5363, lng:-2.0869 },

  // ── OL7: Tameside, Ashton-under-Lyne (Hurst) ──
  { slug:'hurst', name:'Hurst', postcode:'OL7', region:'manchester', borough:'Tameside', tier:2, localContext:'The eastern side of Ashton-under-Lyne, Hurst is a settled residential area with a steady private rental market and good links into the town centre — consistent EOT and regular cleaning demand.', propertyTypes:'Terraces, semis, private lets', nearbyAreas:['Ashton-under-Lyne','Waterloo','Hartshead'], lat:53.4953, lng:-2.0742 },

  // ── OL8: Oldham, Bardsley ──
  { slug:'bardsley', name:'Bardsley', postcode:'OL8', region:'manchester', borough:'Oldham', tier:3, localContext:'A residential district on Oldham\'s southern edge with a mix of older terraces and estate housing, giving dependable demand for affordable regular and end of tenancy cleaning.', propertyTypes:'Terraces, estate semis, private lets', nearbyAreas:['Oldham','Hathershaw','Bardsley Vale'], lat:53.5208, lng:-2.1053 },

  // ── OL12: Rochdale, Whitworth ──
  { slug:'whitworth', name:'Whitworth', postcode:'OL12', region:'manchester', borough:'Rochdale', tier:2, localContext:'A Pennine valley town on the northern edge of Rochdale borough with a mix of stone terraces and newer housing — a settled, family-led market with steady regular cleaning and deep cleaning demand.', propertyTypes:'Stone terraces, semis, family homes', nearbyAreas:['Rochdale','Bacup','Wardle'], lat:53.6553, lng:-2.1811 },

  // ── OL15: Rochdale, Littleborough ──
  { slug:'littleborough', name:'Littleborough', postcode:'OL15', region:'manchester', borough:'Rochdale', tier:2, localContext:'A Pennine market town on the Yorkshire border with a strong owner-occupier market and a growing commuter population thanks to its train station — demand leans towards regular cleaning and periodic deep cleans.', propertyTypes:'Stone terraces, semis, commuter family homes', nearbyAreas:['Rochdale','Smithy Bridge','Summit'], lat:53.6425, lng:-2.0967 },

  // ── OL16: Rochdale, Milnrow ──
  { slug:'milnrow', name:'Milnrow', postcode:'OL16', region:'manchester', borough:'Rochdale', tier:2, localContext:'A large Rochdale suburb with its own Metrolink stop, Milnrow has a mix of established terraces and newer family estates with consistent demand for both regular and end of tenancy cleaning.', propertyTypes:'Terraces, modern estates, family homes', nearbyAreas:['Rochdale','Newhey','Smallbridge'], lat:53.6075, lng:-2.1142 },

  // ── WN3: Wigan, Ince-in-Makerfield ──
  { slug:'ince', name:'Ince-in-Makerfield', postcode:'WN3', region:'manchester', borough:'Wigan', tier:2, localContext:'A former mining township just east of Wigan town centre with a dense terraced housing stock and an active private rental market, giving consistent EOT and regular cleaning demand.', propertyTypes:'Victorian terraces, private lets, HMOs', nearbyAreas:['Wigan','Platt Bridge','Hindley'], lat:53.5363, lng:-2.6042 },

  // ── WN4: Wigan, Ashton-in-Makerfield ──
  { slug:'ashton-in-makerfield', name:'Ashton-in-Makerfield', postcode:'WN4', region:'manchester', borough:'Wigan', tier:1, localContext:'A substantial town in its own right between Wigan and Warrington, with a large and varied residential market spanning Victorian terraces to new-build estates — strong, steady demand across all our core services.', propertyTypes:'Victorian terraces, new-build estates, family homes', nearbyAreas:['Orrell','Wigan','Garswood'], lat:53.4847, lng:-2.6472 },

  // ── WN5: Wigan, Orrell ──
  { slug:'orrell', name:'Orrell', postcode:'WN5', region:'manchester', borough:'Wigan', tier:2, localContext:'A popular residential suburb west of Wigan town centre with a strong owner-occupier market and good motorway access, giving steady demand for regular cleaning and periodic deep cleans.', propertyTypes:'Semis, detached homes, family rentals', nearbyAreas:['Wigan','Billinge','Pemberton'], lat:53.5369, lng:-2.6694 },

  // ── WN6: Wigan, Standish ──
  { slug:'standish', name:'Standish', postcode:'WN6', region:'manchester', borough:'Wigan', tier:1, localContext:'A large, affluent town on Wigan\'s northern edge with a strong family homeowner base and excellent motorway links — consistent demand for regular cleaning, deep cleaning, and carpet care across a wide range of property sizes.', propertyTypes:'Detached and semi-detached family homes, new-build estates', nearbyAreas:['Shevington','Wigan','Appley Bridge'], lat:53.5906, lng:-2.6667 },

  // ── BL0: Bury, Ramsbottom ──
  { slug:'ramsbottom', name:'Ramsbottom', postcode:'BL0', region:'manchester', borough:'Bury', tier:1, localContext:'A picturesque East Lancashire Railway town popular with commuters and increasingly with holiday-let owners — a premium residential market alongside a growing Airbnb presence driven by the town\'s independent shops and restaurants.', propertyTypes:'Stone terraces, period cottages, premium family homes, holiday lets', nearbyAreas:['Edenfield','Bury','Tottington'], lat:53.6453, lng:-2.3175 },

  // ── BL8: Bury, Tottington ──
  { slug:'tottington', name:'Tottington', postcode:'BL8', region:'manchester', borough:'Bury', tier:2, localContext:'A large village between Bury and Ramsbottom with a strong family homeowner market and a growing new-build estate presence, giving steady demand for regular cleaning and deep cleans.', propertyTypes:'Stone terraces, semis, new-build estates', nearbyAreas:['Bury','Ramsbottom','Greenmount'], lat:53.6225, lng:-2.3272 },

  // ── SK2: Stockport, Offerton ──
  { slug:'offerton', name:'Offerton', postcode:'SK2', region:'manchester', borough:'Stockport', tier:2, localContext:'A large Stockport suburb with a mix of established semis and newer estate housing, giving dependable demand for regular cleaning and end of tenancy turnovers close to the town centre.', propertyTypes:'Semis, estate housing, family rentals', nearbyAreas:['Stockport','Hazel Grove','Woodley'], lat:53.3953, lng:-2.1286 },
]
