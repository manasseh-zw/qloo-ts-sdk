# Qloo TypeScript SDK

Developer-friendly & type-safe TypeScript SDK for the Qloo Insights API - Generate taste-based insights and recommendations.

<div align="left">
    <a href="https://www.npmjs.com/package/qloo-typescript-sdk">
        <img src="https://img.shields.io/npm/v/qloo-typescript-sdk.svg" alt="npm version" />
    </a>
    <a href="https://opensource.org/licenses/MIT">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License" />
    </a>
    <a href="https://github.com/yourusername/qloo-typescript-sdk/actions">
        <img src="https://github.com/yourusername/qloo-typescript-sdk/workflows/CI/badge.svg" alt="CI Status" />
    </a>
</div>

<br />

## About

This SDK provides a comprehensive TypeScript interface for the Qloo Insights API, enabling developers to generate taste-based insights and recommendations with full type safety and modern JavaScript/TypeScript support.

### Key Features

- 🔒 **Type-safe** - Full TypeScript support with comprehensive type definitions
- 🎯 **Developer-friendly** - Intuitive API design with excellent IDE support
- 📦 **Dual module support** - Works with both ESM and CommonJS
- ✅ **Validation** - Built-in request/response validation using Zod
- 🚀 **Modern** - Supports Node.js 18+ and modern JavaScript runtimes
- 📚 **Well-documented** - Comprehensive documentation and examples

## Table of Contents

- [Installation](#installation)
- [Quick Start](#quick-start)
- [Authentication](#authentication)
- [Available Operations](#available-operations)
- [Examples](#examples)
- [Error Handling](#error-handling)
- [Contributing](#contributing)
- [License](#license)

## Installation

Install the SDK using your preferred package manager:

```bash
# npm
npm install qloo-typescript-sdk

# yarn
yarn add qloo-typescript-sdk

# pnpm
pnpm add qloo-typescript-sdk
```

## Quick Start

```typescript
import { Qloo } from 'qloo-typescript-sdk';

// Initialize the SDK
const qloo = new Qloo({
  apiKey: 'your-api-key-here'
});

// Get insights for restaurants in New York
const insights = await qloo.insights.getInsights({
  filterType: 'urn:entity:place',
  filterLocationQuery: 'New York City',
  take: 10
});

console.log(insights.results?.entities);
```

## Authentication

The Qloo SDK uses API key authentication. You can obtain your API key from the [Qloo Dashboard](https://dashboard.qloo.com).

```typescript
import { Qloo } from 'qloo-typescript-sdk';

const qloo = new Qloo({
  apiKey: process.env.QLOO_API_KEY // Store your API key in environment variables
});
```

## Available Operations

### Insights API
- `getInsights()` - Generate taste-based insights and recommendations

### Audiences API  
- `getAudiences()` - Retrieve audience data
- `getAudienceTypes()` - Get available audience types

### Tags API
- `getTags()` - Search for tags
- `getTagTypes()` - Get available tag types

## Examples

### Restaurant Recommendations

```typescript
import { Qloo } from 'qloo-typescript-sdk';

const qloo = new Qloo({ apiKey: 'your-api-key' });

// Get Italian restaurants in Manhattan
const restaurants = await qloo.insights.getInsights({
  filterType: 'urn:entity:place',
  filterLocationQuery: 'Manhattan',
  filterTags: 'urn:tag:genre:restaurant:Italian',
  take: 5
});
```

### Movie Recommendations

```typescript
// Get movie recommendations based on interests
const movies = await qloo.insights.getInsights({
  filterType: 'urn:entity:movie',
  signalInterestsEntities: ['entity-id-1', 'entity-id-2'],
  filterReleaseYearMin: 2020,
  take: 10
});
```

### Audience-Based Insights

```typescript
// Get insights for a specific audience
const audienceInsights = await qloo.insights.getInsights({
  filterType: 'urn:entity:place',
  signalDemographicsAudiences: ['urn:audience:millennials'],
  signalLocationQuery: 'Los Angeles',
  take: 15
});
```

## Error Handling

The SDK provides comprehensive error handling:

```typescript
import { QlooError } from 'qloo-typescript-sdk';

try {
  const insights = await qloo.insights.getInsights({
    filterType: 'urn:entity:place',
    // ... other parameters
  });
} catch (error) {
  if (error instanceof QlooError) {
    console.error('Qloo API Error:', error.message);
    console.error('Status Code:', error.statusCode);
  } else {
    console.error('Unexpected error:', error);
  }
}
```

## Development

### Prerequisites

- Node.js 18.0.0 or higher
- npm, yarn, or pnpm

### Building the SDK

```bash
# Install dependencies
npm install

# Build the project
npm run build

# Run linting
npm run lint

# Run type checking
npm run typecheck
```

### Running Examples

Check the `examples/` directory for complete usage examples:

```bash
cd examples
npm install
npm run example
```

## Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Add tests for your changes
5. Ensure all tests pass (`npm test`)
6. Commit your changes (`git commit -m 'Add some amazing feature'`)
7. Push to the branch (`git push origin feature/amazing-feature`)
8. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

- 📧 For questions and support, please contact: [support@qloo.com](mailto:support@qloo.com)
- 🐛 For bug reports and feature requests, please [open an issue](https://github.com/yourusername/qloo-typescript-sdk/issues)
- 📖 For more information about the Qloo API, visit the [official documentation](https://docs.qloo.com)

---

Made with ❤️ by the Qloo community
