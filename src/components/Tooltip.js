import React from "react";

export default function Tooltip({text, children}){
    return(
        <div class="tooltip">
            {children}
            <span class="tooltiptext">{text}</span>
        </div>
    )
}