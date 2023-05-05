import React from 'react'
import "./experience.css"
const Experience = ({experience}) => {
  return (
    <div>
         <div className="experiencia card">
         {experience.map((item) => {
          return (
            <div key={JSON.stringify(item)}>
              <p className="name">📕 {item.name}</p>
              <p className='where'>{item.where}</p>
              <p className='description'>{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default Experience