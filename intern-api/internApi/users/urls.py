from django.contrib import admin
from django.urls import path
from users.views import UserView, UserSignup, UserLogin, UserLogout


urlpatterns = [
    path("", UserView.as_view()),
    path("signup/", UserSignup.as_view()),
    path("login/", UserLogin.as_view()),
    path("logout/", UserLogout.as_view()),
]