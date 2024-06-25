import React ,{useState}from 'react'

const Sample = () => {
    const [theme,setTheme]=useState('light');
    const Toggle=()=>{
        setTheme(theme=='light' ? 'dark' : 'light')
    }
  return (
    <div>
        <div style={{background:theme=='light' ? '#fff' : '#000'}}>
        <button onClick={Toggle} >Theme</button>
        </div>
    </div>
  )
}

export default Sample