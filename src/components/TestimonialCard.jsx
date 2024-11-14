import React, { useEffect, useState } from 'react'

import StarFilled from '../images/star-filled.svg'
import StarEmpty from '../images/star-empty.svg'

const TestimonialCard = () => {

    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        const loadTestimonials = async () => {
            try {
                const response = await fetch('https://win24-assignment.azurewebsites.net/api/testimonials');

                if (!response.ok) {
                    throw new Error("Something went wrong with the request!");
                }

                const apiData = await response.json();
                setTestimonials(apiData);
            }
            catch (error) {
                console.log('There was an error!', error);
            }
        }

        loadTestimonials();
    }, []);

    return (
        <>
            {testimonials.map((item, index) => (
                <div className="card" key={index}>
                    <div className="stars">
                        {Array.from({ length: 5 }, (_, starIndex) => (
                            <img
                                key={starIndex}
                                src={starIndex < item.starRating ? StarFilled : StarEmpty}
                                alt="Star rating from the testimonial author." />
                        ))}
                    </div>
                    <span className='text'>{item.comment}</span>
                    <div className="profile">
                        <img loading="lazy" className="profile-img" src={item.avatarUrl} alt="Fannie's profile picture." />
                        <div className="data">
                            <span className="name">{item.author}</span>
                            <span className="job">{item.jobRole}</span>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default TestimonialCard
