// import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
 
export default function PopupGfg() {
    return (
        <div>
            <Popup trigger=
                {<button className='login'> Login </button>}
                modal nested>
                {
                    close => (
                        <div className='modal'>
                            <div className='content'>
                                <h1>Make your Account</h1>
                                <div className='myform'>
                                        <div className='id-email'>
                                            <h4>Email</h4>
                                            <form action="">
                                            <input type="email" placeholder='goodvybes@yea.com' /></form>
                                        </div>
                                        <div className='id-password' >
                                            <h4>Password</h4>
                                            <form action="">
                                            <input type="password" placeholder='YourPasswordBaby' required /></form>
                                        </div>
                                </div>

                                <div id='forgot'>
                                    <a href="#">Forgot password?</a>
                                </div>
                            
                            </div>
                            <div className='decision'>
                                <button className='decision-b'
                                onClick=
                                    {() => close()}>
                                        Cancel
                                </button>
                                <button className='decision-b'
                                onClick=
                                    {() => close(alert(`Please confirm your email in your email inbox`))} >
                                        Accept
                                </button>
                            </div>
                        </div>
                    )
                }
            </Popup>
        </div>
    )
}

export function Pay() {
    return (
        <div>
            <Popup trigger=
                {<button className='login'> Pay </button>}
                modal nested>
                {
                    close => (
                        <div className='modal'>
                            <div className='content'>
                                <h1>Credit Card Information</h1>
                                <div className='myform'>
                                    <section id='myform2'>
                                        <div className='completname'>
                                        <form>
                                            <div id='myname'>
                                            <h4>Name</h4>
                                            <input type="text" name='firstname'/></div>
                                            <div id='myname'>
                                            <h4>Lastname</h4>
                                            <input type="text" name='lastname' /></div>
                                        </form>
                                        </div>

                                        <div className='card'>
                                            <h4>Credit card number</h4>
                                            <form action="">
                                            <input type="text" placeholder='**** **** **** **37' /></form>
                                        </div>
                                        <div className='type-card' >
                                            <h4>Type</h4>
                                            <form action="">
                                                <input type="radio" name='v' value="visa"/><img src="https://www.pngall.com/wp-content/uploads/2017/05/Visa-Logo-High-Quality-PNG.png" width="50px" alt="visa" />
                                                <input type="radio" name='v' value="mastercard" /><img src="https://logodownload.org/wp-content/uploads/2014/07/mastercard-logo.png" width="35px" alt="mastercard" />
                                                <input type="radio" name='v' value="amex"/><img src="https://1000marcas.net/wp-content/uploads/2020/03/logo-American-Express.png" width="40px" alt="" />
                                            </form>
                                        </div>
                                        <div className='data'>
                                            <h4>Expiration date</h4>
                                            <form>
                                                <input type="month" />
                                            </form>
                                        </div>
                                        <div className='cs'>
                                            <h4>Security code</h4>
                                            <form>
                                                <input type="password" maxLength="3" />
                                            </form>

                                        </div>
                                    
                                    </section>
                                </div>
                            
                            </div>
                            <div className='decision'>
                                <button id='no-pay'
                                onClick=
                                    {() => close()}>
                                        Cancel
                                </button>
                                <button className='decision-b'
                                onClick=
                                    {() => close()}>
                                        Accept
                                </button>
                            </div>
                        </div>
                    )
                }
            </Popup>
        </div>
    )
}