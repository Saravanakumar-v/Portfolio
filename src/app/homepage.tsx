'use client';
import React, { useContext, useEffect, useState } from 'react'
import Navbar from './navbar'
import About from './about'
import Experience from './experience'
import Content from './experience'
import './globals.scss';
import TechStack from './techStack'
import 'animate.css'
import Projects from './project';
import { useToggle } from './toggleContext';
import { ArrowDownwardRounded } from '@mui/icons-material';


export default function Homepage() {

  const {toggle} = useToggle();

  return (
      <div className='main-page flex flex-col gap-[20px] items-center w-[100%]' style={{transition: 'all ease 0.5s',overflow: 'hidden'}}>
        <div className='flex items-start justify-between w-[100%]'>
          <div className='w-[450px]'>
            <Navbar />
          </div>
          <div className='flex flex-col items-start mt-10 justify-around w-[100%] gap-[35px] portfolio-cont' style={{transition: '.5s ease all',overflow: 'hidden'}}>
            <div className='flex flex-col items-start stats' style={{maxHeight: toggle == 'edu' ?'0px' :'250px',transition: '.5s ease all'}}>
              <About />
              <br></br>
              <TechStack />
            </div>
            <div className='profile-cont'>
              <Content />
            </div>
          </div>
        </div>
        {toggle == 'exp' &&
        <>
          <Projects />
        </>
        }
      </div>
  )
}
