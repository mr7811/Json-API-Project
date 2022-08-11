import React from 'react'


export default function Quote(props) {
  const {data} = props
  return (
    <div className="Quote-container">
      <h1>Desciption : <div>{data.Description}</div></h1>
      <h1>Author: {data.Author}</h1>
    </div>
  )
}