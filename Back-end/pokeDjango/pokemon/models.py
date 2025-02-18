from django.db import models
from pokemonSet.models import PokemonSet

# Clase que guarda el modelo de la carta
class PokemonCard(models.Model):
    id_card = models.CharField(max_length=50, unique=True, primary_key=True)
    name = models.CharField(max_length=100)
    image_url = models.URLField()
    types = models.CharField(max_length=200, blank=True, null=True)
    rarity = models.CharField(max_length=50, blank=True, null=True)  # Agregado el campo rarity
    set = models.ForeignKey(PokemonSet, on_delete=models.CASCADE, default=1)

    def __str__(self):
        return self.name
