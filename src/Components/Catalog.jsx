import React from 'react';
import { IconContext } from "react-icons";
import { FaShoppingCart  } from "react-icons/fa";

function Catalog() {
  return (
    <div className='catalog__container'>
      <header className='catalog__header'>
        <h1>Our Catalog</h1>
        <h2>Select from our catalog and enjoy the quality of our top-level courses</h2>
      </header>
      <IconContext.Provider value={{style: { fontSize: '40px', color: '#fff'}}}>
        <section>
        <FaShoppingCart />
        </section>
      </IconContext.Provider>

    </div>
  );
}

export default Catalog;
