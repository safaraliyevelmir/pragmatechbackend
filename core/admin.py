from django.contrib import admin

from .models import AboutTimeLine


class AboutTimeLineAdmin(admin.ModelAdmin):

    list_display = ('title','index',)


admin.site.register(AboutTimeLine,AboutTimeLineAdmin)