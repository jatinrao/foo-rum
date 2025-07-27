'use client';

import { formatDate } from "@/lib/utils";


type Props = {
  posts: any[];
};

export default function PostList({ posts }: Props) {
  if (posts.length === 0) {
    return <p className="text-gray-500">No posts yet.</p>;
  }

  return (
    <ul className="space-y-2">
     {posts.map((post) => (
  <div key={post.id} className="border p-4 rounded mb-4">
    <div className="flex items-center gap-2 mb-2">
      <img
        src={post.userProfile}
        alt={post.userName}
        className="w-8 h-8 rounded-full"
      />
      <span className="font-semibold">{post.userName}</span>
    </div>
    <p className="text-sm">{post.content}</p>
    <p className="text-xs text-gray-400">{formatDate(new Date(post.createdAt).toDateString())}</p>
  </div>
))}
    </ul>
  );
}
