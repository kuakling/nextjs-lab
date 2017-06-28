import React from 'react'
import Link from 'next/link'
import LayoutMain from "../layouts/main"

export default class Index extends React.Component {
    render () {
        return (
            <div>
                <LayoutMain>
                    <Link href={'about'}>
                        <a>About</a>
                    </Link>
                    <h1 className="bg-red-100"> Hello ReactJs and universal by NextJs</h1>
                </LayoutMain>
            </div>
        );
    }
}