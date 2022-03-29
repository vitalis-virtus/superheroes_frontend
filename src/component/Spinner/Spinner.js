import React from 'react'
import { HalfMalf } from "react-spinner-animated";
import './spinner.css'

export default function Spinner() {
  return (
    <div>
        <HalfMalf
          text={""}
          bgColor={"#ffffffc7"}
          center={true}
          width={"150px"}
          height={"150px"}
        />
      </div>  )
}
