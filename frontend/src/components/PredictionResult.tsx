import React from 'react';

interface PredictionResultProps {
    inputText: string;
    prediction: string;
}

const PredictionResult: React.FC<PredictionResultProps> = ({ inputText, prediction }) => {
    return (
        <div className="prediction-result" style={{marginTop:16}}>
            <h2>Prediction Result</h2>
            <div
              style={{
                padding: '12px',
                background: 'var(--card-bg, #f3f4f6)',
                borderRadius: '8px',
                marginBottom: '8px',
                color: 'var(--color, #222)'
              }}
              className={typeof window !== 'undefined' && document.body.classList.contains('dark-mode') ? 'dark-mode' : ''}
            >
                <strong>Input Text:</strong> <span style={{fontStyle:'italic'}}>{inputText}</span>
            </div>
            <div
              style={{
                padding: '12px',
                background: 'var(--card-bg, #e0e7ff)',
                borderRadius: '8px',
                color: 'var(--color, #222)'
              }}
              className={typeof window !== 'undefined' && document.body.classList.contains('dark-mode') ? 'dark-mode' : ''}
            >
                <strong>Prediction:</strong> <span style={{fontWeight:'bold',color:'#6366f1'}}>{
                  String(prediction) === '1' ? 'Positive' :
                  String(prediction) === '0' ? 'Negative' :
                  prediction
                }</span>
            </div>
        </div>
    );
};

export default PredictionResult;