import React, { useState } from 'react';

const Contact = () => {

   const [data,setdata]=useState({
       name:"",
       phone:"",
       email: "",
       msg:""
   });
   
   const inputEvent= (event) =>{
       const {name,value}=event.target;
       setdata((preval)=>{ 
           return{
               ...preval,
               [name]:value,
           }
       })
   }
   const formsubmit = (e) =>{
        e.preventDefault();
        alert(`Your Name :${data.name} ,
 email : ${data.email},
  phone number : ${data.phone}
  Message : ${data.msg} `);
   }

    return (
        <>
            <div className="my-4">
                <h1 className="text-center">Contact Us</h1>

            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form action="" onSubmit={formsubmit} autoComplete="off" >
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Full Name</label>
                                <input type="text" 
                                className="form-control" 
                                 name="name"
                                 value={data.name}
                                 onChange={inputEvent}
                                 placeholder="Enter your name"
                                 required
                                 autoComplete="false"
                                  />
                                  <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>

                                <input type="email" 
                                className="form-control" 
                                id="exampleFormControlInput1"
                                 name="email"
                                 value={data.email}
                                 onChange={inputEvent}
                                 placeholder="name@example.com" required/>
                                  <label htmlFor="exampleFormControlInput1" className="form-label">Phone Number</label>

                                <input type="number" 
                                className="form-control" 
                                 name="phone"
                                 value={data.phone}
                                 onChange={inputEvent}
                                 placeholder="Enter phone number" required 
                            
                                 />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlTextarea1"
                                 className="form-label">Message</label>
                                <textarea className="form-control" 
                                id="exampleFormControlTextarea1" rows="3"
                                name="msg"
                                 value={data.msg}
                                 onChange={inputEvent}
                                ></textarea>
                            </div>
                            <div className="col-12">
    <button className="btn btn-outline-primary" type="submit">Submit form</button>
  </div>
                        </form>

                    </div>

                </div>

            </div>
        </>
    )
}
export default Contact;