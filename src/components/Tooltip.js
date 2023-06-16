import React from "react";

export default function Tooltip({text, children}){
    return(
        <>
        <div class="tool-tip">
            <h2 class="tooltip">Hover over me</h2>
            <p><span class="tooltiptext">This is a tooltip</span></p>
        </div>
        <div class="tool-tip">
            <h2 class="tooltip">{children}</h2>
            <p class="tooltip"><span class="tooltiptext">{text}</span></p>
        </div>
        </>
    )
}