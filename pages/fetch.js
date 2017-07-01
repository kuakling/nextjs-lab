import React from 'react'
import Head from 'next/head'
import {Link} from 'next-url-prettifier';
import {Router} from '../routes';
import 'isomorphic-fetch'

import Button from 'react-md/lib/Buttons/Button';

import Card from 'react-md/lib/Cards/Card';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import CardText from 'react-md/lib/Cards/CardText';

import DataTable from 'react-md/lib/DataTables/DataTable';
import TableHeader from 'react-md/lib/DataTables/TableHeader';
import TableBody from 'react-md/lib/DataTables/TableBody';
import TableRow from 'react-md/lib/DataTables/TableRow';
import TableColumn from 'react-md/lib/DataTables/TableColumn';

export default class FetchPage extends React.Component {
  static async getInitialProps() {
    // eslint-disable-next-line no-undef
    const rest_url = "https://api.github.com/users/kuakling/repos"
    const res = await fetch(rest_url)
    const json = await res.json()
    return {
      // stars: json.stargazers_count,
      rest_url: rest_url,
      result: json
    }
  }

  render() {
    const rows = this.props.result.map((row, i) => (
      <TableRow key={i}>
        <TableColumn>{row.id}</TableColumn>
        <TableColumn><a href={row.html_url} target="_blank">{row.name}</a></TableColumn>
        <TableColumn>{row.stargazers_count}</TableColumn>
        <TableColumn>{row.watchers_count}</TableColumn>
        <TableColumn>{row.language}</TableColumn>
        <TableColumn>{row.default_branch}</TableColumn>
      </TableRow>
    ));
    return (
      <div>
        <Head>
            <title>Fetch data from rest api Examples</title>
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
          <Card className="md-cell md-cell--12">
            <CardTitle title="Fetch" subtitle="Fetch data from rest api" />
            <CardText className="weather-block">
              <h1>Url: {this.props.rest_url}️</h1>
              <hr />
              
              <DataTable plain>
                <TableHeader>
                  <TableRow>
                    <TableColumn>Id</TableColumn>
                    <TableColumn>Name</TableColumn>
                    <TableColumn>Star</TableColumn>
                    <TableColumn>Watcher</TableColumn>
                    <TableColumn>Language</TableColumn>
                    <TableColumn>Default branch</TableColumn>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {rows}
                </TableBody>
              </DataTable>
            </CardText>
          </Card>
        </div>
        
      </div>
    )
  }
}
