from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        first_name='Taylor', last_name='Hogan', email='taylorb.hogan@gmail.com', password='password', profile_img_url='image@google.com', birthday='1993-07-21 19:09:38')
    marnie = User(
        first_name='marnie', last_name='smith', email='marnie@aa.io', password='password', profile_img_url='image@google.com', birthday='1993-07-21 19:09:38')
    bobbie = User(
        first_name='bobbie', last_name='smith', email='bobbie@aa.io', password='password', profile_img_url='image@google.com', birthday='1960-07-21 19:09:38')

    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(bobbie)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
