import React from 'react';
import { Grid, Header, List } from 'semantic-ui-react';

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
    const { title } = this.props.voyage;
    return(
      <div>
        <Header as='h1'>{title}</Header>
        <Grid stackable columns={2} divided>
          <Grid.Column width={8}>
            <Header as='h3'>Comprend</Header>
            <List bulleted>
              {this.listIncluded()}
            </List>
          </Grid.Column>
          <Grid.Column width={8}>
            <Header as='h3'>Exclut</Header>
            <List bulleted>
              {this.listIncluded()}
            </List>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
export default IncludedExcludedContent;
