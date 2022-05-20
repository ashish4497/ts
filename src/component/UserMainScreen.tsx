import React from 'react'
import FormScreen from './FormScreen'
import ListItemScreen from './ListItemScreen'
import '../assets/style/usermainscreen.css'

export default function UserMainScreen() {
  return (
    <div className="parent_container">
      <FormScreen/>
      <ListItemScreen/>
    </div>
  )
}
