# Mongo User Backend
Some simple user API created using Typescript, Express.JS and MongoDB (Mongoose for the interface).

## Endpoints

### `POST /user/token`
- Request body (`form-data`):
  ```
  username: USERNAME
  password: PASSWORD
  ```
- Response body (status `200`):
  ```json
  {
    "token": "<TOKEN>"
  }
  ```
- Throws:
  - `400` for missing `username` or `password` fields in the body
  - `401` for incorrect credentials

### `POST /user/create`
- Request body (`form-data`):
  ```
  username: USERNAME
  password: PASSWORD
  ```
- Response body (status `200`):
  ```json
  {
    "id": "<USER_ID>",
    "username": "<USERNAME>"
  }
  ```
- Throws:
  - `400` for missing `username` or `password` fields in the body
  - `409` for if the user account already exists

### `DELETE /user/delete`
- Request body (`form-data`):
  ```
  username: USERNAME
  password: PASSWORD
  ```
- Response body (status `200`):
  ```json
  {
    "deleted": "<BOOLEAN>",
    "username": "<USERNAME>"
  }
  ```
- Throws:
  - `400` for missing `username` or `password` fields in the body
  - `404` for if the user doesn't exist

### `POST /user/logoff`
- Request body (`form-data`):
  ```
  token: TOKEN
  ```
- Response body (status `200`):
  ```json
  {
    "discontinued": "<BOOLEAN>",
  }
  ```
- Throws:
  - `400` for missing `token` field in the body