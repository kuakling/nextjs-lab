import React from 'react';
import {Link} from 'next-url-prettifier';
import {Router} from '../routes';

import Card from 'react-md/lib/Cards/Card';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import CardActions from 'react-md/lib/Cards/CardActions';
import CardText from 'react-md/lib/Cards/CardText';
import Media, { MediaOverlay } from 'react-md/lib/Media';
import Avatar from 'react-md/lib/Avatars';
import Button from 'react-md/lib/Buttons';

import Nprogress from '../layouts/nprogress'
 
export default class AboutPage extends React.Component {
  static getInitialProps({ req }) {
    return {
      server: req ? true : false
    }
  }
 
  render() {
    return (
      <div>
        <Nprogress />
        <Card style={{ maxWidth: 600 }} className="md-block-centered">
          <Media>
            <img src="http://www.comm-sci.pn.psu.ac.th/media/parallax/img/bg.png" role="presentation" />
            <MediaOverlay>
              <CardTitle title="Faculty of Communication Sciences" subtitle="Prince of Songkla University Pattani Campus">
                <Button className="md-cell--right" icon>star_outline</Button>
              </CardTitle>
            </MediaOverlay>
          </Media>
          <CardTitle
            avatar={<Avatar src="https://avatars3.githubusercontent.com/u/7055537?v=3&u=5ce40eae99cce6b1f8352ef46b831303613fe3fe&s=400" role="presentation" />}
            title="Mr.Surakit Choodet"
            subtitle="kuakling@gmail.com"
          />
          <CardActions expander>
            <Link route={Router.linkPage('')}><Button raised primary label="Home" /></Link>
            This Page Loading from a { this.props.server ? 'Server' : 'Client' }
          </CardActions>
          <CardText expandable>
            Faculty of Communication Sciences PSU Pattani Campus
          </CardText>
        </Card>

      </div>
    );
  }
}


// const AboutPage = () => (
//   <div>
//     <p>Hello Next.js</p>
//   </div>
// )

// export default AboutPage