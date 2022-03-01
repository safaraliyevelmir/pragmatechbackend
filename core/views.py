from django.shortcuts import render, redirect
from django.views.generic import TemplateView

from core.models import AboutTimeLine, Slider
from contact.forms import ContactForm

from education.models import Group, Program
from blog.models import Blog

class MainPageView(TemplateView):

    template_name = 'index.html'
    form_class = ContactForm

    def post(self, request, *args, **kwargs):
        form = self.form_class(request.POST)
        if form.is_valid():
            form.save()
            return redirect('index')
    
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["groups"] = Group.objects.all() 
        context["active_groups"] = Group.objects.filter(active=True).all()[:7]
        context["programs"] = Program.objects.all()
        context["blogs"] = Blog.objects.all()[:4]
        context['form'] = ContactForm()
        context["slider"] = Slider.objects.all()
        return context
    
class AboutPageView(TemplateView):
    
    template_name = 'about.html'


    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["about_objects"] = AboutTimeLine.objects.all()
        return context

