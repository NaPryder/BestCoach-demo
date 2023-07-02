import React, { useState } from 'react'
import PlusCircle from '@icons/PlusCircle'
import MinusCircle from '@icons/MinusCircle'

const QuestionAnswerBox = ({ question, answer, ...props }) => {
  const [showAnswer, setOpenAnswer] = useState(false)

  return (
    <div className="question-answer-box">
      <div
        className={showAnswer ? 'dialog background-gray' : 'dialog background-white'}
        onClick={() => setOpenAnswer(!showAnswer)}
      >
        <div className="question">
          <h3>{question}</h3>
          {showAnswer ? (
            <MinusCircle size="lg" color="gray" shade="primary" />
          ) : (
            <PlusCircle size="lg" color="gray" shade="secondary" />
          )}
        </div>
        {showAnswer && <p className="answer">{answer}</p>}
      </div>
    </div>
  )
}

export default QuestionAnswerBox
