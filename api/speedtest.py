import speedtest

from sanic import Sanic, response
from sanic_cors import CORS

app = Sanic(__name__)
CORS(app)

@app.route("/api/speedtest", methods=["GET"])
def pandoc(request):
    if request.method == "GET":
        s = speedtest.Speedtest()
        s.get_best_server()
        s.download()
        s.upload()
        rstest=s.results.dict()
        download_speed = rstest.get("download")
        upload_speed = rstest.get("upload")
        ping_time = rstest.get("ping")
        client_infos = rstest.get("client")
        i_s_p = client_infos.get("isp")
        i_s_p_rating = client_infos.get("isprating")
        return response.json({download_speed, upload_speed, client_infos, i_s_p, i_s_p_rating})

app.run()