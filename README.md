# feb24-t4w2-express-auth

ExpressJS auth with Mongoose

- Register a user
- Log in a user
- Roles by ID (in lieu of isAdmin)
  
- User model
  - username
  - password
- Role model
  - name


## Routes:

- localhost:3000/signup
  - POST
  - username, password
  - create a new user
  - returns a jwt
- localhost:3000/login
  - POST
  - username, password
  - checks provided data against database
  - returns a JWT
- localhost:3000/users/:userID
  - requires a valid JWT
  - gets oen user and returns it
- localhost:3000/users/refresh
  - POST
  - requires a valid JWT header
  - checks a JWT and provides a new one if it's valid
  - returns a JWT