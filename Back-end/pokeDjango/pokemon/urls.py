from django.urls import path
from .views import PokemonCardList, PokemonS

urlpatterns = [
    path('cards/', PokemonCardList.as_view(), name='pokemon-cards'),
]
