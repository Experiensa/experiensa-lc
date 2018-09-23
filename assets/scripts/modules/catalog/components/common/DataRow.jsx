import React from 'react';
import i18n from '../../../../util/i18n';

export default class DataRow extends React.Component {
    constructor(){
        super()
    }
    render(){
        //console.log('props DataRow', this.props);
        const {show, isTitle, title, value, showTitle, strongContent} = this.props;
        const priceStyle = {
            position: 'absolute',
            bottom: '0',
            left: '50%',
            textAlign: 'center',
            fontSize : 'large',
            marginRight: '-50%',
            transform: 'translate(-50%,-50%)'
        };
        if(show){
            if(isTitle && title){
                return(
                    <div className="header voyage-title">{title}</div>
                );
            }else{
                if(value) {
                    return (
                        <div className="voyage-content" style={title===i18n.t('price.label')?priceStyle:{}}>
                            {showTitle && <strong>{title}: </strong>}
                            {strongContent? (
                                <strong dangerouslySetInnerHTML={{__html:value}}/>
                            ):(
                                <div dangerouslySetInnerHTML={{__html:value}}/>
                            )}                            
                        </div>
                    )
                }else{
                    return(
                        <div></div>
                    )
                }
            }
        }else{
            return (
                <div></div>
            )
        }
    }
}