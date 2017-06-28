import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import LayoutMain from "../../../layouts/main"

import { DatePicker } from 'react-md/lib/Pickers'
import TextField from 'react-md/lib/TextFields'
import Checkbox from 'react-md/lib/SelectionControls/Checkbox'
import Button from 'react-md/lib/Buttons/Button'

export default class Index extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
          firstname: '',
          lastname: '',
          birthday: null,
          username: '',
          password: '',
          isSingle: false
        };
    
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }
  
    handleInputChange(value, event){
        const target = event.target;
        // const value = target.type === 'checkbox' ? target.checked : target.value;
        if( target.type === 'checkbox' ){ target.checked }
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }
      
    handleFormSubmit(event) {
        event.preventDefault();
        console.log(this.state)
    }
      
    render () {
        return (
            <div>
                <Head>
                    <title>Custom title on page</title>
                </Head>
                <LayoutMain>
                    <div className="content" style={{flex: 1}}>
                        <form onSubmit={this.handleFormSubmit}>
                          
                          <div className="md-grid">
                          <TextField
                            id="firstname"
                            name="firstname"
                            label="Firstname"
                            className="md-cell md-cell--bottom"
                            value={this.state.firstname}
                            onChange={this.handleInputChange}
                          />
                          <TextField
                            id="lastname"
                            name="lastname"
                            label="Lastname"
                            lineDirection="center"
                            className="md-cell md-cell--bottom"
                            value={this.state.lastname}
                            onChange={this.handleInputChange}
                          />
                          <DatePicker
                            id="birthday"
                            onChange={(dateString) => this.setState({birthday: dateString})}
                            label="Birthday"
                            className="md-cell"
                            locales="th"
                            ref="date1"
                          />
                          
                          <TextField
                            id="username"
                            label="Username"
                            name="username"
                            lineDirection="center"
                            className="md-cell md-cell--bottom"
                            value={this.state.username}
                            onChange={this.handleInputChange}
                          />
                          <TextField
                            id="password"
                            label="Password"
                            name="password"
                            type="password"
                            lineDirection="center"
                            className="md-cell md-cell--bottom"
                            value={this.state.password}
                            onChange={this.handleInputChange}
                          />
                          <Checkbox
                            id="readDocumentationPage"
                            name="isSingle"
                            label="Is Single"
                            className="md-cell md-cell--bottom"
                            onChange={this.handleInputChange}
                          />
                        </div>
                          
                          
                          
                          <br />
                          
                          <div className="bg-red">Red</div>
                          
                          <Button type="submit" raised primary label="Submit"  iconClassName="fa fa-hand-paper-o" />
                        </form>
                      </div>
                </LayoutMain>
            </div>
        );
    }
}