import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import wimg3 from "../../images/wimg3_2.jpeg"
import wimg1 from "../../images/wimg1.jpeg"
import "./style.css"

const Contactus = () => {

    const [show, setShow] = useState(false);
    const [email, setEmail ] = useState("");
    const [name, setName ] = useState("");
    const [number, setNumber ] = useState("");
    const [message, setMessage] = useState("");


    const sendEmail = async (e) => {
        e.preventDefault();

        const res = await fetch("http://localhost:7000/api/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,
                number,
                email,
                message
            })
        });

        const data = await res.json();
        console.log(data);

        if (data.status === 401 || !data) {
            console.log("error")
        } else {
            setShow(true);
            setEmail("");
            setMessage("");
            console.log("Email sent");
        }
    }

    return (
        <>
            <div className='container d-flex ContactusDiv'>
                <div className='col-lg-6 Sheader'>
                    <h1 className='Sheading'>Contact Us!</h1>
                    <p className='Spara'> Share Your feelings about your Style. We will do it for you</p>
                </div>
                <div className='col-lg-6'>
                    <img style={{maxHeight:"600px",width:"auto",marginLeft:"auto",marginRight:"auto"}} src={wimg1} />
                </div>
            </div>
            <div className='container row'>
                <p><span style={{color:"#660066",fontWeight:"900"}}>Soul By Indian</span>: Shop Anytime, Anywhere!

                Online shopping is taking over the market faster than one can comprehend. That being said, no one else knows or understands the retail market better than Shoppers Stop. Being one of India’s finest retailers for more than 30 years, we are at the forefront when it comes to retail development. We are expanding our reach over retail stores and the digital market with one of the best online shopping sites. Shopping online can sometimes be tedious and difficult, however with an attractive design, our online fashion destination is easy to navigate making your experience delightful. One can browse through exclusive offers and bag some of the best deals available for themselves. Best deals on top categories, free shipping* and options like cash on delivery to provide you with a hassle free online experience to ‘Shop Anytime Anywhere’.<br/>
                
                 <span style={{color:"#660066",fontWeight:"900"}}>Soul By Indian</span> not only allows you to shop your favourite brands from the comfort of your home but also leaves you wanting for more with our exclusive sales and best offers.</p>
            </div>
            <div className="container C_Form d-flex">
                <div className='col-lg-6'>
                    <img src={wimg3} />
                </div>
                <div className='col-lg-6 form_Col'>
                    <h2>Iniquary Form</h2>
                    <div className="container mt-2">
                            <Form className='mt-2'>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Enter Your Name</Form.Label>
                                    <Form.Control type="text" name='name' value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Name" />
                                    <Form.Label>Enter Phone Number</Form.Label>
                                    <Form.Control type="number" name='number' value={number} onChange={(e) => setNumber(e.target.value)} placeholder="Phone no." />
                                    <Form.Label>Enter Your Email</Form.Label>
                                    <Form.Control type="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
                                    <Form.Label>Your Message</Form.Label>
                                    <Form.Control type="textarea" name='message' value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Message" />
                                </Form.Group>
                                <Button variant="primary" type="submit" onClick={sendEmail}>
                                    Send
                                </Button>
                            </Form>
                            {
                                show ? <Alert variant="primary" onClose={() => setShow(false)} dismissible>
                                    Your Email Succesfully Send
                                </Alert> : ""
                            }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contactus