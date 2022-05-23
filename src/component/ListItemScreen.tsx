import React from 'react'
import '../assets/style/listscreen.css'
type userData = {
  firstName: string;
  lastName: string;
  age:number | string;
  id:number |string;
}

type ListItemScreenProps = {
 userData: userData[],
 handleDelete:any;
 handleEdit:any;
}

 const ListItemScreen:React.FC<ListItemScreenProps> = ({userData ,handleDelete,handleEdit}) => { 
    
  return (
    <>
    <div>
     <p className="list-heaging-tag">list the items</p>
        {
         userData?.map((user:any,index:any) => {    
            return(
              <ul key={index} >
                <li>
                  <span>FirstName : {user.firstName}</span>
                  <span className="icon-flex">
                    <i className="fas fa-trash" onClick={()=>handleDelete(user)}></i>
                  </span>
                  <span className="icon-flex">
                  <i className="fas fa-edit" onClick={() => handleEdit(user)}></i>
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

export default ListItemScreen;