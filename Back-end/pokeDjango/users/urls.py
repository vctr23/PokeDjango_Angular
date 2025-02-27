from django.urls import path
from .views import register_user, get_users, login_user

urlpatterns = [
    path('users/', get_users, name='get_users'),
    path('register/', register_user, name='register_user'),
    path('login/', login_user, name='login_user')
]