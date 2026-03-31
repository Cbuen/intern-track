from django.contrib import admin
from django.urls import path
from jobs.views import JobAdd

urlpatterns = [
    path("add/", JobAdd.as_view()),
]