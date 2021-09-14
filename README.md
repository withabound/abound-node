
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

The Abound client must be configured with your account's `appId` and `appSecret`, which are available on the [Keys page][developer-dashboard-keys] of the [Abound Dashboard][developer-dashboard].

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
    socialSecurityNumber: "123456789"
  }
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
    phoneNumber: "4444444444"
  }
};

const response = await abound.users.update(userId, userUpdates);

console.log(response.data.email);
```

#### Expenses

Create an `Expense`:

```ts
import { ExpenseType } from "@abound/node-sdk/dist/resources/Expenses";

const userId = "userId_506...";
const expense = {
  amount: 139.99,
  description: "Tax Filing Fee",
  date: "2021-01-16",
  expenseType: ExpenseType.BUSINESS
};

const response = await abound.expenses.create(userId, [
  expense,
  // ...additional expenses
]);
```

List `Expense`s for a `User`:

```ts
const userId = "userId_506...";

const response = await abound.expenses.list(userId);

// filter Expenses by year:

const response = await abound.expenses.list(userId, { 
  year: 2020 
});

console.log(response.data); // list of Expenses
```

Retrieve an `Expense`:

```ts
const userId = "userId_506...";
const expenseId = "expenseId_65c...";

const response = await abound.expenses.retrieve(userId, expenseId);

console.log(response.data.deductionAmount);
```

Update an `Expense`:

```ts
const userId = "userId_506...";
const expenseId = "expenseId_65c...";
const expenseUpdates = {
  amount: 249.99,
  description: "Premium Tax Filing Service Fee",
};

const response = await abound.expenses.update(userId, expenseId, expenseUpdates);

console.log(response.data.deductionAmount);
```

Delete an `Expense`:

```ts
const userId = "userId_506...";
const expenseId = "expenseId_65c...";

const response = await abound.expenses.delete(userId, expenseId);

console.log(response.data); // {}
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

[docs]: https://docs.withabound.com
[api-reference]: https://docs.withabound.com/reference
[developer-dashboard]: https://dashboard.withabound.com
[developer-dashboard-keys]: https://dashboard.withabound.com/keys
