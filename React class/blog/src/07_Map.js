/*eslint-disable */
import React, {useState} from 'react';
import './App.css';

function App() { 
    // -----------------------
    // Map
    // -----------------------
    // for 반복문은 JSX 중괄호 안에서 사용할 수 없어서 map() 을 대신 사용
    
    let [글제목,set글제목] = useState(['남자 코트 추천','강남 우동 맛집','파이썬 독학']);
    let [좋아요,set좋아요] = useState( new Array(글제목.length).fill(0));
    // let [좋아요,set좋아요] = useState( [0,0,0]);
    let [modal, setModal] = useState(false);

    function 좋아요함수(idx){
        var newArray = [...좋아요];
        newArray[idx] = 좋아요[idx]+1;
        set좋아요(newArray);
    }


    [1,2,3].map((a,i) => {
        // 1. array 자료 개수만큼 함수안의 코드를 실행해줌
        // 2. 파라미터
            // 첫번째 파라미터: array 안에 있는 애들임
            // 두번째 파라미터: 반복문 돌 때마다 0 부터 1씩 증가하는 정수
        // 3. return 에 뭐 적으면 array 에 담아줌
    })

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
                

            {/* returnn 안에다가 중괄호 열어서 
            삼항연산자, map 쓸 수 있음. 
            근데 다른 자바스크립트 문법 (if, for, while )은 못씀*/}


            {/* map으로 돌린 함수는 key={}를 안써주면 개발자도구에서 warning이 뜬다.
                파라미터의 정수값을 안에 넣어주기 */}
                
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