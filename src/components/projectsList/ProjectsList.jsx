import React from 'react'
import './projectsList.css'
import Project from '../Project/Project'

const ProjectsList = () => {

    const myProjects = [
        {
            img:{
                src:'',
                alt:''
            },
            url:'http://anvende.com'
        },{
            img:{ 

            },
            url: ''
        },
        {
            img:{

            },
            url:''
        },
        // {
        //     img:{
                
        //     },
        //     url:''
        // },
        // {img:{

        // },
        // url:''},
        // {img:{

        // },
        // url:''}
    ]

  return (
   <div className="pl">
    <div className="pl-texts">
        <b className="pl-title text-5xl text-black">
        Projekty
        </b>
        <p className="pl-desc my-10 text-black">
            <ul className=''>
                <li className='inline-block'>Wszystkie</li>
                <li className='inline-block'>Node.js</li>
                <li className='inline-block'>Express.js</li>
                <li className='inline-block'>MongoDB</li>
                <li className='inline-block'>Laravel</li>
                <li className='inline-block'>React</li>
                <li className='inline-block pl-[0.5rem]'>Python</li>
            </ul>
        </p>
    </div>
    <div className="pl-list">
        {myProjects && myProjects.map((item) => {
           return <Project props={item}/>
        })}
    </div>
   </div>
  )
}

export default ProjectsList
