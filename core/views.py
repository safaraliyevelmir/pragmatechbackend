from django.shortcuts import render
from django.views.generic import TemplateView

from core.models import AboutTimeLine

from education.models import Group
from blog.models import Blog

class MainPageView(TemplateView):

    template_name = 'index.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["groups"] = Group.objects.all() 
        context["planned_groups"] = Group.objects.filter(is_planned=True).all()
        context["blogs"] = Blogs.objects.all()
        return context
    


class AboutPageView(TemplateView):
    
    template_name = 'about.html'


    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["about_objects"] = AboutTimeLine.objects.all()
        return context
    
