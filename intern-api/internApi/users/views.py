from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import UserSerializer
from rest_framework import status
from django.contrib.auth import authenticate, login, logout



# Create your views here.
class UserView(APIView):
    def get(self, request):
        if request.user.username:
            return Response(data=request.user.username, status=status.HTTP_200_OK)
        else:
            return Response(status=status.HTTP_404_NOT_FOUND)
    

class UserLogin(APIView):
    def get(self, request):
        return Response(data="UserLogin Route")


    def post(self, request):
        username = request.data.get("username")
        password = request.data.get("password")
        user = authenticate(request, username=username, password=password)
        if user:
            login(request, user)
            return Response(data="logged in", status=status.HTTP_202_ACCEPTED)
        else:
            return Response(status=status.HTTP_400_BAD_REQUEST)

class UserLogout(APIView):
    def get(self, request):
        if request.user.username:
            logout(request)
            return Response(status=status.HTTP_202_ACCEPTED)
        else:
            return Response(data="User Not Logged In", status=status.HTTP_404_NOT_FOUND)
        

    
class UserSignup(APIView):
    def get(self, request):
        return Response(data="SignupView")
    
    def post(self, request):
        seralizer = UserSerializer(data=request.data)

        if seralizer.is_valid():
            seralizer.save()
            return Response(seralizer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(seralizer.errors, status=status.HTTP_400_BAD_REQUEST)
