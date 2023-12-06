from django.db import models

class Producto(models.Model):
    codigo = models.CharField(max_length=20, primary_key=True)
    descripcion = models.TextField()
    precio = models.DecimalField(max_digits=10, decimal_places=2)
    
    def __str__(self):
        return self.descripcion
