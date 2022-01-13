from django.urls import path

from .views import AboutPageView, MainPageView

urlpatterns = [
    path('about/',AboutPageView.as_view(),name='about'),
    path('',MainPageView.as_view(),name='index')
]
