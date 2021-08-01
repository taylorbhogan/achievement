from flask import Blueprint
from app.models import db, Color


color_routes = Blueprint('colors', __name__)

@color_routes.route('')
def get_habits():
    """
    Retrieves all of the colors from the db
    """
    colors = Color.query.all()
    return {color.id: color.to_dict() for color in colors}
