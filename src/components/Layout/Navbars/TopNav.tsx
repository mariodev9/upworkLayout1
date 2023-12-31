import { NotificationIcon } from '@/components/Icons'
import Image from 'next/image'
import React from 'react'
import imagen from "../../../../public/images/Illustration.jpg"
import { useRouter } from 'next/router'

// Avatar props --> urlImage
const Avatar = () => (
  <Image className='rounded-full w-[28px] h-[28px] md:w-[48px] md:h-[48px] ' src={imagen}  alt='avatar' />
)

const TopNav = () => {
  const router = useRouter()
  return (
    <div className="fixed top-0 bg-navbar left-0 right-0">
        <div className='bg-navbarbg h-14 md:h-24 flex justify-between items-center px-8'>
            <Avatar/>
            <div onClick={() => router.push("/Notifications")}>
              <NotificationIcon/>
            </div>
        </div>
    </div>
  )
}

export default TopNav