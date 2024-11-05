import React, { useState, useEffect } from 'react'

const Accordion = () => {

    // https://win24-assignment.azurewebsites.     /swagger/v1/swagger.json

  
    
    const [isActive, setIsActive] = useState(null);
    
    const handleClick = (index) => {
        setIsActive(isActive === index ? null : index);
    }

    
    const accordionData = [
        {
            title: '111111Is any of my personal information stored in the App?',
            content: 'Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.',
        },
        {
            title: '222222Is any of my personal information stored in the App?',
            content: 'Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.',
        },
        {
            title: '3333333s any of my personal information stored in the App?',
            content: 'Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.',
        },
        {
            title: '444444 any of my personal information stored in the App?',
            content: 'Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.',
        },
        {
            title: '555555s any of my personal information stored in the App?',
            content: 'Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.',
        },
        {
            title: '666666s any of my personal information stored in the App?',
            content: 'Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.',
        }

    ]
    

  return (
      <>
      {accordionData.map((item, index) => (
        <div className="list-item" key={index}>
            <input type="radio" name="radio" id={index} onClick={() => handleClick(index)} />
            <div className="title">
                <label htmlFor={index} className="question">{item.title}</label>
                <label htmlFor={index} className={`btn btn-circle ${isActive === index ? 'btn-open' : ''}`}><i className="fa-solid fa-chevron-down"></i></label>
            </div>
            <div className={`content ${isActive === index ? 'content-open' : ''}`}>{item.content}</div>
         </div>
        ))}
       
    </>
  )
}

export default Accordion
