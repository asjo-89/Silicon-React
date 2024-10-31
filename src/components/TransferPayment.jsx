import React from 'react'

const TransferPayment = () => {
  return (
    <section id="transfer-payment">
        <div className="container">
            <div className="content-1">   
                <h2>Make your money transfer simple and clear</h2>
                <ul>
                    <li>
                        <span>Banking transactions are free for you</span> 
                    </li>

                    <li>
                        <span>No monthly cash commission</span> 
                    </li>
                    
                    <li>
                        <span>Manage payments and transactions online</span> 
                    </li>
                </ul>
                <a href="#" className="btn btn-primary">
                    <span>Learn more</span>
                    <i className="fa-solid fa-arrow-right"></i>
                </a>
            </div> 
            <div className="images-col-1">
                <img loading="lazy" id="contacts" src="/images/contacts.svg" alt="A List of contacts." />
                <img loading="lazy" id="card-contacts" src="/images/card.svg" alt="A credit card." />
            </div>
            <div className="images-col-2">
                <img loading="lazy" id="money" src="/images/dollars.svg" alt="A curve for total money." />
                <img loading="lazy" id="send-money" src="/images/send-money.svg" alt="A list of contacts to send money to." />
            </div>
            <div className="content-2">
                <h2>Receive payment from international bank details</h2>
                <div className="left">
                    <span className="icon icon-transfer">
                        <img loading="lazy" src="/images/payments.svg" alt="A credit card icon." />
                    </span>
                    <span>Manage your payments online. Mollis congue egestas egestas fermentum fames.</span>
                    <a href="#" className="btn btn-primary">
                        <span>Learn more</span>
                        <i className="fa-solid fa-arrow-right"></i>
                    </a>
                </div>
                <div className="right">
                    <span className="icon icon-transfer">
                        <img loading="lazy" src="/images/cashback.svg" alt="An wallet icon." />
                    </span>
                    <span>A elementur and imperdiet enim, pretium etiam facilisi aenean quam mauris.</span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default TransferPayment
