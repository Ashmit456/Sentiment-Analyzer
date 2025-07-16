# Sentiment Prediction App - Frontend

This is the frontend part of the Sentiment Prediction App, built using React and Next.js. The application allows users to select from multiple trained sentiment analysis models, input text for analysis, and view the prediction results. It also features a toggle for dark and light mode.

## Getting Started

To get started with the frontend application, follow these steps:

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd sentiment-prediction-app/frontend
   ```

2. **Install Dependencies**
   Make sure you have Node.js installed. Then, run the following command to install the required packages:
   ```bash
   npm install
   ```

3. **Run the Application**
   Start the development server:
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:3000`.

## Folder Structure

- `src/components`: Contains React components for model selection, prediction form, prediction results, and theme toggle.
- `src/pages`: Contains the main pages of the application.
- `src/styles`: Contains global and theme-specific styles.
- `src/utils`: Contains utility functions for API calls to the backend.

## Components Overview

- **ModelSelector**: A component that allows users to select a sentiment analysis model.
- **PredictionForm**: A component that provides a form for users to input text for sentiment analysis.
- **PredictionResult**: A component that displays the input message and the output prediction.
- **ThemeToggle**: A component that allows users to switch between dark and light modes.

## API Integration

The frontend communicates with the backend to fetch model predictions. Ensure that the backend server is running before making requests.

## Themes

The application supports both dark and light themes. Users can toggle between these modes using the ThemeToggle component.

## License

This project is licensed under the MIT License. See the LICENSE file for details.