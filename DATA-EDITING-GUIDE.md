# 📝 Data Editing Guide

This guide explains how to easily change the content (posts, stories, videos) in your social media clones without touching the layout code.

## 📁 File Structure

```
├── data/
│   ├── instagram-posts.ts    # Instagram posts, stories, and suggestions
│   ├── tiktok-videos.ts      # TikTok videos data
│   ├── twitter-tweets.ts     # Twitter tweets and trends
│   └── reddit-posts.ts       # Reddit posts and subreddits
├── types/
│   └── social.ts             # TypeScript interfaces (don't edit unless adding new fields)
└── app/
    ├── instagram/page.tsx    # Instagram layout (don't edit for content changes)
    ├── tiktok/page.tsx       # TikTok layout (don't edit for content changes)
    ├── twitter/page.tsx      # Twitter layout (don't edit for content changes)
    └── reddit/page.tsx       # Reddit layout (don't edit for content changes)
```

## 🖼️ Instagram Content Editing

### File: `data/instagram-posts.ts`

#### 1. **Posts** (`instagramPosts` array)
Edit the `instagramPosts` array to change the main feed content:

```typescript
{
  id: 1,                    // Unique number (don't change)
  username: 'john_doe',     // 👈 Change this
  userImage: 'https://...', // 👈 Change this (use any image URL)
  postImage: 'https://...', // 👈 Change this (use any image URL)
  likes: 1234,              // 👈 Change this number
  caption: 'Beautiful...',  // 👈 Change this text
  comments: 23,             // 👈 Change this number
  timeAgo: '2h'             // 👈 Change this (e.g., '1h', '3d', '1w')
}
```

**Example of adding a new post:**
```typescript
{
  id: 6,  // Next available number
  username: 'my_username',
  userImage: 'https://images.unsplash.com/photo-1234567890?w=40&h=40&fit=crop&crop=face',
  postImage: 'https://images.unsplash.com/photo-0987654321?w=500&h=500&fit=crop',
  likes: 500,
  caption: 'My awesome post! 🚀 #awesome #cool',
  comments: 15,
  timeAgo: '1h'
}
```

#### 2. **Stories** (`instagramStories` array)
Edit the `instagramStories` array to change the stories section:

```typescript
{
  id: 1,                    // Unique number (don't change)
  username: 'your_story',   // 👈 Change this
  userImage: 'https://...', // 👈 Change this (use any image URL)
  isOwn: true               // 👈 Set to true for "Your Story", false for others
}
```

#### 3. **Suggestions** (`instagramSuggestions` array)
Edit the `instagramSuggestions` array to change the sidebar suggestions:

```typescript
{
  username: 'suggested_user1', // 👈 Change this
  name: 'Suggested User 1',    // 👈 Change this (display name)
  userImage: 'https://...'     // 👈 Change this (use any image URL)
}
```

## 🎥 TikTok Content Editing

### File: `data/tiktok-videos.ts`

#### **Videos** (`tiktokVideos` array)
Edit the `tiktokVideos` array to change the video feed content:

```typescript
{
  id: 1,                    // Unique number (don't change)
  username: 'dance_queen',  // 👈 Change this
  userImage: 'https://...', // 👈 Change this (use any image URL)
  videoThumbnail: 'https://...', // 👈 Change this (use any image URL)
  likes: 12500,             // 👈 Change this number
  comments: 234,            // 👈 Change this number
  shares: 89,               // 👈 Change this number
  caption: 'New dance...',  // 👈 Change this text
  music: 'Original Sound...', // 👈 Change this text
  isFollowing: false,       // Don't change (handled by app)
  userId: 1                 // Unique number (don't change)
}
```

**Example of adding a new video:**
```typescript
{
  id: 7,  // Next available number
  username: 'my_channel',
  userImage: 'https://images.unsplash.com/photo-1234567890?w=40&h=40&fit=crop&crop=face',
  videoThumbnail: 'https://images.unsplash.com/photo-0987654321?w=300&h=500&fit=crop',
  likes: 5000,
  comments: 120,
  shares: 45,
  caption: 'Check out this amazing trick! 🎯 #amazing #trick',
  music: 'Cool Beat - my_channel',
  isFollowing: false,
  userId: 7
}
```

## 🖼️ Image Sources

### **Free Image Sources:**
- **Unsplash**: `https://images.unsplash.com/photo-[ID]?w=[width]&h=[height]&fit=crop`
- **Picsum**: `https://picsum.photos/[width]/[height]`
- **Placeholder**: `https://via.placeholder.com/[width]x[height]`

### **Image Size Recommendations:**
- **Profile Images**: 40x40 or 50x50 pixels
- **Instagram Posts**: 500x500 pixels (square)
- **TikTok Videos**: 300x500 pixels (vertical)

## 🔄 How Changes Work

1. **Edit the data files** (`data/instagram-posts.ts` or `data/tiktok-videos.ts`)
2. **Save the files**
3. **The app automatically reloads** (hot reload)
4. **See your changes** in the browser immediately

