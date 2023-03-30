import axios from 'axios';
import { useEffect } from 'react';
import { baseUrl } from '../components/commonApi/mainApi';


const OrderFail = () => {



useEffect(()=>{
    getUser();
},[]);


async function getUser(){
    await axios
        .get(baseUrl + "/order/delete?id=" + localStorage.getItem("id"))
        .then((response) => {
          alert("결제가 취소되었습니다.")
          localStorage.removeItem('itemName');
          window.location.replace("/cart");
        })
        
        .catch((error)=>{
            console.log(error);
        })
  }

}

export default OrderFail;