import React from 'react'

type Props = {
    question:string;
    questionNumber:number;
}

const QuestionCard: React.FC<Props> = ({question,questionNumber}) => {

    return (
        <div>
          <p className="number">Question:{questionNumber}</p>
          <p dangerouslySetInnerHTML={{__html:question}}/>
        </div>
    )
}

export default QuestionCard;
