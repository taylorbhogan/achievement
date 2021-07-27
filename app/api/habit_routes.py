from flask import Blueprint, request

habit_routes = Blueprint('habits', __name__)

@habit_routes.route('', methods=['POST'])
def create_habit():
    """
    Creates a habit in the database
    """
    print(request.json)
    return{'msg': 'work in progress'}
