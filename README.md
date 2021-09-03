# Achievement

Achievement is a minimalist habit tracker that allows you to view your achievement over time with GitHub green garden-style visuals.

![Screen Shot 2021-08-05 at 1 23 55 PM](https://user-images.githubusercontent.com/79616733/128416175-0a2e525e-ee20-4de1-9f4d-d6b927fcd775.png)

## Check out the live site here: [Achievement](https://achievement-by-taylorbhogan.herokuapp.com/)

## Technologies Used

* React.js
* Redux
* JavaScript
* Python
* Flask
* SQLAlchemy
* Alembic
* PostgreSQL
* Vanilla CSS

# Features

Achievement users are able to:

* Create an account
* Log in and log out
* Log their achievements with a single click
* View their progress over time across different time ranges
* Create, edit, and delete the habits they'd like to track

# Key Components

## User Authentication

User passwords are hashed using [Werkzeug](https://pypi.org/project/Werkzeug/) before being stored in the database. Logging in and out is managed by [Flask-Login](https://flask-login.readthedocs.io/en/latest/). 

## Checking in

The Achievement home page features an week's worth of color-changing buttons that a user can click to log their achievements. 

The user can also use an unobtrusive menu to create a new habit to track.

## Viewing progress

At any time, the user can navigate to the Reflect page, where they can render a number of views displaying their progress towards their goals over time.

## Admin

A user can easily edit or delete habits and achievements from the Habit Log and Achievement Log.

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
