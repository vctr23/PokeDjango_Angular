from django.urls import path
from .views import register_user, get_users

urlpatterns = [
    path('users/', get_users, name='get_users'),
    path('register/', register_user, name='register_user'),
]