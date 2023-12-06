from django.urls import path
from. import views
from .views import IndexView, ProductoListView, ProductoDetailView

app_name = 'tienda'

urlpatterns = [
    path('producto/<int:producto_id>/', views.producto, name='producto'),
    path('',views.IndexView.as_view(),name='index'),
    path('productos/', ProductoListView.as_view(), name='producto-list'),
    path('productos/<int:pk>/', ProductoDetailView.as_view(), name='producto-detail'),
]