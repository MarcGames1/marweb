import React from "react"
import PropTypes from "prop-types"
interface FloatingConsentBannerProps {
    color: string;
    message: string;
    header: string;
    acceptText: string;
    denyText: string;
    onAccept: () => void;
    onDeny: () => void;
}

interface ToggleProps {
    label: string;
    value: boolean;
    onChange: (value: boolean) => void;
}

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
export function _FloatingConsentBanner({
                                   color,
                                   message,
                                   header,
                                   acceptText,
                                   denyText,
                                   onAccept,
                                   onDeny,
                               }:FloatingConsentBannerProps) {
    return (
        <div className={`fixed bottom-0 inset-x-0 pb-2 sm:pb-5`} style={{ zIndex: "2000" }}>
            <div className="max-w-screen-xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className={`p-2 rounded-lg bg-${color}-600 shadow-lg sm:p-3`}>
                    <div className="flex items-center justify-between flex-wrap">
                        <div className="sm:flex-1 flex items-center">
                            <div className="flex-col flex">
                                <div className={`ml-3 font-bold text-xl text-${color}-300`} > {header}</div>
                                <div className="ml-3 font-medium text-white">
                                    <span className="md:hidden">{message}</span>
                                    <span className="hidden md:inline">{message}</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-2 sm:mt-0 mt-4 sm:w-max w-full sm:mx-0 mx-auto sm:ml-0 ml-2">
                            {acceptText !== undefined && (
                                <div className="flex-shrink-0 sm:order-2 sm:mt-0 sm:w-auto">
                                    <div className="rounded-md shadow-sm">
                                        {onAccept !== undefined && (
                                            <button
                                                className={`flex items-center justify-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-${color}-600 bg-white hover:text-${color}-500 focus:outline-none focus:shadow-outline transition ease-in-out duration-150`}
                                                onClick={onAccept}
                                            >
                                                {acceptText}
                                            </button>
                                        )}
                                    </div>
                                </div>
                            )}
                            {denyText !== undefined && (
                                <div className="flex-shrink-0 sm:order-3 sm:ml-2">
                                    <button
                                        className={`flex items-center justify-center px-4 py-2 text-sm leading-5 font-medium rounded-md text-${color}-200 bg-${color}-600 border-${color}-500 border-2 hover:text-${color}-500 focus:outline-none focus:shadow-outline transition ease-in-out duration-150`}
                                        onClick={onDeny}
                                    >
                                        {denyText}
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

_FloatingConsentBanner.propTypes = {
    color: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    header: PropTypes.string.isRequired,
    acceptText: PropTypes.string.isRequired,
    denyText: PropTypes.string.isRequired,
    onAccept: PropTypes.func.isRequired,
    onDeny: PropTypes.func.isRequired,
}

_FloatingConsentBanner.defaultProps = {
    color: "blue",
}