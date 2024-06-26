import React from 'react'

export default function Step(props) {
  return (
    <div className="steps">
          <h1 className="step--count">{props.step}</h1>
          <div className="step--description">
            <h3 className="step--title">{props.value}</h3>
            <p>{props.proposition}</p>
          </div>
    </div>
  )
}
