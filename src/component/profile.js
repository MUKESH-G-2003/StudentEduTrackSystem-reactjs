import { useState } from 'react';
import './profile.css';

function Profile() {
    const [count1, setcount1] = useState(8);
    const [count2, setcount2] = useState(13);
    const [count3, setcount3] = useState(0);

    function Count1() {
        setcount1(count1 + 1);
    }
    function Count2() {
        setcount2(count2 + 1);
    }
    function Count3() {
        setcount3(count3 + 1);
    }
   
    return (
        <div className='profile'>
            <h1>Student Management</h1>
            <div className='state'>
                <div className="card1" style={{backgroundColor:'brown'}}>
                    <i class="fa-solid fa-user"></i>
                    <div>
                        <p>{count1}</p>
                        <p>Regular Student</p>
                    </div>
                </div>
                <div className="card2" style={{backgroundColor:'violet'}}>
                    <i class="fa-solid fa-user"></i>
                    <div>
                        <p>{count2}</p>
                        <p>Remedial Students</p>
                    </div>
                </div>
                <div className="card3" style={{backgroundColor:'green'}}>
                    <i class="fa-solid fa-user"></i>
                    <div>
                        <p>{count3}</p>
                        <p>In Paid Clubs</p>
                    </div>
                </div>
            </div>
            <div className='icons'>
                <div>
                    <div>
                        <i class="fa-solid fa-user" onClick={Count1}></i>
                        <p>Regular Enrollment</p>
                    </div>
                    <div>
                        <i class="fa-solid fa-book-medical" onClick={Count1}></i>
                        <p>Regular Enrollment</p>
                    </div>
                    <div>
                        <i class="fa-solid fa-person" onClick={Count1}></i>
                        <p>Regular Enrollment</p>
                    </div>
                </div>
                <div>
                    <div>
                        <i class="fa-solid fa-book-open" onClick={Count2}></i>
                        <p>Regular Enrollment</p>
                    </div>
                    <div>
                        <i class="fa-solid fa-comment-sms" onClick={Count2}></i>
                        <p>Regular Enrollment</p>
                    </div>
                    <div>
                        <i class="fa-solid fa-square-poll-horizontal" onClick={Count2}></i>
                        <p>Regular Enrollment</p>
                    </div>
                </div>
                <div>
                    <div>
                        <i class="fa-solid fa-house-chimney-medical" onClick={Count3}></i>
                        <p>Regular Enrollment</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
