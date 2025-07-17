# FilterLocationQuery

A query used to search for one or more named `urn:entity:locality` Qloo IDs for filtering requests, equivalent to passing the same Locality Qloo ID(s) into `filter.location`.
  - For **GET requests**: Provide a single locality query as a string.
  - For **POST requests**:
    - You can still send a single locality as a string.
    - Or you can send an array of locality names to query multiple localities at once. When multiple localities are provided, their geographic shapes are merged, and the system returns results with the highest affinities across the combined area.

Locality queries are fuzzy-matched and case-insensitive. Examples include `New York City`, `Garden City`, `New York`, `Los Angeles`, `Lower East Side`, and AKAs like `The Big Apple`. When a single locality is supplied, the response JSON includes `query.locality.signal` with the matched Qloo entity. If multiple are supplied, this field is omitted. By default, the API includes a tuning that also captures nearby entities just outside the official boundaries of the locality. To turn this off and limit results strictly to within the locality, set `filter.location.radius=0`. If no localities are found, the API returns a 400 error.



## Supported Types

### `string`

```typescript
const value: string = "<value>";
```

### `string[]`

```typescript
const value: string[] = [
  "<value 1>",
  "<value 2>",
];
```

