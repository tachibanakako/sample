from flask import Flask, jsonify
app = Flask(__name__)

@app.route('/')
def index():
    return "Hello from Flask!"

@app.route('/json')
def json_sample():
    data = {"message": "This is JSON response"}
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)