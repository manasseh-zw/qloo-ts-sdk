# FilterHours

Filter by the day of the week the Point of Interest must be open (Monday, Tuesday, etc.).

## Example Usage

```typescript
import { FilterHours } from "qloo-api/models/operations";

let value: FilterHours = "monday";
```

## Values

```typescript
"monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday"
```