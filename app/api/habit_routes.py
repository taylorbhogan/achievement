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
    if form.validate_on_submit():
        # habit = Habit(
        #     user_id = form.user_id.data,
        #     name = form.name.data,
        #     blurb = form.blurb.data,
        #     stellar_blurb = form.stellar_blurb.data,
        #     target = form.target.data,
        # )
        habit = Habit()
        form.populate_obj(habit)
        db.session.add(habit)
        db.session.commit()

        return habit.to_dict()

    return {'errors': validation_errors_to_error_messages(form.errors)}
