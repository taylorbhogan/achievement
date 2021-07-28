from flask import Blueprint, request
from app.forms import HabitForm
from app.models import db, Habit
from app.helpers import validation_errors_to_error_messages


habit_routes = Blueprint('habits', __name__)

@habit_routes.route('users/<int:id>')
def get_habits(id):
    """
    Retrieves all of a user's habits
    """
    habits = Habit.query.filter(Habit.user_id == id).all()
    return {habit.id: habit.to_dict() for habit in habits}

@habit_routes.route('/<int:id>', methods=['PUT'])
def habit_by_id(habit_id):
    """
    Interact with a single existing habit
    """
    habit = Habit.query.get(habit_id)
    if request.method == 'PUT':
        form = HabitForm()
        form['csrf_token'].data = request.cookies['csrf_token']
        if form.validate_on_submit():
            form.populate_obj(habit)
            db.session.commit()
            return habit.to_dict()
        return {'errors': validation_errors_to_error_messages(form.errors)}


@habit_routes.route('', methods=['POST'])
def create_habit():
    """
    Creates a new habit
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
