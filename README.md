# qloo-api

Developer-friendly & type-safe Typescript SDK specifically catered to leverage *qloo-api* API.

<div align="left">
    <a href="https://www.speakeasy.com/?utm_source=qloo-api&utm_campaign=typescript"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://opensource.org/licenses/MIT">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" style="width: 100px; height: 28px;" />
    </a>
</div>


<br /><br />
> [!IMPORTANT]
> This SDK is not yet ready for production use. To complete setup please follow the steps outlined in your [workspace](https://app.speakeasy.com/org/nextdotnev/dev). Delete this section before > publishing to a package manager.

<!-- Start Summary [summary] -->
## Summary

Insights API: Generate insights based on the query parameters supplied.
<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents
<!-- $toc-max-depth=2 -->
* [qloo-api](#qloo-api)
  * [SDK Installation](#sdk-installation)
  * [Requirements](#requirements)
  * [SDK Example Usage](#sdk-example-usage)
  * [Authentication](#authentication)
  * [Available Resources and Operations](#available-resources-and-operations)
  * [Standalone functions](#standalone-functions)
  * [Retries](#retries)
  * [Error Handling](#error-handling)
  * [Server Selection](#server-selection)
  * [Custom HTTP Client](#custom-http-client)
  * [Debugging](#debugging)
* [Development](#development)
  * [Maturity](#maturity)
  * [Contributions](#contributions)

<!-- End Table of Contents [toc] -->

<!-- Start SDK Installation [installation] -->
## SDK Installation

> [!TIP]
> To finish publishing your SDK to npm and others you must [run your first generation action](https://www.speakeasy.com/docs/github-setup#step-by-step-guide).


The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add <UNSET>
```

### PNPM

```bash
pnpm add <UNSET>
```

### Bun

```bash
bun add <UNSET>
```

### Yarn

```bash
yarn add <UNSET> zod

# Note that Yarn does not install peer dependencies automatically. You will need
# to install zod as shown above.
```

> [!NOTE]
> This package is published with CommonJS and ES Modules (ESM) support.
<!-- End SDK Installation [installation] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { Qloo } from "qloo-api";
import { RFCDate } from "qloo-api/types";

const qloo = new Qloo({
  apiKey: process.env["QLOO_API_KEY"] ?? "",
});

async function run() {
  const result = await qloo.insights.getInsights({
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
    filterResultsEntities:
      "636E1B95-6232-43E1-BDFE-37CD209C2CE3,7D2B1DFF-9D5D-44DE-970E-46B80C76CFA6",
    filterExcludeEntities:
      "39458DC0-F91D-4591-80A8-E254E66F84A2,B315A4B4-6756-4CF3-8297-75FD94CC8CF2",
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

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name     | Type   | Scheme  | Environment Variable |
| -------- | ------ | ------- | -------------------- |
| `apiKey` | apiKey | API key | `QLOO_API_KEY`       |

To authenticate with the API the `apiKey` parameter must be set when initializing the SDK client instance. For example:
```typescript
import { Qloo } from "qloo-api";
import { RFCDate } from "qloo-api/types";

const qloo = new Qloo({
  apiKey: process.env["QLOO_API_KEY"] ?? "",
});

async function run() {
  const result = await qloo.insights.getInsights({
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
    filterResultsEntities:
      "636E1B95-6232-43E1-BDFE-37CD209C2CE3,7D2B1DFF-9D5D-44DE-970E-46B80C76CFA6",
    filterExcludeEntities:
      "39458DC0-F91D-4591-80A8-E254E66F84A2,B315A4B4-6756-4CF3-8297-75FD94CC8CF2",
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

  console.log(result);
}

run();

```
<!-- End Authentication [security] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>

### [audiences](docs/sdks/audiences/README.md)

* [getAudiences](docs/sdks/audiences/README.md#getaudiences) - Find Audiences
* [getAudienceTypes](docs/sdks/audiences/README.md#getaudiencetypes) - Get Audience Types

### [insights](docs/sdks/insights/README.md)

* [getInsights](docs/sdks/insights/README.md#getinsights) - Insights API Deep Dive


### [tags](docs/sdks/tags/README.md)

* [getTags](docs/sdks/tags/README.md#gettags) - Tags Search
* [getTagTypes](docs/sdks/tags/README.md#gettagtypes) - Tag Types

</details>
<!-- End Available Resources and Operations [operations] -->

<!-- Start Standalone functions [standalone-funcs] -->
## Standalone functions

All the methods listed above are available as standalone functions. These
functions are ideal for use in applications running in the browser, serverless
runtimes or other environments where application bundle size is a primary
concern. When using a bundler to build your application, all unused
functionality will be either excluded from the final bundle or tree-shaken away.

To read more about standalone functions, check [FUNCTIONS.md](./FUNCTIONS.md).

<details>

<summary>Available standalone functions</summary>

- [`audiencesGetAudiences`](docs/sdks/audiences/README.md#getaudiences) - Find Audiences
- [`audiencesGetAudienceTypes`](docs/sdks/audiences/README.md#getaudiencetypes) - Get Audience Types
- [`insightsGetInsights`](docs/sdks/insights/README.md#getinsights) - Insights API Deep Dive
- [`tagsGetTags`](docs/sdks/tags/README.md#gettags) - Tags Search
- [`tagsGetTagTypes`](docs/sdks/tags/README.md#gettagtypes) - Tag Types

</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { Qloo } from "qloo-api";
import { RFCDate } from "qloo-api/types";

const qloo = new Qloo({
  apiKey: process.env["QLOO_API_KEY"] ?? "",
});

async function run() {
  const result = await qloo.insights.getInsights({
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
    filterResultsEntities:
      "636E1B95-6232-43E1-BDFE-37CD209C2CE3,7D2B1DFF-9D5D-44DE-970E-46B80C76CFA6",
    filterExcludeEntities:
      "39458DC0-F91D-4591-80A8-E254E66F84A2,B315A4B4-6756-4CF3-8297-75FD94CC8CF2",
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
  }, {
    retries: {
      strategy: "backoff",
      backoff: {
        initialInterval: 1,
        maxInterval: 50,
        exponent: 1.1,
        maxElapsedTime: 100,
      },
      retryConnectionErrors: false,
    },
  });

  console.log(result);
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { Qloo } from "qloo-api";
import { RFCDate } from "qloo-api/types";

const qloo = new Qloo({
  retryConfig: {
    strategy: "backoff",
    backoff: {
      initialInterval: 1,
      maxInterval: 50,
      exponent: 1.1,
      maxElapsedTime: 100,
    },
    retryConnectionErrors: false,
  },
  apiKey: process.env["QLOO_API_KEY"] ?? "",
});

async function run() {
  const result = await qloo.insights.getInsights({
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
    filterResultsEntities:
      "636E1B95-6232-43E1-BDFE-37CD209C2CE3,7D2B1DFF-9D5D-44DE-970E-46B80C76CFA6",
    filterExcludeEntities:
      "39458DC0-F91D-4591-80A8-E254E66F84A2,B315A4B4-6756-4CF3-8297-75FD94CC8CF2",
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

  console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

[`QlooError`](./src/models/errors/qlooerror.ts) is the base class for all HTTP error responses. It has the following properties:

| Property            | Type       | Description                                            |
| ------------------- | ---------- | ------------------------------------------------------ |
| `error.message`     | `string`   | Error message                                          |
| `error.statusCode`  | `number`   | HTTP response status code eg `404`                     |
| `error.headers`     | `Headers`  | HTTP response headers                                  |
| `error.body`        | `string`   | HTTP body. Can be empty string if no body is returned. |
| `error.rawResponse` | `Response` | Raw HTTP response                                      |

### Example
```typescript
import { Qloo } from "qloo-api";
import * as errors from "qloo-api/models/errors";
import { RFCDate } from "qloo-api/types";

const qloo = new Qloo({
  apiKey: process.env["QLOO_API_KEY"] ?? "",
});

async function run() {
  try {
    const result = await qloo.insights.getInsights({
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
      filterExcludeTags:
        "urn:tag:genre:media:mystery,urn:tag:genre:media:drama",
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
      filterResultsEntities:
        "636E1B95-6232-43E1-BDFE-37CD209C2CE3,7D2B1DFF-9D5D-44DE-970E-46B80C76CFA6",
      filterExcludeEntities:
        "39458DC0-F91D-4591-80A8-E254E66F84A2,B315A4B4-6756-4CF3-8297-75FD94CC8CF2",
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

    console.log(result);
  } catch (error) {
    if (error instanceof errors.QlooError) {
      console.log(error.message);
      console.log(error.statusCode);
      console.log(error.body);
      console.log(error.headers);
    }
  }
}

run();

```

### Error Classes
**Primary error:**
* [`QlooError`](./src/models/errors/qlooerror.ts): The base class for HTTP error responses.

<details><summary>Less common errors (6)</summary>

<br />

**Network errors:**
* [`ConnectionError`](./src/models/errors/httpclienterrors.ts): HTTP client was unable to make a request to a server.
* [`RequestTimeoutError`](./src/models/errors/httpclienterrors.ts): HTTP request timed out due to an AbortSignal signal.
* [`RequestAbortedError`](./src/models/errors/httpclienterrors.ts): HTTP request was aborted by the client.
* [`InvalidRequestError`](./src/models/errors/httpclienterrors.ts): Any input used to create a request is invalid.
* [`UnexpectedClientError`](./src/models/errors/httpclienterrors.ts): Unrecognised or unexpected error.


**Inherit from [`QlooError`](./src/models/errors/qlooerror.ts)**:
* [`ResponseValidationError`](./src/models/errors/responsevalidationerror.ts): Type mismatch between the data returned from the server and the structure expected by the SDK. See `error.rawValue` for the raw value and `error.pretty()` for a nicely formatted multi-line string.

</details>
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Override Server URL Per-Client

The default server can be overridden globally by passing a URL to the `serverURL: string` optional parameter when initializing the SDK client instance. For example:
```typescript
import { Qloo } from "qloo-api";
import { RFCDate } from "qloo-api/types";

const qloo = new Qloo({
  serverURL: "https://hackathon.api.qloo.com/v2",
  apiKey: process.env["QLOO_API_KEY"] ?? "",
});

async function run() {
  const result = await qloo.insights.getInsights({
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
    filterResultsEntities:
      "636E1B95-6232-43E1-BDFE-37CD209C2CE3,7D2B1DFF-9D5D-44DE-970E-46B80C76CFA6",
    filterExcludeEntities:
      "39458DC0-F91D-4591-80A8-E254E66F84A2,B315A4B4-6756-4CF3-8297-75FD94CC8CF2",
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

  console.log(result);
}

run();

```
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to use the `"beforeRequest"` hook to to add a
custom header and a timeout to requests and how to use the `"requestError"` hook
to log errors:

```typescript
import { Qloo } from "qloo-api";
import { HTTPClient } from "qloo-api/lib/http";

const httpClient = new HTTPClient({
  // fetcher takes a function that has the same signature as native `fetch`.
  fetcher: (request) => {
    return fetch(request);
  }
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000)
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new Qloo({ httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { Qloo } from "qloo-api";

const sdk = new Qloo({ debugLogger: console });
```

You can also enable a default debug logger by setting an environment variable `QLOO_DEBUG` to true.
<!-- End Debugging [debug] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. Any manual changes added to internal files will be overwritten on the next generation. 
We look forward to hearing your feedback. Feel free to open a PR or an issue with a proof of concept and we'll do our best to include it in a future release. 

### SDK Created by [Speakeasy](https://www.speakeasy.com/?utm_source=qloo-api&utm_campaign=typescript)
