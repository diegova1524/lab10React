from django.shortcuts import get_object_or_404, render
from .models import Producto

# Create your views here.
def index(request):
    product_list = Producto.objects.order_by('nombre')[:6]
    context = {
        'product_list' : product_list
        }
    return render(request,'index.html', context)

def producto(request, producto_id):
    producto = get_object_or_404(Producto, pk=producto_id)
    return render(request,'producto.html', {'producto': producto})

from rest_framework import generics
from rest_framework.response import Response
from .models import Producto
from .serializer import ProductoSerializer

class IndexView(generics.GenericAPIView):
    def get(self, request):
        context = {'mensaje': 'servidor activo'}
        return Response(context)

class ProductoListView(generics.ListCreateAPIView):
    queryset = Producto.objects.all()
    serializer_class = ProductoSerializer

class ProductoDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Producto.objects.all()
    serializer_class = ProductoSerializer
