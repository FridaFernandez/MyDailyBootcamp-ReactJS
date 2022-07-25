import React from "react";

function ButtonDelete(){
  
  return(
    <button className="button-delete visibility-hidden"  data-component="ButtonDelete">
      <svg width="11" height="12" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.6667 3.66667L10.0887 11.7613C10.0648 12.0977 9.91428 12.4125 9.66749 12.6424C9.4207 12.8722 9.09599 13 8.75875 13H3.24141C2.90417 13 2.57946 12.8722 2.33267 12.6424C2.08588 12.4125 1.93536 12.0977 1.91141 11.7613L1.33341 3.66667M4.66675 6.33333V10.3333M7.33341 6.33333V10.3333M8.00008 3.66667V1.66667C8.00008 1.48986 7.92984 1.32029 7.80482 1.19526C7.6798 1.07024 7.51023 1 7.33341 1H4.66675C4.48994 1 4.32037 1.07024 4.19534 1.19526C4.07032 1.32029 4.00008 1.48986 4.00008 1.66667V3.66667M0.666748 3.66667H11.3334" stroke="#203758" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      Delete
    </button>
  )
}
export default ButtonDelete