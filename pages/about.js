import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import LayoutMain from "../layouts/main"

export default class About extends React.Component {
    render () {
        return (
            <div>
                <Head>
                    <title>Custom title on page</title>
                </Head>
                <LayoutMain>
                    <h1> Mr.Surakit Choodet</h1>
                    <h2>kuakling@gmail.com</h2>
                </LayoutMain>
            </div>
        );
    }
}