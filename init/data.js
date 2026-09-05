const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description: "Escape to this charming beachfront cottage with breathtaking ocean views.",
    image: {
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60",
      filename: "listingimage"
    },
    price: 1500,
    location: "Malibu",
    country: "United States",
    category: "Beachfront",
    owner: "6a9bfe45460f29ffab59bdcd"
  },
  {
    title: "Modern Loft in Downtown",
    description: "Stay in the heart of the city with easy access to all top attractions.",
    image: {
      url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=60",
      filename: "listingimage"
    },
    price: 1200,
    location: "New York",
    country: "United States",
    category: "Iconic Cities",
    owner: "6a9bfe46460f29ffab59bdce"
  },
  {
    title: "Mountain Retreat",
    description: "Enjoy fresh mountain air and stunning valley views in this wood cabin.",
    image: {
      url: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=60",
      filename: "listingimage"
    },
    price: 1000,
    location: "Aspen",
    country: "United States",
    category: "Mountains",
    owner: "6a9bfe47460f29ffab59bdcf"
  },
  {
    title: "Historic Castle Villa",
    description: "Live like royalty in a restored medieval castle with modern luxury.",
    image: {
      url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?auto=format&fit=crop&w=800&q=60",
      filename: "listingimage"
    },
    price: 2500,
    location: "Florence",
    country: "Italy",
    category: "Castles",
    owner: "6a9bfe47460f29ffab59bdd0"
  },
  {
    title: "Secluded Treehouse Getaway",
    description: "Unique treehouse experience surrounded by lush green forests.",
    image: {
      url: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?auto=format&fit=crop&w=800&q=60",
      filename: "listingimage"
    },
    price: 800,
    location: "Portland",
    country: "United States",
    category: "Camping",
    owner: "6a9bfe48460f29ffab59bdd1"
  },
  {
    title: "Beachfront Villa with Pool",
    description: "Step out directly onto white sands from your private infinity pool villa.",
    image: {
      url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=60",
      filename: "listingimage"
    },
    price: 2000,
    location: "Cancun",
    country: "Mexico",
    category: "Amazing Pools",
    owner: "6a9bfe45460f29ffab59bdcd"
  },
  {
    title: "Rustic Farmhouse Stay",
    description: "Experience authentic rural life on an organic countryside farm.",
    image: {
      url: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=60",
      filename: "listingimage"
    },
    price: 900,
    location: "Tuscany",
    country: "Italy",
    category: "Farms",
    owner: "6a9bfe46460f29ffab59bdce"
  },
  {
    title: "Luxury Penthouse Suite",
    description: "360-degree city skyline views with premium amenities and rooftop pool.",
    image: {
      url: "https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=800&q=60",
      filename: "listingimage"
    },
    price: 3500,
    location: "Dubai",
    country: "United Arab Emirates",
    category: "Iconic Cities",
    owner: "6a9bfe47460f29ffab59bdcf"
  },
  {
    title: "Arctic Glass Igloo",
    description: "Watch the Northern Lights directly from your cozy heated glass bed.",
    image: {
      url: "https://images.unsplash.com/photo-1517824806704-9040b037703b?auto=format&fit=crop&w=800&q=60",
      filename: "listingimage"
    },
    price: 3000,
    location: "Rovaniemi",
    country: "Finland",
    category: "Arctic",
    owner: "6a9bfe47460f29ffab59bdd0"
  },
  {
    title: "Lakefront Log Cabin",
    description: "Serene lakeside cottage ideal for fishing, kayaking, and star gazing.",
    image: {
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=60",
      filename: "listingimage"
    },
    price: 1100,
    location: "Lake Tahoe",
    country: "United States",
    category: "Trending",
    owner: "6a9bfe48460f29ffab59bdd1"
  },
  {
    title: "Charming City Room",
    description: "Private cozy room in a vintage home located in a cultural neighborhood.",
    image: {
      url: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=800&q=60",
      filename: "listingimage"
    },
    price: 650,
    location: "London",
    country: "United Kingdom",
    category: "Rooms",
    owner: "6a9bfe45460f29ffab59bdcd"
  },
  {
    title: "Private Island Paradise",
    description: "Entire private island surrounded by crystal clear ocean waters.",
    image: {
      url: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=60",
      filename: "listingimage"
    },
    price: 10000,
    location: "Maldives",
    country: "Maldives",
    category: "Trending",
    owner: "6a9bfe46460f29ffab59bdce"
  },
  {
    title: "Traditional Heritage Haveli",
    description: "Experience royal Rajasthani hospitality in a centuries-old haveli.",
    image: {
      url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=60",
      filename: "listingimage"
    },
    price: 1800,
    location: "Jaipur",
    country: "India",
    category: "Castles",
    owner: "6a9bfe47460f29ffab59bdcf"
  },
  {
    title: "Modern Glass Villa in Hills",
    description: "Floor-to-ceiling glass design overlooking lush tea plantation hills.",
    image: {
      url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=60",
      filename: "listingimage"
    },
    price: 2200,
    location: "Munnar",
    country: "India",
    category: "Mountains",
    owner: "6a9bfe47460f29ffab59bdd0"
  },
  {
    title: "Bohemian Desert Glamping",
    description: "Luxury safari tents equipped with air conditioning under desert stars.",
    image: {
      url: "https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=800&q=60",
      filename: "listingimage"
    },
    price: 750,
    location: "Jaisalmer",
    country: "India",
    category: "Camping",
    owner: "6a9bfe48460f29ffab59bdd1"
  },
  {
    title: "Cliffside Sunset Villa",
    description: "Stunning views of the Mediterranean Aegean sea with private plunge pool.",
    image: {
      url: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=60",
      filename: "listingimage"
    },
    price: 2800,
    location: "Santorini",
    country: "Greece",
    category: "Amazing Pools",
    owner: "6a9bfe45460f29ffab59bdcd"
  },
  {
    title: "Minimalist Studio Apartment",
    description: "Sleek modern studio near metro station, cafes, and nightlife spots.",
    image: {
      url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=60",
      filename: "listingimage"
    },
    price: 850,
    location: "Tokyo",
    country: "Japan",
    category: "Rooms",
    owner: "6a9bfe46460f29ffab59bdce"
  },
  {
    title: "Alpine Ski Chalet",
    description: "Ski-in ski-out chalet with indoor fireplace and mountain vistas.",
    image: {
      url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=60",
      filename: "listingimage"
    },
    price: 3200,
    location: "Zermatt",
    country: "Switzerland",
    category: "Arctic",
    owner: "6a9bfe47460f29ffab59bdcf"
  },
  {
    title: "Organic Vineyards Villa",
    description: "Stay in the middle of grape vineyards with complimentary wine tasting.",
    image: {
      url: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=60",
      filename: "listingimage"
    },
    price: 1600,
    location: "Bordeaux",
    country: "France",
    category: "Farms",
    owner: "6a9bfe47460f29ffab59bdd0"
  },
  {
    title: "Overwater Bungalow",
    description: "Direct sea access from your balcony deck in tropical waters.",
    image: {
      url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=800&q=60",
      filename: "listingimage"
    },
    price: 4500,
    location: "Bora Bora",
    country: "French Polynesia",
    category: "Beachfront",
    owner: "6a9bfe48460f29ffab59bdd1"
  },
  {
    title: "Historic Canal House",
    description: "17th-century restored townhouse along famous city water canals.",
    image: {
      url: "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?auto=format&fit=crop&w=800&q=60",
      filename: "listingimage"
    },
    price: 1400,
    location: "Amsterdam",
    country: "Netherlands",
    category: "Iconic Cities",
    owner: "6a9bfe45460f29ffab59bdcd"
  },
  {
    title: "Bamboo Eco Lodge",
    description: "Sustainably built open-air bamboo house in tropical rainforest.",
    image: {
      url: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=60",
      filename: "listingimage"
    },
    price: 950,
    location: "Bali",
    country: "Indonesia",
    category: "Trending",
    owner: "6a9bfe46460f29ffab59bdce"
  },
  {
    title: "Mediterranean Stone Villa",
    description: "Classic white-stone villa with private patio and olive tree gardens.",
    image: {
      url: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=60",
      filename: "listingimage"
    },
    price: 1900,
    location: "Mykonos",
    country: "Greece",
    category: "Beachfront",
    owner: "6a9bfe47460f29ffab59bdcf"
  },
  {
    title: "Snowy Peak Lodge",
    description: "Cozy timber stay with hot tub facing snow covered mountains.",
    image: {
      url: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=60",
      filename: "listingimage"
    },
    price: 2100,
    location: "Banff",
    country: "Canada",
    category: "Mountains",
    owner: "6a9bfe47460f29ffab59bdd0"
  },
  {
    title: "Chateau in French Countryside",
    description: "Grand French estate with lush green gardens and private tennis court.",
    image: {
      url: "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?auto=format&fit=crop&w=800&q=60",
      filename: "listingimage"
    },
    price: 3800,
    location: "Provence",
    country: "France",
    category: "Castles",
    owner: "6a9bfe48460f29ffab59bdd1"
  },
  {
    title: "Tropical Treehouse Villa",
    description: "Elevated treehouse stay with panoramic jungle and ocean views.",
    image: {
      url: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=60",
      filename: "listingimage"
    },
    price: 1250,
    location: "Phuket",
    country: "Thailand",
    category: "Camping",
    owner: "6a9bfe45460f29ffab59bdcd"
  },
  {
    title: "Modern Oasis with Pool",
    description: "Sleek architecture with heated infinity pool and sun loungers.",
    image: {
      url: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=60",
      filename: "listingimage"
    },
    price: 2600,
    location: "Palm Springs",
    country: "United States",
    category: "Amazing Pools",
    owner: "6a9bfe46460f29ffab59bdce"
  },
  {
    title: "Old Town Heritage Flat",
    description: "Cobblestone street apartment walking distance to historic monuments.",
    image: {
      url: "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?auto=format&fit=crop&w=800&q=60",
      filename: "listingimage"
    },
    price: 1150,
    location: "Prague",
    country: "Czech Republic",
    category: "Rooms",
    owner: "6a9bfe47460f29ffab59bdcf"
  },
  {
    title: "Lakeside Ranch Stay",
    description: "Horseback riding, farm animals, and bonfire nights by the lake.",
    image: {
      url: "https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?auto=format&fit=crop&w=800&q=60",
      filename: "listingimage"
    },
    price: 1050,
    location: "Montana",
    country: "United States",
    category: "Farms",
    owner: "6a9bfe47460f29ffab59bdd0"
  },
  {
    title: "Secluded Arctic Dome",
    description: "Stargazing geodesic dome with private sauna in snowy wilderness.",
    image: {
      url: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?auto=format&fit=crop&w=800&q=60",
      filename: "listingimage"
    },
    price: 2400,
    location: "Tromso",
    country: "Norway",
    category: "Arctic",
    owner: "6a9bfe48460f29ffab59bdd1"
  },
  {
    title: "Skyline Luxury Penthouse",
    description: "High-floor luxury stay offering unobstructed harbor views.",
    image: {
      url: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?auto=format&fit=crop&w=800&q=60",
      filename: "listingimage"
    },
    price: 3100,
    location: "Sydney",
    country: "Australia",
    category: "Iconic Cities",
    owner: "6a9bfe45460f29ffab59bdcd"
  },
  {
    title: "Coastal Cliff Cottage",
    description: "Watch ocean waves crash against rugged cliffs right from your porch.",
    image: {
      url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=800&q=60",
      filename: "listingimage"
    },
    price: 1350,
    location: "Cornwall",
    country: "United Kingdom",
    category: "Beachfront",
    owner: "6a9bfe46460f29ffab59bdce"
  },
  {
    title: "Pine Forest A-Frame Cabin",
    description: "Cozy triangular wooden cabin hidden inside tall pine trees.",
    image: {
      url: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=800&q=60",
      filename: "listingimage"
    },
    price: 890,
    location: "Oregon",
    country: "United States",
    category: "Mountains",
    owner: "6a9bfe47460f29ffab59bdcf"
  },
  {
    title: "Royal Palace Suite",
    description: "Intricate marble interiors, courtyard fountains, and royal dining.",
    image: {
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=60",
      filename: "listingimage"
    },
    price: 2900,
    location: "Udaipur",
    country: "India",
    category: "Castles",
    owner: "6a9bfe47460f29ffab59bdd0"
  },
  {
    title: "Safari Tent Lodge",
    description: "Luxury tented camp in the heart of wildlife national park reserves.",
    image: {
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=60",
      filename: "listingimage"
    },
    price: 1700,
    location: "Serengeti",
    country: "Tanzania",
    category: "Camping",
    owner: "6a9bfe48460f29ffab59bdd1"
  },
  {
    title: "Villa with Heated Pool",
    description: "Year-round outdoor swimming pool surrounded by private gardens.",
    image: {
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=60",
      filename: "listingimage"
    },
    price: 2300,
    location: "Marrakech",
    country: "Morocco",
    category: "Amazing Pools",
    owner: "6a9bfe45460f29ffab59bdcd"
  },
  {
    title: "Private Room in Art Flat",
    description: "Creative decorated room inside a spacious artist loft space.",
    image: {
      url: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=60",
      filename: "listingimage"
    },
    price: 550,
    location: "Berlin",
    country: "Germany",
    category: "Rooms",
    owner: "6a9bfe46460f29ffab59bdce"
  },
  {
    title: "Traditional Country Homestead",
    description: "Fresh produce gardens, chicken coops, and tranquil farm fields.",
    image: {
      url: "https://images.unsplash.com/photo-1500076656116-558758c991c1?auto=format&fit=crop&w=800&q=60",
      filename: "listingimage"
    },
    price: 780,
    location: "Devon",
    country: "United Kingdom",
    category: "Farms",
    owner: "6a9bfe47460f29ffab59bdcf"
  },
  {
    title: "Northern Aurora Hut",
    description: "Remote snowy wilderness hut equipped with glass viewing ceilings.",
    image: {
      url: "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=800&q=60",
      filename: "listingimage"
    },
    price: 2700,
    location: "Fairbanks",
    country: "United States",
    category: "Arctic",
    owner: "6a9bfe47460f29ffab59bdd0"
  },
  {
    title: "Beachfront Coral Villa",
    description: "Steps away from vibrant coral reefs ideal for snorkeling.",
    image: {
      url: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=60",
      filename: "listingimage"
    },
    price: 2100,
    location: "Fiji",
    country: "Fiji",
    category: "Beachfront",
    owner: "6a9bfe48460f29ffab59bdd1"
  },
  {
    title: "Modern Highrise Apartment",
    description: "Centrally located sleek apartment close to financial and shopping districts.",
    image: {
      url: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=60",
      filename: "listingimage"
    },
    price: 1300,
    location: "Singapore",
    country: "Singapore",
    category: "Iconic Cities",
    owner: "6a9bfe45460f29ffab59bdcd"
  },
  {
    title: "Himalayan View Cottage",
    description: "Peaceful stay with crystal clear views of snowcapped Himalayan peaks.",
    image: {
      url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=60",
      filename: "listingimage"
    },
    price: 950,
    location: "Manali",
    country: "India",
    category: "Mountains",
    owner: "6a9bfe46460f29ffab59bdce"
  },
  {
    title: "Chateau in the Hills",
    description: "Historical stone architecture surrounded by private valley pine forests.",
    image: {
      url: "https://images.unsplash.com/photo-1541971875076-8f970d573be6?auto=format&fit=crop&w=800&q=60",
      filename: "listingimage"
    },
    price: 2800,
    location: "Edinburgh",
    country: "United Kingdom",
    category: "Castles",
    owner: "6a9bfe47460f29ffab59bdcf"
  },
  {
    title: "Luxury Lagoon Pool Villa",
    description: "Private lagoon style swimming pool with tropical garden waterfall.",
    image: {
      url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=800&q=60",
      filename: "listingimage"
    },
    price: 2450,
    location: "Koh Samui",
    country: "Thailand",
    category: "Amazing Pools",
    owner: "6a9bfe47460f29ffab59bdd0"
  },
  {
    title: "Cosy Guest Room in Villa",
    description: "Sunny private bedroom with ensuite bath in a quiet neighborhood.",
    image: {
      url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=60",
      filename: "listingimage"
    },
    price: 480,
    location: "Barcelona",
    country: "Spain",
    category: "Rooms",
    owner: "6a9bfe48460f29ffab59bdd1"
  },
  {
    title: "Country Dairy Farm",
    description: "Wake up to fresh milk, farm animals, and open green pastures.",
    image: {
      url: "https://images.unsplash.com/photo-1527853784096-2125008f5d76?auto=format&fit=crop&w=800&q=60",
      filename: "listingimage"
    },
    price: 780,
    location: "Waikato",
    country: "New Zealand",
    category: "Farms",
    owner: "6a9bfe45460f29ffab59bdcd"
  },
  {
    title: "Ice Hotel Experience Suite",
    description: "Carved entirely out of ice with thermal sleeping bags included.",
    image: {
      url: "https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?auto=format&fit=crop&w=800&q=60",
      filename: "listingimage"
    },
    price: 3300,
    location: "Jukkasjarvi",
    country: "Sweden",
    category: "Arctic",
    owner: "6a9bfe46460f29ffab59bdce"
  },
  {
    title: "White Sand Beach Villa",
    description: "Direct walk to turquoise sea water with private sun deck.",
    image: {
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=60",
      filename: "listingimage"
    },
    price: 1950,
    location: "Zanzibar",
    country: "Tanzania",
    category: "Beachfront",
    owner: "6a9bfe47460f29ffab59bdcf"
  },
  {
    title: "Downtown Sky Loft",
    description: "Floor to ceiling glass windows with panoramic view of downtown skyline.",
    image: {
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=60",
      filename: "listingimage"
    },
    price: 1650,
    location: "Toronto",
    country: "Canada",
    category: "Iconic Cities",
    owner: "6a9bfe47460f29ffab59bdd0"
  },
  {
    title: "Hilltop Wooden Cabin",
    description: "Breathtaking valley fog views with outdoor firepit and hammock.",
    image: {
      url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=60",
      filename: "listingimage"
    },
    price: 1100,
    location: "Wayanad",
    country: "India",
    category: "Trending",
    owner: "6a9bfe48460f29ffab59bdd1"
  }
];

module.exports = { data: sampleListings };