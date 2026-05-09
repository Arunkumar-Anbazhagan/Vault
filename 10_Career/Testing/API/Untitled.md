# Get Pet

## OpenAPI Specification

```yaml
openapi: 3.0.1
info:
  title: ''
  description: ''
  version: 1.0.0
paths:
  /pets/{id}:
    get:
      summary: Get Pet
      deprecated: false
      description: Retrieve detailed information about a specific pet.
      operationId: get-pet
      tags:
        - Modern Pet Store/Pet
        - Pet
      parameters:
        - name: id
          in: path
          description: ''
          required: true
          example: pet_2ZuAAHQ9I7EL1Dpi
          schema:
            type: string
      responses:
        '200':
          description: Successful response with pet details
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Pet'
              example:
                id: pet_1Nv0FGQ9RKHgCVdK
                species: CAT
                name: Whiskers
                breed: Domestic Shorthair
                ageMonths: 18
                size: MEDIUM
                color: Orange Tabby
                gender: MALE
                goodWithKids: true
                goodWithPets: true
                adoptionFee: 75
                description: Friendly and playful orange tabby looking for a loving home
                status: AVAILABLE
                intakeDate: '2024-06-15'
                photos:
                  - >-
                    https://cdn.petstoreapi.com/pets/pet_1Nv0FGQ9RKHgCVdK/photo1.jpg
                  - >-
                    https://cdn.petstoreapi.com/pets/pet_1Nv0FGQ9RKHgCVdK/photo2.jpg
                medicalInfo:
                  spayedNeutered: true
                  vaccinated: true
                  microchipped: true
                  specialNeeds: false
                links:
                  self: https://api.petstoreapi.com/v1/pets/pet_1Nv0FGQ9RKHgCVdK
                  adopt: https://api.petstoreapi.com/v1/adoptions
          headers:
            RateLimit-Limit:
              schema:
                type: string
            RateLimit-Remaining:
              schema:
                type: string
            RateLimit-Reset:
              schema:
                type: string
          x-apidog-name: OK
        '404':
          description: Resource not found
          content:
            application/json:
              schema: &ref_0
                $ref: '#/components/schemas/Error'
              example:
                type: https://petstoreapi.com/errors/not-found
                title: Not Found
                status: 404
                detail: The requested pet with ID '123' was not found.
                instance: /pets/123
          headers: {}
          x-apidog-name: Bad Request
        '429':
          description: Too many requests - Rate limit exceeded
          content:
            application/json:
              schema: *ref_0
              example:
                type: https://petstoreapi.com/errors/rate-limit-exceeded
                title: Too Many Requests
                status: 429
                detail: >-
                  Rate limit exceeded. Please wait 60 seconds before making
                  another request.
          headers:
            RateLimit-Limit:
              schema:
                type: string
            RateLimit-Remaining:
              example: 0
              schema:
                type: integer
            RateLimit-Reset:
              schema:
                type: string
            Retry-After:
              example: 60
              description: Number of seconds to wait before retrying
              schema:
                type: integer
          x-apidog-name: Unauthorized
      security: []
      x-codeSamples:
        - lang: TypeScript
          label: TypeScript SDK
          source: >-
            import { PetStoreAPI } from '@petstoreapi/sdk';


            const client = new PetStoreAPI({
              apiKey: process.env.PETSTORE_API_KEY
            });


            const pet = await client.pets.get('pet_1Nv0FGQ9RKHgCVdK');

            console.log(`Found ${pet.name}, a ${pet.age_months}-month-old
            ${pet.species}`);
        - lang: Python
          label: Python
          source: >-
            from petstore import PetStoreAPI


            client = PetStoreAPI(api_key=os.environ['PETSTORE_API_KEY'])


            pet = client.pets.get('pet_1Nv0FGQ9RKHgCVdK')

            print(f"Found {pet.name}, a {pet.age_months}-month-old
            {pet.species}")
        - lang: JavaScript
          label: JavaScript (Fetch)
          source: >-
            const response = await fetch(
              'https://api.petstoreapi.com/v1/pets/pet_1Nv0FGQ9RKHgCVdK',
              {
                headers: {
                  'Accept': 'application/json'
                }
              }
            );


            const pet = await response.json();

            console.log(`Found ${pet.name}, a ${pet.age_months}-month-old
            ${pet.species}`);
        - lang: Shell
          label: cURL
          source: >-
            curl -X GET
            'https://api.petstoreapi.com/v1/pets/pet_1Nv0FGQ9RKHgCVdK' \
              -H 'Accept: application/json'
      x-apidog-folder: Modern Pet Store/Pet
      x-apidog-status: released
      x-run-in-apidog: https://app.apidog.com/web/project/1138249/apis/api-24858802-run
components:
  schemas:
    Pet:
      type: object
      description: Animal information in the pet store available for adoption.
      required:
        - id
        - species
        - name
        - ageMonths
        - adoptionFee
        - status
      properties:
        id:
          type: string
          pattern: ^pet_[A-Za-z0-9]{16}$
          readOnly: true
          description: Unique identifier for the pet
          examples:
            - pet_1Nv0FGQ9RKHgCVdK
            - pet_2Mx1EHR8SLIfDWeL
        species:
          type: string
          enum:
            - DOG
            - CAT
            - RABBIT
            - BIRD
            - REPTILE
            - OTHER
          description: The species of the pet
        name:
          type: string
          minLength: 1
          maxLength: 50
          description: The pet's name
          examples:
            - Whiskers
            - Max
            - Luna
        breed:
          type: string
          description: The breed of the pet
          examples:
            - Domestic Shorthair
            - Labrador Retriever
            - Holland Lop
        ageMonths:
          type: integer
          minimum: 0
          description: Age of the pet in months
          examples:
            - 18
            - 36
            - 6
        size:
          type: string
          enum:
            - SMALL
            - MEDIUM
            - LARGE
          description: Size category of the pet
        color:
          type: string
          description: Primary color or coloring pattern
          examples:
            - Orange Tabby
            - Black
            - Brown and White
        gender:
          type: string
          enum:
            - MALE
            - FEMALE
            - UNKNOWN
          description: The pet's gender
        goodWithKids:
          type: boolean
          description: Whether the pet is good with children
        goodWithPets:
          type: boolean
          description: Whether the pet is good with other pets
        adoptionFee:
          type: number
          format: double
          minimum: 0
          description: Adoption fee in USD
          examples:
            - 75
            - 150
            - 50
        description:
          type: string
          description: Detailed description of the pet's personality and traits
        status:
          type: string
          enum:
            - AVAILABLE
            - PENDING
            - ADOPTED
            - NOT_AVAILABLE
          description: Current adoption status
        intakeDate:
          type: string
          format: date
          readOnly: true
          description: Date the pet was taken into the shelter
        photos:
          type: array
          items:
            type: string
            format: uri
          description: URLs of pet photos
          minItems: 0
        medicalInfo:
          type: object
          properties:
            spayedNeutered:
              type: boolean
              description: Whether the pet has been spayed or neutered
            vaccinated:
              type: boolean
              description: Whether the pet is up to date on vaccinations
            microchipped:
              type: boolean
              description: Whether the pet has a microchip
            specialNeeds:
              type: boolean
              description: Whether the pet has special medical needs
            notes:
              type: string
              description: Additional medical notes
          unevaluatedProperties: false
          x-apidog-orders:
            - spayedNeutered
            - vaccinated
            - microchipped
            - specialNeeds
            - notes
          x-apidog-ignore-properties: []
        links:
          type: object
          readOnly: true
          properties:
            self:
              type: string
              format: uri
              description: Link to this pet resource
            adopt:
              type: string
              format: uri
              description: Link to create an adoption application
          required:
            - self
          unevaluatedProperties: false
          x-apidog-orders:
            - self
            - adopt
          x-apidog-ignore-properties: []
      unevaluatedProperties: false
      x-apidog-orders:
        - id
        - species
        - name
        - breed
        - ageMonths
        - size
        - color
        - gender
        - goodWithKids
        - goodWithPets
        - adoptionFee
        - description
        - status
        - intakeDate
        - photos
        - medicalInfo
        - links
      x-apidog-ignore-properties: []
      x-apidog-folder: ''
    Error:
      type: object
      description: RFC 9457 Problem Details for HTTP APIs
      required:
        - type
        - title
        - status
      properties:
        type:
          type: string
          format: uri
          description: A URI reference that identifies the problem type
          examples:
            - https://petstoreapi.com/errors/not-found
            - https://petstoreapi.com/errors/validation-error
        title:
          type: string
          description: A short, human-readable summary of the problem
          examples:
            - Resource Not Found
            - Validation Error
        status:
          type: integer
          description: The HTTP status code
          examples:
            - 404
            - 400
            - 422
        detail:
          type: string
          description: A human-readable explanation specific to this occurrence
          examples:
            - The requested pet with ID '123' was not found
        instance:
          type: string
          format: uri
          description: A URI reference that identifies the specific occurrence
          examples:
            - /v1/pets/123
        errors:
          type: array
          description: Detailed validation errors (for 422 responses)
          items:
            type: object
            required:
              - field
              - message
            properties:
              field:
                type: string
                description: The field that failed validation
              message:
                type: string
                description: Description of the validation error
              code:
                type: string
                description: Machine-readable error code
            unevaluatedProperties: false
            x-apidog-orders:
              - field
              - message
              - code
            x-apidog-ignore-properties: []
      unevaluatedProperties: false
      x-apidog-orders:
        - type
        - title
        - status
        - detail
        - instance
        - errors
      x-apidog-ignore-properties: []
      x-apidog-folder: ''
  securitySchemes:
    bearer_token:
      scheme: bearer
      type: bearer
    petstore_auth:
      type: oauth2
      flows:
        implicit:
          authorizationUrl: https://petstore.swagger.io/oauth/authorize
          scopes:
            read:pets: read your pets
            write:pets: modify pets in your account
    oauth2:
      type: oauth2
      description: >-
        OAuth 2.0 authorization with multiple flows including device
        authorization for IoT devices and smart TVs
      flows:
        authorizationCode:
          authorizationUrl: https://auth.petstoreapi.com/authorize
          tokenUrl: https://auth.petstoreapi.com/token
          refreshUrl: https://auth.petstoreapi.com/refresh
          scopes:
            read:pets: Read pet information
            write:pets: Create and update pets
            read:orders: Read order information
            write:orders: Create and manage orders
            read:user: Read user profile
            write:user: Update user profile
            chat:write: Access AI chat completions
        deviceCode:
          deviceAuthorizationUrl: https://auth.petstoreapi.com/device/authorize
          tokenUrl: https://auth.petstoreapi.com/token
          refreshUrl: https://auth.petstoreapi.com/refresh
          scopes:
            read:pets: Read pet information
            chat:write: Access AI chat completions
    bearerAuth:
      type: jwt
      scheme: bearer
      bearerFormat: JWT
      description: >-
        Bearer token authentication using JWT (JSON Web Token). Include the
        token in the Authorization header as: `Authorization: Bearer <token>`
servers:
  - url: ''
    description: Cloud Mock
  - url: https://api.petstoreapi.com/v1
    description: Production server
  - url: https://sandbox.petstoreapi.com/v1
    description: Sandbox server for testing
security: []

```