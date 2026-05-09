---
title: "What are Responses in an API?"
source: "https://academy.apidog.com/what-are-responses-in-an-api-1807849m0"
author:
published:
created: 2026-05-09
description: "What are Responses in an API? - API Academy"
tags:
  - "clippings"
---
nce you send an API request, the next step is understanding the **response**. The response tells you whether your request succeeded and (if it did) returns the data you asked for.

Learning how to read responses is essential for debugging, building applications, and understanding how APIs behave.

In this article, we’ll use the **Petstore API** to explain how to interpret response structure, status codes, and response bodies.

---

## 1\. What Is an API Response?

An API response consists of three main parts:

1.

**Status Code**

2.

**Headers**

3.

**Body (usually JSON)**

Example:

```
HTTP/1.1 200 OK
Content-Type: application/json
```

```
{
  "id": "pet_1Nv0FGQ9RKHgCVdK",
  "name": "Fluffy",
  "species": "DOG",
  "status": "AVAILABLE"
}
```

Each part provides different information about the result of your request.

---

## 2\. Status Code — The First Thing to Check

The **HTTP status code** tells you whether the request worked.

The most important and most common code is:

### 200 OK

This means:

Your request succeeded

The server returned the expected data

You can trust the response body

Other common status codes include:

| Code | Meaning | When It Happens |
| --- | --- | --- |
| **400 Bad Request** | Your request is invalid | Missing fields, wrong types |
| **401 Unauthorized** | Authentication failed | Missing/invalid token |
| **404 Not Found** | Resource does not exist | Wrong ID or path |
| **500 Server Error** | Problem on server side | Unrelated to your request |

When reading API docs, look for:

Which status codes you should expect

Whether the API uses different bodies for different codes

---

## 3\. Response Headers (For Metadata)

Headers describe the response itself, not the data. Common headers include:

`Content-Type: application/json` → tells you the format

`Date:` → server timestamp

`RateLimit-Remaining:` → how many requests you have left

These can be useful but are usually less important than the response body for beginners.

---

## 4\. Response Body — The Actual Data

Most modern APIs return their **response body as JSON**.  
This is where the actual data lives.

Example response body from [Get a pet](https://academy.apidog.com/get-a-pet-24858802e0):

```
{
  "id": "pet_1Nv0FGQ9RKHgCVdK",
  "name": "Fluffy",
  "species": "DOG",
  "breed": "Golden Retriever",
  "ageMonths": 24,
  "status": "AVAILABLE",
  "photos": [
    "https://cdn.petstoreapi.com/pets/pet_1Nv0FGQ9RKHgCVdK/photo1.jpg"
  ]
}
```

To understand this body, you should compare it to the API’s **response schema**.

---

## 5\. Matching Response Body to the Schema

Good API docs define a response schema that describes:

Field names

Types (`string`, `number`, `object`, `array`)

Required / optional

Nested structure

Example Petstore schema:

Pet

Animal information in the pet store available for adoption.

id

string

read-onlyrequired

Unique identifier for the pet

Examples:

pet\_1Nv0FGQ9RKHgCVdKpet\_2Mx1EHR8SLIfDWeL

Match pattern:

^pet\_\[A-Za-z0-9\]{16}$

species

enum<string>

required

The species of the pet

Allowed values:

DOGCATRABBITBIRDREPTILEOTHER

name

string

required

The pet's name

\>= 1 characters<= 50 characters

Examples:

WhiskersMaxLuna

breed

string

optional

The breed of the pet

Examples:

Domestic ShorthairLabrador RetrieverHolland Lop

ageMonths

integer

required

Age of the pet in months

\>= 0

Examples:

18366

size

enum<string>

optional

Size category of the pet

Allowed values:

SMALLMEDIUMLARGE

color

string

optional

Primary color or coloring pattern

Examples:

Orange TabbyBlackBrown and White

gender

enum<string>

optional

The pet's gender

Allowed values:

MALEFEMALEUNKNOWN

goodWithKids

boolean

optional

Whether the pet is good with children

goodWithPets

boolean

optional

Whether the pet is good with other pets

adoptionFee

number <double>

required

Adoption fee in USD

\>= 0

Examples:

7515050

description

string

optional

Detailed description of the pet's personality and traits

status

enum<string>

required

Current adoption status

Allowed values:

AVAILABLEPENDINGADOPTEDNOT\_AVAILABLE

intakeDate

string <date>

read-onlyoptional

Date the pet was taken into the shelter

photos

array\[string <uri>\]

optional

URLs of pet photos

\>= 0 items

medicalInfo

object

optional

spayedNeutered

boolean

optional

Whether the pet has been spayed or neutered

vaccinated

boolean

optional

Whether the pet is up to date on vaccinations

microchipped

boolean

optional

Whether the pet has a microchip

speciaeeds

boolean

optional

Whether the pet has special medical needs

notes

string

optional

Additional medical notes

links

object

read-onlyoptional

self

string <uri>

required

Link to this pet resource

adopt

string <uri>

optional

Link to create an adoption application

By comparing the response to this table, you can confirm:

The API returned all required fields

Types match

The data structure is correct

If anything doesn’t match, your application may break — which is why schemas are so important.

---

## 6\. Example: Get a pet

**Request**

```
GET /pets/pet_1Nv0FGQ9RKHgCVdK
```

**Successful Response**

```
HTTP/1.1 200 OK
```

```
{
  "id": "pet_1Nv0FGQ9RKHgCVdK",
  "name": "Fluffy",
  "species": "DOG",
  "status": "AVAILABLE"
}
```

**Example Error: Pet Not Found**

```
HTTP/1.1 404 Not Found
```

```
{
  "code": 1,
  "type": "error",
  "message": "Pet not found"
}
```

Seeing different response structures for different status codes is common.  
This is why API docs usually include both **success** and **error** examples.

---

## 7\. Key Takeaways

**200 OK** is the most important success code.

The response body (usually JSON) contains the actual data you are interested in.

Use the **response schema** to understand and validate the structure.

Knowing how to read responses helps you build reliable applications and debug issues quickly.

---

Now that you know how to read and understand API responses, you’ll be able to work with API data more confidently and troubleshoot issues as they come up. In the next section, we’ll introduce the [OAS(OpenAPI Specification)](https://academy.apidog.com/what-is-an-api-specification-what-is-oasopenapi-specification-1808127m0) —a powerful standard for describing APIs—that makes exploring, testing, and documenting APIs much easier.

Modified at 3 months ago