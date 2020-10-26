import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gaming/GW/1500x600-NP._CB432269252_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id={124}
            title="World’s Greatest Books For Personal Growth & Wealth (Set of 4 Books):
          Perfect Motivational Gift Set"
            img="https://m.media-amazon.com/images/I/81GM4Ang38L._AC_UY218_.jpg"
            price={569.09}
            ratings={2}
          />
          <Product
            id={123}
            title="Redmi Note 9 Pro (Aurora Blue, 4GB RAM, 64GB Storage) - Latest 8nm Snapdragon 720G & Gorilla Glass 5 Protection"
            img="https://images-na.ssl-images-amazon.com/images/I/81pzsRpE5GL._SL1500_.jpg"
            price={13999}
            ratings={4}
          />
        </div>

        <div className="home__row">
          <Product
            id={125}
            title="World’s Book"
            img="https://m.media-amazon.com/images/I/81GM4Ang38L._AC_UY218_.jpg"
            price={569}
            ratings={1}
          />
          <Product
            id={126}
            title="World’s Best book"
            img="https://m.media-amazon.com/images/I/81GM4Ang38L._AC_UY218_.jpg"
            price={1569.56}
            ratings={5}
          />
          <Product
            id={127}
            title="World’s Good books"
            img="https://m.media-amazon.com/images/I/81GM4Ang38L._AC_UY218_.jpg"
            price={1256.7}
            ratings={1}
          />
        </div>
        <div className="home__row">
          <Product
            id={128}
            title="World’s Single books"
            img="https://m.media-amazon.com/images/I/81GM4Ang38L._AC_UY218_.jpg"
            price={1256.0}
            ratings={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
