/*eslint-disable */
import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

    
    let [글제목, 글제목변경] = useState( ['남자 코트 추천', ' 강남 우동 맛집', '파이썬 독학'] );
    let [좋아요, 좋아요변경] = useState([0,0,0]);
    let [modal, modal변경] = useState(false); 


    let [입력값, 입력값변경] = useState('');

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

            {/* map으로 돌린 함수는 key={}를 안써주면 개발자도구에서 warning이 뜬다.
                파라미터의 정수값을 안에 넣어주기 */}
            {
                글제목.map(function(글, i){
                    return(
                        <div className = 'list' key={i}> 
                        <h3  onClick={()=>{ 누른제목변경(i) }}> {글제목[i]}<span onClick={ ()=>{ 좋아요함수(i)}}> 👍 </span> {좋아요[i]}   </h3>
                        <p>2 월 17일 발행</p> 
                        <hr/>
                    </div>
                    )
                })
            }
            
            {/* 글발행 기능을 만들거시야 */}
            <div className='publish'>
                <input onChange={ (e)=>{입력값변경(e.target.value)} }/>
                <button onClick={ ()=>{
                    var arrayCopy = [...글제목];
                    arrayCopy.unshift(입력값); // unshift = array 맨 앞에 자료 추가해주세여
                    글제목변경( arrayCopy );

                    var arrayCopy2 = [0, ...좋아요];
                    좋아요변경( arrayCopy2 );

                } }>저장</button>
            </div>

            {/* 1. 사용자가 입력한 글을 '입력값'state 로 저장하기 
                1.5. 실전 : 서버로 먼저 보내서 영구저장함
                2. 저장버튼을 누르면 그 변수를 '글제목'state 에 추가함*/}



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