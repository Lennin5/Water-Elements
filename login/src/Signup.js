import React, {useRef, useState} from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { useAuth } from './Context/AuthContext'



function Signup() {

    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const {signup} = useAuth()
    const [error, setError] = useState('')  
    const [loading, setLoading] = useState(false)  

    async function handleSubmit(e){
        e.preventDefault()

        if(passwordRef.current.value !== passwordConfirmRef.current.value){
            return setError ('Las contraseñas no coinciden')
        }

        try{
            setError('')
            setLoading (true)
            await signup(emailRef.current.value, passwordRef.current.value)
        } catch{
            setError('Error al crear la cuenta')
        }
        setLoading(false)
        
    } 

    return (
        <>
           <Card>
               <Card.Body>
                   <h2 className="text-center mb-4">Crear Cuenta</h2>
                   {error && <Alert variant = "danger">{error}</Alert>}
                   <Form onSubmit={handleSubmit}>
                       <Form.Group id="email">
                           <Form.Label>Email</Form.Label>
                           <Form.Control type="email" ref={emailRef} required></Form.Control>
                       </Form.Group>
                       <Form.Group id="password">
                           <Form.Label>Contraseña</Form.Label>
                           <Form.Control type="password" ref={passwordRef} required></Form.Control>
                       </Form.Group>
                       <Form.Group id="password-confirm">
                           <Form.Label>Confirmar Contraseña</Form.Label>
                           <Form.Control type="password" ref={passwordConfirmRef} required></Form.Control>
                       </Form.Group>
                       <Button disabled={loading} className="w-100" type="submit">Crear Cuenta</Button>
                   </Form>
               </Card.Body>
           </Card> 
           <div className="w-100 text-center mt-2">
               Ya tienes una cuenta? Inicia Sesión
           </div>
        </>
    )
}
export default Signup;