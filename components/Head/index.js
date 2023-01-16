import Head from 'next/head'
export default ( {children} ) => {

    return (
        <Head>
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"></meta>
            <link rel="icon" href="/favicon.ico" />
            {children}
        </Head>
    )
}