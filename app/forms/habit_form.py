from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, NumberRange

class HabitForm(FlaskForm):
    user_id = StringField('user_id', validators=[DataRequired()])
    name = StringField('name', validators=[DataRequired('Give your habit a name')])
    blurb = StringField('blurb')
    stellar_blurb = StringField('stellar_blurb')
    target = StringField('target', validators=[DataRequired('Enter a weekly target'), NumberRange(min=1, message='How do you plan to accomplish something negative times per week? Target must be positive.')])
    color_id = StringField('color_id')
