'use client';
import ListRoundedIcon from '@mui/icons-material/ListRounded';
import { useState } from 'react';
import { useToggle } from './toggleContext';

export default function TechStack() {

  const techStack = [
    { key: 'Reactjs', dispName: 'React.js' },
    { key: 'Typescript', dispName: 'TypeScript' },
    { key: 'Tailwind', dispName: 'Tailwind CSS' },
    { key: 'SCSS', dispName: 'SCSS' },
    { key: 'Graphql', dispName: 'GraphQL' },
    { key: 'Chartjs', dispName: 'Chart.js' },
    { key: 'MUI', dispName: 'Material UI' },
    { key: 'Git', dispName: 'Git' },
    { key: 'Github', dispName: 'GitHub' },
    { key: 'Figma', dispName: 'Figma' }
  ];


  const [techArr, setTechArr] = useState([...techStack]);
  const {toggle} = useToggle();

  return (
    <>
    <div className='flex flex-col gap-[15px] tech-stack'>
        <div className='text-[18px] font-bold flex items-center gap-[5px]'><ListRoundedIcon />Tech Stack</div>
        <div className='flex flex-wrap gap-[10px] text-[16px]'>
          {techArr?.map((item,idx) => {
            return (
              <div key={item?.key+idx} style={{background: 'white'}} className='flex items-center gap-[5px] p-[5px] stack'>
                <img src={`/assets/images/${item?.key?.toLowerCase()}.svg`} style={{width: '18px',height: '18px'}} alt=''></img>
                <div style={{color: 'black'}}>{item?.dispName}</div>
              </div>
            )
          })
          }
        </div>
    </div>
    </>
  )
}
