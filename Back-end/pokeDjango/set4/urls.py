from django.urls import path
from .views import PokemonSet4View

urlpatterns = [
    path('set4/', PokemonSet4View.as_view(), name='pokemon-set4-list'),
]