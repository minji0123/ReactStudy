/*eslint-disable */
import React, {useState} from 'react';
import './App.css';

function App() { // <-- 얘도 Component 임
    // -----------------------
    // Component
    // -----------------------

    /*
    동적인 ui 만드는 step
    1. html css 미리 민들어놓기
    2. ui 현재 상태를 state 로 저장
    3. state 에 따라 ui 가 어떻게 보일지 삼항연산자로 ㄱㄱ
    */

    let [글제목,set글제목] = useState(['남자 코트 추천','강남 우동 맛집','파이썬 독학']);
    let [좋아요,set좋아요] = useState(0);
    let [modal, setModal] = useState(false);

    return (

        <div className="App">
            <div className="black-nav">
                <h4>ReactBlog</h4>
            </div>
        
            <button onClick={() => {
                let copy = [...글제목];
                copy[0] = '여자 코트 추천';
                set글제목(copy);
            }}>글수정</button>

            <button onClick={ ()=>{ 
                let copy = [...글제목];
                copy.sort();
                set글제목(copy);
                } }> 정렬버튼 </button>
                
            <div className='list'>
                {/* 마지막으로 클릭 이벤트 여기다 이렇게 넣어주면 됨 */}
                <h4 onClick = {() => {
                    setModal(!modal);
                }}
                >{글제목} <span onClick={ () => {set좋아요(좋아요+1)} }>👍</span> {좋아요} </h4>
                <p>2월 17일 발행</p>
            </div>

            {/* returnn 안에다가 중괄호 열어서 삼항연산자 쓸 수 있음. 
            근데 다른 자바스크립트 문법 (if, for, while )은 못씀*/}

            {
                modal === true?<Modal/> :null
            }

        </div>
    );
}

function Modal(){
    return(
        <div className="modal">
            <h2>제목</h2>
            <p>날씨</p>
            <p>상세내용 </p>
        </div>
    )
}

export default App;