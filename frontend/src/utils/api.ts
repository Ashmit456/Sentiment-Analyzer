import axios from 'axios';

const API_URL = 'http://localhost:5000'; // Adjust the URL based on your backend configuration

export const getModels = async () => {
    try {
        const response = await axios.get(`${API_URL}/models`);
        return response.data;
    } catch (error) {
        console.error('Error fetching models:', error);
        throw error;
    }
};

export const predictSentiment = async (model: string, text: string): Promise<any> => {
    try {
        const response = await axios.post(`${API_URL}/predict`, { model, text });
        return response.data;
    } catch (error) {
        console.error('Error predicting sentiment:', error);
        throw error;
    }
};