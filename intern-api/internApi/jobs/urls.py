from django.contrib import admin
from django.urls import path
from jobs.views import JobAdd, JobAppliedGet

urlpatterns = [
    path("add/", JobAdd.as_view()),
    path("my-jobs/", JobAppliedGet.as_view()),
]