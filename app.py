import time
import threading

from flask import Flask, render_template, redirect
import RPi.GPIO as GPIO

app = Flask(__name__)

GPIO.setmode(GPIO.BOARD)
GPIO.setup(11, GPIO.OUT)
GPIO.output(11, True)

thread_lock = threading.Lock()

@app.route('/')
def index():
    return render_template('home.html')

def open_and_lock_after(timeout=5):
    """
    :param timeout: The time after which the door should be locked
    """
    with thread_lock:
        GPIO.output(11, False)
        time.sleep(5)
        GPIO.output(11, True)


@app.route('/open-door', methods=['POST'])
def open_door():
    thread = threading.Thread(target=open_and_lock_after)
    thread.start()
    return redirect('/?opened=true')


if __name__ == '__main__':
    app.run('0.0.0.0', 80)
