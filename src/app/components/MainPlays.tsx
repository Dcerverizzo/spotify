import Image from 'next/image'
import { Play } from 'lucide-react'

const MainPlays = () => { 
    return (
      <div>
        <h1 className='font-semibold text-3x1 mt-10'>Good Afternoon</h1>
        <div className="grid grid-cols-3 gap-4 mt-4">
          <a className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transtion-colors">
            <Image src="/images/album.jpg" width={104} height={104} alt="album" />
            <strong>Zipper Down </strong>
            <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
              <Play />
            </button>
          </a>

          <a href='#' className="bg-white/5 rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transtion-colors">
            <Image src="/images/album.jpg" width={104} height={104} alt="album" />
            <strong>Zipper Down </strong>
          </a>

          <a href='#' className="bg-white/5 rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transtion-colors">
            <Image src="/images/album.jpg" width={104} height={104} alt="album" />
            <strong>Zipper Down </strong>
          </a>

          <a href='#' className="bg-white/5 rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transtion-colors">
            <Image src="/images/album.jpg" width={104} height={104} alt="album" />
            <strong>Zipper Down </strong>
          </a>

          <a href='#' className="bg-white/5 rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transtion-colors">
            <Image src="/images/album.jpg" width={104} height={104} alt="album" />
            <strong>Zipper Down </strong>
          </a>

          <a href='#' className="bg-white/5 rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transtion-colors">
            <Image src="/images/album.jpg" width={104} height={104} alt="album" />
            <strong>Zipper Down </strong>
          </a>
        </div>
      </div>
    )
  };

export default MainPlays
