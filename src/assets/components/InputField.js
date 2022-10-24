import React, { useState, useRef } from "react";
import {BsPencil} from 'react-icons/bs';

export default function InputField()
{

    const input = useRef(null);
    const iconStyle = { color: "white"};

    const [enabled, setEnabled] = useState(true);

    function handler()
    {
        setEnabled(!enabled);
        if (enabled)
        input.current.focus();
    }

    return (
        <div className="mt-4 mx-2 flex justify-around space-x-2">
            <input placeholder="Адрес" ref={input} disabled={enabled} className="leading-4 p-3 grow h-12 rounded-xl border-2 border-gray-900"/>
            <div onClick={handler} onBlur={handler} className="flex justify-center items-center h-12 w-12 grow-0 rounded-xl bg-gradient-to-r from-gray-700 to-gray-900">
                <BsPencil style={iconStyle}></BsPencil>
            </div>
        </div>
    )
}