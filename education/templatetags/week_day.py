from django import template

register = template.Library()

week_days = ['pass','Bazar ertəsi','Çərşənbə axşamı','Çərşənbə','Cümə axşamı','Cümə','Şənbə','Bazar']

@register.simple_tag
def week_day(value,numbers):
    text = "core/"
    list = [int(i) for i in str(numbers)]   
    for i in list:
        text = text + " " +  week_days[i]
    
    return text
