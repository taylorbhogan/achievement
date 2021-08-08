from app.models import db, Habit


def seed_habits():
    habit1 = Habit(user_id=1, name='Morning meditation', blurb='5 minutes', stellar_blurb='An in-depth session', target=7, color_id=1, created_at='2020-08-06 19:09:38')
    habit2 = Habit(user_id=1, name='Drink water', blurb='Two liters', stellar_blurb='Three liters', target=7, color_id=3, created_at='2020-08-05 19:09:38')
    habit3 = Habit(user_id=1, name='Push ups', blurb='3 sets of 15', stellar_blurb='100 in one day', target=7, color_id=5, created_at='2021-01-01 19:09:38')
    habit4 = Habit(user_id=1, name='Admire and tend to plants', blurb='Say kind things', stellar_blurb='Fertilize once a week', target=7, color_id=2, created_at='2021-04-15 19:09:38')

    habits = [
        habit1,
        habit2,
        habit3,
        habit4,
    ]
    for habit in habits:
        db.session.add(habit)
    db.session.commit()


def undo_habits():
    db.session.execute('TRUNCATE habits RESTART IDENTITY CASCADE;')
    db.session.commit()
