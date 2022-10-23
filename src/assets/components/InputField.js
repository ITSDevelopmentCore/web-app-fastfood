import React, { useState } from "react";

export default function InputField()
{
    return (
        <div className="flex justify-around space-x-2">
            <div className="grow w-10 rounded-xl p-1 border-2 border-gray-900">1</div>
            <div className="h-10 w-10 grow-0 rounded-xl bg-gradient-to-r from-gray-700 to-gray-900">1</div>
        </div>
    )
}