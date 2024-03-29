import React from "react";

const Button=({styles})=> (
    <button type="button" className={`px-6 py-4 bg-blue-gradient font-poppins font-medium text-[18px] rounded-[10px] text-primary outline-none ${styles}`}>
        Get Started
    </button>
    )

export default Button;