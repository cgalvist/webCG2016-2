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
		print(0)
		json_data = json.loads(unicode(request.POST.get("message")))
		print(1)
		print(json_data["datosUsuario"]["email"])
		print(2)
		send_mail(
		    'cotizacion producto',
		    message,
		    'interno',
		    #['pjrodriguezg@unal.edu.co'],
		    ['computaciongrafica20163@gmail.com'],
		    fail_silently=False,
		)

		print(3)
		confirmation_message = u' '.join(('Saludos ',json_data["datosUsuario"]["nombre"],json_data["datosUsuario"]["apellidos"], u", \nEstamos procesando su solicitud, en los proximo minutos va a recibir los detalles de su producto. \nGracias."))
		print(6)
		send_mail(
		    u'Estamos procesando su solicitud',
		    confirmation_message,
		    u'confirmation',
		    [json_data["datosUsuario"]["email"]],
		    fail_silently=False,
		)
		print(4)
		print(confirmation_message)
		print(5)
		return HttpResponse(
				json.dumps({"message": "Message sent: " + message}),
				content_type = "application/json"
			)
	else:
		return HttpResponse(
				json.dumps({"message": "no messsage"}),
				content_type = "application/json"
			)
