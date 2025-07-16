# Sentiment Prediction App Backend

This is the backend component of the Sentiment Prediction App, which provides a RESTful API for sentiment analysis using pre-trained models.

## Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd sentiment-prediction-app/backend
   ```

2. **Create a Virtual Environment**
   It is recommended to create a virtual environment to manage dependencies.
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   ```

3. **Install Dependencies**
   Install the required Python packages using pip.
   ```bash
   pip install -r requirements.txt
   ```

4. **Run the Application**
   Start the backend server.
   ```bash
   python app.py
   ```

   The server will be running at `http://localhost:5000` (or the port specified in your app).

## API Endpoints

### Model Selection
- **Endpoint:** `/api/models`
- **Method:** `GET`
- **Description:** Retrieves the list of available models for selection.

### Sentiment Prediction
- **Endpoint:** `/api/predict`
- **Method:** `POST`
- **Description:** Accepts a JSON payload with the selected model and input text, and returns the sentiment prediction.
- **Request Body:**
  ```json
  {
    "model": "model1",  // Choose from model1, model2, model3, model4
    "text": "Your input text here"
  }
  ```
- **Response:**
  ```json
  {
    "prediction": "positive",  // or "negative", "neutral"
    "input": "Your input text here"
  }
  ```

## Models
The backend includes the following pre-trained sentiment analysis models:
- `model1.pkl`
- `model2.pkl`
- `model3.pkl`
- `model4.pkl`

These models are loaded and used for making predictions based on user input.

## License
This project is licensed under the MIT License. See the LICENSE file for details.