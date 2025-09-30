'use client'

import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal, Home, Search, PlusSquare, Compass, User } from 'lucide-react'
import { useState } from 'react'
import { instagramPosts, instagramStories, instagramSuggestions } from '../../data/instagram-posts'

export default function InstagramPage() {
  const [likedPosts, setLikedPosts] = useState<Set<number>>(new Set())

  const toggleLike = (postId: number) => {
    const newLikedPosts = new Set(likedPosts)
    if (newLikedPosts.has(postId)) {
      newLikedPosts.delete(postId)
    } else {
      newLikedPosts.add(postId)
    }
    setLikedPosts(newLikedPosts)
  }

  // Use data from external files
  const posts = instagramPosts
  const stories = instagramStories
  const suggestions = instagramSuggestions

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-300 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold instagram-gradient bg-clip-text text-transparent">
              Instagram
            </h1>
            <div className="flex items-center space-x-4">
              <Search className="w-6 h-6 text-gray-700" />
              <Send className="w-6 h-6 text-gray-700" />
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto flex">
        {/* Main Content */}
        <div className="flex-1 max-w-2xl">
          {/* Stories */}
          <div className="bg-white border-b border-gray-300 p-4">
            <div className="flex space-x-4 overflow-x-auto">
              {stories.map((story) => (
                <div key={story.id} className="flex flex-col items-center space-y-1 flex-shrink-0">
                  <div className={`w-16 h-16 rounded-full p-0.5 ${story.isOwn ? 'bg-gray-300' : 'bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500'}`}>
                    <div className="w-full h-full rounded-full bg-white p-0.5">
                      <img
                        src={story.userImage}
                        alt={story.username}
                        className="w-full h-full rounded-full object-cover"
                      />
                    </div>
                  </div>
                  <span className="text-xs text-gray-600 truncate w-16 text-center">
                    {story.username}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Posts */}
          <div className="space-y-6">
            {posts.map((post) => (
              <div key={post.id} className="bg-white border border-gray-300">
                {/* Post Header */}
                <div className="flex items-center justify-between p-4">
                  <div className="flex items-center space-x-3">
                    <img
                      src={post.userImage}
                      alt={post.username}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <span className="font-semibold text-sm">{post.username}</span>
                  </div>
                  <MoreHorizontal className="w-5 h-5 text-gray-600" />
                </div>

                {/* Post Image */}
                <div className="aspect-square">
                  <img
                    src={post.postImage}
                    alt="Post"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Post Actions */}
                <div className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-4">
                      <button onClick={() => toggleLike(post.id)}>
                        <Heart
                          className={`w-6 h-6 ${
                            likedPosts.has(post.id) ? 'fill-red-500 text-red-500' : 'text-gray-700'
                          }`}
                        />
                      </button>
                      <MessageCircle className="w-6 h-6 text-gray-700" />
                      <Send className="w-6 h-6 text-gray-700" />
                    </div>
                    <Bookmark className="w-6 h-6 text-gray-700" />
                  </div>

                  <div className="space-y-2">
                    <p className="font-semibold text-sm">
                      {likedPosts.has(post.id) ? post.likes + 1 : post.likes} likes
                    </p>
                    <p className="text-sm">
                      <span className="font-semibold">{post.username}</span> {post.caption}
                    </p>
                    <button className="text-gray-500 text-sm">
                      View all {post.comments} comments
                    </button>
                    <p className="text-gray-500 text-xs">{post.timeAgo}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="hidden md:block w-80 p-8">
          <div className="sticky top-20">
            {/* User Profile */}
            <div className="flex items-center space-x-4 mb-6">
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=40&h=40&fit=crop&crop=face"
                alt="Your profile"
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-sm">your_username</p>
                <p className="text-gray-500 text-sm">Your Name</p>
              </div>
            </div>

            {/* Suggestions */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <p className="text-gray-500 font-semibold text-sm">Suggestions For You</p>
                <button className="text-xs font-semibold">See All</button>
              </div>
              <div className="space-y-3">
                {suggestions.map((user) => (
                  <div key={user.username} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <img
                        src={user.userImage}
                        alt={user.username}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-semibold text-sm">{user.username}</p>
                        <p className="text-gray-500 text-xs">{user.name}</p>
                      </div>
                    </div>
                    <button className="text-blue-500 text-xs font-semibold">Follow</button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-300 md:hidden">
        <div className="flex items-center justify-around py-2">
          <Home className="w-6 h-6 text-gray-700" />
          <Search className="w-6 h-6 text-gray-400" />
          <PlusSquare className="w-6 h-6 text-gray-400" />
          <Compass className="w-6 h-6 text-gray-400" />
          <User className="w-6 h-6 text-gray-400" />
        </div>
      </div>
    </div>
  )
}
