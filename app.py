from flask import Flask, request, session, redirect, url_for, render_template, flash

app = Flask(__name__)


@app.route('/')
def base_page():
    return render_template('base.html')


@app.route('/page_0')
def page():
    return render_template('page_0.html')



