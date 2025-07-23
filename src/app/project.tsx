import React, { useState } from 'react'
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';

export default function Projects() {

  const [showProject, setShowProject] = useState(false)

    const viewProjects = (e: any) => {
      e.preventDefault();
        let divid = document.getElementById('project-content');
        divid?.scrollIntoView({ behavior: 'smooth', inline: 'start',block: 'start'})
    }

  return (
    <div className='w-[100%]'>
        <div className='flex flex-col items-center gap-[10px] mt-[15px]' onClick={(e) => {viewProjects(e);e.preventDefault();setShowProject(true)}}>
            Project
            <KeyboardArrowDownRoundedIcon />
        </div>
        {showProject &&
        <div className='projects-cont' style={{minWidth: '100%',minHeight: '100vh',marginTop: '50px'}} id='project-content'>
          <div className='flex items-center justify-center h-[100vh]'>In Progress</div>
        </div>  
        }
    </div>
  )
}
