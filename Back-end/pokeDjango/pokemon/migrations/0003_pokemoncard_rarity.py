# Generated by Django 5.1.5 on 2025-02-17 18:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pokemon', '0002_pokemoncard_set'),
    ]

    operations = [
        migrations.AddField(
            model_name='pokemoncard',
            name='rarity',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
    ]
