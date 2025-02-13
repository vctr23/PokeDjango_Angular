from django.db import models

# Clase que guarda el modelo de la carta
class PokemonCard(models.Model):
    id_card = models.CharField(max_length=50, unique=True)
    name = models.CharField(max_length=100)
    image_url = models.URLField()
    types = models.CharField(max_length=200, blank=True, null=True)

    def __str__(self):
        return self.name