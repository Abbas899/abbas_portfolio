/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
    <>
        {/* z-[100] always be on front */}
        <div className='fixed w-full h-20 shadow-xl z-[100]'>
            <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
                <img src="/assets/3D.jpg" alt="nav-logo" width='125' height='50' />
           
            <div >
                <ul>
                    <Link href="/">
                        <li className='ml-10 text-sm uppercase hover:border-bottom'>Home</li>
                    </Link>
                    <button>signin</button>
                </ul>
            </div>
            </div>
        </div>
    </>
    
    )
}

export default Navbar