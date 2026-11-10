import {useNavigate} from 'react-router-dom';

function About()
{
    const navigate = useNavigate();
    const goToHome=()=>{
        navigate("/");
    }
    return(
        <div>
            <h1>About Page</h1>
            <button onClick={goToHome}>Go to Home</button>
        </div>
    )
}
export default About;