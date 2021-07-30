from flask import Blueprint, request
from app.forms import AchievementForm
from app.models import db, Achievement
from app.helpers import validation_errors_to_error_messages

achievement_routes = Blueprint('achievements', __name__)

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





# @achievement_routes.route('/<int:achievement_id>', methods=['GET', 'PUT', 'DELETE'])
# def achievement_by_id(achievement_id):
#     """
#     Interact with a single existing achievement
#     """
#     achievement = Achievement.query.get(achievement_id)
#     if request.method =='GET':
#         return achievement.to_dict()
#     elif request.method == 'PUT':
#         form = AchievementForm()
#         form['csrf_token'].data = request.cookies['csrf_token']
#         if form.validate_on_submit():
#             form.populate_obj(achievement)
#             db.session.commit()
#             return achievement.to_dict()
#         return {'errors': validation_errors_to_error_messages(form.errors)}
#     elif request. method == 'DELETE':
#         db.session.delete(achievement)
#         db.session.commit()

#         return achievement.to_dict()
#     return achievement.to_dict()
