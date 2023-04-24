export default function App({Component, pageProps}){
    return (
        <div>
            <Component {...pageProps} />
            <span>Hello</span>
        </div>
    )
}