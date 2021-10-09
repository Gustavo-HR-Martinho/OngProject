# OngProject - Backend

## <b>Install</b>:

```
  yarn install
```

## <b>Run server:</b>

The server listens to port `3333`

```
  yarn dev
```

## <b>Reset database:</b>

1. Delete database file on `/src/database/database.sqlite`
2. Run `yarn typeorm migration:run` to create new database file.
3. Check if the new file was created where you deleted the old one.

## <b>Routes:</b>

### <b>Get:</b>

- Get all ongs: `/ongs`

  <b>No body</b>

- Get ongs by category: `/ongs?category=CATEGORY_NAME`

  <b>No body</b>

- Get ongs by owner: `/ongs?owner=OWNER_ID`

  <b>No body</b>

### <b>Post:</b>

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
    "address": "string",
    "contactPhone": "string",
    "contactEmail": "string",
    "category": "string",
    "ongPP": "url"
  }
  ```

### <b>Delete:</b>

- Delete ong: `/ongs` (You must pass the auth token and be an owner)

  <b>Body:</b>

  ```json
  {
    "ongID": "string"
  }
  ```

### <b>Put:</b>

- Update ong: `/ongs` (You must pass the auth token and be an owner)

  <b>Body:</b>

  ```json
  {
    "ongID": "string",
    "ongname": "string",
    "address": "string",
    "contactPhone": "string",
    "contactEmail": "string",
    "category": "string",
    "ongPP": "url"
  }
  ```
