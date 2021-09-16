
# Abound Node.js Library

The Abound Node library provides convenient access to the Abound API from applications written in server-side JavaScript.

### Documentation

The Abound Node SDK supports all Abound API endpoints. See the [API Documentation][docs] and the [API Reference][api-reference] for complete information about the APIs.

### Requirements
### Installation

Install the SDK with:

```sh
$ npm install @abound/node-sdk --save
# or
$ yarn add @abound/node-sdk
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

Create `Expense`s:

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
  year: "2020"
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

#### Mileage

Create `Mileage`s:

```ts
const userId = "userId_506...";
const mileage = {
  distance: 21.1,
  date: "2021-03-14",
  description: "Client visit"
};

const response = await abound.mileages.create(userId, [
  mileage,
  // ...additional mileages
]);

console.log(response.data); // list of Mileages
```

Retrieve a `Mileage`:

```ts
const userId = "userId_506...";
const mileageId = "mileageId_4af...";

const response = await abound.mileages.retrieve(userId, mileageId);

console.log(response.data.distance);
```

#### Payment Methods

Create a `PaymentMethod`:

```ts
import { AccountClass, AccountType } from "@abound/node-sdk/dist/resources/PaymentMethods";

const userId = "userId_506...";

const response = await abound.paymentMethods.create(userId, {
  accountNumber: "123456789",
  routingNumber: "44449944",
  accountType: AccountType.BUSINESS,
  accountClass: AccountClass.CHECKING
});

console.log(response.data.paymentMethodId);
```

List `PaymentMethod`s for a `User`:

```ts
const userId = "userId_506...";

const response = await abound.paymentMethods.list(userId);

console.log(response.data); // list of PaymentMethods
```

Retrieve a `PaymentMethod`:

```ts
const userId = "userId_506...";
const paymentMethodId = "paymentMethodId_329...";

const response = await abound.paymentMethods.retrieve(userId, paymentMethodId);

console.log(response.data.displayName);
```

#### Tax Payments

Create a `TaxPayment`:

```ts
import { TaxPaymentEntity, TaxPeriod } from "@abound/node-sdk/dist/resources/TaxPayments";

const userId = "userId_506...";
const paymentMethodId = "paymentMethodId_329...";

const response = await abound.taxPayments.create(userId, {
  paymentMethodId: paymentMethodId,
  year: "2021",
  period: TaxPeriod.Q1,
  amount: 560.87,
  entity: TaxPaymentEntity.IRS
});

console.log(response.data.taxPaymentId);
```

List `TaxPayment`s for a `User`:

```ts
const userId = "userId_506...";

const response = await abound.taxPayments.list(userId);

console.log(response.data); // list of TaxPayments
```

Retrieve a `TaxPayment`:

```ts
const userId = "userId_506...";
const taxPaymentId = "taxPaymentId_614...";

const response = await abound.taxPayments.retrieve(userId, taxPaymentId);

console.log(response.data.status);
```

#### Incomes

Create `Income`s:

```ts
import { IncomeType } from "@abound/node-sdk/dist/resources/Incomes";

const userId = "userId_506...";

const response = await abound.incomes.create(userId, [
  {
    incomeType: IncomeType.W2,
    amount: 55000,
    date: "2020-12-30"
  },
  {
    incomeType: IncomeType.TEN99INT,
    amount: 10.85,
    date: "2020-12-15",
    description: "Savings Account interest accrued"
  }
]);

console.log(response.data); // list of created Incomes
```

List `Income`s for a `User`:

```ts
import { IncomeType } from "@abound/node-sdk/dist/resources/Incomes";

const userId = "userId_506...";

const response = await abound.incomes.list(userId);
// or, filter by incomeType
const response = await abound.incomes.list(userId, {
  incomeType: IncomeType.TEN99
});

console.log(response.data); // list of Incomes
```

Retrieve an `Income`:

```ts
const userId = "userId_506...";
const incomeId = "incomeId_8cb...";

const response = await abound.incomes.retrieve(userId, incomeId);

console.log(response.data.amount);
```

Update an `Income`:

```ts
const userId = "userId_506...";
const incomeId = "incomeId_8cb...";
const incomeUpdates = {
  amount: 57500
};

const response = await abound.incomes.update(userId, incomeId, incomeUpdates);

console.log(response.data.amount);
```

Delete an `Income`:

```ts
const userId = "userId_506...";
const incomeId = "incomeId_8cb...";

const response = await abound.incomes.delete(userId, incomeId);

console.log(response.data); // {}
```

#### Taxes

List `Taxes` for a `User`:

```ts
const userId = "userId_506...";

const response = await abound.taxes.list(userId);

console.log(response.data); // list of tax calculations for all years
```

Retrieve `Taxes` for a `User` for a specific year:

```ts
const userId = "userId_506...";
const year = "2020";

const response = await abound.taxes.retrieve(userId, year);

console.log(response.data.totalTax);
```

Calculate `Taxes` based on the specified adjustments:

```ts
const userId = "userId_506...";
const year = "2020";

const taxUpdates = {
  w2Income: 75000,
  mileage: 16500,
};

const response = await abound.taxes.calculate(userId, year, taxUpdates);

console.log(response.data.effectiveTaxRate);
```

#### Documents

Create `Document`s for a `User`:

```ts
import { DocumentType } from "@abound/node-sdk/dist/resources/Documents";

const userId = "userId_506...";

const accountStatementDocument = {
  type: DocumentType.ACCOUNT_STATEMENT,
  year: 2020,
  beginDate: "2020-01-01",
  endDate: "2020-05-31",
  accountNumber: "123456789",
  summary: {
    beginningBalance: 1234.89,
    endingBalance: 4321.89,
    interestPercentage: 1.23,
    interestAmount: 6.78,
    totalFees: 5.25,
  },
  bank: {
    name: "Bank of America",
    logo: "https://url-to-bank-logo.png",
    address: "1801 16th St Mall",
    city: "Denver",
    state: "CO",
    zipcode: "80202",
    customerService: {
      phoneNumber: "555-555-5555",
      email: "bofa-support@example.com",
      website: "https://www.bankofamerica.com/",
    },
  },
};

const response = await abound.documents.create(userId, [
  accountStatementDocument,
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

#### Tax Categories

Retrieve `TaxCategories` by tax year:

```ts
const year = "2021";

const response = await abound.taxCategories.retrieve(year);

console.log(response.data); // ["Advertising and Marketing", "Car and Truck", etc.]
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

Publish artifacts locally:

Install `yalc`:

```sh
$ npm i yalc -g
# or
$ yarn global add yalc
```

Compile + Build the SDK:

```sh
$ npm run build
```

Publish artifacts to local `yalc` registry:

```sh
$ yalc push
```

Install the local artifacts:

```sh
~/my-project $ yalc add @abound/node-sdk
```

[docs]: https://docs.withabound.com
[api-reference]: https://docs.withabound.com/reference
[developer-dashboard]: https://dashboard.withabound.com
[developer-dashboard-keys]: https://dashboard.withabound.com/keys
