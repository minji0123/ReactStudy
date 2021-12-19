/*eslint-disable */
import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

    
    let [글제목, 글제목변경] = useState(['남자 코트 추천', ' 강남 우동 맛집', '파이썬 독학']);
    let [좋아요, 좋아요변경] = useState([0,0,0]);

    let [좋아요1, 좋아요변경1] = useState(0);

    let [modal, modal변경] = useState(false); 

    function 좋아요함수(idx){
        var newArray = [...좋아요];
        newArray[idx] = 좋아요[idx]+1;
        좋아요변경(newArray)
    }


    return (
        <div className="App">
            <div className="black-nav">
                <div>개발 Blog
                </div>
            </div>

            <div className='list'>
                <h3> {글제목[0]} <span onClick={()=>{ 좋아요함수(0) }}> 👍 </span> {좋아요[0]} </h3>
                    <p>2월 17일 발행</p> 
                    <hr/> 
            </div>


            <div className = 'list'> 
                <h3> {글제목[1]} <span onClick={ ()=>{ 좋아요함수(1)}}> 👍 </span> {좋아요[1]}   </h3>
                    <p>2월 17일 발행 </p> 
                    <hr/> 
            </div> 

            <div className = 'list' > 
                <h3> {글제목[2]}<span onClick={ ()=>{ 좋아요함수(2)}}> 👍 </span> {좋아요[2]}   </h3>
                <p>2 월 17일 발행</p> 
                <hr/>
            </div>

            <button onClick={()=>{modal변경(!modal)}}>열고닫기</button>
            {
                modal===true
                // <Modal 작명 = {전송할state} ></Modal>
                ? <Modal 글제목 = {글제목} ></Modal>
                : null
            }


            {/* {
                // 반복될 때 마다 제목부분에 각각 다른 데이터가 들어가고 싶음
                글제목.map(function(글,i){ // 글제목만큼 본문을 반복시켜야함
                    return (
                    <div className = 'list' > 
                    <h3> {글}<span onClick={()=>{ 좋아요함수(i)}}> 👍 </span> {좋아요[i]}   </h3>
                    <p>2 월 17 일 발행</p> 
                    <hr/>
                    </div>
                    )
                    
                })
            } */}

        </div>
    );
}
// App(){}안에 있는 글제목 state를 Modal(){}안에서 쓰고 싶으면??
// App은 부모고, Modal은 자식이다
function Modal(props){
    return(
        <div className="modal">
            {/* 부모인 App 컴포넌트에 있는 글제목을 끌어다 써야 하기 때문에 props 함수를 사용해야 한다.*/}
            <h2>{props.글제목[0]}</h2>
            <p>날씨</p>
            <p>상세내용 </p>
        </div>

    )
}

export default App;