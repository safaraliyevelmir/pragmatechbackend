from django.db import models

class AboutPageContent(models.Model):
    content = models.TextField()
    image = models.ImageField(upload_to="about/")
    
    def __str__(self):
        return f"About page {self.pk}"
    
class ProgramPageContent(models.Model):
    content = models.TextField()
    image = models.ImageField(upload_to="about/")
    
    def __str__(self):
        return f"Program page {self.pk}"
      
class AboutTimeLine(models.Model):

    title = models.CharField(max_length=255)
    about = models.TextField()
    image = models.ImageField(upload_to='about/',null=True,blank=True)
    index = models.IntegerField(primary_key=True,unique=True,help_text="Entered number you want this object  be in what order")

    def __str__(self):
        return self.title

    class Meta:
        ordering = ['index']
        

class Slider(models.Model):
    title = models.CharField(max_length=255)
    text = models.TextField()
    image = models.ImageField(upload_to='slider/',null=True,blank=True)
    
    
    def __str__(self):
        return self.title
    