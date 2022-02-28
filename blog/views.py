from django.db.models import query
from django.db.models.query import QuerySet
from django.shortcuts import get_object_or_404, redirect, render

from django.views.generic import TemplateView
from django.views.generic.list import ListView
from blog.models import Blog

class BlogsPageView(ListView):

    template_name = 'blog.html'
    model = Blog


    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["blog_main"] = Blog.objects.first()
        context["blogs"] = Blog.objects.all()


        return context
    


def search_engine(request):
    if request.method == 'POST':
        searched = request.POST['searched']
        blog = Blog.objects.filter(title__contains=searched)
    context = {
        'blog':blog,
        'searched':searched
    }
    return render(request,'search.html',context)

class BlogPageDetailView(TemplateView):

    template_name = 'blog-post.html'
    model = Blog


    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        blog = Blog.objects.get(pk=self.kwargs.get('pk'))
        context["blog"] = blog
        context["blogs"] = Blog.objects.all()[:10]
        context["title"] = f"Bloq / {blog.title}"
        return context


    
