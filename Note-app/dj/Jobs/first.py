import os
import praw
import time
from datetime import datetime
from cfonts import render


class bcolors:
    HEADER = "\033[95m"
    OKBLUE = "\033[94m"
    OKGREEN = "\033[92m"
    WARNING = "\033[93m"
    FAIL = "\033[91m"
    ENDC = "\033[0m"
    BOLD = "\033[1m"
    UNDERLINE = "\033[4m"


def unix_to_local(unix_time):
    ts = int(time.time() - unix_time)
    return datetime.fromtimestamp(ts)


reddit = praw.Reddit(
    client_id="pGHu1iJN5kjOrA",
    client_secret="Cu-689ksWIEMnmzfu8Q77J6X6k4",
    password="reoshaan",
    user_agent="mysecondbotofredditusingpythonversiontwopointthree",
    username="Matkabot",
)


def print_jobs(subreddit):
    output = render(subreddit, colors=["red", "yellow"], align="center", line_height=1)
    print(output)
    for_hire = reddit.subreddit(subreddit)

    for submission in for_hire.new(limit=2):
        if submission.id in posts_read:
            continue
        else:
            posts_read.append(submission.id)
            if (
                submission.link_flair_css_class == "fh-hiring"
                or submission.link_flair_css_class == "fh-stillhiring"
                or submission.link_flair_css_class == "task"
            ):
                print(f"{bcolors.WARNING}Title:\t{submission.title}{bcolors.ENDC}")
                print(f"Time:\t{unix_to_local(submission.created_utc)}")
                print(f"{bcolors.HEADER}Url:\t{submission.url}{bcolors.ENDC}")
                print(f"Text:\n{submission.selftext}")
                print("---------------------------------\n")


os.chdir("/home/lariab/Documents/Jobs")
with open("./read.txt", "r") as f:
    posts_read = f.read()
    posts_read = posts_read.split("\n")
    posts_read = list(filter(None, posts_read))

print_jobs("slavelabour")
print_jobs("forhire")


with open("./read.txt", "w") as fs:
    for post_id in posts_read:
        fs.write(post_id + "\n")
