from django.db import models

# Create your models here.
class PokemonSet (models.Model):
    id_set = models.CharField(max_length=50, unique=True)
    name = models.CharField(max_length=100)
    series = models.CharField(max_length=100)
    printedTotal = models.IntegerField(max_length=300)
    
    def __str__(self):
        return self.name