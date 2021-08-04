from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, NumberRange, Length

class HabitForm(FlaskForm):
    user_id = StringField('user_id', validators=[DataRequired()])
    name = StringField('name', validators=[DataRequired('Give your habit a name'), Length(max=100, message='Less is more. Can you enter a name that\'s fewer than 101 characters?') ])
    blurb = StringField('blurb', validators=[Length(max=255, message='Can you sum up your achievement goal in fewer than 256 characters?') ])
    stellar_blurb = StringField('stellar_blurb', validators=[Length(max=255, message='Can you sum up your stellar achievement goal in fewer than 256 characters?') ])
    target = StringField('target', validators=[DataRequired('Enter a weekly target'), NumberRange(min=1, message='How do you plan to accomplish something negative times per week? Target must be positive.')])
    color_id = StringField('color_id')
