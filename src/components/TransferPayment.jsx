import React from 'react'
import Contacts from '../images/contacts.svg'
import Card from '../images/card.svg'
import Dollars from '../images/dollars.svg'
import SendMoney from '../images/send-money.svg'
import Payments from '../images/payments.svg'
import CashBack from '../images/cashback.svg'
import { Link } from 'react-router-dom'

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
                    <Link to="/" className="btn btn-primary link" aria-label='Learn more about money transfer.'>
                        <span>Learn more</span>
                        <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                </div>
                <div className="images-col-1">
                    <img loading="lazy" id="contacts" src={Contacts} alt="A List of contacts." />
                    <img loading="lazy" id="card-contacts" src={Card} alt="A credit card." />
                </div>
                <div className="images-col-2">
                    <img loading="lazy" id="money" src={Dollars} alt="A curve for total money." />
                    <img loading="lazy" id="send-money" src={SendMoney} alt="A list of contacts to send money to." />
                </div>
                <div className="content-2">
                    <h2>Receive payment from international bank details</h2>
                    <div className="left">
                        <span className="icon icon-transfer">
                            <img loading="lazy" src={Payments} alt="A credit card icon." />
                        </span>
                        <span>Manage your payments online. Mollis congue egestas egestas fermentum fames.</span>
                        <Link to="/" className="btn btn-primary link" aria-label='Learn more about receiving payment.'>
                            <span>Learn more</span>
                            <i className="fa-solid fa-arrow-right"></i>
                        </Link>
                    </div>
                    <div className="right">
                        <span className="icon icon-transfer">
                            <img loading="lazy" src={CashBack} alt="An wallet icon." />
                        </span>
                        <span>A elementur and imperdiet enim, pretium etiam facilisi aenean quam mauris.</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TransferPayment
