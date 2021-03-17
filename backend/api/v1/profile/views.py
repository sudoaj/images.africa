from django.shortcuts import render

# Create your views here.
from django.contrib.auth.models import User
from .models import Profile
from rest_framework import viewsets
from api.v1.profile.serializers import UserSerializer,ProfileSerializer


class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer

class ProfileViewSet(viewsets.ModelViewSet):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer 



