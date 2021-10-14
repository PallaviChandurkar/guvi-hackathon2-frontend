import react from 'react';
import Home from './Home';
import Cart from './Cart';
import { CartProvider } from 'react-use-cart';
import Header from './Header';
import ContactUs from './ContactUs';
import './App.css';

function App() {
  return (
    <>
    <Header />
    <Banner />
    <Services />
    <CartProvider>
    <Home />
    <Cart />
    </CartProvider>
    <ContactUs />
    <Footer />
    </>
  );
}

function Banner() {
  return (
    <div className="banner">
      <div className="text-center py-5">
      <h1>Equipment Rental Portal</h1>
      </div>
    </div>
  )
}

function Footer() {
  return (
    <div className="footer text-center">
      <p>Copyright © Your Website 2021</p>
    </div>
  )
}


function Services() {
  const detailes = [
    {
      name: "Finest-quality products",
      desc: "Quality matters to you, and us! That's why we do a strict quality-check for every product.",
    },
    {
      name: "Free relocation",
      desc: "Changing your house or even your city? We'll relocate your rented products for free.",
    },
    {
      name: "Free maintenance",
      desc: "Keeping your rented products in a spick and span condition is on us, so you can sit back and relax.",
    },
    {
      name: "Cancel anytime",
      desc: "Pay only for the time you use the product and close your subscription without any hassle.",
    },
    {
      name: "Easy return on delivery",
      desc: "If you don't like the product on delivery, you can return it right away—no questions asked.",
    },
    {
      name: "Keep upgrading",
      desc: "Bored of the same product? Upgrade to try another, newer design and enjoy the change!",
    }
  ];

  return (
    <div>
      <h1 className="text-center mt-3">Services</h1>
      <section className="py-4 container">
      <div className="row justify-content-center">
      {detailes.map(( detail => 
      <Service name={detail.name} desc={detail.desc} /> 
      ))}
      </div>
      </section>
    </div>
  )
};

function Service(props) {
  return (
    <div className="col-11 col-md-6 col-lg-3 mx-0">  
    <div className="card">
      <h4 className="text-center">{props.name}</h4>
      <p>{props.desc}</p>
      </div>
      </div>
  );
};
export default App;
