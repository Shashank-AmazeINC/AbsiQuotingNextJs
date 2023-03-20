import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import Logo from "../../public/openinglogo.png";
import dashboard from '../../styles/dash.module.css'
import { MdSpaceDashboard } from 'react-icons/md'
import { RiFolderSharedLine } from 'react-icons/ri'
import { MdOutlineSelfImprovement } from 'react-icons/md'
import { SiCrowdsource } from 'react-icons/si'
import { MdFolderShared } from 'react-icons/md'
import dynamic from 'next/dynamic';
import { FaPeopleCarry, FaEnvelopeOpenText, FaMoneyCheck } from 'react-icons/fa'

import { Sidebar, Menu, MenuItem, SubMenu, ProSidebarProvider } from 'react-pro-sidebar';

function Sidenav() {
  return (

    <div  >
      <Image
        className='bg-white p-4'
        src={Logo}
        alt="Quoting Tool"
        width={250}
        height={100}
      />
      <ProSidebarProvider >
        <Sidebar className={dashboard.sidenav} >
          <Menu >
            <MenuItem icon={<MdSpaceDashboard />}>
              <Link className='text-decoration-none text-dark' href="/components/dashboard">Dashboard</Link>
            </MenuItem>
            <SubMenu icon={<RiFolderSharedLine />} label="Lookup">
              <MenuItem icon={<MdOutlineSelfImprovement />} >
                <Link className='text-decoration-none text-dark' href="/components/philhealth">Philhealth </Link>
              </MenuItem>
              <MenuItem icon={<SiCrowdsource />} >
                <Link className='text-decoration-none text-dark' href="/components/sss">SSS </Link>
              </MenuItem>
              <MenuItem icon={<SiCrowdsource />} >
                <Link className='text-decoration-none text-dark' href="/components/hdmf">HDMF </Link>
              </MenuItem>
              <MenuItem icon={<SiCrowdsource />}  >
                <Link className='text-decoration-none text-dark' href="/components/software">Software </Link>
              </MenuItem>
              <MenuItem icon={<SiCrowdsource />} >
                <Link className='text-decoration-none text-dark' href="/components/licenceType">Licence Type </Link>
              </MenuItem>
              <MenuItem icon={<SiCrowdsource />} >
                <Link className='text-decoration-none text-dark' href="/components/hardware">Hardware </Link>
              </MenuItem>
              <MenuItem icon={<SiCrowdsource />} >
                <Link className='text-decoration-none text-dark' href="/components/techSupport"> Tech & Support </Link>
              </MenuItem>
              <MenuItem icon={<SiCrowdsource />} >
                <Link className='text-decoration-none text-dark' href="/components/supportRole">Support Role </Link>
              </MenuItem>

            </SubMenu>
            <SubMenu icon={<MdFolderShared />} label="Masters">
              <MenuItem icon={<FaPeopleCarry />} >Clients</MenuItem>
              <MenuItem icon={<SiCrowdsource />} >Staff</MenuItem>
            </SubMenu>
            <MenuItem icon={<FaMoneyCheck />} > Rate Card </MenuItem>
            <MenuItem icon={<FaEnvelopeOpenText />} > Proposal </MenuItem>
          </Menu>
        </Sidebar>
      </ProSidebarProvider>
    </div>

  );
}

export default dynamic(() => Promise.resolve(Sidenav), { ssr: false })