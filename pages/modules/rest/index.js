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
        const itemRoute = 'modules/rest/'+this.props.route
        return (
            <div className="md-cell md-cell--4">
                <Card>
                    <CardTitle title={this.props.title} subtitle={this.props.subtitle} />
                    <CardActions className="md-divider-border md-divider-border--top">
                        <Link route={Router.linkPage(itemRoute)}><Button raised primary label="Show" /></Link>
                    </CardActions>
                </Card>
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
                    <div className="md-grid">
                        <FormItem route="users" title="Users" subtitle="Users" />
                        <FormItem route="select" title="Select" subtitle="Form select" />
                        <FormItem route="option" title="Option" subtitle="Form Option" />
                        <FormItem route="date-time-picker" title="Date & Time Picker" subtitle="Form Date & Time Picker" />
                    </div>
                </LayoutMain>
            </div>
        );
    }
}