from django import template
from blog.models import Blog

register = template.Library()


@register.simple_tag
def search_engine(request):
    filter = BlogSearch(request.GET, queryset=Blog.objects.all())
    return filter