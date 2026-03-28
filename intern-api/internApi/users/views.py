from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import JsonResponse
from .serializers import UserSerializer
from rest_framework import status
from django.contrib.auth import authenticate, login, logout
from rest_framework.decorators import api_view
from rest_framework.authtoken.models import Token




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
        if user is not None:
            token = Token.objects.get_or_create(user=user)
            # remove for security purposes
            return Response(data=f"{token[0]}", status=status.HTTP_202_ACCEPTED)
        else:
            return Response(status=status.HTTP_400_BAD_REQUEST)

class UserLogout(APIView):
    def post(self, request):
        if request.user.is_authenticated:
            logout(request)
            return Response(status=status.HTTP_202_ACCEPTED)
        
        return Response(data="User Not Logged In", status=status.HTTP_401_UNAUTHORIZED)
        
    
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
