import './style.css'
const Dropdown = () => {
    return ( 
        <div className="">
            <div className="dropdown mobile left">
                <div className="a" style={
                    {marginTop: '0px'}
                }>
                    <a href="#" className="">Home</a>
                </div>
                <div className="a"><a href="#" className="">New Post</a></div>
                <div className="a"><a href="#" className="">Search</a></div>
                <div className="a"><a href="#" className="">More</a></div>
            </div>
        </div>
     );
}
 
export default Dropdown;