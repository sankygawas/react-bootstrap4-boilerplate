import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import React from "react";
import { render } from "react-dom";

class App extends React.Component{
    render(){
        return (
        <div className="container">
            
            <div className="row">
                <div className="md-col-6">
                    <div className="jumbotron">
                        <h1>First Component</h1>
                        <p ><a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a></p>
                    </div>
                    <div className="card text-white bg-primary mb-3" >
                            <div className="card-header">Header</div>
                            <div className="card-body ml-4">
                                <h4 className="card-title">Primary card title</h4>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
           
                <div className="md-col-6">
                    <h1>Second Component</h1>
                </div>
            </div>
        </div>
        );
    }
}

render(<App/>,window.document.getElementById("app"));