import React, { useEffect, useState } from 'react'

const Accordion = () => {

    const [faqData, setFaqData] = useState([]);
    const [errors, setErrors] = useState({});
    const [isActive, setIsActive] = useState(null);

    useEffect(() => {
        const getFaq = async () => {

            try {
                const response = await fetch('https://win24-assignment.azurewebsites.net/api/faq');

                if (!response.ok) {
                    throw new Error("Something went wrong with the request!");
                }

                const apiData = await response.json();
                setFaqData(apiData);
            }
            catch (error) {
                setErrors('Loading failed.');
                console.log('There was an error!', error);
            }
        }

        getFaq();
    }, []);

    const handleClick = (index) => {
        setIsActive(isActive === index ? null : index);
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
                            {item.title ? item.title : errors}
                        </label>
                        <label htmlFor={`faq-${index}`} className={`btn btn-circle ${isActive === index ? 'btn-open' : ''}`}>
                            <i className="fa-solid fa-chevron-down"></i>
                        </label>
                    </div>
                    <div className={`content ${isActive === index ? 'content-open' : ''}`}>{item.content ? item.content : errors}</div>
                </div>
            ))}
        </>
    )
}

export default Accordion
