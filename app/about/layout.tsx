import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'About page',
  description: 'about page',
};

const AboutLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <nav>
        <h1 className="text-2xl">About nav bar test</h1>
      </nav>
      {children}
    </>
  );
};
export default AboutLayout;

// ----------------------------------------------------------------
// ----------------------------------------------------------------
