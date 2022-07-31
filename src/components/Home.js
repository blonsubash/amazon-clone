import React from "react";

import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://vertexbazaar.com/wp-content/uploads/2022/04/amazon-prime-video-banner.jpg"
        />
        <div className="home__row">
          <Product
            title={
              "boAt Rockerz 550 Upto 20 Hours Playback, 50MM Drivers, Soft Padded Ear Cushions and Physical Noise Isolation Bluetooth Wireless Over Ear Headphones with Mic (Army Green)"
            }
            price={129.99}
            image={
              "https://m.media-amazon.com/images/I/61s8xwXlDlL._SX679_.jpg"
            }
            rating={4}
          />
          <Product
            title={
              "MOCA Bag Sleeve for 13 13.3 inch MacBook Air Pro Retina 13 13.3 inch a1466 a1369 a1502 MacBook 13 13.3 inch Sleeve Bag Cover (Olive Branch, 13.3 inch MacBook / Laptops)"
            }
            price={14}
            image={
              "https://m.media-amazon.com/images/I/81WcxfaRg0L._SX679_.jpg"
            }
            rating={3}
          />
        </div>
        <div className="home__row">
          <Product
            title={
              "Storite 2 in 1 Screen Cleaning Kit for Laptops,Mobiles,LCD,LED,Computers KCL-1023 (120 ml)"
            }
            price={5}
            image={
              "https://m.media-amazon.com/images/I/91qFDHLRLJL._SY879_.jpg"
            }
            rating={5}
          />
          <Product
            title={
              "Amazon Brand - Solimo Maclear 2 Seater Sofa (Fabric, Steel Grey)"
            }
            price={190}
            image={
              "https://m.media-amazon.com/images/I/91orAl6YwtL._SX522_.jpg"
            }
            rating={4}
          />
          <Product
            title={
              "Liberty Warrior 88-46HSTG Safety Shoe for Men, Men Canvas Boot/Available in 10 Sizes"
            }
            price={10}
            image={
              "https://m.media-amazon.com/images/I/91RAKCQRrcS._UY575_.jpg"
            }
            rating={3}
          />
        </div>
        <div className="home__row">
          <Product
            title={
              "Mi 125.7 cm (50 Inches) 4K Ultra HD Android Smart LED TV 4X | L50M5-5AIN (Black)"
            }
            price={300}
            image={
              "https://m.media-amazon.com/images/I/61V7cDH8AAS._SX679_.jpg"
            }
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
