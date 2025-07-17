# SortBy

This parameter modifies the results sorting algorithm (affinity\|distance). The distance option can only be used when `filter.location`` is supplied.

## Example Usage

```typescript
import { SortBy } from "qloo-api/models/operations";

let value: SortBy = "affinity";
```

## Values

```typescript
"affinity" | "distance"
```