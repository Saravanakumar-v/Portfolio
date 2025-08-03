'use client';

import React, { useEffect, useState } from 'react'
import './globals.scss'
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import BusinessRoundedIcon from '@mui/icons-material/BusinessRounded';
import { useToggle } from './toggleContext';

export default function Content() {

  const {toggle, setToggle} = useToggle();

  useEffect(() => {
    let contentElement = document.getElementById(`${toggle}-content`);
    contentElement?.scrollIntoView({ behavior: 'smooth',inline: 'center'});
  },[toggle])

  return (
    <div className='container-fluid experience flex flex-col gap-[20px]'>
        <div className={'toggle flex items-center '+toggle}>
            <div className='  toggle-bg' style={{transition: 'all ease .5s',left: toggle == 'exp' ?'2px' :'49.5%'}}></div>
            <div className={toggle == 'exp' ?'btn-primary exp' :'btn-secondary'} onClick={() => setToggle('exp')}><BusinessRoundedIcon />Experience</div>
            <div className={toggle == 'edu' ?'btn-primary edu' :'btn-secondary'} onClick={() => setToggle('edu')}><SchoolRoundedIcon />Education</div>
        </div>

        <div className='experience-content w-[100%] flex items-start justify-between gap-[20px]'>
            <div className='exp-content text-[16px] w-[100%] flex flex-col gap-[20px]' id='exp-content'>
              <div className='line'></div>
              <div className='content flex items-start gap-[20px] min-w-[100%]'>
              <img src='https://cdn.samco.in/images/favicon/favicon.ico' alt='' style={{width: '40px'}}></img>
              <div className='flex flex-col gap-[20px] w-[100%]'>
                <div className='flex items-start justify-between'>
                  <div>
                    <div>
                      <div className='font-bold'>SAMCO Securities Limited - Trading Platform</div>
                      <div className='italic'>Web Developer</div>
                    </div>
                  </div>
                  <div className='text-[14px]'>Jul 2023 - Current</div>
                </div>
                {/* <div>
                  <li>Involved in redesigning the web application from Angular 10 to React 19.</li>
                </div> */}
              </div>
              </div>

              <div className='content flex items-start gap-[20px] min-w-[100%]'>
                <img src='https://cdn.samco.in/images/favicon/favicon.ico' alt='' style={{ width: '40px' }}></img>
                <div className='flex flex-col gap-[20px] w-[100%]'>
                  <div className='flex items-start justify-between'>
                    <div>
                      <div>
                        <div className='font-bold'>SAMCO Securities Limited - Trading Platform</div>
                        <div className='italic'>Software Intern</div>
                      </div>
                    </div>
                    <div className='text-[14px]'>Feb 2023 - Apr 2023</div>
                  </div>
                  {/* <div>
                    <b>Project</b>: Market Symbol Event Calendar
                  </div> */}
                </div>
              </div>
              </div>

            <div className='edu-content text-[16px] w-[100%] flex flex-col gap-[20px]' id='edu-content'>
              <div className='line'></div>
               <div className='content flex items-start gap-[20px] min-w-[100%]'>
                <img src='https://www.svce.ac.in/wp-content/uploads/2020/03/svce_logo.jpg' alt='' style={{ width: '40px' }}></img>
                <div className='flex flex-col gap-[20px] w-[100%]'>
                  <div className='flex items-start justify-between'>
                    <div>
                      <div>
                        <div className='font-bold'>Sri Venkateswara College of Engineering</div>
                        <div className='italic'>Bachelor's Degree, Computer Science & Engineering</div>
                      </div>
                    </div>
                    <div className='text-[14px]'>Jun 2019 - Apr 2023</div>
                  </div>
                  {/* <div>
                    <li>YRC(Youth Red Cross) Member & Volunteer.</li>
                  </div> */}
                </div>
              </div>

              <div className='content flex items-start gap-[20px] min-w-[100%]'>
                <img src='https://nazarethschools.in/wp-content/uploads/2017/01/Naz-SchoolLogo-1.png' style={{width: '40px'}}></img>
                <div className='flex flex-col gap-[20px] w-[100%]'>
                  <div className='flex items-start justify-between'>
                    <div>
                      <div>
                        <div className='font-bold'>Nazareth Matriculation School</div>
                        <div className='italic'>Higher Secondary Certificate</div>
                      </div>
                    </div>
                    <div className='text-[14px]'>Jun 2018 - Mar 2019</div>
                  </div>
                  <div>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}
