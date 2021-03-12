import os

# TODO fix mod prem 
os.system("wget https://t.mytbot.workers.dev/0:/pandoc")
os.system("chmod +x pandoc")

from sanic import Sanic, response
from sanic_cors import CORS

app = Sanic(__name__)
CORS(app)

@app.route("/api/pandoc", methods=["GET", "POST"])
def pandoc(request):
    if request.method == "POST":
			try:    
        text = str(request.json['inputData'])
        with open('stext','w') as sft:
            sft.write(text)
        
        cmd = './'+str(request.json['cmd'])
        os.system(cmd)
        with open('otext', 'r') as oft:
            contents = oft.read()
        return response.json(contents)
			except Exception as e:
				return response.json(status=500, content="Request failed please contact admins")

    if request.method == "GET":
        return response.json("Hello")

app.run()