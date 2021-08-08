from app.models import achievement
from app.models.achievement import Achievement
from .db import db
from datetime import datetime, timedelta, time

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

    def check_all_from_create_date(self):
        def helper(n):
            for a in self.achievements:
                if a.created_at > datetime.combine(self.created_at + timedelta(days=n),time.min) and a.created_at < datetime.combine(self.created_at + timedelta(days=n+1), time.min):
                    return True
            return False

        return {n: helper(n) for n in range((datetime.utcnow() + timedelta(days=1) - self.created_at).days)}

    # def check_all_in_last_year(self):
    #     def helper(n):
    #         for a in self.achievements:
    #             print('acreate',a.created_at,'low',datetime.combine(self.created_at + timedelta(days=n),time.min),'high',datetime.combine(self.created_at + timedelta(days=n+1), time.min))
    #             if a.created_at > datetime.combine(self.created_at + timedelta(days=n),time.min) and a.created_at < datetime.combine(self.created_at + timedelta(days=n+1), time.min):
    #                 return True
    #         return False

    #     return {n: helper(n) for n in range(365)}

    def check_all_in_last_year(self):
        def helper(n):
            for a in self.achievements:
                # print('acreate',a.created_at,'low',datetime.combine(self.created_at + timedelta(days=n),time.min),'high',datetime.combine(self.created_at + timedelta(days=n+1), time.min))
                if a.created_at > datetime.combine(datetime.now() + timedelta(days=n-364),time.min) and a.created_at < datetime.combine(datetime.now() + timedelta(days=n-363), time.min):
                    return True
            return False

        return {n: helper(n) for n in range(365)}

    def check_all_in_last_week(self):
        def helper(n):
            for a in self.achievements:
                # print('self.name',self.name,'n',n,'a.id',a.id,'aCreate',a.created_at,'low',datetime.combine(datetime.utcnow() + timedelta(days=n-6),time.min),'high',datetime.combine(datetime.utcnow() + timedelta(days=n-5), time.min))
                if a.created_at > datetime.combine(datetime.utcnow() + timedelta(days=n-6),time.min) and a.created_at < datetime.combine(datetime.utcnow() + timedelta(days=n-5), time.min):
                    return True
            return False

        return {n: helper(n) for n in range(7)}

    def count_achievements_in_last_week(self):
        count = 0
        for a in self.achievements:
            if a.created_at > datetime.combine(datetime.now() - timedelta(days=7),time.min) and a.created_at < datetime.now():
                count += 1
        return count
    # def count_achievements_in_last_week(self):
    #     count = 0
    #     for a in self.achievements:
    #         if a.created_at > self.created_at - timedelta(days=7) and a.created_at < datetime.utcnow():
    #             count += 1
    #     return count


    # def check_all_from_create_date(self):
    #     def helper(n):
    #         for a in self.achievements:
    #             # print(a.id,'aCreate',a.created_at,'lowBounds',self.created_at + timedelta(days=n),'highBounds', self.created_at + timedelta(days=n+1))
    #             # the below prints the first true; all else false
    #             # if a.created_at > self.created_at + timedelta(days=n) and a.created_at < self.created_at + timedelta(days=n+1):
    #             print(a.id,'aCreate',a.created_at,'low',datetime.combine(self.created_at + timedelta(days=n),time.min),'high',datetime.combine(self.created_at + timedelta(days=n+1), time.min))
    #             if a.created_at > datetime.combine(self.created_at + timedelta(days=n),time.min) and a.created_at < datetime.combine(self.created_at + timedelta(days=n+1), time.min):
    #                 return True
    #         print('false --')
    #         return False

    #     return {n: helper(n) for n in range((datetime.utcnow() + timedelta(days=1) - self.created_at).days)}



    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'blurb': self.blurb,
            'stellar_blurb': self.stellar_blurb,
            'target': self.target,
            'color': self.color.hue,
            'created_at': self.created_at,
            'updated_at': self.updated_at,
            'user_id': self.user_id,
            'color_id': self.color_id,
            'achievements': [a.to_dict() for a in self.achievements],
            'target_prog': self.count_achievements_in_last_week(),
            'week': self.check_all_in_last_week(),
            'year': self.check_all_in_last_year(),
        }
