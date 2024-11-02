import React, { useState } from 'react';
import axios from './services/api';
import QuestionForm from './components/QuestionForm';

function App() {
    const [domain, setDomain] = useState('');
    const [questions, setQuestions] = useState([]);

    const generateQuestions = async () => {
        try {
            const response = await axios.post('/api/questions', { domain });
            setQuestions(response.data.questions);
        } catch (error) {
            console.error('Error generating questions:', error);
        }
    };

    return (
        <div>
            <h1>Interview Preparation App</h1>
            <input
                type="text"
                placeholder="Enter interview domain"
                value={domain}
                onChange={(e) => setDomain(e.target.value)}
            />
            <button onClick={generateQuestions}>Generate Questions</button>

            <div>
                {questions.map((question, index) => (
                    <QuestionForm key={index} question={question} />
                ))}
            </div>
        </div>
    );
}

export default App;
