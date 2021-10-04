from django.contrib import admin
from .models import Listing, Price_History
# Register your models here.


class ListingAdmin(admin.ModelAdmin):
    list_display = ('finn_code', 'contact_name',
                    'orignal_price', 'phone_number', 'status')


# class DefinitionAdmin(admin.ModelAdmin):
#     list_display = ('finn_code', 'title', 'Model', 'Brand',
#                     'Engine_Type', 'Fuel', 'Color', 'Seating', 'Sleeps')


admin.site.register(Listing, ListingAdmin)
admin.site.register(Price_History)
# admin.site.register(Definition, DefinitionAdmin)
