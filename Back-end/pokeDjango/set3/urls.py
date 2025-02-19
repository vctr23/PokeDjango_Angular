from django.urls import path
from .views import PokemonSet3View

urlpatterns = [
    path('set3/', PokemonSet3View.as_view(), name='pokemon-set3-list'),
]