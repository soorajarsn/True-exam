import React from "react";
import "../styles/faqs.scss"; 
function Faqs() {
    function toggleExpanded(event){
        const button = event.currentTarget;
        button.classList.toggle('active');
        button.querySelector('i').classList.toggle('fa-angle-up');
        var panel = button.nextElementSibling;
        if(panel.style.maxHeight)
            panel.style.maxHeight = null;
        else
            panel.style.maxHeight = panel.scrollHeight+40+"px";
    }
  return (
    <div className="faq-container-main full-width flex">
      <div className="main-container faqs full-width limit-width">
        <h2 className="sm-margin">Frequently Asked Questions</h2>
        <div className="accordian-container lg-margin-top">
          <button className="accordian flex justify-space-between color-secondary sm-margin" onClick={toggleExpanded}>
            <div className="icon-and-content bold sm-margin larger-font">How does you train us?</div>
            <div className="drop-down color-secondary flex">
              <i className="fas fa-angle-down"></i>
            </div>
          </button>
          <div className="panel sm-padding-left sm-padding-right">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
            </p>
          </div>
          <button className="accordian flex justify-space-between color-secondary sm-margin" onClick={toggleExpanded}>
            <div className="icon-and-content bold sm-margin larger-font">Which type of editing tasks will be given in each plan?</div>
            <div className="drop-down color-secondary flex">
              <i className="fas fa-angle-down"></i>
            </div>
          </button>
          <div className="panel sm-padding-left sm-padding-right">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
            </p>
          </div>
          <button className="accordian flex justify-space-between color-secondary sm-margin" onClick={toggleExpanded}>
            <div className="icon-and-content bold sm-margin larger-font">How do you resolve if I am not able to complete the given task?</div>
            <div className="drop-down color-secondary flex">
              <i className="fas fa-angle-down"></i>
            </div>
          </button>
          <div className="panel sm-padding-left sm-padding-right">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
            </p>
          </div>
          <button className="accordian flex justify-space-between color-secondary sm-margin" onClick={toggleExpanded}>
            <div className="icon-and-content bold sm-margin larger-font">Is there any relaxation in Fee?</div>
            <div className="drop-down color-secondary flex">
              <i className="fas fa-angle-down"></i>
            </div>
          </button>
          <div className="panel sm-padding-left sm-padding-right">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
            </p>
          </div>
          <button className="accordian flex justify-space-between color-secondary sm-margin" onClick={toggleExpanded}>
            <div className="icon-and-content bold sm-margin larger-font">How does my submission is evaluated?</div>
            <div className="drop-down color-secondary flex">
              <i className="fas fa-angle-down"></i>
            </div>
          </button>
          <div className="panel sm-padding-left sm-padding-right">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faqs;
