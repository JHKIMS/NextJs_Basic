import Navbar from "./Navbar";

export default function Layout({children}){ 
    // children은 이 상황에서 _app.js에 <Component {...pageProps} />
    return (
        <>
            <Navbar />
            <div>{children}</div>
        </>
    )
}