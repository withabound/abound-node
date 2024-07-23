# Reference

## AccessTokens

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
    "Idempotency-Key": "9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08",
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

## Form1099Int

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

Creates a 1099-INT document and subsequently kicks off a TIN verification, if the name and TIN combo has not been used before.

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
    "Idempotency-Key": "9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08",
    filingYear: 2023,
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

**request:** `Abound.Form1099IntRequestSchema`

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
await client.form1099Int.mail("{{documentId}}", {
    "Idempotency-Key": "9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08",
    body: {
        to: {},
        from: {},
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

**documentId:** `string` — The unique identifier for an existing document.

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
await client.form1099Int.file("{{documentId}}", {
    "Idempotency-Key": "9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08",
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

**documentId:** `string` — The unique identifier for an existing document.

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
await client.form1099Int.correct("{{documentId}}", {
    "Idempotency-Key": "9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08",
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

**documentId:** `string` — The unique identifier for an existing document.

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
await client.form1099Int.void("{{documentId}}", {
    "Idempotency-Key": "9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08",
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

**documentId:** `string` — The unique identifier for an existing document.

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
await client.form1099Int.retrieve("{{documentId}}");
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

**documentId:** `string` — The unique identifier for an existing document.

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

Deletes a 1099-INT document. Once an action (`/mail`, `/file`, `/correct`, `/void`) has been executed on a 1099-INT, it cannot be deleted.

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
await client.form1099Int.delete("{{documentId}}");
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

**documentId:** `string` — The unique identifier for an existing document.

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

## Form1099K

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

Creates a 1099-K document and subsequently kicks off a TIN verification, if the name and TIN combo has not been used before.

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
    "Idempotency-Key": "9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08",
    filingYear: 2023,
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

**request:** `Abound.Form1099KRequestSchema`

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
await client.form1099K.mail("{{documentId}}", {
    "Idempotency-Key": "9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08",
    body: {
        to: {},
        from: {},
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

**documentId:** `string` — The unique identifier for an existing document.

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
await client.form1099K.file("{{documentId}}", {
    "Idempotency-Key": "9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08",
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

**documentId:** `string` — The unique identifier for an existing document.

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
await client.form1099K.correct("{{documentId}}", {
    "Idempotency-Key": "9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08",
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

**documentId:** `string` — The unique identifier for an existing document.

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
await client.form1099K.void("{{documentId}}", {
    "Idempotency-Key": "9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08",
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

**documentId:** `string` — The unique identifier for an existing document.

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
await client.form1099K.retrieve("{{documentId}}");
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

**documentId:** `string` — The unique identifier for an existing document.

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

Deletes a 1099-K document. Once an action (`/mail`, `/file`, `/correct`, `/void`) has been executed on a 1099-K, it cannot be deleted.

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
await client.form1099K.delete("{{documentId}}");
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

**documentId:** `string` — The unique identifier for an existing document.

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

## Form1099Nec

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

Creates a 1099-NEC document and subsequently kicks off a TIN verification, if the name and TIN combo has not been used before.

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
    "Idempotency-Key": "9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08",
    filingYear: 2023,
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

**request:** `Abound.Form1099NecRequestSchema`

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
await client.form1099Nec.mail("{{documentId}}", {
    "Idempotency-Key": "9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08",
    body: {
        to: {},
        from: {},
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

**documentId:** `string` — The unique identifier for an existing document.

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
await client.form1099Nec.file("{{documentId}}", {
    "Idempotency-Key": "9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08",
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

**documentId:** `string` — The unique identifier for an existing document.

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
await client.form1099Nec.correct("{{documentId}}", {
    "Idempotency-Key": "9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08",
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

**documentId:** `string` — The unique identifier for an existing document.

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
await client.form1099Nec.void("{{documentId}}", {
    "Idempotency-Key": "9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08",
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

**documentId:** `string` — The unique identifier for an existing document.

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
await client.form1099Nec.retrieve("{{documentId}}");
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

**documentId:** `string` — The unique identifier for an existing document.

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

Deletes a 1099-NEC document. Once an action (`/mail`, `/file`, `/correct`, `/void`) has been executed on a 1099-NEC, it cannot be deleted.

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
await client.form1099Nec.delete("{{documentId}}");
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

**documentId:** `string` — The unique identifier for an existing document.

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

## FormW8Ben

<details><summary><code>client.formW8Ben.<a href="/src/api/resources/formW8Ben/client/Client.ts">list</a>({ ...params }) -> unknown[]</code></summary>
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

<details><summary><code>client.formW8Ben.<a href="/src/api/resources/formW8Ben/client/Client.ts">create</a>({ ...params }) -> unknown</code></summary>
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
    key: "value",
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

**request:** `unknown`

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

<details><summary><code>client.formW8Ben.<a href="/src/api/resources/formW8Ben/client/Client.ts">retrieve</a>(documentId) -> unknown</code></summary>
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
await client.formW8Ben.retrieve("string");
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

**documentId:** `string` — The unique identifier for an existing document.

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

## W8BenE

<details><summary><code>client.w8BenE.<a href="/src/api/resources/w8BenE/client/Client.ts">list</a>({ ...params }) -> Abound.W8BenESchema[]</code></summary>
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
await client.w8BenE.list();
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

**request:** `Abound.W8BenEListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `W8BenE.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.w8BenE.<a href="/src/api/resources/w8BenE/client/Client.ts">create</a>({ ...params }) -> Abound.W8BenESchema</code></summary>
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
await client.w8BenE.create({
    "Idempotency-Key": "9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08",
    body: {
        id: "documentId_sampleGyuBXlfAwo",
        createdAt: new Date("2024-01-01T00:00:00.000Z"),
        expiresAt: new Date("2028-01-01T00:00:00.000Z"),
        url: "https://tax-documents-sandbox.s3.us-west-2.amazonaws.com/documents/FORM-W-8BEN-E.pdf",
        formFields: {},
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

**request:** `Abound.W8BenECreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `W8BenE.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.w8BenE.<a href="/src/api/resources/w8BenE/client/Client.ts">get</a>(documentId) -> Abound.W8BenESchema</code></summary>
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
await client.w8BenE.get("{{documentId}}");
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

**documentId:** `string` — The unique identifier for an existing document.

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `W8BenE.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## FormW9

<details><summary><code>client.formW9.<a href="/src/api/resources/formW9/client/Client.ts">list</a>({ ...params }) -> unknown[]</code></summary>
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

<details><summary><code>client.formW9.<a href="/src/api/resources/formW9/client/Client.ts">create</a>({ ...params }) -> unknown</code></summary>
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
    "Idempotency-Key": "string",
    payee: {
        name: "string",
        name2: "string",
        tin: "string",
        address: "string",
        address2: "string",
        city: "string",
        state: "string",
        postalCode: "string",
        country: "string",
    },
    payer: {
        name: "string",
        name2: "string",
        tin: "string",
        phoneNumber: "string",
        address: "string",
        address2: "string",
        city: "string",
        state: "string",
        postalCode: "string",
        country: "string",
    },
    formFields: {
        taxClassification: Abound.W9FormFieldsSchemaFormFieldsTaxClassification.Individual,
        otherTaxClassification: "string",
        hasIndirectForeignOwnership: true,
        exemptPayeeCode: Abound.W9FormFieldsSchemaFormFieldsExemptPayeeCode.One,
        exemptFatcaCode: Abound.W9FormFieldsSchemaFormFieldsExemptFatcaCode.A,
        accountNumbers: ["string"],
        isSubjectToBackupWithholding: true,
        certifiedAt: new Date("2024-01-15T09:30:00.000Z"),
        electronicSignature: {
            signature: "string",
            printedName: "string",
            signedAt: new Date("2024-01-15T09:30:00.000Z"),
            ipAddress: "string",
        },
    },
    userId: "string",
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

**request:** `Abound.W9RequestSchema`

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

<details><summary><code>client.formW9.<a href="/src/api/resources/formW9/client/Client.ts">retrieve</a>(documentId) -> unknown</code></summary>
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
await client.formW9.retrieve("string");
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

**documentId:** `string` — The unique identifier for an existing document.

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
await client.mailings.retrieve("{{mailingId}}");
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

**mailingId:** `string` — The unique identifier for this mailing.

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
await client.mailings.update("{{mailingId}}", {
    "Idempotency-Key": "9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08",
    body: {
        to: {},
        from: {},
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

**mailingId:** `string` — The unique identifier for this mailing.

</dd>
</dl>

<dl>
<dd>

**request:** `Abound.MailingsUpdateRequest`

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
await client.mailings.delete("{{mailingId}}");
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

**mailingId:** `string` — The unique identifier for this mailing.

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

Returns a list of TIN verifications. Up to 100 TIN verifications are returned per request.

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

Creates an asynchronous TIN verification.

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
    "Idempotency-Key": "9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08",
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

**request:** `Abound.TinVerificationsCreateRequest`

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

Retrieves the details of an existing TIN verification.

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
await client.tinVerifications.retrieve("{{tinVerificationId}}");
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

**tinVerificationId:** `string` — The unique identifier for an existing TIN verification.

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
    "Idempotency-Key": "9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08",
    body: {},
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
await client.users.retrieve("{{userId}}");
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

**userId:** `string` — The unique identifier for a single end-user of your application.

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
await client.users.update("{{userId}}", {});
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

**userId:** `string` — The unique identifier for a single end-user of your application.

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
