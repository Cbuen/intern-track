from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Job(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    company_name = models.CharField(max_length=100)
    title = models.CharField(max_length=150)
    status = models.CharField(max_length=50)

    class Meta:
        constraints = [
            models.UniqueConstraint(
                fields=["company_name", "title", "user"],
                name="unique_job_per_user"
            )
        ]