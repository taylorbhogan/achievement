from .db import db

class Color(db.Model):
    __tablename__ = 'colors'

    id = db.Column(db.Integer, primary_key=True)
    hue = db.Column(db.String(100), nullable=False)

    habits = db.relationship('Habit', back_populates='color')

    def to_dict(self):
        return {
            'id': self.id,
            'hue': self.hue,
        }
