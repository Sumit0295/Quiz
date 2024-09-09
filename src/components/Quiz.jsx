import React, { useState, useEffect } from 'react';


function Quiz() {
  const [quizData, setQuizData] = useState([]); // Store quiz data from JSON
  const [currentQuestion, setCurrentQuestion] = useState(0); // Track current question index
  const [selectedOption, setSelectedOption] = useState(null); // Track selected option
  const [showAnswer, setShowAnswer] = useState(false); // Track whether to show answer
  const [score, setScore] = useState(0); // Track the score
  const [showResult, setShowResult] = useState(false); // Track whether quiz is complete
  const [timeLeft, setTimeLeft] = useState(30); // Time left per question
  const [totalTime, setTotalTime] = useState(0); // Total time taken
  const [quizStartTime, setQuizStartTime] = useState(Date.now()); // Start time for total time
  const [animate, setAnimate] = useState(false); // Track if animation should be applied

  // Fetch the quiz data from public/quiz.json when component mounts
  useEffect(() => {
    fetch('/quiz.json')
      .then((response) => response.json())
      .then((data) => setQuizData(data));
  }, []);

  // Timer logic to count down for each question
  useEffect(() => {
    if (timeLeft > 0 && !showAnswer && !showResult) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      handleNextQuestion();
    }
  }, [timeLeft, showAnswer, showResult]);

  useEffect(() => {
    if (quizData.length > 0) {
      setAnimate(true);
      const timer = setTimeout(() => setAnimate(false), 500); // Match duration with animation time
      return () => clearTimeout(timer);
    }
  }, [currentQuestion, quizData]);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setShowAnswer(true);
    if (option === quizData[currentQuestion].answer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizData.length) {
      setCurrentQuestion(nextQuestion);
      setSelectedOption(null);
      setShowAnswer(false);
      setTimeLeft(30); // Reset timer for next question
    } else {
      const totalQuizTime = (Date.now() - quizStartTime) / 1000;
      setTotalTime(totalQuizTime);
      setShowResult(true);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-teal-700 p-8 rounded-lg shadow-lg w-96">
        {showResult ? (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-orange-400">Quiz Complete</h2>
            <p className="text-lg mt-4 text-white font-mono">
              Your score is {score} out of {quizData.length}
            </p>
            <p className="text-lg text-white font-mono mt-2">Total time taken: {totalTime.toFixed(2)} seconds</p>
            <button
              className="mt-6 bg-blue-500 text-white font-mono px-4 py-2 rounded hover:bg-blue-700"
              onClick={() => window.location.reload()}
            >
              Play Again
            </button>
          </div>
        ) : (
          quizData.length > 0 && (
            <div>
              <div className="mb-4 text-center">
                <span className={`text-lg font-semibold text-orange-400 ${animate ? 'slide-in-right' : ''}`}>
                  Time Left: {timeLeft}s
                </span>
              </div>
              <div className="mb-6">
                <h3 className={`text-lg font-semibold text-white font-bold ${animate ? 'slide-in-right' : ''}`}>
                  {quizData[currentQuestion].question}
                </h3>
              </div>
              <div>
                {quizData[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    className={`block w-full py-2 my-2 rounded font-semibold ${
                      showAnswer
                        ? option === quizData[currentQuestion].answer
                          ? 'bg-green-600 text-white' // Darker green for correct answers
                          : option === selectedOption
                          ? 'bg-red-600 text-white' // Darker red for incorrect answers
                          : 'bg-gray-200 text-black' // Light gray for non-selected options after answer is shown
                        : 'bg-white text-black hover:bg-blue-700 hover:text-white' // Default white with hover effects
                    } ${animate ? 'slide-in-right' : ''}`}
                    onClick={() => handleOptionSelect(option)}
                    disabled={showAnswer} // Disable buttons once the answer is shown
                  >
                    {option}
                  </button>
                ))}
              </div>
              {showAnswer && (
                <button
                  className="mt-4 w-full bg-teal-500 text-white py-2 rounded hover:bg-teal-600"
                  onClick={handleNextQuestion}
                >
                  Next Question
                </button>
              )}
              <div className="mt-4 text-center">
                <span className="text-sm text-white">
                  Question {currentQuestion + 1} of {quizData.length}
                </span>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default Quiz;
