from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired

class HabitForm(FlaskForm):
    user_id = StringField('user_id', validators=[DataRequired()])
    name = StringField('name', validators=[DataRequired('Give your habit a name')])
    blurb = StringField('blurb')
    stellar_blurb = StringField('stellar_blurb')
    target = StringField('target', validators=[DataRequired('Enter a weekly target')])
    color_id = StringField('color_id')
