import Image from 'next/image'
import {SiX, SiGithub} from 'react-icons/si'

export default function Home() {
  return (
      <main className="p-8 bg-gray-100 min-h-screen">
          <h1 className="text-3xl font-bold text-center mb-12">Jiskanulo</h1>
          <div className="max-w-4xl mx-auto flex justify-center items-start">
              <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex-shrink-0">
                      <Image
                          src="/avatar/2024.jpeg"
                          alt="This is me."
                          width={259}
                          height={364}
                          unoptimized={true}
                          className="rounded-lg shadow-md"
                      />
                  </div>
                  <div className="flex flex-col gap-4">
                      <div className="flex flex-col gap-4">
                          <a
                              href="https://x.com/jiskanulo"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 w-30 hover:text-blue-400 transition-colors"
                          >
                              <div
                                  className="w-[300px] bg-white flex items-center gap-2 p-2 rounded-lg border border-gray-200 hover:border-blue-400">
                                  <SiX size={30}/>
                                  <span>Twitter</span>
                              </div>
                          </a>

                          <a
                              href="https://github.com/jiskanulo"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 w-30 hover:text-blue-400 transition-colors"
                          >
                              <div
                                  className="w-[300px] bg-white flex items-center gap-2 p-2 rounded-lg border border-gray-200 hover:border-blue-400">
                                  <SiGithub size={30}/>
                                  <span>GitHub</span>
                              </div>
                          </a>

                          <a
                              href="https://sizu.me/jiska"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 w-30 hover:text-blue-400 transition-colors"
                          >
                              <div
                                  className="w-[300px] bg-white flex items-center gap-2 p-2 rounded-lg border border-gray-200 hover:border-blue-400">
                                  <Image src="/icons/sizu.me.svg" alt="しずかなインターネット" width="30" height="30"/>
                                  <span>しずかなインターネット</span>
                              </div>
                          </a>
                      </div>
                  </div>
              </div>
          </div>
      </main>
  )
}

