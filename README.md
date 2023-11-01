# Abound Node.js Library

The Abound Node library provides convenient access to the Abound API from applications written in server-side JavaScript.

### Documentation

The Abound Node SDK supports all Abound API endpoints. See the [API Documentation][docs] and the [API Reference][api-reference] for complete information about the APIs.

### Requirements

You can start to integrate the Abound Node library into your solution as soon as you [create an account with Abound][developer-dashboard-registration] and [obtain your API keys][developer-dashboard-keys].

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
import Abound from "@withabound/node-sdk";

const abound = new Abound({
  appId: "appId_f2d...",
  appSecret: "appSecret_bf3...",
  environment: "SANDBOX", // or "PRODUCTION"
});

(async () => {
  const user = await abound.users.create({
    email: "user1@example.com",
  });

  console.log(user.userId);
})();

// or

abound.users
  .create({
    email: "user1@example.com",
  })
  .then((user) => console.log(user.userId))
  .catch((error) => console.error(error));
```

### Examples

#### Access Tokens

Create an `Access Token`:

```ts
const userId = "userId_506...";

const response = await abound.accessTokens.create({
  expiresIn: 300,
  userId,
});

console.log(response.userId);
```

#### Form 1099-INT

Create a `Form 1099-INT`:

```ts
const response = await abound.form1099Int.create({
  filingYear: 2022
  payer: {
    name: "Hooli",
    tin: "111111111",
    address: "256 Byron Street",
    address2: "Suite 32",
    city: "Palo Alto",
    state: "CA",
    postalCode: "94306",
    country: "US",
    phoneNumber: "6501014096",
  },
  payee: {
    name: "Ada Lovelace",
    tin: "000000000",
    address: "256 Byron Street",
    address2: "Suite 32",
    city: "Palo Alto",
    state: "CA",
    postalCode: "94306",
    country: "US",
  },
  formFields: {
    interestIncome: 83_232,
    stateTaxInfo: [{ filingState: "CA" as const }],
  },
});

console.log(response.payeeUrl);
```

List `Form 1099-INT`s:

```ts
const response = await abound.form1099Int.list();

console.log(response); // list of Form 1099-INTs
```

Mail a `Form 1099-INT`:

```ts
const documentId = "documentId_f03...";

const response = await abound.form1099Int.mail(documentId, {
  to: {
    name: "Ada Lovelace",
    address: "256 Byron Street",
    address2: "Suite 32",
    city: "Palo Alto",
    state: "CA",
    postalCode: "94306",
    country: "US",
  },
  from: {
    name: "Hooli",
    address: "256 Byron Street",
    address2: "Suite 32",
    city: "Palo Alto",
    state: "CA",
    postalCode: "94306",
    country: "US",
  },
});

console.log(response);
```

File a `Form 1099-INT`:

```ts
const documentId = "documentId_f03...";

const response = await abound.form1099Int.file(documentId);

console.log(response.status);
```

Correct a `Form 1099-INT`:

```ts
const documentId = "documentId_f03...";

const response = await abound.form1099Int.correct(documentId, {
  payee: {
    name: "Ada Lovelace",
    tin: "000000000",
    address: "256 Byron Street",
    address2: "Suite 32",
    city: "Palo Alto",
    state: "CA",
    postalCode: "94306",
    country: "US",
  },
  formFields: {
    interestIncome: 24_271,
    stateTaxInfo: [{ filingState: "CA" as const }],
  },
});

console.log(response);
```

Void a `Form 1099-INT`:

```ts
const documentId = "documentId_f03...";

const response = await abound.form1099Int.void(documentId);

console.log(response);
```

Retrieve a `Form 1099-INT`:

```ts
const documentId = "documentId_f03...";

const response = await abound.form1099Int.retrieve(documentId);

console.log(response);
```

Delete a `Form 1099-INT`:

```ts
const documentId = "documentId_f03...";

const response = await abound.form1099Int.delete(documentId);

