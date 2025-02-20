from django.urls import path
from .views import PokemonSet5View

urlpatterns = [
    path('set5/', PokemonSet5View.as_view(), name='pokemon-set5-list'),
]