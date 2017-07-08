import React from 'react';
import {Link} from 'next-url-prettifier';
import {Router} from '../routes';

import Card from 'react-md/lib/Cards/Card';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import CardText from 'react-md/lib/Cards/CardText'
import CardActions from 'react-md/lib/Cards/CardActions';
import Button from 'react-md/lib/Buttons';

import Nprogress from '../layouts/nprogress'
 
export default class IndexPage extends React.Component {

  render() {
    return (
      <div>
        <Nprogress />
        <h1>สวัสดีครับ ยินดีต้อนรับสู่ห้องทดลอง NextJs</h1>
        <hr />
        <div className="md-grid grid-example">
          <div className="md-cell md-cell--4">
            <Card>
              <CardTitle title="About Page" subtitle="เกี่ยวกับเรา" />
              <CardActions className="md-divider-border md-divider-border--top">
                <Link route={Router.linkPage('about')}><Button raised primary label="Show" /></Link>
              </CardActions>
            </Card>
          </div>
          <div className="md-cell md-cell--4">
            <Card>
              <CardTitle title="Input" subtitle="Form inputs on admin theme" />
              <CardActions className="md-divider-border md-divider-border--top">
                <Link route={Router.linkPage('modules/form/index')}><Button raised primary label="Show" /></Link>
              </CardActions>
            </Card>
          </div>
          <div className="md-cell md-cell--4">
            <Card>
              <CardTitle title="Fetch" subtitle="Fetch data from rest api" />
              <CardActions className="md-divider-border md-divider-border--top">
                <Link route={Router.linkPage('fetch')}><Button raised primary label="Show" /></Link>
              </CardActions>
            </Card>
          </div>
          <div className="md-cell md-cell--4">
            <Card>
              <CardTitle title="CRUD" subtitle="Using axios for CRUD data from node mysql rest api" />
                <CardText>
                  Bug on Mobile: Can not update state from axois
                </CardText>
              <CardActions className="md-divider-border md-divider-border--top">
                <Link route={Router.linkPage('modules/rest/users/index')}><Button raised primary label="Show" /></Link>
              </CardActions>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}