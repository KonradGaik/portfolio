import React, {useRef} from 'react'
import './contact.css'
import emailjs from '@emailjs/browser';
import Mail from '../../img/icons/Mail.svg'
import Phone from '../../img/icons/Phone.svg'
import Facebook from '../../img/icons/Facebook.svg'
import Instagram from '../../img/icons/Instagram.svg'
import Linkedin from '../../img/icons/Linkedin.svg'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

    const formRef = useRef()
    console.log(process.env.REACT_APP_SERVICE_ID)

    const handleSubmit = e => {
        e.preventDefault()
if( formRef.current.user_name.value  &&
    formRef.current.user_email.value  && 
    formRef.current.user_subject.value  && 
    formRef.current.user_content.value){
  emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, formRef.current, process.env.REACT_APP_USER_ID)
        .then((result) => {
            console.log(result.text);
            toast.success('Wiadomość wysłana', {
                position: "top-right",
                autoClose: 5000,           
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        }, (error) => {
            toast.error('Uzupełnij wszystkie pola!', {
                position: "top-right",
                autoClose: 5000,
                color: 'black',
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        });
    }else{
        toast.error('Uzupełnij wszystkie pola!', {
            position: "top-right",
            autoClose: 5000,
            color: 'black',
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    }
    }

  return (
    <div className='c'>
      <div className="c-bg">
      </div>
      <div className="c-wrapper">
        <div className="c-left">
            <h1 className="c-title text-white">Kontakt</h1>
            <div className="c-info mt-0 ml-10">
                <div className="c-info-item text-white">
                    <img 
                    src={Phone}
                    alt="phone" 
                    draggable='false'
                    className="c-icon"
                     />
                     +48 725 314 720
                  
                </div>
                <div className="c-info-item text-white">
                    <img 
                    src={Mail}
                    alt="mail" 
                    draggable='false'
                    className="c-icon"
                     />
                     konradgaik@icloud.com
                </div>
               <a href="https://www.facebook.com/konrad.gaik.357/">
                <div className="c-info-item text-white">
                    <img 
                    src={Facebook}
                    alt="mail" 
                    draggable='false'
                    className="c-icon"
                     />
                     Facebook
                </div>
                </a>
                <a href="https://www.linkedin.com/in/konrad-gaik-309695187/">
                <div className="c-info-item text-white">
                    <img 
                    src={Linkedin}
                    alt="mail" 
                    draggable='false'
                    className="c-icon"
                     />
                     Linkedin
                </div>
                </a>
             
                <a href="https://www.instagram.com/konradgaik.pl/">
                <div className="c-info-item text-white">
                    <img 
                    src={Instagram}
                    alt="mail" 
                    draggable='false'
                    className="c-icon"
                     />
                     Instagram
                </div>
                </a>
               
            </div>
        </div>
        <div className="c-right">
            <p className="c-desc mx-auto text-black">
                <b className='text-black'>Potrzebujesz wyceny? <br />
                    Chcesz podjąć współpracę?</b> <br />
                Wypełnij formularz, a skontaktuje się z Tobą!
            </p>
            <form ref={formRef} onSubmit={handleSubmit} className='text-black'>
                <input type="text" placeholder='Imie' name='user_name' />
                <input type="email" placeholder='Email' name='user_email' />
                <input type="text" placeholder='Temat' name='user_subject' />
                <textarea name="user_content" className='' placeholder='Treść' id="content" cols="10" rows="5"></textarea>
                <div className="w-[75%]" style={{width: '75%!important',color: 'whitesmoke'}}>
                    <button className='my-4 c-button float-right'>Wyślij</button>
                    </div>
            </form>
        </div>
      </div>
      <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
style={{color:'black'}}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
className='text-black'
/>
{/* Same as */}
<ToastContainer />
    </div>
    
  )
}

export default Contact
