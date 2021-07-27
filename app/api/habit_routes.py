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
        habit = Habit(
            user_id = form.data['user_id'],
            name = form.data['name'],
            blurb = form.data['blurb'],
            stellar_blurb = form.data['stellar_blurb'],
            target = form.data['target'],
        )
        db.session.add(habit)
        db.session.commit()

        dbHabit = Habit.query.get(habit.id)
        newHabit = dbHabit.to_dict()
        return{'newHabit': newHabit}
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401
