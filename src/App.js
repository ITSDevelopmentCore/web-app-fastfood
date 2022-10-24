import React, { useState } from "react";
import ToppingList from "./assets/components/ToppingList";
import InputField from "./assets/components/InputField";
import SimplePopup from "./assets/components/Popup";

import coffee from "./assets/resource/coffee.png"


export default function App() {

    const [orderFinished, setOrderFinished] = useState(true);

    const popUpHandlers = {
        onFinishClick: () => { setOrderFinished(true) },
        onTipsClick: () => { setOrderFinished(true) }
    }

    return (
        <div>

            <SimplePopup
                handlers={popUpHandlers}
                visible={!orderFinished}>
            </SimplePopup>

            <div className="flex flex-col items-center mt-8 mb-6">
                <img src={coffee} className="mb-6" />
                <h1 className="font-semibold text-lg leading-4">Сироп</h1>
                <ToppingList></ToppingList>
            </div>
            <InputField></InputField>
            <div className="p-3 h-12 text-sm mx-2 mt-4 rounded-xl border-2 border-gray-900">Начислено бонусов : <strong>10</strong></div>
            <div onClick={() => setOrderFinished(false)} className="mx-2 mt-4 h-12 flex justify-center items-center bg-gradient-to-r from-gray-700 to-gray-900 font-semibold text-sm text-white rounded-xl">Заказать</div>
        </div>
    )
}
