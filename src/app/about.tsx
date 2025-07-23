'use client';
import React from 'react'
import InfoOutlineRoundedIcon from '@mui/icons-material/InfoOutlineRounded';
import { useToggle } from './toggleContext';

export default function About() {

  return (
    <>
    <div className='about flex flex-col gap-[15px]'>
      <div className='font-bold text-[18px] flex items-center gap-[5px]'><InfoOutlineRoundedIcon />About Me</div>
      <div className='content text-normal'>
          Web Developer with <b>2 years of experiences in React.js</b>, specializing in front-end UI development for web applications. Proficient in redesigning user interfaces, creating responsive designs and ensuring cross-browser compatibility.
      </div>
    </div>
    </>
  )
}
