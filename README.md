## Things to check & consider 
- MIT license...?
- Asking Municipalities for access to their API for facilities/location details?
- 



## Location Permissions
- use a modal?
- Pretty much a placeholder screen while the OS pops up location permissions
- Should pop off once it has been selected


## Components

- Refactor Global Styles
- Refactor Home page Heading 
    - detach Search Component - can be reused for location/item/home page display)

- Screens:
    - Search page
    - Blog?
    - Setting


- Button styling is shared
- Clipboard Button
    - Soft Notification that the string has been copied to clipboard

- Blog Cards
    - Blogs
    - Possibly Short Recycling Tips (generates a set amount from a pool on random?)


- Light Mode
    - Light
    - Dark
    - Device Default(settings)
        - learn how to establish this


## Data Types Required:

- Google Map Related
    - developers.google.com/maps/documentation/urls/guide
    - Distance From (Conditional based on location settings?)
    - Link to GoogleMaps (or app's map app with coordinates prefilled?)
        - figure out what info is needed to be passed in for this

- Waste Item Data
    - Tags
        - Garbage
        - Blue Bin
        - Scheduled Curb Side Pickup 
        - Drop-Off Center
        - Hazardous Facility

    - How to Discard
        - Text Description

- Location/Facility Page
    - Categorize by Municipality?

    - Facility Set Info: (How to keep it dynamic based on website.. python scraping? how to detect changes)
        - Facility Name
        - Address
        - Hours of Operation
            - Holiday (Hours may be affected notice?)
        - contactInfo
        - General Info
            - list of generic services that apply (think costco website: Gas Station / Pharmacy / Optometrist etc)

- Fixed search options
    - prevents inappropriate search terms coming up to top searches


## Local Storage (SQLite..?)
- Recent Search
- Set Favourite Facilities? / My Location (Default Location)
- Settings (Light/Dark/DeviceDefault)