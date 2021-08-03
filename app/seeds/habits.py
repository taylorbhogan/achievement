from app.models import db, Habit


def seed_habits():
    habit1 = Habit(user_id=1, name='Push-ups', blurb='Three sets of 20', stellar_blurb='100 in a day', target=7, color_id=1, created_at='2021-01-01 19:10:32')
    habit2 = Habit(user_id=1, name='Drink water', blurb='Two liters', stellar_blurb='Three liters', target=7, color_id=2, created_at='2021-01-01 19:09:38')
    habit3 = Habit(user_id=1, name='Admire plants', blurb='Repot, fertilize, and plant once a week', stellar_blurb='Harvest!', target=7, color_id=3, created_at='2021-01-01 19:07:10')
    habit4 = Habit(user_id=1, name='Read', blurb='A real ink-on-a-tree reading session', stellar_blurb='A journal session with a book that needs it', target=3, color_id=4, created_at='2021-07-01 19:09:38')
    habit5 = Habit(user_id=1, name='Swim in the bay', blurb='Bonus points for going past the buoy', stellar_blurb='How long can you last?', target=7, color_id=5, created_at='2021-07-01 19:09:38')

    habits = [
        habit1,
        habit2,
        habit3,
        habit4,
        habit5,
    ]
    for habit in habits:
        db.session.add(habit)
    db.session.commit()


def undo_habits():
    db.session.execute('TRUNCATE habits RESTART IDENTITY CASCADE;')
    db.session.commit()
