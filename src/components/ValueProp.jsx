import React from 'react'
import Value from './Value'

export default function ValueProp() {
  return (
    <div className= "proposition--container">
      <Value proposition="Reduce pollution" icon="environment"/>
      <Value proposition="Save money" icon="money"/>
      <Value proposition="Save time" icon="time"/>
    </div>
  )
}
