# Standalone Functions

> [!NOTE]
> This section is useful if you are using a bundler and targetting browsers and
> runtimes where the size of an application affects performance and load times. 

Every method in this SDK is also available as a standalone function. This
alternative API is suitable when targetting the browser or serverless runtimes
and using a bundler to build your application since all unused functionality
will be tree-shaken away. This includes code for unused methods, Zod schemas,
encoding helpers and response handlers. The result is dramatically smaller
impact on the application's final bundle size which grows very slowly as you use
more and more functionality from this SDK.

Calling methods through the main SDK class remains a valid and generally more
more ergonomic option. Standalone functions represent an optimisation for a
specific category of applications.

## Example

```typescript
import { QlooCore } from "qloo-api/core.js";
import { insightsGetInsights } from "qloo-api/funcs/insightsGetInsights.js";
import { RFCDate } from "qloo-api/types";

// Use `QlooCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const qloo = new QlooCore({
  apiKey: process.env["QLOO_API_KEY"] ?? "",
});

async function run() {
  const res = await insightsGetInsights(qloo, {
    filterType: "urn:entity:book",
    biasTrends: "low",
    diversifyBy: "properties.geocode.city",
    diversifyTake: 5,
    filterAddress: "123 Main St",
    filterContentRating: "PG",
    filterDateOfBirthMax: new RFCDate("2004-01-01"),
    filterDateOfBirthMin: new RFCDate("1996-01-01"),
    filterDateOfDeathMax: new RFCDate("2004-01-01"),
    filterDateOfDeathMin: new RFCDate("1985-01-01"),
    filterExcludeTags: "urn:tag:genre:media:mystery,urn:tag:genre:media:drama",
    operatorExcludeTags: "union",
    filterExists: "properties.image",
    filterExternalExists: "resy,michelin",
    operatorFilterExternalExists: "union",
    filterExternalResyCountMax: 200,
    filterExternalResyCountMin: 20,
    filterExternalResyPartySizeMax: 10,
    filterExternalResyPartySizeMin: 2,
    filterExternalResyRatingMax: 4.5,
    filterExternalResyRatingMin: 3.5,
    filterExternalTripadvisorRatingCountMin: 50,
    filterExternalTripadvisorRatingCountMax: 500,
    filterExternalTripadvisorRatingMax: 4,
    filterExternalTripadvisorRatingMin: 3,
    filterFinaleYearMax: 2021,
    filterFinaleYearMin: 2014,
    filterGender: "female",
    filterGeocodeAdmin1Region: "NY",
    filterGeocodeAdmin2Region: "New York County",
    filterGeocodeCountryCode: "US",
    filterGeocodeName: "New York",
    filterHotelClassMax: 5,
    filterHotelClassMin: 3,
    filterHours: "monday",
    filterLatestKnownYearMax: 2023,
    filterLatestKnownYearMin: 2014,
    filterLocation: "POINT(-73.99823 40.722668)",
    filterExcludeLocation: "POINT(-73.99823 40.722668)",
    filterLocationQuery: "New York City",
    filterExcludeLocationQuery: "Williamsburg",
    filterLocationGeohash: "dr5rsjk4sr2w",
    filterExcludeLocationGeohash: "dr5rs",
    filterLocationRadius: 10000,
    filterParentsTypes: [
      "urn:audience:communities,",
    ],
    filterPopularityMax: 0.98,
    filterPopularityMin: 0.5,
    filterPriceLevelMax: 3,
    filterPriceLevelMin: 1,
    filterPriceRangeFrom: 200,
    filterPriceRangeTo: 200,
    filterPriceMax: 200,
    filterPriceMin: 1,
    filterPropertiesBusinessRatingMax: 3,
    filterPropertiesBusinessRatingMin: 3,
    filterPublicationYearMax: 2021,
    filterPublicationYearMin: 1985,
    filterRatingMax: 4.5,
    filterRatingMin: 3.5,
    filterReferencesBrand: [
      "636E1B95-6232-43E1-BDFE-37CD209C2CE3,7D2B1DFF-9D5D-44DE-970E-46B80C76CFA6",
    ],
    filterReleaseCountry: [
      "United States",
    ],
    operatorFilterReleaseCountry: "union",
    filterReleaseDateMax: new RFCDate("2024-01-01"),
    filterReleaseDateMin: new RFCDate("2021-01-01"),
    filterReleaseYearMax: 2024,
    filterReleaseYearMin: 1996,
    filterResultsEntities: "636E1B95-6232-43E1-BDFE-37CD209C2CE3,7D2B1DFF-9D5D-44DE-970E-46B80C76CFA6",
    filterExcludeEntities: "39458DC0-F91D-4591-80A8-E254E66F84A2,B315A4B4-6756-4CF3-8297-75FD94CC8CF2",
    filterExcludeEntitiesQuery: [
      {
        name: "Balthazar",
        address: "80 Spring St, New York",
      },
    ],
    filterResultsTags: [
      "?",
      "?",
    ],
    filterTags: "urn:tag:genre:restaurant:Italian",
    operatorFilterTags: "union",
    offset: 5,
    outputHeatmapBoundary: "urn:entity:locality",
    page: 1,
    signalDemographicsAge: "36_to_55",
    signalDemographicsAgeWeight: "medium",
    signalDemographicsAudiencesWeight: "medium",
    signalDemographicsAudiences: [
      "‘urn:audience:artist’",
      "‘urn:audience:brand’",
    ],
    signalDemographicsGender: "male",
    signalDemographicsGenderWeight: "medium",
    signalInterestsEntities: [
      "636E1B95-6232-43E1-BDFE-37CD209C2CE3,7D2B1DFF-9D5D-44DE-970E-46B80C76CFA6",
    ],
    signalInterestsEntitiesQuery: [
      {
        name: "Balthazar",
        address: "80 Spring St, New York",
      },
    ],
    signalInterestsEntitiesWeight: "medium",
    signalInterestsTags: [
      "urn:tag:genre:restaurant:Italian",
      "urn:tag:genre:restaurant:Mexican",
    ],
    signalInterestsTagsWeight: "medium",
    signalLocation: "POINT(-73.99823 40.722668)",
    signalLocationRadius: 5000,
    signalLocationQuery: "New York City",
    signalLocationWeight: "medium",
    sortBy: "affinity",
    take: 10,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("insightsGetInsights failed:", res.error);
  }
}

run();
```

## Result types

Standalone functions differ from SDK methods in that they return a
`Result<Value, Error>` type to capture _known errors_ and document them using
the type system. By avoiding throwing errors, application code maintains clear
control flow and error-handling become part of the regular flow of application
code.

> We use the term "known errors" because standalone functions, and JavaScript
> code in general, can still throw unexpected errors such as `TypeError`s,
> `RangeError`s and `DOMException`s. Exhaustively catching all errors may be
> something this SDK addresses in the future. Nevertheless, there is still a lot
> of benefit from capturing most errors and turning them into values.

The second reason for this style of programming is because these functions will
typically be used in front-end applications where exception throwing is
sometimes discouraged or considered unidiomatic. React and similar ecosystems
and libraries tend to promote this style of programming so that components
render useful content under all states (loading, success, error and so on).

The general pattern when calling standalone functions looks like this:

```typescript
import { Core } from "<sdk-package-name>";
import { fetchSomething } from "<sdk-package-name>/funcs/fetchSomething.js";

const client = new Core();

async function run() {
  const result = await fetchSomething(client, { id: "123" });
  if (!result.ok) {
    // You can throw the error or handle it. It's your choice now.
    throw result.error;
  }

  console.log(result.value);
}

run();
```

Notably, `result.error` above will have an explicit type compared to a try-catch
variation where the error in the catch block can only be of type `unknown` (or
`any` depending on your TypeScript settings).