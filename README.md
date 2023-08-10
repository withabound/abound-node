# Abound Node.js Library

The Abound Node library provides convenient access to the Abound API from applications written in server-side JavaScript.

### Documentation

The Abound Node SDK supports all Abound API endpoints. See the [API Documentation][docs] and the [API Reference][api-reference] for complete information about the APIs.

### Requirements

You can start to integrate the Abound Node library into your solution as soon as you [create an account with Abound][developer-dashboard-signup] and [obtain your API keys][developer-dashboard-keys].

### Installation

Install the SDK with `npm` or `yarn`:

```console
npm install @withabound/node-sdk --save
```

```console
yarn add @withabound/node-sdk
```

### Usage

The Abound client must be configured with your account's `appId` and `appSecret`, which are available on the [Keys page][developer-dashboard-keys] of the [Abound Dashboard][developer-dashboard].

Every method returns a promise which can either be chained or handled via `async/await`.

```ts
import Abound, { Environment } from "@withabound/node-sdk";

const abound = new Abound({
  appId: "appId_f2d...",
  appSecret: "appSecret_bf3...",
  environment: Environment.SANDBOX, // or Environment.PRODUCTION
  apiVersion: "v3",
});

(async () => {
  const user = await abound.users.create({
    email: "user1@example.com",
  });

  console.log(user.data.userId);
})();

// or

abound.users
  .create({
    email: "user1@example.com",
  })
  .then((user) => console.log(user.data.userId))
  .catch((error) => console.error(error));
```

### Examples

#### Users

Create a `User`:

```ts
const response = await abound.users.create({
  email: "jane.doe@example.com",
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
    socialSecurityNumber: "123456789",
  },
});

console.log(response.data.userId);
```

List `User`s:

```ts
const response = await abound.users.list();

console.log(response.data); // list of Users
```

Retrieve a `User`:

```ts
const userId = "userId_506...";

const response = await abound.users.retrieve(userId);

console.log(response.data.userId);
```

Update a `User`:

```ts
const userId = "userId_506...";
const userUpdates = {
  email: "janedoe123@example.com",
  profile: {
    phoneNumber: "4444444444",
  },
};

const response = await abound.users.update(userId, userUpdates);

console.log(response.data.email);
```

#### Mailings

List `Mailing`s:

```ts
const userId = "userId_506...";
const documentId = "documentId_efb...";

const response = await abound.mailings.list(userId, documentId);

console.log(response.data); // list of Mailings
```

Create a `Mailing`:

```ts
const userId = "userId_506...";
const documentId = "documentId_efb...";

const response = await abound.mailings.create(userId, documentId);

console.log(response.data);
```

Retrieve a `Mailing`:

```ts
const userId = "userId_506...";
const documentId = "documentId_efb...";
const mailingId = "mailingId_d01...";

const response = await abound.mailings.retrieve(userId, documentId, mailingId);

console.log(response.data);
```

Delete a `Mailing`:

```ts
const userId = "userId_506...";
const documentId = "documentId_efb...";
const mailingId = "mailingId_d01...";

const response = await abound.mailings.delete(userId, documentId, mailingId);

console.log(response.data); // {}
```

#### Payers

Create a `Payer`:

```ts
const newPayer = {
  name: "Hooli",
  address: "1401 N Shoreline Blvd",
  address2: "Suite 1",
  city: "Mountain View",
  country: "US",
  phoneNumber: "6501014096",
  state: "CA",
  zipcode: "94043",
};

const response = await abound.payers.create([newPayer]);

console.log(response.data); // list of created Payers
```

List `Payers`:

```ts
const response = await abound.payers.list();

console.log(response.data); // list of Payers
```

Retrieve a `Payer`:

```ts
const payerId = "payerId_362...";

const response = await abound.payers.retrieve(payerId);

console.log(response.data.name);
```

Update a `Payer`:

```ts
const payerId = "payerId_362...";

const payerUpdates = {
  name: "Pied Piper",
  address: "5230 Newell Road",
  city: "Palo Alto",
};

const response = await abound.payers.update(payerId, payerUpdates);

console.log(response.data.name);
```

Delete a `Payer`:

```ts
const payerId = "payerId_362...";

const response = await abound.payers.delete(payerId);

console.log(response.data); // {}
```

#### Documents

Create `Document`s for a `User`:

```ts
import { DocumentType } from "@withabound/node-sdk";

const userId = "userId_506...";
const payerId = "payerId_362...";

const ten99NecDocument: Ten99NECDocumentRequest = {
  type: DocumentType.TEN99NEC,
  payerId,
  year: 2020,
  nonemployeeCompensation: 15000,
  stateTaxInfo: [{ filingState: "CA" }],
};

const response = await abound.documents.create(userId, [
  ten99NecDocument,
  // additional documents to create
]);

console.log(response.data[0].documentURL);
```

List all `Document`s for a `User`:

```ts
const userId = "userId_506...";

const response = await abound.documents.list(userId);
// or, filter by year
const response = await abound.documents.list(userId, { year: "2020" });

console.log(response.data); // list of Documents
```

Retrieve a `Document`:

```ts
const userId = "userId_506...";
const documentId = "documentId_efb...";

const response = await abound.documents.retrieve(userId, documentId);

console.log(response.data.documentURL);
```

### Development

Run all tests:

```console
npx jest
```

Run xo:

```console
npx xo
```

or, run with autofix:

```console
npx xo --fix
```

Compile:

```console
npm run compile
```

Install husky:

```console
npx husky install
```

Publish artifacts locally:

Install `yalc` with `npm` or `yarn`:

```console
npm i yalc -g
```

```console
yarn global add yalc
```

Build the SDK:

```console
npm run build
```

Publish artifacts to local `yalc` registry:

```console
yalc push
```

Install the local artifacts:

```console
~/my-project $ yalc add @withabound/node-sdk
```

[docs]: https://docs.withabound.com
[api-reference]: https://docs.withabound.com/reference
[developer-dashboard]: https://dashboard.withabound.com
[developer-dashboard-keys]: https://dashboard.withabound.com/keys
[developer-dashboard-signup]: https://dashboard.withabound.com/signup
