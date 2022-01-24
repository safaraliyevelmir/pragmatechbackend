from django.shortcuts import render

from django.views.generic import TemplateView
from django.views.generic.detail import *
from .models import Program, Group

class ProgramPageView(TemplateView):
    
    template_name = 'programs.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["programs"] = Program.objects.all()
        context["title"] = "Proqramlar"
        return context


class ProgramDetailPageView(TemplateView):

    template_name = 'program_details.html'


    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        program = Program.objects.get(pk=self.kwargs.get('pk'))
        context["program"] = program
        context["title"] = f" Proqram / {program.title}"
        return context

class GroupPageView(TemplateView):

    template_name = 'groups.html'


    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["groups"] = Group.objects.all() 
        context["active_groups"] = Group.objects.filter(active=True).all()
        context["title"] = "Qruplar"
        return context
    
class GroupDetailPageView(TemplateView):

    template_name = "group_details.html"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        group = Group.objects.get(pk=self.kwargs.get('pk'))
        context["group"] = group
        context["title"] = group.title
        return context
    