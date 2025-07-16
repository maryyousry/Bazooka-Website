import { Link } from 'react-router-dom'
import logo from '@assets/images/logo.png'
// import logo from '@assets/images/logo.png';
export default function NavBar() {
  return <>
  <nav>
    <div className='h-10vh flex justify-between z-50 text-amber-50 px-20 py-4 lg:py-5 bg-black'>
    <div className='flex items-center flex-1'>
        <img src={logo} alt="" className='w-30 h-10' />
           <div className='lg:flex md:flex lg:flex-1 items-center justify-end font-normal hidden '>
             <div className='flex-10 '>
                <ul className='flex gap-8 mr-16 text-[18px] justify-center '>
                <li className='nav-item active:*:'>
                <Link to="/Home" className='text-black hover:text-white hover:bg-yellow-600 bg-yellow-300 px-4 rounded-2xl transition'>Home</Link>
                </li>
                <li>
                <Link to="/Menu" className='text-black hover:text-white  hover:bg-yellow-600 bg-yellow-300 px-4 rounded-2xl transition '>Menu</Link>
                </li>
                <li>
                <Link to="/Cart" className='text-black hover:text-white  hover:bg-yellow-600 bg-yellow-300 px-4 rounded-2xl transition'>Cart</Link>
                </li>
            </ul>
             </div>
             <div>
                Profile
             </div>
             
           </div>
        
    </div>
  </div>
  </nav>
  </>
}
