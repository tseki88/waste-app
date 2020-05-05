const data = [
    {
        key: '1',
        name: "styrofoam",
        tags: ["garbage"],
        image: null,
        description: [
            "Styro Filler Text: -- for recycling. Otherwise, this item should be placed in your garbage.",
            "Material must be free of debris, including cardboard and paper.",
            "Take out containers such as pizza boxes are not accepted as recycling and should be placed in your compost"
        ]
    },
    {
        key: '2',
        name: "styrofoam cup",
        tags: ["garbage"],
        image: null,
        description: [
            "Cup Filler Text: -- for recycling. Otherwise, this item should be placed in your garbage.",
            "Material must be free of debris, including cardboard and paper.",
            "Take out containers such as pizza boxes are not accepted as recycling and should be placed in your compost"
        ]
    },
    {
        key: '3',
        name: "styrofoam plate",
        tags: ["garbage"],
        image: null,
        description: [
            "Plate Filler Text: -- for recycling. Otherwise, this item should be placed in your garbage.",
            "Material must be free of debris, including cardboard and paper.",
            "Take out containers such as pizza boxes are not accepted as recycling and should be placed in your compost"
        ]
    },
    {
        key: '4',
        name: "string",
        tags: ["garbage"],
        image: null,
        description: [
            "String Filler Text: -- for recycling. Otherwise, this item should be placed in your garbage.",
            "Material must be free of debris, including cardboard and paper.",
            "Take out containers such as pizza boxes are not accepted as recycling and should be placed in your compost"
        ]
    },
    {
        key: '5',
        name: "styrofoam packaging",
        tags: ["drop off", "garbage"],
        image: null,
        description: [
            "Drop off at a Community Environmental Center (CEC) or Georgina Transfer Station for recycling. Otherwise, this item should be placed in your garbage.",
            "Material must be free of debris, including cardboard and paper.",
            "Styrofoam containers such as meat trays, cups, plates and packaging peanuts (including biodegradable peanuts) are not accepted and should be placed in your garbage"
        ]
    },
    {
        key: '6',
        name: "cardboard",
        tags: ["drop off", "recycling", "compost"],
        image: null,
        description: [
            "Cardboard Filler Text: -- for recycling. Otherwise, this item should be placed in your garbage.",
            "Material must be free of debris, including cardboard and paper.",
            "Take out containers such as pizza boxes are not accepted as recycling and should be placed in your compost"
        ]
    },
    {
        key: '7',
        name: "coffee cup",
        tags: ["garbage"],
        image: null,
        description: [
            "Coffee Cup Filler Text: -- for recycling. Otherwise, this item should be placed in your garbage.",
            "Material must be free of debris, including cardboard and paper.",
            "Take out containers such as pizza boxes are not accepted as recycling and should be placed in your compost"
        ]
    },
]

export default data

