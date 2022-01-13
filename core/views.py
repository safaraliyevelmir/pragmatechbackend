from django.shortcuts import render
from django.views.generic import TemplateView

from core.models import AboutTimeLine


class MainPageView(TemplateView):

    template_name = 'index.html'


class AboutPageView(TemplateView):
    
    template_name = 'about.html'


    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["about_objects"] = AboutTimeLine.objects.all()
        return context
    
