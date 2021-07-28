from flask import Blueprint, request
from app.forms import HabitForm
from app.models import db, Habit


habit_routes = Blueprint('habits', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Transforms the WTForms validation errors into a list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages


@habit_routes.route('', methods=['POST'])
def create_habit():
    """
    Creates a habit in the database
    """
    form = HabitForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    form['user_id'].data = request.json['habit']['user_id']
    form['name'].data = request.json['habit']['name']
    form['blurb'].data = request.json['habit']['blurb']
    form['stellar_blurb'].data = request.json['habit']['stellar_blurb']
    form['target'].data = request.json['habit']['target']

    if form.validate_on_submit():
        habit = Habit(
            user_id = request.json['habit']['user_id'],
            name = request.json['habit']['name'],
            blurb = request.json['habit']['blurb'],
            stellar_blurb = request.json['habit']['stellar_blurb'],
            target = request.json['habit']['target'],
        )
        db.session.add(habit)
        db.session.commit()

        return habit.to_dict()

    return {'errors': validation_errors_to_error_messages(form.errors)}


# @habit_routes.route('', methods=['POST'])
# def create_habit():
#     """
#     Creates a habit in the database
#     """
#     form = HabitForm()
#     form['csrf_token'].data = request.cookies['csrf_token']
#     if form.validate_on_submit():
#         habit = Habit()
#         form.populate_obj(habit)
#         db.session.add(habit)
#         db.session.commit()

#         return habit.to_dict()

#     return {'errors': validation_errors_to_error_messages(form.errors)}, 401
