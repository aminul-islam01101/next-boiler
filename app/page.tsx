import Link from 'next/link';

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1>hello nexts</h1>
        <Link className="underline" href="/about">
          about
        </Link>
        <p>
          <Link className="underline" href="/users">
            Users
          </Link>
        </p>
      </div>
    </main>
  );
};

export default Home;
