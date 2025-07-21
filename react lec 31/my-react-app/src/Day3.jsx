import React,{useState} from 'react'

const Day3 = () => {
    const [input, setInput] = useState({
        name:"",
        password:"",
        email:"",
        
    })
    function fun1(e){
        let {name,value}=e.target
        console.log(name,"=>",value)
        setInput({...input,[name]:value})
        console.log(input)
    }
    

  return (
    <div className='text-white'>
        <fieldset className='border-2 border-white '>
            <legend>FORM</legend>
            <form>
                <h3>Name:</h3>
                <input name='name' value={input.name} onChange={fun1} type='text' placeholder='Enter your name' 
                className='h-10 w-1/3 bg-black border-2 border-white rounded-md text-white'/>
                <br></br>
                <br></br>

                <h3>Email:</h3>
                <input name='email' value={input.email} onChange={fun1} type='text' placeholder='Enter your name'
                className='h-10 w-1/3 bg-black border-2 border-white rounded-md text-white'/>
                <br></br>
                <br></br>

                <h3>Password:</h3>
                <input name='password' value={input.password} onChange={fun1} type='text' placeholder='Enter your name' 
                className='h-10 w-1/3 bg-black border-2 border-white rounded-md text-white'/>
                <br></br>
                <br></br>
                <br></br>

                <button className='bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-md w-[130px] h-11 '>Submit</button>
            </form>
        </fieldset>
    </div>
  )
}

export default Day3