'use client';
import React, { useContext } from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import AccountBalanceRoundedIcon from '@mui/icons-material/AccountBalanceRounded';
import './globals.scss';
import BusinessRoundedIcon from '@mui/icons-material/BusinessRounded';
import { useToggle } from './toggleContext';

export default function Navbar() {

  const handleNavigation = (type: string) => {
    switch (type) {
      case 'linkedin':
        window.open('https://www.linkedin.com/in/saravanakumar19/', '_blank');
        break;
      case 'github':
        window.open('https://github.com/Saravanakumar-v','_blank');
        break;
      case 'work':
        window.open('https://www.samco.in/', '_blank');
        break;
      case 'insta':
        window.open('https://www.instagram.com/srvna_kmr/', '_blank');
        break;
      case 'college':
        window.open('https://www.svce.ac.in/','_blank');
        break;
      default:
        break;
    }
  } 

  const { toggle } = useToggle();

  return (
    <nav className='flex flex-col items-start gap-[20px] navbar-cont'>
        <div className='flex flex-col items-start gap-[5px]'>
            <img className='w-50 profile-dp' src='/assets/images/dp.jpg' alt=''></img>
            <div className='font-bold text-[24px] cursor-pointer flex items-center gap-[10px] usr-name'>
              Saravana Kumar
              <div className='flex gap-[10px] icons'>
                <InstagramIcon className='instagram' onClick={() => handleNavigation('insta')}/>
              </div>
            </div>
            {toggle == 'exp' ?
            <>
              <div className='opacity-[0.7] flex items-end gap-[5px] underline cursor-pointer' onClick={() => handleNavigation('work')}><BusinessRoundedIcon />SAMCO Securities Limited</div>
              <div className='opacity-[0.7]'>Junior Web Developer</div>
            </>
            :
             <>
              <div className='opacity-[0.7] flex items-end gap-[5px] underline cursor-pointer' onClick={() => handleNavigation('college')}><AccountBalanceRoundedIcon />Sri Venkateswara College</div>
              <div className='opacity-[0.7]'>B.E, Computer Science & Engineering</div>
            </>
            }
        </div>
        <div className='text-[16px]'>📍 Thiruvallur, Chennai</div>
        <div className='flex items-center gap-[10px] text-[16px] cursor-pointer contact-info'  style={{transition: 'width 0.5s'}}> 
          {toggle == 'exp' &&
            <a className='flex items-center gap-[5px] contact-resume' href='/SaravanaKumar_Resume.pdf' download={'SaravanaKumar_Resume'} ><DownloadRoundedIcon />Resume</a>
          }
          <div className='cursor-pointer' onClick={() => handleNavigation('linkedin')}><LinkedInIcon /></div>
          <div className='cursor-pointer' onClick={() => handleNavigation('github')}><GitHubIcon className='github'/></div>
          <div><EmailRoundedIcon /></div>
        </div>
    </nav>
  )
}
