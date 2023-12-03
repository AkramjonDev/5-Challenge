import React from "react";
import "./style.css";
import Modal from "../Modal/Modal";
function Header() {
  return (
    <header className="header">
      <div className="container flex items-center justify-between py-5">
        <h2 className="header-title text-2xl text-[#fff] font-bold">Cooking</h2>
        <button
          className="btn header-btn p-2 text-xl text-[black] font-bold border-2 border-[#fff]"
          onClick={() => document.getElementById("my_modal_3").showModal()}
        >
          open modal
        </button>
        <Modal />
      </div>
    </header>
  );
}

export default Header;
