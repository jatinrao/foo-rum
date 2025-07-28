'use client';

import Post from "./Post";
import { PostWithUser } from "@/lib/db";


type Props = {
  posts: PostWithUser[];
};

export default function PostList({ posts }: Props) {
  if (posts.length === 0) {
    return <p className="text-gray-500">No posts yet.</p>;
  }

  return (
    <ul className="space-y-2">
     {posts.map((post) => (
      <li key={post.id}>
        <Post data={post}/>
      </li>
      ))}
    </ul>
  );
}
