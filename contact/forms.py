from django import forms
from .models import ApllyCourse, Contact

class ContactForm(forms.ModelForm):

    class Meta:

        model = Contact
        fields = ['name','surname','email','phone_number','message']


        widgets = {
            'name':forms.TextInput(attrs={'placeholder':'Ad'}),
            'surname':forms.TextInput(attrs={'placeholder':'Soyad'}),
            'email':forms.EmailInput(attrs={'placeholder':'Email'}),
            'phone_number':forms.TextInput(attrs={'placeholder':'Telefon'}),
            'message':forms.Textarea(attrs={'placeholder':'Mesajınız','class':'textbox-input'}),
        }



