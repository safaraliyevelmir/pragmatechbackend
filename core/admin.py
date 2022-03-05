from django.contrib import admin

from .models import AboutTimeLine, Slider, AboutPageContent


class AboutTimeLineAdmin(admin.ModelAdmin):

    list_display = ('title','index',)


admin.site.register(AboutTimeLine,AboutTimeLineAdmin)
admin.site.register(Slider)
admin.site.register(AboutPageContent)