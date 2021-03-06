import React, {Component} from 'react';
import { Link } from 'react-router';

class SubMenu extends Component{
    render(){
        return(
            <div>
                <div className="subMenu sticky">
                    <div className="row">
                        <div className="col-lg-12">
                            <ul className="nav nav-pills flex-column">
                                <li className="nav-item HomeActive">
                                <a href="/" className="active nav-link"><i className="fa fa-home fa-home"></i>&nbsp;Home</a>
                                </li>
                                <li className="nav-item webappButton">
                                <a href="#webApps" className="nav-link">Web Apps</a>
                                </li>
                                <li className="nav-item softwareButton">
                                <a className="nav-link" href="#software">Software</a>
                                </li>
                                <li className="nav-item gamesButton">
                                <a href="#games" className="nav-link">Games</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default SubMenu;

