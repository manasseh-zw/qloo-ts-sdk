# SignalInterestsTagsUnion

Allows you to supply a list of tags to influence affinity scores. You can also include a `weight` property that will indicate the strength of influence for each tag in your list.
  - For GET requests: Provide a comma-separated list of tag IDs. 
  - For POST requests, you can either:
    - Send the same string of comma-separated values.
    - Send an array of objects with "tag" and "weight" properties, such as:
      [
        { "tag": "urn:tag:genre:media:horror", "weight": 7 },
        { "tag": "urn:tag:genre:media:thriller", "weight": 20 }
      ]
Weights must be greater than 0 and are relative. So, a weight of 20 means that tag will more heavily influence affinity scores than a weight of 7.



## Supported Types

### `string[]`

```typescript
const value: string[] = [
  "<value 1>",
  "<value 2>",
];
```

### `operations.SignalInterestsTags[]`

```typescript
const value: operations.SignalInterestsTags[] = [
  {},
];
```

