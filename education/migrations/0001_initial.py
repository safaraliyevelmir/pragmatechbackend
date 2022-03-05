# Generated by Django 4.0.3 on 2022-03-05 15:37

import ckeditor.fields
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Program',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255)),
                ('slug', models.SlugField(blank=True, help_text='you can leave this cell blank will automatically create a slug', null=True)),
                ('desc', models.TextField()),
                ('image', models.ImageField(upload_to='programs/')),
                ('information', ckeditor.fields.RichTextField()),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
            ],
            options={
                'ordering': ['-created_at'],
            },
        ),
        migrations.CreateModel(
            name='Group',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255)),
                ('content', ckeditor.fields.RichTextField()),
                ('image', models.ImageField(upload_to='groups/')),
                ('active', models.BooleanField()),
                ('education_term_month', models.IntegerField(help_text='Enter value for month')),
                ('education_term_hours', models.IntegerField(help_text='Enter value for hours')),
                ('week_day', models.CharField(help_text='Enter this group lesson days', max_length=255)),
                ('lesson_time', models.CharField(max_length=255)),
                ('deadline', models.DateField()),
                ('lesson_start_time', models.DateField()),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('programs', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='education.program')),
            ],
            options={
                'ordering': ['-created_at'],
            },
        ),
    ]
