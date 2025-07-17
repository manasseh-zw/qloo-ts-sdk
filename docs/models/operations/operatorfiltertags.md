# OperatorFilterTags

Specifies how multiple `filter.tags` values are combined in the query. Use "union" (equivalent to a logical "or") to return results that match at least one of the specified tags, or "intersection" (equivalent to a logical "and") to return only results that match all specified tags. The default is "union".

## Example Usage

```typescript
import { OperatorFilterTags } from "qloo-api/models/operations";

let value: OperatorFilterTags = "union";
```

## Values

```typescript
"union" | "intersection"
```