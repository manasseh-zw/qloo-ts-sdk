# OperatorFilterReleaseCountry

Specifies how multiple `filter.release_country`` values are combined in the query. Use "union" (equivalent to a logical "or") to return results that match at least one of the specified countries, or "intersection" (equivalent to a logical "and") to return only results that match all specified countries. The default is "union".

## Example Usage

```typescript
import { OperatorFilterReleaseCountry } from "qloo-api/models/operations";

let value: OperatorFilterReleaseCountry = "union";
```

## Values

```typescript
"intersection" | "union"
```