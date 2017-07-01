import React from 'react';
import Head from 'next/head'
import LayoutMain from "./layouts/main"
import Card from 'react-md/lib/Cards/Card';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import CardText from 'react-md/lib/Cards/CardText';
import SelectionControl from 'react-md/lib/SelectionControls/SelectionControl';
import { SelectionControlGroup, Checkbox } from 'react-md/lib/SelectionControls';
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
            <title>Option Examples</title>
        </Head>
        <LayoutMain>
          <Card>
            <CardTitle title="Simple Checkbox Examples" subtitle="SelectionControl" />
            <CardText className="weather-block">
              <SelectionControl
                id="readDocumentationPage"
                name="simpleCheckboxes[]"
                defaultChecked
                label="Open Checkbox Documentation Page"
                type="checkbox"
                value="docPage"
              />
              <Checkbox
                id="favorite"
                name="favorite"
                label="Favorite this!"
                checkedIconChildren="favorite"
                uncheckedIconChildren="favorite_border"
                value="favorite"
              />
              <SelectionControl
                id="browserCompatibility"
                name="simpleCheckboxes[]"
                disabled
                label="Achieve 100% cross-browser compatibility"
                type="checkbox"
                value="compatibility"
              />
            </CardText>
          </Card>
          <br />
          
          <Card>
            <CardTitle title="Simple Switch Examples" subtitle="SelectionControl" />
            <CardText className="weather-block">
              <SelectionControl
                id="lights"
                type="switch"
                label="Turn the lights on"
                name="lights"
                defaultChecked
              />
              <SelectionControl
                type="switch"
                label="Power outage"
                id="power"
                name="power"
                disabled
              />
            </CardText>
          </Card>
          <br />
          
          <Card>
            <CardTitle title="Simple Selection Control Group Example" subtitle="SelectionControlGroup" />
            <CardText className="weather-block">
              <SelectionControlGroup
                type="checkbox"
                id="controlGroupCheckbox"
                name="simpleCheckboxGroup"
                label="Uncontrolled SelectionControl Group"
                defaultValue="A"
                controls={[{
                  label: 'What',
                  value: 'A',
                }, {
                  label: 'No way!',
                  value: 'B',
                }]}
              />
              <SelectionControlGroup
                id="controlGroupRadio"
                type="radio"
                inline
                name="simpleRadioGroup"
                label="Uncontrolled SelectionControl Group"
                defaultValue="A"
                controls={[{
                  label: 'What',
                  value: 'A',
                }, {
                  label: 'No way!',
                  value: 'B',
                }, {
                  label: 'Something Else',
                  value: 'C',
                }]}
              />
            </CardText>
          </Card>
        </LayoutMain>
      </div>
    );
  }
}
