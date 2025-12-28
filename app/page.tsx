export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
          OG Proxy
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          Generate dynamic Open Graph images with AI
        </p>
        <div className="space-x-4">
          <a
            href="/auth/sign-in"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Sign In
          </a>
          <a
            href="/auth/sign-up"
            className="inline-block px-6 py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
          >
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
}
