import React from "react";


const ContactCard = (props) => {
  const { id, name, email } = props.contact;
  return (
    <div className="item">
      <img className="ui avatar image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtIOZMEhMrzG4v1gt1fz-nFYjtUrNsJa7C3vpK9uivm0LQGAJ6H14QGAN3BFANT7f4lIE&usqp=CAU" />
      <div className="content">
        <div className="header">{name}</div>
        <div>{email}</div>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px" }}
        onClick={() => props.clickHander(id)}
      ></i>
    </div>
  );
};

export default ContactCard;