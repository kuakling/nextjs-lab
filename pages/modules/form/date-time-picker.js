import React from 'react';
import Head from 'next/head'
import LayoutMain from "./layouts/main"
import Card from 'react-md/lib/Cards/Card';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import CardText from 'react-md/lib/Cards/CardText';
import DatePicker from 'react-md/lib/Pickers/DatePickerContainer';
import TimePicker from 'react-md/lib/Pickers/TimePickerContainer';
//
// or if you don't care about the inclusion of SelectonControlGroup
// import SelectionControl from 'react-md/lib/SelectionControls';

export default class Option extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Head>
            <title>Date and Time Picker Examples</title>
        </Head>
        <LayoutMain>
          <Card>
            <CardTitle title="Date Picker" subtitle="DatePicker" />
            <CardText className="weather-block">
              <DatePicker
                id="appointment"
                label="Select an appointment Thai date"
                className="md-cell"
                locales="th-TH"
              />
              <DatePicker
                id="appointmentPortrait"
                label="Portrait Mode"
                displayMode="portrait"
                className="md-cell"
              />
              <DatePicker
                id="appointmentLandscape"
                label="Landscape Mode"
                displayMode="landscape"
                className="md-cell"
              />
            </CardText>
          </Card>
          <br />
          
          <Card>
            <CardTitle title="Simple Switch Examples" subtitle="SelectionControl" />
            <CardText className="weather-block">
              <TimePicker
                id="appointment"
                placeholder="Select an appointment time"
                className="md-cell md-cell--bottom"
              />
              <TimePicker
                id="appointmentPortrait"
                label="Portrait Mode"
                displayMode="portrait"
                className="md-cell"
              />
              <TimePicker
                id="appointmentLandscape"
                label="Landscape Mode"
                displayMode="landscape"
                className="md-cell"
              />
            </CardText>
          </Card>
        </LayoutMain>
      </div>
    );
  }
}
