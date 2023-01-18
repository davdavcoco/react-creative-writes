import Link from "next/link";
import { auth } from "../utils/firebase"; //ambil auth
import { useAuthState } from "react-firebase-hooks/auth"; //ambil auth state

export default function Nav() {
  const [user, loading] = useAuthState(auth);
  return (
    // <nav className="flex justify-between items-center py-10">
    <nav className="flex justify-between items-center py-10">
      <Link href="/">
        <button className="text-lg font-medium">Creative Minds</button>
      </Link>
      <ul className="flex items-center gap-10">
        {!user && (
          <Link
            href={"/auth/login"}
            className="py-2 px-4 text-sm bg-cyan-500 text-white rounded-lg font-medium ml-8"
          >
            Join Now
          </Link>
        )}
        {user && (
          <div className="flex items-center gap-6">
            <Link href="/post">
              <button className="font-medium bg-cyan-500 text-white py-2 px-4 rounded-md text-sm">
                Post
              </button>
            </Link>
            <Link href="/dashboard">
              <img
                className="w-12 rounded-full cursor-porinter"
                src={user.photoURL}
              />
            </Link>
          </div>
        )}
      </ul>
    </nav>
  );
}
