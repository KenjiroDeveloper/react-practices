import { useState } from "react";

export const ClickButton = ({count, onClick} ) => {
    return (
        <button className="bg-indigo-1000 w-full h-full rounded-2xl" 
        onClick={onClick}>
            Click Me: {count}
        </button>
    );
}