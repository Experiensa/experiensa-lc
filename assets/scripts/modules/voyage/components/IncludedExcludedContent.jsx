import React from 'react';
import { Grid, Header, List } from 'semantic-ui-react';
import i18n from '../../../util/i18n';

class IncludedExcludedContent extends React.Component {
  constructor(){
    super();
  }
  listIncluded = () => {
    const { included } = this.props.voyage;
    return included.array.map((value)=>{
      return(<List.Item>{ value }</List.Item>)
    });
  }
  listExcluded = () => {
    const { excluded } = this.props.voyage;
    return excluded.array.map((value)=>{
      return(<List.Item>{ value }</List.Item>)
    });
  }
  render() {
    // console.log('-*-*-*-*-', this.props.voyage);
    const { title } = this.props.voyage;
    return(
      <div>
        <br />
        <Header as='h1'>{title}</Header>
        <Grid stackable columns={2} divided>
          <Grid.Column width={8}>
            <Header as='h3'>{i18n.t('includes.label')}</Header>
            <List bulleted>
              {this.listIncluded()}
            </List>
          </Grid.Column>
          <Grid.Column width={8}>
            <Header as='h3'>{i18n.t('excludes.label')}</Header>
            <List bulleted>
              {this.listExcluded()}
            </List>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
export default IncludedExcludedContent;
