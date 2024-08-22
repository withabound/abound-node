# Reference

## Access Tokens

<details><summary><code>client.accessTokens.<a href="/src/api/resources/accessTokens/client/Client.ts">create</a>({ ...params }) -> Abound.AccessTokenSchema</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates an access token for authenticating Drop-In UI Components.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accessTokens.create({
    expiresIn: 300,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Abound.AccessTokenRequestSchema`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AccessTokens.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Electronic Delivery Consents

<details><summary><code>client.electronicDeliveryConsents.<a href="/src/api/resources/electronicDeliveryConsents/client/Client.ts">list</a>({ ...params }) -> Abound.EDeliveryConsentSchema[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of Electronic Delivery Consents.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.electronicDeliveryConsents.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Abound.EDeliveryConsentListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ElectronicDeliveryConsents.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## 1099-INT

<details><summary><code>client.form1099Int.<a href="/src/api/resources/form1099Int/client/Client.ts">list</a>({ ...params }) -> Abound.Form1099IntSchema[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of 1099-INT documents.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.form1099Int.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Abound.Form1099IntListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Form1099Int.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.form1099Int.<a href="/src/api/resources/form1099Int/client/Client.ts">create</a>({ ...params }) -> Abound.Form1099IntSchema</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a 1099-INT document and subsequently kicks off a TIN Verification, if the name and TIN combo has not been used before.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.form1099Int.create({
    body: {
        filingYear: 2023,
        payer: {
            address: "1401 N Shoreline Blvd",
            address2: "Suite 1",
            city: "Mountain View",
            state: "CA",
            postalCode: "94043",
            country: "US",
            name: "Hooli",
            name2: "Hooli",
            tin: "111111111",
            phoneNumber: "6501014096",
        },
        payee: {
            address: "256 Byron Street",
            address2: "Suite 32",
            city: "Palo Alto",
            state: "CA",
            postalCode: "94306",
            country: "US",
            name: "Ada Lovelace",
            name2: "InGen Corporation",
            tin: "000000000",
        },
        formFields: {
            hasFatcaFilingRequirement: false,
            accountNumber: "123456789",
            payersRoutingNumber: "123456789",
            interestIncome: 100000,
            stateTaxInfo: [
                {
                    filingState: Abound.Form1099FilingStateEnum.Ca,
                    stateTaxWithheld: 0,
                },
            ],
        },
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Abound.Form1099IntRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Form1099Int.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.form1099Int.<a href="/src/api/resources/form1099Int/client/Client.ts">mail</a>(documentId, { ...params }) -> Abound.MailingSchema</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Mails a 1099-INT document.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.form1099Int.mail("documentId_samplepWpJ9Snlzb", {
    body: {
        to: {
            address: "256 Byron Street",
            address2: "Suite 32",
            city: "Palo Alto",
            state: "CA",
            postalCode: "94306",
            country: "US",
            name: "Ada Lovelace",
            name2: "InGen Corporation",
        },
        from: {
            address: "1401 N Shoreline Blvd",
            address2: "Suite 1",
            city: "Mountain View",
            state: "CA",
            postalCode: "94043",
            country: "US",
            name: "Hooli",
            name2: "InGen Corporation",
        },
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**documentId:** `Abound.DocumentId`

</dd>
</dl>

<dl>
<dd>

**request:** `Abound.Form1099IntMailRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Form1099Int.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.form1099Int.<a href="/src/api/resources/form1099Int/client/Client.ts">file</a>(documentId, { ...params }) -> Abound.Form1099IntSchema</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Files a 1099-INT document.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.form1099Int.file("documentId_samplepWpJ9Snlzb");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**documentId:** `Abound.DocumentId`

</dd>
</dl>

<dl>
<dd>

**request:** `Abound.Form1099IntFileRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Form1099Int.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.form1099Int.<a href="/src/api/resources/form1099Int/client/Client.ts">correct</a>(documentId, { ...params }) -> Abound.Form1099IntSchema</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Files a new corrected 1099-INT and relates it to the original document. A 1099-INT can be corrected only after it has reached the `FILED` status. Automatically handles both one-transaction and two-transaction corrections.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.form1099Int.correct("documentId_samplepWpJ9Snlzb");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**documentId:** `Abound.DocumentId`

</dd>
</dl>

<dl>
<dd>

**request:** `Abound.Form1099IntCorrectRequestSchema`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Form1099Int.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.form1099Int.<a href="/src/api/resources/form1099Int/client/Client.ts">void</a>(documentId, { ...params }) -> Abound.Form1099IntSchema</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Files a new voided 1099-INT and relates it to the original document. A 1099-INT can be voided only after it has reached the `FILED` status.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.form1099Int.void("documentId_sample");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**documentId:** `Abound.DocumentId`

</dd>
</dl>

<dl>
<dd>

**request:** `Abound.Form1099IntVoidRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Form1099Int.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.form1099Int.<a href="/src/api/resources/form1099Int/client/Client.ts">retrieve</a>(documentId) -> Abound.Form1099IntSchema</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves the details of an existing 1099-INT document.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.form1099Int.retrieve("documentId_samplepWpJ9Snlzb");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**documentId:** `Abound.DocumentId`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Form1099Int.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.form1099Int.<a href="/src/api/resources/form1099Int/client/Client.ts">delete</a>(documentId) -> Abound.OkSchema</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes a 1099-INT document. Once an action (`/file`, `/correct`, `/void`) has been executed on a 1099-INT, it cannot be deleted.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.form1099Int.delete("documentId_samplepWpJ9Snlzb");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**documentId:** `Abound.DocumentId`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Form1099Int.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## 1099-K

<details><summary><code>client.form1099K.<a href="/src/api/resources/form1099K/client/Client.ts">list</a>({ ...params }) -> Abound.Form1099KSchema[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of 1099-K documents.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.form1099K.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Abound.Form1099KListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Form1099K.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.form1099K.<a href="/src/api/resources/form1099K/client/Client.ts">create</a>({ ...params }) -> Abound.Form1099KSchema</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a 1099-K document and subsequently kicks off a TIN Verification, if the name and TIN combo has not been used before.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.form1099K.create({
    body: {
        filingYear: 2023,
        payer: {
            address: "1401 N Shoreline Blvd",
            address2: "Suite 1",
            city: "Mountain View",
            state: "CA",
            postalCode: "94043",
            country: "US",
            name: "Hooli",
            name2: "Hooli",
            tin: "111111111",
            phoneNumber: "6501014096",
        },
        payee: {
            address: "256 Byron Street",
            address2: "Suite 32",
            city: "Palo Alto",
            state: "CA",
            postalCode: "94306",
            country: "US",
            name: "Ada Lovelace",
            name2: "InGen Corporation",
            tin: "000000000",
        },
        formFields: {
            payerClassification: Abound.Form1099KPayerClassificationEnum.Pse,
            transactionsReportedClassification: Abound.Form1099KTransactionsReportedClassificationSchema.PaymentCard,
            pseName: "Acme Payments",
            psePhoneNumber: "6501014096",
            accountNumber: "123456789",
            aggregateGrossAmount: 120000,
            aggregateGrossAmountCardNotPresent: 50000,
            merchantCategoryCode: "1234",
            numberOfPaymentTransactions: 100,
            grossAmountsByMonth: {
                january: 10000,
                february: 10000,
                march: 10000,
                april: 10000,
                may: 10000,
                june: 10000,
                july: 10000,
                august: 10000,
                september: 10000,
                october: 10000,
                november: 10000,
                december: 10000,
            },
            stateTaxInfo: [
                {
                    filingState: Abound.Form1099FilingStateEnum.Ca,
                    stateTaxWithheld: 0,
                },
            ],
        },
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Abound.Form1099KRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Form1099K.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.form1099K.<a href="/src/api/resources/form1099K/client/Client.ts">mail</a>(documentId, { ...params }) -> Abound.MailingSchema</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Mails a 1099-K document.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.form1099K.mail("documentId_sampletTtqNfulW8", {
    body: {
        to: {
            address: "256 Byron Street",
            address2: "Suite 32",
            city: "Palo Alto",
            state: "CA",
            postalCode: "94306",
            country: "US",
            name: "Ada Lovelace",
            name2: "InGen Corporation",
        },
        from: {
            address: "1401 N Shoreline Blvd",
            address2: "Suite 1",
            city: "Mountain View",
            state: "CA",
            postalCode: "94043",
            country: "US",
            name: "Hooli",
            name2: "InGen Corporation",
        },
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**documentId:** `Abound.DocumentId`

</dd>
</dl>

<dl>
<dd>

**request:** `Abound.Form1099KMailRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Form1099K.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.form1099K.<a href="/src/api/resources/form1099K/client/Client.ts">file</a>(documentId, { ...params }) -> Abound.Form1099KSchema</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Files a 1099-K document.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.form1099K.file("documentId_sampletTtqNfulW8");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**documentId:** `Abound.DocumentId`

</dd>
</dl>

<dl>
<dd>

**request:** `Abound.Form1099KFileRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Form1099K.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.form1099K.<a href="/src/api/resources/form1099K/client/Client.ts">correct</a>(documentId, { ...params }) -> Abound.Form1099KSchema</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Files a new corrected 1099-K and relates it to the original document. A 1099-K can be corrected only after it has reached the `FILED` status. Automatically handles both one-transaction and two-transaction corrections.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.form1099K.correct("documentId_sampletTtqNfulW8");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**documentId:** `Abound.DocumentId`

</dd>
</dl>

<dl>
<dd>

**request:** `Abound.Form1099KCorrectRequestSchema`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Form1099K.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.form1099K.<a href="/src/api/resources/form1099K/client/Client.ts">void</a>(documentId, { ...params }) -> Abound.Form1099KSchema</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Files a new voided 1099-K and relates it to the original document. A 1099-K can be voided only after it has reached the `FILED` status.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.form1099K.void("documentId_sampletTtqNfulW8");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**documentId:** `Abound.DocumentId`

</dd>
</dl>

<dl>
<dd>

**request:** `Abound.Form1099KVoidRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Form1099K.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.form1099K.<a href="/src/api/resources/form1099K/client/Client.ts">retrieve</a>(documentId) -> Abound.Form1099KSchema</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves the details of an existing 1099-K document.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.form1099K.retrieve("documentId_sampletTtqNfulW8");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**documentId:** `Abound.DocumentId`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Form1099K.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.form1099K.<a href="/src/api/resources/form1099K/client/Client.ts">delete</a>(documentId) -> Abound.OkSchema</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes a 1099-K document. Once an action (`/file`, `/correct`, `/void`) has been executed on a 1099-K, it cannot be deleted.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.form1099K.delete("documentId_sampletTtqNfulW8");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**documentId:** `Abound.DocumentId`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Form1099K.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## 1099-MISC

<details><summary><code>client.form1099Misc.<a href="/src/api/resources/form1099Misc/client/Client.ts">list</a>({ ...params }) -> Abound.Form1099MiscSchema[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of 1099-MISC documents.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.form1099Misc.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Abound.Form1099MiscListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Form1099Misc.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.form1099Misc.<a href="/src/api/resources/form1099Misc/client/Client.ts">create</a>({ ...params }) -> Abound.Form1099MiscSchema</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a 1099-MISC document and subsequently kicks off a TIN Verification, if the name and TIN combo has not been used before.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.form1099Misc.create({
    body: {
        filingYear: 2023,
        payer: {
            address: "1401 N Shoreline Blvd",
            address2: "Suite 1",
            city: "Mountain View",
            state: "CA",
            postalCode: "94043",
            country: "US",
            name: "Hooli",
            name2: "Hooli",
            tin: "111111111",
            phoneNumber: "6501014096",
        },
        payee: {
            address: "256 Byron Street",
            address2: "Suite 32",
            city: "Palo Alto",
            state: "CA",
            postalCode: "94306",
            country: "US",
            name: "Ada Lovelace",
            name2: "InGen Corporation",
            tin: "000000000",
        },
        formFields: {
            hasFatcaFilingRequirement: false,
            accountNumber: "123456789",
            rents: 100000,
            stateTaxInfo: [
                {
                    filingState: Abound.Form1099FilingStateEnum.Ca,
                    stateIncome: 100000,
                    stateTaxWithheld: 0,
                },
            ],
        },
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Abound.Form1099MiscRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Form1099Misc.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.form1099Misc.<a href="/src/api/resources/form1099Misc/client/Client.ts">mail</a>(documentId, { ...params }) -> Abound.MailingSchema</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Mails a 1099-MISC document.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.form1099Misc.mail("documentId_sampleGNPOKNmIgF", {
    body: {
        to: {
            address: "256 Byron Street",
            address2: "Suite 32",
            city: "Palo Alto",
            state: "CA",
            postalCode: "94306",
            country: "US",
            name: "Ada Lovelace",
            name2: "InGen Corporation",
        },
        from: {
            address: "1401 N Shoreline Blvd",
            address2: "Suite 1",
            city: "Mountain View",
            state: "CA",
            postalCode: "94043",
            country: "US",
            name: "Hooli",
            name2: "InGen Corporation",
        },
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**documentId:** `Abound.DocumentId`

</dd>
</dl>

<dl>
<dd>

**request:** `Abound.Form1099MiscMailRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Form1099Misc.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.form1099Misc.<a href="/src/api/resources/form1099Misc/client/Client.ts">file</a>(documentId, { ...params }) -> Abound.Form1099MiscSchema</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Files a 1099-MISC document.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.form1099Misc.file("documentId_sampleGNPOKNmIgF");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**documentId:** `Abound.DocumentId`

</dd>
</dl>

<dl>
<dd>

**request:** `Abound.Form1099MiscFileRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Form1099Misc.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.form1099Misc.<a href="/src/api/resources/form1099Misc/client/Client.ts">correct</a>(documentId, { ...params }) -> Abound.Form1099MiscSchema</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Files a new corrected 1099-MISC and relates it to the original document. A 1099-MISC can be corrected only after it has reached the `FILED` status. Automatically handles both one-transaction and two-transaction corrections.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.form1099Misc.correct("documentId_sampleGNPOKNmIgF");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**documentId:** `Abound.DocumentId`

</dd>
</dl>

<dl>
<dd>

**request:** `Abound.Form1099MiscCorrectRequestSchema`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Form1099Misc.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.form1099Misc.<a href="/src/api/resources/form1099Misc/client/Client.ts">void</a>(documentId, { ...params }) -> Abound.Form1099MiscSchema</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Files a new voided 1099-MISC and relates it to the original document. A 1099-MISC can be voided only after it has reached the `FILED` status.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.form1099Misc.void("documentId_sample");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**documentId:** `Abound.DocumentId`

</dd>
</dl>

<dl>
<dd>

**request:** `Abound.Form1099MiscVoidRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Form1099Misc.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.form1099Misc.<a href="/src/api/resources/form1099Misc/client/Client.ts">retrieve</a>(documentId) -> Abound.Form1099MiscSchema</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves the details of an existing 1099-MISC document.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.form1099Misc.retrieve("documentId_sampleGNPOKNmIgF");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**documentId:** `Abound.DocumentId`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Form1099Misc.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.form1099Misc.<a href="/src/api/resources/form1099Misc/client/Client.ts">delete</a>(documentId) -> Abound.OkSchema</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes a 1099-MISC document. Once an action (`/file`, `/correct`, `/void`) has been executed on a 1099-MISC, it cannot be deleted.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.form1099Misc.delete("documentId_sampleGNPOKNmIgF");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**documentId:** `Abound.DocumentId`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Form1099Misc.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## 1099-NEC

<details><summary><code>client.form1099Nec.<a href="/src/api/resources/form1099Nec/client/Client.ts">list</a>({ ...params }) -> Abound.Form1099NecSchema[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of 1099-NEC documents.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.form1099Nec.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Abound.Form1099NecListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Form1099Nec.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.form1099Nec.<a href="/src/api/resources/form1099Nec/client/Client.ts">create</a>({ ...params }) -> Abound.Form1099NecSchema</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a 1099-NEC document and subsequently kicks off a TIN Verification, if the name and TIN combo has not been used before.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.form1099Nec.create({
    body: {
        filingYear: 2023,
        payer: {
            address: "1401 N Shoreline Blvd",
            address2: "Suite 1",
            city: "Mountain View",
            state: "CA",
            postalCode: "94043",
            country: "US",
            name: "Hooli",
            name2: "Hooli",
            tin: "111111111",
            phoneNumber: "6501014096",
        },
        payee: {
            address: "256 Byron Street",
            address2: "Suite 32",
            city: "Palo Alto",
            state: "CA",
            postalCode: "94306",
            country: "US",
            name: "Ada Lovelace",
            name2: "InGen Corporation",
            tin: "000000000",
        },
        formFields: {
            accountNumber: "123456789",
            nonemployeeCompensation: 100000,
            hasDirectSalesOver5000: false,
            federalIncomeTaxWithheld: 0,
            stateTaxInfo: [
                {
                    filingState: Abound.Form1099FilingStateEnum.Ca,
                    stateIncome: 100000,
                    stateTaxWithheld: 0,
                },
            ],
        },
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Abound.Form1099NecRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Form1099Nec.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.form1099Nec.<a href="/src/api/resources/form1099Nec/client/Client.ts">mail</a>(documentId, { ...params }) -> Abound.MailingSchema</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Mails a 1099-NEC document.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.form1099Nec.mail("documentId_samplegU0eR8oc8a", {
    body: {
        to: {
            address: "256 Byron Street",
            address2: "Suite 32",
            city: "Palo Alto",
            state: "CA",
            postalCode: "94306",
            country: "US",
            name: "Ada Lovelace",
            name2: "InGen Corporation",
        },
        from: {
            address: "1401 N Shoreline Blvd",
            address2: "Suite 1",
            city: "Mountain View",
            state: "CA",
            postalCode: "94043",
            country: "US",
            name: "Hooli",
            name2: "InGen Corporation",
        },
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**documentId:** `Abound.DocumentId`

</dd>
</dl>

<dl>
<dd>

**request:** `Abound.Form1099NecMailRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Form1099Nec.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.form1099Nec.<a href="/src/api/resources/form1099Nec/client/Client.ts">file</a>(documentId, { ...params }) -> Abound.Form1099NecSchema</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Files a 1099-NEC document.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.form1099Nec.file("documentId_samplegU0eR8oc8a");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**documentId:** `Abound.DocumentId`

</dd>
</dl>

<dl>
<dd>

**request:** `Abound.Form1099NecFileRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Form1099Nec.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.form1099Nec.<a href="/src/api/resources/form1099Nec/client/Client.ts">correct</a>(documentId, { ...params }) -> Abound.Form1099NecSchema</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Files a new corrected 1099-NEC and relates it to the original document. A 1099-NEC can be corrected only after it has reached the `FILED` status. Automatically handles both one-transaction and two-transaction corrections.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.form1099Nec.correct("documentId_samplegU0eR8oc8a");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**documentId:** `Abound.DocumentId`

</dd>
</dl>

<dl>
<dd>

**request:** `Abound.Form1099NecCorrectRequestSchema`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Form1099Nec.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.form1099Nec.<a href="/src/api/resources/form1099Nec/client/Client.ts">void</a>(documentId, { ...params }) -> Abound.Form1099NecSchema</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Files a new voided 1099-NEC and relates it to the original document. A 1099-NEC can be voided only after it has reached the `FILED` status.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.form1099Nec.void("documentId_sample");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**documentId:** `Abound.DocumentId`

</dd>
</dl>

<dl>
<dd>

**request:** `Abound.Form1099NecVoidRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Form1099Nec.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.form1099Nec.<a href="/src/api/resources/form1099Nec/client/Client.ts">retrieve</a>(documentId) -> Abound.Form1099NecSchema</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves the details of an existing 1099-NEC document.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.form1099Nec.retrieve("documentId_samplegU0eR8oc8a");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**documentId:** `Abound.DocumentId`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Form1099Nec.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.form1099Nec.<a href="/src/api/resources/form1099Nec/client/Client.ts">delete</a>(documentId) -> Abound.OkSchema</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes a 1099-NEC document. Once an action (`/file`, `/correct`, `/void`) has been executed on a 1099-NEC, it cannot be deleted.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.form1099Nec.delete("documentId_samplegU0eR8oc8a");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**documentId:** `Abound.DocumentId`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Form1099Nec.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## W-8BEN-E

<details><summary><code>client.formW8BenE.<a href="/src/api/resources/formW8BenE/client/Client.ts">list</a>({ ...params }) -> Abound.W8BenESchema[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of W-8BEN-E documents.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.formW8BenE.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Abound.FormW8BenEListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FormW8BenE.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.formW8BenE.<a href="/src/api/resources/formW8BenE/client/Client.ts">create</a>({ ...params }) -> Abound.W8BenESchema</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a W-8BEN-E document and, if present, subsequently kicks off a TIN Verification. A TIN Verification will only kickoff if the name and TIN combo has not been seen before.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.formW8BenE.create({
    payee: {
        name: "Ada Lovelace",
        incorporationCountry: "GB",
        foreignTin: "111111111",
        permanentResidenceAddress: {
            address: "43 Hilly Fields",
            address2: "Suite 32",
            city: "Lewisham",
            state: "London",
            postalCode: "SE13 7JN",
            country: "GB",
        },
        mailingAddress: {
            address: "256 Byron Street",
            address2: "Suite 32",
            city: "Palo Alto",
            postalCode: "94306",
            state: "CA",
            country: "US",
        },
    },
    formFields: {
        taxClassification: Abound.W8BenETaxClassificationEnum.Corporation,
        isForeignTinNotRequired: false,
        taxTreatyCode: Abound.TaxTreatyAboundCodeEnum.Gb17IndependentPersonalServices,
        referenceNumbers: ["123456789"],
        isCertified: true,
        electronicSignature: {
            signature: "Ada Lovelace",
            printedName: "Ada Lovelace",
            signedAt: new Date("2024-01-01T00:00:00.000Z"),
            ipAddress: "127.0.0.1",
        },
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Abound.W8BenERequestSchema`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FormW8BenE.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.formW8BenE.<a href="/src/api/resources/formW8BenE/client/Client.ts">retrieve</a>(documentId) -> Abound.W8BenESchema</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves the details of an existing W-8BEN-E document.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.formW8BenE.retrieve("documentId_sampleVppNzzIbQT");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**documentId:** `Abound.DocumentId`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FormW8BenE.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## W-8BEN

<details><summary><code>client.formW8Ben.<a href="/src/api/resources/formW8Ben/client/Client.ts">list</a>({ ...params }) -> Abound.W8BenSchema[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of W-8BEN documents.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.formW8Ben.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Abound.FormW8BenListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FormW8Ben.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.formW8Ben.<a href="/src/api/resources/formW8Ben/client/Client.ts">create</a>({ ...params }) -> Abound.W8BenSchema</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a W-8BEN document and, if present, subsequently kicks off a TIN Verification. A TIN Verification will only kickoff if the name and TIN combo has not been seen before.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.formW8Ben.create({
    payee: {
        name: "Ada Lovelace",
        citizenshipCountry: "GB",
        foreignTin: "000000000",
        dateOfBirth: "1982-12-10",
        permanentResidenceAddress: {
            address: "43 Hilly Fields",
            address2: "Suite 32",
            city: "Lewisham",
            state: "London",
            postalCode: "SE13 7JN",
            country: "GB",
        },
        mailingAddress: {
            address: "256 Byron Street",
            address2: "Suite 32",
            city: "Palo Alto",
            postalCode: "94306",
            state: "CA",
            country: "US",
        },
    },
    formFields: {
        isForeignTinNotRequired: false,
        taxTreatyCode: Abound.TaxTreatyAboundCodeEnum.Gb17IndependentPersonalServices,
        referenceNumbers: ["123456789"],
        isCertified: true,
        electronicSignature: {
            signature: "Ada Lovelace",
            printedName: "Ada Lovelace",
            signedAt: new Date("2024-01-01T00:00:00.000Z"),
            ipAddress: "127.0.0.1",
        },
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Abound.W8BenRequestSchema`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FormW8Ben.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.formW8Ben.<a href="/src/api/resources/formW8Ben/client/Client.ts">retrieve</a>(documentId) -> Abound.W8BenSchema</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves the details of an existing W-8BEN document.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.formW8Ben.retrieve("documentId_sampleVppNzzIbQT");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**documentId:** `Abound.DocumentId`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FormW8Ben.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## W-9

<details><summary><code>client.formW9.<a href="/src/api/resources/formW9/client/Client.ts">list</a>({ ...params }) -> Abound.W9Schema[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of W-9 documents.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.formW9.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Abound.FormW9ListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FormW9.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.formW9.<a href="/src/api/resources/formW9/client/Client.ts">create</a>({ ...params }) -> Abound.W9Schema</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a W-9 document and subsequently kicks off a TIN verification, if the name and TIN combo has not been used before.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.formW9.create({
    body: {
        payee: {
            name: "Ada Lovelace",
            address: "256 Byron Street",
            address2: "Suite 32",
            city: "Palo Alto",
            country: "US",
            postalCode: "94306",
            state: "CA",
            tin: "000000000",
            tinType: Abound.TinTypeEnum.Individual,
        },
        formFields: {
            taxClassification: Abound.W9TaxClassificationSchema.Individual,
            isSubjectToBackupWithholding: false,
            electronicSignature: {
                signature: "Ada Lovelace",
                printedName: "Ada Lovelace",
                signedAt: new Date("2024-01-01T00:00:00.000Z"),
                ipAddress: "127.0.0.1",
            },
        },
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Abound.FormW9RequestSchema`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FormW9.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.formW9.<a href="/src/api/resources/formW9/client/Client.ts">retrieve</a>(documentId) -> Abound.W9Schema</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves the details of an existing W-9 document.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.formW9.retrieve("documentId_sampleVppNzzIbQT");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**documentId:** `Abound.DocumentId`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FormW9.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Mailings

<details><summary><code>client.mailings.<a href="/src/api/resources/mailings/client/Client.ts">list</a>({ ...params }) -> Abound.MailingSchema[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of mailings. Up to 100 mailings are returned per request.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.mailings.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Abound.MailingsListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Mailings.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.mailings.<a href="/src/api/resources/mailings/client/Client.ts">retrieve</a>(mailingId) -> Abound.MailingSchema</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves the details of an existing mailing.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.mailings.retrieve("mailingId_sampleFV9b73IvAD");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**mailingId:** `Abound.MailingId`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Mailings.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.mailings.<a href="/src/api/resources/mailings/client/Client.ts">update</a>(mailingId, { ...params }) -> Abound.MailingSchema</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates an existing mailing. Once a mailing has reached the `PROCESSING_FOR_DELIVERY` status, it cannot be updated. Any body parameters not provided will be removed.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.mailings.update("mailingId_sampleFV9b73IvAD", {
    body: {
        to: {
            address: "256 Byron Street",
            address2: "Suite 32",
            city: "Palo Alto",
            state: "CA",
            postalCode: "94306",
            country: "US",
            name: "Ada Lovelace",
            name2: "InGen Corporation",
        },
        from: {
            address: "1401 N Shoreline Blvd",
            address2: "Suite 1",
            city: "Mountain View",
            state: "CA",
            postalCode: "94043",
            country: "US",
            name: "Hooli",
            name2: "InGen Corporation",
        },
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**mailingId:** `Abound.MailingId`

</dd>
</dl>

<dl>
<dd>

**request:** `Abound.MailingRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Mailings.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.mailings.<a href="/src/api/resources/mailings/client/Client.ts">delete</a>(mailingId) -> Abound.OkSchema</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes a mailing. Once a mailing has reached the `PROCESSING_FOR_DELIVERY` status, it cannot be deleted.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.mailings.delete("mailingId_sampleFV9b73IvAD");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**mailingId:** `Abound.MailingId`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Mailings.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Tax Treaties

<details><summary><code>client.taxTreaties.<a href="/src/api/resources/taxTreaties/client/Client.ts">list</a>({ ...params }) -> Abound.TaxTreatySchema[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of tax treaties.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.taxTreaties.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Abound.TaxTreatiesListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TaxTreaties.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## TIN Verifications

<details><summary><code>client.tinVerifications.<a href="/src/api/resources/tinVerifications/client/Client.ts">list</a>({ ...params }) -> Abound.TinVerificationSchema[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of TIN Verifications. Up to 100 TIN Verifications are returned per request.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tinVerifications.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Abound.TinVerificationsListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TinVerifications.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tinVerifications.<a href="/src/api/resources/tinVerifications/client/Client.ts">create</a>({ ...params }) -> Abound.TinVerificationSchema</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates an asynchronous TIN Verification.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tinVerifications.create({
    body: {
        name: "Ada Lovelace",
        tin: "000000000",
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Abound.TinVerificationRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TinVerifications.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tinVerifications.<a href="/src/api/resources/tinVerifications/client/Client.ts">retrieve</a>(tinVerificationId) -> Abound.TinVerificationSchema</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves the details of an existing TIN Verification.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tinVerifications.retrieve("tinVerificationId_sample41SD71AV8f");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**tinVerificationId:** `Abound.TinVerificationId`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TinVerifications.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Users

<details><summary><code>client.users.<a href="/src/api/resources/users/client/Client.ts">list</a>({ ...params }) -> Abound.UserSchema[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of users. Up to 100 users are returned per request.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.users.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Abound.UsersListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Users.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.users.<a href="/src/api/resources/users/client/Client.ts">create</a>({ ...params }) -> Abound.UserSchema</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a user for a single end-user of your application.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.users.create({
    body: {
        email: "your-users-email@example.com",
        foreignId: "my-foreign-id",
        metadata: {
            "my-key": "my-value",
        },
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Abound.UsersCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Users.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.users.<a href="/src/api/resources/users/client/Client.ts">retrieve</a>(userId) -> Abound.UserSchema</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves the details of an existing user.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.users.retrieve("userId_sampleXGMFnhOpeR");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**userId:** `Abound.UserId`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Users.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.users.<a href="/src/api/resources/users/client/Client.ts">update</a>(userId, { ...params }) -> Abound.UserSchema</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates an existing user. Any body parameters not provided will be removed.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.users.update("userId_sampleXGMFnhOpeR", {
    email: "your-users-email@example.com",
    foreignId: "my-foreign-id",
    metadata: {
        "my-key": "my-value",
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**userId:** `Abound.UserId`

</dd>
</dl>

<dl>
<dd>

**request:** `Abound.UserRequestSchema`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Users.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>
