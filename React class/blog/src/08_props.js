/*eslint-disable */
import React, {useState} from 'react';
import './App.css';

function App() { 
    // -----------------------
    // Props
    // -----------------------
    
    // 모달 안에 글 제목 넣을고임
    // 근데 함수가 달라서 데이터 바인딩을 할 수가 없음

    let [글제목,set글제목] = useState(['남자 코트 추천','강남 우동 맛집','파이썬 독학']);
    let [좋아요,set좋아요] = useState( new Array(글제목.length).fill(0));
    let [modal, setModal] = useState(false);

    function 좋아요함수(idx){
        var newArray = [...좋아요];
        newArray[idx] = 좋아요[idx]+1;
        set좋아요(newArray);
    }



    return (

        <div className="App">
            <div className="black-nav">
                <h4>ReactBlog</h4>
            </div>
        
                
            {
                글제목.map((a,i) => {
                 return(
                    <div className="list" key={i}>
                        <h4 onClick = {() => {
                            setModal(!modal);
                        }}
                        >{글제목[i]}

                        <span onClick={ () => {
                            좋아요함수(i)
                        }}>👍</span> {좋아요[i]}
                        
                        </h4>
                        <p>2월 17일 발행</p>
                    </div>

                 )
                
                })
            }

            {
                // <Modal              작명 = {전송할state} />
                modal === true?<Modal 글제목={글제목}/> :null
            }

        </div>
    );
}
/*
부모 -> 자식 state 전송하는 법 (자식->부모, 자식->자식 안됨)
1. <자식컴포넌트 작명={state이름}>
2. props 파라미터 등록 후 props.작명 사용

*/

function Modal(props){
    return(
        <div className="modal">
            <h2>{props.글제목[0]}</h2>
            <p>날씨</p>
            <p>상세내용 </p>
        </div>
    )
}

export default App;