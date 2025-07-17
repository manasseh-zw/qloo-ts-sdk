# FilterContentRating

Filter by a comma-separated list of content ratings based on the MPAA film rating system, which determines suitability for various audiences.

## Example Usage

```typescript
import { FilterContentRating } from "qloo-api/models/operations";

let value: FilterContentRating = "PG";
```

## Values

```typescript
"G" | "PG" | "PG-13" | "R" | "NC-17"
```