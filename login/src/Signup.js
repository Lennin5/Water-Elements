import React, {useRef} from 'react'
import { Form, Button, Card } from 'react-bootstrap'
import { useAuth } from './Context/AuthContext'

export default function Signup() {

    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const {signup} = useAuth()

    function handleSubmit(e){
        e.preventDefault()

        signup(emailRef.current.value, passwordRef.current.value)
    } 

    return (
        <>
           <Card>
               <Card.Body>
                   <h2 className="text-center mb-4">Crear Cuenta</h2>
                   <Form>
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
                       <Button className="w-100" type="submit">Crear Cuenta</Button>
                   </Form>
               </Card.Body>
           </Card> 
           <div className="w-100 text-center mt-2">
               Ya tienes una cuenta? Inicia Sesión
           </div>
        </>
    )
}
