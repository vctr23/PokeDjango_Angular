from django.urls import path
from .views import PokemonCardView

urlpatterns = [
    path('cards/', PokemonCardView.as_view(), name='pokemon-cards'),
]
