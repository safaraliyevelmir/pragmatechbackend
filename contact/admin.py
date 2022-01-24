from django.contrib import admin


from .models import ApllyCourse, Contact, Question

admin.site.register(Contact)
admin.site.register(ApllyCourse)
admin.site.register(Question)