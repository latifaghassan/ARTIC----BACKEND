# ARTIC (BACKEND BLUEPRINT)

### BACKEND ESSENTIAL COMMANDS :

<br>
1- `touch server.js / app.js`

2- `npm init -y` ( to initialize our repo and create package.json file)

3- `npm i express cors axios (superagent) dotenv mongoose`

4- `touch gitignore` (put inside it node_modules + .env)

5- npm i nodemon

---

## BACKEND TO DO LIST :

<br>

1- Include our require installed packages.

2- Initialize the server packages.

3- Define the port.

4- Define our middleware.

5- Enable cors

6- Enable JSON data.

7- Define our routes , Proof of life endpoint

8- Use mongoose , Require monogoose.

9- Check if the server is working.

10- Draw our general models.

11- Define our CRUD application.

12- Draw our Mongo Schemes and models.

---

## BACKEND FEATURE REQUOREMENTS :

<br>

- Get information from the API, select only the following:

1- ART Piece name.

2- Art Piece Thumbnail.

3- Art Piece Artist / Author.

4- Art Piece Credit Line.

- Send back to the user when they request the endpoint `/art/` with the method `get` to recieve the mentioned information above.

- Create a CRUD endpoints for our backend application that will do the following operations:

1- POST endpoint to create a new favourite art item in our DB.

2- GET endpoint to retrive our favourite pieces of art.

3- DELETE endpoint to delete a favourite item from our DB

4- PUT endpoint to update certain information about our favourtie item pieces.

- Define a Schema models for out DATA that will be saved in our Mongo DB.
