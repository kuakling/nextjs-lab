import React from 'react'
import Head from 'next/head'
import LayoutMain from "../layouts/main"
import {Link} from 'next-url-prettifier';
import {Router} from '../../../../routes';
import axios from 'axios'



import Card from 'react-md/lib/Cards/Card';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import CardText from 'react-md/lib/Cards/CardText';
import CircularProgress from 'react-md/lib/Progress/CircularProgress';
import Snackbar from 'react-md/lib/Snackbars';

import DataTable from 'react-md/lib/DataTables/DataTable';
import TableHeader from 'react-md/lib/DataTables/TableHeader';
import TableBody from 'react-md/lib/DataTables/TableBody';
import TableRow from 'react-md/lib/DataTables/TableRow';
import TableColumn from 'react-md/lib/DataTables/TableColumn';
import Button from 'react-md/lib/Buttons';
import Dialog from 'react-md/lib/Dialogs';

import Drawer from 'react-md/lib/Drawers';
import Toolbar from 'react-md/lib/Toolbars';

import Form from './form'

export default class Index extends React.Component {
  
  static async getInitialProps () {
    const url = 'https://nextjs-lab-kuakling.c9users.io/api/users'
    return {
      rest_url: url
    }
  }
  
  loadData(){
    axios.get(this.props.rest_url)
      .then(response => {
        this.setState({
          userDatas:response.data,
        })
      })
      .catch((error) => {
        console.log("error",error)
      })
  }
  
  componentDidMount(){
    this.loadData()
  }
  
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
      position: 'left',
      formData: null,
      userDatas: {},
      dialogVisible: false,
      
      toasts: [],
      text: 'Hello, World!',
      action: '',
      autohide: true,
    };
    
    // this.loadData

    this._handleToggle = this._handleToggle.bind(this);
    this._closeDrawer = this._closeDrawer.bind(this);
    this._toggleForm = this._toggleForm.bind(this);
    this._formData = this._formData.bind(this);
    this._delete = this._delete.bind(this);
    
    this._addToast = this._addToast.bind(this);
    this._removeToast = this._removeToast.bind(this);
  }
  
  moduleRoute(route){
    const itemRoute = 'modules/rest/users/'+route
    return itemRoute
  }
  
  _handleToggle(visible) {
    // console.log('visible is: ', visible)
    this.setState({ visible });
  }

  _closeDrawer() {
    this.setState({ visible: false });
  }
  
  _toggleForm(data) {
    this._formData(data)
    this.setState({ visible: !this.state.visible, position: 'right' });
  }
  
  _formData(data){
    // console.log(data)
    this.setState({
      formData: data
    })
  }
  
  openDeleteDialog = (data) => {
    this._formData(data)
    this.setState({ dialogVisible: true });
  };

  closeDeleteDialog = () => {
    this.setState({ dialogVisible: false });
  };
  
  _delete(){
    console.log('DELETE: ', this.state);
    axios
      .delete("/api/users/"+this.state.formData.user_email)
      .then(response => {
        this._afterOperation(response)
        this.closeDeleteDialog()
      })
      .catch(function (error) {
          console.log(error);
      });
  }
  
  _afterOperation(res){
    if(res.data.Error){
      alert('Error: ' + res.data.Message)
    }else{
      // console.log(res)
      this._closeDrawer()
      this.loadData()
      this._addToast(res.data.Message)
    }
  }
  
  _addToast(text) {
    const { action } = this.state;
    const toasts = this.state.toasts.slice();
    toasts.push({ text, action });

    const words = text.split(' ').length;

    this.setState({ toasts });
  }

  _removeToast() {
    const [, ...toasts] = this.state.toasts;
    this.setState({ toasts });
  }
  
  // render(){
  //   let loading = (Object.keys(this.state.userDatas).length <= 0) ? true : false;
  //   console.log(loading)
  //   return(
  //     <div><button onClick={() => console.log(this.state)}>Click</button></div>
  //   )
  // }
    
  render () {
    const { text, action, toasts, autohide } = this.state;
    let loading = (Object.keys(this.state.userDatas).length <= 0) ? true : false;
    const header = (
      <Toolbar
        colored
        title={(this.state.formData === null) ? 'Create' : this.state.formData.user_email}
        nav={<Button icon onClick={this._closeDrawer}>close</Button>}
      />
    );
    // console.log('this.state.dialogVisible ',this.state.dialogVisible);
    
    let content = (
      <div>
        <h4 style={{textAlign: 'center'}}>
          Loading...
        </h4>
        <CircularProgress id="pagination-loader" />
      </div>
    )
    
    if(!loading){
      const rows = this.state.userDatas.Users.map((row, i) => (
        <TableRow key={i}>
          <TableColumn>{row.user_id}</TableColumn>
          <TableColumn>{row.user_email}</TableColumn>
          <TableColumn>{row.user_password}</TableColumn>
          <TableColumn>{row.user_join_date}</TableColumn>
          <TableColumn>
            <Button icon primary>visibility</Button> 
            <Button icon secondary onClick={() => this._toggleForm(row)}>edit</Button> 
            <Button icon onClick={() => this.openDeleteDialog(row)}>delete</Button> 
          </TableColumn>
        </TableRow>
      ));
      
      content = (
        <DataTable plain>
          <TableHeader>
            <TableRow>
              <TableColumn>Id</TableColumn>
              <TableColumn>e-Mail</TableColumn>
              <TableColumn>Password</TableColumn>
              <TableColumn>Join Date</TableColumn>
              <TableColumn>Action</TableColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows}
          </TableBody>
        </DataTable>
      )
    }
    
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
          <Card className="md-cell md-cell--12">
            <CardTitle title="CRUD" subtitle="Using axios for CRUD data from node mysql rest api" />
            <CardText className="weather-block">
              <h1>Url: {this.props.rest_url}️</h1>
              <hr />
              <Button raised primary label="Create" onClick={() => {this._toggleForm(null)}} disabled={loading}>add</Button>
              { content }
            </CardText>
          </Card>
        </div>
        
        <Drawer
          visible={this.state.visible}
          position={this.state.position}
          onVisibilityToggle={this._handleToggle}
          type={Drawer.DrawerTypes.TEMPORARY}
          header={header}
          style={{ zIndex: 100 }}
        >
        <Form formData={this.state.formData} afterOperation={(response) => this._afterOperation(response) } />
        </Drawer>
        
        <Dialog
          id="speedBoost"
          visible={this.state.dialogVisible}
          title="Confirm ?"
          onHide={this.closeDeleteDialog}
          aria-labelledby="speedBoostDescription"
          modal
          actions={[{
            onClick: this._delete,
            primary: true,
            label: 'Delete',
          }, {
            onClick: this.closeDeleteDialog,
            label: 'Cancel',
          }]}
        >
          <p id="speedBoostDescription" className="md-color--secondary-text">
            Do you want delete {(this.state.formData===null) ? '' : this.state.formData.user_email}
          </p>
        </Dialog>
        
        
        <Snackbar toasts={toasts} autohide={autohide} onDismiss={this._removeToast} />
      </div>
    )
  }
}