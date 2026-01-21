"use client"

const galleryPhotos = [
  "/photo1.jpg",
  "/photo2.jpg",
  "/photo3.jpg",
  "/photo4.jpg",
]

export default function Gallery() {
  return (
    <section id="gallery" className="py-32 bg-neutral-900 text-white relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="w-full">
          <div className="mb-16 flex flex-col md:flex-row justify-between items-start md:items-end">
             <div>
                <p className="text-neutral-500 tracking-[0.2em] uppercase mb-2 text-sm md:text-base">Life Outside Code</p>
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-light">生活影像</h2>
             </div>
             <p className="mt-4 md:mt-0 text-xs md:text-sm max-w-xs font-light leading-relaxed text-right">
                代码之外，我通过镜头观察世界。这里记录了一些碎片。
             </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[600px] md:h-[500px]">
            <div className="col-span-2 row-span-2 relative overflow-hidden group">
               <img src={galleryPhotos[0]} alt="Gallery 1" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"/>
               <div className="absolute bottom-4 left-4 text-xs tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity">Travel</div>
            </div>
            <div className="col-span-1 relative overflow-hidden group">
               <img src={galleryPhotos[1]} alt="Gallery 2" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"/>
            </div>
             <div className="col-span-1 relative overflow-hidden group">
               <img src={galleryPhotos[2]} alt="Gallery 3" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"/>
            </div>
             <div className="col-span-2 relative overflow-hidden group">
               <img src={galleryPhotos[3]} alt="Gallery 4" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"/>
               <div className="absolute bottom-4 left-4 text-xs tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity">Lifestyle</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
