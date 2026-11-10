import {useNavigate} from 'react-router-dom';

function Contact()
{
    const navigate = useNavigate();
    const goToHome=()=>{
        navigate("/");
    }
    return(
        <div>
            <h1>Contact Page</h1>
            <button onClick={goToHome}>Go to Home</button>
        </div>
    )
}
export default Contact;