import './style.css'
import Dropdown from './Dropdown';
const Navbar = (props) => {
    let isClicked = false;
    const handleMenu = ()=>{
        const slideIn = document.querySelector('.dropdown');
        const menuIcon = document.querySelector('.menu');
        if(isClicked){
            // slideIn.style.transform = 'translateX(0%)';
            slideIn.classList.add('left');
            isClicked = false;
            menuIcon.classList.remove('fa-xmark');
            menuIcon.classList.add('fa-bars');
        }else{
            slideIn.classList.remove('left');
            menuIcon.classList.remove('fa-bars');
            menuIcon.classList.add('fa-xmark');
            isClicked = true;
        }
    }
    return ( 
        <div className="header">
            <nav>
                <h1 className='logo'>Young<strong>Ancient</strong></h1>
                <div className="links desktop">
                    <a href="#" className="">Home</a>
                    <a href="#" className="">New Post</a>
                    <a href="#" className="">Search</a>
                    <a href="#" className="">More</a>
                </div>
                <div className="mobile">
                    <div class="burger">
                        <i className="fa-solid fa-bars fa-2x menu" onClick={handleMenu}></i>
                    </div>
                </div>
            </nav>
            <Dropdown/>
        </div>
            
     );
}
 
export default Navbar;