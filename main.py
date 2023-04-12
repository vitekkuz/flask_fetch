from demoDB import DATA
from dbFunctions import *
from flask import Flask, render_template, request
import sqlite3


myapp = Flask(__name__, static_folder="static_dir")


@myapp.route('/')
def index():
    return render_template('index.html', phone_data=get_data_from_DB())


@myapp.route('/sendbtn', methods=["GET", "POST"])
def getDataFun():
    if request.method == "POST":
        jsonData = request.get_json()
        print(jsonData)
        return {
            'title': 'Some text after click button'
        }
    return render_template('index.html')

@myapp.route('/toReadyDocument', methods=["GET", "POST"])
def toReadyDocument():
    if request.method == "POST":
        jsonData = request.get_json()
        print(jsonData)
        return {
            'title': 'Some text after open the page'
        }
    return render_template('index.html')

if __name__ == '__main__':
    init_db()
    insert_DATA_in_DB(DATA)
    myapp.run()
