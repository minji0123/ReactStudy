/*eslint-disable */
import React, {useState} from 'react';
import './App.css';

function App() {
    // -----------------------
    // State
    // -----------------------
    // 참조형 칭구들은 원본 보존해놓는게 좋음

    let [글제목,글제목변경] = useState(['남자 코트 추천','강남 우동 맛집','파이썬 독학']);
    let [좋아요,좋아요변경] = useState(0);

    // State 변경함수 특징
    // 기존 state === 신규 state 인 경우는 변경 안해줌. 똑같은데 굳이 할 필요 없으니까
    // 그래서 얕은복사 해버리면 참조형 변수는 state 변경함수가 안먹음
    // 깊은복사 해야 state 변경할 수 있음
    return (

        <div className="App">
            <div className="black-nav">
                <h4>ReactBlog</h4>
            </div>
        
            <button onClick={() => {
                let copy = [...글제목];
                copy[0] = '여자 코트 추천';
                글제목변경(copy);
            }}>글수정</button>

            <button onClick={ ()=>{ 
                let copy = [...글제목];
                copy.sort();
                글제목변경(copy)
                } }> 정렬버튼 </button>
                
            <div className='list'>
                <h4>{글제목} <span onClick={ () => {좋아요변경(좋아요+1)} }>👍</span> {좋아요} </h4>
                <p>2월 17일 발행</p>
            </div>


        </div>
    );
}


export default App;