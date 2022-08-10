import React from 'react'

const Loader = ({ size }) => {
    if (size) {
        var _size = `w-${size} h-${size}`
    } else {
        var _size = `w-6 h-6`
    }
    return (
        <div>
            < div className={`spinner-border animate-spin inline-block ${_size} border-[3px] dark:border-t-gray-800 border-t-gray-500 rounded-full`} role="status">
                <span className="visually-hidden"></span>
            </div>
        </div>
    )
}

export default Loader   