import { useParams } from "react-router-dom";

function DetailPage(props){
  // 유저가 url 파라미터에 입력한 걸 갖고올 때 사용하는 훅
  let {id} = useParams();


  // 상품 순서를 가나다순으로 변경하는 버튼을 만들어버렸다고 가정합시다.
//   그럼 평소엔 /detail/0으로 접속하면 0번째 상품을 보여주니까 White and Black 이 뜰텐데
// 버튼 누른 후엔 /detail/0으로 접속하면 0번째 상품을 보여주니까 Grey Yordan 이 뜨겠군요.
// 이처럼 상세페이지가 불규칙해지는 문제는 어떻게 해결하면 좋을까요? 
  let 찾은상품 = props.shoes.find(function(x){
    return x.id == id
  });


    return(
      <>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
            </div>
            <div className="col-md-6">
              <h4 className="pt-5">{찾은상품.title}</h4>
              <p>{찾은상품.content}</p>
              <p>{찾은상품.price}원</p>
              <button className="btn btn-danger">주문하기</button> 
            </div>
          </div>
        </div> 
      </>
    )
  }

  export default DetailPage;