import React from 'react';
import ReactDOM from 'react-dom/client'

/*const Sample=()=>{
  return(
    <h1>Heading-1</h1>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample/>)*/

/*const Sample=()=>{
  return(
    <>
    <h1>heading-1</h1>
    <h2>Heading-2</h2>
    </>
    
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample/>)*/

/*const Login=()=>{
  return(
    <div>
      <label>UserName</label>
      <input type="text"/>
      <label>Password</label>
      <input type="password"/>
      <input type="submit" value="Login"/>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Login/>)*/

//Dynamic Rendering

/*const Sample=()=>{
  const name="azar";
  const age=38;
  return(
    <div>
      <h1>Hello,{name}</h1>
      <p>Age is::{age}</p>
      <p>Today date is::{new Date().toLocaleDateString()}</p>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample/>)*/

//Conditional Rendering

/*const x=50;
let text="";
if(x>10)
{
  text=`x is greater than ${x}` 
}
else
{
  text=`x is smaller than ${x}`
}
const MyElem=()=>{
  return(
    <div>
      <h1>{text}</h1>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<MyElem/>)*/

/*function Sample()
{
  return(
    <>
    <h1>This is Heading-1</h1>
    <h2>This is Function Compoent</h2>
    </>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample/>)*/

import Sample from './classComponent';

//const r1=ReactDOM.createRoot(document.getElementById('root'))
//r1.render(<Sample/>)

//Function Component using onclick()

/*function Greeting()
{
    function handleClick()
    {
      alert("Button Clicked")
    }
    return(
      <div>
        <button onClick={handleClick}>ClickMe</button>
      </div>
    )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Greeting/>)*/

//Using props
/*function Welcome(props)
{
  return(
    <div>
      <h1>Hello,{props.name}</h1>
      <p>Your age is::{props.age}</p>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Welcome name="azar" age={20}/>)*/

//Component in Component

/*function UserInfo(props)
{
  return(
    <div>
      <h2>UserName:{props.name}</h2>
      <p>UserAge:{props.age}</p>
      <UserProfile/>
    </div>
  )
}
function UserProfile()
{
  return(
    <div>
      <h3>This is UserProfile</h3>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<UserInfo name="azar" age={38}/>)*/

/*import './index.css';

const App=()=>{
  return(
    <div>
      <h1>Welcome</h1>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<App/>)*/

//Constructor using super

/*class Sample1 extends React.Component
{
    constructor()
    {
      super();
      this.state={name:"azar",age:20}
    }
    render()
    {
      return(
        <div>
          <h1>Hello,{this.state.name}</h1>
          <p>Your age is::{this.state.age}</p>
        </div>
      )
    }
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample1/>)*/

/*class Counter extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state={count:0}
  }
  increment=()=>{
    this.setState({count:this.state.count+1})
  }
  decrement=()=>{
    this.setState({count:this.state.count-1})
  }
  render()
  {
    return(
      <div>
        <h1>Counter:{this.state.count}</h1>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    )
  }
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Counter/>)*/

//React Event
/*function Football()
{
  const shoot=()=>{
    alert("Great shot!!!")
  }
  return(
    <div>
      <button onClick={shoot}>Take the Shoot</button>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Football/>)*/
//Event with argument

/*function Football()
{
  const shoot=(e)=>{
    alert("Shoot!!"+e)
  }
  return(
    <div>
      <button onClick={()=>shoot("welcome")}>Take the Shoot</button>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Football/>)*/

/*function MissedGoal()
{
  return<h1>MissedGoal!!</h1>
}
function MadeGoal()
{
  return<h1>MadeGoal!!!</h1>
}
function Football(props)
{
  const isGoal=props.isGoal;
  return(
    <div>
      {isGoal?<MadeGoal/>:<MissedGoal/>}
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Football isGoal={false}/>)*/

//using list and map

/*class MyList extends React.Component
{
  render()
  {
    const items=["item1","item2","item3"]
    return(
      <div>
        <h1>MyList</h1>
        <ul>
          {items.map((item,index)=>(
            <li>{item}{index}</li>
          ))}
        </ul>
      </div>
    )
  }
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<MyList/>)*/

//Destructuring

/*function Welcome({name,age})
{
  return(
    <div>
      <h1>hello,{name}</h1>
      <p>Your age is::{age}</p>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Welcome  name="azar" age={20}/>)*/

//Destructuring using class

