from flask_wtf import FlaskForm
from wtforms import StringField

class HabitForm(FlaskForm):
    user_id = StringField('userId')
    name = StringField('name')
    blurb = StringField('blurb')
    stellar_blurb = StringField('stellarBlurb')
    target = StringField('target')
