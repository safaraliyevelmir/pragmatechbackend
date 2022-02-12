from django.db import models


class AboutTimeLine(models.Model):

    title = models.CharField(max_length=255)
    about = models.TextField()
    image = models.ImageField(upload_to='about/')
    index = models.IntegerField(primary_key=True,unique=True,help_text="Entered number you want this object  be in what order")

    def __str__(self):
        return self.title

    class Meta:
        ordering = ['-index']
        

class Slider(models.Model):
    title = models.CharField(max_length=255)
    text = models.TextField()
    image = models.ImageField(upload_to='slider/')
    
    
    def __str__(self):
        return self.title
    