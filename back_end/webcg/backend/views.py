import json
from django.shortcuts import render
from rest_framework.decorators import api_view
from django.http.response import HttpResponse

@api_view(['POST'])
def api_view_hello(request):
	message = request.POST.get("message")
	if (message):
		print(request.POST.get("message"))
		return HttpResponse(
				json.dumps({"message": "hello world: " + message}),
				content_type = "application/json"
			)
	else:
		return HttpResponse(
				json.dumps({"message": "no messsage"}),
				content_type = "application/json"
			)
