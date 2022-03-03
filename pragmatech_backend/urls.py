from django.contrib import admin
from django.urls import path
from django.urls.conf import include
from django.conf import settings
from django.conf.urls.static import static

from contact.views import ContactPageView, applycourse, questions

urlpatterns = [
  #  path('admin/', admin.site.urls),
    path("", include('core.urls')),
    path('contact/',ContactPageView.as_view(),name='contact'),
    path('blog/',include('blog.urls')),
    path("",include('education.urls')),
    path('apply/',applycourse,name='apply_course'),
    path('questions/',questions,name='questions')
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
