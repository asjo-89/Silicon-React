import React, { useState, useEffect } from 'react'

const Accordion = () => {

    // https://win24-assignment.azurewebsites.     /swagger/v1/swagger.json

    // const [users, setUsers] = useState([])

    // const fetchUserData = () => {
    //   fetch("https://jsonplaceholder.typicode.com/users")
    //     .then(response => {
    //       return response.json()
    //     })
    //     .then(data => {
    //       setUsers(data)
    //     })
    // }
  
    // useEffect(() => {
    //   fetchUserData()
    // }, [])
  

    const accordionData = {
        title: 'Is any of my personal information stored in the App?',
        content: 'Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.',
    }

    const {title, content} = accordionData;
        
    const handleClick = (e) => {
        e.preventDefault();
        
    }


  return (
    <>
     {/* <div>
      {users.length > 0 && (
        <ul>
          {users.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div> */}

        {/* <div className="list-item">
            <input type="radio" name="radio" id="radio1" />
            <div className="title">
                <label htmlFor="radio1" className="question">Is any of my personal information stored in the App?</label>
                <label htmlFor="radio1" className="btn btn-circle"><i className="fa-solid fa-chevron-down"></i></label>
            </div>
            <div className="content">Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.</div>
         </div> */}
        <div className="list-item">
            <input type="radio" name="radio" id="radio1" onClick={handleClick}/>
            <div className="title">
                <label htmlFor="radio1" className="question">{title}</label>
                <label htmlFor="radio1" className="btn btn-circle"><i className="fa-solid fa-chevron-down"></i></label>
            </div>
            <div className="content">{content}</div>
         </div>

         {/* Om knapp trycks på ska den delen öppnas.
         Klickas knappen igen ska den stängas.
         Om man klickar på en annan knapp ska föregående stängas. */}













        {/* <div className="list-item">
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
        </div> */}
    </>
  )
}

export default Accordion
