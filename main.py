from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "*"}})


@app.route("/api/main", methods=["POST"])
def calculate_square():
    data = request.json
    number = data.get("number", 0)
    result = {"square": number**2}
    return jsonify(result)


@app.route("/")
def index():
    return "Flask server is running!"


if __name__ == "__main__":
    app.run(port=5001, host="0.0.0.0")
