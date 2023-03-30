import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { baseUrl } from '../components/commonApi/mainApi';

const BookUpdate = () => {

    

    const navigator = useNavigate();
    const [book, setBook] = useState({});
    const [bookupdate, setbookupdate] = useState({
        category_code:'',
        book_title:'',
        book_author:'',
        book_image:'',
        book_price:'',
        book_publisher:'',
        book_pubdate:'',
        book_isbn:'',
        book_desc:'',
      });
    
      const{category_code, book_title, book_author,book_image
        ,book_price,book_publisher,book_pubdate,book_isbn,book_desc} = bookupdate;
        
    useEffect(()=> {
        getData();
    }, []);

   

    const num = JSON.parse(localStorage.getItem('saw')).book_num;

    const getData = async() => {
        await axios
        .get(`${baseUrl}/booklist/update/${num}`)
        .then((response) => { 
            console.log(response.data); 
            setbookupdate(response.data);
            setBook(response.data);
        })
        .catch((err)=> {
              console.error(err.message);
            });
            };
    
    
    const handleValueChange = (e) => {
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    setbookupdate((prev) => {
        return {...prev, ...nextState};
    });
    };


    const handleUpdate = async(e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('category_code', category_code);
        formData.append('book_title', book_title);
        formData.append('book_author', book_author);
        formData.append('book_image', book_image);
        formData.append('book_price', book_price);
        formData.append('book_publisher', book_publisher);
        formData.append('book_pubdate', book_pubdate);
        formData.append('book_isbn', book_isbn);
        formData.append('book_desc', book_desc);
    
    
        const config = {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        };
        await axios
          .put(`${baseUrl}/booklist/update/${book.book_num}`, formData, config)
          .then((response) => {
            console.log(response.data);
            setbookupdate({
                category_code:'',
                book_title:'',
                book_author:'',
                book_image:'',
                book_price:'',
                book_publisher:'',
                book_pubdate:'',
                book_isbn:'',
                book_desc:'',
            });
    
    
            navigator(`/admin/booklist/${book.book_num}`);
          })
          .catch((err) => {
            console.error(err.message);
          });
      };
    
    


    const handleReset = (e) => {
        e.preventDefault();
        navigator('/admin/booklist');
    };

    const handleBack = (e) => {
        e.preventDefault();
        navigator(-1);
    };



    return(
        <div>
<form name='frm' encType='multipart/form-data'>
<center>
    
    <br />
    <br />
    <h3>책 정보 수정하기</h3>
    <br />
    <br />
<table>
          <tbody>
            <tr className='form-input'>
              <td width='50%' align='center'>카테고리</td>
              <td>
                <input
                  className='form-input basic'
                  type='text'
                  name='category_code'
                  size='2'
                  maxLength='4'
                  value={category_code}
                  onChange={handleValueChange}
                />
              </td>
            </tr>
            <tr className='form-input'>
              <td width='20%' align='center'>제목</td>
              <td>
                <input
                  className='form-input basic'
                  type='text'
                  name='book_title'
                  size='10'
                  maxLength='10'
                  defaultValue={book.book_title}
                  value={book_title}
                  onChange={handleValueChange}
                />
              </td>
            </tr>
            <tr className='form-input'>
              <td width='20%' align='center'>저자</td>
              <td>
                <input
                  className='form-input basic'
                  type='text'
                  name='book_author'
                  size='10'
                  value={book_author}
                  onChange={handleValueChange}
                />
              </td>
            </tr>
            <tr className='form-input'>
              <td width='20%' align='center'>출판사</td>
              <td>
                <input
                  className='form-input basic'
                  type='text'
                  name='book_publisher'
                  size='20'
                  maxLength='10'
                  value={book_publisher}
                  onChange={handleValueChange}
                />
              </td>
            </tr>
            <tr className='form-input'>
              <td width='20%' align='center'>표지</td>
              <td>
                <input
                  className='form-input basic' 
                  type='text'
                  name='book_image'
                  size='20'
                  value={book_image}
                  onChange={handleValueChange}
                />
              </td>
            </tr>
            <tr className='form-input'>
              <td width='20%' align='center'>가격</td>
              <td>
                <input
                  className='form-input basic'
                  type='text'
                  name='book_price'
                  size='10'
                  maxLength='10'
                  value={book_price}
                  onChange={handleValueChange}
                />
              </td>
            </tr>
            <tr className='form-input'>
              <td width='20%' align='center'>출판일 </td>
              <td>
                <input
                  className='form-input basic'
                  type='text'
                  name='book_pubdate'
                  size='10'
                  maxLength='10'
                  value={book_pubdate}
                  onChange={handleValueChange}
                />
              </td>
            </tr>
            <tr className='form-input'>
              <td width='20%' align='center'>ISBN</td>
              <td>
                <input
                  className='form-input basic'
                  type='text'
                  name='book_isbn'
                  value={book_isbn}
                  onChange={handleValueChange}
                />
              </td>
            </tr>
            <tr className='form-input'>
              <td width='20%' align='center'>DESC</td>
              <td>
                <textarea
                  className='form-input basic'
                  type='content'
                  name='book_desc'
                  size= 'auto'
                  value={book_desc}
                  key={book.book_desc}
                  onChange={handleValueChange}
                />
              </td>
            </tr>
          </tbody>
        </table>
        

        <button className='btn btn-primary' onClick={handleUpdate}>
          수정
        </button>
        <button className='btn btn-primary' onClick={handleReset}>
          취소
        </button>
        <button className='btn btn-primary' onClick={handleBack}>
          뒤로
        </button>
        </center>





      </form>
        </div>
    );
};

export default BookUpdate;