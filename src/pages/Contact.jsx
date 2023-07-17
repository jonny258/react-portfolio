import React from "react";

function Contact() {

  const handleMouseLeave = (event) => {
    if(!event.target.value){
      alert('Please fillout this field')
      return false
    }else{
      return true
    }
  }

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email)){
      alert('this is not a valid email')
    }
  };
  
  return (
    <section className="contact-wrapper">
      <div className="contact-box">
        <div className="socials p-2 text-center">
          <h2 className="pt-2">Contact me</h2>
          <div className="socials-container p-3 m-3 rounded-3">
            <div>
              <p>Github</p>
              <li>
                <a href="https://github.com/jonny258">jonny258</a>
              </li>
            </div>
            <div>
              <p>LinkedIn</p>
              <li>
                <a href="https://www.linkedin.com/in/jonathan-olsen3/">
                  jonathan-olsen3
                </a>
              </li>
            </div>
            <div>
              <p>Phone number</p>
              <li>801-205-8468</li>
            </div>
            <div>
              <p>Email</p>
              <li>joncolsen3@gmail.com</li>
            </div>
          </div>
        </div>
        <div className="contact-form">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              aria-label="Name"
              onMouseLeave={(event)=> handleMouseLeave(event)}
            />
            <span className="input-group-text">@</span>
            <input
              type="text"
              className="form-control"
              placeholder="Email"
              aria-label="Email"
              onMouseLeave={(event)=> {
                const isText = handleMouseLeave(event)
                if(isText){
                  validateEmail(event.target.value)
                }

              }}
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              @
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Subject"
              aria-label="Subject"
              aria-describedby="basic-addon1"
              onMouseLeave={(event)=> handleMouseLeave(event)}
            />
          </div>
          <div className="input-group">
            <span className="input-group-text">Message</span>
            <textarea className="form-control" aria-label="Message" onMouseLeave={(event)=> handleMouseLeave(event)}></textarea>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
