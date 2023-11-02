'use client'
import Image from 'next/image'
import Button from '@components/Button'
import menu from '@public/assets/icons/vector.png'
import close from '@public/assets/icons/close.png'
import { useState } from 'react'
import Link from 'next/link'
import { Links } from './Links'


const Navbar = () => {

    const [open, setOpen] = useState(false)

    const toggleNav = () => {
        setOpen(!open)
    }
  
 
  return (
 <div className='bg-slate-400 w-full'>
        <div className='md:w-10/12 mx-auto flex justify-between items-center px-6 md:px-0 py-3'>
            <div className=' '>
                <h1 className='uppercase md:text-3xl font-semibold'>Aztech</h1> 
            </div>
            {/* Desktop Navlinks */}
            <div className='hidden md:flex justify-between items-center gap-6'>
               
                  {
                        Links.map((link) => (
                            <div className='group' key={link.name}>
                             <h1 className='uppercase cursor-pointer py-7'>{link.name}</h1>
                             {link.submenu && <div>
                                         <div className='absolute hidden top-24 z-50 text-left  group-hover:md:block hover:md:block'>
                                            <div className='py-3'>
                                                   <div className='w-4 h-4 left-3 absolute  mt-1 bg-white rotate-45 '>
                                                    </div>
                                                </div>
                                                <div className='bg-white p-5 grid grid-cols-3 gap-10'>
                                                    {
                                                        link.sublinks.map((mysublinks) => (
                                                            <div>
                                                                <h1 className='uppercase font-semibold'>{mysublinks.Head}</h1>
                                                                   {mysublinks.sublink.map((slink) => (
                                                                    <li className='uppercase  text-sm text-black my-2.5 hover:text-white'>
                                                                       <Link href={slink.link}>
                                                                         {slink.name}
                                                                       </Link>
                                                                    </li>
                                                                    
                                                                   ))}
                                                                </div>
                                                        ))
                                                    }
                                                </div>
                                         </div>
                                 </div>
                                }
                             </div>
                        ))
                     
                    }
            </div>
            {/* Button */}
            <div className='hidden md:block'> 
                <Button />
            </div>

             {/* Toogle button */}
            <div className='block md:hidden' onClick={toggleNav} >
             {
                open ? (<Image className='cursor-pointer' src={close} alt='menu' />) 
                : (<Image className='cursor-pointer' src={menu} alt='menu' />) 
              }
            </div>
            
         </div>  
          {/*Mobile Nav  */}
          <div className={`bg-white md:hidden absolute h-full w-full flex flex-col z-50 py-24 pl-10 duration-500 ${open? 'left-0' : 'left-[-100%]'} `}>
          <div className='flex flex-col gap-20  mb-16'>
                
                   {
                        Links.map((link) => (
                            <div>
                            <h1 className='uppercase cursor-pointer' key={link.name}>{link.name}</h1>
                            {}
                             </div>
                        ))
                    }
          </div>
          <Button />
          </div>
       
 </div>
  )
}

export default Navbar