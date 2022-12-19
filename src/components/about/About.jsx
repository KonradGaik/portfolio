import React, {useState,useEffect, useRef, useMemo} from 'react'
import './about.css'
import programming_about from '../../img/programming_about.svg'

 const About = () => {
  const targetRef = useRef(null)
const [isVisible, setIsVisible] = useState(false)

const [jsValue,setJsValue] = useState(0)
const [nodeValue,setNodeValue] = useState(0)
const [expressValue,setExpressValue] = useState(0)
const [mongoValue,setMongoValue] = useState(0)
const [phpValue,setPhpValue] = useState(0)
const [reactValue,setReactValue] = useState(0)
const [pythonValue,setPythonValue] = useState(0)


const callbackFunction = entries => {
  const [entry] = entries
  setIsVisible(entry.isIntersecting)
}

const options = useMemo(() => {
  return {
    root: null,
    rootMargin: '0px',
    threshold: 0.3
  }
}, []);

useEffect(() => {
  const observer = new IntersectionObserver(callbackFunction, options);
  const currentTarget = targetRef.current;
  if(currentTarget){
    observer.observe(currentTarget)
      setJsValue(65);
      setNodeValue(55);
      setExpressValue(55);
      setMongoValue(55);
      setPhpValue(40);
      setReactValue(55);
      setPythonValue(20);
  }

  return () => {
    if(currentTarget){
      observer.unobserve(currentTarget)
      setJsValue(0);
      setNodeValue(0);
      setExpressValue(0);
      setMongoValue(0);
      setPhpValue(0);
      setReactValue(0);
      setPythonValue(0);
    }
  }
}, [targetRef, options])

    // useEffect(() => {
    //     setJsValue(75);
    //     setNodeValue(65);
    //     setExpressValue(65);
    //     setMongoValue(65);
    //     setPhpValue(50);
    //     setLaravelValue(50);
    //     setPythonValue(20);
    //   });

  return (
    <div className='a'>
        <div className="a-left">
            <div className="a-left-wrapper">
                <img src={programming_about} alt="" className='a-img mx-auto' draggable="false" />
            </div>
        </div>
        <div className="a-right mx-10 flex flex-col  justify-between">
            <h1 className="a-title text-white text-3xl">My skills  </h1>
                <b className="a-sub text-white text-2xl">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem, eum.</b>
                {/* <p className='a-desc text-white text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At pariatur rerum repellat quod dicta perferendis, corrupti enim. Sequi natus laboriosam nostrum, cum numquam cumque architecto, esse iusto fugiat facilis animi? Libero eum eius sapiente at minima dolorum dolorem, earum recusandae voluptatum perspiciatis neque, culpa perferendis exercitationem voluptatibus, itaque excepturi officia.</p> */}
<div className='w-[80%] my-5 mx-auto' ref={targetRef}>
<div className='mb-3'>
<div class=" m-0 text-white mr-auto">JavaScript</div>
<div class="w-full h-4 bg-gray-800 rounded-full">
  <div class="progress h-4 bg-yellow-300 rounded-full" style={{width: `${isVisible ? jsValue : 0}%`}}></div>
</div>
</div>
<div className='mb-3'>
<div class=" m-0 text-white mr-auto">Node.js</div>
<div class="w-full h-4 bg-gray-800 rounded-full">
  <div class="progress h-4 bg-green-600 rounded-full" style={{width: `${isVisible ? nodeValue : 0}%`}}></div>
</div>
</div>

<div className='mb-3'>
<div class=" m-0 text-white mr-auto">Express.js</div>
<div class="w-full h-4 bg-gray-800 rounded-full">
  <div class="progress h-4 bg-gray-300 rounded-full" style={{width: `${isVisible ? expressValue : 0}%`}}></div>
</div>
</div>

<div className='mb-3'>
<div class=" m-0 text-white mr-auto">MongoDB</div>
<div class="w-full h-4 bg-gray-800 rounded-full">
  <div class="progress h-4 bg-[#3FA037] rounded-full" style={{width: `${isVisible ? mongoValue : 0}%`}}></div>
</div>
</div>

<div className='mb-3'>
<div class=" m-0 text-white mr-auto">React</div>
<div class="w-full h-4 bg-gray-800 rounded-full">
  <div class="progress h-4 bg-blue-500 rounded-full" style={{width: `${isVisible ? reactValue : 0}%`}}></div>
</div>
</div>

<div className='mb-3'>
<div class=" m-0 text-white mr-auto">PHP & Laravel</div>
<div class="w-full h-4 bg-gray-800 rounded-full">
  <div class="progress h-4 bg-[#8892bf] rounded-full" style={{width: `${isVisible ? phpValue : 0}%`}}></div>
</div>
</div>

<div className='mb-3'>
<div class=" m-0 text-white mr-auto">Python</div>
<div class="w-full h-4 bg-gray-800 rounded-full">
  <div class="progress h-4 bg-yellow-300 rounded-full" style={{width: `${isVisible ? pythonValue : 0}%`}}></div>
</div>
</div>


</div>
        </div>
    </div>
  )
}

export default About
