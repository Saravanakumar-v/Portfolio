'use client';
import React, { useContext, useState } from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import AccountBalanceRoundedIcon from '@mui/icons-material/AccountBalanceRounded';
import './globals.scss';
import BusinessRoundedIcon from '@mui/icons-material/BusinessRounded';
import { useToggle } from './toggleContext';
import { ContentCopyRounded } from '@mui/icons-material';
import { Snackbar } from '@mui/material';

export default function Navbar() {

  const [showSnackbar, setShowSnackbar] = useState(false);

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
      case 'mailto': 
        window.navigator.clipboard.writeText('saravanakumar.cs23@gmail.com');
        setShowSnackbar(true);
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
              <div className='opacity-[0.7] text-[14px]'>Software Engineer | React.js | <br/>Web Development </div>
            </>
            :
             <>
              <div className='opacity-[0.7] flex items-end gap-[5px] underline cursor-pointer' onClick={() => handleNavigation('college')}><AccountBalanceRoundedIcon />Sri Venkateswara College</div>
              <div className='opacity-[0.7] text-[14px]'>B.E, Computer Science & Engineering</div>
            </>
            }
        </div>
        <div className='text-[14px]'>📍 {toggle == 'exp' ?'Thiruvallur, Chennai' :'Thandalam, Sriperumbathur'}</div>
        <div className='flex items-center gap-[10px] text-[16px] cursor-pointer contact-info'  style={{transition: 'width 0.5s'}}> 
          {toggle == 'exp' &&
            <a className='flex items-center gap-[5px] contact-resume' href='/Saravanakumar_resume.pdf' download={'Saravanakumar_resume'} ><DownloadRoundedIcon />Resume</a>
          }
          <div className='cursor-pointer' onClick={() => handleNavigation('linkedin')}><LinkedInIcon /></div>
          <div className='cursor-pointer' onClick={() => handleNavigation('github')}><GitHubIcon className='github'/></div>
          <div className='cursor-pointer' onClick={() => handleNavigation('mailto')}><EmailRoundedIcon /></div>
          <Snackbar open={showSnackbar} autoHideDuration={3000} onClose={() => setShowSnackbar(false)} anchorOrigin={{vertical: 'bottom', horizontal: 'center'}} className='animate__animated animate__slideInUp'>
            <div className={`flex items-center gap-[5px] ${toggle == 'exp' ?'bg-white text-black' :'bg-black text-white'} p-[12px] rounded-[14px]`}>Copied to Clipboard <ContentCopyRounded style={{width: '20px',height: '20px',color: toggle == 'exp' ?'black' :'white'}}/></div>
          </Snackbar>
        </div>
    </nav>
  )
}
