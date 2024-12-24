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
  // Check if session exists and if user is defined
  if (!session || !session.user) {
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