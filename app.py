"""Portfolio site served with Flask.

Layout:
    app.py              this file (routes)
    templates/          HTML pages (Jinja templates)
    static/css/         stylesheets
    static/js/          browser JavaScript
    static/images/      photos, screenshots, certificates
    static/files/       downloadable files (resume)

Run locally:
    pip install -r requirements.txt
    python app.py           -> http://127.0.0.1:5000
"""
import os

from flask import Flask, render_template

app = Flask(__name__)


@app.route("/")
def index():
    return render_template("index.html")


if __name__ == "__main__":
    app.run(debug=os.environ.get("FLASK_DEBUG") == "1")
