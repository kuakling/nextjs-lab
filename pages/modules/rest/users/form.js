import React from 'react'
import Head from 'next/head'
import LayoutMain from "../layouts/main"
import {Link} from 'next-url-prettifier';
import {Router} from '../../../../routes';
import axios from 'axios'

import TextField from 'react-md/lib/TextFields';

import Button from 'react-md/lib/Buttons';

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    
    const formEmptyData = {
      user_id: null,
      user_email: '',
      user_password: '',
    }
    this.state = {
      formData: (this.props.formData === null) ? formEmptyData : this.props.formData,
      dialogVisible: false,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleInputChange(value, event){
    const target = event.target;
    if( target.type === 'checkbox' ){ target.checked }
    const name = target.name;
    const {formData} = this.state
    formData[name] = value
    this.setState(formData);
  }
  
  moduleRoute(route){
    const itemRoute = 'modules/rest/users/'+route
    return itemRoute
  }
  
  handleFormSubmit(e){
    e.preventDefault();
    // console.log(this.state)
    axios({
      method: (this.props.formData === null) ? 'post' : 'put',
      url: '/api/users',
      data: this.state.formData
    }).then(response => {
      this.props.afterOperation(response)
    })
    .catch(function (error) {
        console.log(error);
    });
  }
  
  handleDelete(){
    console.log('DELETE: ', this.state);
    axios
      .delete("/api/users/"+this.state.user_email)
      .then(response => {
        this.props.afterOperation(response)
      })
      .catch(function (error) {
          console.log(error);
      });
  }
    
  render () {
    return (
      <div>
        <Head>
            <title>Fetch data from rest api Examples</title>
        </Head>
        <div className="md-grid grid-example">
          <div className="md-cell md-cell--12">
            <form onSubmit={this.handleFormSubmit}>
            <TextField
              id="user_email"
              label="e-Mail"
              name="user_email"
              disabled={(this.props.formData === null) ? false : true }
              lineDirection="center"
              placeholder="email@example.com"
              className="md-cell--bottom"
              value={this.state.formData.user_email}
              onChange={this.handleInputChange}
            />
            <TextField
              id="user_password"
              label="Password"
              name="user_password"
              type="password"
              lineDirection="center"
              className="md-cell--bottom"
              value={this.state.formData.password}
              onChange={this.handleInputChange}
            />
            <Button type="submit" raised primary label="Save" >save</Button>
            {(this.props.formData === null) ? ('') : (<Button raised primary label="Delete" style={{backgroundColor: '#F44336'}} onClick={this.handleDelete} >delete</Button>)}
            </form>
          </div>
        </div>
      </div>
    )
  }
}