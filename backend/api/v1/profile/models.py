from django.db import models
from django import forms 

# Create your models here.
class Profile(models.Model):
       first_name = models.CharField(max_length=100)
       last_name = models.CharField(max_length=100)
       username = models.CharField(max_length=40)
       date_of_birth = models.DateField(max_length=8)
       email = models.EmailField(max_length=100,blank=True)

       def __str__(self):
              return self.first_name

