from django.urls import path
from .views import PokemonSet2View

urlpatterns = [
    path('set2/', PokemonSet2View.as_view(), name='pokemon-set2-list'),
]