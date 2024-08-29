import './navigation.css';
import logo from './image/logo.png';
function Navigation() {
    
    return (
        <div className="navigation">
            <img src={logo} alt='logo' width={"100px"}/>
            <i class="fa-solid fa-user"></i>
            <p>Student Management</p>
            <i class="fa-solid fa-coins"></i>
            <p>Student Management</p>
            <i class="fa-solid fa-medal"></i>
            <p>Student Management</p>
            <i class="fa-solid fa-truck-ramp-box"></i>
            <p>Student Management</p>
            <i class="fa-solid fa-square-poll-vertical"></i>
            <p>Student Management</p> 
            <div className='bottom'>
                <i class="fa-solid fa-circle-question"></i>
                <i class="fa-solid fa-gear"></i>
                <i class="fa-solid fa-right-from-bracket"></i>
            </div>
        </div>
    );
}

export default Navigation;