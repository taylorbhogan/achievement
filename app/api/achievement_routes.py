# from datetime import date, datetime, timezone, time, timedelta
from flask import Blueprint, request
from app.forms import AchievementForm
from app.models import db, Achievement, Habit
from app.helpers import validation_errors_to_error_messages

achievement_routes = Blueprint('achievements', __name__)

# @achievement_routes.route('users/<int:id>/week')
# def add_week_habit_checks(id):
#     """
#     Attaches boolean values to the user's habits
#     """
#     habits = Habit.query.filter(Habit.user_id == id).all()
#     collector = []
#     saturday_start = datetime.combine(datetime.today(), time.min)
#     friday_start = saturday_start - timedelta(days=1)
#     thursday_start = saturday_start - timedelta(days=2)
#     wednesday_start = saturday_start - timedelta(days=3)
#     tuesday_start = saturday_start - timedelta(days=4)
#     monday_start = saturday_start - timedelta(days=5)
#     sunday_start = saturday_start - timedelta(days=6)

#     for habit in habits:
#         h = habit.to_dict()
#         print('-----------------h----------',h)
#         h['sunday'] = False
#         h['monday'] = False
#         h['tuesday'] = False
#         h['wednesday'] = False
#         h['thursday'] = False
#         h['friday'] = False
#         h['saturday'] = False
#         # achievements = Achievement.query.filter(Achievement.habit_id == habit.id).all()
#         for a in h['achievements']:
#             # achieve = a.to_dict()
#             # achieve['habit_name'] = habit.name
#             # print('----------achieve----------',achieve)
#             # collector.append(achieve)
#             if a['created_at'] > saturday_start:
#                 h['saturday'] = True
#             if a['created_at'] > friday_start and a['created_at'] < saturday_start:
#                 h['friday'] = True
#             if a['created_at'] > thursday_start and a['created_at'] < friday_start:
#                 h['thursday'] = True
#             if a['created_at'] > wednesday_start and a['created_at'] < thursday_start:
#                 h['wednesday'] = True
#             if a['created_at'] > tuesday_start and a['created_at'] < wednesday_start:
#                 h['tuesday'] = True
#             if a['created_at'] > monday_start and a['created_at'] < tuesday_start:
#                 h['monday'] = True
#             if a['created_at'] > sunday_start and a['created_at'] < monday_start:
#                 h['sunday'] = True
#         collector.append(h)

#             # print('------SAT T/F--------',a['id'],'-:-',a['created_at'] > saturday_start)
#             # print('------FRI T/F--------',a['id'],'-:-',a['created_at'] > friday_start and a['created_at'] < saturday_start)
#             # print('------THU T/F--------',a['id'],'-:-',a['created_at'] > thursday_start and a['created_at'] < friday_start)
#             # print('------WED T/F--------',a['id'],'-:-',a['created_at'] > wednesday_start and a['created_at'] < thursday_start)
#             # print('------TUE T/F--------',a['id'],'-:-',a['created_at'] > tuesday_start and a['created_at'] < wednesday_start)
#             # print('------MON T/F--------',a['id'],'-:-',a['created_at'] > monday_start and a['created_at'] < tuesday_start)
#             # print('------SUN T/F--------',a['id'],'-:-',a['created_at'] > sunday_start and a['created_at'] < monday_start)
#             # print('--------created_at------',a['created_at'])

#     return {habit['id']: habit for habit in collector}


@achievement_routes.route('users/<int:id>')
def get_achievements(id):
    """
    Retrieves all of a user's achievements
    """
    habits = Habit.query.filter(Habit.user_id == id).all()
    collector = []
    for habit in habits:
        achievements = Achievement.query.filter(Achievement.habit_id == habit.id).all()
        for a in achievements:
            achieve = a.to_dict()
            # a['habit_name'] = habit.name
            achieve['habit_name'] = habit.name
            collector.append(achieve)

    return {achievement['id']: achievement for achievement in collector}

@achievement_routes.route('', methods=['POST'])
def create_achievement():
    """
    Creates a new achievement
    """
    form = AchievementForm()
    print('hello--------------------',form['habit_id'].data)
    print('hello--------------------',form['is_stellar'].data)
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        achievement = Achievement()
        form.populate_obj(achievement)
        db.session.add(achievement)
        db.session.commit()
        print('-----------------',achievement.to_dict)
        return achievement.to_dict()

    return {'errors': validation_errors_to_error_messages(form.errors)}





@achievement_routes.route('/<int:id>', methods=['GET', 'PUT', 'DELETE'])
def achievement_by_id(id):
    """
    Interact with a single existing achievement
    """
    achievement = Achievement.query.get(id)
    if request.method =='GET':
        return achievement.to_dict()
    elif request.method == 'PUT':
        form = AchievementForm()
        form['csrf_token'].data = request.cookies['csrf_token']
        if form.validate_on_submit():
            form.populate_obj(achievement)
            db.session.commit()
            return achievement.to_dict()
        return {'errors': validation_errors_to_error_messages(form.errors)}
    elif request.method == 'DELETE':
        db.session.delete(achievement)
        db.session.commit()

        # return {"success": f"successful delete of achievement {id}"}
        return {'id': f'{id}'}
    return achievement.to_dict()
