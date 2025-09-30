'use client'

import { Heart, MessageCircle, Repeat2, Share, MoreHorizontal, Home, Search, Bell, Mail, Bookmark, User, Hash, TrendingUp } from 'lucide-react'
import { useState } from 'react'
import { twitterTweets, twitterTrends } from '../../data/twitter-tweets'

export default function TwitterPage() {
  const [likedTweets, setLikedTweets] = useState<Set<number>>(new Set())
  const [retweetedTweets, setRetweetedTweets] = useState<Set<number>>(new Set())
  const [followedUsers, setFollowedUsers] = useState<Set<number>>(new Set())

  const toggleLike = (tweetId: number) => {
    const newLikedTweets = new Set(likedTweets)
    if (newLikedTweets.has(tweetId)) {
      newLikedTweets.delete(tweetId)
    } else {
      newLikedTweets.add(tweetId)
    }
    setLikedTweets(newLikedTweets)
  }

  const toggleRetweet = (tweetId: number) => {
    const newRetweetedTweets = new Set(retweetedTweets)
    if (newRetweetedTweets.has(tweetId)) {
      newRetweetedTweets.delete(tweetId)
    } else {
      newRetweetedTweets.add(tweetId)
    }
    setRetweetedTweets(newRetweetedTweets)
  }

  const toggleFollow = (userId: number) => {
    const newFollowedUsers = new Set(followedUsers)
    if (newFollowedUsers.has(userId)) {
      newFollowedUsers.delete(userId)
    } else {
      newFollowedUsers.add(userId)
    }
    setFollowedUsers(newFollowedUsers)
  }

  // Use data from external files
  const tweets = twitterTweets
  const trends = twitterTrends

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-6xl mx-auto flex">
        {/* Left Sidebar */}
        <div className="w-64 p-4 border-r border-gray-800">
          <div className="sticky top-4">
            {/* Logo */}
            <div className="mb-8">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">𝕏</span>
              </div>
            </div>

            {/* Navigation */}
            <nav className="space-y-2">
              <a href="#" className="flex items-center space-x-4 p-3 rounded-full hover:bg-gray-800 transition-colors">
                <Home className="w-6 h-6" />
                <span className="text-lg">Home</span>
              </a>
              <a href="#" className="flex items-center space-x-4 p-3 rounded-full hover:bg-gray-800 transition-colors">
                <Hash className="w-6 h-6" />
                <span className="text-lg">Explore</span>
              </a>
              <a href="#" className="flex items-center space-x-4 p-3 rounded-full hover:bg-gray-800 transition-colors">
                <Bell className="w-6 h-6" />
                <span className="text-lg">Notifications</span>
              </a>
              <a href="#" className="flex items-center space-x-4 p-3 rounded-full hover:bg-gray-800 transition-colors">
                <Mail className="w-6 h-6" />
                <span className="text-lg">Messages</span>
              </a>
              <a href="#" className="flex items-center space-x-4 p-3 rounded-full hover:bg-gray-800 transition-colors">
                <Bookmark className="w-6 h-6" />
                <span className="text-lg">Bookmarks</span>
              </a>
              <a href="#" className="flex items-center space-x-4 p-3 rounded-full hover:bg-gray-800 transition-colors">
                <User className="w-6 h-6" />
                <span className="text-lg">Profile</span>
              </a>
            </nav>

            {/* Tweet Button */}
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-full mt-6 transition-colors">
              Tweet
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 max-w-2xl border-r border-gray-800">
          {/* Header */}
          <div className="sticky top-0 bg-black bg-opacity-80 backdrop-blur-md border-b border-gray-800 p-4">
            <h1 className="text-xl font-bold">Home</h1>
          </div>

          {/* Tweet Composer */}
          <div className="border-b border-gray-800 p-4">
            <div className="flex space-x-3">
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=40&h=40&fit=crop&crop=face"
                alt="Your profile"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="flex-1">
                <textarea
                  placeholder="What's happening?"
                  className="w-full bg-transparent text-white placeholder-gray-500 text-xl resize-none outline-none"
                  rows={3}
                />
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center space-x-4 text-blue-500">
                    {/* Tweet actions would go here */}
                  </div>
                  <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition-colors">
                    Tweet
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Tweets Feed */}
          <div className="divide-y divide-gray-800">
            {tweets.map((tweet) => (
              <div key={tweet.id} className="p-4 hover:bg-gray-900 transition-colors">
                <div className="flex space-x-3">
                  <img
                    src={tweet.userImage}
                    alt={tweet.username}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    {/* Tweet Header */}
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="font-bold text-white">{tweet.displayName}</span>
                      {tweet.isVerified && (
                        <span className="text-blue-500">✓</span>
                      )}
                      <span className="text-gray-500">@{tweet.username}</span>
                      <span className="text-gray-500">·</span>
                      <span className="text-gray-500">{tweet.timeAgo}</span>
                      <div className="ml-auto">
                        <MoreHorizontal className="w-5 h-5 text-gray-500" />
                      </div>
                    </div>

                    {/* Tweet Content */}
                    <p className="text-white mb-3">{tweet.content}</p>

                    {/* Tweet Image */}
                    {tweet.image && (
                      <div className="mb-3 rounded-2xl overflow-hidden">
                        <img
                          src={tweet.image}
                          alt="Tweet"
                          className="w-full h-64 object-cover"
                        />
                      </div>
                    )}

                    {/* Tweet Actions */}
                    <div className="flex items-center justify-between max-w-md">
                      <button className="flex items-center space-x-2 text-gray-500 hover:text-blue-500 transition-colors">
                        <MessageCircle className="w-5 h-5" />
                        <span>{tweet.replies}</span>
                      </button>
                      <button
                        onClick={() => toggleRetweet(tweet.id)}
                        className={`flex items-center space-x-2 transition-colors ${
                          retweetedTweets.has(tweet.id) ? 'text-green-500' : 'text-gray-500 hover:text-green-500'
                        }`}
                      >
                        <Repeat2 className="w-5 h-5" />
                        <span>{retweetedTweets.has(tweet.id) ? tweet.retweets + 1 : tweet.retweets}</span>
                      </button>
                      <button
                        onClick={() => toggleLike(tweet.id)}
                        className={`flex items-center space-x-2 transition-colors ${
                          likedTweets.has(tweet.id) ? 'text-red-500' : 'text-gray-500 hover:text-red-500'
                        }`}
                      >
                        <Heart className={`w-5 h-5 ${likedTweets.has(tweet.id) ? 'fill-current' : ''}`} />
                        <span>{likedTweets.has(tweet.id) ? tweet.likes + 1 : tweet.likes}</span>
                      </button>
                      <button className="flex items-center space-x-2 text-gray-500 hover:text-blue-500 transition-colors">
                        <Share className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-80 p-4">
          <div className="sticky top-4 space-y-6">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
              <input
                type="text"
                placeholder="Search Twitter"
                className="w-full bg-gray-800 text-white placeholder-gray-500 pl-10 pr-4 py-3 rounded-full outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Trends */}
            <div className="bg-gray-800 rounded-2xl p-4">
              <h2 className="text-xl font-bold mb-4">What's happening</h2>
              <div className="space-y-3">
                {trends.map((trend) => (
                  <div key={trend.id} className="hover:bg-gray-700 p-2 rounded-lg cursor-pointer transition-colors">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-500">{trend.category} · Trending</p>
                        <p className="font-bold text-white">#{trend.hashtag}</p>
                        <p className="text-sm text-gray-500">{trend.tweets.toLocaleString()} Tweets</p>
                      </div>
                      <TrendingUp className="w-5 h-5 text-gray-500" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Who to follow */}
            <div className="bg-gray-800 rounded-2xl p-4">
              <h2 className="text-xl font-bold mb-4">Who to follow</h2>
              <div className="space-y-3">
                {tweets.slice(0, 3).map((tweet) => (
                  <div key={tweet.id} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <img
                        src={tweet.userImage}
                        alt={tweet.username}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-bold text-white">{tweet.displayName}</p>
                        <p className="text-gray-500 text-sm">@{tweet.username}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => toggleFollow(tweet.userId)}
                      className={`px-4 py-2 rounded-full font-bold transition-colors ${
                        followedUsers.has(tweet.userId)
                          ? 'bg-gray-600 text-white'
                          : 'bg-white text-black hover:bg-gray-200'
                      }`}
                    >
                      {followedUsers.has(tweet.userId) ? 'Following' : 'Follow'}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
