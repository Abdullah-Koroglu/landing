import Image from "next/image";
import { Inter } from "next/font/google";
import { AiOutlineMail } from 'react-icons/ai';
import { FaInstagram } from 'react-icons/fa';
import { SiGoogleplay } from 'react-icons/si';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const RenderApp = ({ appImage, appName, href }) => {
    return <div
      onClick={() => { window.open(href) }}
      className="w-[calc(90vw-3rem)] lg:w-[calc(33vw-2rem)] transition-all cursor-pointer px-4 self-center flex flex-col items-center gap-8 hover:opacity-85">
      <Image className="w-full h-full object-cover aspect-square rounded-xl drop-shadow-lg" src={appImage} alt="logo" width={3080} height={3080} />
      <h3 className="font-inter text-4xl">{appName}</h3>
    </div>
  }
  return (
    <div className="bg-zinc-900 text-white w-full flex flex-col items-center gap-20">
      <div className="w-full bg-red-100">
        <Image className="w-full h-[70vh] object-cover drop-shadow-lg shadow-white" src="/image.webp" alt="logo" width={3080} height={3080} />
      </div>

      <div className="w-full flex flex-col items-center gap-8 px-8">
        <div>
          <h1 className="font-inter text-center text-2xl lg:text-4xl">Reklam ortakliklari icin iletisime gecebilirsiniz.</h1>
        </div>
        <div className="flex gap-8">
          <AiOutlineMail onClick={() => { window.open('mailto:vecettu@gmail.com') }} className="cursor-pointer text-zinc-200 hover:text-white" size={48} />
          <FaInstagram onClick={() => { window.open('https://www.instagram.com/vecettu/') }} className="cursor-pointer text-zinc-200 hover:text-white" size={48} />
          <SiGoogleplay onClick={() => { window.open('https://play.google.com/store/apps/developer?id=Vecett%C3%BC') }} className="cursor-pointer text-zinc-200 hover:text-white" size={48} />
        </div>
        <p className="text-lg lg:text-2xl">Email: <span>vecettu@gmail.com</span></p>
      </div>

      <div className="w-full flex flex-col items-center gap-8 mb-8">
        <h1 className="font-inter text-center text-2xl lg:text-4xl">Uygulamalarimiz</h1>
        <div className="w-full flex items-center justify-center gap-8 flex-wrap">
          <RenderApp appImage="/kv.png" appName="Kurtlar Vadisi: Usta" href="https://play.google.com/store/apps/details?id=com.kurtlarvaidisi.usta"/>
          <RenderApp appImage="/de.png" appName="Diriliş Ertuğrul" href="https://play.google.com/store/apps/details?id=com.vecettu.dirilis"/>
          <RenderApp appImage="/image.webp" appName="Vecettü Sözlük" href="https://play.google.com/store/apps/details?id=com.coreTech.vecettu"/>
        </div>
      </div>
      <footer className="w-full flex justify-center items-center py-4 bg-zinc-950 text-white">
        <p className="text-sm">©Vecettu Co. All rights reserved.</p>
      </footer>
    </div>
  );
}
