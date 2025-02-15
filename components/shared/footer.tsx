
'use client'
import { ChevronUp } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { APP_NAME } from '@/lib/constants'



export default function Footer() {
  
  return (
    <footer className='bg-gray-500  text-white underline-link'>
      <div className='w-full'>
        <Button
          variant='ghost'
          className='bg-gray-300 w-full  rounded-none '
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <ChevronUp className='mr-2 h-4 w-4' />
            Back to top
        </Button>
      </div>

      <div className='p-4'>
        <div className='flex justify-center  gap-3 text-sm'>
          <Link href='/page/conditions-of-use'>Condition to Use</Link>
          <Link href='/page/privacy-policy'>Privacy Notice</Link>
          <Link href='/page/help'>Help</Link>
        </div>

        <div className='flex justify-center text-sm'>
          <p> © 2000-2024, {APP_NAME}</p>
        </div>
        <div className='mt-8 flex justify-center text-sm text-gray-400'> Dhaka, Bangladesh | + 01914111111
        </div>
      </div>
    </footer>
  )
}
