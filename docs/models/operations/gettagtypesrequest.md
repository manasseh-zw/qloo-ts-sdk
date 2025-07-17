# GetTagTypesRequest

## Example Usage

```typescript
import { GetTagTypesRequest } from "qloo-api/models/operations";

let value: GetTagTypesRequest = {
  filterParentsTypes: [
    "urn:audience:communities,",
  ],
  page: 1,
  take: 10,
};
```

## Fields

| Field                                                                                                                         | Type                                                                                                                          | Required                                                                                                                      | Description                                                                                                                   | Example                                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `filterParentsTypes`                                                                                                          | *string*[]                                                                                                                    | :heavy_minus_sign:                                                                                                            | Filter by a comma-separated list of parental entity types (`urn:audience:communities`). Each type must match exactly.         | urn:audience:communities,                                                                                                     |
| `page`                                                                                                                        | *number*                                                                                                                      | :heavy_minus_sign:                                                                                                            | The page number of results to return. This is equivalent to take + offset and is the recommended approach for most use cases. | 1                                                                                                                             |
| `take`                                                                                                                        | *number*                                                                                                                      | :heavy_minus_sign:                                                                                                            | The number of results to return.                                                                                              | 10                                                                                                                            |