console.log(response); // {}
```

#### Form 1099-K

Create a `Form 1099-K`:

```ts
const response = await abound.form1099K.create({
  filingYear: 2022
  payer: {
    name: "Hooli",
    tin: "111111111",
    address: "256 Byron Street",
    address2: "Suite 32",
    city: "Palo Alto",
    state: "CA",
    postalCode: "94306",
    country: "US",
    phoneNumber: "6501014096",
  },
  payee: {
    name: "Ada Lovelace",
    tin: "000000000",
    address: "256 Byron Street",
    address2: "Suite 32",
    city: "Palo Alto",
    state: "CA",
    postalCode: "94306",
    country: "US",
  },
  formFields: {
    payerClassification: "EPF_OTHER" as const,
    transactionsReportedClassification: "PAYMENT_CARD" as const,
    aggregateGrossAmount: 2_332_323,
    numberOfPaymentTransactions: 767,
    grossAmountsByMonth: {
      december: 2_332_323,
    },
    stateTaxInfo: [{ filingState: "CA" as const }],
  },
});

console.log(response.payeeUrl);
```

List `Form 1099-K`s:

```ts
const response = await abound.form1099K.list();

console.log(response); // list of Form 1099-Ks
```

Mail a `Form 1099-K`:

```ts
const documentId = "documentId_fef...";

const response = await abound.form1099K.mail(documentId, {
  to: {
    name: "Ada Lovelace",
    address: "256 Byron Street",
    address2: "Suite 32",
    city: "Palo Alto",
    state: "CA",
    postalCode: "94306",
    country: "US",
  },
  from: {
    name: "Hooli",
    address: "256 Byron Street",
    address2: "Suite 32",
    city: "Palo Alto",
    state: "CA",
    postalCode: "94306",
    country: "US",
  },
});

console.log(response);
```

File a `Form 1099-K`:

```ts
const documentId = "documentId_fef...";

const response = await abound.form1099K.file(documentId);

console.log(response.status);
```

Correct a `Form 1099-K`:

```ts
const documentId = "documentId_fef...";

const response = await abound.form1099K.correct(documentId, {
  payee: {
    name: "Ada Lovelace",
    tin: "000000000",
    address: "256 Byron Street",
    address2: "Suite 32",
    city: "Palo Alto",
    state: "CA",
    postalCode: "94306",
    country: "US",
  },
  formFields: {
    payerClassification: "EPF_OTHER" as const,
    transactionsReportedClassification: "PAYMENT_CARD" as const,
    aggregateGrossAmount: 512_223,
    numberOfPaymentTransactions: 767,
    grossAmountsByMonth: {
      december: 512_223,
    },
    stateTaxInfo: [{ filingState: "CA" as const }],
  },
});

console.log(response);
```

Void a `Form 1099-K`:

```ts
const documentId = "documentId_fef...";

const response = await abound.form1099K.void(documentId);

console.log(response);
```

Retrieve a `Form 1099-K`:

```ts
const documentId = "documentId_fef...";

const response = await abound.form1099K.retrieve(documentId);

console.log(response);
```

Delete a `Form 1099-K`:

```ts
const documentId = "documentId_fef...";

const response = await abound.form1099K.delete(documentId);

console.log(response); // {}
```

#### Form 1099-NEC

Create a `Form 1099-NEC`:

```ts
const response = await abound.form1099Nec.create({
  filingYear: 2022
  payer: {
    name: "Hooli",
    tin: "111111111",
    address: "256 Byron Street",
    address2: "Suite 32",
    city: "Palo Alto",
    state: "CA",
    postalCode: "94306",
    country: "US",
    phoneNumber: "6501014096",
  },
  payee: {
    name: "Ada Lovelace",
    tin: "000000000",
    address: "256 Byron Street",
    address2: "Suite 32",
    city: "Palo Alto",
    state: "CA",
    postalCode: "94306",
    country: "US",
  },
  formFields: {
    nonemployeeCompensation: 23_423,
    stateTaxInfo: [{ filingState: "CA" as const }],
  },
});

console.log(response.payeeUrl);
```

List `Form 1099-NEC`s:

```ts
const response = await abound.form1099Nec.list();

console.log(response); // list of Form 1099-NECs
```

Mail a `Form 1099-NEC`:

```ts
const documentId = "documentId_63a...";

const response = await abound.form1099Nec.mail(documentId, {
  to: {
    name: "Ada Lovelace",
    address: "256 Byron Street",
    address2: "Suite 32",
    city: "Palo Alto",
    state: "CA",
    postalCode: "94306",
    country: "US",
  },
  from: {
    name: "Hooli",
    address: "256 Byron Street",
    address2: "Suite 32",
    city: "Palo Alto",
    state: "CA",
    postalCode: "94306",
    country: "US",
  },
});

