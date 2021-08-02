from flask.cli import AppGroup
from .users import seed_users, undo_users
from .colors import seed_colors, undo_colors
from .habits import seed_habits, undo_habits
from .achievements import seed_achievements, undo_achievements

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_colors()
    seed_habits()
    seed_achievements()


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_colors()
    undo_habits()
    undo_achievements()
