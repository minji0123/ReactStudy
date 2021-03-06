/* eslint-disable */
import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';
import { Navbar,Button,Nav,NavDropdown,Form,FormControl,Jumbotron } from 'react-bootstrap';
import Data from './data.js';
import Detail from './detail.js'
import {Link, Route, Switch} from 'react-router-dom';
import axios from 'axios';

function App() {

  let [shoes, shoes변경] = useState(Data);

  return (
    <div className="App">
<Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link as={Link} to ="/"> Home </Nav.Link>
      <Nav.Link as={Link} to ="/detail"> Detail </Nav.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>



<Switch>
<Route exact path="/">
    <Jumbotron className="background">
      <h1>20% Season Off</h1>
      <p>
        This is a simple hero unit, a simple jumbotron-style component for calling
        extra attention to featured content or information.
      </p>
      <p>
        <Button variant="primary">Learn more</Button>
      </p>
    </Jumbotron>

    <div className="container">
      <div className="row">
      {
        shoes.map((a, i)=>{
          return <Card shoes={a} i={i} key={i}/>
        })
      }
      </div>
      <button className='btn btn-primary' onClick={()=>{

        // 서버에 데이터를 보내고 싶을 때 post 요청하는 법

        axios.post('서버URL',{id:'sss', pw:1234});


        axios.get('https://codingapple1.github.io/shop/data2.json')
        .then((result)=>{
          console.log(result.data);
          //...연산자는 괄호를 벗겨준다. 그래서 카피본 만들어준거 기억나지??
          shoes변경([...shoes, ...result.data] );
        })
        .catch(()=>{
        });
      }}>더보기</button>
    </div>
    
</Route>



<Route path="/detail/:id">
  <Detail shoes={shoes}/>
</Route>



<Route path="/:id">
  <div>아무거나 적었을 때 이거 보애주셈</div>
</Route>
</Switch>


    </div>
  );
}



function Card(props){
  return(
        <div className='col-md-4'>
          <img src={'https://codingapple1.github.io/shop/shoes'+ (props.i + 1) +'.jpg' } width="100%"/>
          <h4>{props.shoes.title}</h4>
          <p> {props.shoes.content} & {props.shoes.price}</p>
        </div>
  )
}
 
export default App;
