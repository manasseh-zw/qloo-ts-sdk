# Tags
(*tags*)

## Overview

Endpoints related to tags.

### Available Operations

* [getTags](#gettags) - Tags Search
* [getTagTypes](#gettagtypes) - Tag Types

## getTags

Search for tags that are supported by the `filter.tags`, `exclude.tags`, and `signal.interests.tags parameters`.

### Example Usage

```typescript
import { Qloo } from "qloo-api";

const qloo = new Qloo({
  apiKey: process.env["QLOO_API_KEY"] ?? "",
});

async function run() {
  const result = await qloo.tags.getTags({
    featureTypoTolerance: true,
    filterResultsTags: [
      "?",
      "?",
    ],
    filterParentsTypes: [
      "urn:audience:communities,",
    ],
    filterPopularityMin: 0.5,
    filterPopularityMax: 0.98,
    filterQuery: "vegan",
    filterTagTypes: [
      "urn:audience:brand:genre",
      "?",
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
import { tagsGetTags } from "qloo-api/funcs/tagsGetTags.js";

// Use `QlooCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const qloo = new QlooCore({
  apiKey: process.env["QLOO_API_KEY"] ?? "",
});

async function run() {
  const res = await tagsGetTags(qloo, {
    featureTypoTolerance: true,
    filterResultsTags: [
      "?",
      "?",
    ],
    filterParentsTypes: [
      "urn:audience:communities,",
    ],
    filterPopularityMin: 0.5,
    filterPopularityMax: 0.98,
    filterQuery: "vegan",
    filterTagTypes: [
      "urn:audience:brand:genre",
      "?",
    ],
    page: 1,
    take: 10,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("tagsGetTags failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetTagsRequest](../../models/operations/gettagsrequest.md)                                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetTagsResponse](../../models/operations/gettagsresponse.md)\>**

### Errors

| Error Type              | Status Code             | Content Type            |
| ----------------------- | ----------------------- | ----------------------- |
| errors.QlooDefaultError | 4XX, 5XX                | \*/\*                   |

## getTagTypes

Returns a list of tag types supported by each entity type. You can leverage this data with the Tags API to filter results by specific tag types.

### Example Usage

```typescript
import { Qloo } from "qloo-api";

const qloo = new Qloo({
  apiKey: process.env["QLOO_API_KEY"] ?? "",
});

async function run() {
  const result = await qloo.tags.getTagTypes({
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
import { tagsGetTagTypes } from "qloo-api/funcs/tagsGetTagTypes.js";

// Use `QlooCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const qloo = new QlooCore({
  apiKey: process.env["QLOO_API_KEY"] ?? "",
});

async function run() {
  const res = await tagsGetTagTypes(qloo, {
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
    console.log("tagsGetTagTypes failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetTagTypesRequest](../../models/operations/gettagtypesrequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetTagTypesResponse](../../models/operations/gettagtypesresponse.md)\>**

### Errors

| Error Type              | Status Code             | Content Type            |
| ----------------------- | ----------------------- | ----------------------- |
| errors.QlooDefaultError | 4XX, 5XX                | \*/\*                   |