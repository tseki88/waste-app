const bindicator = [
    { "1.1": "Agricultural waste" },
    { "1.1.1": "Deadstock" },
    { "1.1.2": "Silage wrap" },
    { "1.2": "Appliances" },
    { "1.2.1": "Appliances with coolant" },
    { "1.2.2": "Large appliances" },
    { "1.2.3": "Small appliances" },
    { "1.3": "Baby supplies" },
    { "1.3.1": "Baby furniture" },
    { "1.3.2": "Clothing or Blankets" },
    { "1.3.3": "Diapers" },
    { "1.4": "Building materials" },
    { "1.4.1": "Bathroom fixtures" },
    { "1.4.2": "Building supplies" },
    { "1.4.3": "Clean wood" },
    { "1.4.4": "Concrete" },
    { "1.4.5": "Doors or Cabinets or Countertops" },
    { "1.4.6": "Drywall" },
    { "1.4.7": "Flooring" },
    { "1.4.8": "Light fixtures" },
    { "1.4.9": "Stone products or Asphalt" },
    { "1.4.10": "Tools" },
    { "1.4.11": "Treated wood" },
    { "1.5": "Clothing and textiles" },
    { "1.5.1": "Clothing" },
    { "1.5.2": "Textiles" },
    { "1.6": "Craft supplies" },
    { "1.6.1": "Glues and chemicals" },
    { "1.6.2": "Other" },
    { "1.6.3": "Paper products" },
    { "1.6.4": "Sewing supplies" },
    { "1.6.5": "Yarn or Fabric" },
    { "1.7": "Dangerous goods" },
    { "1.7.1": "Ammunition and fireworks" },
    { "1.7.2": "Special hazardous waste" },
    { "1.8": "Electronics and electrical waste" },
    { "1.8.1": "Cell phone" },
    { "1.8.2": "Computers and tablets" },
    { "1.8.3": "Media and accessories" },
    { "1.8.4": "TV or Media player" },
    { "1.9": "Eyewear" },
    { "1.9.1": "Eye glasses" },
    { "1.10": "Food and beverage containers" },
    { "1.10.1": "Alcoholic beverage containers" },
    { "1.10.2": "Beverage containers" },
    { "1.10.3": "Disposable containers or utensils" },
    { "1.10.4": "Recyclable  take out containers" },
    { "1.10.5": "Reusable bottles" },
    { "1.10.6": "Soiled food packaging  paper" },
    { "1.11": "Garbage" },
    { "1.11.1": "Bagged" },
    { "1.11.2": "Bulky item disposal" },
    { "1.11.3": "OversizedItems" },
    { "1.12": "Household hazardous waste" },
    { "1.12.1": "Car or engine related products" },
    { "1.12.2": "Cleaning products" },
    { "1.12.3": "Compressed gas" },
    { "1.12.4": "Disposable batteries" },
    { "1.12.5": "Flammable liquids or solids" },
    { "1.12.6": "Light bulbs" },
    { "1.12.7": "Other chemicals" },
    { "1.12.8": "Paints and coatings" },
    { "1.12.9": "Pesticides" },
    { "1.12.10": "Rechargeable batteries" },
    { "1.13": "Housewares" },
    { "1.13.1": "Decorations" },
    { "1.13.2": "Household items" },
    { "1.13.3": "Indoor furniture" },
    { "1.13.4": "Kitchen items" },
    { "1.13.5": "Luggage or Purses" },
    { "1.13.6": "Mattresses" },
    { "1.13.7": "Outdoor furniture" },
    { "1.13.8": "Pool accessories" },
    { "1.13.9": "Toys" },
    { "1.14": "Kitchen waste" },
    { "1.14.1": "Baked goods" },
    { "1.14.2": "Cooking oil" },
    { "1.14.3": "Fruit and vegetable waste" },
    { "1.14.4": "Meat" },
    { "1.14.5": "Milk and milk products" },
    { "1.14.6": "Non-compostable items" },
    { "1.14.7": "Other" },
    { "1.14.8": "Other compostable items" },
    { "1.14.9": "Pasta and grains" },
    { "1.14.10": "Prepared food or leftovers" },
    { "1.15": "Medical or homecare supplies" },
    { "1.15.1": "Equipment" },
    { "1.15.2": "Incontinence" },
    { "1.15.3": "Medical supplies" },
    { "1.15.4": "Medication" },
    { "1.15.5": "Sharps" },
    { "1.16": "Office supplies" },
    { "1.16.1": "Equipment" },
    { "1.16.2": "Office chemicals" },
    { "1.16.3": "Paper" },
    { "1.16.4": "Shredded paper" },
    { "1.16.5": "Specialty paper" },
    { "1.16.6": "Supplies" },
    { "1.17": "Packaging" },
    { "1.17.1": "Boxboard" },
    { "1.17.2": "Cardboard" },
    { "1.17.3": "Glass" },
    { "1.17.4": "Large mouth tubs and lids produce container" },
    { "1.17.5": "Large rigid plastic items" },
    { "1.17.6": "Metal can" },
    { "1.17.7": "Paper" },
    { "1.17.8": "Plastic bags" },
    { "1.17.9": "Plastic film and blister pack" },
    { "1.17.10": "Polystrene styrofoam" },
    { "1.17.11": "Rigid plastic bottles" },
    { "1.17.12": "Spiral cardboard can" },
    { "1.18": "Personal care products" },
    { "1.18.1": "Disposable hygiene items" },
    { "1.18.2": "Hair colour" },
    { "1.18.3": "Nail products" },
    { "1.18.4": "Personal care products" },
    { "1.19": "Pet waste" },
    { "1.19.1": "Pet accessories" },
    { "1.19.2": "Pet waste" },
    { "1.20": "Printed materials" },
    { "1.20.1": "Advertising" },
    { "1.20.2": "Books" },
    { "1.20.3": "Magazines or newspapers" },
    { "1.21": "Seasonal" },
    { "1.21.1": "Decorations" },
    { "1.21.2": "Gift wrap" },
    { "1.21.3": "Outdoor decorations organic" },
    { "1.22": "Sharp metals" },
    { "1.22.1": "Motorized vehicles and parts" },
    { "1.22.2": "Other metal items" },
    { "1.23": "Shoes" },
    { "1.23.1": "Other shoes" },
    { "1.23.2": "Running shoes" },
    { "1.24": "Sporting goods" },
    { "1.24.1": "Bicycle" },
    { "1.24.2": "Fishing line" },
    { "1.24.3": "Other sports equipment" },
    { "1.25": "Tires" },
    { "1.25.1": "Car and truck tires" },
    { "1.25.2": "Small tires" },
    { "1.25.3": "Tractor tires" },
    { "1.26": "Yard waste" },
    { "1.26.1": "Grass clippings" },
    { "1.26.2": "Leaves and branches" },
    { "1.26.3": "Roots and stumps" },
    { "1.26.4": "Seasonal decorations" },
    { "1.26.5": "Seaweed" },
    { "1.26.6": "Sod" },
    { "1.26.7": "Soil or Clean fill" }
]


