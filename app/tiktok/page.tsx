'use client'

import { Heart, MessageCircle, Share, Bookmark, MoreHorizontal, Home, Search, Plus, User, Music } from 'lucide-react'
import { useState } from 'react'
import { tiktokVideos } from '../../data/tiktok-videos'

export default function TikTokPage() {
  const [likedVideos, setLikedVideos] = useState<Set<number>>(new Set())
  const [followedUsers, setFollowedUsers] = useState<Set<number>>(new Set())

  const toggleLike = (videoId: number) => {
    const newLikedVideos = new Set(likedVideos)
    if (newLikedVideos.has(videoId)) {
      newLikedVideos.delete(videoId)
    } else {
      newLikedVideos.add(videoId)
    }
    setLikedVideos(newLikedVideos)
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

  // Use data from external file
  const videos = tiktokVideos

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="bg-black border-b border-gray-800 sticky top-0 z-50">
        <div className="max-w-md mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold">Following</h1>
            <div className="flex items-center space-x-4">
              <Search className="w-6 h-6 text-white" />
              <MoreHorizontal className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      </header>

      {/* Video Feed */}
      <div className="relative">
        {videos.map((video, index) => (
          <div
            key={video.id}
            className="relative h-screen w-full flex items-center justify-center"
            style={{ transform: `translateY(${index * 100}vh)` }}
          >
            {/* Video Background */}
            <div className="absolute inset-0">
              <img
                src={video.videoThumbnail}
                alt="Video"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>

            {/* Video Content */}
            <div className="relative z-10 w-full h-full flex">
              {/* Left Side - Video Info */}
              <div className="flex-1 flex flex-col justify-end p-4">
                <div className="space-y-4">
                  {/* User Info */}
                  <div className="flex items-center space-x-3">
                    <img
                      src={video.userImage}
                      alt={video.username}
                      className="w-10 h-10 rounded-full object-cover border-2 border-white"
                    />
                    <div>
                      <p className="font-semibold text-sm">@{video.username}</p>
                      <button
                        onClick={() => toggleFollow(video.userId)}
                        className={`text-xs px-3 py-1 rounded-full border ${
                          followedUsers.has(video.userId)
                            ? 'bg-white text-black'
                            : 'border-white text-white'
                        }`}
                      >
                        {followedUsers.has(video.userId) ? 'Following' : 'Follow'}
                      </button>
                    </div>
                  </div>

                  {/* Caption */}
                  <div className="max-w-xs">
                    <p className="text-sm leading-relaxed">{video.caption}</p>
                  </div>

                  {/* Music */}
                  <div className="flex items-center space-x-2">
                    <Music className="w-4 h-4" />
                    <p className="text-xs text-gray-300 truncate">{video.music}</p>
                  </div>
                </div>
              </div>

              {/* Right Side - Actions */}
              <div className="flex flex-col justify-end items-center space-y-6 p-4">
                {/* User Avatar */}
                <div className="relative">
                  <img
                    src={video.userImage}
                    alt={video.username}
                    className="w-12 h-12 rounded-full object-cover border-2 border-white"
                  />
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                    <Plus className="w-3 h-3 text-white" />
                  </div>
                </div>

                {/* Like Button */}
                <div className="flex flex-col items-center space-y-1">
                  <button onClick={() => toggleLike(video.id)}>
                    <Heart
                      className={`w-8 h-8 ${
                        likedVideos.has(video.id) ? 'fill-red-500 text-red-500' : 'text-white'
                      }`}
                    />
                  </button>
                  <span className="text-xs">
                    {likedVideos.has(video.id) ? video.likes + 1 : video.likes}
                  </span>
                </div>

                {/* Comment Button */}
                <div className="flex flex-col items-center space-y-1">
                  <MessageCircle className="w-8 h-8 text-white" />
                  <span className="text-xs">{video.comments}</span>
                </div>

                {/* Share Button */}
                <div className="flex flex-col items-center space-y-1">
                  <Share className="w-8 h-8 text-white" />
                  <span className="text-xs">{video.shares}</span>
                </div>

                {/* Bookmark Button */}
                <div className="flex flex-col items-center space-y-1">
                  <Bookmark className="w-8 h-8 text-white" />
                </div>

                {/* More Options */}
                <MoreHorizontal className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-black border-t border-gray-800">
        <div className="flex items-center justify-around py-2">
          <Home className="w-6 h-6 text-white" />
          <Search className="w-6 h-6 text-gray-400" />
          <Plus className="w-6 h-6 text-gray-400" />
          <MessageCircle className="w-6 h-6 text-gray-400" />
          <User className="w-6 h-6 text-gray-400" />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-20">
        <div className="flex flex-col space-y-2">
          {videos.map((_, index) => (
            <div
              key={index}
              className="w-1 h-8 bg-white/30 rounded-full"
            />
          ))}
        </div>
      </div>
    </div>
  )
}
