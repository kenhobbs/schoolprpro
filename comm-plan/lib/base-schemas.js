/*

base-schemas.js created by Ken Hobbs on 20151102

Created using aldeed:simple-schema package for Meteor.

https://atmospherejs.com/aldeed/simple-schema

v0.1
-----------------------------------
1.  Created base schemas for Contact, Location, Event, Message and Foo. The Foo schema has a property representing all possible types and validations.
2.  Created WLASAT schemas by extractions from base schemas using Meteor package aldeed:simple-schema (https://atmospherejs.com/aldeed/simple-schema). Extraction schemas are subsets (vs. extensions) of the base schema.  Therefor, new properties created in an extension schema should be added to the base schema(s) if warranted.

    Extraction schemas for WLASAT include:

    User (Person) - WLASAT user account
    Inhabitant (Person) - a person who consumes water
    GISLayer (Foo) - GIS layer data such as soil type, liquefaction, rainfall, etc
    Fixture (Foo) - shower heads, toilets, sink faucets, spigots, etc
    Appliance (Foo) - dishwasher, clothes washer, refrigerator ice maker, etc
    Structure (Foo) - buildings, covered spaces, pools, ponds, jacuzzis (ie above and in ground structures)
    Surface (Foo) - surfaces that are not in SiteStructures such as yards, driveways, landscaping, walks, etc
    Plant (Foo) - exterior yards, gardens, landscaped areas and their grass, plants, trees, etc
    Irrigation (Foo) - irrigation systems such as sprinklers or drip systems
    Site (Place)
        SiteInhabitants ([Inhabitant]) - a person using water at the Site
        SiteInhabitantConsumptions (Foo) - eg per day showers/bath, toilet flushes, dish washing, clothes washing, etc
        SiteInhabitantConsumptionActions (Foo)
        SiteGISLayers ([GISLayer]) - GIS layer data such as soil type, liquefaction, rainfall, etc
        SiteGISLayerActions (Foo) - (collection may not be necessary)
        SiteFixtures ([Fixture]) - shower heads, toilets, sink faucets, spigots, etc
        SiteFixtureActions (Foo) - changes to SiteFixures such as low-flow shower heads/toilets and greywater systems
        SiteAppliances ([Appliance]) - dishwasher, clothes washer, refrigerator ice maker, etc
        SiteApplianceActions (Foo) - changes to SiteApplicances such as energy star appliances
        SiteStructures ([Structure]) - buildings, covered spaces, pools, ponds, jacuzzis (ie above and in ground structures)
        SiteStructureActions (Foo) - modifications to SiteStructures such as rain barrels or pool removal
        SiteSurfaces ([Surface]) - surfaces that are not in SiteStructures such as yards, driveways, landscaping, walks, etc
        SiteSurfaceActions (Foo) - runoff abatement such as grading and percolation
        SitePlants ([Plant]) - exterior yards, gardens, landscaped areas and their grass, plants, trees, etc
        SitePlantActions (Foo) - changes to SitePlants such as lawn replacement or drought-resistant plants
        SiteIrrigations ([Irrigation]) - irrigation systems such as sprinklers or drip systems
        SiteIrrigationActions (Foo) - changes to SiteIrrigations such as drip system installation
 */