/*class Sample1 extends React.Component
{
  constructor()
  {
    super();
    this.state={name:"azar",age:28}
  }
  render()
  {
    const {name,age}=this.state;
    return(
      <div>
        <h1>Hello,{name}</h1>
        <p>Your age is::{age}</p>
      </div>
    )
  }
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample1/>)*/

//Destructuring in array

/*function Skills()
{
  const skills=["Html","css","js","Python","Testing"]
  const [first,second,...rest]=skills;
  return(
    <div>
      <h1>MySkills</h1>
      <p>First Skill:{first}</p>
      <p>SecondSkill:{second}</p>
      <p>Rest of the Skills:{rest.join("#")}</p>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Skills/>)*/

//Mounting Phase

/*class Sample3 extends React.Component
{
  constructor()
  {
    super()
    this.state={name:"azar",age:38}
    console.log("Constructor called")
  }
  componentDidMount()
  {
    console.log("ComponentDidMount Called!!")
  }
  render()
  {
    console.log("RenderCalled...")
    return(
      <div>
        <h1>Hello,{this.state.name}</h1>
        <p>Your age is::{this.state.age}</p>
      </div>
    )
  }
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample3/>)*/

//Component updated

/*class Sample12 extends React.Component
{
  constructor()
  {
    super();
    this.state={count:0}
    console.log("Constructor called")
  }
  componentDidMount()
  {
    console.log("componentDidMount called")
  }
  componentDidUpdate()
  {
    console.log("componentDidUpdated called")
  }
  increment=()=>{
    this.setState({count:this.state.count+1})
  }
  render()
  {
    console.log("Render called");
    return(
      <div>
        <h1>This is Component Updated Program{this.state.count}</h1>
        <button onClick={this.increment}>Increment</button>
      </div>
    )
  }
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample12/>)*/

//class component unmounting phase

// class Sample14 extends React.Component
// {
//   constructor()
//   {
//     super();
//     this.state={show:true}
//   }
//   toggle=()=>{
//     this.setState({show:!this.state.show})
//   }
//   render()
//   {
//     return(
//       <div>
//         <h1>This is Unmounting Phase</h1>
//         <button onClick={this.toggle}>Toggle</button>
//         {this.state.show?<Child/>:null}
//       </div>
//     )
//   }
// }
/*class Child extends React.Component
{
  componentWillUnmount()
  {
    // alert("Component is unmounted")
    console.log("Component is unmounted")
  }
  componentDidMount()
  {
    console.log("Component is mounted")
  }
  render()
  {
    return(
      <div>
        <h2>This is Child Component</h2>
      </div>
    )
  }
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Child/>)*/

//useState counterApplication

import { useState } from 'react';

/*const App=()=>{
  const [count,setCount]=useState(10);
  return(
    <div>
      <h1>Counter:{count}</h1>
      <button onClick={()=>setCount(count+1)}>Increment</button>
      <button onClick={()=>setCount(count-1)}>Decrement</button>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root')) 
r1.render(<App/>)*/

/*function App()
{
  const [showPassword,setShowPassword]=useState();//false
  return(
    <div>
       <h2>Password Visibility</h2>
       <input 
         type={showPassword ? "text" : "password"} 
        
       />
       <button onClick={() => setShowPassword(!showPassword)}>
         {showPassword ? "Hide" : "Show"} Password
       </button>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<App/>)*/

//useState example like and dislike button

/*const App=()=>{
  const [likes,setLikes]=useState(0);
  const [dislikes,setDislikes]=useState(0);
  return(
    <div>
      <h1>Likes:{likes}</h1>
      <h1>Dislikes:{dislikes}</h1>
      <button onClick={()=>setLikes(likes+1)}>Like</button>
      <button onClick={()=>setDislikes(dislikes+1)}>Dislike</button>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<App/>)*/

//Shopping cart example using useState

const App=()=>{
  const [cartItems,setCartItems]=useState([]);
  const addToCart=(t1)=>{
    setCartItems([...cartItems,t1])
  }
  return(
    <div>
      <h1>Shopping Cart</h1>
      <button onClick={()=>addToCart("Item1")}>Add Item1</button>
      <button onClick={()=>addToCart("Item2")}>Add Item2</button>
      <button onClick={()=>setCartItems([])}>Reset</button>
      <h2>Cart Items:</h2>
      <ul>
        {cartItems.map((t1,index)=>(
          <li key={index}>{t1}</li>
        ))}
      </ul>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<App/>)
