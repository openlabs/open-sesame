import time

from flask import Flask, render_template, redirect
import RPi.GPIO as GPIO

app = Flask(__name__)

GPIO.setmode(GPIO.BOARD)
GPIO.setup(11, GPIO.OUT)
GPIO.output(11, True)


@app.route('/')
def index():
    return render_template('home.html')


@app.route('/open-door', methods=['POST'])
def open_door():
    GPIO.output(11, False)
    time.sleep(5)
    GPIO.output(11, True)
    return redirect('/?opened=true')


if __name__ == '__main__':
    app.run('0.0.0.0', 80)
