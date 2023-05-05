import React from 'react'
import "./educacion.css"
const Educacion  = ({education}) => {
  return (
    <div>
          <div className="educacion card">
        {education.map((item) => {
          return (
            <div key={JSON.stringify(item)}>
              <p className="name">📕 {item.name}</p>
              <p  className='centro'>{item.where}</p>
              <p className='date'>{item.date}</p>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default Educacion 