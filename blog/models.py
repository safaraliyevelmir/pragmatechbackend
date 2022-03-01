from django.db import models
from ckeditor.fields import RichTextField
from django.urls import reverse
from django.utils.text import slugify


def gen_slug(slug):
    return slugify(slug,allow_unicode=False)

class Blog(models.Model):

    title = models.CharField(max_length=255)
    author = models.CharField(max_length=255)
    image = models.ImageField(upload_to='blog/')
    slug = models.SlugField(null=True,blank=True)
    content = RichTextField()



    #moderation 
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse("blog_detail", kwargs={"pk":self.pk,"slug": self.slug})


    def save(self,*args,**kwargs):
        if not self.slug:
            self.slug = gen_slug(self.title)

        super().save(*args,**kwargs)

