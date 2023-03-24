import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Showcase() {
  return (
    <div className=" max-w-3xl mx-auto">
      <div className=" my-10">
        <div className=" space-y-2">
          <h1 className=" font-bold text-3xl text-slate-800 dark:text-slate-50">
            Projects Showcase 🚀
          </h1>
          <p className=" text-slate-600 dark:text-slate-400 leading-relaxed">
            Check out my featured projects to see some of my best work and learn
            more about my skills and experience as a developer. Feel free to
            explore it.
          </p>
        </div>
        <div className=" grid grid-cols-2 mt-8 gap-x-8 gap-y-16">
          <div className="flex flex-col gap-y-4">
            <Link
              href=""
              className=" w-full aspect-video rounded-xl transition-all bg-gradient-to-tr hover:bg-gradient-to-r from-lime-500 via-pink-500 to-indigo-500 p-1"
            >
              <div className="w-full aspect-video rounded-lg relative overflow-hidden">
                <Image
                  src="/images/heru-inspector.png"
                  fill={true}
                  alt="heru-inspector"
                  className=" object-cover object-top"
                />
              </div>
            </Link>
            <div className=" space-y-2">
              <div className="flex items-center gap-x-2">
                <h1 className=" text-xl text-slate-800 dark:text-slate-50 font-bold">
                  Heru Inspector
                </h1>
                <div className=" bg-indigo-500/30 px-2.5 py-1 rounded-full">
                  <p className=" text-indigo-500 text-xs uppercase">finished</p>
                </div>
              </div>
              <p className=" text-slate-600 dark:text-slate-400">
                Heru Inspector adalah layanan profesional untuk memeriksa /
                inpeksi kondisi Mobil Bekas sebelum dibeli atau dijual. oleh
                teknisi yang terlatih, Heru Inspector akan memberikan laporan
                rinci tentang kondisi kendaraan.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-y-4">
            <Link
              href=""
              className=" w-full aspect-video rounded-xl transition-all bg-gradient-to-tr hover:bg-gradient-to-r from-lime-500 via-pink-500 to-indigo-500 p-1"
            >
              <div className="w-full aspect-video rounded-lg relative overflow-hidden">
                <Image
                  src="/images/oyenstation.png"
                  fill={true}
                  alt="heru-inspector"
                  className=" object-cover object-top"
                />
              </div>
            </Link>
            <div className=" space-y-2">
              <div className="flex items-center gap-x-2">
                <h1 className=" text-xl text-slate-800 dark:text-slate-50 font-bold">
                  Oyenstation
                </h1>
                <div className=" bg-lime-500/30 px-2.5 py-1 rounded-full">
                  <p className=" text-lime-500 text-xs uppercase">ongoing</p>
                </div>
              </div>
              <p className=" text-slate-600 dark:text-slate-400">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda beatae vitae, ducimus minus nobis hic voluptatibus
                enim libero, consequuntur, nihil similique nesciunt quisquam
                perferendis et?
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-y-4">
            <Link
              href=""
              className=" w-full aspect-video rounded-xl transition-all bg-gradient-to-tr hover:bg-gradient-to-r from-lime-500 via-pink-500 to-indigo-500 p-1"
            >
              <div className="w-full aspect-video rounded-lg relative overflow-hidden">
                <Image
                  src="/images/timurasa.png"
                  fill={true}
                  alt="heru-inspector"
                  className=" object-cover object-top"
                />
              </div>
            </Link>
            <div className=" space-y-2">
              <div className="flex items-center gap-x-2">
                <h1 className=" text-xl text-slate-800 dark:text-slate-50 font-bold">
                  Timurasa Supplier
                </h1>
                <div className=" bg-indigo-500/30 px-2.5 py-1 rounded-full">
                  <p className=" text-indigo-500 text-xs uppercase">finished</p>
                </div>
              </div>
              <p className=" text-slate-600 dark:text-slate-400">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda beatae vitae, ducimus minus nobis hic voluptatibus
                enim libero, consequuntur, nihil similique nesciunt quisquam
                perferendis et?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
