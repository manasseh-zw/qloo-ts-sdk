# OperatorExcludeTags

Specifies how multiple `filter.exclude.tags` values are combined in the query. Use "union" (equivalent to a logical "or") to exclude results that contain at least one of the specified tags, or "intersection" (equivalent to a logical "and") to exclude only results that contain all specified tags. The default is "union".

## Example Usage

```typescript
import { OperatorExcludeTags } from "qloo-api/models/operations";

let value: OperatorExcludeTags = "union";
```

## Values

```typescript
"union" | "intersection"
```