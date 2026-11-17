export default async function StudentDetails({params}){
    const {id}=await params;

    const students=[
     {id:1,name:"azar",course:"Python"},
    {id:2,name:"mohamed",course:"Java"},
     {id:3,name:"raja",course:"oops"}
    ]
    const student=students.find((s)=>s.id===Number(id));
    if(!student)
    {
        return<h1>Student Not Found</h1>
    }
    return(
        <div>
            <h1>StudentDetails</h1>
            <h3>Id:{student.id}</h3>
            <h3>Name:{student.name}</h3>
            <h3>Course:{student.course}</h3>
        </div>
    )
}