'use client'

import { ArrowUp, ArrowDown, MessageCircle, Share, Bookmark, MoreHorizontal, Home, TrendingUp, Plus, Bell, User, Search } from 'lucide-react'
import { useState } from 'react'
import { redditPosts, redditSubreddits } from '../../data/reddit-posts'

export default function RedditPage() {
  const [upvotedPosts, setUpvotedPosts] = useState<Set<number>>(new Set())
  const [downvotedPosts, setDownvotedPosts] = useState<Set<number>>(new Set())
  const [joinedSubreddits, setJoinedSubreddits] = useState<Set<number>>(new Set())

  const handleVote = (postId: number, voteType: 'up' | 'down') => {
    const newUpvotedPosts = new Set(upvotedPosts)
    const newDownvotedPosts = new Set(downvotedPosts)

    if (voteType === 'up') {
      if (newUpvotedPosts.has(postId)) {
        newUpvotedPosts.delete(postId)
      } else {
        newUpvotedPosts.add(postId)
        newDownvotedPosts.delete(postId)
      }
    } else {
      if (newDownvotedPosts.has(postId)) {
        newDownvotedPosts.delete(postId)
      } else {
        newDownvotedPosts.add(postId)
        newUpvotedPosts.delete(postId)
      }
    }

    setUpvotedPosts(newUpvotedPosts)
    setDownvotedPosts(newDownvotedPosts)
  }

  const toggleJoinSubreddit = (subredditId: number) => {
    const newJoinedSubreddits = new Set(joinedSubreddits)
    if (newJoinedSubreddits.has(subredditId)) {
      newJoinedSubreddits.delete(subredditId)
    } else {
      newJoinedSubreddits.add(subredditId)
    }
    setJoinedSubreddits(newJoinedSubreddits)
  }

  // Use data from external files
  const posts = redditPosts
  const subreddits = redditSubreddits

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-6xl mx-auto flex">
        {/* Left Sidebar */}
        <div className="w-64 bg-white border-r border-gray-200 p-4">
          <div className="sticky top-4">
            {/* Logo */}
            <div className="mb-6">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">R</span>
                </div>
                <span className="font-bold text-lg">reddit</span>
              </div>
            </div>

            {/* Navigation */}
            <nav className="space-y-1">
              <a href="#" className="flex items-center space-x-3 p-2 rounded hover:bg-gray-100 transition-colors">
                <Home className="w-5 h-5 text-gray-600" />
                <span className="text-gray-700">Home</span>
              </a>
              <a href="#" className="flex items-center space-x-3 p-2 rounded hover:bg-gray-100 transition-colors">
                <TrendingUp className="w-5 h-5 text-gray-600" />
                <span className="text-gray-700">Popular</span>
              </a>
              <a href="#" className="flex items-center space-x-3 p-2 rounded hover:bg-gray-100 transition-colors">
                <Plus className="w-5 h-5 text-gray-600" />
                <span className="text-gray-700">Create</span>
              </a>
            </nav>

            {/* Subreddits */}
            <div className="mt-6">
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">Your Communities</h3>
              <div className="space-y-1">
                {subreddits.slice(0, 5).map((subreddit) => (
                  <div key={subreddit.id} className="flex items-center justify-between p-2 rounded hover:bg-gray-100 transition-colors">
                    <div className="flex items-center space-x-2">
                      <img
                        src={subreddit.icon}
                        alt={subreddit.name}
                        className="w-5 h-5 rounded-full object-cover"
                      />
                      <span className="text-sm text-gray-700">{subreddit.name}</span>
                    </div>
                    {joinedSubreddits.has(subreddit.id) && (
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 max-w-3xl">
          {/* Header */}
          <div className="sticky top-0 bg-white border-b border-gray-200 p-4">
            <div className="flex items-center space-x-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search Reddit"
                  className="w-full bg-gray-100 text-gray-900 placeholder-gray-500 pl-10 pr-4 py-2 rounded-full outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full font-semibold transition-colors">
                Create Post
              </button>
            </div>
          </div>

          {/* Posts Feed */}
          <div className="space-y-4 p-4">
            {posts.map((post) => (
              <div key={post.id} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                {/* Post Header */}
                <div className="p-4 border-b border-gray-100">
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <img
                      src={post.userImage}
                      alt={post.username}
                      className="w-5 h-5 rounded-full object-cover"
                    />
                    <span>r/{post.subreddit}</span>
                    <span>•</span>
                    <span>Posted by u/{post.username}</span>
                    <span>•</span>
                    <span>{post.timeAgo}</span>
                    {post.flair && (
                      <>
                        <span>•</span>
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                          {post.flair}
                        </span>
                      </>
                    )}
                  </div>
                </div>

                {/* Post Content */}
                <div className="p-4">
                  <h2 className="text-lg font-semibold text-gray-900 mb-2">{post.title}</h2>
                  {post.content && (
                    <p className="text-gray-700 mb-3">{post.content}</p>
                  )}
                  {post.image && (
                    <div className="mb-3">
                      <img
                        src={post.image}
                        alt="Post"
                        className="w-full max-h-96 object-cover rounded"
                      />
                    </div>
                  )}
                </div>

                {/* Post Actions */}
                <div className="px-4 py-3 border-t border-gray-100">
                  <div className="flex items-center space-x-4">
                    {/* Voting */}
                    <div className="flex items-center space-x-1">
                      <button
                        onClick={() => handleVote(post.id, 'up')}
                        className={`p-1 rounded hover:bg-gray-100 transition-colors ${
                          upvotedPosts.has(post.id) ? 'text-orange-500' : 'text-gray-400'
                        }`}
                      >
                        <ArrowUp className="w-5 h-5" />
                      </button>
                      <span className="text-sm font-semibold text-gray-700 min-w-[2rem] text-center">
                        {upvotedPosts.has(post.id) ? post.upvotes + 1 : 
                         downvotedPosts.has(post.id) ? post.upvotes - 1 : post.upvotes}
                      </span>
                      <button
                        onClick={() => handleVote(post.id, 'down')}
                        className={`p-1 rounded hover:bg-gray-100 transition-colors ${
                          downvotedPosts.has(post.id) ? 'text-blue-500' : 'text-gray-400'
                        }`}
                      >
                        <ArrowDown className="w-5 h-5" />
                      </button>
                    </div>

                    {/* Comments */}
                    <button className="flex items-center space-x-1 text-gray-500 hover:bg-gray-100 p-2 rounded transition-colors">
                      <MessageCircle className="w-5 h-5" />
                      <span className="text-sm">{post.comments} Comments</span>
                    </button>

                    {/* Share */}
                    <button className="flex items-center space-x-1 text-gray-500 hover:bg-gray-100 p-2 rounded transition-colors">
                      <Share className="w-5 h-5" />
                      <span className="text-sm">Share</span>
                    </button>

                    {/* Save */}
                    <button className="flex items-center space-x-1 text-gray-500 hover:bg-gray-100 p-2 rounded transition-colors">
                      <Bookmark className="w-5 h-5" />
                      <span className="text-sm">Save</span>
                    </button>

                    {/* More */}
                    <button className="flex items-center space-x-1 text-gray-500 hover:bg-gray-100 p-2 rounded transition-colors">
                      <MoreHorizontal className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-80 p-4">
          <div className="sticky top-4 space-y-4">
            {/* Popular Communities */}
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <h2 className="text-lg font-semibold mb-4">Popular Communities</h2>
              <div className="space-y-3">
                {subreddits.map((subreddit) => (
                  <div key={subreddit.id} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <img
                        src={subreddit.icon}
                        alt={subreddit.name}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-semibold text-sm">{subreddit.name}</p>
                        <p className="text-xs text-gray-500">{subreddit.members.toLocaleString()} members</p>
                      </div>
                    </div>
                    <button
                      onClick={() => toggleJoinSubreddit(subreddit.id)}
                      className={`px-3 py-1 rounded-full text-sm font-semibold transition-colors ${
                        joinedSubreddits.has(subreddit.id)
                          ? 'bg-gray-200 text-gray-700'
                          : 'bg-blue-500 text-white hover:bg-blue-600'
                      }`}
                    >
                      {joinedSubreddits.has(subreddit.id) ? 'Joined' : 'Join'}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Reddit Premium */}
            <div className="bg-gradient-to-r from-orange-400 to-orange-600 rounded-lg p-4 text-white">
              <h3 className="font-semibold mb-2">Reddit Premium</h3>
              <p className="text-sm mb-3">The best Reddit experience, with monthly Coins</p>
              <button className="bg-white text-orange-600 px-4 py-2 rounded-full font-semibold text-sm hover:bg-gray-100 transition-colors">
                Try Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
