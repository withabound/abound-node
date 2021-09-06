
# Abound Node.js Library

The Abound Node library provides convenient access to the Abound API from applications written in server-side JavaScript.

### Documentation

The Abound Node SDK supports all Abound API endpoints. See the [API Documentation][docs] and the [API Reference][api-reference] for complete information about the APIs.

### Requirements
### Installation

Install the SDK with:

```sh
npm install @abound/node-sdk --save
# or
yarn add @abound/node-sdk
```

### Usage

The Abound client must be configured with your account's App ID and App Secret, which are available in the [Abound Dashboard][developer-dashboard].

Every method returns a promise which can either be chained or handled via `async/await`.

```ts
import Abound, { environments } from "@abound/node-sdk";

const abound = new Abound({
  appId: "appId_f2d...",
  appSecret: "appSecret_bf3...",
  environment: environments.sandbox, // or environments.production
  apiVersion: "v2"
});

(async () => {
  const user = await abound.users.create({
    email: "user1@example.com",
  });

  console.log(user.data.userId);
})();

// or

abound.users.create({
    email: "user1@example.com"
})
.then(user => console.log(user.data.userId))
.catch(error => console.error(error));
```

### Examples

Create a `User`:

```ts
const response = await abound.users.create({
  email: 'jane.doe@example.com',
  profile: {
    firstName: "Jane",
    lastName: "Doe",
    address: "123 Maple Street",
    address2: "Apt #123",
    city: "Anytown",
    state: "PA",
    zipcode: "17101",
    phoneNumber: "5555555555",
    dateOfBirth: "1989-05-01",
    socialSecurityNumber: "123456789"
  }
});

console.log(response.data.userId);
```

### Development

Run all tests:

```sh
$ npx jest
```

Run xo:
```sh
$ npx xo
# or, run with autofix
$ npx xo --fix
```

[docs]: https://docs.withabound.com/docs
[api-reference]: https://docs.withabound.com/reference/introduction
[developer-dashboard]: https://dev-dashboard.withabound.com/
