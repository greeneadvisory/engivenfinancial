import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center gap-4 p-6'>
      <p>The Above Url Cannot Found</p>
      <Link href="/dashboard/sales" className='btn btn-primary'>Return Home</Link>
    </div>
  )
}