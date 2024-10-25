import React, { useState } from 'react';
import './HiddenWord.css';

const HiddenWord = () => {
  const [typedText, setTypedText] = useState('');
  const hiddenWord = 'reschool';

  const handleChange = (event) => {
    setTypedText(event.target.value);
  };

  const getFeedback = () => {
    let feedback = '';
    for (let i = 0; i < hiddenWord.length; i++) {
      feedback += typedText[i] === hiddenWord[i] ? typedText[i] : '_';
    }
    return feedback;
  };

  const isCorrect = typedText === hiddenWord;

  return (
    <div className="hidden-word">
      <h1>Hidden Word Detection</h1>
      <input
        type="text"
        value={typedText}
        onChange={handleChange}
        placeholder="Type here to guess the word"
        className="hidden-word-input"
      />
      <p>Progress: {getFeedback()}</p>
      {isCorrect && <p className="congratulations">Congratulations! You've found the hidden word: "{hiddenWord}"</p>}
    </div>
  );
};

export default HiddenWord;
