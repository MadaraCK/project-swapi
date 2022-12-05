import * as React from 'react'
import Content from "../globalComponent/Content";
import {Button, Col, Form, FormControl, FormGroup, Row} from "react-bootstrap";
import './formularzStyle.css';
import {wyslijFormularz} from "../Service";

interface Props{

}

interface State{
    login: string,
    haslo: string,
    email: string,
    numer: string,
    reg: boolean
}

export default class FormularzView extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
            login: '',
            haslo: '',
            email: '',
            numer: '',
            reg: false
        }
    }

    onSubmit = (e: React.FormEvent<any>) => {
        e.preventDefault();
        let {login, haslo, email, numer, reg} = this.state;

        let dane = {
            login: login,
            haslo: haslo,
            email: email,
            numer: numer,
            reg: reg,
            star_wars_data: JSON.parse(localStorage.projektSwapi)
        }

        wyslijFormularz(dane).then((response) => {
            alert('Wysłano')
        }).catch((e) => {
            console.log(e)
        });
    }

    onChangeLogin = (e: any) => {
        this.setState({login: e});
    }

    onChangeHaslo = (e: any) => {
        this.setState({haslo: e});
    }

    onChangeEmail = (e: any) => {
        this.setState({email: e});
    }

    onChangeNumer = (e: any) => {
        this.setState({numer: e});
    }

    onChangeReg = (e: any) => {
        this.setState({reg: !this.state.reg});
    }

    render() {
        let {login, email, haslo, numer, reg} = this.state;

        return(
            <Content>

                <div className={'register-form'}>
                    <Row>
                        <Col className={'header'}>
                            <h5 className={'frLabel'}>FORMULARZ REJESTRACYJNY</h5>
                            {/*<div className={'frBox'} />*/}
                        </Col>
                    </Row>
                <form onSubmit={this.onSubmit}>

                        <Row>
                            <Col md={12} lg={3} xl={12}>
                                <Form.Label>Login:</Form.Label>
                                <input type={'text'} className={'form-control'} value={login}
                                       onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.onChangeLogin(e.target.value)}
                                       name={'login'}/>
                            </Col>
                            <Col md={12} lg={3} xl={12}>
                                <Form.Label>Hasło:</Form.Label>
                                <input type={'password'} className={'form-control'} value={haslo}
                                       onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.onChangeHaslo(e.target.value)}
                                       name={'haslo'}/>
                            </Col>
                            <Col md={4} lg={3} xl={12}>
                                <Form.Label>Email:</Form.Label>
                                <input type={'email'} className={'form-control'} value={email}
                                       onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.onChangeEmail(e.target.value)}
                                       name={'email'}/>
                            </Col>
                            <Col md={4} lg={3} xl={12}>
                                <Form.Label>Numer telefonu:</Form.Label>
                                <input type={'text'} className={'form-control'} value={numer}
                                       onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.onChangeNumer(e.target.value)}
                                       name={'numer'}/>
                            </Col>
                            <Col>
                                <input type={'checkbox'} checked={reg}
                                       onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.onChangeReg(e.target.value)}
                                       name={'reg'} style={{marginTop: '25px'}}/>
                                    <label htmlFor="vehicle1"> Akceptuje regulamin</label>
                            </Col>
                        </Row>

                    <div className={'buttons-line'}>
                        <button className={'btnWyslij'}>zapisz</button>
                    </div>
                </form>
                </div>
            </Content>
        )
    }
}
