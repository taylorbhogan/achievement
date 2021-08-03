from flask import Blueprint, request
from app.forms import HabitForm
from app.models import db, Habit, User
from app.helpers import validation_errors_to_error_messages
from datetime import datetime, time, timedelta


habit_routes = Blueprint('habits', __name__)

@habit_routes.route('users/<int:id>')
def get_habits(id):
    """
    Retrieves all of a user's habits
    """
    habits = Habit.query.filter(Habit.user_id == id).all()
    return {habit.id: habit.to_dict() for habit in habits}


@habit_routes.route('users/<int:id>/test')
def test(id):
    habits = Habit.query.filter(Habit.user_id == id).all()
    # print('--------------CHECK-----------------',{habit.to_dict()['id']: habit.to_dict() for habit in habits})
    return {habit.to_dict()['name']: habit.check_all_from_create_date() for habit in habits}




@habit_routes.route('users/<int:id>/all')
def get_all_habits(id):
    """
    Retrieves all of a user's habits
    """
    user = User.query.get(id)
    userDict = user.to_dict()
    today = datetime.today()
    accountBirthday = userDict['created_at']
    [print('-----------------START---------------------')]
    print(today)
    print(accountBirthday)
    delta = today - accountBirthday
    print(delta.days)
    print(range(delta.days))
    print('-----------end-----------',)
    # return {n: True if (-------) else False for n in range(delta.days)}
    # that if:
    # any of that habit's achievements has a created_at between the two midnights


    habits = Habit.query.filter(Habit.user_id == id).all()
    return {habit.id: habit.to_dict() for habit in habits}

@habit_routes.route('users/<int:id>/week')
def add_week_habit_checks(id):
    """
    Attaches boolean values to the user's habits
    """
    # habits = Habit.query.filter(Habit.user_id == id).all()
    habits = Habit.query.filter(Habit.user_id == id).filter(Habit.blurb != 'DELETED').all()
    collector = []
    saturday_start = datetime.combine(datetime.today(), time.min)
    friday_start = saturday_start - timedelta(days=1)
    thursday_start = saturday_start - timedelta(days=2)
    wednesday_start = saturday_start - timedelta(days=3)
    tuesday_start = saturday_start - timedelta(days=4)
    monday_start = saturday_start - timedelta(days=5)
    sunday_start = saturday_start - timedelta(days=6)

    for habit in habits:
        h = habit.to_dict()
        print('-----------------h----------',h)
        h['sunday'] = False
        h['monday'] = False
        h['tuesday'] = False
        h['wednesday'] = False
        h['thursday'] = False
        h['friday'] = False
        h['saturday'] = False
        # achievements = Achievement.query.filter(Achievement.habit_id == habit.id).all()
        for a in h['achievements']:
            # achieve = a.to_dict()
            # achieve['habit_name'] = habit.name
            # print('----------achieve----------',achieve)
            # collector.append(achieve)
            if a['created_at'] > saturday_start:
                h['saturday'] = True
            if a['created_at'] > friday_start and a['created_at'] < saturday_start:
                h['friday'] = True
            if a['created_at'] > thursday_start and a['created_at'] < friday_start:
                h['thursday'] = True
            if a['created_at'] > wednesday_start and a['created_at'] < thursday_start:
                h['wednesday'] = True
            if a['created_at'] > tuesday_start and a['created_at'] < wednesday_start:
                h['tuesday'] = True
            if a['created_at'] > monday_start and a['created_at'] < tuesday_start:
                h['monday'] = True
            if a['created_at'] > sunday_start and a['created_at'] < monday_start:
                h['sunday'] = True
        collector.append(h)

            # print('------SAT T/F--------',a['id'],'-:-',a['created_at'] > saturday_start)
            # print('------FRI T/F--------',a['id'],'-:-',a['created_at'] > friday_start and a['created_at'] < saturday_start)
            # print('------THU T/F--------',a['id'],'-:-',a['created_at'] > thursday_start and a['created_at'] < friday_start)
            # print('------WED T/F--------',a['id'],'-:-',a['created_at'] > wednesday_start and a['created_at'] < thursday_start)
            # print('------TUE T/F--------',a['id'],'-:-',a['created_at'] > tuesday_start and a['created_at'] < wednesday_start)
            # print('------MON T/F--------',a['id'],'-:-',a['created_at'] > monday_start and a['created_at'] < tuesday_start)
            # print('------SUN T/F--------',a['id'],'-:-',a['created_at'] > sunday_start and a['created_at'] < monday_start)
            # print('--------created_at------',a['created_at'])

    return {habit['id']: habit for habit in collector}


@habit_routes.route('/<int:habit_id>', methods=['GET', 'PUT', 'DELETE'])
def habit_by_id(habit_id):
    """
    Interact with a single existing habit
    """
    habit = Habit.query.get(habit_id)
    if request.method =='GET':
        return habit.to_dict()
    elif request.method == 'PUT':
        form = HabitForm()
        form['csrf_token'].data = request.cookies['csrf_token']
        if form.validate_on_submit():
            form.populate_obj(habit)
            db.session.commit()
            return habit.to_dict()
        return {'errors': validation_errors_to_error_messages(form.errors)}
    elif request. method == 'DELETE':
        habit.name = 'DELETED'
        habit.blurb = 'DELETED'
        habit.stellar_blurb = 'DELETED'
        habit.target = 0
        db.session.commit()

        return habit.to_dict()
    return habit.to_dict()







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


@habit_routes.route('users/<int:id>/week2')
def add_week_habit_checks2(id):
    """
    Attaches boolean values to the user's habits
    """
    habits = Habit.query.filter(Habit.user_id == id).filter(Habit.blurb != 'DELETED').all()
    collector = []
    # thursday_start = saturday_start - timedelta(days=2)
    # wednesday_start = saturday_start - timedelta(days=3)
    # tuesday_start = saturday_start - timedelta(days=4)
    # monday_start = saturday_start - timedelta(days=5)
    # sunday_start = saturday_start - timedelta(days=6)

    saturday_start = datetime.combine(datetime.today(), time.min)
    earliest = saturday_start - timedelta(days=6)
    day_before_start = saturday_start - timedelta(days=1)

    for habit in habits:




        h = habit.to_dict()
        h['sunday'] = False
        h['monday'] = False
        h['tuesday'] = False
        h['wednesday'] = False
        h['thursday'] = False
        h['friday'] = False
        h['saturday'] = False
        for a in h['achievements']:
            if a['created_at'] > saturday_start:
                h['saturday'] = True
            if a['created_at'] > friday_start and a['created_at'] < saturday_start:
                h['friday'] = True
            if a['created_at'] > thursday_start and a['created_at'] < friday_start:
                h['thursday'] = True
            if a['created_at'] > wednesday_start and a['created_at'] < thursday_start:
                h['wednesday'] = True
            if a['created_at'] > tuesday_start and a['created_at'] < wednesday_start:
                h['tuesday'] = True
            if a['created_at'] > monday_start and a['created_at'] < tuesday_start:
                h['monday'] = True
            if a['created_at'] > sunday_start and a['created_at'] < monday_start:
                h['sunday'] = True
        collector.append(h)

    return {habit['id']: habit for habit in collector}
