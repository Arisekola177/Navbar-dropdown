
import banner from '@public/assets/images/bannerone.jpg'
import Image from 'next/image'
import Button from '@components/Button'

const page = () => {
  return (
    <div className='w-full h-full object-contain overflow-x-hidden relative'>
      <Image src={banner} alt='shoe' />
      <div className='absolute top-1/2 left-20'>
         <h1 className='text-3xl text-white mb-5'>Your Everyday store</h1>
         <Button />
      </div>
    </div>
  )
}

export default page;