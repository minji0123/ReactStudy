/*eslint-disable */
import React, {useState} from 'react';
import './App.css';

function App() { // <-- 얘도 Component 임
    // -----------------------
    // Component
    // -----------------------
    // 긴 HTML을 한 단어로 깔끔하게 치환해서 넣을 수 있는 문법
    //  HTML 깔끔하게 축약해서 쓰고싶으면 Component 

    let [글제목,글제목변경] = useState(['남자 코트 추천','강남 우동 맛집','파이썬 독학']);
    let [좋아요,좋아요변경] = useState(0);

    // Component 로 만들기 좋은 거
    // 1. 반복적인 html 축약할 때
    // 2. 큰 페이지들 (페이지 전환 시)
    // 3. 자주 변경되는 html ui (항상 그런건 아님)

    // 단점
    // state 갖다 쓸 때 문제생김... 함수단위여서 변수를 갖다 쓸 수가 없눈고야
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

            <Modal></Modal>

        </div>
    );
}

// Component 만드는 법
// 1. function 만들고 (바깥에 만들어야됨)
// 2. return() 안에 html 만들고
// 3. 원하는 곳에 <></> 쓰기

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