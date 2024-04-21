import { Link } from 'react-router-dom';
import profile from '../../assets/images/profile.png'
const Header = () => {
  return (
    <div className='flex justify-between items-center p-2'>
      <h1 className="md:text-3xl text-2xl font-bold ">Knowledge Cafe</h1>
      <Link to={'/'} >Home</Link>
      <Link to={'/users'}>Users</Link>
      <img className='size-12 pt-1' src={profile} alt="" />
    </div>
  );
};

export default Header;
