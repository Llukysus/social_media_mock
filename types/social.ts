// Instagram Post Data Types
export interface InstagramPost {
  id: number;
  username: string;
  userImage: string;
  postImage: string;
  likes: number;
  caption: string;
  comments: number;
  timeAgo: string;
}

export interface InstagramStory {
  id: number;
  username: string;
  userImage: string;
  isOwn?: boolean;
}

export interface InstagramSuggestion {
  username: string;
  name: string;
  userImage: string;
}

// TikTok Video Data Types
export interface TikTokVideo {
  id: number;
  username: string;
  userImage: string;
  videoThumbnail: string;
  likes: number;
  comments: number;
  shares: number;
  caption: string;
  music: string;
  isFollowing?: boolean;
  userId: number;
}

// Twitter Tweet Data Types
export interface TwitterTweet {
  id: number;
  username: string;
  displayName: string;
  userImage: string;
  content: string;
  image?: string;
  likes: number;
  retweets: number;
  replies: number;
  timeAgo: string;
  isVerified?: boolean;
  isFollowing?: boolean;
  userId: number;
}

export interface TwitterTrend {
  id: number;
  hashtag: string;
  tweets: number;
  category: string;
}

// Reddit Post Data Types
export interface RedditPost {
  id: number;
  subreddit: string;
  username: string;
  userImage: string;
  title: string;
  content?: string;
  image?: string;
  upvotes: number;
  downvotes: number;
  comments: number;
  timeAgo: string;
  flair?: string;
  isUpvoted?: boolean;
  isDownvoted?: boolean;
  userId: number;
}

export interface RedditSubreddit {
  id: number;
  name: string;
  members: number;
  description: string;
  icon: string;
  isJoined?: boolean;
}

