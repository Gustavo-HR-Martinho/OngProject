# OngProject - Backend

## Install:

```
  yarn install
```

## Run server:

The server listens to port `3333`

```
  yarn dev
```

## Reset database:

1. Delete database file on `/src/database/database.sqlite`
2. Run `yarn typeorm migration:run` to create new database file.
3. Check if the new file was created where you deleted the old one.

## Routes:

### Get:

- Get all ongs: `/ongs`

  ```json
    No body
  ```

- Get ongs by category: `/ongs`
  ```json
    Body:
    {
      "category": "string"
    }
  ```

### Post:

- Authenticate user: `/login` (Retuns auth token)

  ```json
    Body:
    {
      "email": "string",
      "password": "string"
    }
  ```

- Create user: `/users`

  ```json
    Body:
    {
      "username": "string",
      "email": "string",
      "password": "string",
      "usertype": "string: owner||admin||standart"
    }
  ```

- Create ong: `/ongs` (You must pass the auth token)
  ```json
    Body:
    {
      "ongname": "string",
      "description": "string",
      "address": "string",
      "city": "string",
      "state": "string",
      "contactPhone": "string",
      "contactEmail": "string",
      "category": "string",
      "ongPP": "url"
    }
  ```