## ⚠️ Important Notes

### **Don't Edit These Files for Content Changes:**
- `app/instagram/page.tsx` - Layout code
- `app/tiktok/page.tsx` - Layout code
- `types/social.ts` - Type definitions (unless adding new fields)

### **Required Fields:**
- All fields in the data objects are required
- Don't remove any fields
- Keep the same data structure

### **ID Numbers:**
- Each `id` must be unique
- Don't use the same `id` twice
- Use sequential numbers (1, 2, 3, 4...)

### **Image URLs:**
- Must be valid image URLs
- Use HTTPS URLs when possible
- Test URLs in browser to ensure they work

## 🚀 Quick Start Examples

### **Add a New Instagram Post:**
1. Open `data/instagram-posts.ts`
2. Find the `instagramPosts` array
3. Add a new object with the next available `id`
4. Fill in all required fields
5. Save the file

### **Add a New TikTok Video:**
1. Open `data/tiktok-videos.ts`
2. Find the `tiktokVideos` array
3. Add a new object with the next available `id`
4. Fill in all required fields
5. Save the file

### **Change Existing Content:**
1. Open the appropriate data file
2. Find the object you want to change
3. Modify the fields you want to update
4. Save the file

## 🎨 Customization Tips

- **Use emojis** in captions for visual appeal
- **Add hashtags** to make content look authentic
- **Vary the numbers** for likes, comments, shares
- **Use different time formats** (1h, 2d, 1w, etc.)
- **Mix up usernames** to create variety
- **Use high-quality images** for better visual appeal

## 🔧 Troubleshooting

### **Changes Not Showing:**
- Check if the file was saved
- Look for syntax errors in the data file
- Refresh the browser
- Check the browser console for errors

### **Images Not Loading:**
- Verify the image URL is correct
- Test the URL in a new browser tab
- Use a different image source

### **App Not Working:**
- Check for missing commas or brackets
- Ensure all required fields are present
- Look for TypeScript errors in the terminal

## 🐦 Twitter Content Editing

### File: `data/twitter-tweets.ts`

#### 1. **Tweets** (`twitterTweets` array)
Edit the `twitterTweets` array to change the tweet feed content:

```typescript
{
  id: 1,                    // Unique number (don't change)
  username: 'elonmusk',     // 👈 Change this
  displayName: 'Elon Musk', // 👈 Change this
  userImage: 'https://...', // 👈 Change this (use any image URL)
  content: 'Just launched...', // 👈 Change this text
  image: 'https://...',     // 👈 Change this (optional image URL)
  likes: 125000,            // 👈 Change this number
  retweets: 45000,          // 👈 Change this number
  replies: 12000,           // 👈 Change this number
  timeAgo: '2h',            // 👈 Change this (e.g., '1h', '3d', '1w')
  isVerified: true,         // 👈 Change this (true/false)
  isFollowing: false,       // Don't change (handled by app)
  userId: 1                 // Unique number (don't change)
}
```

#### 2. **Trends** (`twitterTrends` array)
Edit the `twitterTrends` array to change trending topics:

```typescript
{
  id: 1,                    // Unique number (don't change)
  hashtag: 'AIRevolution',  // 👈 Change this
  tweets: 125000,           // 👈 Change this number
  category: 'Technology'    // 👈 Change this
}
```

## 🤖 Reddit Content Editing

### File: `data/reddit-posts.ts`

#### 1. **Posts** (`redditPosts` array)
Edit the `redditPosts` array to change the post feed content:

```typescript
{
  id: 1,                    // Unique number (don't change)
  subreddit: 'r/technology', // 👈 Change this
  username: 'tech_enthusiast', // 👈 Change this
  userImage: 'https://...', // 👈 Change this (use any image URL)
  title: 'New AI breakthrough...', // 👈 Change this text
  content: 'Scientists have...', // 👈 Change this text (optional)
  image: 'https://...',     // 👈 Change this (optional image URL)
  upvotes: 15420,           // 👈 Change this number
  downvotes: 234,           // 👈 Change this number
  comments: 892,            // 👈 Change this number
  timeAgo: '3h',            // 👈 Change this (e.g., '1h', '3d', '1w')
  flair: 'News',            // 👈 Change this (optional)
  isUpvoted: false,         // Don't change (handled by app)
  isDownvoted: false,       // Don't change (handled by app)
  userId: 1                 // Unique number (don't change)
}
```

#### 2. **Subreddits** (`redditSubreddits` array)
Edit the `redditSubreddits` array to change subreddit content:

```typescript
{
  id: 1,                    // Unique number (don't change)
  name: 'r/technology',     // 👈 Change this
  members: 14500000,        // 👈 Change this number
  description: 'The latest...', // 👈 Change this text
  icon: 'https://...',      // 👈 Change this (use any image URL)
  isJoined: true            // Don't change (handled by app)
}
```


---

**Happy editing! 🎉** Your social media clones are now easily customizable without touching the layout code.
