import React from 'react'
import './Subscription.css';

const Subscription = () => {


    const subscriptionStyles = {
        renewStyles:{
            color:'#000',
            backgroundColour:'yellow',
            border:'dashed 5px blue',
            borderRadius:'10px',
            padding:'20px'
        
        },
        btnStyle:{
            border:"solid 2px red",
            backgroundColor:"red",
        color:"#fff",
        padding:"10px, 20px"
        }

    }



  return (
    <div className="subscription text-center">

        {/*External css---subscription */}

    <h3 className ="subscription-info">
        You are an active Subscriber of netflix
        </h3>

{/* Inline CSS*/}
        <p style={{
color:'red',
backgroundColor:'yellow',
border:'1px solid',
padding:'20px',
borderRadius:'6px'

        }}>Renew now</p>


<p style={{
color:'red',
backgroundColor:'yellow',
border:'1px solid',
padding:'20px',
borderRadius:'6px'

        }}>use coupon get 50% offer:</p>

<p style={{
color:'red',
backgroundColor:'yellow',
border:'1px solid',
padding:'20px',
borderRadius:'6px'

        }}>your subscription will end in 2 weeks</p>



<p style={{
color:'red',
backgroundColor:'yellow',
border:'1px solid',
padding:'20px',
borderRadius:'6px'

        }}>your subscription will end in 2 weeks
        </p>

        {/*Internal CSS */}
        <p style={subscriptionStyles.renewStyles}>Renew now and get 50% off</p>
        <button type="button" style={subscriptionStyles.btnStyle}>
            RENEW NOW

        </button>
    </div>
  );
}

export default Subscription;