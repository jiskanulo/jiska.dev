import Image from 'next/image'
import {SiX, SiGithub} from 'react-icons/si'
import { SocialLink } from './components/socialLink'

export default function Home() {
  return (
      <main className="p-8 bg-gray-100 min-h-screen">
          <h1 className="text-3xl font-bold text-center mb-12">Jiskanulo</h1>
          <div className="max-w-4xl mx-auto flex justify-center items-start">
              <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex-shrink-0">
                      <Image
                          src="/avatar/20241214-fs8.png"
                          alt="This is me."
                          width={300}
                          height={450}
                          unoptimized={true}
                          className="rounded-lg shadow-sm"
                      />
                  </div>
                  <div className="flex flex-col gap-4">
                      <div className="flex flex-col gap-4">
                          <SocialLink href="https://x.com/jiskanulo" icon={SiX} label="Twitter" />
                          <SocialLink href="https://github.com/jiskanulo" icon={SiGithub} label="GitHub" />
                          <SocialLink href="https://sizu.me/jiska" icon="/icons/sizu.me.svg" label="しずかなインターネット" />
                      </div>
                  </div>
              </div>
          </div>
      </main>
  )
}

