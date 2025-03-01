"""
URL configuration for pokeDjango project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('pokemon.urls')),
    path('apiSets/', include('pokemonSet.urls')),
    path('apiSet1/', include('set1.urls')),
    path('apiSet2/', include('set2.urls')),
    path('apiSet3/', include('set3.urls')),
    path('apiSet4/', include('set4.urls')),
    path('apiSet5/', include('set5.urls')),
    path('apiUsers/', include('users.urls')),
]