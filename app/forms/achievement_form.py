from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired

class AchievementForm(FlaskForm):
    habit_id = StringField('habit_id')
    is_stellar = StringField('is_stellar')
    # habit_id = StringField('habit_id', validators=[DataRequired()])
    # is_stellar = StringField('is_stellar', validators=[DataRequired()])
