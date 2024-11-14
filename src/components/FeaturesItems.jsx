import React from 'react'

import Payments from '../images/payments.svg'
import Security from '../images/security.svg'
import Statistics from '../images/statistics.svg'
import Support from '../images/support.svg'
import Cashback from '../images/cashback.svg'
import Standards from '../images/standards.svg'

const FeaturesItems = () => {

    const features = [
        {
            id: 1,
            src: Payments,
            title: 'Easy Payments',
            content: 'Id mollis consectetur congue egestas egestas suspendisse blandit justo.'
        },
        {
            id: 2,
            src: Security,
            title: 'Data Security',
            content: 'Augue pulvinar justo, fermentum fames aliquam accumsan vestibulum non.'
        },
        {
            id: 3,
            src: Statistics,
            title: 'Data statistics',
            content: 'Mattis urna ultricies non amet, purus in auctor non. Odio vulputate ac nibh.'
        },
        {
            id: 4,
            src: Support,
            title: 'Support 24/7',
            content: 'A elementum, imperdiet enim, pretium etiam facilisi in aenean quam mauris.'
        },
        {
            id: 5,
            src: Cashback,
            title: 'Regular Cashback',
            content: 'Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet eleifend.'
        },
        {
            id: 6,
            src: Standards,
            title: 'Top Standards',
            content: 'Faucibus cursus maecenas lorem cursus nibh. Sociis sit risus id. Sit facilisis dolor arcu.'
        }
    ]

    return (
        <>
            {features.map((item, index) => (
                <div className="features" key={index} id={`f ${item.id}`}>
                    <span className="icon">
                        <img id="feature-images" loading="lazy" src={item.src} alt={`${item.title} icon`} />
                    </span>
                    <span>
                        <h3>{item.title}</h3>
                        <p loading="lazy" className="info">{item.content}</p>
                    </span>
                </div>
            ))}
        </>
    )
}

export default FeaturesItems
