from django.contrib import admin

from .models import AboutTimeLine, Slider,AboutPageContent, ProgramPageContent, GroupPageContent

class AboutTimeLineAdmin(admin.ModelAdmin):

    list_display = ('title','index',)

admin.site.register(AboutPageContent)
admin.site.register(ProgramPageContent)
admin.site.register(GroupPageContent)
admin.site.register(AboutTimeLine,AboutTimeLineAdmin)
admin.site.register(Slider)
