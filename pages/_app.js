import Navbar from "../components/Navbar";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <style jsx global>{`
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
    </>
  );
}