PersonSchema = new SimpleSchema({
    FirstName: {
        type: String,
        label: 'First Name',
        optional: false,
        max: 50
    },
    LastName: {
        type: String,
        label: 'Last Name',
        optional: false,
        max: 50
    },
    Email: {
        type: String,
        label: 'Email',
        optional: false,
        max: 100
    },
    Phone: {
        type: String,
        label: 'Phone',
        optional: true,
        max: 15
    },
    Phone1: {
        type: String,
        label: 'Phone1',
        optional: true,
        max: 15
    },
    Phone2: {
        type: String,
        label: 'Phone 2',
        optional: true,
        max: 15
    },
    Status: {
        type: String,
        label: 'Status',
        optional: false,
        max: 10
    },
    DOB: {
        type: Date,
        label: 'DOB',
        optional: true,
        max: 100
    },
    Gender: {
        type: String,
        label: 'Gender',
        optional: false,
        allowedValues: ['Male', 'Female', 'Other']
    },
    Title: {
        type: String,
        label: 'Title',
        optional: true,
        max: 50
    },
    Salutation: {
        type: String,
        label: 'Salutation',
        optional: true,
        max: 10
    }
});
// Todo: make AddressSchema international friendly (state, zip codes, etc.)
AddressSchema = new SimpleSchema({
    Name: {
        type: String,
        label: 'Name',
        optional: false,
        max: 100
    },
    Address1: {
        type: String,
        label: 'Address 1',
        optional: false,
        max: 100
    },
    Address2: {
        type: String,
        label: 'Address 2',
        optional: false,
        max: 100
    },
    City: {
        type: String,
        label: 'City',
        optional: false,
        max: 50
    },
    State: {
        type: String,
        label: 'State',
        regEx:/^A[LKSZRAEP]|C[AOT]|D[EC]|F[LM]|G[AU]|HI|I[ADLN]|K[SY]|LA|M[ADEHINOPST]|N[CDEHJMVY]|O[HKR]|P[ARW]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY]$/,
        optional: false,
        max: 2
    },
    ZipCode: {
        type: String,
        label: 'ZipCode',
        regEx: /^[0-9]{5}$/,
        optional: false,
        max: 10
    },
    Country: {
        type: String,
        label: 'Country',
        optional: false,
        max: 10
    },
    Latitude: {
        type: Number,
        label: 'Latitude',
        decimal: true,
        optional: true
    },
    Longitude: {
        type: Number,
        label: 'Longitude',
        decimal: true,
        optional: true
    }
});
// Todo: Allow event attachments, color, notifications, show me as (available, busy, etc), visibility, guests, guest permissions, remote, account associations
EventSchema = new SimpleSchema({
    Event: {
        type: String,
        label: 'Event',
        optional: false,
        max: 200
    },
    StateDate: {
        type: Date,
        label: 'Start Date',
        optional: false
    },
    StartTime: {
        type: Date,
        label: 'Start Time',
        optional: true
    },
    EndDate: {
        type: Date,
        label: 'End Date',
        optional: false
    },
    EndTime: {
        type: Date,
        label: 'End Time',
        optional: true
    },
    TimeZone: {
        type: String,
        label: 'Time Zone',
        optional: false
    },
    AllDay: {
        type: Boolean,
        label: 'All Day',
        optional: true
    },
    Repeats: { // possible values: daily, weekly, monthly, annually, custom
        type: String,
        label: 'Repeats',
        optional: true
    },
    RepeatIncrement: {
        type: Number,
        label: 'Repeat Every',
        optional: true
    },
    RepeatOn: {
        type: String,
        label: 'Repeat On',
        optional: true
    },
    RepeatStartDate: {
        type: Date,
        label: 'Start On',
        optional: true
    },
    RepeatEndDate: { // if null, never ends
        type: Date,
        label: 'End On',
        optional: true
    },
    RepeatOccurrences: {
        type: Number,
        label: 'Occurrences',
        optional: true
    },
    Location: {
        type: String,
        label: 'Location',
        optional: true
    },
    Description: {
        type: String,
        label: 'Description',
        optional: true
    },
    Confirmed: {
        type: Boolean,
        label: 'Confirmed',
        optional: false
    }
});
FooSchema = new SimpleSchema({
    FooString: {
        type: String,
        label: function(){
            return Session.get('lang') === 'en' ? 'Foo String' : 'Fu Ropa'
        },
        optional: true,
        min: 2,
        max: 50,
        defaultValue: 'My string'
    },
    FooInteger: {
        type: Number,
        label: 'Foo Integer',
        optional: true,
        min: 0,
        max: 100,
        decimal: false //false requires an integer
    },
    FooDecimal: {
        type: Number,
        label: 'Foo Decimal',
        optional: true,
        min: 0.5,
        max: 1.0,
        decimal: true //true allows non-integers
    },
    FooNumber: { // can be an integer or decimal
        type: Number,
        label: 'Foo Number',
        optional: true
    },
    FooBoolean: {
        type: Boolean,
        label: 'Foo Boolean',
        optional: true,
        defaultValue: true
    },
    FooObject: {
        type: Object,
        label: 'Foo Object',
        optional: true
    },
    FooDate: {
        type: Date,
        label: 'Foo Date',
        optional: true
    },
    FooStringArray: {
        type: [String],
        label: 'Foo Array of Strings',
        optional: true,
        minCount: 1, //require at least one string in array
        maxCount: 10 //allow up to 10 strings in array
    },
    FooNumberArray: {
        type: [Number],
        label: 'Foo Array of Numbers',
        optional: true
    },
    FooBooleanArray: {
        type: [Boolean],
        label: 'Foo Array of Booleans',
        optional: true
    },
    FooObjectArray: {
        type: [Object],
        label: 'Foo Array of Objects',
        optional: true
    },
    FooDateArray: {
        type: [Date],
        label: 'Foo Array of Dates',
        optional: true
    },
    FooPickList: {
        type: String,
        label: 'Pick a value',
        optional: true,
        allowedValues: ['Active', 'Inactive', 'Archived']
    },
    FooStateAbbreviation: {
        type: String,
        label: 'Enter State Abbreviation',
        regEx: /^A[LKSZRAEP]|C[AOT]|D[EC]|F[LM]|G[AU]|HI|I[ADLN]|K[SY]|LA|M[ADEHINOPST]|N[CDEHJMVY]|O[HKR]|P[ARW]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY]$/,
        min: 2,
        max: 2,
        optional: false,
        defaultValue: 'CA'
    },
    FooBIRegEx: {
        type: String,
        label: 'Builtin RegEx Validation',
        regEx: SimpleSchema.RegEx.Email
        //regEx: SimpleSchema.RegEx.Domain, // syntric.com, syntric.net, etc
        //regEx: SimpleSchema.RegEx.weakDomain, // www.syntric.com, foo.bar.net
        //regEx: SimpleSchema.RegEx.IP,
        //regEx: SimpleSchema.RegEx.IPv4,
        //regEx: SimpleSchema.RegEx.IPv6,
        //regEx: SimpleSchema.RegEx.Url, // http, https or ftp urls
        //regEx: SimpleSchema.RegEx.Id, // works for IDs generated by Random.id()
        //regEx: SimpleSchema.RegEx.ZipCode // works for 5- and 9-digit zip codes
    },
    FooStringNoTrim: { // this overrides mySchema.clean() which trims all Strings
        type: String,
        label: 'Preserved leading/trailing spaces',
        trim: false
    },
    FooDefaultValue: {
        type: String,
        label: 'Foo',
        defaultValue: 'Bar'
    }
});