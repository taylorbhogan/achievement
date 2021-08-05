# Achievement
![Screen Shot 2021-08-05 at 1 23 55 PM](https://user-images.githubusercontent.com/79616733/128416175-0a2e525e-ee20-4de1-9f4d-d6b927fcd775.png)

## [Live Link](https://achievement-by-taylorbhogan.herokuapp.com/)

## Technologies

* React.js
* Redux
* JavaScript
* Python
* Flask
* SQLAlchemy
* Alembic
* PostgreSQL
* Vanilla CSS

## What is it?

Achievement is an extremely simple app designed to help and inspire you to integrate good habits into your life.

## Developing

### What you'll need on your machine:
* PostgreSQL
* Pipenv with Python v3.8
* Node.js
1. ```git clone``` this repo
2. ```cd``` into your local repo
3. Run ```pipenv install -r --dev dev-requirements.txt && pipenv install -r requirements.txt```
4. Create your own ```.env``` file based on the provided ```.env.example```.
5. Create a user and database in your PostgreSQL, ensuring it matches your ```.env``` configuration
6. Run ```pipenv shell``` to activate the Pipenv environment.
7. Run ```flask db upgrade``` and then ```flask seed all``` to apply migrations and seed data to your database.
8. Open a second terminal window and cd into the local repo, then cd into ```react-app```
9. Run ```npm install```
10. In the terminal running Pipenv shell, run ```flask run```.
11. In the terminal at the ```react-app```, run ```npm start```.
Your app should open in your default browser.
If you are planning on developing, please make a fork and create pull requests as necessary; I'd love to receive your feedback!
