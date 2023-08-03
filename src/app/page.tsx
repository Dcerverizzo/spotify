import { ChevronLeft, ChevronRight } from 'lucide-react'
import SideNav  from './components/SideNav'
import MainPlays from './components/MainPlays'
import MadeForU from './components/MadeForU'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div className='h-screen flex flex-col'>
      <div className='flex flex-1'>
        <aside className='w-72 bg-zinc-950 p-6'>
          <div className='flex items-center gap-2'>
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <SideNav />
        </aside>
        <main className='flex-1 p-6'>
          <div className='flex items-center gap-3'>
            <button className='bg-zinc-800 text-white p-2 rounded-full bg-black/40 p-1'>
              <ChevronLeft className='w-5 h-5' />
            </button>
            <button className='bg-zinc-800 text-white p-2 rounded-full bg-black/40 p-1'>
              <ChevronRight className='w-5 h-5' />
            </button>
          </div>
          <MainPlays/>
          <MadeForU/>
        </main>
      </div>
      <Footer/>
    </div>
  )
}
