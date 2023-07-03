import type { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';
import getAllUsers from '../lib/getAllUsers';
import { User } from '../types';

export const metadata: Metadata = {
  title: 'Users',
};

export default async function UsersPage() {
  const usersData = getAllUsers() as Promise<User[]>;

  const users = await usersData;

  const content = (
    <section>
      <h2>
        <Link href="/">Back to Home</Link>
      </h2>
      <br />
      {users.map((user) => {
        return (
          <React.Fragment key={user.id}>
            <p>
              <Link href={`/users/${user.id}`}>{user.name}</Link>
            </p>
            <br />
          </React.Fragment>
        );
      })}
    </section>
  );

  return content;
}
