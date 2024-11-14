import React from 'react'

import IphoneCards from '../images/iphone-cards-work-tab.svg'
import IphoneTransfer from '../images/iphone-transfer-tab-mob.svg'
import IphoneTransferTab from '../images/iphone-transfer-work-tab.svg'
import IphoneBudget from '../images/iphone-budget-work.svg'
import IphoneCardsWork from '../images/iphone-cards-work.svg'
import IphoneTransferDesk from '../images/iphone-transfer-work.svg'

const HowDoesItWork = () => {

    const infoText = [
        {
            title: 'Transfers to people from your contact list',
            content: 'Proin volutpat mollis egestas. Nam luctus facilisisultrices. Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.'
        },
        {
            title: 'Step 3. Transfers to people from your contact list',
            content: 'Proin volutpat mollis egestas. Nam luctus facilisisultrices. Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.'
        },
        {
            title: 'Latest transaction history',
            content: 'Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed. Arcu sociis tristique quisque hac in consectetur condimentum.'
        }
    ]

    return (
        <section id="work">
            <div className="container">
                <h2>How Does It Work?</h2>
                <div className="images">
                    <img loading="lazy" id="iphone-cards-tab" src={IphoneCards} alt="Iphone showing transfer." />
                    <img id="iphone-transfer-mob" src={IphoneTransfer} alt="Iphone showing how to transfer." />
                    <img loading="lazy" id="iphone-transfer-tab" src={IphoneTransferTab} alt="Iphone showing cards." />
                    <img loading="lazy" id="iphone-budget-desk" src={IphoneBudget} alt="Iphone showing cards." />
                    <img loading="lazy" id="iphone-cards-desk" src={IphoneCardsWork} alt="Iphone showing cards." />
                    <img loading="lazy" id="iphone-transfer-desk" src={IphoneTransferDesk} alt="Iphone showing cards." />
                </div>
                <div className="content-mobile">
                    <h3>{infoText[0].title}</h3>
                    <p>{infoText[0].content}</p>
                </div>
                <div className="content-tablet">
                    <h3>{infoText[1].title}</h3>
                    <p>{infoText[1].content}</p>                
                </div>
                <div className="content-desktop">
                    <h3>{infoText[2].title}</h3>
                    <p>{infoText[2].content}</p>                
                </div>
            </div>
        </section>
    )
}

export default HowDoesItWork
