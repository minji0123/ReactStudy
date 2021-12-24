/*eslint-disable */
import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

    
    let [글제목, 글제목변경] = useState(['남자 코트 추천', ' 강남 우동 맛집', '파이썬 독학']);
    let [좋아요, 좋아요변경] = useState([0,0,0]);
    let [좋아요1, 좋아요변경1] = useState(0);
    let [modal, modal변경] = useState(false); 


    // 변수
    let [누른제목, 누른제목변경] = useState(0);

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

            {/* <div className='list'>
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
            </div> */}

            {
                글제목.map(function(글, i){
                    return(
                        <div className = 'list' > 
                        <h3  onClick={()=>{ 누른제목변경(i) }}> {글제목[i]}<span onClick={ ()=>{ 좋아요함수(i)}}> 👍 </span> {좋아요[i]}   </h3>
                        <p>2 월 17일 발행</p> 
                        <hr/>
                    </div>
                    )
                })
            }

            {/* 버튼을 누르면 각각 다른 모달창이 뜨게 할거임 */}
            <button onClick={()=>{ 누른제목변경(0) }}>버튼1</button>
            <button onClick={()=>{ 누른제목변경(1) }}>버튼2</button>
            <button onClick={()=>{ 누른제목변경(2) }}>버튼3</button>

            <button onClick={()=>{modal변경(!modal)}}>열고닫기</button>
            {
                modal===true
                // <Modal 작명 = {전송할state} ></Modal>
                ? <Modal 글제목 = {글제목} 누른제목={누른제목}></Modal>
                : null
            }

        </div>
    );
}
// 제목을 누를 때 각각 다른 모달창이 뜨게

// 모달창 만드는 법
// 모달창 보이는/안보이는 상태정보를 state에 저장하고
    // state가 0일때는 0번째 제목 출력, 1일때는 1번째 제목 출력

// ui 만드는 법
// ui와 관련된 중요 정보들을 state로 저장해놓고
// state에 따라서 ui가 수정되게 만들면 됨
function Modal(props){
    return(
        <div className="modal">
            <h2>{props.글제목[props.누른제목]}</h2>
            <p>날씨</p>
            <p>상세내용 </p>
        </div>

    )
}

export default App;