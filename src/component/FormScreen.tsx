import React,{useState} from 'react'
import '../assets/style/formscreen.css'

type userState = {
  firstName: string;
  lastName: string;
  age:number | string;
  id:number |string;
}

export default function FormScreen() {
 
const [userInfo, setUserInfo] = useState<userState>({
  firstName : '',
  lastName :'',
  age:'',
  id :Math.floor(Math.random() * 100),
})

const [userList,setUserList] = useState<userState[]>([]);

console.log(userList);

const handleChange = (e:any) => {
  const name = e.target.name;
  const value = e.target.value;
  setUserInfo({
    ...userInfo,
    [name]:value
  })
}

const handleClick = (e :any) => {
  e.preventDefault()
  setUserList([...userList, userInfo])
  setUserInfo({
    firstName : '',
    lastName : '',
    age :'',
    id: ''
  })
}
  const {firstName,lastName,age} = userInfo;
  return (
    <div className="form-parent-container">
      <h3>Enter User Info</h3>
      <form>
        <input className="input-field" type="text" placeholder="Enter First Name" value={firstName} name='firstName' onChange={(e)=>handleChange(e)}/>
        <input className="input-field" type="text" placeholder="Enter Last Name" value={lastName} name="lastName" onChange={(e)=>handleChange(e)}/>
        <input className="input-field" type="number" placeholder="Enter Age" value={age} name="age" onChange={(e)=>handleChange(e)}/>
        <button className="submit-button" type="submit" onClick={(e) => handleClick(e)}>Submit</button>
      </form>
    </div>
  )
}
