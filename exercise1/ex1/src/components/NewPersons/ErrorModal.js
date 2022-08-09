import "./ErrorModal.css";

import ReactDOM from "react-dom";
import React from "react";

const Modal = (props) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h4>{props.title}</h4>
        </div>
        <div className="modal-body">{props.content}</div>
        <div className="modal-footer">
          <button className="modal-button" onClick={props.onCloseHandler}>
            Закрыть
          </button>
        </div>
      </div>
    </div>
  );
};

const ErrorModal = (props) => {
  if (!props.showModal) {
    return null;
  }

  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Modal
          title={props.title}
          content={props.content}
          onCloseHandler={props.onCloseHandler}
        />,
        document.getElementById("modal")
      )}
    </React.Fragment>
  );
};

export default ErrorModal;
