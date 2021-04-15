from flask import Flask, render_template, request, redirect, url_for
from api import get_api

app = Flask(__name__)

@app.route('/')
def index():
    names, nums, ranks = get_api()
    n = len(names)
    return render_template('index.html',ranks=ranks, names=names, nums=nums, n=n)


if __name__ == "__main__":
    app.run(debug=True)