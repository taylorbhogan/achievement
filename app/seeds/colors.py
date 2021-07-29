from app.models import db, Color


def seed_colors():
    color1 = Color(hue='60')
    color2 = Color(hue='120')
    color3 = Color(hue='180')
    color4 = Color(hue='240')
    color5 = Color(hue='300')

    colors = [
        color1,
        color2,
        color3,
        color4,
        color5,
    ]
    for color in colors:
        db.session.add(color)
    db.session.commit()


def undo_colors():
    db.session.execute('TRUNCATE colors RESTART IDENTITY CASCADE;')
    db.session.commit()
