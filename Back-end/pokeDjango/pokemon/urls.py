from django.urls import path
from .views import PokemonCardList

urlpatterns = [
    path('cards/', PokemonCardList.as_view(), name='pokemon-cards'),
]
