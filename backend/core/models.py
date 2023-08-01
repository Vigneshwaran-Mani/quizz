from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.CharField(max_length=255, unique=True)
    password = models.CharField(max_length=255)
    username = None

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []


# class UserScore(models.Model):
#     user = models.ForeignKey('auth.User', on_delete=models.CASCADE)
#     score = models.IntegerField()
#     date_taken = models.DateTimeField(auto_now_add=True)
