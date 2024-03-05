import Link from 'next/link'

export default function Home() {
  return( 
  <div className="w-screen h-screen bg-black flex justify-center items-center text-white">
    <div className="w-full max-w-[600px] mx-auto space-y-3">
    <h1 className="text-6xl">The best Journal app, period</h1>
    <p className="text-2xl text-white/60">
      This is the best journal app in the world. It's the best because it's the best.
    </p>
    <div>
      <Link href="/journal">
        <button className="bg-green-900 px-4 py-2 rounded-lg text-xl">get start</button>
      </Link>
    </div>
    </div>
  </div>
  )
}
