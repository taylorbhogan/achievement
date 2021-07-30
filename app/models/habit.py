from app.models.achievement import Achievement
from .db import db
from datetime import datetime

class Habit(db.Model):
    __tablename__ = 'habits'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    name = db.Column(db.String(100), nullable=False)
    blurb = db.Column(db.String(255))
    stellar_blurb = db.Column(db.String(255))
    target = db.Column(db.Integer, nullable=False)
    color_id = db.Column(db.Integer, db.ForeignKey('colors.id'))
    created_at = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, nullable=False, default=datetime.utcnow, onupdate=datetime.utcnow)

    color = db.relationship('Color', back_populates='habits')
    owner = db.relationship('User', back_populates='habits')
    achievements = db.relationship('Achievement', back_populates='habit')

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'blurb': self.blurb,
            'stellar_blurb': self.stellar_blurb,
            'target': self.target,
            # 'color': self.color.hue,
            'created_at': self.created_at,
            'updated_at': self.updated_at,
            'user_id': self.user_id,
            'color_id': self.color_id,
            'achievements': [a.to_dict() for a in self.achievements],
        }
