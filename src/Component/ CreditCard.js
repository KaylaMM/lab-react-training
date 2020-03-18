import React from "react";

const CreditCard = ({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color
}) => {
  const ccStyle = {
    backgroundColor: { bgColor },
    color: { color }
  };
  return (
    <div style={ccStyle}>
      {type}
      {number}
      {expirationMonth}
      {expirationYear}
      {bank}
      {owner}
    </div>
  );
};

export default CreditCard;
