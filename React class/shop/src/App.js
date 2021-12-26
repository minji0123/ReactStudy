/* eslint-disable */
import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';
import { Navbar,Button,Nav,NavDropdown,Form,FormControl,Jumbotron } from 'react-bootstrap';
import Data from './data.js';
import {Link, Route, Switch} from 'react-router-dom';

function App() {

  let [shoes, shoes변경] = useState(Data);

  return (
    <div className="App">
<Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
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



{/* <Route exact path="/">
  <div>메인페이지에요</div>
</Route>
<Route path="/detail">
  <div>디테일페이지에요</div>
</Route> */}

{/* <Route path="어쩌구" component={Modal}></Route> */}

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
          // return <Card shoes={shoes[i]}/>
          return <Card shoes={a} i={i} key={i}/>
        })
      }
      </div>

    </div>
    

</Route>
<Route path="/detail">
  <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">상품명</h4>
          <p>상품설명</p>
          <p>120000원</p>
          <button className="btn btn-danger">주문하기</button> 
        </div>
      </div>
</div> 
</Route>


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


// src에 넣은 파일은 파일명이 변경되고 압축됨
// 근데 public 에 넣으면 보존됨 근데 절대경로로 사용해야됨
export default App;
