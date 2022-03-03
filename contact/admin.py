from django.contrib import admin


from .models import ApllyCourse, Contact

class ContactAdmin(admin.ModelAdmin):
    def get_model_perms(self, request):
        """
        Return empty perms dict thus hiding the model from admin index.
        """
        return {}
admin.site.register(Contact,ContactAdmin)
admin.site.register(ApllyCourse)
