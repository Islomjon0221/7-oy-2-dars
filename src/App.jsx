import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { useRef, useState } from 'react';

function App() {
  const user = useSelector(state => state)
  console.log(user.counter);
  const [userErr, setUserErr] = useState(false)
  const [ageErr, setAgeErr] = useState(false)
  const dispatch = useDispatch()
  const name = useRef()
  const age = useRef()
  function validate() {
    if(!name.current.value.trim()) {
      setUserErr(true)
      alert("Name is null")
      return false
    }
    
    if(!age.current.value) {
      setAgeErr(true)
      alert("Age is null")
      return false
    }

    if(age.current.value.length > 100 && age.current.value.length < 4) {
      setAgeErr(true)
      alert("Should be more than 3 years of age than 100")
      return false
    }

    if(name.current.value.trim().length < 3) {
      setUserErr(true)
      alert("Name must have more than 3 words")
      return false
    }
    
    return true
  }
  
  function handleClick(e) {
    e.preventDefault()
    if(validate()){
      const userinfo = {
        username: name.current.value,
        userage: age.current.value
      }
      dispatch({type: "ADD", payload: userinfo})
    }
  }

  return (
    <div className='container text-white w-[700px] rounded my-[100px] py-[10px] bg-black mx-auto'>
      <h3 className='text-xl font-bold mb-[70px] mt-[30px] text-center text-[40px]'>Alifreza<span className='text-xl font-bold text-[40px] text-[#079211]'>.</span></h3>
      <form className='ml-[40px] mr-[40px] flex flex-col'>
        <h3 className='text-bold text-[25px]'>Name <span className='text-[#079211]'>*</span></h3>
        <input ref={name} type="text" className={`rounded bg-black mt-[10px] border-b-4 border-[#079211] focus:outline-none placeholder:text-white`} placeholder='Name...' />

        <h3 className='text-bold mt-[40px] text-[25px]'>Age <span className='text-[#079211]'>*</span></h3>
        <input ref={age} type="text" className='rounded mb-[40px] bg-black mt-[10px] border-b-4 border-[#079211] focus:outline-none placeholder:text-white' placeholder='Age...' />

        <button onClick={handleClick} className='font-bold text-sm outline px-[88px] rounded mb-[40px] py-[5px] bg-[#079211] outline-[#079211] hover:bg-black duration-300'>Save</button>
      </form>
    <table className='w-[620px] ml-[40px] mb-[30px] mr-[40px]'>
      <thead className='border-collapse border-2 border-white'>
        <tr className='border-collapse border-2 border-white'>
          <th className='border-2 text-[#079211] border-white'>T/r</th>
          <th className='border-2 text-[#079211] border-white'>Name</th>
          <th className='border-2 text-[#079211] border-white'>Age</th>
        </tr>
      </thead>
      <tbody className='border-collapse'>
        {
          user.counter.map((todo, i) => {
            return(
            <tr key={i} className='border-collapse border-2 border-white'>
              <td className=' border-2 text-center border-white'>{i + 1}</td>
              <td className=' border-2 text-center border-white'>{todo.username}</td>
              <td className=' border-2 text-center border-white'>{todo.userage}</td>
            </tr> 
            )
          })
        }
      </tbody>
      </table>
    </div>
  )
}

export default App
