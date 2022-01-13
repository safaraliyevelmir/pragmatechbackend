from django.urls import path

from blog.views import BlogPageDetailView, BlogsPageView, search_engine


urlpatterns = [
    path('',BlogsPageView.as_view(),name='blog'),
    path('<int:pk>/<slug:slug>/',BlogPageDetailView.as_view(),name='blog_detail'),
    path('search/',search_engine,name='search')
]
