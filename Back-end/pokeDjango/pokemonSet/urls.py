from django.urls import path
from .views import PokemonSetList

urlpatterns = [
    path('cards/', PokemonSetList.as_view(), name='pokemon-cards'),
]