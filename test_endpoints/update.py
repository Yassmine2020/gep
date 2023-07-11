import requests
import json

url = "http://192.168.100.244:8080/devman/update/device"

payload = json.dumps({
  "device_id": "HOME2_LIGHT",
  "house": "tdart",
  "new_device_id": "HOME"
})
headers = {
  'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json',
  'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiZ3NicCIsInJvbGUiOiJlZGl0b3IiLCJleHAiOjE2ODg2MzgzMTd9.K5ZQzngFINuZWLjljxIyKmLL0eOTSAKuztiHOu6Pjhs'
}

response = requests.request("PUT", url, headers=headers, data=payload)

print(type(payload))
print(response.text)
