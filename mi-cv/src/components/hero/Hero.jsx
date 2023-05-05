import React from 'react';
import "./hero.css";
const Hero = (Hero) => {
  return (
    <div className='hero'>
       <img className='img' src="https://i.pinimg.com/originals/38/25/82/382582edd9168e30db6933cf161de8de.jpg" alt="" /> Image:

      <h2 className='name'>Name: "Angelica"</h2>
      <p className='adress'>Adress: "Virgen del portillo"</p>
      <p className='city'>City: "Madrid",</p>
      <p className='email'>Email: "pereiraanngy@gmail.com"</p>
      <a className='a' href='"https://github.com/angiepereir"'>GitHub:</a>
   

    </div>
  )
}

export default Hero