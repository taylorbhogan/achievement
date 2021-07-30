from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError, Length
from app.models import User


def user_exists(form, field):
    # Checking if user exists
    email = field.data
    user = User.query.filter(User.email == email).first()
    if user:
        raise ValidationError('That email address is already in use. Try another or click log in.')


class SignUpForm(FlaskForm):

    first_name = StringField('first_name', validators=[DataRequired('Provide a first name')])
    last_name = StringField('last_name', validators=[DataRequired('Provide a last name')])
    email = StringField('email', validators=[DataRequired('Provide an email address'),
                                            Email(message='Provide a valid email address.', check_deliverability=True),
                                            user_exists])
    password = StringField('password', validators=[DataRequired('Enter a password'),
                                                    Length(min=6, message='Enter a longer password (6 characters minimum)')])
