import axios from 'axios';
import { useEffect } from 'react';
import { baseUrl } from '../components/commonApi/mainApi';


const OrderSuc = () => {



useEffect(()=>{
    getUser();
},[]);


async function getUser(){
    await axios
        .get(baseUrl + "/order/complete?id=" + localStorage.getItem("id"))
        .then((response) => {
          alert("결제가 완료되었습니다.")
          window.location.replace("/cart");
        })
        
        .catch((error)=>{
            console.log(error);
        })
  }

}

export default OrderSuc;