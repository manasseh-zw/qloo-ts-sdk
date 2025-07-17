# FilterExcludeLocationQuery

A query used to exclude results based on one or more named `urn:entity:locality` Qloo IDs, resolved from fuzzy-matched locality names.   This is equivalent to passing the resolved Locality Qloo ID(s) into `filter.exclude.location`.
- For **GET requests**: Provide a single locality query as a string. - For **POST requests**:
  - You can still send a single locality as a string.
  - Or send an array of locality names to exclude multiple areas at once. When multiple localities are provided, their geographic shapes are merged, and the system excludes results from across the combined area.

Locality queries are case-insensitive and support common AKAs (e.g., `The Big Apple` for New York).   When a single locality is supplied, the response includes `query.locality.exclude.signal` with the matched Qloo entity.   If multiple are supplied, this field is omitted. If no localities are matched, the API returns a 400 error.



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

