export default function StudentLayout({children})
{
   return(
    <div>
        <h2>StudentDashbord</h2>
        <nav>
            <a href="/student">Home</a>|
            <a href="/student/profile">Profile</a>|
            <a href="/student/marks">Marks</a>
        </nav>
        <hr/>
        {children}
    </div>
   )
}