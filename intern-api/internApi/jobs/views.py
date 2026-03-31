from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.authtoken.models import Token
from .models import Job

# Create your views here.
# TODO: CONTINUE FIXED THIS
class JobAdd(APIView):
    # Add Jobs
    def post(self, request):
        auth_token = request.data.get("auth_token")
        user = Token.objects.get(key=auth_token).user.id
        company_name = request.data.get("company_name")
        title = request.data.get("title")
        status = request.data.get("status")
        created_job = Job.objects.create(user, company_name, title, status)
        pass

    def get(self, request):
        return Response(status=status.HTTP_200_OK)