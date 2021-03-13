from http.server import BaseHTTPRequestHandler
import os

os.system("pip install speedtest")

import speedtest

class handler(BaseHTTPRequestHandler):

  def do_GET(self):
		s = speedtest.Speedtest()
		s.get_best_server()
		s.download()
		s.upload()
    self.send_response(200)
    self.send_header('Content-type', 'text/plain')
    self.end_headers()
    self.wfile.write(s.results.dict())
    return