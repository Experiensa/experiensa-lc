import React from 'react';
import { Grid, Header, Icon } from 'semantic-ui-react';
import DetailContent from './DetailContent';
import i18n from '../../../util/i18n';
import ImageGallery from './ImageGallery';

class InformationContent extends React.Component {
  constructor() {
    super();
  }
  
  render() {
    const { options, voyage } = this.props;
    const { content, title } = voyage;
    const encodedSubject = encodeURIComponent(title);
    const mailto = 'mailto:'+experiensa_vars.agency_email+'?subject='+encodedSubject;
    return(
      <div>
        <br />
        <Header as='h1'>
          {title}
        </Header>
        <Grid stackable columns={2} divided>
          <Grid.Column width={6}>
            <ImageGallery info={voyage} />
            <br />
            <DetailContent voyage={voyage} options={options} />
          </Grid.Column>
          <Grid.Column width={10}>
            <p dangerouslySetInnerHTML={{__html: content}} />
          </Grid.Column>
        </Grid>
        <br />
        <a className="ui positive right labeled icon button" href={mailto}>
            {i18n.t('contact_us.label')}
            <Icon name='checkmark'/>
        </a>
      </div>
    );
  }
}
export default InformationContent;
