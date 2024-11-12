import React, { useEffect, useState } from 'react'


const ContactForm = () => {


    const [formData, setFormData] = useState({ fullName: '', email: '', specialist: '' });
    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

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

    const handleSelectSpecialist = (specialist) => {
        setFormData({...formData, specialist});
        setDropDown(false);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const newErrors = {};

        Object.keys(formData).forEach((input) => {
            if(formData[input].trim() === '') {
                newErrors[input] = 'This field is required!';
            }
        })

        if(Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            setLoading(false);
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
                setErrors({});
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
        finally {
            setLoading(false);
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
            <div className="confirm-box">
                <h3>Thank you for contacting us!</h3>
                <p>We will get back to you within 2-3 days.</p>
            </div>
        )
    }

    const specialist = [
        {
            id: 0,
            title: ''
        },
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
            {loading && <div className="loading">Loading...</div>}
            <div className="input-group">
                <label>Full name</label>
                <input value={formData.fullName} onChange={handleChange} name="fullName" className={`form-input ${errors.fullName ? 'validate-error' : ''}`} type="text" placeholder="Enter full name" required />
                <span className="msg-error">{errors.fullName && errors.fullName}</span>
            </div>
            <div className="input-group">
                <label>Email address</label>
                <input value={formData.email} onChange={handleChange} name="email" className={`form-input ${errors.email ? 'validate-error' : ''}`} type="email" placeholder="Enter email address" required />
                <span className="msg-error">{errors.email && errors.email}</span>

            </div>
            <div className="input-group">
                <label>Specialist</label>
                <div className="select-container">
                    <select value={formData.specialist} onChange={handleChange} name="specialist" id="select" className={`form-input select-input ${errors.specialist ? 'validate-error' : ''}`} list="specialist" required>
                        {specialist.map((item) => (
                            <option className="option" key={item.id} value={item.title} onClick={() => handleSelectSpecialist(item.title)}>{item.title}</option>
                        ))}
                    </select>
                </div>
                <span className="msg-error">{errors.specialist && errors.specialist}</span>
            </div>
            <button type="submit" className="btn btn-primary">{loading ? 'Submitting...' : 'Make an appointment'}</button>
        </form>
    </div>
  )
}

export default ContactForm