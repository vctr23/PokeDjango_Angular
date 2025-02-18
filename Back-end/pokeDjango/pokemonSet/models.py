from django.db import models

# Create your models here.
class PokemonSet(models.Model):
    id = models.CharField(max_length=20, primary_key=True)  # Usamos CharField en lugar de AutoField
    name = models.CharField(max_length=100)
    series = models.CharField(max_length=100)
    printedTotal = models.IntegerField()
    image = models.URLField(max_length=300)  # Campo para la URL de la imagen
    
    def __str__(self):
        return self.name
