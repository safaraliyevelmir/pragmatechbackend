from django.db import models
from ckeditor.fields import RichTextField
from django.urls import reverse
from blog.models import gen_slug


class Program(models.Model):

    title = models.CharField(max_length=255)
    slug = models.SlugField(help_text="you can leave this cell blank will automatically create a slug",null=True,blank=True)
    desc = models.TextField()
    image = models.ImageField(upload_to='programs/')
    information = RichTextField()

    #moderation 
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return self.title

    def save(self,*args,**kwargs):
        if not self.slug:
            self.slug = gen_slug(self.title)

        super().save(*args,**kwargs)

    def get_absolute_url(self):
        return reverse("programs_detail", kwargs={"pk":self.pk,"slug": self.slug})


class Group(models.Model):

    title = models.CharField(max_length=255)
    content = RichTextField()
    programs = models.ForeignKey(Program,on_delete=models.CASCADE)
    image = models.ImageField(upload_to='groups/')
    active = models.BooleanField()
    education_term_month = models.IntegerField(help_text="Enter value for month")
    education_term_hours = models.IntegerField(help_text="Enter value for hours")
    week_day = models.CharField(help_text="Enter this group lesson days",max_length=255)
    lesson_time = models.CharField(max_length=255)
    deadline= models.DateField()
    lesson_start_time = models.DateField()
    

    #moderation 
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse("group_detail", kwargs={"pk":self.pk})