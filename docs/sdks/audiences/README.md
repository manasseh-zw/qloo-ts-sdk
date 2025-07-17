# Audiences
(*audiences*)

## Overview

Endpoints related to audiences.

### Available Operations

* [getAudiences](#getaudiences) - Find Audiences
* [getAudienceTypes](#getaudiencetypes) - Get Audience Types

## getAudiences

The Find Audiences API retrieves a list of audience IDs that can be used for filtering results and refining targeting in recommendations. You can use the returned audience IDs as values for `signal.demographics.audiences` to filter Insights API query results by specific audiences.

### Example Usage

```typescript
import { Qloo } from "qloo-api";

const qloo = new Qloo({
  apiKey: process.env["QLOO_API_KEY"] ?? "",
});

async function run() {
  const result = await qloo.audiences.getAudiences({
    filterParentsTypes: [
      "urn:audience:communities,",
    ],
    filterResultsAudiences: [
      "?",
      "?",
    ],
    filterAudienceTypes: [
      "?",
      "?",
    ],
    filterPopularityMin: 0.5,
    filterPopularityMax: 0.98,
    page: 1,
    take: 10,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { QlooCore } from "qloo-api/core.js";
import { audiencesGetAudiences } from "qloo-api/funcs/audiencesGetAudiences.js";

// Use `QlooCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const qloo = new QlooCore({
  apiKey: process.env["QLOO_API_KEY"] ?? "",
});

async function run() {
  const res = await audiencesGetAudiences(qloo, {
    filterParentsTypes: [
      "urn:audience:communities,",
    ],
    filterResultsAudiences: [
      "?",
      "?",
    ],
    filterAudienceTypes: [
      "?",
      "?",
    ],
    filterPopularityMin: 0.5,
    filterPopularityMax: 0.98,
    page: 1,
    take: 10,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("audiencesGetAudiences failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetAudiencesRequest](../../models/operations/getaudiencesrequest.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetAudiencesResponse](../../models/operations/getaudiencesresponse.md)\>**

### Errors

| Error Type              | Status Code             | Content Type            |
| ----------------------- | ----------------------- | ----------------------- |
| errors.QlooDefaultError | 4XX, 5XX                | \*/\*                   |

## getAudienceTypes

The Get Audience Types API returns all available audience type IDs, representing different audience categories. You can use this API to explore audience classifications and refine searches in the Find Audiences API. Including `filter.parents.types` allows you to narrow results by relevant entity types.

### Example Usage

```typescript
import { Qloo } from "qloo-api";

const qloo = new Qloo({
  apiKey: process.env["QLOO_API_KEY"] ?? "",
});

async function run() {
  const result = await qloo.audiences.getAudienceTypes({
    filterParentsTypes: [
      "urn:audience:communities,",
    ],
    page: 1,
    take: 10,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { QlooCore } from "qloo-api/core.js";
import { audiencesGetAudienceTypes } from "qloo-api/funcs/audiencesGetAudienceTypes.js";

// Use `QlooCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const qloo = new QlooCore({
  apiKey: process.env["QLOO_API_KEY"] ?? "",
});

async function run() {
  const res = await audiencesGetAudienceTypes(qloo, {
    filterParentsTypes: [
      "urn:audience:communities,",
    ],
    page: 1,
    take: 10,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("audiencesGetAudienceTypes failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetAudienceTypesRequest](../../models/operations/getaudiencetypesrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetAudienceTypesResponse](../../models/operations/getaudiencetypesresponse.md)\>**

### Errors

| Error Type              | Status Code             | Content Type            |
| ----------------------- | ----------------------- | ----------------------- |
| errors.QlooDefaultError | 4XX, 5XX                | \*/\*                   |