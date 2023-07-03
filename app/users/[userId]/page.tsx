import getUser from '@/app/lib/getUser';
import getUserPosts from '@/app/lib/getUserPosts';
import { Post, User } from '@/app/types';
import type { Metadata } from 'next';
import { Suspense } from 'react';
import UserPosts from './components/UserPosts';

type Params = {
  params: {
    userId: string;
  };
};

export async function generateMetadata({ params: { userId } }: Params): Promise<Metadata> {
  const userData = getUser(userId) as Promise<User>;
  const user: User = await userData;

  return {
    title: user.name,
    description: `This is the page of ${user.name}`,
  };
}

export default async function UserPage({ params: { userId } }: Params) {
  const userData = getUser(userId) as Promise<User>;
  const userPostsData = getUserPosts(userId) as Promise<Post[]>;

  // If not progressively rendering with Suspense, use Promise.all
  // const [user, userPosts] = await Promise.all([userData, userPostsData])

  const user = await userData;

  return (
    <>
      <h2>{user.name}</h2>
      <br />
      <Suspense fallback={<h2>Loading...</h2>}>
        <UserPosts promise={userPostsData} />
      </Suspense>
    </>
  );
}
