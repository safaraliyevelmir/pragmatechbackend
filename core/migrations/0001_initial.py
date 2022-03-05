# Generated by Django 4.0.3 on 2022-03-05 15:37

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='AboutPageContent',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('content', models.TextField()),
                ('image', models.ImageField(upload_to='about/')),
            ],
        ),
        migrations.CreateModel(
            name='AboutTimeLine',
            fields=[
                ('title', models.CharField(max_length=255)),
                ('about', models.TextField()),
                ('image', models.ImageField(blank=True, null=True, upload_to='about/')),
                ('index', models.IntegerField(help_text='Entered number you want this object  be in what order', primary_key=True, serialize=False, unique=True)),
            ],
            options={
                'ordering': ['-index'],
            },
        ),
        migrations.CreateModel(
            name='Slider',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255)),
                ('text', models.TextField()),
                ('image', models.ImageField(blank=True, null=True, upload_to='slider/')),
            ],
        ),
    ]
