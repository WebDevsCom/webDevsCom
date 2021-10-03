import React from "react";
import { ArrowUpCircle } from "react-feather";
import ReactTooltip from "react-tooltip";

const ScrollToTopBtn = () => {
  let scrolling = false;
  window.onscroll = function () {
    scrolling = true;
  };

  setInterval(() => {
    const topBtn = document.getElementById("topBtn");
    const navbar = document.getElementById("navbar");
    if (scrolling && topBtn) {
      if (window.pageYOffset > 20) {
        topBtn.style.display = "block";
        navbar.classList.add("box-shadow");
        navbar.classList.remove("is-light");
        navbar.classList.add("is-white");
      } else {
        topBtn.style.display = "none";
        navbar.classList.remove("box-shadow");
        navbar.classList.add("is-light");
        navbar.classList.remove("is-white");
      }
      scrolling = false;
    }
  });

  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTo({ top: 0, behavior: "smooth" }); // For Safari
    document.documentElement.scrollTo({ top: 0, behavior: "smooth" }); // For Chrome, Firefox, IE and Opera
  }
  return (
    <>
      <ReactTooltip type="light" />
      <div
        id="topBtn"
        className="button button-special is-rounded box-shadow-lift"
        style={{ cursor: "pointer" }}
        onClick={topFunction}
        data-tip="Scroll back to top"
      >
        <ArrowUpCircle color="blue" className="icon" />
      </div>
    </>
  );
};

export default ScrollToTopBtn;
