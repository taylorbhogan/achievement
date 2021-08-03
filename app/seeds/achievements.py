from app.models import db, Achievement


def seed_achievements():
    achievement1 = Achievement(habit_id=1, is_stellar=False, note=None, created_at='2021-07-01 20:09:38')
    achievement2 = Achievement(habit_id=1, is_stellar=False, note=None, created_at='2021-07-02 19:09:38')
    achievement3 = Achievement(habit_id=1, is_stellar=False, note=None, created_at='2021-07-03 19:09:38')
    achievement4 = Achievement(habit_id=1, is_stellar=False, note=None, created_at='2021-07-04 19:09:38')
    achievement5 = Achievement(habit_id=1, is_stellar=False, note=None, created_at='2021-07-05 19:09:38')
    achievement6 = Achievement(habit_id=1, is_stellar=False, note=None, created_at='2021-07-06 19:09:38')
    achievement7 = Achievement(habit_id=1, is_stellar=False, note=None, created_at='2021-07-07 19:09:38')
    achievement8 = Achievement(habit_id=1, is_stellar=False, note=None, created_at='2021-07-08 19:09:38')
    achievement9 = Achievement(habit_id=1, is_stellar=False, note=None, created_at='2021-07-09 19:09:38')
    achievement10 = Achievement(habit_id=1, is_stellar=False, note=None, created_at='2021-07-10 19:09:38')
    achievement11 = Achievement(habit_id=2, is_stellar=False, note=None, created_at='2021-07-06 19:09:38')
    achievement12 = Achievement(habit_id=2, is_stellar=False, note=None, created_at='2021-07-07 19:09:38')
    achievement13 = Achievement(habit_id=2, is_stellar=False, note=None, created_at='2021-07-08 19:09:38')
    achievement14 = Achievement(habit_id=2, is_stellar=False, note=None, created_at='2021-07-09 19:09:38')
    achievement15 = Achievement(habit_id=2, is_stellar=False, note=None, created_at='2021-07-10 19:09:38')
    achievement16 = Achievement(habit_id=2, is_stellar=False, note=None, created_at='2021-07-11 19:09:38')
    achievement17 = Achievement(habit_id=2, is_stellar=False, note=None, created_at='2021-07-30 19:09:38')
    achievement18 = Achievement(habit_id=2, is_stellar=False, note=None, created_at='2021-07-31 19:09:38')
    achievement19 = Achievement(habit_id=2, is_stellar=False, note=None, created_at='2021-08-02 19:09:38')
    achievement20 = Achievement(habit_id=2, is_stellar=False, note=None, created_at='2021-08-03 19:09:38')


    achievements = [
        achievement1,
        achievement2,
        achievement3,
        achievement4,
        achievement5,
        achievement6,
        achievement7,
        achievement8,
        achievement9,
        achievement10,
        achievement11,
        achievement12,
        achievement13,
        achievement14,
        achievement15,
        achievement16,
        achievement17,
        achievement18,
        achievement19,
        achievement20,
    ]
    for achievement in achievements:
        db.session.add(achievement)
    db.session.commit()


def undo_achievements():
    db.session.execute('TRUNCATE achievements RESTART IDENTITY CASCADE;')
    db.session.commit()
