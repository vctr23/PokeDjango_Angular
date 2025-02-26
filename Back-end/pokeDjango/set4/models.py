from django.db import models

# Create your models here.
class PokemonSet4(models.Model):
    id = models.CharField(max_length=20, primary_key=True)  # Usamos CharField en lugar de AutoField
    name = models.CharField(max_length=100)
    supertype = models.CharField(max_length=100)
    number = models.CharField(max_length=100)
    rarity = models.CharField(max_length=100)
    image = models.URLField(max_length=300)  # Campo para la URL de la imagen
    types = models.JSONField(default=list) 
  
    def __str__(self):
        return self.name