export const depotData = [
    {
        key: '1',
        name: "East Gwillimbury Household Hazardous Waste and Recycling Depot",
        municipality: "York Region",
        address: "225 Garfield Wright Boulevard, East Gwillimbury, Ontario, L0G 1V0",
        addressSimple: "225 Garfield Wright Boulevard",
        hours: [
            {
                "mon": "8:30am - 4:30pm",
                "tues": "Closed",
                "wed": "Closed",
                "thurs": "8:30am - 4:30pm",
                "fri": "8:30am - 4:30pm",
                "sat": "8:30am - 4:30pm",
                "sun": "8:30am - 3:30pm",
            },
        ],
        closed: "Civic and statutory holidays",
        direction: "https://goo.gl/maps/rJ5dQhQN9PYXmT8B6",
        lat: "44.0763838",
        long: "-79.4009443",
        website: "https://www.york.ca/wps/portal/yorkhome/environment/bindicator/location/east%20gwillimbury%20household%20hazardous%20waste%20and%20recycling%20depot/",
        acceptedItems: [
            {
                category: "Appliances",
                subcategory: [
                    "Appliances with coolant",
                    "Large appliances",
                    "Small appliances"
                ]
            },{
                category: "Electronics and electrical waste",
                subcategory: [
                    "Cell phone",
                    "Computers and tablets",
                    "Media and accessories",
                    "TV/Media player"
                ]
            },{
                category: "Household hazardous waste",
                subcategory: [
                    "Car/Engine related products",
                    "Cleaning products",
                    "Compressed gas",
                    "Disposable batteries",
                    "Flammable liquids/solids",
                    "Light bulbs",
                    "Other chemicals",
                    "Paints and coatings",
                    "Pesticides",
                    "Rechargeable batteries"
                ]
            },{
                category: "Kitchen waste",
                subcategory: [
                    "Cooking oil"
                ]
            },{
                category: "Medical/Homecare supplies",
                subcategory: [
                    "Medication",
                    "Sharps"
                ]
            },{
                category: "Office supplies",
                subcategory: [
                    "Equipment",
                    "Office chemicals"
                ]
            },{
                category: "Packaging",
                subcategory: [
                    "Boxboard",
                    "Cardboard"
                ]
            },{
                category: "Personal care products",
                subcategory: [
                    "Electronics and electrical waste",
                    "Hair colour",
                    "Nail products",
                    "Personal care products"
                ]
            },{
                category: "Sharp metals",
                subcategory: [
                    "Other metal items"
                ]
            }
        ]
    },
    {
        key: '2',
        name: "Elgin Mills Community Environmental Centre",
        municipality: "York Region",
        address: "1124 Elgin Mills Road East, Richmond Hill, Ontario, L4S 1M7",
        addressSimple: "1124 Elgin Mills Road East",
        hours: [
            {
                "mon": "Closed",
                "tues": "Closed",
                "wed": "8:30am - 4:30pm",
                "thurs": "8:30am - 4:30pm",
                "fri": "8:30am - 4:30pm",
                "sat": "8:30am - 4:30pm",
                "sun": "8:30am - 3:30pm",
            },
        ],
        closed: "Civic and statutory holidays",
        direction: "https://goo.gl/maps/4geQ1R36ycM9Uuwh7",
        lat: "43.8982956",
        long: "-79.4097097",
        website: "https://www.york.ca/wps/portal/yorkhome/environment/bindicator/location/elgin%20mills%20community%20environmental%20centre/",
        acceptedItems: [
            {
                category: "Appliances",
                subcategory: [
                    "Appliances with coolant",
                    "Large appliances",
                    "Small appliances"
                ]
            },{
                category: "Baby supplies",
                subcategory: [
                    "Baby furniture"
                ]
            },{
                category: "Building materials",
                subcategory: [
                    "Building supplies",
                    "Clean wood",
                    "Concrete",
                    "Drywall",
                    "Tools",
                    "Treated wood"
                ]
            },{
                category: "Clothing and textiles",
                subcategory: [
                    "Clothing",
                    "Textiles"
                ]
            },{
                category: "Electronics and electrical waste",
                subcategory: [
                    "Cell phone",
                    "Computers and tablets",
                    "Media and accessories",
                    "TV/Media player"
                ]
            },{
                category: "Garbage",
                subcategory: [
                    "Bagged",
                    "Bulky item disposal"
                ]
            },{
                category: "Household hazardous waste",
                subcategory: [
                    "Car/Engine related products",
                    "Cleaning products",
                    "Compressed gas",
                    "Disposable batteries",
                    "Flammable liquids/solids",
                    "Light bulbs",
                    "Other chemicals",
                    "Paints and coatings",
                    "Pesticides",
                    "Rechargeable batteries"
                ]
            },{
                category: "Housewares",
                subcategory: [
                    "Decorations",
                    "Pool accessories"
                ]
            },{
                category: "Kitchen waste",
                subcategory: [
                    "Cooking oil"
                ]
            },{
                category: "Medical/Homecare supplies",
                subcategory: [
                    "Medication",
                    "Sharps"
                ]
            },{
                category: "Office supplies",
                subcategory: [
                    "Equipment",
                    "Paper",
                    "Shredded paper "
                ]
            },{
                category: "Packaging",
                subcategory: [
                    "Boxboard",
                    "Cardboard",
                    "Polystrene (styrofoam)"
                ]
            },{
                category: "Personal care products",
                subcategory: [
                    "Hair colour",
                    "Nail products",
                    "Office supplies",
                    "Personal care products"
                ]
            },{
                category: "Printed materials",
                subcategory: [
                    "Books",
                    "Magazines/Newspapers"
                ]
            },{
                category: "Sharp metals",
                subcategory: [
                    "Other metal items"
                ]
            },{
                category: "Tires",
                subcategory: [
                    "Car and truck tires",
                    "Tractor tires"
                ]
            },
        ]
    },
    {
        key: '3',
        name: "Markham Household Hazardous Waste Depot",
        municipality: "York Region",
        address: "403 Rodick Rd #383, Markham, Ontario, L6G 1B2",
        addressSimple: "403 Rodick Rd #383",
        hours: [
            {
                "mon": "8:30am - 4:30pm",
                "tues": "Closed",
                "wed": "Closed",
                "thurs": "8:30am - 4:30pm",
                "fri": "8:30am - 4:30pm",
                "sat": "8:30am - 4:30pm",
                "sun": "8:30am - 3:30pm",
            },
        ],
        closed: "Civic and statutory holidays",
        direction: "https://goo.gl/maps/mAJmshNBJ3K4D5YK6",
        lat: "43.8372289",
        long: "-79.3451389",
        website: "https://www.york.ca/wps/portal/yorkhome/environment/bindicator/location/markhamhouseholdhazardouswastedepot/",
        acceptedItems: [
            {
                category: "Craft supplies",
                subcategory: [
                    "Glues and chemicals"
                ]
            },{
                category: "Electronics and electrical waste",
                subcategory: [
                    "Cell phone",
                    "Computers and tablets",
                    "Media and accessories",
                    "TV/Media player"
                ]
            },{
                category: "Household hazardous waste",
                subcategory: [
                    "Car/Engine related products",
                    "Cleaning products",
                    "Compressed gas",
                    "Disposable batteries",
                    "Flammable liquids/solids",
                    "Light bulbs",
                    "Other chemicals",
                    "Paints and coatings",
                    "Pesticides",
                    "Rechargeable batteries"
                ]
            },{
                category: "Kitchen waste",
                subcategory: [
                    "Cooking oil"
                ]
            },{
                category: "Medical/Homecare supplies",
                subcategory: [
                    "Medication",
                    "Sharps"
                ]
            },{
                category: "Personal care products",
                subcategory: [
                    "Electronics and electrical waste",
                    "Hair colour",
                    "Nail products",
                    "Personal care products"
                ]
            }
        ]
    },
    {
        key: '4',
        name: "McCleary Court Community Environmental Centre",
        municipality: "York Region",
        address: "130 McCleary Court, Vaughan, Ontario, L4K 1W8",
        addressSimple: "130 McCleary Court",
        hours: [
            {
                "mon": "Closed",
                "tues": "Closed",
                "wed": "8:30am - 4:30pm",
                "thurs": "8:30am - 4:30pm",
                "fri": "8:30am - 4:30pm",
                "sat": "8:30am - 4:30pm",
                "sun": "8:30am - 3:30pm",
            },
        ],
        closed: "Civic and statutory holidays",
        direction: "https://goo.gl/maps/Vyy4UpxXuY1Fy8ZWA",
        lat: "43.7973355",
        long: "-79.5132151",
        website: "https://www.york.ca/wps/portal/yorkhome/environment/bindicator/location/mcclearycourtcommunityenvironmentalcentre",
        acceptedItems: [
            {
                category: "Appliances",
                subcategory: [
                    "Appliances with coolant",
                    "Large appliances",
                    "Small appliances"
                ]
            },{
                category: "Baby supplies",
                subcategory: [
                    "Baby furniture"
                ]
            },{
                category: "Building materials",
                subcategory: [
                    "Building supplies",
                    "Clean wood",
                    "Concrete",
                    "Drywall",
                    "Tools"
                ]
            },{
                category: "Clothing and textiles",
                subcategory: [
                    "Clothing",
                    "Textiles"
                ]
            },{
                category: "Electronics and electrical waste",
                subcategory: [
                    "Cell phone",
                    "Computers and tablets",
                    "Media and accessories",
                    "TV/Media player"
                ]
            },{
                category: "Garbage",
                subcategory: [
                    "Bagged",
                    "Bulky item disposal"
                ]
            },{
                category: "Household hazardous waste",
                subcategory: [
                    "Car/Engine related products",
                    "Cleaning products",
                    "Compressed gas",
                    "Disposable batteries",
                    "Flammable liquids/solids",
                    "Light bulbs",
                    "Other chemicals",
                    "Paints and coatings",
                    "Pesticides",
                    "Rechargeable batteries"
                ]
            },{
                category: "Housewares",
                subcategory: [
                    "Decorations",
                    "Mattresses",
                    "Pool accessories"
                ]
            },{
                category: "Kitchen waste",
                subcategory: [
                    "Cooking oil"
                ]
            },{
                category: "Medical/Homecare supplies",
                subcategory: [
                    "Medication",
                    "Sharps"
                ]
            },{
                category: "Office supplies",
                subcategory: [
                    "Shredded paper"
                ]
            },{
                category: "Packaging",
                subcategory: [
                    "Boxboard",
                    "Cardboard",
                    "Polystrene (styrofoam)"
                ]
            },{
                category: "Printed materials",
                subcategory: [
                    "Books",
                    "Magazines/Newspapers"
                ]
            },{
                category: "Sharp metals",
                subcategory: [
                    "Other metal items"
                ]
            },{
                category: "Sporting goods",
                subcategory: [
                    "Bicycle"
                ]
            },{
                category: "Tires",
                subcategory: [
                    "Car and truck tires",
                    "Tractor tires"
                ]
            }
        ]
    },
    {
        key: '5',
        name: "Bloomington Yard Waste Depot",
        municipality: "York Region",
        address: "1351 Bloomington Road East, Richmond Hill, Ontario, L4K 2N7",
        addressSimple: "1351 Bloomington Road East" ,
        hours: [
            {
                key: 1,
                name: "April 1st - November 30th",
                "mon": "7:30am - 5pm",
                "tues": "7:30am - 5pm",
                "wed": "7:30am - 5pm",
                "thurs": "7:30am - 5pm",
                "fri": "7:30am - 5pm",
                "sat": "7:30am - 5pm",
                "sun": "Closed"
            },{
                key: 2,
                name: "December 1st - March 31st",
                "mon": "8am - 4pm",
                "tues": "8am - 4pm",
                "wed": "8am - 4pm",
                "thurs": "8am - 4pm",
                "fri": "8am - 4pm",
                "sat": "Closed",
                "sun": "Closed",
            },
        ],
        closed: "Civic and statutory holidays",
        direction: "https://goo.gl/maps/t49ADHekvqdWn6LK7",
        lat: "43.9711164",
        long: "-79.4144512",
        website: "https://www.york.ca/wps/portal/yorkhome/environment/bindicator/location/bloomingtonyardwastedepot/",
        acceptedItems: [
            {
                category: "Yard Waste",
                subcategory: [
                    "Branches",
                    "Christmas Tree",
                    "Flowers and plants",
                    "Fruits",
                    "Vegetable garden waste including pumpkins",
                    "Leaves",
                    "Shrubs",
                    "Grass clippings in small quantities",
                    "Weeds",
                    "Sod with dirt removed (small residential quantities)"
                ]
            }
        ],
    },
    {
        key: '6',
        name: "Georgina Transfer Station, Household Hazardous Waste and Recycling Depot",
        municipality: "York Region",
        address: "23068 Warden Avenue, Georgina, Ontario, L4P 3E9",
        addressSimple: "23068 Warden Avenue",
        hours: [
            {
                key: '1',
                name: "Transfer Station",
                "mon": "8am - 5pm",
                "tues": "8am - 5pm",
                "wed": "8am - 5pm",
                "thurs": "8am - 5pm",
                "fri": "8am - 5pm",
                "sat": "8am - 5pm",
                "sun": "Closed",
            },
            {
                key: '2',
                name: "Household Hazardous Waste Drop-off",
                "mon": "Closed",
                "tues": "8am - 5pm",
                "wed": "Closed",
                "thurs": "Closed",
                "fri": "Closed",
                "sat": "8am - 5pm",
                "sun": "Closed",
            }
        ],
        closed: "Civic and statutory holidays",
        direction: "https://goo.gl/maps/RqqaymDm8zupgAWz6",
        lat: "44.2101207",
        long: "-79.4173026",
        website: "https://www.york.ca/wps/portal/yorkhome/environment/bindicator/location/georgina%20waste%20transfer%20station%2C%20household%20hazardous%20waste%20and%20recycling%20depot/",
        acceptedItems: [
            {
                category: "Appliances",
                subcategory: [
                    "Appliances with coolant",
                    "Large appliances",
                    "Small appliances"
                ]
            },{
                category: "Baby supplies",
                subcategory: [
                    "Baby furniture"
                ]
            },{
                category: "Building materials",
                subcategory: [
                    "Building supplies",
                    "Concrete",
                    "Stone products/Asphalt"
                ]
            },{
                category: "Car/Engine related products",
                subcategory: [
                    "Sharp metals"
                ]
            },{
                category: "Cell phone",
                subcategory: [
                    "Building materials",
                    "Sharp metals"
                ]
            },{
                category: "Clothing and textiles",
                subcategory: [
                    "Clothing",
                    "Textiles"
                ]
            },{
                category: "Electronics and electrical waste",
                subcategory: [
                    "Cell phone",
                    "Computers and tablets",
                    "Media and accessories",
                    "TV/Media player"
                ]
            },{
                category: "Garbage",
                subcategory: [
                    "Bagged",
                    "Bulky item disposal",
                    "Oversized items"
                ]
            },{
                category: "Household hazardous waste",
                subcategory: [
                    "Car/Engine related products",
                    "Cleaning products",
                    "Compressed gas",
                    "Disposable batteries",
                    "Flammable liquids/solids",
                    "Light bulbs",
                    "Other chemicals",
                    "Paints and coatings",
                    "Pesticides",
                    "Rechargeable batteries"
                ]
            },{
                category: "Housewares",
                subcategory: [
                    "Decorations",
                    "Pool accessories"
                ]
            },{
                category: "Kitchen waste",
                subcategory: [
                    "Cooking oil"
                ]
            },{
                category: "Medical/Homecare supplies",
                subcategory: [
                    "Medication",
                    "Sharps"
                ]
            },{
                category: "Office supplies",
                subcategory: [
                    "Equipment",
                    "Office chemicals"
                ]
            },{
                category: "Packaging",
                subcategory: [
                    "Boxboard",
                    "Cardboard"
                ]
            },{
                category: "Personal care products",
                subcategory: [
                    "Electronics and electrical waste",
                    "Hair colour",
                    "Nail products",
                    "Personal care products"
                ]
            },{
                category: "Polystrene (styrofoam)",
                subcategory: [
                    "Sharp metals"
                ]
            },{
                category: "Printed materials",
                subcategory: [
                    "Books",
                    "Magazines/Newspapers"
                ]
            },{
                category: "Seasonal",
                subcategory: [
                    "Outdoor decorations (organic)"
                ]
            },{
                category: "Sharp metals",
                subcategory: [
                    "Electronics and electrical waste",
                    "Household hazardous waste",
                    "Motorized vehicles and parts",
                    "Other metal items",
                    "Personal care products"
                ]
            },{
                category: "Tires",
                subcategory: [
                    "Car and truck tires",
                    "Tractor tires"
                ]
            },{
                category: "Yard Waste",
                subcategory: [
                    "Leaves and branches",
                    "Roots and stumps",
                    "Seasonal decorations",
                    "Seaweed"
                ]
            }
        ]
    },
]