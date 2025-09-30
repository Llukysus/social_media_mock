import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Social Media Clones',
  description: 'Instagram and TikTok layout clones built with Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <nav className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center space-x-8">
                <h1 className="text-xl font-bold text-gray-900">Social Media Clones</h1>
                <div className="flex space-x-4">
                  <a href="/instagram" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                    Instagram
                  </a>
                  <a href="/tiktok" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                    TikTok
                  </a>
                  <a href="/twitter" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                    Twitter
                  </a>
                  <a href="/reddit" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                    Reddit
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  )
}
