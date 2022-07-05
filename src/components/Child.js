import React from 'react'

export default function Child({car, count, increase}) {
  return (
    <>
    <div>This is Child Component  {car} {count} </div>
    <button onClick={() => increase()} >Child Button </button>
    </>
  )
}
