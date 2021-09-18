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

  <b>No body</b>

- Get ongs by category: `/ongs`

  <b>Body:</b>

  ```json
  {
    "category": "string"
  }
  ```

### Post:

- Authenticate user: `/login` (Retuns auth token)

  <b>Body:</b>

  ```json
  {
    "email": "string",
    "password": "string"
  }
  ```

- Create user: `/users`

  <b>Body:</b>

  ```json
  {
    "username": "string",
    "email": "string",
    "password": "string",
    "usertype": "string: owner || admin || standart"
  }
  ```

- Create ong: `/ongs` (You must pass the auth token and be an owner)

  <b>Body:</b>

  ```json
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
