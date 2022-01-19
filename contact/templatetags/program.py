from django import template

register = template.Library()

from education.models import Program

@register.simple_tag
def dropdown_data():
    return Program.objects.all()
