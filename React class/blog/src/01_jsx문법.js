/*eslint-disable */
import React, {useState} from 'react';
import './App.css';

function App() {

    let post = '강남 우동 맛집';
    
    return (
        // 여기 안의 코드는 html 이 아니라 JSX 임

        // -----------------------
        // jsx 문법
        // -----------------------
        // 1. class -> className
        // 자바스크립트의 class 문법이 따로 있어서
        <div className="App">
            <div className="black-nav">
            {/* 3. style 넣을 때는 object 형태, camelCase로 */}

                <h4 style={{color:'red', fontSize:'16px'}} >블로그임</h4>
            </div>
            {/* 2. 데이터 바인딩_변수 넣을 때는 중괄호 */}
            <h4>{post}</h4>
        </div>
    );
}


export default App;