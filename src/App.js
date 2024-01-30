import logo from './logo.svg';
import './App.css';
import { TextField } from '@mui/material';
import Stack from '@mui/material/Stack';
import { Button } from '@mui/material';
import { useState } from 'react';
function App() {
  const [principle,setPrinciple]=useState(0);
  const [interest,setInterest]=useState(0);
  const [year,setYear]=useState(0);
  const [result,setResult]=useState(0);
  const [isPrinciple,setIsPrincliple]=useState(true)
  const [isInterest,setIsInterest]=useState(true)
  const [isYear,setIsYear]=useState(true)
  const calculateInterest=(e)=>
    {
      e.preventDefault();
      const result=(principle*interest*year)/100;
      console.log("total interest:",result)
      setResult(result)
      console.log(setResult)
    }
  const handleReset=()=>
    {
      setPrinciple(0);
      setInterest(0);
      setYear(0);
      setResult();
    }
    const validate =(e)=>
      {
        const {name,value}=e.target;
        setPrinciple(value);
        console.log(name,value);
        if(name==='principlevalue')
          {
            let res=(!!value.match(/^[0-9]+$/));
              if(res===true)
                {
                  setIsPrincliple(true)
                }
              else
                {
                  setIsPrincliple(false)
                }
          } 
      }
    const validateInterest=(e)=>
      {
        const {name,value}=e.target;
        setInterest(value);
        console.log(name,value);
        if(name==='interestValue')
          {
            let res=(!!value.match(/^[0-9]+$/));
              if(res===true)
                {
                  setIsInterest(true)
                }
              else
                {
                  setIsInterest(false)
                }
          }
      }
    const validateYear=(e)=>
      {
        const {name,value}=e.target;
        setYear(value);
        console.log(name,value);
        if(name==='YearValue')
          {
            let res=(!!value.match(/^[0-9]+$/));
            if(res===true)
              {
                setIsYear(true)
              }
            else
              {
                setIsYear(false)
              }
          }
      }
  return (
    < >
      <div className='d-flex justify-content-center align-items-center w-100 mt-5 bg-dark' style={{height:"90vh"}}>
        <div className='bg-light p-5 rounded' style={{width:"500px"}}>
          <h1>SIMPLE INTEREST</h1>
          <p>Calculate your simple Interest easily!</p>
          <div style={{height:"150px"}} className='flex-column bg-warning mt-3 rounded d-flex justify-content-center align-items-center'>
            <h2>&#8377;{result}</h2>
            <p>Total simple intereset</p>
          </div>
          <form action="" className='mt-3' onSubmit={(e)=>calculateInterest(e)}>
            
            <TextField className='w-100' id="outlines-basic" label="&#8377; Principle amount" variant="outlined" 
              value={principle}
              name="principlevalue"
              onChange={(e)=>validate(e)}/>
                {
                !isPrinciple &&
                <div>
                  <p className='text-danger'>Invalid input</p>
                </div>
              }
            <TextField className='w-100 mt-2' id="outlines-basic" label="Rate of interest (p.a)%" variant="outlined" 
              value={interest}
              name="interestValue"
              onChange={(e)=>validateInterest(e)}/>
                {
                  !isInterest &&
                  <div>
                    <p className='text-danger'>Invalid input</p>
                  </div>
                }
            <TextField className='w-100 mt-2' id="outlines-basic" label="Year (Yr)" variant="outlined" 
              value={year}
              name="YearValue"
              onChange={(e)=>validateYear(e)}/>
                {
                  !isYear &&
                    <div>
                      <p className='text-danger'>Invalid input</p>
                    </div>  
                }
              <Stack direction="row" spacing={2} className='mt-3'>
                <Button disabled={isPrinciple && isInterest && isYear?false:true} variant="contained" className='bg-success' style={{height:"50px",width:"200px"}}type='submit'>Calculate</Button>
                <Button variant="contained" className='bg-light' style={{height:"50px",width:"200px",color:"blue"}} onClick={handleReset}>Reset</Button>
              </Stack>
          </form>
      </div>
    </div>
    </>
  );
};

export default App;
