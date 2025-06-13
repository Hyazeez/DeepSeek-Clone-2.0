import { assets } from '@/assets/icons/assets'
import Image from 'next/image'
import React from 'react'

const Sidebar = (expand, setExpand) => {
  return (
    <div className={``}>
        <div>
            <div>
                <Image src={expand ? assets.logotext : assets.logo} alt='deepseek'/>
                <div>
                    <Image src={assets.menu} alt='' className='md:hidden'/>
                    <Image src={expand ? assets.open : assets.close} alt='' className='hidden md:block w-7'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sidebar