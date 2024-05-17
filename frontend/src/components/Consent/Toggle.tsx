import React from "react";

const Toggle: React.FC<ToggleProps> = ({ label, value, onChange }) => {
    return (
        <div className="flex items-center justify-between">
            <span>{label}</span>
            <label htmlFor={label} className="flex items-center cursor-pointer">
                <div className={`w-12 h-6 rounded-full shadow-inner bg-gray-400 flex items-center px-1 transition duration-300 ease-in-out ${value ? 'bg-green-500' : 'bg-gray-500'}`}>
                    <div className={`bg-white w-5 h-5 rounded-full shadow-md transform duration-300 ease-in-out ${value ? 'translate-x-6' : 'translate-x-0'}`}></div>
                </div>
                <input type="checkbox" id={label} className="hidden" checked={value} onChange={() => onChange(!value)} />
            </label>
        </div>
    );
};

export default Toggle