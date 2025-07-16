import React, { useState } from 'react';
import { useEffect } from 'react';
import { predictSentiment } from '../utils/api';
import ModelSelector from './ModelSelector';
import PredictionResult from './PredictionResult';

interface PredictionFormProps {
  selectedModel: string;
  inputText: string;
  onInputChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onPredict: () => void;
  loading: boolean;
}

const PredictionForm: React.FC<PredictionFormProps> = ({ selectedModel, inputText, onInputChange, onPredict, loading }) => {
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    onPredict();
  };

  return (
    <div className="prediction-form">
      <h2>Sentiment Prediction</h2>
      <form onSubmit={handleSubmit} style={{display:'flex',flexDirection:'column',gap:16}}>
        <textarea
          value={inputText}
          onChange={onInputChange}
          placeholder="Enter your text here..."
          rows={4}
          style={{fontSize:'1rem',border:'1px solid #e5e7eb',borderRadius:'8px',padding:'12px'}}
        />
        <button type="submit" disabled={loading || !selectedModel || !inputText} style={{marginTop:8}}>
          {loading ? '⏳ Loading...' : '🚀 Predict'}
        </button>
      </form>
    </div>
  );
};

export default PredictionForm;