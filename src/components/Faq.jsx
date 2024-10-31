import React from 'react'
import ArrowPurple from '../images/arrow-purple.svg'
import ArrowGreen from '../images/arrow-green.svg'

const Faq = () => {
  return (
    <section id="faq">
        <div className="container">
            <div className="contact">
                <div id="head">
                    <h2>Any questions? <br /> Check out the FAQs</h2>
                    <span id="head-text">Still have unanswered questions and need to get in touch?</span>
                </div>
                <div className="contact-us">
                    <div id="phone">
                        <img loading="lazy" src="../images/phone.svg" alt="A Telephone icon." />
                        <span className="small-text">Still have questions?</span>
                        <a href="#" className="contact-link" id="purple">
                            <span>Contact us</span>
                            <img loading="lazy" src={ArrowPurple} alt="A purple arrow." />
                        </a>
                    </div>
                    <div id="message">
                        <img loading="lazy" src="../images/message.svg" alt="A message icon." />
                        <span>Still have questions?</span>
                        <a href="#" className="contact-link" id="green">
                            <span>Contact us</span>
                            <img loading="lazy" src={ArrowGreen} alt="A green arrow." />
                        </a>
                    </div>                
                </div>
            </div>
            <section className="accordion">
                <div className="list-item">
                    <input type="radio" name="radio" id="radio1" />
                    <div className="title">
                        <label htmlFor="radio1" className="question">Is any of my personal information stored in the App?</label>
                        <label htmlFor="radio1" className="btn btn-circle"><i className="fa-solid fa-chevron-down"></i></label>
                    </div>
                    <div className="content">Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.</div>
                </div>
                <div className="list-item">
                    <input type="radio" name="radio" id="radio2" />
                    <div className="title">
                        <label htmlFor="radio2" className="question">What formats can I download my transaction history in?</label>
                        <label htmlFor="radio2" className="btn btn-circle"><i className="fa-solid fa-chevron-down"></i></label>
                    </div>
                    <div className="content">Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.</div>
                </div>
                <div className="list-item">
                    <input type="radio" name="radio" id="radio3" />
                    <div className="title">
                        <label htmlFor="radio3" className="question">Can I schedule future transfers?</label>
                        <label htmlFor="radio3" className="btn btn-circle"><i className="fa-solid fa-chevron-down"></i></label>
                    </div>
                    <div className="content">Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.</div>
                </div>
                <div className="list-item">
                    <input type="radio" name="radio" id="radio4" />
                    <div className="title">
                        <label htmlFor="radio4" className="question">When can I use Banking App services?</label>
                        <label htmlFor="radio4" className="btn btn-circle"><i className="fa-solid fa-chevron-down"></i></label>
                    </div>
                    <div className="content">Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat. <br /><br />Ornare senectus fusce dignissim ut. Integer
                        consequat in eu tortor, faucibus et lacinia posuere. Turpis sit viverra lorem suspendisse lacus aliquam auctor vulputate. Quis egestas aliquam nunc purus lacus, elit leo elit facilisi. Dignissim amet adipiscing massa integer.</div>
                </div>
                <div className="list-item">
                    <input type="radio" name="radio" id="radio5" />
                    <div className="title">
                        <label htmlFor="radio5" className="question">Can I create my own password that is easy for me to remember?</label>
                        <label htmlFor="radio5" className="btn btn-circle"><i className="fa-solid fa-chevron-down"></i></label>
                    </div>
                    <div className="content">Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.</div>
                </div>
                <div className="list-item">
                    <input type="radio" name="radio" id="radio6" />
                    <div className="title">
                        <label htmlFor="radio6" className="question">What happens if I forget or lose my password?</label>
                        <label htmlFor="radio6" className="btn btn-circle"><i className="fa-solid fa-chevron-down"></i></label>
                    </div>
                    <div className="content">Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.</div>
                </div>
            </section>
        </div>
    </section>
  )
}

export default Faq
