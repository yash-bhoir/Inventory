import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
function Login() {
  return (
    <>
    <div className='login_main_pge'>
    <div className='container-fluid'>
        <div className='row'>
        <div className='col-md-6 login_color_bg'>
            <div className='row'>
                <div className='col-md-10 m-auto'>
            <div className='login_form'>
                <div className='login_logo'>SmartStock</div>
                <Form>
                    <Form.Group className="mb-3 pt-5" controlId="exampleForm.ControlInput1">
                        <Form.Label>Enter Email address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>
                    
                    <Form.Group className="mb-3 pt-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Enter Password</Form.Label>
                        <Form.Control type="password" placeholder="*****************" />
                        <span>Forget password?</span>
                    </Form.Group>

                    <button  className='btn_block mt-5'>Login</button>
                    </Form>
                    <h6>Are you new? Create Account</h6>
            </div>
        </div>
        </div>
            </div>
        <div className='col-md-6'>
            <div className='login_right'>
                
            </div>
        </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default Login