import fs from 'fs'
import Image from 'next/image'
import path from 'path'

export default async function Home() {
  const photosPath = path.join(process.cwd(), 'public', 'photos')

  const files = fs.readdirSync(photosPath).filter((filename) => filename !== '.DS_Store').map((filename) => {
    const filePath = path.join(photosPath, filename)
    const stats = fs.statSync(filePath)
    return { filename, mtime: stats.mtime }
  })

  const sortedFiles = files.sort((a, b) => b.mtime.getTime() - a.mtime.getTime())

  const images = sortedFiles.map((file) => `/photos/${file.filename}`)

  return (
    <main>
      <h1 className='font-bold text-8xl py-20'>Tishka Gallery</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {images.map((image, index) => (
          <div key={index} className='group relative overflow-hidden rounded-lg shadow-lg'>
            <Image
              src={image}
              alt={`Photo ${index}`}
              width={300}
              height={200}
              className='w-full h-[200] object-cover transition-transform duration-300 ease-in-out group-hover:scale-105'
            />
          </div>
        ))}
      </div>
    </main>
  )
}
