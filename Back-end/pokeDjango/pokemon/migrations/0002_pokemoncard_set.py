# Generated by Django 5.1.5 on 2025-02-17 18:30

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pokemon', '0001_initial'),
        ('pokemonSet', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='pokemoncard',
            name='set',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='pokemonSet.pokemonset'),
        ),
    ]
