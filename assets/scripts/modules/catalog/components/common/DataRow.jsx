import React from 'react'

export default class DataRow extends React.Component {
    constructor(){
        super()
    }
    render(){
        const {show, isTitle, title, value} = this.props;
        const priceStyle = {
            textAlign: 'center',
            fontSize : 'large'
        };
        //console.log('props DataRow', this.props);
        if(show){
            if(isTitle && title){
                return(
                    <div className="header voyage-title">{title}</div>
                )
            }else{
                if(value) {
                    return (
                        <div className="voyage-content" style={title==='Prix'?priceStyle:{}}>
                            <strong>{title}: </strong>
                            <div dangerouslySetInnerHTML={{__html:value}}/>
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