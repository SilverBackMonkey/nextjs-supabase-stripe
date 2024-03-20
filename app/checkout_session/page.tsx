import CheckoutForm from '@/components/CheckoutForm';
import { NextPage } from 'next';


const DonatePage: NextPage = () => {
  return (
      <div className="page-container">
        <h1>Donate with Checkout</h1>
        <p>Donate to our project 💖</p>
        <CheckoutForm />
      </div>
  );
};

export default DonatePage;