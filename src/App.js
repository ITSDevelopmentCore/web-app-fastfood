import React from "react";
import ToppingList from "./assets/components/ToppingList";
import InputField from "./assets/components/InputField";

import coffee from "./assets/resource/coffee.png"


export default function App() {
    return (
        <div>
            <div className="flex flex-col items-center mt-8">
                <img src={coffee} className="mb-6"/>
                <h1 className="font-semibold text-lg leading-4">Сироп</h1>
                <ToppingList></ToppingList>
            </div>
            <InputField></InputField>

        </div>
    )
}
