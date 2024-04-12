const dogProducts = [
    {
      "name": "Premium Dog Food",
      "img": "https://m.media-amazon.com/images/I/61Wea-IaWDL.jpg",
      "description": "High-quality dog food enriched with vitamins and minerals, suitable for all breeds and ages.",
      "price": 25.99,
      "weight": "10 kg",
      "brand": "Premium Pets",
      "category": "Food"
    },
    {
      "name": "Grain-Free Dog Food",
      "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvm3LOeAoYng8fXDbB8ljvA1ScIyNnzWBsRA&usqp=CAU",
      "description": "Nutrient-rich dog food without grains, ideal for dogs with sensitive stomachs or allergies.",
      "price": 29.99,
      "weight": "8 kg",
      "brand": "Healthy Paws",
      "category": "Food"
    },
    {
      "name": "Adjustable Dog Harness",
      "description": "Comfortable and durable harness with adjustable straps, suitable for daily walks and training sessions.",
      "img" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDyp3O3-sGZdlUb5SlyaEBRuAaEZtHIMR9GVxnxWkjUYZ4VtfYgawkSRZbJJyqpWRKJ6M&usqp=CAU",
      "price": 19.99,
      "size": "Medium",
      "color": "Red",
      "brand": "Pawsome Gear",
      "category": "Belts"
    },
    {
      "name": "Anti-Tick Dog Collar",
      "description": "Waterproof collar infused with natural oils to repel ticks and fleas, providing long-lasting protection for your dog.",
      "price": 12.49,
      "img" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvXxKO6oi9uLp-l0f8pkJBMx4bqF-uCEyF1A&usqp=CAU",

      "size": "Large",
      "duration": "6 months",
      "brand": "TickShield",
      "category": "Belts"
    },
    {
      "name": "Canine Distemper Vaccine",
      "description": "Essential vaccine to protect your dog against canine distemper virus, administered annually by a veterinarian.",
      "price": 45.99,
      "img" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOL2IQfkBDNWPOPlkbNRwQvFhgMsIdjrYbDw&usqp=CAU",

      "brand": "VetGuard",
      "category": "Vaccines"
    },
    {
      "name": "Designer Dog Sweater",
      "description": "Fashionable and cozy sweater made from premium wool blend, featuring stylish patterns and colors.",
      "price": 35.99,
      "size": "Small",
      "img" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxIcYYoSc-4Q9hB5i59ZXg1DNayNPmYRR-Ww&usqp=CAU",

      "color": "Blue Stripes",
      "brand": "Chic Paws",
      "category": "Clothes"
    },
    {
      "name": "Bird food",
      "img": "https://m.media-amazon.com/images/I/713q7hlIjuL.AC_UL320.jpg",
      "price":" “399”",
      "description": "“Boltz Bird Food for Budgies - 1.2 kg | Natural & Healthy Premium Mix Seeds, | Daily Bird Budgies Food Seeds| All Life Stages”"
      },
      
      {
      "name": "Bird Supplements",
      "img": "https://m.media-amazon.com/images/I/61oCQUF5-aL.SX679.jpg",
      "price": "“549”",
      "description":" “STAR FARMS Birds Care Birds Health Supplements for Improve Bird General Health Supplements - (500 ml) / Healthy Growth, Full Feathering & Brilliant Color”"
      },
      
      {
      "name":" Bird Toys",
      "img":"https://m.media-amazon.com/images/I/51z0G7g3wyL.SX300_SY300_QL70_FMwebp.jpg",
      "price": "“299”",
      "description": "“Boltz Bird Ladder and Hanging chewable Wooden Swing Bird Toys for Budgies,Cockatiel,Finches,Kannur Birds- Made with Bamboo- 3 Piece”"
      },
      
      {
      "name": "Bird Bag",
      "img": "https://m.media-amazon.com/images/I/619RyyCdRBL.AC_UL480_FMwebp_QL65.jpg",
      "price": "“5790”",
      "description": "“CALANDIS Birds Carrier Cage Shoulder Bag Pet Parrot Travel Breathable Backpack Green”"
      },
      
      {
      "name": "Bird Supplements",
      "img": "https://m.media-amazon.com/images/I/41LDmk2ivVL.SX300_SY300_QL70_FMwebp.jpg",
      "price": "299",
      "description": "BOLTZ Cuttlefish Bone for Birds, High Calcium for Finches, Budgies, Conures, Lovebirds, Cockatiels, African Grey, Macaws, Cockato for All Life Stages, 100g, white"
      },
      
      
      
      {
      "name": "Feeder",
      "img": "https://m.media-amazon.com/images/I/41UlNRWBTzL.SY300_SX300_QL70_FMwebp.jpg",
      "price": "446",
      "description": "Amijivdaya Medium Bird and Water Feeder Combo (Green, Transparent)"
      },
      
      {
      "name": "Cage Cleaner",
      "img":  "https://m.media-amazon.com/images/I/61WQJAVqn+L.AC_UL480_FMwebp_QL65.jpg",
      "price": "220",
      "description": "VetSafe Bird Cage Cleaner and Disinfectant, VetSafe Bird Cage Cleaner and Disinfectant is designed to clean, disinfect and deodorize cages of birds and small animals. "
      }
      ,
      {
      "name": "Bird Cage",
      "img":  "https://m.media-amazon.com/images/I/513uSn3r5TL.AC_UL480_FMwebp_QL65.jpg",
      "price": "1150",
      "description": "Metal Bird Cage For Budgies,Finches,Love Birds,Cuttlefish Boneholder,Cuttlefish Bone, 1Perch,2 Cups (30 X 23 X 49 Cms)(Colors May Vary) "
      },
      
      {
      "name": "Bird perch",
      "img": "https://m.media-amazon.com/images/I/61J1sFKvdgL.SX679.jpg",
      "price": "249",
      "description": "KSK Perch Platform for Bird Cage,Natural Wooden ChewToys Perch Stand Platform Bird Toy for Canary Parakeet Cockatiel Parrot Budgie Sparrow"
      },

    //   {
    //     "name": "Smart White Bentonite Cat Litter",
    //     "description": "Natural Composition: Crafted entirely from 100% natural white bentonite clay, ensuring an organic and safe litter choice for your feline friend.
    //                 Dust-Free Formula: Engineered with a dust-free formulation, providing a clean and healthy environment for pets and their owners.",
    //     "price": "354",
    //     "image":"https://m.media-amazon.com/images/I/717Byk66BLL.SL1500.jpg" ,
    // },
    // {
    //     "name": "Drools Real Chicken Biscuits",
    //     "description": "Drools Cat Biscuit is made with real chicken and is a great reward for your cats
    //     Crunchy texture helps to clean teeth and freshen breath which avoids the bad smell from the mouth",
    //     "price": "216",
    //     "image": "https://m.media-amazon.com/images/I/71YmWZBVJlL.SL1500.jpg",
    // },
    // {
    //     "name": "Stainless Steel Printed Pet Bowl",
    //     "description": "The pet bowls are made of stainless steel making them resistant to rust and scratches.
    //     The pet bowls have an anti-skid bottom that gives stability when your pet is feeding out of it without causing any spillage.
    //     ",
    //     "price": "179",
    //     "image": "https://m.media-amazon.com/images/I/81j2BHEDKkL.SL1500.jpg",
    // },
    // {
    //     "name": "Goofy Tails Hemp Paw Cream for Cats",
    //     "description": "Hemp Paw Butter for Cats: Goofy Tails paw cream for cats and kittens provides year round protection and is ideal for alleviating dry, chapped or sore patches of skin.",
    //     "price": "275",
    //     "image": "https://m.media-amazon.com/images/I/61w-wEDxhiL.SL1500.jpg",
    // },
    // {
    //     "name": "Nail Cutter Clipper Trimmer Filer ",
    //     "description": "Stainless steel Sharpness blades: The pet nail clippers are made out of high quality 4.0 mm thick stainless steel sharp blades, it is powerful enough to trim your dogs or cats nails with just one cut, these durable clippers won't bend, scratch or rust, and the blades still keep sharp even through many sessions on dog tough nails.",
    //     "price": "185",
    //     "image": "https://m.media-amazon.com/images/I/71zYsVRmvjL.SL1500.jpg",
    // },
    // {
    //     "name": "Pet Clean Pet Wipes",
    //     "description": "Fresh and refreshing: Pet Clean Grooming Wipes offer a refreshing cherry blossom scent that leaves your pets smelling fresh and clean. Say goodbye to unpleasant odors and embrace the delightful fragrance that lingers after each use.",
    //     "price": "199",
    //     "image": "https://m.media-amazon.com/images/I/51xMd4q7XBL.SL1500.jpg",
    // },
    // {
    //     "name": "Pet Clean Primrose Oil Eye & Ear Pads ",
    //     "description": "Gentle Care for Eyes and Ears: Specially formulated to clean, deodorize, and dry your pet's ears and eyes. These wipes provide a soothing and effective solution for maintaining eye and ear hygiene, ensuring your pet's comfort and well-being.",
    //     "price": "289",
    //     "image": "https://m.media-amazon.com/images/I/41bZHG50S-L.jpg",
    // },

  ];
  
export default dogProducts;