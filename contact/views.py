from django.shortcuts import redirect, render

from django.views.generic import TemplateView, CreateView

from contact.forms import ContactForm
from django.urls import reverse

from contact.models import ApllyCourse
from education.models import Program


class ContactPageView(TemplateView):
    template_name = "contact.html"
    form_class = ContactForm


    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["form"] = ContactForm 
        context["title"] = "Əlaqə"
        return context
    
    def post(self, request, *args, **kwargs):
        form = self.form_class(request.POST)
        if form.is_valid():
            form.save()
            return redirect('contact')


def applycourse(request):

    if request.method == 'POST':
        first_name = request.POST.get('first_name')
        last_name = request.POST.get('last_name')
        email = request.POST.get('email')
        phone_number = request.POST.get('phone_number')
        message = request.POST.get('message')
        program = request.POST.get('programs_dp')
        print(program)
        program_obj = Program.objects.get(pk=program)
        ApllyCourse.objects.create(name=first_name,surname=last_name,email=email,phone_number=phone_number,message=message,program=program_obj)
        
    redirect_url =  request.META.get('HTTP_REFERER')
    return redirect(redirect_url)

    

def questions(request):

    if request.method == 'POST':
        first_name = request.POST.get('first_name')
        last_name = request.POST.get('last_name')
        email = request.POST.get('email')
        program = request.POST.get('popup__hiddeninput')
        
        program_obj = Program.objects.filter(pk=program).first()
        Questions.objects.create(name=first_name,surname=last_name,email=email,program=program_obj)
        
    redirect_url =  request.META.get('HTTP_REFERER')
    return redirect(redirect_url)

