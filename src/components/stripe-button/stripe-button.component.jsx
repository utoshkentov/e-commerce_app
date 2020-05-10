import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price*100;
    const publishableKey = 'pk_test_1bqXb7RYtF6cCY66JSU91cg200IfqRIcAJ';
    const onToken = token => {
        console.log(token);
        alert('Payment Successfully updated')
    }

    return(
        <StripeCheckout
            label='Pay Now'
            name='Panda Clothing App'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;