import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';
import i18n from '../../../util/i18n';
import { initLoadMore } from '../actions';

class LoadMoreContainer extends React.Component {
  /*
  constructor(){
    super();
  }
  componentWillMount(){
    const { post_per_row } = this.props;
    this.props.initLoadMore(post_per_row, true);
  }
  */
  handleClick = (e) => {
		const { post_per_row } = this.props;
		console.log('voy a cargar mas viajes');
		this.props.initLoadMore();
  	e.preventDefault();
	}

  render() {
		const { show_load_more } = this.props;
    //	console.log('props de LoadMoreContainer', this.props);
    if (show_load_more === false) {
      return(
        <div></div>
      );
    }
    return(
      <Button
        fluid
        size='huge'
        onClick={this.handleClick}
        style={{ marginTop: '10px' }}
      >
        {i18n.t('load_more.label')}
      </Button>
    );
  }
}

function mapStateToProps(state) {
	const { show_load_more } = state.catalog;
	return {
		show_load_more,
	};
}

export default connect(mapStateToProps, { initLoadMore })(LoadMoreContainer);
