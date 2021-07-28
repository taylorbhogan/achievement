from .db import db
from datetime import datetime

class Achievement(db.Model):
    __tablename__ = 'achievements'

    id = db.Column(db.Integer, primary_key=True)
    habit_id = db.Column(db.Integer, db.ForeignKey('habits.id'), nullable=False)
    is_stellar = db.Column(db.Boolean, nullable=False, default=False)
    note = db.Column(db.String(1000))
    created_at = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, nullable=False, default=datetime.utcnow, onupdate=datetime.utcnow)

    habit = db.relationship('Habit', back_populates='achievements')

    def to_dict(self):
        return {
        'id': self.id,
        'habit': self.habit,
        'habit_id': self.habit_id,
        'is_stellar': self.is_stellar,
        'note': self.note,
        'created_at': self.created_at,
        'updated_at': self.updated_at
        }
