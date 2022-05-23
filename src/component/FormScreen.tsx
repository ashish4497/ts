
import React,{useState} from 'react'
import '../assets/style/formscreen.css'
import ListItemScreen from "./ListItemScreen"
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
const [isEdit, setIsEdit] = useState(false)
const handleChange = (e:any) => {
  const name = e.target.name;
  const value = e.target.value;
  setUserInfo({
    ...userInfo,
    [name]:value
  })
}


const handleClick = (e:any) => {
  e.preventDefault()
  setUserList([...userList, userInfo])
  setUserInfo({
    firstName : '',
    lastName : '',
    age :'',
    id: Math.floor(Math.random() * 100)
  })
}

const handleDelete = (user:any) =>  {
  const {id} = user;
  var index = userList.findIndex(function(o){     
    return o.id === id;
  })
  if (index !== -1) userList.splice(index, 1);   
    setUserList([...userList]) 
}

const handleEdit = (user:any) => {
  setUserInfo(user)
  setIsEdit(true)
}

const handleUpdateData: React.DOMAttributes<HTMLButtonElement>['onClick']  = (e) =>  {
  e.preventDefault()
  setUserList(
    userList.map(user => {
      return user.id === userInfo.id ? userInfo : user
    })
  )
  setUserInfo({
    firstName : '',
    lastName : '',
    age :'',
    id: ''
  })
 setIsEdit(!true)
}

  const {firstName,lastName,age} = userInfo;
  return (
    <> 
    <div className="form-parent-container">
      <h3>Enter User Info</h3>
      <form autoComplete="off">
        <input className="input-field" type="text" placeholder="Enter First Name" value={firstName} name='firstName' onChange={(e)=>handleChange(e)}/>
        <input className="input-field" type="text" placeholder="Enter Last Name" value={lastName} name="lastName" onChange={(e)=>handleChange(e)}/>
        <input className="input-field" type="number" placeholder="Enter Age" value={age} name="age" onChange={(e)=>handleChange(e)}/>
        {
          isEdit === !true ?
          <button className="submit-button" type="submit" onClick={(e) => handleClick(e)}>Submit</button>
          :
          <button className="submit-button" type="submit" onClick ={handleUpdateData}> Update</button>
        }
      </form>
    </div>
      <ListItemScreen userData={userList}  handleDelete={handleDelete} handleEdit={handleEdit}/>
    </>
  )
}
