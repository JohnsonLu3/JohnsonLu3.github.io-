import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class Bio extends Component{
    render(){
        let Bio = this.props.Bio;
        return(
            <div className="py-5 text-center BioCover" style={{backgroundImage: 'url(../../img/cover.png)' }}>
                <div className="container">
                    
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="display-2 mb-4 text-white">{Bio.Name}</h1>
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="col-lg-6">
                            <img className="img-fluid d-block icon mx-auto" src="../../img/me.png" /> 
                        </div>
                        <div className="col-lg-6 py-3">
                            <div className="row">
                                <div className="col-md-12 py-1">
                                <p className="text-white bio text-left">{Bio.Desc}</p>
                                </div>
                            </div>
                            
                            <div className="row">
                                <div className="col-md-12">
                                {/*<button className="btn btn-lg btn-primary mx-1" data-target="#modalContact" data-toggle="modal">Contact</button>*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        Bio: state.BioData,
    };
}

// Actions
function matchDispatchToProps(dispatch){
    return bindActionCreators(
        {
        },
         dispatch);
}

export default connect(mapStateToProps,matchDispatchToProps)(Bio);