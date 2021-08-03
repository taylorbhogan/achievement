from app.models import db, Habit


def seed_habits():
    habit1 = Habit(user_id=1, name='Push-ups', blurb='Three sets of 20', stellar_blurb='100 in a day', target=7, color_id=1, created_at='2021-07-01 19:09:38')
    habit2 = Habit(user_id=1, name='Drink water', blurb='Two liters', stellar_blurb='Three liters', target=7, color_id=2, created_at='2021-07-05 19:09:38')
    
    habits = [
        habit1,
        habit2,

    ]
    for habit in habits:
        db.session.add(habit)
    db.session.commit()


def undo_habits():
    db.session.execute('TRUNCATE habits RESTART IDENTITY CASCADE;')
    db.session.commit()
