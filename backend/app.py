
from flask import Flask, request, jsonify
import joblib
import os
from flask_cors import CORS



app = Flask(__name__)
CORS(app)

# Sklearn models
model_files = {
    "model1": "models/Logistic_Regression.pkl",
    "model2": "models/Random_Forest.pkl",
    "model3": "models/XGBoost.pkl"
}
models = {}
for model_name, model_path in model_files.items():
    models[model_name] = joblib.load(model_path)

# Shared TF-IDF vectorizer
tfidf_vectorizer = joblib.load('models/tfidf_vectorizer.pkl')




@app.route('/predict', methods=['POST'])

def predict():
    data = request.json
    model_name = data.get('model')
    text = data.get('text')

    if model_name in models:
        X = tfidf_vectorizer.transform([text])
        prediction = models[model_name].predict(X)
        pred_label = int(prediction[0])
        return jsonify({"input": text, "prediction": pred_label})
    else:
        return jsonify({"error": "Model not found"}), 404

@app.route('/models', methods=['GET'])
def get_models():
    return jsonify(list(models.keys()))

if __name__ == '__main__':
    app.run(debug=True)