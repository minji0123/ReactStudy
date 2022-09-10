/* eslint-disable */
import logo from './logo.svg';
import {useEffect, useState} from "react"
import {Routes,Route,Link,useNavigate,Outlet} from 'react-router-dom'
import {Button,Navbar,Container, Nav} from 'react-bootstrap';

import './App.css';
import data from './data.js';
import DetailPage from './routes/DetailPage.js';
import axios from 'axios';
import Cart from './routes/Cart.js'
import { useQuery } from '@tanstack/react-query';



function App() {

  let [shoes,setShoes] = useState(data);
  let [clickCount,setClickCount] = useState(1);
  let navigate = useNavigate();

  // ------------------------
  // Redux
  // ------------------------
  // Redux 사용하면 컴포넌트들이 props 없이 state 공유 가능
  // 1. store.js 파일생성 
  // 2. index.js 가서 <Provider store = {store}> 해주기

  // ------------------------
  // localStorage
  // ------------------------
  /**
   * 상세페이지에서 봤던 상품의 번호들을 localStorage 에 저장하기
   * {watched : []}
   * - 
   */
  useEffect(()=>{
    if(!localStorage.getItem('watched'))
      localStorage.setItem('watched',JSON.stringify([]))

  },[]);


  // ------------------------
  // ReactQuery
  // ------------------------
  /**
   * 수 초마다 자동으로 데이터 자동 가져오기를 할 때 필요
   * sns, 비트코인, 주식 같은거 할 때 필요
   * ------------------------
   * npm install @tanstack/react-query 
   * index.js 가서 const queryClient = new QueryClient();
   * index.js 가서 <QueryClientProvider client={queryClient}>
   * ------------------------
   *
   * https://codingapple1.github.io/userdata.json
   * 장점
   * 1. 성공/실패/로딩중 쉽게 파악 가능
   *       { result.isLoading && '로딩중' }
            { result.error && '에러남' }
            { result.data && result.data.name }
   * 2. 틈만나면 자동으로 재요청해줌 (refetch)
   * 3. 실패시 재시도 몇번 해줌
   * 4. state 공유 안해도됨         
   * 똑같은 데이터를 여러 군데에서 요청 할 때 ajax 를 딱 한번만 탄다.
   * 5. ajax 결과 캐싱 기능
   *  5분정도 결과저장해놓음 ==> 그래서 더 빠름!
   */

    let result = useQuery(['작명'], ()=>
      axios.get('https://codingapple1.github.io/userdata.json')
      .then((a)=>{ return a.data }),
      {stealTime : 2000} // 2초마다 refetch
    )


  
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand >ReactShop</Navbar.Brand>
          <Nav className="me-auto">
            {/* 페이지 이동 버튼은 Link */}
            <Nav.Link onClick={() => {navigate('/')}}>Home</Nav.Link>
            {/* <Nav.Link onClick={() => {navigate('/#container')}}>Detail</Nav.Link> */}
            {/* <Nav.Link href="#container">Detail</Nav.Link> */}
            <Nav.Link onClick={() => {navigate('/Cart')}}>Cart</Nav.Link>
            <Nav.Link onClick={() => {navigate('/about')}}>About</Nav.Link>
          </Nav>
          {/* <Nav className="ms-auto white" >
          { result.isLoading && '로딩중' }
          { result.error && '에러남' }
          { result.data && result.data.name } 님 반갑습니다.
          </Nav> */}
        </Container>
      </Navbar>

      
      {/*
        <Route path="/경로" element={<div>디자인</div>}/>
      */}
      <Routes>
        <Route path="/" element={
        <div>
          <div className="main-bg"></div>

          <div className='row'>
            <div className="container mt_100 mb_50 col-md-8" id='container' >
              <div className="row">
                {
                  shoes.map((a,i)=>{
                    return(
                      // <Modal 작명 = {전송할state} />
                      <Product shoes={shoes} a={a} i={i} key={i} />
                    )
                  })
                }
              </div>

            </div>

            {/* <LatelyProduct></LatelyProduct> */}

          </div>
            {/* ajx 요청을 위한 버튼 
            버튼을 누르면 서버에서 데이터를 받아온 후, 화면에 뿌려줘야함*/}
            <Button variant="secondary" className="mb_200" onClick={() => {
              // ------------------------
              // 데이터 받을 때
              // ------------------------


              // 여기다 로딩중 넣고
              
              axios.get(`https://codingapple1.github.io/shop/data${(clickCount)+1}.json`)
              .then((결과)=>{
                  // 성공했을때 실행
                  console.log(결과.data);

                  // 서버에서 갖고온 데이터를 shoes state 에 추가해주세여
                  let copy = [...shoes, ...결과.data]; // 1. 복사본 만들기 ([] 빠지고 알맹이만 남음 {}{}{} 얘네만)
                  setShoes(copy);

                  // 누른 횟수 저장
                  setClickCount(clickCount+1);
                  

                  // 여기다 로딩중 숨기기

              })
              .catch(() => {
                  // 실패했을때 실행
                  console.log('실패함ㅅㄱ');
                  alert('상품 없다');

                  // 여기다 로딩중 숨기기
                  // if(clickCount >3){
                  //   alert('상품 없다');
                  // }

              })

            }}>more</Button>
        </div>
      }/>


        {/* url 파라미터
                      /detail/아무거나 라는 뜻 */}
        <Route path="/detail/:id" element={<DetailPage shoes={shoes}/>}/>


        {/* Redux

        */}
        <Route path="/cart" element={<Cart/>}/>

        {/* Nested Routes 
        태그 안에 태그 넣는거임
        /about/member 이런거
        1. 여러 유사한 페이지 필요할 때 (뭔가 조금씩만 바뀔 때)
        2. 뒤로가기랑 페이지이동 편하게 해야 할 때
          */}
        <Route path="/about" element={<AboutPage/>}>
          <Route path="member" element={<div>멤버임</div>}/>
          <Route path="location" element={<div>위치임</div>}/>
        </Route>

        <Route path="/event" element={<AboutPage/>}>
          <Route path="one" element={<div>첫 주문 시 양배추즙 서비스</div>}/>
          <Route path="two" element={<div>생일기념 쿠폰 받기</div>}/>
        </Route>

        <Route path="*" element={<div>없는 페이지에요</div>}/>
      </Routes>


    </div>
  );
}

function Product(props){
  let navigate = useNavigate();

  return(
    <>
      <div className="col-md-4 mb_100">
        <Nav.Link onClick={() => {navigate(`/detail/${(props.i)}`)}}>
          <img src={`https://codingapple1.github.io/shop/shoes${(props.i)+1}.jpg`} width="80%" />
        </Nav.Link>
        <h4>{props.shoes[props.i].title}</h4>
        <p>{props.shoes[props.i].content}</p>
      </div>
    </>
  )
}

function LatelyProduct(){
  let navigate = useNavigate();

  return(
    <>
      <div className='col-md-2 mt_100 sticky'>
        dfad
      </div>
    </>
  )
}

function AboutPage(){
  return(
    <div>
      <h4>회사정보임</h4>
      {/* Nested Route 에 의해서 동시에 보여줄 태그의 위치 */}
      <Outlet></Outlet>
    </div>
  )
}
function EventPage(){
  return(
    <div>
      <h2>오늘의 이벤트</h2>
      {/* Nested Route 에 의해서 동시에 보여줄 태그의 위치 */}
      <Outlet></Outlet>
    </div>
  )
}
export default App;
