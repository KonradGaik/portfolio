import React from 'react'
import './about.css'
import programming_about from '../../img/programming_about.svg'

 const about = () => {
  return (
    <div className='a'>
        <div className="a-left">
            <div className="a-left-wrapper">
                <img src={programming_about} alt="" className='a-img mx-auto' draggable="false" />
            </div>
        </div>
        <div className="a-right mx-10 flex flex-col  justify-between">
            <h1 className="a-title text-white text-3xl">O mnie</h1>
                <b className="a-sub text-white text-2xl">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem, eum.</b>
                <p className='a-desc text-white text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At pariatur rerum repellat quod dicta perferendis, corrupti enim. Sequi natus laboriosam nostrum, cum numquam cumque architecto, esse iusto fugiat facilis animi? Libero eum eius sapiente at minima dolorum dolorem, earum recusandae voluptatum perspiciatis neque, culpa perferendis exercitationem voluptatibus, itaque excepturi officia.</p>
        </div>
    </div>
  )
}

export default about
