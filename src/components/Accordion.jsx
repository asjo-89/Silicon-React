import React, { useEffect, useState } from 'react'

const Accordion = () => {  
                                    
    const [faqData, setFaqData] = useState([]);
    const [errors, setErrors] = useState({});
    const [isActive, setIsActive] = useState(null);
    
    useEffect(() => {
        const getFaq = async () => {

            try {
                const response = await fetch('https://win24-assignment.azurewebsites.net/api/faq');
        
                if(!response.ok) {
                throw new Error("Something went wrong with the request!");
                }
                
                const apiData = await response.json();
                setFaqData(apiData);
            }
            catch(error) {
                console.log('There was an error!', error.message);
            }
        }

        getFaq();
    }, []);

    const handleClick = (index) => {
        setIsActive(isActive === index ? null : index);
    }

    if(errors) {
        <div className="error-faq">
            <p>Error while loading data from server.</p>
        </div>
    }
        
    

  return (
      <>
            {faqData.map((item, index) => (
                <div className="list-item" key={index}>
                    <input 
                        type="radio" 
                        name="radio" 
                        id={`faq-${index}`}
                        onClick={() => handleClick(index)} 
                    />
                    <div className="title">
                        <label htmlFor={`faq-${index}`} className="question">
                            {item.title}
                        </label>
                        <label htmlFor={`faq-${index}`} className={`btn btn-circle ${isActive === index ? 'btn-open' : ''}`}>
                            <i className="fa-solid fa-chevron-down"></i>
                        </label>
                    </div>

                    {/* {isActive === index && ( */}
                        <div className={`content ${isActive === index ? 'content-open' : ''}`}>{item.content}</div>
                    {/* )} */}
                </div>
            ))}
    </>
  )
}

export default Accordion
