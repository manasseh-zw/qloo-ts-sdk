# OperatorFilterExternalExists

Specifies how multiple `filter.external.exists` values are combined in the query. Use "union" (equivalent to a logical "or") to return results that match at least one of the specified external keys (e.g., resy, michelin, or tablet), or "intersection" (equivalent to a logical "and") to return only results that match all specified external keys. The default is "union".

## Example Usage

```typescript
import { OperatorFilterExternalExists } from "qloo-api/models/operations";

let value: OperatorFilterExternalExists = "union";
```

## Values

```typescript
"union" | "intersection"
```