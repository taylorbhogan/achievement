from flask import Blueprint, request
from app.models import db, Color
from app.forms import ColorForm
from app.helpers import validation_errors_to_error_messages

color_routes = Blueprint('colors', __name__)

@color_routes.route('')
def get_colors():
    """
    Retrieves all of the colors from the db
    """
    colors = Color.query.all()
    return {color.id: float(color.to_dict()['hue']) for color in colors}

@color_routes.route('', methods=['POST'])
def create_color():
    """
    Creates a new color in the db
    """
    print('------------made it ----------')
    form = ColorForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        color = Color()
        form.populate_obj(color)
        db.session.add(color)
        db.session.commit()
        return color.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}
