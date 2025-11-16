import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Input from '../../components/inputs/Input';
import { validateEmail } from '../../utils/helper';
import ProfilePhotoSelector from '../../components/inputs/ProfilePhotoSelector';
const SignUp =({setCurrentPage}) => {
  const [profilePic, setProfilePic] = useState(null);
  const [fullName,setFullName]=useState("")
  const [email,setEmail] = useState('');
    const [password,setPassword] = useState("");
    const [error,setError] = useState(null);
  
    const navigate = useNavigate();
  
    const handleSignUp = async (e)=>{
      e.preventDefault();
      let profileImg = '';

      if(!fullName){
        setError("Full Name is required");
        return;
      }
if(!validateEmail(email)){
  setError("Invalid Email Address");
  return;
}
if(!password){
  setError("Password is required");
  return;
}
setError("");
{/** sign Up API Call */}
      try{

      }catch(error){

      }
    };

  return (
   <div className='w-[90vw] md:w-[33vw] p-7 flex flex-col justify-center'>
      <h3 className=' text-lg font-semibold text-black'> Create an Account</h3>
      <p className='text-xs text-slate-700 mt-[5px] mb-6'>Join us today by entering details below. </p>
      <form onSubmit={handleSignUp}>
        <ProfilePhotoSelector image = {profilePic} setImage={setProfilePic}/>
<div className='grid grid-cols-1 md:grid-cols-1 gap-2'>
      <Input value={fullName} onChange={({target})=>{
      setFullName(target.value)}} label="full name" placeholder = "Jhon" type="text"/>
    <Input value={email} onChange={({target})=>{
      setEmail(target.value)}} label="Email Address" placeholder = "jon@example.com" type="text"/>


    <Input value={password} onChange={({target})=>{
      setPassword(target.value)}} label="password" placeholder = "Password" type="password"/>
 {error && <p className='text-red-500 text-xs pb-2.5'>{error}</p>}


        <button type='submit' className='btn-primary'>
          Sign Up
        </button>
        <p className='text-[13px] text-slate-800 mt-3'>
          already have an account?{""}
          <button className='font-medium text-primary underline cursor-pointer' onClick={()=>{
            setCurrentPage("login");
          }}>Login</button>
        </p>
</div>
      </form>
      
    </div>
  )
}

export default SignUp ;
