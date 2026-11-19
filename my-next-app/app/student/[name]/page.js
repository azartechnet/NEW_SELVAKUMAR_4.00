const students=[
    {
        name:"Arun",
        department:"Computer Science",
        mark:89
    },
     {
        name:"Azar",
        department:"Computer Science",
        mark:90
    }
]
export default async function StudentDetails({params})
{
    const {name}=await params;
    
    const student=students.find((s)=>s.name.toLowerCase()===name.toLowerCase());

    if(!student)
    {
        return<h1>Student Not Found</h1>
    }
    return(
        <div>
            <h1>StudentDetails</h1>
            <p>Name:{student.name}</p>
            <p>Deparatement:{student.department}</p>
            <p>Mark:{student.mark}</p>
        </div>
    )

}
