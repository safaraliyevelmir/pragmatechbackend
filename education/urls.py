from django.urls import path

from .views import *

urlpatterns = [
    
    path('groups/',GroupPageView.as_view(),name='group'),
    path('programs/',ProgramPageView.as_view(),name='programs'),
    path('programs/<slug:slug>/<int:pk>/',ProgramDetailPageView.as_view(),name='programs_detail'),
    path('groups/<int:pk>/',GroupDetailPageView.as_view(),name='group_detail'),
]
