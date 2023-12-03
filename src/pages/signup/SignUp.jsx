import React from 'react'
import { Box, Button, FormControl, FormLabel, Input } from '@chakra-ui/react'
import { FcGoogle } from 'react-icons/fc'
import   './style.scss'
const Signup = () => {
    return (
        <div>

            <FormControl
                isRequired>
                <Input
                    className="form-input"
                    placeholder=' Name' />
            </FormControl>

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


            <div className="btnGrp">
                <Button className='AuthBtn'>
                    SignUp
                </Button>
                <Button className='AuthBtn icon'>
                    <FcGoogle />
                </Button>
            </div>
        </div>
    )
}

export default Signup
