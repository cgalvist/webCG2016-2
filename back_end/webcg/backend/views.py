#!/usr/bin/env python
# -*- coding: utf-8 -*-
import json
from django.shortcuts import render
from rest_framework.decorators import api_view
from django.http.response import HttpResponse
from django.core.mail import send_mail


@api_view(['POST'])
def api_view_send_json_to_office(request):
	message = request.POST.get("message")
	if (message):
		#print(request.POST.get("message"))
		json_data = json.loads(request.POST.get("message"))
		print(json_data["datosUsuario"]["email"])
		send_mail(
		    'cotizacion producto',
		    message,
		    'interno',
		    #['pjrodriguezg@unal.edu.co'],
		    ['computaciongrafica20163@gmail.com'],
		    fail_silently=False,
		)

		confirmation_message = 'Saludos '+json_data["datosUsuario"]["nombre"]+" "+json_data["datosUsuario"]["apellidos"]+u", \nEstamos procesando su solicitud, en los próximos minutos recibirá los detalles de su cotización. \nGracias."
		send_mail(
		    'Estamos procesando su solicitud',
		    confirmation_message,
		    'Computación Gráfica',
		    json_data["datosUsuario"]["email"],
		    fail_silently=False,
		)
		print(confirmation_message)
		return HttpResponse(
				json.dumps({"message": "Message sent: " + message}),
				content_type = "application/json"
			)
	else:
		return HttpResponse(
				json.dumps({"message": "no messsage"}),
				content_type = "application/json"
			)
