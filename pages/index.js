// import React from 'react'
// import Link from 'next/link'
// import LayoutMain from "../layouts/main"

// export default class Index extends React.Component {
//     render () {
//         return (
//             <div>
//                 <LayoutMain>
//                     <Link href={'about-us'}>
//                         <a>About</a>
//                     </Link>
//                     <h1 className="bg-red-100"> Hello ReactJs and universal by NextJs</h1>
//                 </LayoutMain>
//             </div>
//         );
//     }
// }

import React from 'react';
import {Link} from 'next-url-prettifier';
import {Router} from '../routes';

import Card from 'react-md/lib/Cards/Card';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import CardActions from 'react-md/lib/Cards/CardActions';

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
            <Card className="weather-card">
              <CardTitle title="About Page" subtitle="เกี่ยวกับเรา" />
              <CardActions className="md-divider-border md-divider-border--top">
                <Link route={Router.linkPage('about')}><a>Show</a></Link>
              </CardActions>
            </Card>
          </div>
          <div className="md-cell md-cell--4">
            <Card className="weather-card">
              <CardTitle title="Input" subtitle="Form inputs on admin theme" />
              <CardActions className="md-divider-border md-divider-border--top">
                <Link route={Router.linkPage('modules/form/input')}><a>Show</a></Link>
              </CardActions>
            </Card>
          </div>
          <div className="md-cell md-cell--4">4</div>
        </div>
      </div>
    );
  }
}