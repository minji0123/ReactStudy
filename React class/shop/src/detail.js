/* eslint-disable */
import React, {useState} from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';

// component에 직접 스타일 넣어서 스타일링하기
// css를 미리 입혀놓는 컴포넌트이다. 그래서 className을 작명할 필요가 없다.
let 박스 = styled.div`
  padding :  20px;
`;
let 제목 = styled.h4`
  font-size : 25px;
`;
function Detail(props){

  let { id } = useParams();

  // let 찾은상품 = props.shoes.find(function(상품){
  //   return 상품.id == id
  // });
  let 찾은상품 = props.shoes.find(x => x.id == id);

  let history = useHistory();
    return(
        <div className="container">
          <박스>
            <제목>상세페이지</제목>
          </박스>
              <div className="row">
                <div className="col-md-6">
                  <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
                </div>
                <div className="col-md-6 mt-4">

                  <h4 className="pt-5">{찾은상품.title}</h4>
                  <p>{찾은상품.content}</p>
                  <p>{찾은상품.price}원</p>


                  <button className="btn btn-danger">주문하기</button> 
                  <button className="btn btn-danger" onClick={ ()=> {
                    history.push('/');
                   }}>뒤로가기</button> 

                </div>
              </div>
        </div> 
    )
  }

export default Detail;