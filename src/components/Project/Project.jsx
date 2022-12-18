import React from 'react'
import './project.css'
import anvendeLP from '../../img/projects/anvendeLP.png'

const Project = props => {
// const {url, img} = props.props
// const {src, alt} = img
  return (<>
    <div className='p'>
      <div className="p-browser">
        <div className="p-circle" style={{backgroundColor:'#FE5E57'}}></div>
        <div className="p-circle" style={{backgroundColor:'#FEBC2E'}}></div>
        <div className="p-circle" style={{backgroundColor:'#27c840'}}></div>
        <div className='ml-2 text-white'>MERN</div>
        <div className='ml-auto mr-2 text-white'><a href='http://github.com'>GitHub</a></div>
        {/* <div className='ml-3 text-white'><a href='http://github.com'>Demo</a></div> */}
      </div>
      <a href="http://anvende.com" rel="noreferrer" target="_blank">
        <img className='p-img' src={anvendeLP} alt='' /> 
      </a>
    </div>
    
    </>
  )
}

export default Project
