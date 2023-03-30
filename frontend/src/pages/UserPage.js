import '../css/admin.css';

const UserPage = () => {
  return (
    <div className='UserPage-Wrap container-fluid col-xl-12 col-lg-12 mt-2'>
      <div className='row'>
        <div className='card'>
          {/* Default Table */}
          <table className='table' id='user-table'>
            <thead>
              {/* 테이블 헤드 */}
              <tr>
                <th scope='col' className='user_num'>
                  User No.
                </th>
                <th scope='col' className='user_id'>
                  ID
                </th>
                <th scope='col' className='user_name'>
                  Name
                </th>
                <th scope='col' className='user_email'>
                  Email
                </th>
                <th scope='col' className='user_nickname'>
                  Nickname
                </th>
                <th scope='col' className='user_role'>
                  Level
                </th>
                <th scope='col' className='create_date'>
                  가입일
                </th>
                <th scope='col' className='modify_date'>
                  수정일
                </th>
                <th scope='col' className='user-modify'>
                  Modify
                </th>
                <th scope='col' className='user-delete'>
                  Delete
                </th>
              </tr>
            </thead>
            {/* 반복부분 */}
            <tbody>
              <tr className='view' id='user-E000000001'>
                <th scope='row' className='user_data'>
                  E000000001
                </th>
                <td className='user_id'>AAAAAAAAAAAA</td>
                <td className='user_name'>김석진김석진</td>
                <td className='user_email'>
                  bts123456789ksj123456789@naver.com
                </td>
                <td className='user_nickname'>방탄소년단김석진</td>
                <td className='user_role'>New</td>
                <td className='create_date'>22/02/17</td>
                <td className='modify_date'>22/12/29</td>
                <td className='user-modify'>수정</td>
                <td className='user-delete'>삭제</td>
              </tr>
              <tr classNames='fold'>
                <td colSpan={10}>유저 상세내용 표시 예정 ex) asdfasf</td>
              </tr>
            </tbody>
          </table>
          {/* End Default Table Example */}
        </div>
      </div>
    </div>
  );
};
export default UserPage;
