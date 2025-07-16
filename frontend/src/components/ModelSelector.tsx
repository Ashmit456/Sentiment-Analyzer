import React from 'react';

const models = [
    { id: 'model1', name: 'Sentiment Model 1' },
    { id: 'model2', name: 'Sentiment Model 2' },
    { id: 'model3', name: 'Sentiment Model 3' },
];

interface ModelSelectorProps {
    selectedModel: string;
    onModelChange: (modelId: string) => void;
}

const ModelSelector: React.FC<ModelSelectorProps> = ({ selectedModel, onModelChange }) => {
    return (
        <div style={{marginBottom:16}}>
            <label htmlFor="model-select">Select a Model:</label>
            <select
                id="model-select"
                value={selectedModel}
                onChange={(e) => onModelChange(e.target.value)}
                style={{fontWeight:'500',fontSize:'1rem'}}
            >
                <option value="">Choose a model...</option>
                {models.map((model) => (
                    <option key={model.id} value={model.id}>
                        {model.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default ModelSelector;