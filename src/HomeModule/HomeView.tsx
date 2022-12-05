import * as React from 'react'
import Content from "../globalComponent/Content";
import "./homeStyle.css";
import {getDane, getImage} from "../Service";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

interface Props{

}

interface State{
    dane: any,
    id: number,
    zdj: any,
    star_wars_data: any
}

export default class HomeView extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            dane: [],
            id: 1,
            zdj: null,
            star_wars_data: []
        }
    }

    componentDidMount() {
        this.pobierzDane();
    }

    pobierzDane = () => {
        let stateswd = this.state.star_wars_data;
        let id = this.state.id;

        getDane(id).then((response) => {
            this.setState({dane: response.data, id: id+1});
            let swd = {
                name: response.data.name,
                created: response.data.created,
                vehicles: response.data.vehicles
            }

            stateswd.push(swd)
            this.setState({star_wars_data: stateswd});
            console.log(stateswd)

            // console.log(moment(response.data.birth_year))
            // console.log(moment(response.data.birth_year).format('YYYY'))
        }).catch((e) => {
            console.log(e)
        })
    }

    onClickNext = () => {
        this.pobierzDane();
        // @ts-ignore
        document.getElementById("zdj").src = "https://picsum.photos/534/383";
        this.forceUpdate();
    }

    onFormularz = () => {
        localStorage.setItem('projektSwapi', JSON.stringify(this.state.star_wars_data));
        window.location.replace('/formularz');
    }

    render() {
        let {dane, zdj} = this.state;

        return(
            <Content>
                <Row className={'headerHome'}>
                    <Col>
                        <h4>Mikołaj Radek</h4>
                    </Col>
                    <Col className={'colForm'}>
                        <p onClick={this.onFormularz} className={'formRejBtn'}>formularz rejestracyjny</p>
                    </Col>
                </Row>


                <Row>
                    <Col className={'colZdj'}>
                        <div className={'zdjecie'}>
                            <div className={'zdjBody'}>
                                <img src={'https://picsum.photos/534/383.jpg'} id={'zdj'}/>
                                <Row>
                                    <Col xl={10} className={'colName'}>
                                        <h4>{dane.name}</h4>
                                    </Col>
                                    <Col xl={2}>
                                        <i className="fa fa-user" />
                                        <i className="fa fa-check-circle" style={{color: 'green'}}/>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xl={12}>
                                        age: {dane.birth_year}
                                    </Col>
                                    <Col xl={12}>
                                        eye color: {dane.eye_color}
                                    </Col>
                                </Row>
                            </div>

                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col style={{textAlign: 'center'}}>
                        <button onClick={this.onClickNext} className={'btnNext'}>next profiles</button>
                    </Col>
                </Row>
            </Content>
        )
    }
}
