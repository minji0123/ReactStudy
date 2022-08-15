/*eslint-disable */
import React, {useState} from 'react';
import './App.css';

/*
응용1. 글에 아무것도 입력안하고 발행버튼 누르는거 막으려면? 

유저의 의도치않은 행동을 막는 코드도 많이 짜야 안전한 사이트가 됩니다. 

 

응용2. 글을 하나 추가하면 따봉갯수 개별적용하던 것도 이상해질 수 있습니다.

어떻게 해결하면 될까요? 

아마 글이 하나 추가되면 따봉기록할 곳도 하나 더 만들어줘야할듯요.

 

응용3. 날짜데이터는?

state에 글만 저장되어있는데 날짜같은 것도 저장해두고 보여주는 식으로 하면 재밌을 것 같군요. 

자바스크립트로 현재 날짜같은 것도 출력해볼 수 있어서 글 발행시 그런 기능을 더해줄 수도 있겠네요.  
*/
function App() { 
    // -----------------------
    // state 모음
    // -----------------------

    let [글제목,set글제목] = useState(['남자 코트 추천','강남 우동 맛집','파이썬 독학']);
    let [좋아요,set좋아요] = useState( new Array(글제목.length).fill(0));
    let [modal, setModal] = useState(false);

    // modal 에 제목 전달하려고 만듦
    let [누른제목, set누른제목] = useState(0);

    // input 에 입력한 값 저장하려고 만듦
    let [입력값, set입력값] = useState('');

    // -----------------------
    // 함수모음
    // -----------------------

    function 좋아요함수(idx){
        var newArray = [...좋아요];
        newArray[idx] = 좋아요[idx]+1;
        set좋아요(newArray);
    }

    function 글추가함수(e){
        // console.log(e.target.value === '');
        if(e.target.value === ''){
            alert('내용을 입력해주세요');
            return false;
        }
        var arrayCopy = [...글제목];
        arrayCopy.unshift(입력값); // unshift = array 맨 앞에 자료 추가해주세여
        set글제목( arrayCopy );
        set좋아요([...좋아요, 0]);
    }

    function 글삭제함수(idx){
        var arrayCopy = [...글제목];
        arrayCopy.splice(idx,1);
        set글제목( arrayCopy );
    }


    return (

        <div className="App">
            <div className="black-nav">
                <h4>ReactBlog</h4>
            </div>
        
            {/* ---------------------- */}
            {/* 글 component */}        
            {/* ---------------------- */}
            {
                글제목.map((a,i) => {
                 return(
                    <div className="list" key={i}>
                        <h4 onClick = {() => {
                            setModal(!modal);
                            set누른제목(i);
                        }}
                        >{글제목[i]}


                        {/* stopPropagation: 이벤트 버블링 막아줌 */}
                        <span onClick={ (e) => {
                            e.stopPropagation();
                            좋아요함수(i)
                        }}>👍</span> {좋아요[i]}
                        
                        </h4>
                        <p>2월 17일 발행</p>
                        <button onClick={() => {
                            글삭제함수(i)
                        }}>
                        삭제
                        </button>
                    </div>

                 )
                
                })
            }

            {/* ---------------------- */}
            {/* 글발행 기능*/}
            {/* ---------------------- */}
            {/* input 에 입력한 값 가져오는 법: e.target.value */}
            <input onChange={(e)=>{
                set입력값(e.target.value);
            }}/>
            <button onClick={ (e)=>{
                글추가함수(e);
                } }>저장</button>



            {/* ---------------------- */}
            {/* 모달 props 전달 */}
            {/* ---------------------- */}
            {
                modal === true
                // <Modal 작명 = {전송할state} />
                ? <Modal 글제목={글제목} 누른제목={누른제목}/> 
                : null
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
            <h2>{props.글제목[props.누른제목]}</h2>
            <p>날씨</p>
            <p>상세내용 </p>
        </div>
    )
}

export default App;