const fullData = [
    {
        "name": "Dead Animal",
        "description": "Do not place dead animals in your green bin or garbage. York Region Waste Facilities do not accept these items.  Please contact your local municipality for animal control services.",
        "search": "\nDead Animal,Deadstock,Wildlife,Dead Fish,Animal Carcass,Carcass",
        "tag": [],
        "category": "Agricultural waste",
        "subCategory": "Deadstock"
    },
    {
        "name": "Silage Wrap",
        "description": "This item is garbage. It can be disposed of as garbage at the Georgina Waste Transfer Station or York Region's Community Environmental Centres.  Fees will apply.  Click \"Where it Goes\" icons for location details.  This item may be eligible for curbside collection.  Contact your local municipality for collection information.",
        "search": "\nSilage Wrap,Farm Bale Wrap,Twine,Water Softener Salt Bags",
        "tag": [
            "York Region Waste Facility",
            "Community Drop off"
        ],
        "category": "Agricultural waste",
        "subCategory": "Silage wrap"
    },
    {
        "name": "Appliance With Coolant",
        "description": "This item can be dropped off at select waste depots for recycling. Click 'Where it goes' icon for nearest locations. A chlorofluorocarbon (CFC) removal fee will apply.  This item may also be eligible for collection at the curb. Please check your local municipal website or waste calendar for further information.",
        "search": "\nAppliance With Coolant,Fridge,Freezer,Air Conditioner,Dehumidifier,Water Cooler,Refrigerator,Chest freezer",
        "tag": [
            "York Region Waste Facility"
        ],
        "category": "Appliances",
        "subCategory": "Appliances with coolant"
    },
    {
        "name": "Deep Fryer",
        "description": "This item can be recycled as electronics at York Region Waste Facilities. Click the “Where it Goes\" icons for recycling locations. Please remove oil and food prior to drop off.  Limit of two TVs and six electronic items per visit at York Region depots.",
        "search": "\nDeep Fryer,Fryer",
        "tag": [
            "York Region Waste Facility"
        ],
        "category": "Appliances",
        "subCategory": "Large appliances"
    },
    {
        "name": "Disposable Razor",
        "description": "Please place razors in the garbage with caps over the blades.",
        "search": "\nDisposable Razor,Razor Blades",
        "tag": [
            "Garbage",
            "York Region Waste Facility"
        ],
        "category": "Appliances",
        "subCategory": "Large appliances"
    },
    {
        "name": "Electric Toothbrush",
        "description": "This item can be recycled as electronics at York Region Waste Facilities. Click the “Where it Goes\" icons for recycling locations. Limit of two TVs and six electronic items per visit at York Region depots.",
        "search": "\nElectric Toothbrush",
        "tag": [
            "York Region Waste Facility"
        ],
        "category": "Appliances",
        "subCategory": "Large appliances"
    },
    {
        "name": "Large Appliances",
        "description": "This item can be dropped off as scrap metal, free of charge, at select waste depots. Click icon for nearest locations. A fee may be required if the item cannot be recycled or contains CFCs.",
        "search": "\nLarge Appliances,Dishwasher,Hot Water Tank Empty,Metal Fireplace,Furnace,Heat Pump Exchanger,Oven,Washing Machine,Dryer,Pool Heater/Pump,Metal Filters,Wood Burning Stove,Snow Blower,Washer,Clothes Dryer,Clothes Washer",
        "tag": [
            "York Region Waste Facility"
        ],
        "category": "Appliances",
        "subCategory": "Large appliances"
    },
    {
        "name": "Water Softener",
        "description": "This item can be dropped off as garbage at the Georgina Waste Transfer Station or a Community Environmental Centre (CEC). Disposal fees will apply. Click \"Where it Goes\" icon for nearest locations. Please check your local municipal website or waste calendar to see if this item can also be collected at the curb.",
        "search": "\nWater Softener",
        "tag": [
            "Garbage",
            "York Region Waste Facility"
        ],
        "category": "Appliances",
        "subCategory": "Large appliances"
    },
    {
        "name": "Small Appliances",
        "description": "Items in good condition can be donated to charity at select donation centres.  Acceptance of items is at the discretion of the charity. Items that no longer work or are damaged can be recycled as electronics at York Region Waste Facilities. Click the “Where it Goes\" icons for reuse/recycling locations. Limit of two TVs and six electronic items per visit at York Region depots.",
        "search": "\nSmall Appliances,Popcorn Maker,Humidifier,Microwave Oven,Toaster,Sewing Machine,Air Purifier,Vacuum,Sump Pump,Garbage Compactor,Water Cooler,Electric Typewriter,Hand Mixer,Kettle,Water Kettle,Shredder,Coffee Machine,Coffee Maker,Coffee Grinder,Rice Cooker,Vaporizers,Vaccuum,Vacuum Cleaner,Bottle or Can Dispenser,Can Opener,Carpet Sweeper,Electric Hot Plate,Fan,Food Processor,Glue Gun,Electric Keyboard,Heat Gun,Heater,Hot Drink Dispenser,Iron,Knitting Machine,Mixer,Scissors,Slicing Machine,Toaster Oven,Vacuum Sealer,Watch,Water Purifier,Weaving Machine,Electronic Weigh Scale,Pet Hair Clippers,Battery Charger,Slow Cooker,Lamp,Table Lamp",
        "tag": [
            "York Region Waste Facility",
            "Reuse Donation Centre"
        ],
        "category": "Appliances",
        "subCategory": "Small appliances"
    },
    {
        "name": "Baby Furniture",
        "description": "Items in good condition can be donated at select Reuse Donation Centres. Acceptance of items is at the discretion of the charity. Damaged items that cannot be reused can be disposed for a fee at select York Region Waste Facilities. Click the “Where it Goes\" icons for reuse/disposal locations. Curbside collection may also be available. Check with your local municipality for more information. Tip: This item can be repaired at a furniture repair shop.",
        "search": "\nBaby Furniture,Stroller,Car seat,Crib,Play pen,High chair,Cradle,Gate,Baby gate",
        "tag": [
            "Garbage",
            "York Region Waste Facility",
            "Reuse Donation Centre"
        ],
        "category": "Baby supplies",
        "subCategory": "Baby furniture"
    },
    {
        "name": "Car Seat",
        "description": "Please place this item in your household garbage. Large items may not be suitable for curbside collection. Please check your local municipal website or waste calendar for restrictions. Large items can be dropped off for disposal at a Community Environmental Centre or the Georgina Waste Transfer Station for a fee. Click map icon for locations",
        "search": "\nCar Seat,Car seat,Baby car seat,child car seat,booster seat",
        "tag": [
            "Garbage",
            "York Region Waste Facility",
            "Reuse Donation Centre"
        ],
        "category": "Baby supplies",
        "subCategory": "Baby furniture"
    },
    {
        "name": "Stroller",
        "description": "Please place this item in the garbage. Large items can be dropped off at a Community Environmental Centre (CEC) or the Georgina Waste Transfer Station for a fee. Click icon for nearest locations. Please check your local municipal website or waste calendar to see if this item can also be collected at the curb.",
        "search": "\nStroller",
        "tag": [
            "Garbage",
            "York Region Waste Facility"
        ],
        "category": "Baby supplies",
        "subCategory": "Baby furniture"
    },
    {
        "name": "Baby Wipes",
        "description": "Please place this item in the garbage and do not flush them down the toilet.",
        "search": "\nBaby Wipes,wipes",
        "tag": [
            "Garbage"
        ],
        "category": "Baby supplies",
        "subCategory": "Diapers"
    },
    {
        "name": "Disposable Diaper",
        "description": "Please place disposable diapers in the green bin. Consider switching to cloth diapers as they are a more environmentally friendly alternative that can be used instead of disposable diapers. Did you know? One child requires an estimated 6,000 disposable diapers which is the equivalent to 1 tonne of waste and can save a family an estimated $500 to $2000 per child.",
        "search": "\nDisposable Diaper,Pampers,Huggies,Nappy,Pull-ups,Diapers",
        "tag": [
            "Green Bin"
        ],
        "category": "Baby supplies",
        "subCategory": "Diapers"
    },
    {
        "name": "Bathtub/Sink",
        "description": "This item can be dropped off as scrap metal, free of charge, at select waste depots. Click \"Where it Goes\" icon for nearest locations. A fee may be charged if the item cannot be recycled.",
        "search": "\nBathtub/Sink,Shower Enclosure,Plumbing Fixtures,Faucet,Tub,Bath",
        "tag": [
            "York Region Waste Facility"
        ],
        "category": "Building materials",
        "subCategory": "Bathroom fixtures"
    },
    {
        "name": "Toilet",
        "description": "This item can be dropped off as garbage at the Georgina Waste Transfer Station or a Community Environmental Centre (CEC). Disposal fees will apply. Click \"Where it Goes\" icon for locations.  Please check your local municipal website or waste calendar to see if this item can also be collected at the curb with bulky garbage.",
        "search": "\nToilet",
        "tag": [
            "York Region Waste Facility",
            "Community Drop off"
        ],
        "category": "Building materials",
        "subCategory": "Bathroom fixtures"
    },
    {
        "name": "Building Materials",
        "description": "This item can be dropped off as garbage at the Georgina Waste Transfer Station or a Community Environmental Centre (CEC). Disposal fees will apply. Click \"Where it goes\" icon for locations.  Please check your local municipal website or waste calendar to see if this item can also be collected at the curb.",
        "search": "\nBuilding Materials,PVC Pipe,Fiberglass,Plexiglass,Vapour Barrier,Shingles,Eavestrough,Vents Metal,Fireplace Insert,Curtain Rod,Garage Door,Tar Paper,Roof Shingles,Roofing Shingle,Construction Waste,Asphalt Shingles",
        "tag": [
            "Garbage",
            "York Region Waste Facility",
            "Community Drop off"
        ],
        "category": "Building materials",
        "subCategory": "Building supplies"
    },
    {
        "name": "Drywall Compound",
        "description": "This item can be dropped off as garbage at the Georgina Waste Transfer Station or a Community Environmental Centre. Disposal fees will apply. Click icon for nearest locations.",
        "search": "\nDrywall Compound,Mud,Joint Compound",
        "tag": [
            "Garbage",
            "York Region Waste Facility"
        ],
        "category": "Building materials",
        "subCategory": "Building supplies"
    },
    {
        "name": "Grout",
        "description": "This item can be dropped off as garbage at the Georgina Waste Transfer Station or a Community Environmental Centre (CEC). Disposal fees will apply. Click \"Where it goes\" icon for locations. Please check your local municipal website or waste calendar to see if this item can also be collected at the curb.",
        "search": "\nGrout",
        "tag": [
            "Garbage",
            "York Region Waste Facility",
            "Community Drop off"
        ],
        "category": "Building materials",
        "subCategory": "Building supplies"
    },
    {
        "name": "Insulation",
        "description": "This item can be dropped off as garbage at the Georgina Waste Transfer Station or a Community Environmental Centre (CEC). Disposal fees will apply. Click \"Where it goes\" icon for locations. Please check your local municipal website or waste calendar to see if this item can also be collected at the curb.",
        "search": "\nInsulation",
        "tag": [
            "Garbage",
            "York Region Waste Facility",
            "Community Drop off"
        ],
        "category": "Building materials",
        "subCategory": "Building supplies"
    },
    {
        "name": "Nuts/Bolts",
        "description": "This item can be recycled as scrap metal at select York Region Waste Facilities. Please do not put these items in the blue box.",
        "search": "\nNuts/Bolts,Nails,Screws",
        "tag": [
            "York Region Waste Facility"
        ],
        "category": "Building materials",
        "subCategory": "Building supplies"
    },
    {
        "name": "Painting Supplies",
        "description": "Please place this item in the garbage.",
        "search": "\nPainting Supplies,Sandpaper,Paint Tray,Paintbrush,Tarp",
        "tag": [
            "Garbage"
        ],
        "category": "Building materials",
        "subCategory": "Building supplies"
    },
    {
        "name": "Vinyl Siding",
        "description": "This item can be dropped off as garbage at the Georgina Waste Transfer Station or a Community Environmental Centre. Disposal fees will apply. Click icon for nearest locations. Please check your local municipal website or waste calendar to see if this item can also be collected at the curb.",
        "search": "\nVinyl Siding,Siding",
        "tag": [
            "Garbage",
            "York Region Waste Facility"
        ],
        "category": "Building materials",
        "subCategory": "Building supplies"
    },
    {
        "name": "Window",
        "description": "This item can be dropped off as garbage at the Georgina Waste Transfer Station or a Community Environmental Centre (CEC). Disposal fees will apply. Click \"Where it goes\" icon for locations. Please check your local municipal website or waste calendar to see if this item can also be collected at the curb.",
        "search": "\nWindow",
        "tag": [
            "Garbage",
            "York Region Waste Facility",
            "Community Drop off"
        ],
        "category": "Building materials",
        "subCategory": "Building supplies"
    },
    {
        "name": "Wood",
        "description": "This item can be dropped off at any Community Environmental Centre (CEC) or Georgina Transfer Station for recycling. Clean wood must be separated from treated or painted wood. Nails do not need to be removed. Fees apply, visit york.ca/wastedepots for more information. Click \"Where it Goes\" icon for locations.",
        "search": "\nWood,Lumber,Wooden Pallet,Firewood,Wooden Skid",
        "tag": [
            "York Region Waste Facility",
            "Community Drop off"
        ],
        "category": "Building materials",
        "subCategory": "Clean wood"
    },
    {
        "name": "Concrete",
        "description": "This item can be dropped off at any Community Environmental Centre (CEC) or Georgina Transfer Station for recycling. Concrete must be separated from asphalt and brick. Fees apply, visit york.ca/wastedepots for more information. Click map icon for locations.",
        "search": "\nConcrete,Concrete,Rubble,Patio Stone,Interlocking,Interlocking Stone,Cinder Block",
        "tag": [
            "York Region Waste Facility"
        ],
        "category": "Building materials",
        "subCategory": "Concrete"
    },
    {
        "name": "Doors/Cabinets/Countertops",
        "description": "This item can be dropped off as garbage at the Georgina Waste Transfer Station or a Community Environmental Centre. Disposal fees will apply. Click icon for nearest locations.  Please check your local municipal website or waste calendar to see if this item can also be collected at the curb.",
        "search": "\nDoors/Cabinets/Countertops,Doors,Kitchen Bathroom Counters and Cabinets,Countertop Laminate,Glass Door,Glass Shower Door,Sliding Glass Door,Glass Window",
        "tag": [
            "Garbage",
            "Community Drop off",
            "York Region Waste Facility"
        ],
        "category": "Building materials",
        "subCategory": "Doors/Cabinets/Countertops"
    },
    {
        "name": "Drywall",
        "description": "Clean drywall can be dropped off at any Community Environmental Centre (CEC) or Georgina Transfer Station for recycling. Painted drywall and/or drywall with nails must be separated from clean drywall. Fees apply, visit york.ca/wastedepots for more information. Click map icon for locations.",
        "search": "\nDrywall",
        "tag": [
            "York Region Waste Facility",
            "Community Drop off"
        ],
        "category": "Building materials",
        "subCategory": "Drywall"
    },
    {
        "name": "Acoustic Ceiling Tiles",
        "description": "This item can be dropped off as garbage at the Georgina Waste Transfer Station (no more than 500kg) or a Community Environmental Centre (CEC). Disposal fees will apply. Click icon for nearest locations.",
        "search": "\nAcoustic Ceiling Tiles,Ceiling Tiles",
        "tag": [
            "Garbage",
            "York Region Waste Facility"
        ],
        "category": "Building materials",
        "subCategory": "Flooring"
    },
    {
        "name": "Carpet",
        "description": "This item can be dropped off as garbage at the Georgina Waste Transfer Station (no more than 500kg) or a Community Environmental Centre (CEC). Disposal fees will apply. Click icon for nearest locations. This item may also be suitable for collection at the curb. Please check your local municipal website or waste calendar for further information and set out guidelines.",
        "search": "\nCarpet,Rug,Area Rug",
        "tag": [
            "Garbage",
            "York Region Waste Facility"
        ],
        "category": "Building materials",
        "subCategory": "Flooring"
    },
    {
        "name": "Flooring",
        "description": "This item can be dropped off as garbage at the Georgina Waste Transfer Station (no more than 500kg) or a Community Environmental Centre (CEC). Disposal fees will apply. Click icon for nearest locations.    This item may also be suitable for collection at the curb. Please check your local municipal website or waste calendar for further information and set out guidelines.",
        "search": "\nFlooring,Carpet Underlay,Hardwood Floor,Linoleum Flooring,Parquet,Tiles,Ceramic Tiles,Porcelain,Laminate,Laminate Flooring,Vinyl Flooring",
        "tag": [
            "Garbage",
            "York Region Waste Facility",
            "Community Drop off"
        ],
        "category": "Building materials",
        "subCategory": "Flooring"
    },
    {
        "name": "Light Fixtures",
        "description": "Items in good condition can be donated to charity  Acceptance of items is at the discretion of the charity.   Damaged items can be disposed as garbage for a fee at select York Region Waste Facilities.  Click the “Where it Goes\" icons for reuse/disposal locations.    Curbside collection may also be available.  Check with your local municipality for more information.",
        "search": "\nLight Fixtures,Lantern Fixture,Ceiling Fan",
        "tag": [
            "York Region Waste Facility",
            "Reuse Donation Centre"
        ],
        "category": "Building materials",
        "subCategory": "Light fixtures"
    },
    {
        "name": "Limestone/Asphalt",
        "description": "This item can be dropped off as garbage at the Georgina Waste Transfer Station (no more than 500kg) or a Community Environmental Centre (CEC). Disposal fees will apply. Click icon for nearest locations.",
        "search": "\nLimestone/Asphalt,Stone,Landscape Screening",
        "tag": [
            "York Region Waste Facility"
        ],
        "category": "Building materials",
        "subCategory": "Stone products/Asphalt"
    },
    {
        "name": "Tools",
        "description": "Items in good condition can be donated to charity at select donation centres or at York Region’s Community Environmental Centres.  Acceptance of items is at the discretion of the charity.   Damaged items can be disposed for a fee at select York Region Waste Facilities.  Click the “Where it Goes\" icons for reuse/disposal locations.    Curbside collection may also be available.  Check with your local municipality for more information.",
        "search": "\nTools,Drill,Saw,Ladder,Flashlight,Hammer,Garden Tools,Shovel,Rake,Wheelbarrow,Hose,Garden Hose",
        "tag": [
            "York Region Waste Facility",
            "Reuse Donation Centre",
            "Community Drop off"
        ],
        "category": "Building materials",
        "subCategory": "Tools"
    },
    {
        "name": "Treated Wood",
        "description": "This item can be dropped off as garbage at the Georgina Waste Transfer Station (no more than 500kg) or a Community Environmental Centre (CEC). Disposal fees will apply. Click icon for  locations.",
        "search": "\nTreated Wood,Composite Wood,TREX,Panelling,Railway Tie,Plywood,Particle Board,MDF,Pressure Treated,Wood Fence,Wood Door",
        "tag": [
            "York Region Waste Facility",
            "Community Drop off"
        ],
        "category": "Building materials",
        "subCategory": "Treated wood"
    },
    {
        "name": "Clothing",
        "description": "Items in good condition can be donated. Acceptance of items is at the discretion of the charity. Click the “Where it Goes” icons to find a donation centre. Recycling Depots will take damaged clothing items so long as they are clean, dry and odorless.",
        "search": "\nClothing,Shirt,Sweater,Blouse,Cardigan,T-shirt,Shawl,Bra,Pants,Jeans,Cords,Sweat Pants,Trousers,Dress,Sock,Vest,Hat,Coat,Socks,Leather",
        "tag": [
            "Reuse Donation Centre",
            "Community Drop off",
            "York Region Waste Facility"
        ],
        "category": "Clothing and textiles",
        "subCategory": "Clothing"
    },
    {
        "name": "Coat",
        "description": "Items in good condition can be donated.  Acceptance of items is at the discretion of the charity.   Click the “Where it Goes\" icons to find a donation centre. Select organizations will take damaged items so long as they are clean, dry and odorless. Tip: This item can be repaired by a seamstress.",
        "search": "\nCoat,Blazer,Fur Coat",
        "tag": [
            "Reuse Donation Centre",
            "Community Drop off"
        ],
        "category": "Clothing and textiles",
        "subCategory": "Clothing"
    },
    {
        "name": "Jewelry/Fashion Accessories",
        "description": "Items in good condition can be donated.  Acceptance of items is at the discretion of the charity.   Click the “Where it Goes’ icons to find a donation centre or York Region Community Environmental Centre near you. Tip: This item can be repaired at a jewelry repair shop",
        "search": "\nJewelry/Fashion Accessories,Jewelry,Earrings,Necklace,Belt,Scarf,Hat,Gloves",
        "tag": [
            "York Region Waste Facility",
            "Reuse Donation Centre"
        ],
        "category": "Clothing and textiles",
        "subCategory": "Clothing"
    },
    {
        "name": "Textiles",
        "description": "Items in good condition can be donated. Acceptance of items is at the discretion of the charity. Click the “Where it Goes” icons to find a donation centre. Select organizations will take damaged items so long as they are clean, dry and odorless.",
        "search": "\nTextiles,Fabric,Curtains,Cushion,Upholstery,Rags,Drapes,Window Covering,Blankets,Sheets,Clothes",
        "tag": [
            "Reuse Donation Centre",
            "Community Drop off",
            "York Region Waste Facility"
        ],
        "category": "Clothing and textiles",
        "subCategory": "Clothing"
    },
    {
        "name": "Bedding",
        "description": "Items in good condition can be donated to a reuse charity.  Acceptance of items is at the discretion of the charity.   Click the “Where it Goes\" icons to find a reuse donation centre near you. This item can also be taken to a Community Environmental Centre and recycled as textiles.",
        "search": "\nBedding,Sheet,Sheets,Fitted Sheet,Pillow Case,Duvet Cover,Comforter,Pillow,Pillows,Bed Sheets",
        "tag": [
            "Reuse Donation Centre",
            "Community Drop off"
        ],
        "category": "Clothing and textiles",
        "subCategory": "Textiles"
    },
    {
        "name": "Gym Bag",
        "description": "Items in good condition can be donated. Acceptance of items is at the discretion of the charity. Click the “Where it Goes” icons to find a donation centre. Recycling Depots will take damaged clothing items so long as they are clean, dry and odorless.",
        "search": "\nGym Bag,Backpack",
        "tag": [
            "York Region Waste Facility",
            "Community Drop off",
            "Reuse Donation Centre"
        ],
        "category": "Clothing and textiles",
        "subCategory": "Textiles"
    },
    {
        "name": "Reusable Bag",
        "description": "Items in good condition can be donated.  Acceptance of items is at the discretion of the charity.   Click the “Where it Goes\" icons to find a donation centre near you.",
        "search": "\nReusable Bag",
        "tag": [
            "Reuse Donation Centre",
            "Community Drop off"
        ],
        "category": "Clothing and textiles",
        "subCategory": "Textiles"
    },
    {
        "name": "Textiles",
        "description": "Items in good condition can be donated. Acceptance of items is at the discretion of the charity. Click the “Where it Goes” icons to find a donation centre. Select organizations will take damaged items so long as they are clean, dry and odorless.",
        "search": "\nTextiles,Fabric,Curtains,Cushion,Upholstery,Rags,Drapes,Window Covering,Blankets,Sheets,Clothes",
        "tag": [
            "Reuse Donation Centre",
            "Community Drop off",
            "York Region Waste Facility"
        ],
        "category": "Clothing and textiles",
        "subCategory": "Textiles"
    },
    {
        "name": "Towel",
        "description": "Items in good condition can be donated.  Acceptance of items is at the discretion of the charity.   Click the “Where it Goes’ icons to find a donation centre or York Region Community Environmental Centre near you.",
        "search": "\nTowel,Wash Cloth",
        "tag": [
            "York Region Waste Facility",
            "Reuse Donation Centre"
        ],
        "category": "Clothing and textiles",
        "subCategory": "Textiles"
    },
    {
        "name": "Yarn",
        "description": "Items in good condition can be donated.  Acceptance of items is at the discretion of the charity.   Click the “Where it Goes’ icons to find a donation centre near you.",
        "search": "\nYarn,Wool",
        "tag": [
            "Reuse Donation Centre"
        ],
        "category": "Clothing and textiles",
        "subCategory": "Textiles"
    },
    {
        "name": "Glue",
        "description": "This item is Household Hazardous Waste (HHW) and can be taken to a HHW depot for proper recycling and disposal. Click icon for nearest locations. All HHW should be in original containers and well-marked. Containers are not returnable. Do not mix products. Residents may drop off up to 60L of HHW and 20 fluorescent tubes per day at York Region HHW Depots.",
        "search": "\nGlue,Spray Adhesive",
        "tag": [
            "York Region Waste Facility"
        ],
        "category": "Craft supplies",
        "subCategory": "Glues and chemicals"
    },
    {
        "name": "Chalk",
        "description": "Please place this item in the garbage.",
        "search": "\nChalk",
        "tag": [
            "Garbage"
        ],
        "category": "Craft supplies",
        "subCategory": "Other"
    },
    {
        "name": "Craft Supplies",
        "description": "Please place this item in the garbage.",
        "search": "\nCraft Supplies,Florist Foam,Foamcore,Twist Ties,Play Doh,Clay",
        "tag": [
            "Garbage"
        ],
        "category": "Craft supplies",
        "subCategory": "Other"
    },
    {
        "name": "Photo Album",
        "description": "Items in good condition can be donated. Acceptance of items is at the discretion of the charity. Click the “Where it Goes” icons to find a donation centre. Otherwise unusable or damaged items can go in the garbage.",
        "search": "\nPhoto Album,Picture book,Photo album,Picture album",
        "tag": [
            "Garbage",
            "Reuse Donation Centre"
        ],
        "category": "Craft supplies",
        "subCategory": "Other"
    },
    {
        "name": "Plastic Cleaning Bottle",
        "description": "Please place this item in the blue box.",
        "search": "\nPlastic Cleaning Bottle,Windex spray bottle,cleaning liquid bottle,detergent bottle",
        "tag": [
            "Blue Box"
        ],
        "category": "Craft supplies",
        "subCategory": "Other"
    },
    {
        "name": "Construction Paper",
        "description": "Please place this item loose in the Blue Box.",
        "search": "\nConstruction Paper,Business Cards,Store Receipts",
        "tag": [
            "Blue Box"
        ],
        "category": "Craft supplies",
        "subCategory": "Paper products"
    },
    {
        "name": "Paper products",
        "description": "Please place this item in the blue box.",
        "search": "\nPaper products,Writing Paper,Bristol Board,Sticky Note,File Folder,Envelope,Index Card,Birthday Card,Christmas Card,Card,Envelope with plastic window",
        "tag": [
            "Blue Box"
        ],
        "category": "Craft supplies",
        "subCategory": "Paper products"
    },
    {
        "name": "Sewing Needle",
        "description": "Please place this item in the garbage.  Wrap sharp edges to prevent puncturing of the bag.",
        "search": "\nSewing Needle,Pin,Tack",
        "tag": [
            "Garbage"
        ],
        "category": "Craft supplies",
        "subCategory": "Sewing supplies"
    },
    {
        "name": "String",
        "description": "Please place this item in the garbage.",
        "search": "\nString",
        "tag": [
            "Garbage"
        ],
        "category": "Craft supplies",
        "subCategory": "Sewing supplies"
    },
    {
        "name": "Textiles",
        "description": "Items in good condition can be donated. Acceptance of items is at the discretion of the charity. Click the “Where it Goes” icons to find a donation centre. Select organizations will take damaged items so long as they are clean, dry and odorless.",
        "search": "\nTextiles,Fabric,Curtains,Cushion,Upholstery,Rags,Drapes,Window Covering,Blankets,Sheets,Clothes",
        "tag": [
            "Reuse Donation Centre",
            "Community Drop off",
            "York Region Waste Facility"
        ],
        "category": "Craft supplies",
        "subCategory": "Yarn/Fabric"
    },
    {
        "name": "Yarn",
        "description": "Items in good condition can be donated.  Acceptance of items is at the discretion of the charity.   Click the “Where it Goes’ icons to find a donation centre near you.",
        "search": "\nYarn,Wool",
        "tag": [
            "Reuse Donation Centre"
        ],
        "category": "Craft supplies",
        "subCategory": "Yarn/Fabric"
    },
    {
        "name": "Ammunition",
        "description": "Please contact York Region Police to safely dispose of these items by calling 1-866-876-5423. They do not belong in the garbage, blue box, green bin or at a drop-off depot.",
        "search": "\nAmmunition,guns,bullets,explosives,weapons",
        "tag": [],
        "category": "Dangerous goods",
        "subCategory": "Ammunition and fireworks"
    },
    {
        "name": "Fireworks",
        "description": "Please contact York Region Police to safely dispose of these items by calling 1-866-876-5423. They do not belong in the garbage, blue box, green bin or at a drop-off depot.",
        "search": "\nFireworks,Flares",
        "tag": [],
        "category": "Dangerous goods",
        "subCategory": "Ammunition and fireworks"
    },
    {
        "name": "Asbestos",
        "description": "Please contact a specialized asbestos removal contractor. Search business directories for Asbestos Abatement and Removal. Do not place in the garbage, blue box or green bin. Do not bring these items to a York Region drop-off depot.",
        "search": "\nAsbestos",
        "tag": [],
        "category": "Dangerous goods",
        "subCategory": "Special hazardous waste"
    },
    {
        "name": "Freon",
        "description": "This is commercial hazardous waste. Please contact a hazardous waste disposal company to safely dispose of this waste. It is not accepted at any York Region depot.",
        "search": "\nFreon",
        "tag": [],
        "category": "Dangerous goods",
        "subCategory": "Special hazardous waste"
    },
    {
        "name": "Hydraulic Oil/Fluid",
        "description": "This is commercial hazardous waste. Please contact a hazardous waste disposal company to safely dispose of this waste. It is not accepted at any York Region depot.",
        "search": "\nHydraulic Oil/Fluid",
        "tag": [],
        "category": "Dangerous goods",
        "subCategory": "Special hazardous waste"
    },
    {
        "name": "Lighting Ballast",
        "description": "Lighting ballasts manufactured after 1980 are free of PCBs (polychlorinated biphenyl) and can be disposed of as garbage. Ballasts manufactured before 1980 may contain PCBs and should be disposed by a registered PCB recycler. For further inquiries please contact Access York at 1-866-665-6752.",
        "search": "\nLighting Ballast,Ballast",
        "tag": [
            "Garbage"
        ],
        "category": "Dangerous goods",
        "subCategory": "Special hazardous waste"
    },
    {
        "name": "PCBs",
        "description": "This item is considered Hazardous Waste and requires special handing. Homeowners are advised to seek a qualified company to handle this material. It is not accepted at a York Region Household Hazardous Waste (HHW) depot.",
        "search": "\nPCBs",
        "tag": [],
        "category": "Dangerous goods",
        "subCategory": "Special hazardous waste"
    },
    {
        "name": "Radioactive Waste",
        "description": "This item is considered Hazardous Waste and requires special handing. Homeowners are advised to seek a qualified company to handle this material. It is not accepted at a York Region Household Hazardous Waste (HHW) depot.",
        "search": "\nRadioactive Waste",
        "tag": [],
        "category": "Dangerous goods",
        "subCategory": "Special hazardous waste"
    },
    {
        "name": "Sewage",
        "description": "Please contact a sewage removal company. This is not accepted at any York Region depot.",
        "search": "\nSewage",
        "tag": [],
        "category": "Dangerous goods",
        "subCategory": "Special hazardous waste"
    },
    {
        "name": "Spillkit",
        "description": "This is commercial hazardous waste. Please contact a hazardous waste disposal company to safely dispose of this waste. It is not accepted at any York Region depot.",
        "search": "\nSpillkit",
        "tag": [],
        "category": "Dangerous goods",
        "subCategory": "Special hazardous waste"
    },
    {
        "name": "Transformer",
        "description": "This item is considered Hazardous Waste and requires special handing. Homeowners are advised to seek a qualified company to handle this material. It is not accepted at a York Region Household Hazardous Waste (HHW) depot.",
        "search": "\nTransformer",
        "tag": [],
        "category": "Dangerous goods",
        "subCategory": "Special hazardous waste"
    },
    {
        "name": "Welding Tank",
        "description": "This item is considered Hazardous Waste and requires special handing. Homeowners are advised to seek a qualified company to handle this material. It is not accepted at a York Region Household Hazardous Waste (HHW) depot.",
        "search": "\nWelding Tank,Acetylene Tanks",
        "tag": [],
        "category": "Dangerous goods",
        "subCategory": "Special hazardous waste"
    },
    {
        "name": "Answering Machine",
        "description": "This item is electronic waste (e-waste) and can be taken to a York Region Waste Facility or community drop-off location for proper recycling and disposal. Limit of two TVs, four pieces of computer equipment and six other electronic items per visit at York Region facilities. Some working items may also be accepted by reuse donation centres. Click \"Where it Goes\" icons for locations. Residents are responsible for removing all personal information from items before drop off.",
        "search": "\nAnswering Machine,Electronics,E-waste",
        "tag": [
            "Community Drop off",
            "York Region Waste Facility",
            "Reuse Donation Centre"
        ],
        "category": "Electronics and electrical waste",
        "subCategory": "Cell phone"
    },
    {
        "name": "Cell Phone",
        "description": "This item is electronic waste (e-waste) and can be taken to a York Region Waste Facility or community drop-off location for proper recycling and disposal. Limit of two TVs and six electronic items per visit at York Region depots. Some working items may also be accepted by reuse donation centres. Click \"Where it Goes\" icons for locations. Residents are responsible for removing all personal information from items before drop off. Tip: This item can be repaired at a cellphone repair shop",
        "search": "\nCell Phone,Mobile Phone,Pager,iPhone,Android,Blackberry",
        "tag": [
            "York Region Waste Facility",
            "Community Drop off",
            "Reuse Donation Centre"
        ],
        "category": "Electronics and electrical waste",
        "subCategory": "Cell phone"
    },
    {
        "name": "Phone",
        "description": "This item is electronic waste (e-waste) and can be taken to a York Region Waste Facility or community drop-off location for proper recycling and disposal. Limit of two TVs, four pieces of computer equipment and six other electronic items per visit at York Region facilities. Some working items may also be accepted by reuse donation centres. Click \"Where it Goes\" icons for locations. Residents are responsible for removing all personal information from items before drop off. Tip: This item can be repaired at an electronics repair shop",
        "search": "\nPhone,cordless phone,telephone,electronics,e-waste",
        "tag": [
            "York Region Waste Facility",
            "Community Drop off",
            "Reuse Donation Centre"
        ],
        "category": "Electronics and electrical waste",
        "subCategory": "Cell phone"
    },
    {
        "name": "Computer",
        "description": "This item is electronic waste (e-waste) and can be taken to a York Region Waste Facility or community drop-off location for proper recycling and disposal. Limit of two TVs and six electronic items per visit at York Region depots. Some working items may also be accepted by reuse donation centres. Click \"Where it Goes\" icons for locations. Residents are responsible for removing all personal information from items before drop off. Tip: This item can be repaired at a computer repair shop",
        "search": "\nComputer,Laptop,PC,Apple,Tablet,iPad,Galaxy,Computers",
        "tag": [
            "York Region Waste Facility",
            "Community Drop off",
            "Reuse Donation Centre"
        ],
        "category": "Electronics and electrical waste",
        "subCategory": "Computers and tablets"
    },
    {
        "name": "Computer Accessories",
        "description": "This item is electronic waste (e-waste) and can be taken to a York Region Waste Facility or community drop-off location for proper recycling and disposal. Limit of two TVs and six electronic items per visit at York Region depots. Some working items may also be accepted by reuse donation centres. Click \"Where it Goes\" icons for locations. Residents are responsible for removing all personal information from items before drop off. Tip: This item can be repaired at a computer repair shop",
        "search": "\nComputer Accessories,Mouse,Floppy Disk,Extension Cord,Cable,Charger,Adapter,AC/DC Adapter,Wire,HDMI Cable,Keyboard,Computer Keyboard,Cables,Wires,Electronic Cables,AC Power Socket",
        "tag": [
            "Community Drop off",
            "York Region Waste Facility",
            "Reuse Donation Centre"
        ],
        "category": "Electronics and electrical waste",
        "subCategory": "Computers and tablets"
    },
    {
        "name": "Computer Monitor",
        "description": "This item is electronic waste (e-waste) and can be taken to a York Region Waste Facility or community drop-off location for proper recycling and disposal. Limit of two TVs and six electronic items per visit at York Region depots. Some working items may also be accepted by reuse donation centres. Click \"Where it Goes\" icons for locations. Residents are responsible for removing all personal information from items before drop off. Tip: This item can be repaired at a computer repair shop",
        "search": "\nComputer Monitor,Computer Screen,Monitors,Screens",
        "tag": [
            "Community Drop off",
            "York Region Waste Facility",
            "Reuse Donation Centre"
        ],
        "category": "Electronics and electrical waste",
        "subCategory": "Computers and tablets"
    },
    {
        "name": "Amplifier",
        "description": "This item is electronic waste (e-waste) and can be taken to a York Region Waste Facility or community drop-off location for proper recycling and disposal. Limit of two TVs and six electronic items per visit at York Region depots. Some working items may also be accepted by reuse donation centres. Click \"Where it Goes\" icons for locations. Residents are responsible for removing all personal information from items before drop off.",
        "search": "\nAmplifier,Amp",
        "tag": [
            "York Region Waste Facility",
            "Community Drop off",
            "Reuse Donation Centre"
        ],
        "category": "Electronics and electrical waste",
        "subCategory": "Media and accessories"
    },
    {
        "name": "Audio Accessories",
        "description": "Please place this item in the garbage. Tip: This item can be repaired at an electronics repair shop",
        "search": "\nAudio Accessories,Headphones,Ear Buds,Head Phones,Earphones,Earbud,Earbuds,Headset",
        "tag": [
            "Garbage"
        ],
        "category": "Electronics and electrical waste",
        "subCategory": "Media and accessories"
    },
    {
        "name": "Battery Charger",
        "description": "This item is electronic waste (e-waste) and can be taken to a York Region Waste Facility or community drop-off location for safe recycling and disposal. Limit of two TVs and six electronic items per visit at York Region depots. Some working items may also be accepted by reuse donation centres. Click \"Where it Goes\" icons for locations. Residents are responsible for removing all personal information from items before drop off.",
        "search": "\nBattery Charger",
        "tag": [
            "York Region Waste Facility",
            "Reuse Donation Centre",
            "Community Drop off"
        ],
        "category": "Electronics and electrical waste",
        "subCategory": "Media and accessories"
    },
    {
        "name": "Blender",
        "description": "This item is electronic waste (e-waste) and can be taken to a York Region Waste Facility or community drop-off location for proper recycling and disposal. Limit of two TVs and six electronic items per visit at York Region depots. Please remove the glass jug and place in the garbage. Only the base of the blender is recyclable as electronics.",
        "search": "\nBlender",
        "tag": [
            "York Region Waste Facility"
        ],
        "category": "Electronics and electrical waste",
        "subCategory": "Media and accessories"
    },
    {
        "name": "CD/DVD Case",
        "description": "Please place this item in the garbage.",
        "search": "\nCD/DVD Case,Jewel Case,DVD Case,CD Case,Plastic CD Case",
        "tag": [
            "Garbage"
        ],
        "category": "Electronics and electrical waste",
        "subCategory": "Media and accessories"
    },
    {
        "name": "DVD/CD",
        "description": "Items in good condition can be donated.  Acceptance of items is at the discretion of the charity.   Click the “Where it Goes’ icons to find a donation centre near you.  Damaged items can go in regular garbage.",
        "search": "\nDVD/CD,CD,DVD,Video Game,Blue ray",
        "tag": [
            "Garbage",
            "Reuse Donation Centre",
            "Community Drop off",
            "York Region Waste Facility"
        ],
        "category": "Electronics and electrical waste",
        "subCategory": "Media and accessories"
    },
    {
        "name": "Electric Razor",
        "description": "This item can be recycled as electronics at York Region Waste Facilities. Click the “Where it Goes\" icons for recycling locations. Limit of two TVs and six electronic items per visit at York Region depots.",
        "search": "\nElectric Razor",
        "tag": [
            "York Region Waste Facility"
        ],
        "category": "Electronics and electrical waste",
        "subCategory": "Media and accessories"
    },
    {
        "name": "Electronic Calculator",
        "description": "This item is electronic waste (e-waste) and can be taken to a York Region Waste Facility or community drop-off location for proper recycling and disposal. Limit of two TVs and six electronic items per visit at York Region depots. Some working items may also be accepted by reuse donation centres. Click \"Where it Goes\" icons for locations. Residents are responsible for removing all personal information from items before drop off.",
        "search": "\nElectronic Calculator,Electric Calculator",
        "tag": [
            "York Region Waste Facility",
            "Community Drop off",
            "Reuse Donation Centre"
        ],
        "category": "Electronics and electrical waste",
        "subCategory": "Media and accessories"
    },
    {
        "name": "Electronic Vaping Device",
        "description": "This item is electronic waste (e-waste) and can be taken to a York Region Waste Facility for proper recycling and disposal. Please remove any liquid in the device first. Liquid nicotine is considered household hazardous waste.",
        "search": "\nElectronic Vaping Device,Vape,e-vape,e-cigarette,Electronic Cigarette,Juul,Electrix",
        "tag": [
            "York Region Waste Facility"
        ],
        "category": "Electronics and electrical waste",
        "subCategory": "Media and accessories"
    },
    {
        "name": "Film",
        "description": "Please place this item in the garbage.",
        "search": "\nFilm,Negatives,Slides,Slide,Carousel slides",
        "tag": [
            "Garbage"
        ],
        "category": "Electronics and electrical waste",
        "subCategory": "Media and accessories"
    },
    {
        "name": "Camera",
        "description": "This item is electronic waste (e-waste) and can be taken to a York Region Waste Facility or community drop-off location for proper recycling and disposal. Limit of two TVs and six electronic items per visit at York Region depots. Some working items may also be accepted by reuse donation centres. Click \"Where it Goes\" icons for locations. Residents are responsible for removing all personal information from items before drop off. Tip: This item can be repaired at a camera repair shop",
        "search": "\nCamera,Digital Camera",
        "tag": [
            "Reuse Donation Centre",
            "York Region Waste Facility",
            "Community Drop off"
        ],
        "category": "Electronics and electrical waste",
        "subCategory": "TV/Media player"
    },
    {
        "name": "Radio/Stereo",
        "description": "This item is electronic waste (e-waste) and can be taken to a York Region Waste Facility or community drop-off location for proper recycling and disposal. Limit of two TVs, four pieces of computer equipment and six other electronic items per visit at York Region facilities. Some working items may also be accepted by reuse donation centres. Click \"Where it Goes\" icons for locations. Residents are responsible for removing all personal information from items before drop off. Tip: This item can be repaired at an electronics repair shop",
        "search": "\nRadio/Stereo,Speakers,Sound System,Audio,Electronics,E-waste",
        "tag": [
            "York Region Waste Facility",
            "Reuse Donation Centre",
            "Community Drop off"
        ],
        "category": "Electronics and electrical waste",
        "subCategory": "TV/Media player"
    },
    {
        "name": "TV/Media Player",
        "description": "This item is electronic waste (e-waste) and can be taken to a York Region Waste Facility or community drop-off location for proper recycling and disposal. Limit of two TVs, four pieces of computer equipment and six other electronic items per visit at York Region facilities. Some working items may also be accepted by reuse donation centres. Click \"Where it Goes\" icons for locations. Residents are responsible for removing all personal information from items before drop off. Please do not dismantle TVs. Tip: This item can be repaired at an electronics repair shop",
        "search": "\nTV/Media Player,Television,Blu-Ray,CD Player,VCR,DVD Player,Video,MP3 Player,iPod,Electronics",
        "tag": [
            "York Region Waste Facility",
            "Community Drop off",
            "Reuse Donation Centre"
        ],
        "category": "Electronics and electrical waste",
        "subCategory": "TV/Media player"
    },
    {
        "name": "Video Game System",
        "description": "This item is electronic waste. It can be taken to a York Region depot or community drop-off location for proper recycling and disposal. Some working items may also be accepted by reuse donation centres.  Limit of two TVs, four pieces of computer equipment and six other electronic items per visit at York Region facilities. Click \"Where it Goes\" icon for locations. Residents are responsible for removing all personal information from items before drop off. Tip: This item can be repaired at an electronics repair shop",
        "search": "\nVideo Game System,Gameboy,Nintendo,Sega,X-box,Xbox,Playstation,Controller,Wii,Electronics",
        "tag": [
            "Community Drop off",
            "York Region Waste Facility",
            "Reuse Donation Centre"
        ],
        "category": "Electronics and electrical waste",
        "subCategory": "TV/Media player"
    },
    {
        "name": "Eye Glasses",
        "description": "Items in good condition can be donated.  Acceptance of items is at the discretion of the charity.   Click the “Where it Goes\" icons to find a donation centre.  Damaged items can go in the garbage.",
        "search": "\nEye Glasses,Prescription Sunglasses,Reading Glasses",
        "tag": [
            "Garbage",
            "Reuse Donation Centre"
        ],
        "category": "Eye wear",
        "subCategory": "Eye glasses"
    },
    {
        "name": "Alcoholic Beverage Containers and Bottle Caps",
        "description": "Please return all  liquor, beer and wine and bottles, cans and tetrapaks to a Beer Store. The Beer Store also accepts the bottle caps, plastic rings and bladders from boxes of wine.",
        "search": "\nAlcoholic Beverage Containers and Bottle Caps,Wine Bottle,Beer Bottle,Liquor Bottle,Box of Wine,Wine Tetrapak,Beer Bottle Cap,Liquor Bottle Cap,Wine Bladder,Plastic Rings",
        "tag": [
            "Community Drop off"
        ],
        "category": "Food and beverage containers",
        "subCategory": "Alcoholic beverage containers"
    },
    {
        "name": "100% Paper Cup",
        "description": "Please place this item loose in the blue box. Note: paper cups must be 100% paper and contain no wax or plastic lining such as those found in take-out cups.",
        "search": "\n100% Paper Cup,Paper Cup,Paper Cups",
        "tag": [
            "Blue Box"
        ],
        "category": "Food and beverage containers",
        "subCategory": "Beverage containers"
    },
    {
        "name": "Coffee Sleeve",
        "description": "Please place this item loose in the blue bin.",
        "search": "\nCoffee Sleeve",
        "tag": [
            "Blue Box"
        ],
        "category": "Food and beverage containers",
        "subCategory": "Beverage containers"
    },
    {
        "name": "Glass Bottle or Jar",
        "description": "Please place this item in your blue box. Please remove metal lids and place lids in the blue box.",
        "search": "\nGlass Bottle or Jar,Glass Juice Bottle,Glass Water Bottle,Glass Pop Bottle,Glass Condiment Jar,Jam Jar,Brown glass bottle for health supplements,Metal Lid from Glass Jar",
        "tag": [
            "Blue Box"
        ],
        "category": "Food and beverage containers",
        "subCategory": "Beverage containers"
    },
    {
        "name": "Juice Box",
        "description": "Please place this item in your blue box. Place straw and wrapper in the garbage.",
        "search": "\nJuice Box,Drink Box,Tetrapak,Juice Carton",
        "tag": [
            "Blue Box"
        ],
        "category": "Food and beverage containers",
        "subCategory": "Beverage containers"
    },
    {
        "name": "Paper Soda Cup",
        "description": "Take-out cups are challenging to recycle as they are lined with plastic or wax and act as a contaminant in the recycling system. Please place paper take-out cups and lids in the garbage.  Consider using a reusable cup or bottle wherever possible.",
        "search": "\nPaper Soda Cup,take out cup,paper cup,soda cup,pop cup,paper cups,take out cups,take-out cup,take-out cups,soda cups,pop cups",
        "tag": [
            "Garbage"
        ],
        "category": "Food and beverage containers",
        "subCategory": "Beverage containers"
    },
    {
        "name": "Plastic water bottles (single use)",
        "description": "Please place this item in the Blue Box. Lids do not need to be removed.  Please consider using a reusable bottle.",
        "search": "\nPlastic water bottles (single use),Water Bottle,Plastic Pop Bottle",
        "tag": [
            "Blue Box"
        ],
        "category": "Food and beverage containers",
        "subCategory": "Beverage containers"
    },
    {
        "name": "Take-Out Cup Sleeve",
        "description": "Please place this item in the blue box.",
        "search": "\nTake-Out Cup Sleeve",
        "tag": [
            "Blue Box",
            "York Region Waste Facility"
        ],
        "category": "Food and beverage containers",
        "subCategory": "Beverage containers"
    },
    {
        "name": "Wax Carton",
        "description": "Please place this item in your Blue Box. Please make sure containers are empty and rinsed and plastic lids are on.",
        "search": "\nWax Carton,Milk Carton",
        "tag": [
            "Blue Box"
        ],
        "category": "Food and beverage containers",
        "subCategory": "Beverage containers"
    },
    {
        "name": "Baby Food Pouch",
        "description": "Please place the pouch and lid in the garbage.",
        "search": "\nBaby Food Pouch,Snax",
        "tag": [
            "Garbage"
        ],
        "category": "Food and beverage containers",
        "subCategory": "Disposable containers/utensils"
    },
    {
        "name": "Black Plastic",
        "description": "At the moment, black plastic is a challenging material to recycle and acts as a contaminant in the recycling system. Please place this item in the garbage.",
        "search": "\nBlack Plastic,Black Plastic Lid,Black Plastic Take out Tray,Black Plastic Take-out Tray,Plastic Take Out,Plastic,Black Plastic Food Container,Black Plastic Food Tray",
        "tag": [
            "Garbage"
        ],
        "category": "Food and beverage containers",
        "subCategory": "Disposable containers/utensils"
    },
    {
        "name": "Black Plastic Take Out Tray",
        "description": "At the moment, black plastic is a challenging material to recycle and acts as a contaminant in the recycling system. Please place this item in the garbage.",
        "search": "\nBlack Plastic Take Out Tray,Black Plastic,Black Plastic Take-out Tray,Black Plastic Tray,Plastic Tray,Plastic,Take out tray,Takeout,Take-out",
        "tag": [
            "Garbage"
        ],
        "category": "Food and beverage containers",
        "subCategory": "Disposable containers/utensils"
    },
    {
        "name": "Compostable Cutlery",
        "description": "Please place this item in the garbage.",
        "search": "\nCompostable Cutlery,Bamboo Cutlery,Wood Cutlery",
        "tag": [
            "Garbage"
        ],
        "category": "Food and beverage containers",
        "subCategory": "Disposable containers/utensils"
    },
    {
        "name": "Compostable Plastic",
        "description": "Please place this item in the garbage",
        "search": "\nCompostable Plastic,compostable cutlery,compostable plastic take-out container,compostable plastic take-out containers,compostable plastic cup,compostable plastic cups,compostable pen,compostable pens,compostable pencil,compostable pencils,biodegradable plastic,bioplastic",
        "tag": [
            "Garbage"
        ],
        "category": "Food and beverage containers",
        "subCategory": "Disposable containers/utensils"
    },
    {
        "name": "Disposable Utensils",
        "description": "Please place this item in the garbage.",
        "search": "\nDisposable Utensils,Stir Stick,Toothpick,Chopstick,Swizzle Stick,Plastic Straws,Fork,Spoon,Knife,Chop Sticks,Plastic Stir Stick,Wooden Toothpick,Plastic Toothpick,Wooden Chopstick,Skewer,Wooden Skewer",
        "tag": [
            "Garbage"
        ],
        "category": "Food and beverage containers",
        "subCategory": "Disposable containers/utensils"
    },
    {
        "name": "Plastic Cutlery",
        "description": "Please place this item in the garbage.",
        "search": "\nPlastic Cutlery,Knife,Fork,Spoon,Utensil,Plastic Utensil,Plastic Utensils,Clear Plastic Cutlery",
        "tag": [
            "Garbage"
        ],
        "category": "Food and beverage containers",
        "subCategory": "Disposable containers/utensils"
    },
    {
        "name": "Single Use Coffee Pod",
        "description": "Please place this item in the garbage.  Consider using a reusable coffee filter suitable for your device.",
        "search": "\nSingle Use Coffee Pod,Keurig,Tassimo,Kcup,K-cup,Keurig Coffee Pod,Keurig Pod,Tassimo Coffee Pod,Tassimo Pod,Coffee Pod,Pod,Coffee Pods,Plastic Coffee Pods",
        "tag": [
            "Garbage"
        ],
        "category": "Food and beverage containers",
        "subCategory": "Disposable containers/utensils"
    },
    {
        "name": "Styrofoam Cups/Dishes/Containers",
        "description": "Please place this item in the garbage.",
        "search": "\nStyrofoam Cups/Dishes/Containers,Cup,Plate,Takeout,Coffee,Foam,Meat Tray,Packaging Peanuts,Expanded Polystyrene,EPS Foam,Clamshell,Styrofoam Clamshell,Styrofoam Peanuts",
        "tag": [
            "Garbage"
        ],
        "category": "Food and beverage containers",
        "subCategory": "Disposable containers/utensils"
    },
    {
        "name": "Take-Out Cup Lid",
        "description": "Please place this item in the garbage.",
        "search": "\nTake-Out Cup Lid,Plastic Lid,Lid,Paper Cup Lid,Coffee Cup Lid,Soft Drink Lid",
        "tag": [
            "Garbage"
        ],
        "category": "Food and beverage containers",
        "subCategory": "Disposable containers/utensils"
    },
    {
        "name": "Foil Sheet/Container",
        "description": "Please place this item in your Blue Box. Aluminum foil sheets should be scrunched up in a ball (at least 2\" diameter). Please remove all food residue before recycling.",
        "search": "\nFoil Sheet/Container,Aluminum,Pie Plate,Tin Foil,Aluminum Foil",
        "tag": [
            "Blue Box"
        ],
        "category": "Food and beverage containers",
        "subCategory": "Recyclable  take out containers"
    },
    {
        "name": "Paper Bag",
        "description": "Please place this item in the blue box.",
        "search": "\nPaper Bag,Brown Paper Bag,LCBO Paper Bag",
        "tag": [
            "Blue Box"
        ],
        "category": "Food and beverage containers",
        "subCategory": "Recyclable  take out containers"
    },
    {
        "name": "Paper Coffee Cup",
        "description": "Paper take-out cups, including coffee cups are challenging to recycle as they are lined with plastic or wax and act as a contaminant in the recycling system. Please place paper take-out cups and lids in the garbage. Consider using a reusable cup or bottle wherever possible.",
        "search": "\nPaper Coffee Cup,Paper Cups,Paper Cup",
        "tag": [
            "Garbage"
        ],
        "category": "Food and beverage containers",
        "subCategory": "Recyclable  take out containers"
    },
    {
        "name": "Paper Take-Out Cups",
        "description": "Paper take-out cups, including coffee cups are challenging to recycle as they are lined with plastic or wax and act as a contaminant in the recycling system. Please place paper take-out cups and lids in the garbage.  Consider using a reusable cup or bottle wherever possible.",
        "search": "\nPaper Take-Out Cups,Tim Horton's Coffee Cup,Starbucks Coffee Cup,lid,coffee cup lid,Disposable Cup,Soft Drink Cup,Coffee Cup,Pop Cup,Take-Out Cup,Soda Cup,Hot Drink Paper Cup",
        "tag": [
            "Garbage"
        ],
        "category": "Food and beverage containers",
        "subCategory": "Recyclable  take out containers"
    },
    {
        "name": "Plastic Take-out Cup",
        "description": "Please place this item in the blue box.  Straws can go in the garbage.  Please consider using a reusable bottle or cup wherever possible.",
        "search": "\nPlastic Take-out Cup,Iced Cappucino,Iced Cap,Frappucino,Starbucks,Solo Cup,Red Solo Cup",
        "tag": [
            "Blue Box"
        ],
        "category": "Food and beverage containers",
        "subCategory": "Recyclable  take out containers"
    },
    {
        "name": "Soup Carton/Box",
        "description": "Please place this item in the blue box.",
        "search": "\nSoup Carton/Box,Tetrapak,Broth Carton",
        "tag": [
            "Blue Box"
        ],
        "category": "Food and beverage containers",
        "subCategory": "Recyclable  take out containers"
    },
    {
        "name": "Reusable Bottles",
        "description": "Please place this item in the garbage.",
        "search": "\nReusable Bottles,Water Bottle with Brita Filter,Reusable Drink Bottle Hard Plastic or Other,Baby bottle with BPA,Carbon water filter,reusable water bottles",
        "tag": [
            "Garbage"
        ],
        "category": "Food and beverage containers",
        "subCategory": "Reusable bottles"
    },
    {
        "name": "Water Filter",
        "description": "Please place this item in the garbage.  Pitcher-style Brita water filters can be recycled through a program operated by the manufacturer.  Visit the Brita website for details.",
        "search": "\nWater Filter,Brita,Brita Filter,Refrigerator Water Filter",
        "tag": [
            "Garbage"
        ],
        "category": "Food and beverage containers",
        "subCategory": "Reusable bottles"
    },
    {
        "name": "Paper Plate (Food Soiled)",
        "description": "Please place this item in the green bin.",
        "search": "\nPaper Plate (Food Soiled),Paper Plates",
        "tag": [
            "Green Bin"
        ],
        "category": "Food and beverage containers",
        "subCategory": "Soiled food packaging  (paper)"
    },
    {
        "name": "Paper Take-out Container",
        "description": "Please place this item in the Green Bin.  Consider using reusable containers wherever possible.",
        "search": "\nPaper Take-out Container,Paper Restaurant take out container,Paper Fast Food Container,Paper Takeaway container",
        "tag": [
            "Green Bin"
        ],
        "category": "Food and beverage containers",
        "subCategory": "Soiled food packaging  (paper)"
    },
    {
        "name": "Paper Towel/Napkin",
        "description": "Please place this item in the green bin.",
        "search": "\nPaper Towel/Napkin",
        "tag": [
            "Green Bin"
        ],
        "category": "Food and beverage containers",
        "subCategory": "Soiled food packaging  (paper)"
    },
    {
        "name": "Popcorn Bag",
        "description": "Please place this item in the green bin.",
        "search": "\nPopcorn Bag,Microwave Popcorn",
        "tag": [
            "Green Bin"
        ],
        "category": "Food and beverage containers",
        "subCategory": "Soiled food packaging  (paper)"
    },
    {
        "name": "Adhesive Tape",
        "description": "Please place this item in the garbage.",
        "search": "\nAdhesive Tape,Scotch Tape,Duct Tape,Masking Tape,Electrical Tape",
        "tag": [
            "Garbage"
        ],
        "category": "Garbage",
        "subCategory": "Bagged"
    },
    {
        "name": "Ashes",
        "description": "Please place cooled ashes in the garbage.",
        "search": "\nAshes,ash",
        "tag": [
            "Garbage"
        ],
        "category": "Garbage",
        "subCategory": "Bagged"
    },
    {
        "name": "Automobile Floor Mats",
        "description": "Please place this item in the garbage.",
        "search": "\nAutomobile Floor Mats,Car Floor Mat,Floor Mat",
        "tag": [
            "Garbage"
        ],
        "category": "Garbage",
        "subCategory": "Bagged"
    },
    {
        "name": "BBQ Cover",
        "description": "Please place this item in the garbage.",
        "search": "\nBBQ Cover",
        "tag": [
            "Garbage"
        ],
        "category": "Garbage",
        "subCategory": "Bagged"
    },
    {
        "name": "Board Games",
        "description": "Items in good condition can be donated.  Acceptance of items is at the discretion of the charity.   Click the “Where it Goes\" icons to find a donation centre near you.  Damaged items can go in the garbage.",
        "search": "\nBoard Games,Monopoly,Risk,Playing Cards,Puzzles,Game",
        "tag": [
            "Garbage",
            "Reuse Donation Centre",
            "York Region Waste Facility",
            "Community Drop off"
        ],
        "category": "Garbage",
        "subCategory": "Bagged"
    },
    {
        "name": "Burlap",
        "description": "Please place this item in the garbage.",
        "search": "\nBurlap",
        "tag": [
            "Garbage"
        ],
        "category": "Garbage",
        "subCategory": "Bagged"
    },
    {
        "name": "Candle",
        "description": "Please place this item in the garbage.",
        "search": "\nCandle,Candles,Wax",
        "tag": [
            "Garbage"
        ],
        "category": "Garbage",
        "subCategory": "Bagged"
    },
    {
        "name": "Carbon Filter",
        "description": "Please place this item in the garbage.",
        "search": "\nCarbon Filter,Air Purifier Filter,Dyson Air Filter",
        "tag": [
            "Garbage"
        ],
        "category": "Garbage",
        "subCategory": "Bagged"
    },
    {
        "name": "Carbon Paper",
        "description": "Please place this item in the garbage.",
        "search": "\nCarbon Paper,Triplicate forms",
        "tag": [
            "Garbage"
        ],
        "category": "Garbage",
        "subCategory": "Bagged"
    },
    {
        "name": "Charcoal",
        "description": "Please place this item in the garbage.",
        "search": "\nCharcoal",
        "tag": [
            "Garbage"
        ],
        "category": "Garbage",
        "subCategory": "Bagged"
    },
    {
        "name": "Above Ground Pool",
        "description": "This item can be dropped off as garbage at the Georgina Waste Transfer Station or a Community Environmental Centre (CEC). Disposal fees will apply. Click \"Where it Goes\" icon for nearest locations.  Please check your local municipal website or waste calendar to see if this item can also be collected at the curb.",
        "search": "\nAbove Ground Pool",
        "tag": [
            "Garbage",
            "York Region Waste Facility"
        ],
        "category": "Garbage",
        "subCategory": "Bulky item disposal"
    },
    {
        "name": "Acoustic Ceiling Tiles",
        "description": "This item can be dropped off as garbage at the Georgina Waste Transfer Station (no more than 500kg) or a Community Environmental Centre (CEC). Disposal fees will apply. Click icon for nearest locations.",
        "search": "\nAcoustic Ceiling Tiles,Ceiling Tiles",
        "tag": [
            "Garbage",
            "York Region Waste Facility"
        ],
        "category": "Garbage",
        "subCategory": "Bulky item disposal"
    },
    {
        "name": "Bedroom Furniture",
        "description": "Items in good condition can be donated. Acceptance of items is at the discretion of the charity. Damaged items can be disposed as garbage for a fee at select York Region Waste Facilities.  Click the “Where it Goes\" icons for reuse/disposal locations.    Curbside collection may also be available.  Check with your local municipality for more information.  Tip: This item can be repaired at a furniture repair shop",
        "search": "\nBedroom Furniture,Headboard,Cabinet,Dresser,Drawers,Armoire,Wardrobe,Chest of Drawers,Footboard,Bed Frame,Wooden Bed Frame",
        "tag": [
            "Garbage",
            "York Region Waste Facility",
            "Community Drop off",
            "Reuse Donation Centre"
        ],
        "category": "Garbage",
        "subCategory": "Bulky item disposal"
    },
    {
        "name": "Blue Box",
        "description": "Damaged blue boxes and other curbside bins may be exchanged at the local municipality from where they were issued. Please contact your local municipality for more details. Blue boxes purchased from a store that are broken can be placed in the garbage. Check your local municipal website for size restrictions at the curb. Otherwise, drop this item off as garbage for a fee at select waste depots. Click map icon for locations.",
        "search": "\nBlue Box,Recycling bin,Recycling Container,Green Bin",
        "tag": [
            "Garbage",
            "York Region Waste Facility",
            "Community Drop off"
        ],
        "category": "Garbage",
        "subCategory": "Bulky item disposal"
    },
    {
        "name": "Broken Glass",
        "description": "Broken glass in small amounts can be collected as garbage if placed in a cardboard box labelled \"Broken Glass\". Check your local municipal website or waste calendar for more information. Large amounts can be dropped off as garbage for a fee at the Georgina Waste Transfer Station or a Community Environmental Centre (CEC). Click the “Where it Goes\" icons for reuse/disposal locations.",
        "search": "\nBroken Glass,Broken glass,Broken mirror,Broken cup,Broken frame,Broken picture frame",
        "tag": [
            "Garbage",
            "York Region Waste Facility",
            "Community Drop off"
        ],
        "category": "Garbage",
        "subCategory": "Bulky item disposal"
    },
    {
        "name": "Building Materials",
        "description": "This item can be dropped off as garbage at the Georgina Waste Transfer Station or a Community Environmental Centre (CEC). Disposal fees will apply. Click \"Where it goes\" icon for locations.  Please check your local municipal website or waste calendar to see if this item can also be collected at the curb.",
        "search": "\nBuilding Materials,PVC Pipe,Fiberglass,Plexiglass,Vapour Barrier,Shingles,Eavestrough,Vents Metal,Fireplace Insert,Curtain Rod,Garage Door,Tar Paper,Roof Shingles,Roofing Shingle,Construction Waste,Asphalt Shingles",
        "tag": [
            "Garbage",
            "York Region Waste Facility",
            "Community Drop off"
        ],
        "category": "Garbage",
        "subCategory": "Bulky item disposal"
    },
    {
        "name": "Cane",
        "description": "Items in good condition can be donated to charity at select donation centres or at York Region’s Community Environmental Centres.  Acceptance of items is at the discretion of the charity.   Damaged items can be disposed for a fee at select York Region Waste Facilities.  Click the “Where it Goes\" icons for reuse/disposal locations.    Curbside collection may also be available.  Check with your local municipality for more information.",
        "search": "\nCane,Walker",
        "tag": [
            "Garbage",
            "York Region Waste Facility",
            "Reuse Donation Centre",
            "Community Drop off"
        ],
        "category": "Garbage",
        "subCategory": "Bulky item disposal"
    },
    {
        "name": "Carpet",
        "description": "This item can be dropped off as garbage at the Georgina Waste Transfer Station (no more than 500kg) or a Community Environmental Centre (CEC). Disposal fees will apply. Click icon for nearest locations. This item may also be suitable for collection at the curb. Please check your local municipal website or waste calendar for further information and set out guidelines.",
        "search": "\nCarpet,Rug,Area Rug",
        "tag": [
            "Garbage",
            "York Region Waste Facility"
        ],
        "category": "Garbage",
        "subCategory": "Bulky item disposal"
    },
    {
        "name": "Chair",
        "description": "Items in good condition can be donated to charity at select donation centres.  Acceptance of items is at the discretion of the charity.   Damaged items can be disposed for a fee at select York Region Waste Facilities.  Click the “Where it Goes\" icons for reuse/disposal locations.    Curbside collection may also be available.  Check with your local municipality for more information.",
        "search": "\nChair,Dining chair,Kitchen chair,Armchair,Lazy-Boy,Recliner,Ottoman",
        "tag": [
            "York Region Waste Facility",
            "Community Drop off",
            "Reuse Donation Centre"
        ],
        "category": "Garbage",
        "subCategory": "Bulky item disposal"
    },
    {
        "name": "Clay Brick",
        "description": "This item can be dropped off as garbage at the Georgina Waste Transfer Station or a Community Environmental Centre (CEC). Fees apply, visit york.ca/wastedepots for more information. Click map icon for locations.",
        "search": "\nClay Brick,Brick,Clay,Red Brick,Marble",
        "tag": [
            "York Region Waste Facility",
            "Community Drop off"
        ],
        "category": "Garbage",
        "subCategory": "Bulky item disposal"
    },
    {
        "name": "E-Bike",
        "description": "This item can be dropped off as garbage at the Georgina Waste Transfer Station or a Community Environmental Centre (CEC). Disposal fees will apply. Please remove the battery from the bike before disposal. Batteries can be taken to a CEC for disposal. Click the \"Where it Goes\" icon for nearest locations.",
        "search": "\nE-Bike",
        "tag": [
            "Garbage",
            "York Region Waste Facility"
        ],
        "category": "Garbage",
        "subCategory": "Oversized Items"
    },
    {
        "name": "Hot Tub",
        "description": "This item can be dropped off as garbage at the Georgina Waste Transfer Station. Disposal fees will apply.",
        "search": "\nHot Tub,Spa",
        "tag": [
            "Garbage",
            "York Region Waste Facility"
        ],
        "category": "Garbage",
        "subCategory": "Oversized Items"
    },
    {
        "name": "Roots/Stumps",
        "description": "Tree trunks, stumps, roots and rootballs may be taken to the Georgina Waste Transfer Station as garbage for a fee or please contact a private waste removal/ disposal company. Click \"Where it Goes\" icon for locations.",
        "search": "\nRoots/Stumps,Tree Trunk,Stumps,Rootball,Roots",
        "tag": [
            "Garbage",
            "York Region Waste Facility"
        ],
        "category": "Garbage",
        "subCategory": "Oversized Items"
    },
    {
        "name": "Automobile Batteries",
        "description": "Batteries can be taken to select waste depots for safe hazardous waste recycling and disposal. Click \"Where it Goes\" icon for locations.",
        "search": "\nAutomobile Batteries,Car Battery",
        "tag": [
            "York Region Waste Facility",
            "Community Drop off"
        ],
        "category": "Household hazardous waste",
        "subCategory": "Car/Engine related products"
    },
    {
        "name": "Car Care Items",
        "description": "This item is household hazardous waste (HHW) and can be taken to a HHW depot for proper recycling and disposal. Click map icon for nearest locations. All HHW should be in original containers and well-marked. Containers are not returnable. Do not mix products. Residents may drop off up to 60L of HHW and 20 fluorescent tubes per day at York Region HHW Depots.",
        "search": "\nCar Care Items,Car Wax,Tire Shine,Rim Cleaner,Polish",
        "tag": [
            "York Region Waste Facility",
            "Community Drop off"
        ],
        "category": "Household hazardous waste",
        "subCategory": "Car/Engine related products"
    },
    {
        "name": "Car/Engine Products",
        "description": "This item is household hazardous waste (HHW) and can be taken to a HHW depot for proper recycling and disposal. Click map icon for nearest locations. All HHW should be in original containers and well-marked. Containers are not returnable. Do not mix products. Residents may drop off up to 60L of HHW and 20 fluorescent tubes per day at York Region HHW Depots.",
        "search": "\nCar/Engine Products,Antifreeze,Brake Fluid,Transmission Fluid,Lubricant,Oil Filter,Plumbing Antifreeze,Septic Antifreeze",
        "tag": [
            "York Region Waste Facility"
        ],
        "category": "Household hazardous waste",
        "subCategory": "Car/Engine related products"
    },
    {
        "name": "Diesel",
        "description": "This item is household hazardous waste (HHW) and can be taken to a HHW depot for proper recycling and disposal. Click \"Where it Goes\" icon for nearest locations. Fuels should only be transported in approved containers. Diesel cannot be decanted on site and therefore the container is not returnable. Please do not mix products. York Region residents may drop off up to 60L of HHW per vehicle per day at York Region HHW Depots. Only residential hazardous waste is accepted at the depots. Business hazardous waste will not be accepted.",
        "search": "\nDiesel,Diesel fuel,Fuel",
        "tag": [
            "York Region Waste Facility",
            "Community Drop off"
        ],
        "category": "Household hazardous waste",
        "subCategory": "Car/Engine related products"
    },
    {
        "name": "Diesel Exhaust Fluid",
        "description": "This item is Household Hazardous Waste (HHW) and can be taken to a HHW depot for proper recycling and disposal. Click icon for nearest locations. All HHW should be in original containers and well-marked. Containers are not returnable. Do not mix products. Residents may drop off up to 60L of HHW and 20 fluorescent tubes per day at York Region HHW Depots.",
        "search": "\nDiesel Exhaust Fluid,DEF",
        "tag": [
            "York Region Waste Facility",
            "Community Drop off"
        ],
        "category": "Household hazardous waste",
        "subCategory": "Car/Engine related products"
    },
    {
        "name": "Fuel Filter",
        "description": "This item is Household Hazardous Waste (HHW) and can be taken to a HHW depot for proper recycling and disposal. Click icon for nearest locations. All HHW should be in original containers and well-marked. Containers are not returnable. Do not mix products. Residents may drop off up to 60L of HHW and 20 fluorescent tubes per day at York Region HHW Depots.",
        "search": "\nFuel Filter",
        "tag": [
            "York Region Waste Facility",
            "Community Drop off"
        ],
        "category": "Household hazardous waste",
        "subCategory": "Car/Engine related products"
    },
    {
        "name": "Gasoline",
        "description": "This item is household hazardous waste (HHW) and can be taken to a HHW depot for proper recycling and disposal. Click \"Where it Goes\" icon for nearest locations. Fuels should only be transported in approved containers. Gasoline cannot be decanted on site and therefore the container is not returnable. Please do not mix products. York Region residents may drop off up to 60L of HHW per vehicle per day at York Region HHW Depots. Only residential hazardous waste is accepted at the depots. Business hazardous waste will not be accepted.",
        "search": "\nGasoline,Jerry Can,Fuel,Gas",
        "tag": [
            "York Region Waste Facility",
            "Community Drop off"
        ],
        "category": "Household hazardous waste",
        "subCategory": "Car/Engine related products"
    },
    {
        "name": "Motor Oil",
        "description": "This item is Household Hazardous Waste (HHW) and can be taken to a HHW depot or community drop off for proper recycling and disposal. Click icon for nearest locations. All HHW should be in original containers and well-marked. Containers are not returnable. Do not mix products. Residents may drop off up to 60L of HHW and 20 fluorescent tubes per day at York Region HHW Depots.",
        "search": "\nMotor Oil,engine oil,transmission fluid",
        "tag": [
            "Community Drop off",
            "York Region Waste Facility"
        ],
        "category": "Household hazardous waste",
        "subCategory": "Car/Engine related products"
    },
    {
        "name": "Oil",
        "description": "This item is Household Hazardous Waste (HHW) and can be taken to a HHW depot or community drop off for proper recycling and disposal. Click icon for nearest locations. All HHW should be in original containers and well-marked. Containers are not returnable. Do not mix products. Residents may drop off up to 60L of HHW and 20 fluorescent tubes per day at York Region HHW Depots.",
        "search": "\nOil,Motor Oil,Household Hazardous Waste,Car/Engine Related Products",
        "tag": [
            "Community Drop off",
            "York Region Waste Facility"
        ],
        "category": "Household hazardous waste",
        "subCategory": "Car/Engine related products"
    },
    {
        "name": "Windsheild Washer Fluid",
        "description": "This item is household hazardous waste (HHW) and can be taken to a HHW depot for proper recycling and disposal. Click map icon for nearest locations. All HHW should be in original containers and well-marked. Containers are not returnable. Do not mix products. Residents may drop off up to 60L of HHW and 20 fluorescent tubes per day at York Region HHW Depots.",
        "search": "\nWindsheild Washer Fluid,Washer Fluid",
        "tag": [
            "York Region Waste Facility"
        ],
        "category": "Household hazardous waste",
        "subCategory": "Car/Engine related products"
    },
    {
        "name": "Cleaning Products",
        "description": "This item is household hazardous waste (HHW) and can be taken to a HHW depot for proper recycling and disposal. Click \"Where it Goes\" icon for nearest locations. All HHW should be in original containers and well-marked. Containers are not returnable. Do not mix products. York Region residents may drop off up to 60L of HHW and 20 fluorescent tubes per day at York Region HHW Depots.",
        "search": "\nCleaning Products,Liquid Plumber,Drano,Oven Cleaner,Easy Off,Detergent,Saniflush,Hand Sanitizer,Cleansers,Tide,Sunlight,Windex,Comet,Scrubbing Bubbles,Toilet Duck,Javex,Clorox",
        "tag": [
            "York Region Waste Facility"
        ],
        "category": "Household hazardous waste",
        "subCategory": "Cleaning products"
    },
    {
        "name": "Aerosol Can",
        "description": "Please place empty aerosol cans loose in your blue box and plastic caps in your garbage.  If the aerosol can is not completely empty, it is considered Household Hazardous Waste (HHW) and can be taken to a HHW depot for safe recycling and disposal. Click \"Where it Goes\" icon for locations.",
        "search": "\nAerosol Can,Spray,Hairspray Can,Sunscreen,Air Freshener Spray,Spray Paint,Shaving Cream,Whip Cream",
        "tag": [
            "Blue Box",
            "York Region Waste Facility"
        ],
        "category": "Household hazardous waste",
        "subCategory": "Compressed gas"
    },
    {
        "name": "Compressed Gas",
        "description": "This item is household hazardous waste (HHW) and can be taken to a HHW depot for proper recycling and disposal. Click map icon for nearest locations. All HHW should be in original containers and well-marked. Containers are not returnable. Do not mix products. Residents may drop off up to 60L of HHW and 20 fluorescent tubes per day at York Region HHW Depots.",
        "search": "\nCompressed Gas,Oxygen Tank,Scuba Tank,Compressed Gas,Helium Tank,Butane Canister,Fire Extinguisher",
        "tag": [
            "York Region Waste Facility"
        ],
        "category": "Household hazardous waste",
        "subCategory": "Compressed gas"
    },
    {
        "name": "Pressurized Water Tank",
        "description": "This item is Household Hazardous Waste (HHW) and can be taken to a HHW depot or community drop off for proper recycling and disposal. Click icon for nearest locations. All HHW should be in original containers and well-marked. Containers are not returnable. Do not mix products. Residents may drop off up to 60L of HHW and 20 fluorescent tubes per day at York Region HHW Depots.",
        "search": "\nPressurized Water Tank,pressurized tank,water tank,pressurized water tanks,pressurized tanks,water tanks",
        "tag": [
            "York Region Waste Facility"
        ],
        "category": "Household hazardous waste",
        "subCategory": "Compressed gas"
    },
    {
        "name": "Propane Cylinder",
        "description": "This item is household hazardous waste (HHW) and can be taken to a HHW depot for proper recycling and disposal. Click map icon for nearest locations. All HHW should be in original containers and well-marked. Containers are not returnable. Do not mix products. Residents may drop off up to 60L of HHW and 20 fluorescent tubes per day at York Region HHW Depots.",
        "search": "\nPropane Cylinder,Propane,Propane Tank,BBQ Tank,Small Propane Tank,Camp Propane Tank,BBQ Propane Tank",
        "tag": [
            "York Region Waste Facility"
        ],
        "category": "Household hazardous waste",
        "subCategory": "Compressed gas"
    },
    {
        "name": "Household Battery",
        "description": "Batteries can be taken to select waste depot or community drop-off location for proper hazardous waste recycling and disposal. Click \"Where it Goes\" icons for nearest locations.",
        "search": "\nHousehold Battery,Dry Cell,AAA,AA,Duracell,Batteries,Hearing Aid Battery",
        "tag": [
            "Community Drop off",
            "York Region Waste Facility"
        ],
        "category": "Household hazardous waste",
        "subCategory": "Disposable batteries"
    },
    {
        "name": "Chafing Fuel",
        "description": "This item is Household Hazardous Waste (HHW) and can be taken to a HHW depot for proper recycling and disposal. Click icon for nearest locations. All HHW should be in original containers and well-marked. Containers are not returnable. Do not mix products. Residents may drop off up to 60L of HHW and 20 fluorescent tubes per day at York Region HHW Depots. If you are looking for alternative locations for proper recycling and disposal of your material please visit www.regeneration.ca.",
        "search": "\nChafing Fuel,chafing fuel catering aid,easy heaters,power heat,chafing gel,fondue gel,anolon sterno,buffet burner,buffet burners,sterno CandleLamp,chafer,choice chafing fuel",
        "tag": [
            "York Region Waste Facility"
        ],
        "category": "Household hazardous waste",
        "subCategory": "Flammable liquids/solids"
    },
    {
        "name": "Flammable Liquids/Solids",
        "description": "This item is household hazardous waste (HHW) and can be taken to a HHW depot for proper recycling and disposal. Click map icon for nearest locations. All HHW should be in original containers and well-marked. Containers are not returnable. Do not mix products. Residents may drop off up to 60L of HHW and 20 fluorescent tubes per day at York Region HHW Depots.",
        "search": "\nFlammable Liquids/Solids,Kerosene,Heating Oil,Barbecue Starter,Lighter Fluid,BBQ Fluid,BBQ Starter Liquid",
        "tag": [
            "York Region Waste Facility"
        ],
        "category": "Household hazardous waste",
        "subCategory": "Flammable liquids/solids"
    },
    {
        "name": "Lighter",
        "description": "If this item contains fluid it can be dropped of at any Household Hazardous Waste Depot. If it is empty, it is garbage.",
        "search": "\nLighter",
        "tag": [
            "York Region Waste Facility"
        ],
        "category": "Household hazardous waste",
        "subCategory": "Flammable liquids/solids"
    },
    {
        "name": "Oil/Fuel Soaked Rags",
        "description": "This item is household hazardous waste (HHW) and can be taken to a HHW depot for proper recycling and disposal. Click map icon for nearest locations. All HHW should be in original containers and well-marked. Containers are not returnable. Do not mix products. Residents may drop off up to 60L of HHW and 20 fluorescent tubes per day at York Region HHW Depots.",
        "search": "\nOil/Fuel Soaked Rags,Oil soaked rag,fuel soaked rag,oil soaked absorbent",
        "tag": [
            "York Region Waste Facility"
        ],
        "category": "Household hazardous waste",
        "subCategory": "Flammable liquids/solids"
    },
    {
        "name": "Compact Fluorescent Light Bulb",
        "description": "This item is household hazardous waste (HHW) and can be taken to a HHW depot for proper recycling and disposal. Click map icon for nearest locations.",
        "search": "\nCompact Fluorescent Light Bulb,Fluorescent Tube,Energy Efficient Light Bulb,Fluorescent Light,CFL Light Bulb,flourescent",
        "tag": [
            "York Region Waste Facility"
        ],
        "category": "Household hazardous waste",
        "subCategory": "Light bulbs"
    },
    {
        "name": "Fluorescent Tube",
        "description": "This item is household hazardous waste (HHW) and can be taken to a HHW depot for proper recycling and disposal. Click \"Where it Goes\" icon for nearest locations. York Region residents may drop off up to 20 fluorescent tubes per day at York Region HHW Depots. Max length: 8ft.",
        "search": "\nFluorescent Tube",
        "tag": [
            "York Region Waste Facility"
        ],
        "category": "Household hazardous waste",
        "subCategory": "Light bulbs"
    },
    {
        "name": "Acids and Bases",
        "description": "This item is Household Hazardous Waste (HHW) and can be taken to a HHW depot for safe recycling and disposal. Click \"Where it Goes\" icon for nearest locations. All HHW should be in original containers and well-marked. Containers are not returnable. Do not mix products. York Region residents may drop off up to 60L of HHW and 20 fluorescent tubes per day at York Region HHW Depots.",
        "search": "\nAcids and Bases,Caustic Chemicals,Muriatic,Chlorine,Boric Acid",
        "tag": [
            "York Region Waste Facility"
        ],
        "category": "Household hazardous waste",
        "subCategory": "Other chemicals"
    },
    {
        "name": "Blueprint Ink",
        "description": "This item is Household Hazardous Waste (HHW) and can be taken to a HHW depot for proper recycling and disposal. Click \"Where it Goes\" icon for nearest locations. All HHW should be in original containers and well-marked. Containers are not returnable. Do not mix products. York Region residents may drop off up to 60L of HHW and 20 fluorescent tubes per day at York Region HHW Depots.",
        "search": "\nBlueprint Ink",
        "tag": [
            "York Region Waste Facility"
        ],
        "category": "Household hazardous waste",
        "subCategory": "Other chemicals"
    },
    {
        "name": "CFC",
        "description": "This item is Household Hazardous Waste (HHW) and can be taken to a HHW depot for proper recycling and disposal. Click \"Where it Goes\" icon for nearest locations. All HHW should be in original containers and well-marked. Containers are not returnable. Do not mix products. York Region residents may drop off up to 60L of HHW and 20 fluorescent tubes per day at York Region HHW Depots.",
        "search": "\nCFC,Chlorofluorocarbon",
        "tag": [
            "York Region Waste Facility"
        ],
        "category": "Household hazardous waste",
        "subCategory": "Other chemicals"
    },
    {
        "name": "Cement Mix",
        "description": "Cement, grout, and mortar powder are household hazardous waste (HHW) and can be taken to a HHW depot for proper recycling and disposal. Click map icon for nearest locations. All HHW should be in original containers and well-marked. Containers are not returnable. Do not mix products. Residents may drop off up to 60L of HHW and 20 fluorescent tubes per day at York Region HHW Depots.",
        "search": "\nCement Mix,Grout,Cement,Cement powder,Cement mix,Mortar",
        "tag": [
            "York Region Waste Facility"
        ],
        "category": "Household hazardous waste",
        "subCategory": "Other chemicals"
    },
    {
        "name": "Disinfectant",
        "description": "This item is Household Hazardous Waste (HHW) and can be taken to a HHW depot for proper recycling and disposal. Click icon for nearest locations. All HHW should be in original containers and well-marked. Containers are not returnable. Do not mix products. Residents may drop off up to 60L of HHW and 20 fluorescent tubes per day at York Region HHW Depots. Please do not flush or pour these products down your drain.",
        "search": "\nDisinfectant,Hydrogen Peroxide,Isopropyl Alcohol,Rubbing Alcohol,Peroxide,Bleach",
        "tag": [
            "York Region Waste Facility"
        ],
        "category": "Household hazardous waste",
        "subCategory": "Other chemicals"
    },
    {
        "name": "Driveway Sealer",
        "description": "This item is Household Hazardous Waste (HHW) and can be taken to a HHW depot for proper recycling and disposal. Click icon for nearest locations. All HHW should be in original containers and well-marked. Containers are not returnable. Do not mix products. Residents may drop off up to 60L of HHW  per day at York Region HHW Depots. If the driveway sealer container is plastic and empty of all contents, please place in garbage.",
        "search": "\nDriveway Sealer,Tar,Driveway Sealant,Sealant,Black Tar",
        "tag": [
            "York Region Waste Facility"
        ],
        "category": "Household hazardous waste",
        "subCategory": "Other chemicals"
    },
    {
        "name": "Fertilizer",
        "description": "This item is Household Hazardous Waste (HHW) and can be taken to a HHW depot for proper recycling and disposal. Click icon for nearest locations. All HHW should be in original containers and well-marked. Containers are not returnable. Do not mix products. Residents may drop off up to 60L of HHW and 20 fluorescent tubes per day at York Region HHW Depots. If you are looking for alternative locations for proper recycling and disposal of your material please visit www.regeneration.ca.",
        "search": "\nFertilizer",
        "tag": [
            "York Region Waste Facility"
        ],
        "category": "Household hazardous waste",
        "subCategory": "Other chemicals"
    },
    {
        "name": "Film Processing Chemicals",
        "description": "This item is Household Hazardous Waste (HHW) and can be taken to a HHW depot for proper recycling and disposal. Click icon for nearest locations. All HHW should be in original containers and well-marked. Containers are not returnable. Do not mix products. Residents may drop off up to 60L of HHW and 20 fluorescent tubes per day at York Region HHW Depots.",
        "search": "\nFilm Processing Chemicals,Developer,Stop Bath",
        "tag": [
            "York Region Waste Facility"
        ],
        "category": "Household hazardous waste",
        "subCategory": "Other chemicals"
    },
    {
        "name": "Formalin",
        "description": "This item is household hazardous waste (HHW) and can be taken to a HHW depot for proper recycling and disposal. Click map icon for nearest locations. All HHW should be in original containers and well-marked. Containers are not returnable. Do not mix products. Residents may drop off up to 60L of HHW and 20 fluorescent tubes per day at York Region HHW Depots.",
        "search": "\nFormalin,Formaldehyde,Preservative",
        "tag": [
            "York Region Waste Facility"
        ],
        "category": "Household hazardous waste",
        "subCategory": "Other chemicals"
    },
    {
        "name": "Glue",
        "description": "This item is Household Hazardous Waste (HHW) and can be taken to a HHW depot for proper recycling and disposal. Click icon for nearest locations. All HHW should be in original containers and well-marked. Containers are not returnable. Do not mix products. Residents may drop off up to 60L of HHW and 20 fluorescent tubes per day at York Region HHW Depots.",
        "search": "\nGlue,Spray Adhesive",
        "tag": [
            "York Region Waste Facility"
        ],
        "category": "Household hazardous waste",
        "subCategory": "Other chemicals"
    },
    {
        "name": "Coatings and Stains",
        "description": "This item is Household Hazardous Waste (HHW) and can be taken to a HHW depot for proper recycling and disposal. Click icon for nearest locations. All HHW should be in original containers and well-marked. Containers are not returnable. Do not mix products. Residents may drop off up to 60L of HHW and 20 fluorescent tubes per day at York Region HHW Depots. If you are looking for alternative locations for proper recycling and disposal of your material please visit www.regeneration.ca.",
        "search": "\nCoatings and Stains,Polyurethane,Urethane,Floor Sealer",
        "tag": [
            "York Region Waste Facility"
        ],
        "category": "Household hazardous waste",
        "subCategory": "Paints and coatings"
    },
    {
        "name": "Lead-Based Paint",
        "description": "This item is Household Hazardous Waste (HHW) and can be taken to a HHW depot for proper recycling and disposal. Click icon for nearest locations. All HHW should be in original containers and well-marked. Containers are not returnable. Do not mix products. Residents may drop off up to 60L of HHW and 20 fluorescent tubes per day at York Region HHW Depots. If you are looking for alternative locations for proper recycling and disposal of your material please visit www.regeneration.ca.",
        "search": "\nLead-Based Paint,Lead",
        "tag": [
            "York Region Waste Facility"
        ],
        "category": "Household hazardous waste",
        "subCategory": "Paints and coatings"
    },
    {
        "name": "Paint",
        "description": "This item is Household Hazardous Waste (HHW) and can be taken to a HHW depot for proper recycling and disposal. Click icon for nearest locations. All HHW should be in original containers and well-marked. Containers are not returnable. Do not mix products. Residents may drop off up to 60L of HHW and 20 fluorescent tubes per day at York Region HHW Depots. If you are looking for alternative locations for proper recycling and disposal of your material please visit www.regeneration.ca.",
        "search": "\nPaint,Latex Paint,Oil Paint,Paint Can,Paint Cans",
        "tag": [
            "York Region Waste Facility"
        ],
        "category": "Household hazardous waste",
        "subCategory": "Paints and coatings"
    },
    {
        "name": "Solvents",
        "description": "This item is Household Hazardous Waste (HHW) and can be taken to a HHW depot for proper recycling and disposal. Click icon for nearest locations. All HHW should be in original containers and well-marked. Containers are not returnable. Do not mix products. Residents may drop off up to 60L of HHW and 20 fluorescent tubes per day at York Region HHW Depots. If you are looking for alternative locations for proper recycling and disposal of your material please visit www.regeneration.ca.",
        "search": "\nSolvents,Paint Thinner,Naphtha,Denatured Alcohol,Turpentine,Solvent",
        "tag": [
            "York Region Waste Facility"
        ],
        "category": "Household hazardous waste",
        "subCategory": "Paints and coatings"
    },
    {
        "name": "Varnish",
        "description": "This item is Household Hazardous Waste (HHW) and can be taken to a HHW depot for proper recycling and disposal. Click icon for nearest locations. All HHW should be in original containers and well-marked. Containers are not returnable. Do not mix products. Residents may drop off up to 60L of HHW and 20 fluorescent tubes per day at York Region HHW Depots.",
        "search": "\nVarnish,Shellac,Oil Varnish,Spirit Varnish,Lacquer,Varsol",
        "tag": [
            "York Region Waste Facility"
        ],
        "category": "Household hazardous waste",
        "subCategory": "Paints and coatings"
    },
    {
        "name": "Pesticides",
        "description": "This item is Household Hazardous Waste (HHW) and can be taken to a HHW depot for proper recycling and disposal. Click icon for nearest locations. All HHW should be in original containers and well-marked. Containers are not returnable. Do not mix products. Residents may drop off up to 60L of HHW and 20 fluorescent tubes per day at York Region HHW Depots. If you are looking for alternative locations for proper recycling and disposal of your material please visit www.regeneration.ca.",
        "search": "\nPesticides,Herbicides,Insecticides,Mothballs,Insect Repellent,Rat Poison",
        "tag": [
            "York Region Waste Facility"
        ],
        "category": "Household hazardous waste",
        "subCategory": "Pesticides"
    },
    {
        "name": "Rechargeable Batteries",
        "description": "Batteries can be taken to select waste depots or community drop-off locations for proper hazardous waste recycling and disposal. Click \"Where it Goes\" icon for locations.",
        "search": "\nRechargeable Batteries,Battery",
        "tag": [
            "York Region Waste Facility",
            "Community Drop off"
        ],
        "category": "Household hazardous waste",
        "subCategory": "Rechargeable batteries"
    },
    {
        "name": "Aquarium",
        "description": "Items in good condition can be donated at select Reuse Donation Centres.  Acceptance of items is at the discretion of the charity.   Damaged items that cannot be reused can be disposed as garbage for a fee at select York Region Waste Facilities. Click the “Where it Goes\" icons for reuse/disposal locations. Curbside collection may also be available.  Check with your local municipality for more information.",
        "search": "\nAquarium,Fish Bowl,Terrarium,Fish Tank",
        "tag": [
            "Garbage",
            "York Region Waste Facility",
            "Reuse Donation Centre"
        ],
        "category": "Housewares",
        "subCategory": "Decorations"
    },
    {
        "name": "Artificial Christmas Tree",
        "description": "Items in good condition can be donated at select Reuse Donation Centres.  Acceptance of items is at the discretion of the charity.   Damaged items that cannot be reused can be disposed for a fee at select York Region Waste Facilities.  Click the “Where it Goes\" icons for reuse/disposal locations. Curbside collection may also be available.  Check with your local municipality for more information.",
        "search": "\nArtificial Christmas Tree,X-mas,Xmas",
        "tag": [
            "Garbage",
            "York Region Waste Facility",
            "Reuse Donation Centre"
        ],
        "category": "Housewares",
        "subCategory": "Decorations"
    },
    {
        "name": "Artificial Flowers",
        "description": "Items in good condition can be donated at select Reuse Donation Centres. Acceptance of items is at the discretion of the charity. Damaged items that cannot be reused can be disposed for a fee at select York Region waste facilities. Click the “Where it Goes\" icons for reuse/disposal locations. Curbside collection may also be available. Check with your local municipality for more information.",
        "search": "\nArtificial Flowers,Fake Flowers",
        "tag": [
            "Garbage",
            "Reuse Donation Centre",
            "York Region Waste Facility"
        ],
        "category": "Housewares",
        "subCategory": "Decorations"
    },
    {
        "name": "Blinds",
        "description": "Items in good condition can be donated. Acceptance of items is at the discretion of the charity. Click the “Where it Goes\" icons to find a donation centre near you. Damaged items can go in the garbage.",
        "search": "\nBlinds,Curtains,Vinyl Blinds",
        "tag": [
            "Garbage",
            "Reuse Donation Centre",
            "York Region Waste Facility"
        ],
        "category": "Housewares",
        "subCategory": "Decorations"
    },
    {
        "name": "Christmas Decorations",
        "description": "Items in good condition can be donated to charity at select donation centres.  Acceptance of items is at the discretion of the charity.   Damaged items can be disposed for a fee at select York Region Waste Facilities.  Click the “Where it Goes\" icons for reuse/disposal locations.    Curbside collection may also be available.  Check with your local municipality for more information.",
        "search": "\nChristmas Decorations,Christmas Balls,Garland,Tinsel,Ornaments,Christmas Stockings",
        "tag": [
            "Garbage",
            "York Region Waste Facility",
            "Reuse Donation Centre"
        ],
        "category": "Housewares",
        "subCategory": "Decorations"
    },
    {
        "name": "Christmas Lights",
        "description": "Items in good condition can be donated.  Acceptance of items is at the discretion of the charity.   Click the “Where it Goes\" icons to find a donation centre or York Region Community Environmental Centre near you.  Damaged items can go in the garbage.",
        "search": "\nChristmas Lights,Xmas Lights,Light String",
        "tag": [
            "Garbage",
            "York Region Waste Facility",
            "Reuse Donation Centre"
        ],
        "category": "Housewares",
        "subCategory": "Decorations"
    },
    {
        "name": "Clock",
        "description": "Items in good condition can be donated to charity at select donation centres. Acceptance of items is at the discretion of the charity. Items that no longer work or are damaged can be recycled as electronics at York Region Waste Facilities. Click the “Where it Goes\" icons for reuse/recycling locations. Limit of two TVs and six electronic items per visit at York Region depots.",
        "search": "\nClock",
        "tag": [
            "Reuse Donation Centre",
            "York Region Waste Facility"
        ],
        "category": "Housewares",
        "subCategory": "Decorations"
    },
    {
        "name": "Decorations",
        "description": "Items in good condition can be donated to charity at select donation centres or at York Region’s Community Environmental Centres.  Acceptance of items is at the discretion of the charity.   Damaged items can be disposed for a fee at select York Region Waste Facilities.  Click the “Where it Goes’ icons for reuse/disposal locations.    Curbside collection may also be available.  Check with your local municipality for more information.",
        "search": "\nDecorations,Knick Knack,Statue,Painting,Picture Frame,Vase,Candle Holder",
        "tag": [
            "Garbage",
            "York Region Waste Facility",
            "Reuse Donation Centre",
            "Community Drop off"
        ],
        "category": "Housewares",
        "subCategory": "Decorations"
    },
    {
        "name": "Mirror",
        "description": "Items in good condition can be donated. Acceptance of items is at the discretion of staff.  Broken glass in small amounts can be collected as garbage if placed in a cardboard box labelled \"Broken Glass\". Check your local municipal website or waste calendar for more information. Large amounts broken mirror or mirror pane unbroken can be dropped off as garbage for a fee at the Georgina Waste Transfer Station or a Community Environmental Centre (CEC). Click the “Where it Goes\" icons for reuse/disposal locations.",
        "search": "\nMirror,Broken Mirror,Broken Glass,Shards",
        "tag": [
            "Garbage",
            "Reuse Donation Centre",
            "York Region Waste Facility",
            "Community Drop off"
        ],
        "category": "Housewares",
        "subCategory": "Decorations"
    },
    {
        "name": "Shower Curtain",
        "description": "Items in good condition can be donated.  Acceptance of items is at the discretion of the charity.   Click the “Where it Goes’ icons to find a donation centre or York Region Community Environmental Centre near you.  Damaged items can go in the garbage.",
        "search": "\nShower Curtain,Shower Liner",
        "tag": [
            "Garbage",
            "Reuse Donation Centre",
            "York Region Waste Facility"
        ],
        "category": "Housewares",
        "subCategory": "Decorations"
    },
    {
        "name": "Balloon",
        "description": "Please place this item in the garbage.",
        "search": "\nBalloon",
        "tag": [
            "Garbage"
        ],
        "category": "Housewares",
        "subCategory": "Household items"
    },
    {
        "name": "Board Games",
        "description": "Items in good condition can be donated.  Acceptance of items is at the discretion of the charity.   Click the “Where it Goes\" icons to find a donation centre near you.  Damaged items can go in the garbage.",
        "search": "\nBoard Games,Monopoly,Risk,Playing Cards,Puzzles,Game",
        "tag": [
            "Garbage",
            "Reuse Donation Centre",
            "York Region Waste Facility",
            "Community Drop off"
        ],
        "category": "Housewares",
        "subCategory": "Household items"
    },
    {
        "name": "Candle",
        "description": "Please place this item in the garbage.",
        "search": "\nCandle,Candles,Wax",
        "tag": [
            "Garbage"
        ],
        "category": "Housewares",
        "subCategory": "Household items"
    },
    {
        "name": "Disposable Cloth/Wipe",
        "description": "Please place this item in the garbage. Please do not flush wipes down the toilet.",
        "search": "\nDisposable Cloth/Wipe,J Cloth,Swiffer,Disinfectant Wipe,Lysol Wipes,Baby Wipes,Wipes,Disposable Mop Sheet,Mop Sheet,Wet Wipe,Sanitizing Wipe",
        "tag": [
            "Garbage"
        ],
        "category": "Housewares",
        "subCategory": "Household items"
    },
    {
        "name": "Household Items",
        "description": "Please place this item in the garbage. Tip: This item can be repaired at a repair shop",
        "search": "\nHousehold Items,Umbrella,Broom,Laundry basket,Clothes Hamper,Photos,Trophy,Basket,Pegs,Pictures,Pics,Prints,Picture,Photograph,Medals,Children Trophies,Magnet,Magnets,Water Hose",
        "tag": [
            "Garbage"
        ],
        "category": "Housewares",
        "subCategory": "Household items"
    },
    {
        "name": "Incandescent/Halogen bulb",
        "description": "Please place this item in the garbage.",
        "search": "\nIncandescent/Halogen bulb,lightbulb,light",
        "tag": [
            "Garbage"
        ],
        "category": "Housewares",
        "subCategory": "Household items"
    },
    {
        "name": "Smoke/Carbon Monoxide Detector",
        "description": "Remove batteries before placing smoke/carbon monoxide detector in the garbage. Batteries are hazardous waste and can be taken to a depot or community drop-off location for proper recycling and disposal.",
        "search": "\nSmoke/Carbon Monoxide Detector,Smoke Detector,Alarm,Smoke Alarm,CO detector",
        "tag": [
            "Garbage"
        ],
        "category": "Housewares",
        "subCategory": "Household items"
    },
    {
        "name": "Vacuum Bag",
        "description": "Please place this item in the garbage.",
        "search": "\nVacuum Bag",
        "tag": [
            "Garbage"
        ],
        "category": "Housewares",
        "subCategory": "Household items"
    },
    {
        "name": "Bedroom Furniture",
        "description": "Items in good condition can be donated. Acceptance of items is at the discretion of the charity. Damaged items can be disposed as garbage for a fee at select York Region Waste Facilities.  Click the “Where it Goes\" icons for reuse/disposal locations.    Curbside collection may also be available.  Check with your local municipality for more information.  Tip: This item can be repaired at a furniture repair shop",
        "search": "\nBedroom Furniture,Headboard,Cabinet,Dresser,Drawers,Armoire,Wardrobe,Chest of Drawers,Footboard,Bed Frame,Wooden Bed Frame",
        "tag": [
            "Garbage",
            "York Region Waste Facility",
            "Community Drop off",
            "Reuse Donation Centre"
        ],
        "category": "Housewares",
        "subCategory": "Indoor furniture"
    },
    {
        "name": "Chair",
        "description": "Items in good condition can be donated to charity at select donation centres.  Acceptance of items is at the discretion of the charity.   Damaged items can be disposed for a fee at select York Region Waste Facilities.  Click the “Where it Goes\" icons for reuse/disposal locations.    Curbside collection may also be available.  Check with your local municipality for more information.",
        "search": "\nChair,Dining chair,Kitchen chair,Armchair,Lazy-Boy,Recliner,Ottoman",
        "tag": [
            "York Region Waste Facility",
            "Community Drop off",
            "Reuse Donation Centre"
        ],
        "category": "Housewares",
        "subCategory": "Indoor furniture"
    },
    {
        "name": "Coffee/End Table",
        "description": "Items in good condition can be donated to charity at select donation centres. Acceptance of items is at the discretion of the charity.   Damaged items can be disposed for a fee at select York Region Waste Facilities.  Click the “Where it Goes\" icons for reuse/disposal locations.    Curbside collection may also be available.  Check with your local municipality for more information.  Tip: This item can be repaired at a furniture repair shop",
        "search": "\nCoffee/End Table",
        "tag": [
            "Reuse Donation Centre",
            "York Region Waste Facility",
            "Community Drop off"
        ],
        "category": "Housewares",
        "subCategory": "Indoor furniture"
    },
    {
        "name": "Dining Table",
        "description": "Items in good condition can be donated. Acceptance of items is at the discretion of the charity. Damaged items can be disposed for a fee at select York Region Waste Facilities. Click the “Where it Goes\" icons for reuse/disposal locations. Curbside collection may also be available.  Check with your local municipality for more information.",
        "search": "\nDining Table,Buffet Unit",
        "tag": [
            "York Region Waste Facility",
            "Community Drop off",
            "Reuse Donation Centre"
        ],
        "category": "Housewares",
        "subCategory": "Indoor furniture"
    },
    {
        "name": "Office Furniture",
        "description": "Items in good condition can be donated. Acceptance of items is at the discretion of the charity. Damaged items can be disposed as garbage for a fee at York Region Waste Facilities. Click the “Where it Goes’ icons for reuse/disposal locations. Curbside collection may also be available. Check with your local municipality for more information. Tip: This item can be repaired at a furniture repair shop",
        "search": "\nOffice Furniture,Desk,Filing Cabinet,Computer Table,Office Desk,Office Chair",
        "tag": [
            "Garbage",
            "York Region Waste Facility",
            "Community Drop off",
            "Reuse Donation Centre"
        ],
        "category": "Housewares",
        "subCategory": "Indoor furniture"
    },
    {
        "name": "Piano",
        "description": "Items in good condition can be donated. Acceptance of items is at the discretion of the charity. Damaged items can be disposed as garbage for a fee at Georgina Transfer Station. Click the “Where it Goes’ icons for reuse/disposal locations.",
        "search": "\nPiano,Organ,Keyboard,Electric Keyboard",
        "tag": [
            "Garbage",
            "York Region Waste Facility",
            "Community Drop off"
        ],
        "category": "Housewares",
        "subCategory": "Indoor furniture"
    },
    {
        "name": "Shelving Unit",
        "description": "Items in good condition can be donated. Acceptance of items is at the discretion of the charity. Damaged items can be disposed for a fee at select York Region Waste Facilities. Click the “Where it Goes’ icons for reuse/disposal locations. Curbside collection may also be available. Check with your local municipality for more information.",
        "search": "\nShelving Unit,Cabinet,Dresser,Drawers,Bookshelf,Hutch,Shelf,Shelves,Bookcase",
        "tag": [
            "Garbage",
            "York Region Waste Facility",
            "Community Drop off"
        ],
        "category": "Housewares",
        "subCategory": "Indoor furniture"
    },
    {
        "name": "Sofa",
        "description": "Items in good condition can be donated. Acceptance of items is at the discretion of the charity. Damaged items can be disposed as garbage for a fee at select York Region Waste Facilities.  Click the “Where it Goes\" icons for reuse/disposal locations. Curbside collection may also be available. Check with your local municipality for more information.  Tip: This item can be repaired at a furniture repair shop",
        "search": "\nSofa,Loveseat,Chesterfield,Furniture,Couch,Sofabed,Sofa bed",
        "tag": [
            "York Region Waste Facility",
            "Community Drop off",
            "Reuse Donation Centre"
        ],
        "category": "Housewares",
        "subCategory": "Indoor furniture"
    },
    {
        "name": "Baking Tray",
        "description": "Items in good condition can be donated to a reuse charity.  Acceptance of items is at the discretion of the charity.   Click the “Where it Goes\" icons to find a reuse donation centre near you.  Worn or damaged items can go in the garbage.",
        "search": "\nBaking Tray,Pie,Cookie,Cake",
        "tag": [
            "Garbage",
            "Reuse Donation Centre",
            "York Region Waste Facility"
        ],
        "category": "Housewares",
        "subCategory": "Kitchen items"
    },
    {
        "name": "Cookie Tin",
        "description": "Please place this item in your Blue Box. Items in good condition can be donated.  Acceptance of items is at the discretion of the charity.   Click the “Where it Goes’ icons to find a donation centre or York Region Community Environmental Centre near you.",
        "search": "\nCookie Tin",
        "tag": [
            "Blue Box",
            "York Region Waste Facility",
            "Reuse Donation Centre"
        ],
        "category": "Housewares",
        "subCategory": "Kitchen items"
    },
    {
        "name": "Cookware",
        "description": "Items in good condition can be donated at select donation centres. Acceptance is at the discretion of  the charity. Items in poor condition may be disposed at select York Region Waste Facilities. Fees may apply if the item cannot be recycled as scrap metal. Curbside collection may also be available. Contact your local municipality for more information.",
        "search": "\nCookware,Pots,Frying Pan,Spatula,Pans,Stainless steel pot,Stainless steel Pan,Cooking Pots,Pots and Pans",
        "tag": [
            "Garbage",
            "York Region Waste Facility",
            "Reuse Donation Centre"
        ],
        "category": "Housewares",
        "subCategory": "Kitchen items"
    },
    {
        "name": "Drinking Glass",
        "description": "Items in good condition can be donated.  Acceptance of items is at the discretion of the charity.   Click the “Where it Goes\" icons to find a donation centre or York Region Community Environmental Centre near you.  Broken glass in small amounts can be collected as garbage if placed in a cardboard box labelled \"Broken Glass\". Check your local municipal website or waste calendar for more information.",
        "search": "\nDrinking Glass,Wine Glass,Mug,Glass Bowl",
        "tag": [
            "Garbage",
            "York Region Waste Facility",
            "Reuse Donation Centre",
            "Community Drop off"
        ],
        "category": "Housewares",
        "subCategory": "Kitchen items"
    },
    {
        "name": "Food Storage Container",
        "description": "Items in good condition can be donated.  Acceptance of items is at the discretion of the charity.   Click the “Where it Goes\" icons to find a donation centre or York Region Community Environmental Centre near you.  Damaged items can go in the garbage.",
        "search": "\nFood Storage Container,Gladware,Tupperware",
        "tag": [
            "Garbage",
            "Reuse Donation Centre",
            "York Region Waste Facility",
            "Community Drop off"
        ],
        "category": "Housewares",
        "subCategory": "Kitchen items"
    },
    {
        "name": "Kitchenware",
        "description": "Items in good condition can be donated to charity at select donation centres or at York Region’s Community Environmental Centres.  Acceptance of items is at the discretion of the charity.   Damaged items can be disposed for a fee at select York Region Waste Facilities.  Click the “Where it Goes\" icons for reuse/disposal locations.    Curbside collection may also be available.  Check with your local municipality for more information.",
        "search": "\nKitchenware,Glasses,Cups,Pottery,Tea Cup,Ceramics,China,Utensils,Spatula,Spoon,Knife,Fork,Plates,Bowl,Saucer,Clay Pots,Broken Dishes",
        "tag": [
            "Garbage",
            "York Region Waste Facility",
            "Reuse Donation Centre",
            "Community Drop off"
        ],
        "category": "Housewares",
        "subCategory": "Kitchen items"
    },
    {
        "name": "Mason Jar",
        "description": "Please place this item in your blue box.",
        "search": "\nMason Jar,Mason Jar",
        "tag": [
            "Blue Box"
        ],
        "category": "Housewares",
        "subCategory": "Kitchen items"
    },
    {
        "name": "Luggage",
        "description": "Items in good condition can be donated to charity at select donation centres or at York Region’s Community Environmental Centres.  Acceptance of items is at the discretion of the charity.   Damaged items can be disposed for a fee at select York Region Waste Facilities.  Click the “Where it Goes\" icons for reuse/disposal locations.    Curbside collection may also be available.  Check with your local municipality for more information.",
        "search": "\nLuggage,Trunk,Chest,Duffle Bag,Suitcase,Backpack,Briefcase",
        "tag": [
            "Garbage",
            "York Region Waste Facility",
            "Reuse Donation Centre",
            "Community Drop off"
        ],
        "category": "Housewares",
        "subCategory": "Luggage/Purses"
    },
    {
        "name": "Purse",
        "description": "Items in good condition can be donated.  Acceptance of items is at the discretion of the charity.   Click the “Where it Goes’ icons to find a donation centre or York Region Community Environmental Centre near you.  Damaged items can go in the garbage.",
        "search": "\nPurse,Wallet,Handbag",
        "tag": [
            "Garbage",
            "Reuse Donation Centre",
            "York Region Waste Facility"
        ],
        "category": "Housewares",
        "subCategory": "Luggage/Purses"
    },
    {
        "name": "Composter/Rain Barrel",
        "description": "Items in good condition can be donated. Acceptance of items is at the discretion of the charity. Click the “Where it Goes\" icons for reuse/disposal locations. Damaged items can go in the garbage. Curbside collection may also be available.  Check with your local municipality for more information.",
        "search": "\nComposter/Rain Barrel,Composter,Rain Barrel",
        "tag": [
            "York Region Waste Facility",
            "Reuse Donation Centre"
        ],
        "category": "Housewares",
        "subCategory": "Outdoor furniture"
    },
    {
        "name": "Outdoor Toys",
        "description": "Items in good condition can be donated to charity at select donation centres.  Acceptance of items is at the discretion of the charity.   Damaged items can be disposed for a fee at select York Region Waste Facilities.  Click the “Where it Goes\" icons for reuse/disposal locations.    Curbside collection may also be available.  Check with your local municipality for more information.",
        "search": "\nOutdoor Toys,Play Set,Playhouse,Sandbox,Big Wheel,Plastic Picnic Table",
        "tag": [
            "Garbage",
            "York Region Waste Facility",
            "Community Drop off",
            "Reuse Donation Centre"
        ],
        "category": "Housewares",
        "subCategory": "Outdoor furniture"
    },
    {
        "name": "Patio Furniture",
        "description": "Items in good condition can be donated. Acceptance of items is at the discretion of the charity. Damaged items can be disposed as garbage for a fee at select York Region Waste Facilities.  Click the “Where it Goes’ icons for reuse/disposal locations. Curbside collection may also be available.  Check with your local municipality for more information.  Tip: This item can be repaired at a furniture repair shop",
        "search": "\nPatio Furniture,Picnic Table,Lawn Chair,Wicker,Lawn Furniture,Patio Table",
        "tag": [
            "Garbage",
            "York Region Waste Facility",
            "Reuse Donation Centre",
            "Community Drop off"
        ],
        "category": "Housewares",
        "subCategory": "Outdoor furniture"
    },
    {
        "name": "Pool Accessories",
        "description": "This item can be dropped off as garbage at the Georgina Waste Transfer Station or a Community Environmental Centre. Disposal fees will apply. Click map icon for nearest locations.  Please check your local municipal website or waste calendar to see if this item can also be collected at the curb.",
        "search": "\nPool Accessories,Pool diving board,Pool heater,Pool noodle,Pool stairs,Pool Liner",
        "tag": [
            "Garbage",
            "York Region Waste Facility"
        ],
        "category": "Housewares",
        "subCategory": "Pool accessories"
    },
    {
        "name": "Toys",
        "description": "Items in good condition can be donated.  Acceptance of items is at the discretion of the charity.   Click the “Where it Goes’ icons to find a donation centre or York Region Community Environmental Centre near you.  Damaged items can go in the garbage.",
        "search": "\nToys,Xylophone,Yo-Yo,Stuffed Animals,Dolls,Barbies,Figurines,Lego,Building Blocks,Skipping Rope",
        "tag": [
            "Garbage",
            "York Region Waste Facility",
            "Reuse Donation Centre"
        ],
        "category": "Housewares",
        "subCategory": "Toys (small)"
    },
    {
        "name": "Pasta and Grains",
        "description": "Please place this item in the green bin.",
        "search": "\nPasta and Grains,Cereals and Grains,Pasta,Baking Ingredients,Rice,Bread,Oatmeal and Oats,Pastry",
        "tag": [
            "Green Bin"
        ],
        "category": "Kitchen waste",
        "subCategory": "Baked goods"
    },
    {
        "name": "Cooking Oil",
        "description": "This item can be dropped off for recycling at select waste depots. Residents may drop off up to 4L of cooking oil per day. Click icon for nearest locations. Alternatively, you can absorb small amounts with paper towels to go in the green bin or freeze it and scrape into green bin.",
        "search": "\nCooking Oil,Edible Oil,Canola Oil,Sunflower Oil,Olive Oil,Used Cooking Oil,Cottonseed Oil",
        "tag": [
            "Green Bin",
            "York Region Waste Facility"
        ],
        "category": "Kitchen waste",
        "subCategory": "Cooking oil"
    },
    {
        "name": "Coffee Grounds",
        "description": "Please place this item in the green bin or your backyard composter. Please visit www.york.ca/compost to learn more.",
        "search": "\nCoffee Grounds,Coffee,Coffee beans,Coffee filters,Coffee grounds",
        "tag": [
            "Green Bin"
        ],
        "category": "Kitchen waste",
        "subCategory": "Fruit and vegetable waste"
    },
    {
        "name": "Cores/Peels",
        "description": "Please place this item in the green bin or your backyard composter. Please visit www.york.ca/compost to learn more.",
        "search": "\nCores/Peels,Corn Cobs,Husks,Pits",
        "tag": [
            "Green Bin"
        ],
        "category": "Kitchen waste",
        "subCategory": "Fruit and vegetable waste"
    },
    {
        "name": "Fruits",
        "description": "Please place this item in the green bin or your backyard composter. Please visit www.york.ca/compost to learn more.",
        "search": "\nFruits,Apple,Orange,Potato,Herbs,Spices,Lime,Banana,Peels,Fruit Peels,Veggie Peels,Avocado pits",
        "tag": [
            "Green Bin"
        ],
        "category": "Kitchen waste",
        "subCategory": "Fruit and vegetable waste"
    },
    {
        "name": "Tea Bags",
        "description": "Please place this item in the green bin or your backyard composter. Please visit www.york.ca/compost to learn more.",
        "search": "\nTea Bags,Tea,Tea bag,Loose leaf tea,Tea leaves",
        "tag": [
            "Green Bin"
        ],
        "category": "Kitchen waste",
        "subCategory": "Fruit and vegetable waste"
    },
    {
        "name": "Vegetables",
        "description": "Please place this item in the green bin or your backyard composter. Please visit www.york.ca/compost to learn more.",
        "search": "\nVegetables,Carrot,Celery,Lettuce,Peels,Pits",
        "tag": [
            "Green Bin"
        ],
        "category": "Kitchen waste",
        "subCategory": "Fruit and vegetable waste"
    },
    {
        "name": "Bones/Shells/Nuts",
        "description": "Please place this item in your Green Bin.",
        "search": "\nBones/Shells/Nuts,Chicken wing,Turkey leg,Oyster shell,Mussel shell,Clam shell",
        "tag": [
            "Green Bin"
        ],
        "category": "Kitchen waste",
        "subCategory": "Meat"
    },
    {
        "name": "Eggs",
        "description": "Please place this item in the green bin or your backyard composter. Please visit www.york.ca/compost to learn more.",
        "search": "\nEggs,Egg Shells",
        "tag": [
            "Green Bin"
        ],
        "category": "Kitchen waste",
        "subCategory": "Meat"
    },
    {
        "name": "Meat",
        "description": "Please place this item in your green bin.",
        "search": "\nMeat,Fish,Bacon,Shellfish,Gristle,Shrimp,Seafood,Chicken,Steak",
        "tag": [
            "Green Bin"
        ],
        "category": "Kitchen waste",
        "subCategory": "Meat"
    },
    {
        "name": "Dairy Products",
        "description": "Please place this item in your green bin. Please do not pour these items down the drain.",
        "search": "\nDairy Products,Butter,Sour cream,Yogurt,Cheese,Milk,Cream,Margarine",
        "tag": [
            "Green Bin"
        ],
        "category": "Kitchen waste",
        "subCategory": "Milk and milk products"
    },
    {
        "name": "Cigarette Butt",
        "description": "Please place this item in the garbage.",
        "search": "\nCigarette Butt,Cigarette,Cigar",
        "tag": [
            "Garbage"
        ],
        "category": "Kitchen waste",
        "subCategory": "Non-Compostable items"
    },
    {
        "name": "Dryer Lint",
        "description": "Please place this item in the garbage.",
        "search": "\nDryer Lint,Dust,Sweepings,Lint",
        "tag": [
            "Garbage"
        ],
        "category": "Kitchen waste",
        "subCategory": "Non-Compostable items"
    },
    {
        "name": "Dryer Sheet",
        "description": "Please place this item in the garbage.",
        "search": "\nDryer Sheet,Bounce Sheet",
        "tag": [
            "Garbage"
        ],
        "category": "Kitchen waste",
        "subCategory": "Non-Compostable items"
    },
    {
        "name": "Gum",
        "description": "Please place this item in the garbage.",
        "search": "\nGum",
        "tag": [
            "Garbage"
        ],
        "category": "Kitchen waste",
        "subCategory": "Non-Compostable items"
    },
    {
        "name": "Nespresso Coffee Capsule",
        "description": "Please return Nespresso brand coffee capusules to a recycling drop-off location. Please click \"where it goes\" icon for locations.",
        "search": "\nNespresso Coffee Capsule,Nespresso coffee pod",
        "tag": [
            "Community Drop off"
        ],
        "category": "Kitchen waste",
        "subCategory": "Non-Compostable items"
    },
    {
        "name": "Potato Chip Bag",
        "description": "Please place this item in the garbage.",
        "search": "\nPotato Chip Bag,Chip Bag,Chip Bags",
        "tag": [
            "Garbage"
        ],
        "category": "Kitchen waste",
        "subCategory": "Other"
    },
    {
        "name": "Table Cloth",
        "description": "Please place Plastic table cloths in the garbage. Fabric table cloths in good condition can be donated. Acceptance of items is at the discretion of the charity. Click the “Where it Goes” icons to find a donation centre. Select organizations will take damaged items so long as they are clean, dry and odorless. Otherwise unusable or damaged items can go in the garbage.",
        "search": "\nTable Cloth,Table cloth,Table Linens,Fabric table cloth,Fabric napkins,Plastic table cloth",
        "tag": [
            "Garbage",
            "Reuse Donation Centre",
            "Community Drop off",
            "York Region Waste Facility"
        ],
        "category": "Kitchen waste",
        "subCategory": "Other"
    },
    {
        "name": "Hair and Fur",
        "description": "Please place this item in your green bin.",
        "search": "\nHair and Fur,Feathers",
        "tag": [
            "Green Bin"
        ],
        "category": "Kitchen waste",
        "subCategory": "Other compostable items"
    },
    {
        "name": "Paper Plate (Food Soiled)",
        "description": "Please place this item in the green bin.",
        "search": "\nPaper Plate (Food Soiled),Paper Plates",
        "tag": [
            "Green Bin"
        ],
        "category": "Kitchen waste",
        "subCategory": "Other compostable items"
    },
    {
        "name": "Paper Straws",
        "description": "Please place this item in the green bin.",
        "search": "\nPaper Straws",
        "tag": [
            "Green Bin"
        ],
        "category": "Kitchen waste",
        "subCategory": "Other compostable items"
    },
    {
        "name": "Paper Towel/Napkin",
        "description": "Please place this item in the green bin.",
        "search": "\nPaper Towel/Napkin",
        "tag": [
            "Green Bin"
        ],
        "category": "Kitchen waste",
        "subCategory": "Other compostable items"
    },
    {
        "name": "Popcorn Bag",
        "description": "Please place this item in the green bin.",
        "search": "\nPopcorn Bag,Microwave Popcorn",
        "tag": [
            "Green Bin"
        ],
        "category": "Kitchen waste",
        "subCategory": "Other compostable items"
    },
    {
        "name": "Sawdust And Wood Shavings",
        "description": "Small quantities of sawdust and wood shavings can go in your green bin. They cannot be from pressure treated, melamine, composite or particle board wood. Otherwise this item is garbage and can be placed at the curb or brought to a depot.",
        "search": "\nSawdust And Wood Shavings,Pencil Shavings",
        "tag": [
            "Green Bin"
        ],
        "category": "Kitchen waste",
        "subCategory": "Other compostable items"
    },
    {
        "name": "Pasta and Grains",
        "description": "Please place this item in the green bin.",
        "search": "\nPasta and Grains,Cereals and Grains,Pasta,Baking Ingredients,Rice,Bread,Oatmeal and Oats,Pastry",
        "tag": [
            "Green Bin"
        ],
        "category": "Kitchen waste",
        "subCategory": "Pasta and grains"
    },
    {
        "name": "Lard",
        "description": "Please place this item in your green bin. Please absorb small amounts with paper towels to go in the green bin or let harden and scrape into green bin. Please do not flush or pour these items down the drain.",
        "search": "\nLard,Shortening,Fat,Grease",
        "tag": [
            "Green Bin"
        ],
        "category": "Kitchen waste",
        "subCategory": "Prepared food/leftovers"
    },
    {
        "name": "Prepared Food",
        "description": "Please place this item in your green bin.",
        "search": "\nPrepared Food,Cake,Candy,Spreads,Mayonnaise,Peanut Butter,Pizza,Leftovers,Frozen Dinner,Pasta Sauce,Cookie,Flour,Sugar,Spices",
        "tag": [
            "Green Bin"
        ],
        "category": "Kitchen waste",
        "subCategory": "Prepared food/leftovers"
    },
    {
        "name": "Sauces",
        "description": "Please absorb small amounts with paper towels to go in the green bin or freeze it and scrape into green bin. Please do not flush or pour these items down the drain.",
        "search": "\nSauces,Gravy,Gravies,Sauce,Marinade,Marinades,Salad Dressing",
        "tag": [
            "Green Bin"
        ],
        "category": "Kitchen waste",
        "subCategory": "Prepared food/leftovers"
    },
    {
        "name": "Cane",
        "description": "Items in good condition can be donated to charity at select donation centres or at York Region’s Community Environmental Centres.  Acceptance of items is at the discretion of the charity.   Damaged items can be disposed for a fee at select York Region Waste Facilities.  Click the “Where it Goes\" icons for reuse/disposal locations.    Curbside collection may also be available.  Check with your local municipality for more information.",
        "search": "\nCane,Walker",
        "tag": [
            "Garbage",
            "York Region Waste Facility",
            "Reuse Donation Centre",
            "Community Drop off"
        ],
        "category": "Medical/Homecare supplies",
        "subCategory": "Equipment"
    },
    {
        "name": "Commode",
        "description": "Items in good condition may be accepted for reuse at select donation centres.  Acceptance is at the discretion of staff. Items in poor condition may be disposed on at select York Region Waste Facilities.  Fees may apply if the item cannot be recycled as scrap metal.  Curbside collection may also be available.  Contact your local municipality for more information.",
        "search": "\nCommode,Commode Bucket",
        "tag": [
            "Garbage",
            "Reuse Donation Centre",
            "York Region Waste Facility",
            "Community Drop off"
        ],
        "category": "Medical/Homecare supplies",
        "subCategory": "Equipment"
    },
    {
        "name": "Crutches",
        "description": "Items in good condition can be donated to charity at select donation centres.  Acceptance of items is at the discretion of the charity.   Damaged items can be disposed for a fee at select York Region Waste Facilities.  Click the “Where it Goes’ icons for reuse/disposal locations.    Curbside collection may also be available.  Check with your local municipality for more information.",
        "search": "\nCrutches",
        "tag": [
            "York Region Waste Facility",
            "Reuse Donation Centre"
        ],
        "category": "Medical/Homecare supplies",
        "subCategory": "Equipment"
    },
    {
        "name": "Wheelchair (Manual)",
        "description": "Items in good condition can be donated to charity at select donation centres or at York Region’s Community Environmental Centres.  Acceptance of items is at the discretion of the charity.   Damaged items can be disposed for a fee at select York Region Waste Facilities.  Click the “Where it Goes\" icons for reuse/disposal locations.    Curbside collection may also be available.  Check with your local municipality for more information.",
        "search": "\nWheelchair (Manual)",
        "tag": [
            "York Region Waste Facility",
            "Reuse Donation Centre",
            "Community Drop off"
        ],
        "category": "Medical/Homecare supplies",
        "subCategory": "Equipment"
    },
    {
        "name": "Adult Incontinence Products",
        "description": "Please place this item in the green bin.",
        "search": "\nAdult Incontinence Products,Depend,Depends",
        "tag": [
            "Green Bin"
        ],
        "category": "Medical/Homecare supplies",
        "subCategory": "Incontinence"
    },
    {
        "name": "Bandages",
        "description": "Please double bag this item and place in the garbage.",
        "search": "\nBandages",
        "tag": [
            "Garbage"
        ],
        "category": "Medical/Homecare supplies",
        "subCategory": "Medical supplies"
    },
    {
        "name": "Diabetes Strips",
        "description": "Please double bag this item and place in the garbage.",
        "search": "\nDiabetes Strips",
        "tag": [
            "Garbage"
        ],
        "category": "Medical/Homecare supplies",
        "subCategory": "Medical supplies"
    },
    {
        "name": "Dialysis Waste",
        "description": "Please double bag this item and place in the garbage.",
        "search": "\nDialysis Waste,Dialysis Tube,Catheter,IV Tubing",
        "tag": [
            "Garbage"
        ],
        "category": "Medical/Homecare supplies",
        "subCategory": "Medical supplies"
    },
    {
        "name": "Latex Gloves",
        "description": "Please double bag this item and place in the garbage.",
        "search": "\nLatex Gloves,Rubber Gloves",
        "tag": [
            "Garbage"
        ],
        "category": "Medical/Homecare supplies",
        "subCategory": "Medical supplies"
    },
    {
        "name": "X-Ray",
        "description": "Please double bag this item and place in the garbage.",
        "search": "\nX-Ray",
        "tag": [
            "Garbage"
        ],
        "category": "Medical/Homecare supplies",
        "subCategory": "Medical supplies"
    },
    {
        "name": "Cold/Heat Pack",
        "description": "This item is Household Hazardous Waste (HHW) and can be taken to a HHW depot for proper recycling and disposal. Click icon for nearest locations. All HHW should be in original containers and well-marked. Containers are not returnable. Do not mix products. Residents may drop off up to 60L of HHW and 20 fluorescent tubes per day at York Region HHW Depots. Please do not flush or pour these products down the drain.",
        "search": "\nCold/Heat Pack,ice pack,heat pack,hot pack,cold pack,disposable ice pack",
        "tag": [
            "York Region Waste Facility"
        ],
        "category": "Medical/Homecare supplies",
        "subCategory": "Medication"
    },
    {
        "name": "Medication",
        "description": "This item is household hazardous waste. It can be returned to a participating pharmacy or a York Region Household Hazardous Waste Depot for safe disposal.  Click \"Where it Goes\" icon for locations. Never dispose of medication in the garbage or by flushing it down the toilet.",
        "search": "\nMedication,Prescription,Drugs,Over the Counter Medication,Pills,Medicine,Pill,Cough Syrup,Pharmaceuticals",
        "tag": [
            "Community Drop off",
            "York Region Waste Facility"
        ],
        "category": "Medical/Homecare supplies",
        "subCategory": "Medication"
    },
    {
        "name": "Vitamins",
        "description": "This item is household hazardous waste. It can be returned to a participating pharmacy or a York Region Household Hazardous Waste Depot for safe disposal. Click \"Where it Goes\" icon for locations. Never dispose of medication in the garbage or by flushing it down the toilet.",
        "search": "\nVitamins,Supplements,Herbal Remedy",
        "tag": [
            "Community Drop off",
            "York Region Waste Facility"
        ],
        "category": "Medical/Homecare supplies",
        "subCategory": "Medication"
    },
    {
        "name": "Epipen",
        "description": "This item is household hazardous waste. It can be returned to a participating pharmacy or a York Region Household Hazardous Waste Depot for safe disposal. Click \"Where it Goes\" icon for locations. Please place the items in an approved container before dropping them off. Check the facility details page for your chosen drop-off location for container requirements.",
        "search": "\nEpipen",
        "tag": [
            "Community Drop off",
            "York Region Waste Facility"
        ],
        "category": "Medical/Homecare supplies",
        "subCategory": "Sharps"
    },
    {
        "name": "Lancets",
        "description": "This item is household hazardous waste. It can be returned to a participating pharmacy or a York Region Household Hazardous Waste Depot for safe disposal. Click \"Where it Goes\" icon for locations. Please place the items in an approved container before dropping them off. Check the facility details page for your chosen drop-off location for container requirements.",
        "search": "\nLancets,lancet",
        "tag": [
            "York Region Waste Facility",
            "Community Drop off"
        ],
        "category": "Medical/Homecare supplies",
        "subCategory": "Sharps"
    },
    {
        "name": "Needle",
        "description": "This item is household hazardous waste. It can be returned to a participating pharmacy or a York Region Household Hazardous Waste Depot for safe disposal. Click \"Where it Goes\" icon for locations. Please place the items in an approved container before dropping them off.  Check the facility details page for your chosen drop-off location for container requirements.",
        "search": "\nNeedle,Needle,Syringe,Sharps,Needles",
        "tag": [
            "Community Drop off",
            "York Region Waste Facility"
        ],
        "category": "Medical/Homecare supplies",
        "subCategory": "Sharps"
    },
    {
        "name": "Home Office Equipment",
        "description": "This item is electronic waste (e-waste) and can be taken to a York Region Waste Facility or community drop-off location. Limit of two TVs, four pieces of computer equipment and six other electronic items per visit at York Region facilities. Some working items may also be accepted by reuse donation centres. Click \"Where it Goes\" icons for locations. Residents are responsible for removing all personal information from items before drop off.",
        "search": "\nHome Office Equipment,Printer,Photocopier,Electronics,E-waste,Faxer,Fax Machine,Paper Shredder,Computer Printer,Power Bank",
        "tag": [
            "Community Drop off",
            "York Region Waste Facility",
            "Reuse Donation Centre"
        ],
        "category": "Office supplies",
        "subCategory": "Equipment"
    },
    {
        "name": "Ink Cartridge",
        "description": "This item is electronic waste (e-waste) and can be taken to a York Region Waste Facility or community drop-off location for proper recycling and disposal. Limit of two TVs and six electronic items per visit at York Region depots. Some working items may also be accepted by reuse donation centres. Click \"Where it Goes\" icons for locations. Residents are responsible for removing all personal information from items before drop off.",
        "search": "\nInk Cartridge,Printer,Toner,Laser Toner",
        "tag": [
            "York Region Waste Facility",
            "Community Drop off",
            "Reuse Donation Centre"
        ],
        "category": "Office supplies",
        "subCategory": "Equipment"
    },
    {
        "name": "Glue",
        "description": "This item is Household Hazardous Waste (HHW) and can be taken to a HHW depot for proper recycling and disposal. Click icon for nearest locations. All HHW should be in original containers and well-marked. Containers are not returnable. Do not mix products. Residents may drop off up to 60L of HHW and 20 fluorescent tubes per day at York Region HHW Depots.",
        "search": "\nGlue,Spray Adhesive",
        "tag": [
            "York Region Waste Facility"
        ],
        "category": "Office supplies",
        "subCategory": "Office chemicals"
    },
    {
        "name": "White Out",
        "description": "This item is Household Hazardous Waste (HHW) and can be taken to a HHW depot for proper recycling and disposal. Click icon for nearest locations. All HHW should be in original containers and well-marked. Containers are not returnable. Do not mix products. Residents may drop off up to 60L of HHW and 20 fluorescent tubes per day at York Region HHW Depots.",
        "search": "\nWhite Out,Liquid Paper,Correction Fluid",
        "tag": [
            "York Region Waste Facility"
        ],
        "category": "Office supplies",
        "subCategory": "Office chemicals"
    },
    {
        "name": "Construction Paper",
        "description": "Please place this item loose in the Blue Box.",
        "search": "\nConstruction Paper,Business Cards,Store Receipts",
        "tag": [
            "Blue Box"
        ],
        "category": "Office supplies",
        "subCategory": "Paper"
    },
    {
        "name": "Paper products",
        "description": "Please place this item in the blue box.",
        "search": "\nPaper products,Writing Paper,Bristol Board,Sticky Note,File Folder,Envelope,Index Card,Birthday Card,Christmas Card,Card,Envelope with plastic window",
        "tag": [
            "Blue Box"
        ],
        "category": "Office supplies",
        "subCategory": "Paper"
    },
    {
        "name": "Shredded Paper",
        "description": "Shredded paper can be dropped off in clear plastic bags at a Community Environmental Centre for recycling. Small amounts can be placed in your green bin.  Click icon for nearest location.",
        "search": "\nShredded Paper",
        "tag": [
            "Green Bin",
            "York Region Waste Facility"
        ],
        "category": "Office supplies",
        "subCategory": "Shredded paper"
    },
    {
        "name": "Acetate",
        "description": "Please place this item in the garbage.",
        "search": "\nAcetate",
        "tag": [
            "Garbage"
        ],
        "category": "Office supplies",
        "subCategory": "Specialty paper"
    },
    {
        "name": "Blueprints",
        "description": "Please place this item in the garbage. Due to the blueprinting process, the paper is too brittle to recycle.",
        "search": "\nBlueprints",
        "tag": [
            "Garbage"
        ],
        "category": "Office supplies",
        "subCategory": "Specialty paper"
    },
    {
        "name": "Gift Bag",
        "description": "Please place this item in the blue box. Remove ribbons, bows and tape.",
        "search": "\nGift Bag,Greeting Card",
        "tag": [
            "Blue Box"
        ],
        "category": "Office supplies",
        "subCategory": "Specialty paper"
    },
    {
        "name": "Laminated/Coated Paper",
        "description": "Please place this item in the garbage.",
        "search": "\nLaminated/Coated Paper,Padded Envelope,Laminated Paper,Coated Paper,Overhead Transparencies,Wallpaper",
        "tag": [
            "Garbage"
        ],
        "category": "Office supplies",
        "subCategory": "Specialty paper"
    },
    {
        "name": "Wrapping Paper",
        "description": "Please place this item in the blue box. Remove ribbons, bows and tape.",
        "search": "\nWrapping Paper,Gift wrap,gift bag",
        "tag": [
            "Blue Box"
        ],
        "category": "Office supplies",
        "subCategory": "Specialty paper"
    },
    {
        "name": "Binder",
        "description": "Please place this item in the garbage.",
        "search": "\nBinder,3-Ring Binder,Binders",
        "tag": [
            "Garbage"
        ],
        "category": "Office supplies",
        "subCategory": "Supplies"
    },
    {
        "name": "Compostable Plastic",
        "description": "Please place this item in the garbage",
        "search": "\nCompostable Plastic,compostable cutlery,compostable plastic take-out container,compostable plastic take-out containers,compostable plastic cup,compostable plastic cups,compostable pen,compostable pens,compostable pencil,compostable pencils,biodegradable plastic,bioplastic",
        "tag": [
            "Garbage"
        ],
        "category": "Office supplies",
        "subCategory": "Supplies"
    },
    {
        "name": "Elastic Band",
        "description": "Please place this item in the garbage.",
        "search": "\nElastic Band,Rubber band,Rubber",
        "tag": [
            "Garbage"
        ],
        "category": "Office supplies",
        "subCategory": "Supplies"
    },
    {
        "name": "Office Supplies",
        "description": "Please place this item in the garbage.",
        "search": "\nOffice Supplies,Pen,Pencil,Eraser,Paperclip,Staples,Stapler,Marker,Sharpie,Highlighter,Pencil Crayon,Crayon,Coloured pencil",
        "tag": [
            "Garbage"
        ],
        "category": "Office supplies",
        "subCategory": "Supplies"
    },
    {
        "name": "Cereal Box",
        "description": "Please flatten the package and place in your Blue Box. Remove any plastic or foil liners and place in garbage.",
        "search": "\nCereal Box,Cracker Box,Pasta Box",
        "tag": [
            "Blue Box",
            "York Region Waste Facility"
        ],
        "category": "Packaging",
        "subCategory": "Boxboard"
    },
    {
        "name": "Cigarette Packages",
        "description": "Please flatten the package and place in your Blue Box. Remove any plastic or foil liners and place in garbage.",
        "search": "\nCigarette Packages",
        "tag": [
            "Blue Box",
            "York Region Waste Facility"
        ],
        "category": "Packaging",
        "subCategory": "Boxboard"
    },
    {
        "name": "Egg carton",
        "description": "Cardboard or plastic egg cartons can go in the blue box.  Styrofoam cartons can be placed in the garbage.",
        "search": "\nEgg carton",
        "tag": [
            "Blue Box"
        ],
        "category": "Packaging",
        "subCategory": "Boxboard"
    },
    {
        "name": "Frozen Food Box",
        "description": "Please flatten the package and place in your Blue Box. Remove any plastic or foil liners and place in garbage.",
        "search": "\nFrozen Food Box",
        "tag": [
            "Blue Box",
            "York Region Waste Facility"
        ],
        "category": "Packaging",
        "subCategory": "Boxboard"
    },
    {
        "name": "Paper Ice Cream Container",
        "description": "Paper ice cream containers are challenging to recycle as they are lined with plastic or wax and act as a contaminant in the recycling system. Please place paper ice cream containers in the garbage.",
        "search": "\nPaper Ice Cream Container",
        "tag": [
            "Garbage"
        ],
        "category": "Packaging",
        "subCategory": "Boxboard"
    },
    {
        "name": "Paper Take-Out Coffee Trays",
        "description": "Please place this item in the blue box.",
        "search": "\nPaper Take-Out Coffee Trays,Drink Tray,Pulp Paper Tray,Coffee Tray,Take-Out Tray",
        "tag": [
            "Blue Box"
        ],
        "category": "Packaging",
        "subCategory": "Boxboard"
    },
    {
        "name": "Boxboard",
        "description": "Please place this item loose in your Blue Box. Remove any inner plastic liners and place those in the garbage.",
        "search": "\nBoxboard,Tissue Box,Kleenex Box,Shoe Box,Cracker Box,Tin Foil Container",
        "tag": [
            "Blue Box"
        ],
        "category": "Packaging",
        "subCategory": "Cardboard"
    },
    {
        "name": "Cardboard Box",
        "description": "Please place this item in your Blue Box. Flatten and bundle large cardboard boxes. Do not include waxed or coated cardboard.  For specific curbside requirements please check your local municipal website or waste calendar. Cardboard is also accepted for free at select York Region Waste Facilities. Click \"Where it Goes\" icon for details.",
        "search": "\nCardboard Box,Corrugated,OCC,Corrugated Cardboard",
        "tag": [
            "Blue Box",
            "York Region Waste Facility"
        ],
        "category": "Packaging",
        "subCategory": "Cardboard"
    },
    {
        "name": "Pizza Box Clean",
        "description": "Please place this item in your Blue Box. Flatten and bundle large cardboard boxes. Do not include waxed, coated or soiled cardboard. For specific curbside requirements please check your local municipal website or waste calendar. Cardboard is also accepted for free at select York Region Waste Facilities. Click \"Where it Goes\" icon for details.",
        "search": "\nPizza Box Clean,Pizza Box",
        "tag": [
            "Blue Box"
        ],
        "category": "Packaging",
        "subCategory": "Cardboard"
    },
    {
        "name": "Pizza Box Soiled",
        "description": "Please place this item in the green bin.",
        "search": "\nPizza Box Soiled",
        "tag": [
            "Green Bin"
        ],
        "category": "Packaging",
        "subCategory": "Cardboard"
    },
    {
        "name": "Glass Bottle or Jar",
        "description": "Please place this item in your blue box. Please remove metal lids and place lids in the blue box.",
        "search": "\nGlass Bottle or Jar,Glass Juice Bottle,Glass Water Bottle,Glass Pop Bottle,Glass Condiment Jar,Jam Jar,Brown glass bottle for health supplements,Metal Lid from Glass Jar",
        "tag": [
            "Blue Box"
        ],
        "category": "Packaging",
        "subCategory": "Glass"
    },
    {
        "name": "Mason Jar",
        "description": "Please place this item in your blue box.",
        "search": "\nMason Jar,Mason Jar",
        "tag": [
            "Blue Box"
        ],
        "category": "Packaging",
        "subCategory": "Glass"
    },
    {
        "name": "Plastic Tubs",
        "description": "Please place this item in your Blue Box. Please make sure containers are empty and rinsed and plastic lids are on.",
        "search": "\nPlastic Tubs,Margarine Tub,Sour Cream Tub,Cottage Cheese Tub,Ice Cream Tub,Lid,Yogurt Tub,Single serve yogurt,Apple sauce container,Yogurt Cup",
        "tag": [
            "Blue Box"
        ],
        "category": "Packaging",
        "subCategory": "Large mouth tubs and lids produce container"
    },
    {
        "name": "Clear Plastic Packaging",
        "description": "Clear plastic (non-black plastics) can be placed in the blue box. Consider using reusable containers wherever possible.",
        "search": "\nClear Plastic Packaging,Clear Plastic Container,Clear Plastic Clamshells,Clear Plastic Produce Container,Clear Plastic #6,Rubbermaid Food Saver Containers,Clear Plastic Berry Container,Clear Plastic Cup,Clear Molded Plastic Packaging,Clear Plastic Toy Packaging,Clear Plastic Electronics Packaging,Clear Plastic Dip Containers,Clear Plastic Food Tubs,Clear Plastic Hummus Containers,Plastic Sprout Container,Clear Plastic Takeout Container",
        "tag": [
            "Blue Box"
        ],
        "category": "Packaging",
        "subCategory": "Large rigid plastic items"
    },
    {
        "name": "Large Jug/Pail",
        "description": "Please place this item in the garbage. Check your local municipal website or waste calendar for size restrictions at the curb. Otherwise, drop this item off as garbage for a fee at select waste depots. Click \"Where it Goes\" icon for locations.",
        "search": "\nLarge Jug/Pail,Costco Laundry Detergent Bottle,Rubbermaid Bin,Garbage Bin,Plastic Jug,Plastic Pail,Jug,Pail",
        "tag": [
            "Garbage",
            "York Region Waste Facility",
            "Community Drop off"
        ],
        "category": "Packaging",
        "subCategory": "Large rigid plastic items"
    },
    {
        "name": "Plastic Water Jugs",
        "description": "Please place this item in the garbage. Oversized water jugs and pails are not accepted in the blue box. Residents are encouraged to purchase returnable water jugs instead of single use,  15-litre water jugs. Check your local municipal website or waste calendar for size restrictions at the curb. Otherwise, drop this item off as garbage for a fee at select waste depots. Click map icon for locations.",
        "search": "\nPlastic Water Jugs,15 litre plastic water jugs,water cooler jugs,Plastic Water Cooler Bottle",
        "tag": [
            "Garbage",
            "York Region Waste Facility",
            "Community Drop off"
        ],
        "category": "Packaging",
        "subCategory": "Large rigid plastic items"
    },
    {
        "name": "Aerosol Can",
        "description": "Please place empty aerosol cans loose in your blue box and plastic caps in your garbage.  If the aerosol can is not completely empty, it is considered Household Hazardous Waste (HHW) and can be taken to a HHW depot for safe recycling and disposal. Click \"Where it Goes\" icon for locations.",
        "search": "\nAerosol Can,Spray,Hairspray Can,Sunscreen,Air Freshener Spray,Spray Paint,Shaving Cream,Whip Cream",
        "tag": [
            "Blue Box",
            "York Region Waste Facility"
        ],
        "category": "Packaging",
        "subCategory": "Metal can"
    },
    {
        "name": "Chafing Fuel",
        "description": "This item is Household Hazardous Waste (HHW) and can be taken to a HHW depot for proper recycling and disposal. Click icon for nearest locations. All HHW should be in original containers and well-marked. Containers are not returnable. Do not mix products. Residents may drop off up to 60L of HHW and 20 fluorescent tubes per day at York Region HHW Depots. If you are looking for alternative locations for proper recycling and disposal of your material please visit www.regeneration.ca.",
        "search": "\nChafing Fuel,chafing fuel catering aid,easy heaters,power heat,chafing gel,fondue gel,anolon sterno,buffet burner,buffet burners,sterno CandleLamp,chafer,choice chafing fuel",
        "tag": [
            "York Region Waste Facility"
        ],
        "category": "Packaging",
        "subCategory": "Metal can"
    },
    {
        "name": "Coffee Can",
        "description": "Remove lid and place lid and container loose in your Blue Box. Please make sure all containers are empty and dry.",
        "search": "\nCoffee Can",
        "tag": [
            "Blue Box"
        ],
        "category": "Packaging",
        "subCategory": "Metal can"
    },
    {
        "name": "Foil Sheet/Container",
        "description": "Please place this item in your Blue Box. Aluminum foil sheets should be scrunched up in a ball (at least 2\" diameter). Please remove all food residue before recycling.",
        "search": "\nFoil Sheet/Container,Aluminum,Pie Plate,Tin Foil,Aluminum Foil",
        "tag": [
            "Blue Box"
        ],
        "category": "Packaging",
        "subCategory": "Metal can"
    },
    {
        "name": "Food or Beverage Can",
        "description": "Remove lid and place lid and container in your Blue Box. Please make sure all containers are empty and dry. Do not crush cans.",
        "search": "\nFood or Beverage Can,Tin Can,Aluminum Can,Soup Can,Pop Can",
        "tag": [
            "Blue Box"
        ],
        "category": "Packaging",
        "subCategory": "Metal can"
    },
    {
        "name": "Construction Paper",
        "description": "Please place this item loose in the Blue Box.",
        "search": "\nConstruction Paper,Business Cards,Store Receipts",
        "tag": [
            "Blue Box"
        ],
        "category": "Packaging",
        "subCategory": "Paper"
    },
    {
        "name": "Paper Flour/Sugar bag",
        "description": "Please place this item in your green bin. Ensure there is no waxy coating.",
        "search": "\nPaper Flour/Sugar bag,paper sack,Kraft paper (non-waxed),Meat wrap (non-waxed),Muffin Paper,Cupcake Cup,Muffin Cup",
        "tag": [
            "Green Bin"
        ],
        "category": "Packaging",
        "subCategory": "Paper"
    },
    {
        "name": "Paper products",
        "description": "Please place this item in the blue box.",
        "search": "\nPaper products,Writing Paper,Bristol Board,Sticky Note,File Folder,Envelope,Index Card,Birthday Card,Christmas Card,Card,Envelope with plastic window",
        "tag": [
            "Blue Box"
        ],
        "category": "Packaging",
        "subCategory": "Paper"
    },
    {
        "name": "Bread/Milk Tag",
        "description": "Please place this item in the garbage.",
        "search": "\nBread/Milk Tag",
        "tag": [
            "Garbage"
        ],
        "category": "Packaging",
        "subCategory": "Plastic bags"
    },
    {
        "name": "Plastic Shopping Bag",
        "description": "This item can be recycled for free at community drop-off locations at participating retailers.  Click the “Where it Goes’ icon for locations near you.  Otherwise, please place this item in the garbage.  It is not accepted in the blue box.  Consider using a reusable shopping bag instead.",
        "search": "\nPlastic Shopping Bag,Grocery Bags,Plastic Bags",
        "tag": [
            "Garbage",
            "Community Drop off"
        ],
        "category": "Packaging",
        "subCategory": "Plastic bags"
    },
    {
        "name": "Resealable Bags",
        "description": "Please place this item in the garbage.",
        "search": "\nResealable Bags,Ziplock,Ziploc,Freezer Bag",
        "tag": [
            "Garbage"
        ],
        "category": "Packaging",
        "subCategory": "Plastic bags"
    },
    {
        "name": "Blister Packaging",
        "description": "Please place this item in the garbage.",
        "search": "\nBlister Packaging,Lozenge,Cough Drop,Pill,Blister Pack,Gum,Contact Lenses",
        "tag": [
            "Garbage"
        ],
        "category": "Packaging",
        "subCategory": "Plastic film and blister pack"
    },
    {
        "name": "Bread/Milk Bag",
        "description": "Please place this item in the garbage.",
        "search": "\nBread/Milk Bag,Bread Bag,Milk Bag,Baggie,Plastic Bread Bag,Plastic Bread Bag with no.4 inside recycling logo",
        "tag": [
            "Garbage"
        ],
        "category": "Packaging",
        "subCategory": "Plastic film and blister pack"
    },
    {
        "name": "Courier Bag",
        "description": "Please place this item in the garbage.",
        "search": "\nCourier Bag",
        "tag": [
            "Garbage"
        ],
        "category": "Packaging",
        "subCategory": "Plastic film and blister pack"
    },
    {
        "name": "Food Wrapper",
        "description": "Please place this item in the garbage.",
        "search": "\nFood Wrapper,Candy Wrapper,Granola Bar Wrapper,Gum Wrapper",
        "tag": [
            "Garbage"
        ],
        "category": "Packaging",
        "subCategory": "Plastic film and blister pack"
    },
    {
        "name": "Juice Drink Pouch",
        "description": "Please place this item in the garbage.",
        "search": "\nJuice Drink Pouch",
        "tag": [
            "Garbage"
        ],
        "category": "Packaging",
        "subCategory": "Plastic film and blister pack"
    },
    {
        "name": "Pad from meat tray or fruit container",
        "description": "Please place this item in the garbage.",
        "search": "\nPad from meat tray or fruit container,Raspberry pad,Meat tray pads,Raspberry pads",
        "tag": [
            "Garbage"
        ],
        "category": "Packaging",
        "subCategory": "Plastic film and blister pack"
    },
    {
        "name": "Pet Food Bag",
        "description": "Please place this item in the garbage.",
        "search": "\nPet Food Bag,Laminated Paper,Dog Food Bag,Cat Food Bag",
        "tag": [
            "Garbage"
        ],
        "category": "Packaging",
        "subCategory": "Plastic film and blister pack"
    },
    {
        "name": "Plastic Bubble Wrap",
        "description": "Please place this item in the garbage.",
        "search": "\nPlastic Bubble Wrap,Bubble Wrap,Bubble Wrap Envelope",
        "tag": [
            "Garbage"
        ],
        "category": "Packaging",
        "subCategory": "Plastic film and blister pack"
    },
    {
        "name": "Plastic Wrap",
        "description": "Please place this item in the garbage.  Consider opting for a reusable container instead.",
        "search": "\nPlastic Wrap,Cellophane,Saran Wrap,Mylar,Cling Film",
        "tag": [
            "Garbage"
        ],
        "category": "Packaging",
        "subCategory": "Plastic film and blister pack"
    },
    {
        "name": "Snack Food Bag",
        "description": "Please place this item in the garbage. Plastic wrap and bags used for food packaging are not recyclable.",
        "search": "\nSnack Food Bag,Chip Bag,Cookie Bag",
        "tag": [
            "Garbage"
        ],
        "category": "Packaging",
        "subCategory": "Plastic film and blister pack"
    },
    {
        "name": "Polystyrene Foam Packaging Large Styrofoam",
        "description": "Large, rigid pieces of polystyrene foam (Styrofoam) used as protective packaging for electronics and appliances can be dropped off at a Community Environmental Centre (CEC) or Georgina Transfer Station for recycling. Material must be free of debris, including cardboard and paper. Click \"Where it Goes\" icon for locations. Styrofoam containers such as meat trays, cups, plates and packaging peanuts (including biodegradable peanuts) are not accepted and should be placed in your garbage. Expanded Polystyrene Foam (EPS) is also not accepted and should be placed in your garbage.",
        "search": "\nPolystyrene Foam Packaging Large Styrofoam,Styrofoam",
        "tag": [
            "York Region Waste Facility"
        ],
        "category": "Packaging",
        "subCategory": "Polystrene (styrofoam)"
    },
    {
        "name": "Styrofoam Cups/Dishes/Containers",
        "description": "Please place this item in the garbage.",
        "search": "\nStyrofoam Cups/Dishes/Containers,Cup,Plate,Takeout,Coffee,Foam,Meat Tray,Packaging Peanuts,Expanded Polystyrene,EPS Foam,Clamshell,Styrofoam Clamshell,Styrofoam Peanuts",
        "tag": [
            "Garbage"
        ],
        "category": "Packaging",
        "subCategory": "Polystrene (styrofoam)"
    },
    {
        "name": "Plastic Laundry Detergent Bottle",
        "description": "Please place this item in the blue box.",
        "search": "\nPlastic Laundry Detergent Bottle,Plastic Fabric Softener Bottle,Plastic Toilet Bowl Cleaner Bottle",
        "tag": [
            "Blue Box"
        ],
        "category": "Packaging",
        "subCategory": "Rigid plastic bottles"
    },
    {
        "name": "Plastic Soap Bottle",
        "description": "Please place this item in your Blue Box. Please make sure containers are empty and rinsed and plastic lids are on.",
        "search": "\nPlastic Soap Bottle,Shampoo Bottle,Conditioner Bottle,Hand Soap Bottle",
        "tag": [
            "Blue Box"
        ],
        "category": "Packaging",
        "subCategory": "Rigid plastic bottles"
    },
    {
        "name": "Rigid Plastic Bottles",
        "description": "Please place this item in your blue box. Please make sure containers are empty and rinsed and plastic lids are on.",
        "search": "\nRigid Plastic Bottles,Plastic Pail 5L or less in size,Plastic Jar,Plastic Medicine Bottle Empty,Prescription Bottle,Pharmaceutical Bottle,Medicine bottle/puffer over the counter empty,laundry detergent bottles 5L or less,plastic spray bottle,Empty Plastic Medicine Bottles,Empty Plastic Vitamin Bottles,Empty Plastic Pill Bottles,Empty Plastic Supplement Bottles,Empty Plastic Pharmaceutical Bottles,Plastic Moisturizer Bottle",
        "tag": [
            "Blue Box"
        ],
        "category": "Packaging",
        "subCategory": "Rigid plastic bottles"
    },
    {
        "name": "Frozen Juice Container",
        "description": "Please place this item in your Blue Box.",
        "search": "\nFrozen Juice Container,Refrigerated Dough Container,Pillsbury Crescent Roll Container,Concentrated Juice Container",
        "tag": [
            "Blue Box"
        ],
        "category": "Packaging",
        "subCategory": "Spiral cardboard can"
    },
    {
        "name": "Powdered Drink Mix Container",
        "description": "Please place this item in your blue box.",
        "search": "\nPowdered Drink Mix Container,Pringles Can,Nut Container,Boxboard Cylinder,Paper Cylinder,Spiral Bound Container,Almond Container,Macadamia Nut Container",
        "tag": [
            "Blue Box"
        ],
        "category": "Packaging",
        "subCategory": "Spiral cardboard can"
    },
    {
        "name": "Disposable Cloth/Wipe",
        "description": "Please place this item in the garbage. Please do not flush wipes down the toilet.",
        "search": "\nDisposable Cloth/Wipe,J Cloth,Swiffer,Disinfectant Wipe,Lysol Wipes,Baby Wipes,Wipes,Disposable Mop Sheet,Mop Sheet,Wet Wipe,Sanitizing Wipe",
        "tag": [
            "Garbage"
        ],
        "category": "Personal care products",
        "subCategory": "Disposable hygiene items"
    },
    {
        "name": "Disposable Hygiene Items",
        "description": "Please place this item in the garbage. Please do not flush these items down the toilet.",
        "search": "\nDisposable Hygiene Items,Cotton Swab,Cotton Balls,Condom,Dental Floss,Toothbrush,Q-tips,Qtips,Ear Cleaners,makeup removal pads",
        "tag": [
            "Garbage"
        ],
        "category": "Personal care products",
        "subCategory": "Disposable hygiene items"
    },
    {
        "name": "Facial Tissue",
        "description": "Please place this item in the green bin.",
        "search": "\nFacial Tissue,Kleenex,Toilet Paper",
        "tag": [
            "Green Bin"
        ],
        "category": "Personal care products",
        "subCategory": "Disposable hygiene items"
    },
    {
        "name": "Feminine Hygiene Products",
        "description": "Please place this item in the green bin. Please do not flush products down the toilet.",
        "search": "\nFeminine Hygiene Products,Tampon,Maxipad,Tampax,Pantyliner,Playtex,Sanitary Pad",
        "tag": [
            "Green Bin"
        ],
        "category": "Personal care products",
        "subCategory": "Disposable hygiene items"
    },
    {
        "name": "Hair Colour",
        "description": "This item is Household Hazardous Waste (HHW) and can be taken to a HHW depot for proper recycling and disposal. Click icon for nearest locations. All HHW should be in original containers and well-marked. Containers are not returnable. Do not mix products. Residents may drop off up to 60L of HHW and 20 fluorescent tubes per day at York Region HHW Depots. Please do not flush or pour this product down the drain.",
        "search": "\nHair Colour,Hair Dye",
        "tag": [
            "York Region Waste Facility"
        ],
        "category": "Personal care products",
        "subCategory": "Hair colour"
    },
    {
        "name": "Nail Clippings",
        "description": "Please place this item in your green bin.",
        "search": "\nNail Clippings",
        "tag": [
            "Green Bin"
        ],
        "category": "Personal care products",
        "subCategory": "Nail products"
    },
    {
        "name": "Nail Products",
        "description": "This item is Household Hazardous Waste (HHW) and can be taken to a HHW depot for proper recycling and disposal. Click icon for nearest locations. All HHW should be in original containers and well-marked. Containers are not returnable. Do not mix products. Residents may drop off up to 60L of HHW and 20 fluorescent tubes per day at York Region HHW Depots. Please do not flush or pour these products down the drain.",
        "search": "\nNail Products,Nail Polish,Nail Polish Remover",
        "tag": [
            "York Region Waste Facility"
        ],
        "category": "Personal care products",
        "subCategory": "Nail products"
    },
    {
        "name": "Cosmetics",
        "description": "This item is household hazardous waste (HHW) and can be taken to a HHW depot for proper recycling and disposal. Click \"Where it Goes\" icon for nearest locations. All HHW should be in original containers and well-marked. Containers are not returnable. Do not mix products. York Region residents may drop off up to 60L of HHW and 20 fluorescent tubes per day at York Region HHW Depots.",
        "search": "\nCosmetics,Make-up,Mascara,Lipstick,Makeup",
        "tag": [
            "York Region Waste Facility"
        ],
        "category": "Personal care products",
        "subCategory": "Personal care products"
    },
    {
        "name": "Personal Care Products",
        "description": "This item is Household Hazardous Waste (HHW) and can be taken to a HHW depot for proper recycling and disposal. Click icon for nearest locations. All HHW should be in original containers and well-marked. Containers are not returnable. Do not mix products. Residents may drop off up to 60L of HHW and 20 fluorescent tubes per day at York Region HHW Depots.",
        "search": "\nPersonal Care Products,Deodorant,DEET,Off Spray,Sunscreen,Bug Spray,Hair Care Products,Hairspray,Mousse,Gel,Shampoo,Conditioner,Perfume,Cologne,Fragrance,Lotion",
        "tag": [
            "York Region Waste Facility"
        ],
        "category": "Personal care products",
        "subCategory": "Personal care products"
    },
    {
        "name": "Plastic Tube",
        "description": "Please place this item in the garbage.",
        "search": "\nPlastic Tube,Hand Cream Tube",
        "tag": [
            "Garbage"
        ],
        "category": "Personal care products",
        "subCategory": "Personal care products"
    },
    {
        "name": "Flea Collar",
        "description": "Please place this item in the garbage.",
        "search": "\nFlea Collar,Collar,Dog Collar",
        "tag": [
            "Garbage"
        ],
        "category": "Pet waste",
        "subCategory": "Pet accessories"
    },
    {
        "name": "Pet Blanket",
        "description": "Items in good condition can be donated. Acceptance of items is at the discretion of the charity. Click the “Where it Goes” icons to find a donation centre. Select organizations will take damaged items so long as they are clean, dry and odorless. Otherwise unusable or damaged items can go in the garbage.",
        "search": "\nPet Blanket,Pet Accessory,Blanket",
        "tag": [
            "Garbage",
            "Community Drop off"
        ],
        "category": "Pet waste",
        "subCategory": "Pet accessories"
    },
    {
        "name": "Bird Seed",
        "description": "Please place this item in the green bin.",
        "search": "\nBird Seed",
        "tag": [
            "Green Bin"
        ],
        "category": "Pet waste",
        "subCategory": "Pet waste"
    },
    {
        "name": "Hair and Fur",
        "description": "Please place this item in your green bin.",
        "search": "\nHair and Fur,Feathers",
        "tag": [
            "Green Bin"
        ],
        "category": "Pet waste",
        "subCategory": "Pet waste"
    },
    {
        "name": "Pet Bedding",
        "description": "Please place this item in your green bin.",
        "search": "\nPet Bedding",
        "tag": [
            "Green Bin"
        ],
        "category": "Pet waste",
        "subCategory": "Pet waste"
    },
    {
        "name": "Pet Waste",
        "description": "Please place this item in the green bin.",
        "search": "\nPet Waste,Kitty Litter,Dog Waste,Excrement,Feces,Droppings,Doggie Doo,Dog Poo,Dog Poop,Cat Litter,Pet Bedding,Pet Food",
        "tag": [
            "Green Bin"
        ],
        "category": "Pet waste",
        "subCategory": "Pet waste"
    },
    {
        "name": "Puppy Training Pad",
        "description": "Please place this item in the green bin.",
        "search": "\nPuppy Training Pad,Puppy Pee Pad",
        "tag": [
            "Green Bin"
        ],
        "category": "Pet waste",
        "subCategory": "Pet waste"
    },
    {
        "name": "Advertising",
        "description": "Please place this item loose in the Blue Box.",
        "search": "\nAdvertising,Catalogue,Flyers,Junk mail,Phone book",
        "tag": [
            "Blue Box"
        ],
        "category": "Printed materials",
        "subCategory": "Advertising"
    },
    {
        "name": "Shopping receipt",
        "description": "Please place this item in the blue box.",
        "search": "\nShopping receipt,receipts",
        "tag": [
            "Blue Box"
        ],
        "category": "Printed materials",
        "subCategory": "Advertising"
    },
    {
        "name": "Books",
        "description": "Items in good condition can be donated to charity at select donation centres.  Acceptance of items is at the discretion of the charity. Items in poor condition can be recycled loose in the blue box or brought to a Community Environmental Centre for recycling. Hard book covers must be removed and put in the garbage before placing in blue box.",
        "search": "\nBooks,Hardcover Book,Paperback,Novel,Textbook,Pocket Book,Textbooks",
        "tag": [
            "Blue Box",
            "York Region Waste Facility",
            "Reuse Donation Centre"
        ],
        "category": "Printed materials",
        "subCategory": "Books"
    },
    {
        "name": "Magazines/Newspapers",
        "description": "Please place this item in the Blue Box.",
        "search": "\nMagazines/Newspapers,Magazine,Newspaper,Printed paper,Calendar",
        "tag": [
            "Blue Box"
        ],
        "category": "Printed materials",
        "subCategory": "Magazines/Newspapers"
    },
    {
        "name": "Artificial Christmas Tree",
        "description": "Items in good condition can be donated at select Reuse Donation Centres.  Acceptance of items is at the discretion of the charity.   Damaged items that cannot be reused can be disposed for a fee at select York Region Waste Facilities.  Click the “Where it Goes\" icons for reuse/disposal locations. Curbside collection may also be available.  Check with your local municipality for more information.",
        "search": "\nArtificial Christmas Tree,X-mas,Xmas",
        "tag": [
            "Garbage",
            "York Region Waste Facility",
            "Reuse Donation Centre"
        ],
        "category": "Seasonal",
        "subCategory": "Decorations"
    },
    {
        "name": "Christmas Decorations",
        "description": "Items in good condition can be donated to charity at select donation centres.  Acceptance of items is at the discretion of the charity.   Damaged items can be disposed for a fee at select York Region Waste Facilities.  Click the “Where it Goes\" icons for reuse/disposal locations.    Curbside collection may also be available.  Check with your local municipality for more information.",
        "search": "\nChristmas Decorations,Christmas Balls,Garland,Tinsel,Ornaments,Christmas Stockings",
        "tag": [
            "Garbage",
            "York Region Waste Facility",
            "Reuse Donation Centre"
        ],
        "category": "Seasonal",
        "subCategory": "Decorations"
    },
    {
        "name": "Christmas Lights",
        "description": "Items in good condition can be donated.  Acceptance of items is at the discretion of the charity.   Click the “Where it Goes\" icons to find a donation centre or York Region Community Environmental Centre near you.  Damaged items can go in the garbage.",
        "search": "\nChristmas Lights,Xmas Lights,Light String",
        "tag": [
            "Garbage",
            "York Region Waste Facility",
            "Reuse Donation Centre"
        ],
        "category": "Seasonal",
        "subCategory": "Decorations"
    },
    {
        "name": "Gift Bag",
        "description": "Please place this item in the blue box. Remove ribbons, bows and tape.",
        "search": "\nGift Bag,Greeting Card",
        "tag": [
            "Blue Box"
        ],
        "category": "Seasonal",
        "subCategory": "Gift wrap"
    },
    {
        "name": "Ribbon/Bow",
        "description": "Please place this item in the garbage.",
        "search": "\nRibbon/Bow",
        "tag": [
            "Garbage"
        ],
        "category": "Seasonal",
        "subCategory": "Gift wrap"
    },
    {
        "name": "Tissue Paper",
        "description": "Please place this item in the blue box.",
        "search": "\nTissue Paper",
        "tag": [
            "Blue Box"
        ],
        "category": "Seasonal",
        "subCategory": "Gift wrap"
    },
    {
        "name": "Wrapping Paper",
        "description": "Please place this item in the blue box. Remove ribbons, bows and tape.",
        "search": "\nWrapping Paper,Gift wrap,gift bag",
        "tag": [
            "Blue Box"
        ],
        "category": "Seasonal",
        "subCategory": "Gift wrap"
    },
    {
        "name": "Christmas Tree",
        "description": "This is yard waste. The tree must be free of all debris including decorations, plastic, compostable, and biodegrable bags. Special collection weeks may apply for Christmas trees. Please check your local municipal website or waste calendar for further collection information. Yard waste can also be dropped off at the Bloomington Compost Site. Fees may apply. Click map icon for acceptable yard waste materials.",
        "search": "\nChristmas Tree,Xmas Tree,X-mas Tree",
        "tag": [
            "Yard Waste"
        ],
        "category": "Seasonal",
        "subCategory": "Outdoor decorations (organic)"
    },
    {
        "name": "Plant Tray",
        "description": "Please place this item in the garbage.",
        "search": "\nPlant Tray,Plant Flat",
        "tag": [
            "Garbage"
        ],
        "category": "Seasonal",
        "subCategory": "Outdoor decorations (organic)"
    },
    {
        "name": "Pumpkin",
        "description": "This can go in your backyard composter or be set out as yard waste. Please check your local municipal website or waste calendar for further collection information. Yard waste can also be dropped off at a yard waste depot. Fees will apply for all loads of yard waste. Click \"Where it Goes\" icon for locations. Please visit www.york.ca/compost to learn more.",
        "search": "\nPumpkin,Jack O Lantern",
        "tag": [
            "Yard Waste",
            "York Region Waste Facility",
            "Community Drop off"
        ],
        "category": "Seasonal",
        "subCategory": "Outdoor decorations (organic)"
    },
    {
        "name": "Car",
        "description": "This is not accepted at any York Region waste depot. Please contact a car donation program or auto wrecker company.",
        "search": "\nCar",
        "tag": [],
        "category": "Sharp metals",
        "subCategory": "Motorized vehicles and parts"
    },
    {
        "name": "Motorized Vehicles",
        "description": "This is not accepted at any York Region waste depot. Please contact an  auto wrecker company.",
        "search": "\nMotorized Vehicles,Riding Lawn Mower,Snowmobile,Tent Trailer,Large Engine,Boat Engine",
        "tag": [],
        "category": "Sharp metals",
        "subCategory": "Motorized vehicles and parts"
    },
    {
        "name": "Watercraft",
        "description": "Watercraft including boats, jetski, and seadoo are not accepted at any York Region waste depot.",
        "search": "\nWatercraft,Boat,Seadoo,Skidoo,Ski-doo,Jet Ski,Jet-Ski",
        "tag": [],
        "category": "Sharp metals",
        "subCategory": "Motorized vehicles and parts"
    },
    {
        "name": "Barbeque",
        "description": "This item can be dropped off as scrap metal, free of charge, at select waste depots. Click \"Where it Goes\"  icon for locations. A fee may be required if the item cannot be recycled.",
        "search": "\nBarbeque,BBQ,BBQ Grill",
        "tag": [
            "York Region Waste Facility"
        ],
        "category": "Sharp metals",
        "subCategory": "Other metal items"
    },
    {
        "name": "Bathtub/Sink",
        "description": "This item can be dropped off as scrap metal, free of charge, at select waste depots. Click \"Where it Goes\" icon for nearest locations. A fee may be charged if the item cannot be recycled.",
        "search": "\nBathtub/Sink,Shower Enclosure,Plumbing Fixtures,Faucet,Tub,Bath",
        "tag": [
            "York Region Waste Facility"
        ],
        "category": "Sharp metals",
        "subCategory": "Other metal items"
    },
    {
        "name": "Bicycle",
        "description": "Items in good condition can be donated to charity at select donation centres. Acceptance of items is at the discretion of the charity. Damaged items can be recycled as scrap metal at select York Region Waste Facilities.  Click the “Where it Goes\" icons for reuse/recycling locations.    Curbside collection may also be available.  Check with your local municipality for more information. Tip: This item can be repaired at a bike repair shop",
        "search": "\nBicycle,Bike",
        "tag": [
            "Reuse Donation Centre",
            "York Region Waste Facility"
        ],
        "category": "Sharp metals",
        "subCategory": "Other metal items"
    },
    {
        "name": "Chain Saw",
        "description": "This item can be dropped off as scrap metal, free of charge, at select waste depots. Please ensure oil and gasoline have been removed prior to drop-off which is considered hazardous waste. Click map icon for locations.",
        "search": "\nChain Saw",
        "tag": [
            "York Region Waste Facility"
        ],
        "category": "Sharp metals",
        "subCategory": "Other metal items"
    },
    {
        "name": "Cookware",
        "description": "Items in good condition can be donated at select donation centres. Acceptance is at the discretion of  the charity. Items in poor condition may be disposed at select York Region Waste Facilities. Fees may apply if the item cannot be recycled as scrap metal. Curbside collection may also be available. Contact your local municipality for more information.",
        "search": "\nCookware,Pots,Frying Pan,Spatula,Pans,Stainless steel pot,Stainless steel Pan,Cooking Pots,Pots and Pans",
        "tag": [
            "Garbage",
            "York Region Waste Facility",
            "Reuse Donation Centre"
        ],
        "category": "Sharp metals",
        "subCategory": "Other metal items"
    },
    {
        "name": "E-Bike",
        "description": "This item can be dropped off as garbage at the Georgina Waste Transfer Station or a Community Environmental Centre (CEC). Disposal fees will apply. Please remove the battery from the bike before disposal. Batteries can be taken to a CEC for disposal. Click the \"Where it Goes\" icon for nearest locations.",
        "search": "\nE-Bike",
        "tag": [
            "Garbage",
            "York Region Waste Facility"
        ],
        "category": "Sharp metals",
        "subCategory": "Other metal items"
    },
    {
        "name": "Hair Dryer/Hair Straightener/Curling Iron",
        "description": "This item can be recycled as Electronics at York Region Waste Facilities. Please do not put these items in the blue box.",
        "search": "\nHair Dryer/Hair Straightener/Curling Iron,Curling iron,hair straightener,straightener,curler,hair dryer,blow dryer",
        "tag": [
            "York Region Waste Facility"
        ],
        "category": "Sharp metals",
        "subCategory": "Other metal items"
    },
    {
        "name": "Hangers",
        "description": "Metal hangers can be dropped off at select waste depots for scrap metal recycling. Click icon for nearest locations. Plastic and wood hangers can be placed in the garbage.",
        "search": "\nHangers,Clothes Hangers,Metal Hangers,Plastic Hangers,Coat Hanger,Coat Hook,Wood Hangers,Wire Hangers",
        "tag": [
            "Garbage",
            "York Region Waste Facility"
        ],
        "category": "Sharp metals",
        "subCategory": "Other metal items"
    },
    {
        "name": "Heating Oil Tank",
        "description": "Please empty the tank and cut it in half before dropping it off as scrap metal, free of charge, at select waste depots. Click map icon for nearest locations.",
        "search": "\nHeating Oil Tank",
        "tag": [
            "York Region Waste Facility"
        ],
        "category": "Sharp metals",
        "subCategory": "Other metal items"
    },
    {
        "name": "Ironing Board",
        "description": "Plastic ironing boards can be placed in the garbage. This item can be dropped off as garbage at the Georgina Waste Transfer Station or a Community Environmental Centre (CEC). Disposal fees will apply. This item may also be suitable for collection at the curb, please check your local municipal website or waste calendar for further information. Metal ironing boards can be recycled as scrap metal at select York Region Waste Facilities. This item can be dropped off, free of charge, at select waste depots. Click \"Where it Goes\" icon for locations. A fee may be required if the item cannot be recycled.",
        "search": "\nIroning Board,Metal Ironing Board,Plastic Ironing Board,Mini Ironing Board,Travel Ironing Board",
        "tag": [
            "Garbage",
            "York Region Waste Facility"
        ],
        "category": "Sharp metals",
        "subCategory": "Other metal items"
    },
    {
        "name": "Shoes",
        "description": "Items in good condition can be donated.  Acceptance of items is at the discretion of the charity.   Click the “Where it Goes\" icons to find a donation centre or York Region Community Environmental Centre near you.  Damaged items can go in the garbage. Tip: This item can be repaired at a shoe repair shop",
        "search": "\nShoes,Sandals,Boots",
        "tag": [
            "York Region Waste Facility",
            "Reuse Donation Centre",
            "Community Drop off"
        ],
        "category": "Shoes",
        "subCategory": "Other shoes"
    },
    {
        "name": "Textiles",
        "description": "Items in good condition can be donated. Acceptance of items is at the discretion of the charity. Click the “Where it Goes” icons to find a donation centre. Select organizations will take damaged items so long as they are clean, dry and odorless.",
        "search": "\nTextiles,Fabric,Curtains,Cushion,Upholstery,Rags,Drapes,Window Covering,Blankets,Sheets,Clothes",
        "tag": [
            "Reuse Donation Centre",
            "Community Drop off",
            "York Region Waste Facility"
        ],
        "category": "Shoes",
        "subCategory": "Other shoes"
    },
    {
        "name": "Shoes",
        "description": "Items in good condition can be donated.  Acceptance of items is at the discretion of the charity.   Click the “Where it Goes\" icons to find a donation centre or York Region Community Environmental Centre near you.  Damaged items can go in the garbage. Tip: This item can be repaired at a shoe repair shop",
        "search": "\nShoes,Sandals,Boots",
        "tag": [
            "York Region Waste Facility",
            "Reuse Donation Centre",
            "Community Drop off"
        ],
        "category": "Shoes",
        "subCategory": "Running shoes"
    },
    {
        "name": "Bicycle",
        "description": "Items in good condition can be donated to charity at select donation centres. Acceptance of items is at the discretion of the charity. Damaged items can be recycled as scrap metal at select York Region Waste Facilities.  Click the “Where it Goes\" icons for reuse/recycling locations.    Curbside collection may also be available.  Check with your local municipality for more information. Tip: This item can be repaired at a bike repair shop",
        "search": "\nBicycle,Bike",
        "tag": [
            "Reuse Donation Centre",
            "York Region Waste Facility"
        ],
        "category": "Sporting Goods",
        "subCategory": "Bicycle"
    },
    {
        "name": "Bicycle Helmet",
        "description": "Please place this item in the garbage.",
        "search": "\nBicycle Helmet,Helmet",
        "tag": [
            "Garbage"
        ],
        "category": "Sporting Goods",
        "subCategory": "Bicycle"
    },
    {
        "name": "Fishing Line",
        "description": "This item can be dropped of at community drop-off locations for recycling. Click map icon for nearest location. Otherwise, this item is garbage.",
        "search": "\nFishing Line",
        "tag": [
            "Garbage",
            "Community Drop off"
        ],
        "category": "Sporting Goods",
        "subCategory": "Fishing line"
    },
    {
        "name": "Exercise Equipment",
        "description": "Items in good condition can be donated. Acceptance of items is at the discretion of the charity. Damaged items can be disposed for a fee at select York Region Waste Facilities.  Click the “Where it Goes’ icons for reuse/disposal locations.  Curbside collection may also be available. Check with your local municipality for more information.",
        "search": "\nExercise Equipment,Treadmill,Elliptical Trainer,Stair Climber,Barbell,Weights,Yoga Mat",
        "tag": [
            "Garbage",
            "York Region Waste Facility",
            "Reuse Donation Centre",
            "Community Drop off"
        ],
        "category": "Sporting Goods",
        "subCategory": "Other sports equipment"
    },
    {
        "name": "Handheld Sports Equipment",
        "description": "Items in good condition can be donated to charity at select donation centres.  Acceptance of items is at the discretion of the charity.   Damaged items can be disposed for a fee at select York Region Waste Facilities.  Click the “Where it Goes\" icons for reuse/disposal locations.    Curbside collection may also be available.  Check with your local municipality for more information. Tip: This item can be repaired at a sports equipment repair shop",
        "search": "\nHandheld Sports Equipment,Fishing Pole,Fishing Net,Tackle,Pool Cue,Tennis Racquet,Hockey Stick,Golf Club,Baseball Bat,Soccer Ball,Football,Hockey Pads,Exercise Ball,Baseball Glove,Baseball Cleats,Baseball Hats,Basket Ball,Basketball",
        "tag": [
            "York Region Waste Facility",
            "Reuse Donation Centre",
            "Community Drop off"
        ],
        "category": "Sporting Goods",
        "subCategory": "Other sports equipment"
    },
    {
        "name": "Skates",
        "description": "Items in good condition can be donated.  Acceptance of items is at the discretion of the charity.   Click the “Where it Goes\" icons to find a donation centre or York Region Community Environmental Centre near you.  Damaged items can go in the garbage.",
        "search": "\nSkates,Hockey,Figure",
        "tag": [
            "Garbage",
            "Reuse Donation Centre",
            "York Region Waste Facility",
            "Community Drop off"
        ],
        "category": "Sporting Goods",
        "subCategory": "Other sports equipment"
    },
    {
        "name": "Skis/Snowboard",
        "description": "Items in good condition can be donated to charity at select donation centres or at York Region’s Community Environmental Centres.  Acceptance of items is at the discretion of the charity.   Damaged items can be disposed for a fee at select York Region Waste Facilities.  Click the “Where it Goes\" icons for reuse/disposal locations.    Curbside collection may also be available.  Check with your local municipality for more information.",
        "search": "\nSkis/Snowboard,Cross-Country Skis,Downhill Skis,Ski,Skis,Snowboard,Snowboards",
        "tag": [
            "Garbage",
            "Reuse Donation Centre",
            "York Region Waste Facility",
            "Community Drop off"
        ],
        "category": "Sporting Goods",
        "subCategory": "Other sports equipment"
    },
    {
        "name": "Water Sports Equipment",
        "description": "Items in good condition can be donated to charity at select donation centres. Acceptance of items is at the discretion of the charity. Damaged items can be disposed for a fee at select York Region Waste Facilities.  Click the “Where it Goes\" icons for reuse/disposal locations.    Curbside collection may also be available.  Check with your local municipality for more information.",
        "search": "\nWater Sports Equipment,Surfboard,Canoe,Kayak,Pool Noodle,Paddle",
        "tag": [
            "Garbage",
            "York Region Waste Facility",
            "Reuse Donation Centre",
            "Community Drop off"
        ],
        "category": "Sporting Goods",
        "subCategory": "Other sports equipment"
    },
    {
        "name": "Car/Truck Tires",
        "description": "This item can be recycled for free at select York Region waste facilities and community drop-off locations at participating retailers . Tires can be on or off rims. There is a limit of ten tires per day. Click the “Where it Goes’ icons for locations near you.",
        "search": "\nCar/Truck Tires,Wheels,SUV Tires,Tire,Rims",
        "tag": [
            "Community Drop off",
            "York Region Waste Facility"
        ],
        "category": "Tires",
        "subCategory": "Car and truck tires"
    },
    {
        "name": "Bicycle Tires",
        "description": "Please place this item in the garbage.",
        "search": "\nBicycle Tires,Bike Tube,Bike Tire,Training Wheels",
        "tag": [
            "Garbage"
        ],
        "category": "Tires",
        "subCategory": "Small tires"
    },
    {
        "name": "Small Tire",
        "description": "Please place this item in the garbage.",
        "search": "\nSmall Tire,Scooter Tire,Wheelbarrow Tire,Toy Tire,Wagon Tire,Lawn Mower Tire",
        "tag": [
            "Garbage"
        ],
        "category": "Tires",
        "subCategory": "Small tires"
    },
    {
        "name": "Tractor Tires",
        "description": "This item can be recycled for free at select York Region waste facilities and community drop-off locations at participating retailers . Tires can be on or off rims. There is a limit of ten tires per day. Click the “Where it Goes\" icons for locations near you.",
        "search": "\nTractor Tires",
        "tag": [
            "Community Drop off",
            "York Region Waste Facility"
        ],
        "category": "Tires",
        "subCategory": "Tractor tires"
    },
    {
        "name": "Grass Clippings",
        "description": "Limited quantities of this item can be dropped off as yard waste at the Bloomington Yard Waste Depot. Fees may apply. Click \"Where it Goes\" for location. This item can also be added to a backyard composter.",
        "search": "\nGrass Clippings,Grass",
        "tag": [
            "Back Yard Composter",
            "Community Drop off"
        ],
        "category": "Yard waste",
        "subCategory": "Grass clippings"
    },
    {
        "name": "Sod",
        "description": "Small residential quantities of sod with dirt removed is accepted as yard waste at the Georgina Transfer Station and Bloomington Yard Waste Depot. Fees may apply. Click \"Where it Goes\" icon for location and fee's.",
        "search": "\nSod",
        "tag": [
            "Community Drop off"
        ],
        "category": "Yard waste",
        "subCategory": "Grass clippings"
    },
    {
        "name": "Leaves/Branches",
        "description": "This can go in your backyard composter or be set out at the curb as yard waste. Please check your local municipal website or waste calendar for further collection information. Yard waste can also be dropped off at the Bloomington Yard Waste Depot. Fees may apply. Click \"Where it Goes\" icon for acceptable yard waste items.",
        "search": "\nLeaves/Branches,Garden Trimmings,Hedge,Brush,Plants,Fallen Fruit from Trees,Branches,Leaves",
        "tag": [
            "Yard Waste"
        ],
        "category": "Yard waste",
        "subCategory": "Leaves and branches"
    },
    {
        "name": "Weeds",
        "description": "This can go in your backyard composter or be set out at the curb as yard waste. Please check your local municipal website or waste calendar for further collection information. Yard waste can also be dropped off at the Bloomington Yard Waste Depot. Fees may apply. Click \"Where it Goes\" for acceptable yard waste materials.",
        "search": "\nWeeds,Dandelions",
        "tag": [
            "Yard Waste"
        ],
        "category": "Yard waste",
        "subCategory": "Leaves and branches"
    },
    {
        "name": "Wood Chips",
        "description": "This can go in your backyard composter or be set out as yard waste. Please check your local municipal website or waste calendar for further collection information. Yard waste can also be dropped off at a yard waste depot. Fees will apply for all loads of yard waste. Click \"Where it Goes\" icon for locations. Please visit www.york.ca/compost to learn more.",
        "search": "\nWood Chips,Wood Mulch,Mulch",
        "tag": [
            "Yard Waste",
            "Community Drop off",
            "York Region Waste Facility"
        ],
        "category": "Yard waste",
        "subCategory": "Leaves and branches"
    },
    {
        "name": "Yard Waste",
        "description": "This can go in your backyard composter or be set out at the curb as yard waste. Please check your local municipal website or waste calendar for further collection information. Yard waste can also be dropped off at the Bloomington Yard Waste Depot. Fees may apply for all loads of yard waste. Click \"Where it Goes\" icon for what is acceptable as yard waste.",
        "search": "\nYard Waste",
        "tag": [
            "Yard Waste"
        ],
        "category": "Yard waste",
        "subCategory": "Leaves and branches"
    },
    {
        "name": "Christmas Tree",
        "description": "This is yard waste. The tree must be free of all debris including decorations, plastic, compostable, and biodegrable bags. Special collection weeks may apply for Christmas trees. Please check your local municipal website or waste calendar for further collection information. Yard waste can also be dropped off at the Bloomington Compost Site. Fees may apply. Click map icon for acceptable yard waste materials.",
        "search": "\nChristmas Tree,Xmas Tree,X-mas Tree",
        "tag": [
            "Yard Waste"
        ],
        "category": "Yard waste",
        "subCategory": "Seasonal decorations"
    },
    {
        "name": "Fall Decorations",
        "description": "This is yard waste. Please check your local municipal website or waste calendar for further collection information. Yard waste can also be dropped off at a yard waste depot. Fees will apply for all loads of yard waste. Click map icon for locations.",
        "search": "\nFall Decorations,Hay,Corn Stalk,Hay Bale",
        "tag": [
            "Yard Waste",
            "York Region Waste Facility"
        ],
        "category": "Yard waste",
        "subCategory": "Seasonal decorations"
    },
    {
        "name": "Flowers/Houseplants",
        "description": "Please place this item in the green bin or your backyard composter. Please visit www.york.ca/compost to learn more.",
        "search": "\nFlowers/Houseplants,Fresh Flowers,Roses,Cut Flowers,Live Flowers,Houseplant,Houseplants,House Plants,Houseplant clippings",
        "tag": [
            "Back Yard Composter"
        ],
        "category": "Yard waste",
        "subCategory": "Seasonal decorations"
    },
    {
        "name": "Seaweed/Duckweed",
        "description": "Georgina residents are permitted to place lake weeds in their curbside yard waste for collection. It is recommended that material be dried prior to placing in yard waste containers. For more information please visit the Town of Georgina website.",
        "search": "\nSeaweed/Duckweed,Lake Weeds",
        "tag": [
            "Yard Waste"
        ],
        "category": "Yard waste",
        "subCategory": "Seaweed"
    },
    {
        "name": "Pea Gravel",
        "description": "Loads of dirt/soil/clean fill/gravel or sand are not accepted at any York Region depot. Consider using your clean soil in your gardens or contact a local landscaping service provider or garden centre to arrange for  disposal.",
        "search": "\nPea Gravel",
        "tag": [],
        "category": "Yard waste",
        "subCategory": "Soil/Clean fill"
    },
    {
        "name": "Sand",
        "description": "Loads of dirt/soil/clay/clean fill/gravel/rocks or sand are not accepted at any York Region depot or for curbside collection. Consider using your clean soil in your gardens or contact a local landscaping service provider or garden centre to arrange for disposal.",
        "search": "\nSand,Pool Sand,Playground Sand",
        "tag": [],
        "category": "Yard waste",
        "subCategory": "Soil/Clean fill"
    },
    {
        "name": "Soil",
        "description": "Loads of dirt/soil/clay/clean fill/gravel/rocks or sand are not accepted at any York Region depot or for curbside collection. Consider using your clean soil in your gardens or contact a local landscaping service provider or garden centre to arrange for  disposal.",
        "search": "\nSoil,Clean Fill,Dirt,Clay,Rocks,Earth,Potting Soil",
        "tag": [],
        "category": "Yard waste",
        "subCategory": "Soil/Clean fill"
    }
]