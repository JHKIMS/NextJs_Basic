import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();
  return (
    <nav>
      <Link href="/">
        <a className={ router.pathname === "/" ? "active" : "unactive"}>Home</a>
      </Link>
      <br/>
      <Link href="/about">
        <a className={router.pathname === "/about" ? "active" : "unactive"}>About</a>
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
        .unactive {
          color: red;
        }
      `}</style>
    </nav>
  );
}
