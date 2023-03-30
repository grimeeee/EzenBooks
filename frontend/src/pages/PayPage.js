import BootPay from "bootpay-js"

const PayPage  = () => {
    const cart = JSON.parse(localStorage.getItem('react-use-cart')).items

    var booktitle = cart.map((elem) => {
            return elem.title
          });    
    
  
          
   var order = {id:Number(localStorage.getItem("id")),username:localStorage.getItem("username"),item:{id:Number(localStorage.getItem("id")),name:localStorage.getItem("itemName"),price:Number(localStorage.getItem("cartTotal"))}}   //서버의 주문 값
   var item = {id:Number(localStorage.getItem("id")),name:booktitle,price:Number(localStorage.getItem("cartTotal"))}    //주문한 상품


        BootPay.request({
            price: (item.price).toString(), //실제 결제되는 가격
            application_id: "63eb089b966b74001e2ef7d8",
            name: item.name, //결제창에서 보여질 이름
            pg: 'inicis',
            method: 'card', //결제수단, 입력하지 않으면 결제수단 선택부터 화면이 시작합니다.
            show_agree_window: 0, // 부트페이 정보 동의 창 보이기 여부
            items: [
                {
                    item_name: item.name, //상품명
                    qty: localStorage.getItem('total'), //수량
                    unique: (item.id).toString(), //해당 상품을 구분짓는 primary key
                    price: item.price, //상품 단가
                }
            ],
            user_info: {
                username: order.username,
                
            },
            order_id: order.id, //고유 주문번호
            
        }).error(function (data) {
            //결제 진행시 에러가 발생하면 수행
            console.log(data);
            window.location.replace("order/delete?id="+ item.id);  //DB 값 삭제
        }).ready(function (data) {
            // 가상계좌 입금 계좌번호가 발급되면 호출되는 함수
            console.log(data);
        }).confirm(function (data) {
            //결제가 실행되기 전에 수행되며, 주로 재고를 확인하는 로직이 들어갑니다.
            //주의 - 카드 수기결제일 경우 이 부분이 실행되지 않습니다.
            console.log(data);
            var enable = true; // 재고 수량 관리 로직 혹은 다른 처리
            if (enable) {
                BootPay.transactionConfirm(data); // 조건이 맞으면 승인 처리를 한다.
            } else {
                BootPay.removePaymentWindow(); // 조건이 맞지 않으면 결제 창을 닫고 결제를 승인하지 않는다.
            }
        }).cancel(function (data) {
            //결제가 취소되면 수행됩니다.
            console.log(data);
            window.location.replace("order/delete?id="+ item.id);    //DB 값 삭제
        }).close(function (data) {
            // 결제창이 닫힐때 수행됩니다. (성공,실패,취소에 상관없이 모두 수행됨)
            console.log(data);
        }).done(function (data) {
            //결제가 정상적으로 완료되면 수행됩니다
            window.location.replace("order/confirm?receipt_id="+data.receipt_id);
            console.log(data);
         });
            

};

export default PayPage;
