import React, { useEffect, useState } from 'react'

const ContactForm = () => {


    const [formData, setFormData] = useState({ fullName: '', email: '', specialist: '' });
    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [dropDown, setDropDown] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({...formData, [name]: value});

        if(value.trim() === '') {
            setErrors(prevErrors => ({...prevErrors, [name]: 'This field is required!'}))
        }
        else {
            setErrors(prevErrors => ({...prevErrors, [name]: ''}))
        }
    }

    const handleDropDown = (e) => {
        e.preventDefault();

        if(dropDown) {
            setDropDown(false);
        }
        else {
            setDropDown(true);
        }
    }

    const handleSelectSpecialist = (specialist) => {
        setFormData({...formData, specialist});
        setDropDown(false);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newErrors = {};

        Object.keys(formData).forEach((input) => {
            if(formData[input].trim() === '') {
                newErrors[input] = 'This field is required!';
            }
        })

        if(Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return
        }

        
        try {
            const res = await fetch('https://win24-assignment.azurewebsites.net/api/forms/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });  
            
            if(res.ok) {
                setIsSubmitted(true);
                setFormData({ fullName: '', email: '', specialist: '' });
                console.log('The request was sent successfully.');
            } else {
                const error = await res.json();
                console.log(error.errors)
                setErrors(error.errors)
            }
        }
        catch(error) {
            console.log('There was an error!', error);
        }
    }

    useEffect(() => {
        if(isSubmitted) {
            const timer = setTimeout(() => {
                setIsSubmitted(false);
            }, 5000);

            return () => clearTimeout(timer);
        }
    }, [isSubmitted]);

    if(isSubmitted) {
        return (
            <div className="box">
                <h3>Thank you for contacting us!</h3>
                <p>We will get back to you within 2-3 days.</p>
            </div>
        )
    }

    const specialist = [
        {
            id: 1,
            title: 'Cardiology'
        },
        {
            id: 2,
            title: 'Dermatology'
        },
        {
            id: 3,
            title: 'Endoskopy'
        },
        {
            id: 4,
            title: 'Neurology'
        },
        {
            id: 5,
            title: 'Obstetrics/Gynecology'
        },
        {
            id: 6,
            title: 'Orthopedy'
        },
        {
            id: 7,
            title: 'Palliative team'
        },
        {
            id: 8,
            title: 'Pediatric medicine'
        },
        {
            id: 9,
            title: 'Psychiatry'
        },
        {
            id: 10,
            title: 'Radiology'
        },
        {
            id: 11,
            title: 'Rheumatology'
        },
        {
            id: 12,
            title: 'Urology'
        },
    ]

  return (
    <div className="form-container">
        <h2>Get Online Consultation</h2>        
        <form className="form" onSubmit={handleSubmit} noValidate>
            <div className="input-group">
                <label htmlFor="">Full name</label>
                <input value={formData.fullName} onChange={handleChange} name="fullName" className={`form-input ${errors.fullName ? 'validate-error' : ''}`} type="text" placeholder="Enter full name" />
                <span className="msg-error">{errors.fullName && errors.fullName || errors.FullName && errors.FullName}</span>
            </div>
            <div className="input-group">
                <label htmlFor="">Email address</label>
                <input value={formData.email} onChange={handleChange} name="email" className={`form-input ${errors.email ? 'validate-error' : ''}`} type="email" placeholder="Enter email address" />
                <span className="msg-error">{errors.email && errors.email || errors.Email && errors.Email}</span>

            </div>
            <div className="input-group">
                <div className="dropdown-group">
                    <label htmlFor="">Specialist</label>
                    <div className="input-wrapper">
                        <div className="input-container">
                            <input value={formData.specialist} onChange={handleChange} name="specialist" className={`form-input ${errors.specialist ? 'validate-error' : ''}`} list="specialist" placeholder="Select a specialist" />
                            <button onClick={handleDropDown} className="specialist-btn" htmlFor="specialist">
                                <i className="fa-solid fa-chevron-down"></i>
                            </button>
                        </div>
                        {dropDown && (
                            <ul>
                                {specialist.map((item) => (
                                    <li key={item.id} value={item.title} onClick={() => handleSelectSpecialist(item.title)}>{item.title}</li>
                                ))}
                            </ul>
                        )}
                        <span className="msg-error">{errors.specialist && errors.specialist || errors.Specialist && errors.Specialist}</span>
                    </div>
                </div>
                {/* <label htmlFor="">Specialist</label>
                <input value={formData.specialist} onChange={handleChange} name="specialist" className={`form-input ${errors.specialist ? 'validate-error' : ''}`} list="specialist" />

                <datalist id="specialist">
                    <option value="">Select a specialist</option>
                {specialist.map((item) => (
                    <option key={item.id} value={item.title}>{item.title}</option>
                ))}
                </datalist>
                <span className="msg-error">{errors.specialist && errors.specialist || errors.Specialist && errors.Specialist}</span> */}
            </div>
            <button className="btn btn-primary">Make an appointment</button>
        </form>
    </div>
  )
}

export default ContactForm
