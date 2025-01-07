import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-8">
      <main className="flex flex-col items-center gap-8 max-w-3xl text-center">
        <h1 className="text-6xl sm:text-8xl font-bold tracking-tight bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          Wander Bound Pass
        </h1>
        
        <p className="text-xl sm:text-2xl text-gray-400 font-light mt-4">
          Your journey begins soon.
        </p>
        
        <div className="mt-8 flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="text-sm text-gray-400">Coming Soon</span>
        </div>

        <div className="mt-12">
          <Image
            src="/compass.svg"
            alt="Compass Icon"
            width={40}
            height={40}
            className="opacity-50"
          />
        </div>
      </main>
    </div>
  );
}
