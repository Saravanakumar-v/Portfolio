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
        Web developer with 2+ years of experience specializing in frontend and full-stack development. Proficient in React.js, TypeScript, and modern web technologies, with a strong focus on building scalable, performant, and responsive applications.
      </div>
    </div>
    </>
  )
}
