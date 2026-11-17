export default function Student()
{
    return(
        <div>
            <h2>StudentForm</h2>
            <form>
                <label>StudentId</label>
                <input type="text"/>
                <label>StudentPwd</label>
                <input type="password"/>
                <input type="submit" value="AddStudent"/>
            </form>
        </div>
    )
}