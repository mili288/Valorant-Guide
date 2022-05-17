import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/UserAuthContext"
import { Link } from "react-router-dom"

  function ForgotPassword() {
    const emailRef = useRef()
    const { resetPassword } = useAuth()
    const [error, setError] = useState("")
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setMessage("")
            setError("")
            setLoading(true)
            console.log('wait')
            await resetPassword(emailRef.current.value)
            console.log('done')
            setMessage("Check your inbox for further instructions")
        } catch (error) {
            console.log(error)
            setError("Failed to reset password")
        }

        setLoading(false)
    }

    return (
        <>
        <div className="box p-4 mx-auto">
        <h2 className="mb-3 login">Password Reset</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        {message && <Alert variant="success">{message}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email address"
              ref={emailRef}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
          </Form.Group>

          <div className="d-grid gap-2">
            <Button className="mx-2" variant="primary" disabled={loading} type="Submit">
            Reset Password
            </Button>
          </div>
        </Form>
        <hr />
        <div className="w-100 text-center mt-2">
                Need an account? <Link to="/signup">Sign Up</Link>
            </div>
            <div className="w-100 text-center mt-3">
                        <Link to="/">Login</Link>
                    </div>
        <div>
        </div>
      </div>
        </>
    )
}

export default ForgotPassword;