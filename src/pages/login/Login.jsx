import React from 'react'
import {  Box, Button, FormControl, FormLabel, Input } from '@chakra-ui/react'
import  './style.scss'
const Login = () => {
    return (
        <div style={{textAlign:'center'}}>

                <FormControl
                    isRequired>
                    <Input
                        className="form-input"
                        placeholder=' Email' />
                </FormControl>

                <FormControl
                    isRequired>
                    <Input
                        className="form-input"
                        placeholder='Password' />
                </FormControl>
           
             <Button className='AuthBtn'>
                Login
             </Button>
        </div>
    )
}

export default Login