console.log(response);
```

File a `Form 1099-NEC`:

```ts
const documentId = "documentId_63a...";

const response = await abound.form1099Nec.file(documentId);

console.log(response.status);
```

Correct a `Form 1099-NEC`:

```ts
const documentId = "documentId_63a...";

const response = await abound.form1099Nec.correct(documentId, {
  payee: {
    name: "Ada Lovelace",
    tin: "000000000",
    address: "256 Byron Street",
    address2: "Suite 32",
    city: "Palo Alto",
    state: "CA",
    postalCode: "94306",
    country: "US",
  },
  formFields: {
    nonemployeeCompensation: 24_389,
    stateTaxInfo: [{ filingState: "CA" as const }],
  },
});

console.log(response);
```

Void a `Form 1099-NEC`:

```ts
const documentId = "documentId_63a...";

const response = await abound.form1099Nec.void(documentId);

console.log(response);
```

Retrieve a `Form 1099-NEC`:

```ts
const documentId = "documentId_63a...";

const response = await abound.form1099Nec.retrieve(documentId);

console.log(response);
```

Delete a `Form 1099-NEC`:

```ts
const documentId = "documentId_63a...";

const response = await abound.form1099Nec.delete(documentId);

console.log(response); // {}
```

#### Form W-9

Create a `Form W-9`:

```ts
const response = await abound.formW9.create({
  payee: {
    name: "Ada Lovelace",
    tin: "000000000",
    address: "256 Byron Street",
    address2: "Suite 32",
    city: "Palo Alto",
    state: "CA",
    postalCode: "94306",
    country: "US",
  },
  formFields: {
    taxClassification: "SOLE_PROPRIETOR" as const,
    certifiedAt: "2023-01-01T00:00:00.000Z",
  },
});

console.log(response.url);
```

List `Form W-9`s:

```ts
const response = await abound.formW9.list();

console.log(response); // list of Form W-9s
```

Retrieve a `Form W-9`:

```ts
const documentId = "documentId_f48...";

const response = await abound.formW9.retrieve(documentId);

console.log(response);
```

#### Mailings

List `Mailing`s:

```ts
const documentId = "documentId_efb...";

const response = await abound.mailings.list();

console.log(response); // list of Mailings
```

Retrieve a `Mailing`:

```ts
const mailingId = "mailingId_d01...";

const response = await abound.mailings.retrieve(mailingId);

console.log(response);
```

Update a `Mailing`:

```ts
const mailingId = "mailingId_d01...";

const response = await abound.mailings.update(mailingId, {
  to: {
    name: "Ada Lovelace",
    address: "256 Byron Street",
    address2: "Suite 32",
    city: "Palo Alto",
    state: "CA",
    postalCode: "94306",
    country: "US",
  },
  from: {
    name: "Hooli",
    address: "256 Byron Street",
    address2: "Suite 32",
    city: "Palo Alto",
    state: "CA",
    postalCode: "94306",
    country: "US",
  },
});

console.log(response);
```

Delete a `Mailing`:

```ts
const mailingId = "mailingId_d01...";

const response = await abound.mailings.delete(mailingId);

console.log(response); // {}
```

#### TIN Verifications

Create a `TIN Verification`:

```ts
const response = await abound.tinVerifications.create({
  name: "Ada Lovelace",
  tin: "111111111",
});

console.log(response.tinFingerprint);
```

List `TIN Verifications`s:

```ts
const response = await abound.tinVerifications.list();

console.log(response); // list of TIN Verifications
```

Retrieve a `TIN Verification`:

```ts
const tinVerificationId = "tinVerificationId_40c...";

const response = await abound.tinVerifications.retrieve(tinVerificationId);

console.log(response.tinFingerprint);
```

#### Users

Create a `User`:

```ts
const response = await abound.users.create({
  email: "jane.doe@example.com",
});

console.log(response.userId);
```

List `User`s:

```ts
const response = await abound.users.list();

console.log(response); // list of Users
```

Retrieve a `User`:

```ts
const userId = "userId_506...";

const response = await abound.users.retrieve(userId);

console.log(response.userId);
```

Update a `User`:

```ts
const userId = "userId_506...";

const response = await abound.users.update(userId, {
  email: "janedoe123@example.com",
});

console.log(response.email);
```

### Development

Run all tests:

```console
npx vitest
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
npm install yalc -g
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
[developer-dashboard-registration]: https://dashboard.withabound.com/register-organization
