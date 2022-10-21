
import React, { ReactNode } from "react";
import { Children } from "../../../types";

const Banner = ({children} : Children) => {

    const style = {
        backgroundImage: `radial-gradient(at 47% 33%, hsl(223.01, 78%, 28.999999999999996%) 0, transparent 59%),radial-gradient(at 82% 65%, hsl(216.00, 18%, 5%) 0, transparent 55%`
    }

    return (
        <>
            <div className="bg-[#0c111f] h-full"  style={style}>
                {children}
            </div>
        </>
    );
}

export default Banner;