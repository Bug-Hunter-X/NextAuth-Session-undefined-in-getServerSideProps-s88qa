```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <Link href="/about">
        <a>Go to About</a>
      </Link>
    </div>
  );
}
```
```javascript
// pages/about.js
import { unstable_getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]';

export async function getServerSideProps(context) {
  const session = await unstable_getServerSession(context.req, context.res, authOptions);

  return {
    props: {
      session,
    },
  };
}

export default function About({ session }) {
  if (!session) {
    return <p>You are not logged in.</p>;
  }

  return (
    <div>
      <h1>About Us</h1>
      <p>Welcome, {session.user.email}!</p> 
    </div>
  );
}
```