/*eslint-disable */
import React, {useState} from 'react';
import './App.css';

function App() {
    // -----------------------
    // State
    // -----------------------
        
    // 자료를 잠깐 저장할 때는 변수 사용함
    let post = '강남 우동 맛집';
    // 근데 중요한 자료를 저장할 때는 state 쓰셈
    let [글제목,b] = useState('남자 코트 추천');
        // 글제목: state 에 보관한 자료
        // b: state 변경을 도와주는 함수


    // 참고: 
    // 구조분해할당
    let num = [1,2];
    let [a,c] = [1,2];


    // state 를 사용하는 이유
    // 변동 시 자동으로 html 에 반영되게 만들고 싶을 때 state 쓰면 됨

    // 일반 변수는 갑자기 변경되면 적용이 안됨...
    // react 에서는 안됨 react 엔진이 인식을 못함
    // 근데 state 를 쓰면 자동 재랜더링이 됨

    // 자쥬 변경될거같은 html 부분 -> state
    // 블로그 로고같은애들은 걍 변수
    return (

        <div className="App">
            <div className="black-nav">
                <h4>ReactBlog</h4>
            </div>

            <div className='list'>
                <h4>{post}</h4>
                <p>2월 17일 발행</p>
            </div>


        </div>
    );
}


export default App;