import React from 'react'
import './intro.css';
import photo1 from '../../img/introBLUE.png'
import CV from '../../files/KONRAD_GAIK_CV.pdf'
import react from '../../img/icons/reactjs-icon.svg'
import laravel from '../../img/icons/laravel.svg'
import nodejs from '../../img/icons/node.svg'
import expressjs from '../../img/icons/expressjs.svg'
import mongodb from '../../img/icons/mongodb.svg'
import py from '../../img/icons/python.svg'
 const intro = () => {
  return (
    <div className='i'>
        <div className='i-left'>
            <div className="i-left-wrapper">
                <h2 className='i-intro'>Cześć, nazywam się</h2>
                <b className='i-name text-6xl'>Konrad Gaik</b>
                <div className="i-title">
                    <div className="i-title-wrapper">
                        <div className="i-title-item text-4xl justify-center">Programmer</div>
                        <div className="i-title-item text-4xl justify-center">Web Developer</div>
                        <div className="i-title-item text-4xl justify-center">Video Maker</div>
                        <div className="i-title-item text-4xl justify-center">Content Creator</div>
                        <div className="i-title-item text-4xl justify-center">CS Student</div>
                        <div className="i-title-item text-4xl justify-center">Blogger</div>
                    </div>
                </div>
                <div className='i-desc'>
               <b className='text-xl'> Jestem ambitnym i dynamicznym młodym programistą, który jest zawsze gotowy na nowe wyzwania.</b>
                </div>
                <a href={CV} download className='w-[125px] h-[50px] bg-[#edf6f9] i-cv text-black border-3xl mx-auto hover:text-green-200 hover:bg-black transition duration-1000 ease-in-out'>Résumé</a>
            </div>
        </div>

        <div className='i-right'>
            <div className="i-right-wrapper">
                <div className="i-bg ">  
               
                <div className='tech-bubble z-2000 bg-[#006d77] w-[15vw] h-[15vw] md:w-[10vw] md:h-[10vw] md:h-[5vw] lg:h-[5vw]  lg:w-[5vw] absolute top-[15%] shadow-2xl left-[15%] rounded-[50%]'>
                    <img src={react} draggable="false" alt="react logo" className='mx-auto p-1 w-100 h-100' />
                </div>
                <div className='tech-bubble z-2000 bg-[#006d77] w-[15vw] h-[15vw] md:w-[10vw] md:h-[10vw] md:h-[5vw] lg:h-[5vw]  lg:w-[5vw] absolute top-[35%] shadow-2xl left-[10%] rounded-[50%]'>
                <img src={expressjs} draggable="false" alt="react logo" className='mx-auto p-1 w-100 h-100' />
                </div>
                <div className='tech-bubble z-2000 bg-[#006d77] w-[15vw] h-[15vw] md:w-[10vw] md:h-[10vw] md:h-[5vw] lg:h-[5vw]  lg:w-[5vw] absolute top-[20%] shadow-2xl right-[5%] rounded-[50%]'>
                <img src={py} draggable="false" alt="react logo" className='mx-auto p-3 w-100 h-100' />
                </div>
                <div className='tech-bubble z-2000 bg-[#006d77] w-[15vw] h-[15vw] md:w-[10vw] md:h-[10vw] md:h-[5vw] lg:h-[5vw]  lg:w-[5vw] absolute top-[40%] shadow-2xl right-[10%] rounded-[50%]'>
                <img src={nodejs} draggable="false" alt="react logo" className='mx-auto p-1 w-100 h-100' />
                </div>
                <div className='tech-bubble z-2000 bg-[#006d77] w-[15vw] h-[15vw] md:w-[10vw] md:h-[10vw] md:h-[5vw] lg:h-[5vw]  lg:w-[5vw] absolute top-[50%] shadow-2xl left-[25%] rounded-[50%]'>
                <img src={laravel} draggable="false" alt="react logo" className='mx-auto p-2 w-100 h-100' />
                </div>
                <div className='tech-bubble z-2000 bg-[#006d77] w-[15vw] h-[15vw] md:w-[10vw] md:h-[10vw] md:h-[5vw] lg:h-[5vw]  lg:w-[5vw] absolute top-[5%] shadow-2xl right-[15%] rounded-[50%]'>
                <img src={mongodb} draggable="false" alt="react logo" className='mx-auto p-1 w-100 h-100' />
                </div>
                <img className='i-image bg-[#edf6f9] pt-5' src={photo1} alt="author" draggable="false"  />

                </div>
            </div>
        </div>
    </div>
  )
}

export default intro;
