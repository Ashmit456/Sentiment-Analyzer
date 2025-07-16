
import { useState } from 'react';
import ModelSelector from '../components/ModelSelector';
import PredictionForm from '../components/PredictionForm';
import PredictionResult from '../components/PredictionResult';
import Footer from '../components/Footer';
import ThemeToggle from '../components/ThemeToggle';
import { getModels, predictSentiment } from '../utils/api';


const Home = () => {
  const [selectedModel, setSelectedModel] = useState('');
  const [inputText, setInputText] = useState('');
  const [prediction, setPrediction] = useState('');
  const [loading, setLoading] = useState(false);

  const handleModelChange = (model: string) => {
    setSelectedModel(model);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(event.target.value);
  };

  const handlePrediction = async () => {
    if (!selectedModel || !inputText) return;
    setLoading(true);
    try {
      const result = await predictSentiment(selectedModel, inputText);
      setPrediction(result.prediction);
    } catch (err) {
      setPrediction('Error');
    }
    setLoading(false);
  };

  return (
    <>
      <div className="header">Sentiment Prediction App</div>
      <div className="container">
        <ThemeToggle />
        <h1>✨ Sentiment Prediction App ✨</h1>
        <ModelSelector selectedModel={selectedModel} onModelChange={handleModelChange} />
        <PredictionForm 
          selectedModel={selectedModel} 
          inputText={inputText} 
          onInputChange={handleInputChange} 
          onPredict={handlePrediction} 
          loading={loading}
        />
        <PredictionResult inputText={inputText} prediction={prediction} />
      </div>
      <Footer />
    </>
  );
};

export default Home;