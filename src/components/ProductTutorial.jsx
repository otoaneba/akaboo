import React from 'react'
import Step from './Step'
import data from '../assets/data.json';

export default function ProductTutorial(props) {

  const process = data[props.process].map((item) => (
    <Step key={item.step} step={item.step} value={item.value} proposition={item.proposition}/>
  ))

  return (
    <div className="product--tutorial">
      <h2 className="tutorial--title">{`${props.process}`} on Akaboo</h2>
      <div className="step--container">
        {process}
      </div>
    </div>
  )
}
