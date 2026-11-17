/*export default function Home()
{
  return(
    <div>
      <h1>Welcome to Next js</h1>
      <h2>My First Application</h2>
      <p>Learining next js</p>
    </div>
  )
}*/

//import Student from "./components/student";

//Example 2

/*export default function Home()
{
  return(
    <div>
      <h1>Welcome to App Home Page</h1>
      <h2>Student Informations</h2>
      <p>Name:Mohamed</p>
      <p>Course:FullStack</p>
      <Student/>
      
    </div>
  )
}*/

//Example 3 Dynamic Routing

import Link from "next/link";

export default function Home()
{
  const students=[
    {id:1,name:"azar"},
    {id:2,name:"mohamed"},
     {id:3,name:"raja"}
  ]
  return(
    <div>
        <h1>StudentList</h1>
         {students.map((student)=>(
             <div key={student.id}>
                 <h3>{student.name}</h3>
                 <Link href={`/students/${student.id}`}>ViewDetails</Link>
             </div>
         ))}
    </div>
  )
}
