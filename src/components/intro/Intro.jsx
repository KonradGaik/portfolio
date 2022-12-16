import React from 'react'
import './intro.css';
import photo1 from '../../img/photo1.png'
import CV from '../../files/KONRAD_GAIK_CV.pdf'

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
                        <div className="i-title-item text-4xl justify-center">Social Media Creator</div>
                        <div className="i-title-item text-4xl justify-center">Blogger</div>
                    </div>
                </div>
                <div className='i-desc'>
               <b className='text-xl'> Jestem ambitnym i dynamicznym młodym programistą, który jest zawsze gotowy na nowe wyzwania i chętnie uczy się nowych technologii.</b>

                </div>
                <a href={CV} download className='w-[125px] h-[50px] bg-[#edf6f9] i-cv text-black border-3xl mx-auto hover:text-green-200 hover:bg-black transition duration-1000 ease-in-out'>Résumé</a>
            </div>
        </div>

        <div className='i-right'>
            <div className="i-right-wrapper">
                <div className="i-bg">  
                <img className='i-image' src={photo1} alt="author" draggable="false"  />
                </div>
            </div>
        </div>
    </div>
  )
}

export default intro;
