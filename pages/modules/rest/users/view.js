import React from 'react'
import Head from 'next/head'
import {Link} from 'next-url-prettifier';
import {Router} from '../../../../routes';
import axios from 'axios'



import Card from 'react-md/lib/Cards/Card';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import TableCardHeader from 'react-md/lib/DataTables/TableCardHeader';
import CardText from 'react-md/lib/Cards/CardText';
import CircularProgress from 'react-md/lib/Progress/CircularProgress';
import Button from 'react-md/lib/Buttons';

export default class View extends React.Component {
  
  static async getInitialProps ({query}) {
    const url = 'https://nextjs-lab-kuakling.c9users.io/api/users/'+query.user_id
    const id = query.id;
    const res = await axios.get(url)
      return {
        data: res.data,
        urlApi: url
      }
  }
  
  componentDidMount () {
    if(!sessionStorage.getItem('users')) sessionStorage.setItem('users', JSON.stringify(this.props.data))
  }
  
  moduleRoute(route){
    const itemRoute = 'modules/rest/users/'+route
    return itemRoute
  }
    
  render () {
    const user = this.props.data.User
    return (
      <div>
        <Head>
            <title>Using axios for CRUD data from node mysql rest api</title>
        </Head>
        
        <Link route={Router.linkPage('')}><Button
          floating
          primary
          fixed
          tooltipLabel="Go Home!!"
          tooltipPosition="top"
          style={{padding: 0}}
        >
          home
        </Button></Link>
        
        <div className="md-grid grid-example">
          <Card tableCard className="md-cell md-cell--12">
            <TableCardHeader
              title="CRUD"
              visible={false}
            >
              <Link route={Router.linkPage(this.moduleRoute('index'))}>
                <Button raised primary label="Index" tooltipLabel="Return to index" tooltipDelay={300} className="md-cell--right">view_headline</Button>
              </Link>
            </TableCardHeader>
            <p className="md-card-title">
              Using axios for CRUD data from node mysql rest api  (
              <a href={this.props.urlApi} target="_blank">{this.props.urlApi}</a>)
            </p>
            <CardText className="weather-block">
              <div className="md-data-table--responsive">
                <table className="md-data-table md-data-table--plain">
                  <tbody>
                  <tr>
                    <td>Id</td>
                    <td>{user.user_id}</td>
                  </tr>
                  <tr>
                    <td>e-Mail</td>
                    <td>{user.user_email}</td>
                  </tr>
                  <tr>
                    <td>Password</td>
                    <td>{user.user_password}</td>
                  </tr>
                  <tr>
                    <td>Join date</td>
                    <td>{user.user_join_date}</td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </CardText>
          </Card>
        </div>
        
      </div>
    )
  }
}