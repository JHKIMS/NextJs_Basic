import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();
  return (
    <nav>
      <Link className={router.pathname === "/" ? "active" : ""} href="/">
        Home
      </Link>
      <Link className={router.pathname === "/about" ? "active" : ""} href="/about">
        About
      </Link>
      <style jsx>{`
        nav {
          background-color: dodgerblue;
        }
        a {
          text-decoration: none;
        }
        .active {
          color: white;
        }
      `}</style>
    </nav>
  );
}
