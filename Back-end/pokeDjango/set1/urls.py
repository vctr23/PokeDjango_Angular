from django.urls import path
from .views import PokemonSet1View

urlpatterns = [
    path('set1/', PokemonSet1View.as_view(), name='pokemon-set-list'),
]