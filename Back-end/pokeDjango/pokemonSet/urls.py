from django.urls import path
from .views import PokemonSetList

urlpatterns = [
    path('sets/', PokemonSetList.as_view(), name='pokemon-set-list'),
]