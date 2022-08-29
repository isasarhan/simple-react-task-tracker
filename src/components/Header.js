// const Header = ({ title }) => {
import PropTypes from 'prop-types'   //impt
import Button from './Button'
import React from 'react'

const Header = ({title, onAdd, showAdd}) => { 
  return (
    <header className='header'>
      {/* <h1 style={{color:'red'}}>{props.title}</h1> */}
      <h1 >{title}</h1>
      <Button text={showAdd ? 'close' : 'add'} color={showAdd? 'red' : 'green'} onClick={onAdd}></Button>
    </header>
  )
}
// adding default values
Header.defaultProps={
  title : 'Tracker',
}

// css in js
// const HeadingStyle={
//   color:'red'
// }
Header.propTypes = {
  title: PropTypes.string.isRequired,
}
export default Header
