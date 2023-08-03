import Image from 'next/image'

const MadeForU = () => {
    return (
      <div>
        <h2 className='font-semibold text-2xl mt-10'>Made for Daniel Cerverizzo</h2>
        <div className='grid grid-cols-8 gap-4 mt-4'>

          <a href='#' className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
            <Image src="/images/album.jpg" className='w-full' width={104} height={104} alt="album" />
            <strong className='font-semibold'>Daily Mix 1</strong>
            <span className='text-sm text-zinc-400'>Queens of stone age, metallica, sticky fingers and more</span>
          </a>

          <a href='#' className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
            <Image src="/images/album.jpg" className='w-full' width={104} height={104} alt="album" />
            <strong className='font-semibold'>Daily Mix 1</strong>
            <span className='text-sm text-zinc-400'>Queens of stone age, metallica, sticky fingers and more</span>
          </a>

          <a href='#' className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
            <Image src="/images/album.jpg" className='w-full' width={104} height={104} alt="album" />
            <strong className='font-semibold'>Daily Mix 1</strong>
            <span className='text-sm text-zinc-400'>Queens of stone age, metallica, sticky fingers and more</span>
          </a>

          <a href='#' className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
            <Image src="/images/album.jpg" className='w-full' width={104} height={104} alt="album" />
            <strong className='font-semibold'>Daily Mix 1</strong>
            <span className='text-sm text-zinc-400'>Queens of stone age, metallica, sticky fingers and more</span>
          </a>

          <a href='#' className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
            <Image src="/images/album.jpg" className='w-full' width={104} height={104} alt="album" />
            <strong className='font-semibold'>Daily Mix 1</strong>
            <span className='text-sm text-zinc-400'>Queens of stone age, metallica, sticky fingers and more</span>
          </a>
        </div>
      </div>
    )
  };

export default MadeForU
