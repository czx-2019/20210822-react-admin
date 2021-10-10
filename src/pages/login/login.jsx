import React, {Component} from 'react'
import logo from './images/logo.png'
import './login.less'

export default class Login extends Component{
    render(){
        return (
            <div className="login">
                <header className="login-header">
                    <img src={logo} alt="logo" />
                    <h1>react 后台管理系统</h1>
                </header>
                <div className="login-content"></div>
            </div>
        )
    }
}