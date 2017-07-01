import React from 'react'
import Head from 'next/head'
import LayoutMain from "./layouts/main"
import {Link} from 'next-url-prettifier';
import {Router} from '../../../routes';

import Card from 'react-md/lib/Cards/Card';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import CardActions from 'react-md/lib/Cards/CardActions';
import Button from 'react-md/lib/Buttons';

class FormItem extends React.Component {
    constructor(props) {
        super(props);
    }
      
    render () {
        const itemRoute = 'modules/form/'+this.props.route
        return (
            <div>
                <div className="md-grid">
                    <div className="md-cell md-cell--4">
                        <Card>
                            <CardTitle title={this.props.title} subtitle={this.props.subtitle} />
                            <CardActions className="md-divider-border md-divider-border--top">
                                <Link route={Router.linkPage(itemRoute)}><Button raised primary label="Show" /></Link>
                            </CardActions>
                        </Card>
                    </div>
                </div>
            </div>
        );
    }
}

export default class Index extends React.Component {
    constructor(props) {
        super(props);
    }
      
    render () {
        return (
            <div>
                <Head>
                    <title>Form Examples</title>
                </Head>
                <LayoutMain>
                    <div className="content" style={{flex: 1}}>
                        <FormItem route="input" title="Inputs" subtitle="Form inputs" />
                        <FormItem route="select" title="Select" subtitle="Form select" />
                    </div>
                </LayoutMain>
            </div>
        );
    }
}