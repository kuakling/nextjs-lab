import React from 'react'
import Link from 'next/link'

export default class Index extends React.Component {
    render () {
        return (
            <div>
                <Link href={'about'}>
                    <a>About</a>
                </Link>
                <h1> Hello ReactJs and universal by NextJs</h1>
            </div>
        );
    }
}