# Abound TypeScript Library

[![fern shield](https://img.shields.io/badge/%F0%9F%8C%BF-Built%20with%20Fern-brightgreen)](https://buildwithfern.com?utm_source=github&utm_medium=github&utm_campaign=readme&utm_source=https%3A%2F%2Fgithub.com%2Fwithabound%2Fabound-node)
[![npm shield](https://img.shields.io/npm/v/@withabound/node-sdk)](https://www.npmjs.com/package/@withabound/node-sdk)

The Abound TypeScript library provides convenient access to the Abound API from TypeScript.

## Documentation

API reference documentation is available [here](https://docs.withabound.com).

## Installation

```sh
npm i -s @withabound/node-sdk
```

## Client Instantiation

The `apiKey` needs be the concatenation of your Abound `appId` and `appSecret` separated by a period. For example: `appId_sampleqNhVcdYQYU.appSecret_sampleMz2Zbj3Hq`.

The SDK points to the `Sandbox` environment by default. To change the environment, specifying the `environment` in the client instantiation using a value from `AboundEnvironment`.

```typescript
import { AboundClient, Abound, AboundEnvironment } from "@withabound/node-sdk";

const client = new AboundClient({
    apiKey: `appId_sampleqNhVcdYQYU.appSecret_sampleMz2Zbj3Hq`,
    environment: AboundEnvironment.Sandbox,
});
```

## Reference

A full reference for this library is available [here](https://github.com/withabound/abound-node/blob/HEAD/./reference.md).

## Usage

Instantiate and use the client with the following:

```typescript
import { AboundClient } from "@withabound/node-sdk";

const client = new AboundClient({ apiKey: "YOUR_API_KEY" });
await client.form1099Nec.create({
    body: {
        filingYear: 2024,
        payer: {
            name: "Hooli",
            tin: "111111111",
            address: "256 Byron Street",
            address2: "Suite 32",
            city: "Palo Alto",
            state: "CA",
            postalCode: "94306",
            country: "US",
            phoneNumber: "+16501014096",
        },
        payee: {
            name: "Ada Lovelace",
            tin: "000000000",
            address: "1401 N Shoreline Blvd",
            address2: "Suite 1",
            city: "Mountain View",
            state: "CA",
            postalCode: "94043",
            country: "US",
        },
        formFields: {
            nonemployeeCompensation: 23423,
            hasDirectSalesOver5000: false,
            federalIncomeTaxWithheld: 0,
            accountNumber: "A0NEqtav7n0sBGoq88w0",
            stateTaxInfo: [
                {
                    filingState: "CA",
                    stateIncome: 23423,
                    stateTaxWithheld: 0,
                },
            ],
        },
    },
});
```

## Request And Response Types

The SDK exports all request and response types as TypeScript interfaces. Simply import them with the
following namespace:

```typescript
import { Abound } from "@withabound/node-sdk";

const request: Abound.AccessTokenRequestSchema = {
    ...
};
```

## Exception Handling

When the API returns a non-success status code (4xx or 5xx response), a subclass of the following error
will be thrown.

```typescript
import { AboundError } from "@withabound/node-sdk";

try {
    await client.form1099Nec.create(...);
} catch (err) {
    if (err instanceof AboundError) {
        console.log(err.statusCode);
        console.log(err.message);
        console.log(err.body);
    }
}
```

## Advanced

### Additional Headers

If you would like to send additional headers as part of the request, use the `headers` request option.

```typescript
const response = await client.form1099Nec.create(..., {
    headers: {
        'X-Custom-Header': 'custom value'
    }
});
```

### Retries

The SDK is instrumented with automatic retries with exponential backoff. A request will be retried as long
as the request is deemed retryable and the number of retry attempts has not grown larger than the configured
retry limit (default: 2).

A request is deemed retryable when any of the following HTTP status codes is returned:

- [408](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/408) (Timeout)
- [429](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/429) (Too Many Requests)
- [5XX](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/500) (Internal Server Errors)

Use the `maxRetries` request option to configure this behavior.

```typescript
const response = await client.form1099Nec.create(..., {
    maxRetries: 0 // override maxRetries at the request level
});
```

### Timeouts

The SDK defaults to a 60 second timeout. Use the `timeoutInSeconds` option to configure this behavior.

```typescript
const response = await client.form1099Nec.create(..., {
    timeoutInSeconds: 30 // override timeout to 30s
});
```

### Aborting Requests

The SDK allows users to abort requests at any point by passing in an abort signal.

```typescript
const controller = new AbortController();
const response = await client.form1099Nec.create(..., {
    abortSignal: controller.signal
});
controller.abort(); // aborts the request
```

### Runtime Compatibility

The SDK defaults to `node-fetch` but will use the global fetch client if present. The SDK works in the following
runtimes:

- Node.js 18+
- Vercel
- Cloudflare Workers
- Deno v1.25+
- Bun 1.0+
- React Native

### Customizing Fetch Client

The SDK provides a way for your to customize the underlying HTTP client / Fetch function. If you're running in an
unsupported environment, this provides a way for you to break glass and ensure the SDK works.

```typescript
import { AboundClient } from "@withabound/node-sdk";

const client = new AboundClient({
    ...
    fetcher: // provide your implementation here
});
```

## Contributing

While we value open-source contributions to this SDK, this library is generated programmatically.
Additions made directly to this library would have to be moved over to our generation code,
otherwise they would be overwritten upon the next generated release. Feel free to open a PR as
a proof of concept, but know that we will not be able to merge it as-is. We suggest opening
an issue first to discuss with us!

On the other hand, contributions to the README are always very welcome!
