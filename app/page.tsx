export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center">
      <div className="max-w-md mx-auto text-center">
        <h1 className="text-4xl font-bold text-white mb-4">
          ⚛️ Brainix Learning Methods
        </h1>
        <p className="text-blue-200 mb-8">
          Explore quantum physics through familiar social media interfaces
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl">
          <a
            href="/instagram"
            className="block bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-4 px-6 rounded-lg hover:from-purple-600 hover:to-pink-600 transition duration-200 text-center"
          >
            📸 Visual Learning Feed
          </a>
          <a
            href="/tiktok"
            className="block bg-black text-white font-semibold py-4 px-6 rounded-lg hover:bg-gray-800 transition duration-200 text-center"
          >
            🎵 Video Explanations
          </a>
          <a
            href="/twitter"
            className="block bg-blue-500 text-white font-semibold py-4 px-6 rounded-lg hover:bg-blue-600 transition duration-200 text-center"
          >
            🐦 Learning Insights
          </a>
          <a
            href="/reddit"
            className="block bg-orange-500 text-white font-semibold py-4 px-6 rounded-lg hover:bg-orange-600 transition duration-200 text-center"
          >
            🤖 Community Discussions
          </a>
        </div>
        <div className="mt-8 text-blue-200 text-sm">
          <p>Learn 10 core quantum physics concepts:</p>
          <p className="mt-2 text-xs">Wave-Particle Duality • Superposition • Entanglement • Uncertainty • Tunneling</p>
        </div>
      </div>
    </div>
  )
}
