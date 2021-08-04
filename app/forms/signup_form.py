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

    first_name = StringField('first_name', validators=[DataRequired('Provide a first name'),
                                                        Length(max=100, message='Enter a shorter first name (100 characters maximum)')])
    last_name = StringField('last_name', validators=[DataRequired('Provide a last name'),
                                                    Length(max=100, message='Enter a shorter last name (100 characters maximum)')])
    email = StringField('email', validators=[DataRequired('Provide an email address'),
                                            Email(message='Provide a valid email address.', check_deliverability=True),
                                            Length(max=255, message='Enter a shorter email address (255 characters maximum)'),
                                            user_exists])
    password = StringField('password', validators=[DataRequired('Enter a password'),
                                                    Length(min=6, message='Enter a longer password (6 characters minimum)'),
                                                    Length(max=255, message='Enter a shorter password (255 characters maximum)')])
