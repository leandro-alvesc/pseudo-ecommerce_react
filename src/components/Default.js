import React, { Component } from 'react'

export default class Default extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto text-center text-title text-uppercase pt-5">
                        <h2>erro</h2>
                        <h2 className="display-4 pt-2">404</h2>
                        <br/>
                        <h3 className="pt-5">página não encontrada</h3>
                        <h4>URL não encontrada: <br/>
                            <span className="text-danger pt">
                                {this.props.location.pathname}
                            </span>{" "}
                        </h4>
                    </div>
                </div>
            </div>
        )
    }
}
