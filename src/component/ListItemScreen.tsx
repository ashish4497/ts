import React,{useState} from 'react'
import '../assets/style/listscreen.css'

type userState = {
  firstName: string;
  lastName: string;
  age:number | string;
  id:number |string;
}

export default function ListItemScreen(props:any) {
  const [userListArray, setUserListArray] = useState<userState[]>([
    {firstName: "ashish", lastName: "kumar", age: "858", id: 49}
  ])
  return (
    <>
    <div>
     <p className="list-heaging-tag">list the items</p>
        {
         userListArray?.map((user) => { 
           console.log(user.firstName);   
           return(
              <ul>
                <li>
                  <span>FirstName : {user.firstName}</span>
                  <span className="icon-flex">
                    <i className="fas fa-trash"></i>
                  </span>
                  <span className="icon-flex">
                  <i className="fas fa-edit"></i>
                  </span>
                </li>

                <li>LastName : {user.lastName}</li>
                <li>Age : {user.age}</li>
              </ul>
           
           )        
          })
        }
    </div>
    </>
  )
}
