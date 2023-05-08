import Link from 'next/link';

function Navigation(){

    return (
      <ul>
        <Link href="/">Home</Link>
        <Link href="/members">Members</Link>
      </ul>
    );
}

export default Navigation;