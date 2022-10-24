import React from "react";
import { BiCoin } from 'react-icons/bi';


export default function SimplePopup(props) {

    const buttonIconStyle = { color: "white", size : "30px" };

    return (
        <div
            style={{ visibility: props.visible ? "visible" : "hidden" }}
            className="w-full h-full bg-white/75 absolute flex justify-center items-center">
            <div
                className="bg-white border-2 border-gray-700 rounded-xl p-4">
                <h1
                    className="font-semibold text-xl mb-4">Благодарим за заказ
                </h1>
                <div
                    onClick={() => props.handlers.onFinishClick()}
                    className="mb-4 flex px-4 justify-around text-white font-semibold text-sm items-center h-12 grow-0 rounded-xl bg-gradient-to-r from-gray-700 to-gray-900">
                    <BiCoin style={buttonIconStyle}></BiCoin>
                    Оставить чаевые
                </div>
                <div
                    onClick={() => props.handlers.onFinishClick()}
                    className="flex px-4 justify-around text-gray-700 font-semibold text-sm items-center h-12 grow-0 rounded-xl border-2 border-gray-700">
                    Завершить
                </div>
            </div>
        </div>
    )
}