from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.authtoken.models import Token
from .models import Job
from .serializers import JobSerializer

# Create your views here.

class JobAdd(APIView):
    def post(self, request):
        auth_token = request.data.get("auth_token")
        user = Token.objects.get(key=auth_token).user.id
        serializer = JobSerializer(data={"user": user, **request.data})

        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_200_OK)
        
        print(serializer.errors)
        return Response(status=status.HTTP_400_BAD_REQUEST)


    def get(self, request):
        return Response(status=status.HTTP_200_OK)