import React, { Component } from 'react';
import { variables } from './Variables';
import RegisterForm from './components/register';
export class Authentication extends Component {
    constructor(props) {
        super(props);

        this.state = {
            accounts: []
        }
    }


    render() {
        return (
            <div>
                <RegisterForm />
            </div>
        )
    }
}
