import time

from flask import Flask, render_template
import RPi.GPIO as GPIO

app = Flask(__name__)

GPIO.setmode(GPIO.BOARD)
GPIO.setup(11, GPIO.OUT)


@app.route('/')
def index():
    return render_template('home.html')


@app.route('/open-door', methods=['POST'])
def open_door():
    GPIO.output(11, True)
    time.sleep(5)
    GPIO.output(11, False)
    return "The door should be open"

if __name__ == '__main__':
    app.run('0.0.0.0', 80)
