from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Job(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    company_name = models.CharField(max_length=500)
    title = models.CharField(max_length=500)
    status = models.CharField(max_length=200)