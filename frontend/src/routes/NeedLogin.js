import NeedLoginPage from '../login/NeedLoginPage';
import Categories from '../pages/Categories';

const NeedLogin = () => {
  const menu = 'category';

  return (
    <div className='container-fluid d-flex'>
      <div className='col-xl-2 col-lg-2 mt-2'>
        <Categories name={menu} />
      </div>
      <div className='categoryRight col-xl-10 col-lg-10 container-fluid mt-3'>
        <NeedLoginPage />
      </div>
    </div>
  );
};
export default NeedLogin;
