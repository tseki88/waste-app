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
        website: "https://www.york.ca/wps/portal/yorkhome/environment/bindicator/location/east%20gwillimbury%20household%20hazardous%20waste%20and%20recycling%20depot/"
    },
    {
        key: '2',
        name: "Elgin Mills Community Environmental Centre",
        municipality: "York Region",
        address: "1124 Elgin Mills Road East, Richmond Hill, Ontario, L4S 1M7",
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
        website: "https://www.york.ca/wps/portal/yorkhome/environment/bindicator/location/elgin%20mills%20community%20environmental%20centre/"
    },
    {
        key: '3',
        name: "Markham Household Hazardous Waste Depot",
        municipality: "York Region",
        address: "403 Rodick Rd #383, Markham, Ontario, L6G 1B2",
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
        website: "https://www.york.ca/wps/portal/yorkhome/environment/bindicator/location/markhamhouseholdhazardouswastedepot/"
    },
    {
        key: '4',
        name: "McCleary Court Community Environmental Centre",
        municipality: "York Region",
        address: "130 McCleary Court, Vaughan, Ontario, L4K 1W8",
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
        website: "https://www.york.ca/wps/portal/yorkhome/environment/bindicator/location/mcclearycourtcommunityenvironmentalcentre"
    },
    // {
    //     key: '5',
    //     name: "Bloomington Yard Waste Depot",
    //     municipality: "York Region",
    //     address: "1351 Bloomington Road East, Richmond Hill, Ontario, L4K 2N7",
    //     hours: {
    //         "mon": "Closed",
    //         "tues": "Closed",
    //         "wed": "8:30am - 4:30pm",
    //         "thurs": "8:30am - 4:30pm",
    //         "fri": "8:30am - 4:30pm",
    //         "sat": "8:30am - 4:30pm",
    //         "sun": "8:30am - 3:30pm",
    //     },
    //     closed: "Civic and statutory holidays",
    //     website: "https://www.york.ca/wps/portal/yorkhome/environment/bindicator/location/bloomingtonyardwastedepot/"
    //  
    //     // April 1st to November 30th
    //     // Monday: 7:30 a.m. to 5 p.m.
    //     // Tuesday: 7:30 a.m. to 5 p.m.
    //     // Wednesday: 7:30 a.m. to 5 p.m.
    //     // Thursday: 7:30 a.m. to 5 p.m.
    //     // Friday: 7:30 a.m. to 5 p.m.
    //     // Saturday: 7:30 a.m. to 5 p.m.
    //     // Sunday: Closed

    //     // December 1st to March 31st
    //     // Monday: 8 a.m. to 4 p.m.
    //     // Tuesday: 8 a.m. to 4 p.m.
    //     // Wednesday: 8 a.m. to 4 p.m.
    //     // Thursday: 8 a.m. to 4 p.m.
    //     // Friday: 8 a.m. to 4 p.m.
    //     // Saturday: Closed
    //     // Sunday: Closed
    // },
    {
        key: '5',
        name: "Georgina Transfer Station, Household Hazardous Waste and Recycling Depot",
        municipality: "York Region",
        address: "23068 Warden Avenue, Georgina, Ontario, L4P 3E9",
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
        website: "https://www.york.ca/wps/portal/yorkhome/environment/bindicator/location/georgina%20waste%20transfer%20station%2C%20household%20hazardous%20waste%20and%20recycling%20depot/"
    },

]