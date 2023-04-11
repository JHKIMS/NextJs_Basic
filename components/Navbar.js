import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar(){
    const router = useRouter();
    return <nav>
        <Link className="hello" href="/">
            Home
        </Link>
        <Link style={{color: router.pathname === "/about" ? "red":"blue"}} href="/about">
            About
        </Link>
    </nav>
}