import React from "react";
import { useParams } from "react-router-dom";
import { items, sellers } from "../data";
import styled from "styled-components";

function SellerDetails() {
  const { id } = useParams();

  return (
    <div>
      <h1>Hello</h1>
      <h1>{id}</h1>
    </div>
  );
}

export default SellerDetails;
