import React, { useState } from 'react';
import axios from '../services/api';

function QuestionForm({ question }) {
    const [answer, setAnswer] = useState('');
    const [verification, setVerification] = useState(null);

    const verifyAnswer = async () => {
        try {
            const response = await axios.post('/api/answers', { question, answer });
            setVerification(response.data.verification);
        } catch (error) {
            console.error('Error verifying answer:', error);
        }
    };

    return (
        <div>
            <h2>{question}</h2>
            <textarea
                placeholder="Type your answer here..."
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
            />
            <button onClick={verifyAnswer}>Verify Answer</button>
            {verification && <p>Verification Result: {verification}</p>}
        </div>
    );
}

export default QuestionForm;
