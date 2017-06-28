import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

export default class Index extends React.Component {
    render () {
        return (
            <div>
                <Head>
                    <title>Custom title on page</title>
                </Head>
                <Link href={'/'}>
                    <a>Home</a>
                </Link>
                <h1> Mr.Surakit Choodet</h1>
            </div>
        );
    }
}