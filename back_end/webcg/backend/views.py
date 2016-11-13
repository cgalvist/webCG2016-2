import json
from django.shortcuts import render
from rest_framework.decorators import api_view
from django.http.response import HttpResponse
from django.core.mail import send_mail


@api_view(['POST'])
def api_view_send_json_to_office(request):
	message = request.POST.get("message")
	if (message):
		# print(request.POST.get("message"))
		send_mail(
		    'cotizacion producto',
		    message,
		    'interno',
		    ['pjrodriguezg@unal.edu.co'],
		    #['Computaciongrafica2016@hotmail.com'],
		    fail_silently=False,
		)
		return HttpResponse(
				json.dumps({"message": "Message sent: " + message}),
				content_type = "application/json"
			)
	else:
		return HttpResponse(
				json.dumps({"message": "no messsage"}),
				content_type = "application/json"
			)
