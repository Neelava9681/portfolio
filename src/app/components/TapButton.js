import React from "react";

const TapButton = ({ active, selectTab, children }) => {
    const buttonClasses = active ? "text-white border-b border-green-400" : "text-[#ADB7BE]";

    return (
        <div>
            <button onClick={selectTab}>
                <p className={`mr-3 font-semi-bold hover:text-white ${buttonClasses}`}>
                    {children}
                </p>
            </button>
        </div>
    );
};

export default TapButton;