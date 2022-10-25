import React, { useState } from "react";

import icecream from "../resource/icecream.png"
import chocolate from "../resource/chocolate.png"
import caramel from "../resource/caramel.png"

export default function ToppingList()
{
    const [currentIndex, setCurrentIndex] = useState(-1);

    return (
        <div className="mt-4 flex flex-row justify-between space-x-2">
        <TopingItem index={1} handler={() => {if (currentIndex == 1) setCurrentIndex(-1); else setCurrentIndex(1)}} enabled={currentIndex === 1} image={icecream} title="Мороженое" dimensions="w-16 h-16"></TopingItem>
        <TopingItem index={2} handler={() => {if (currentIndex == 2) setCurrentIndex(-1); else setCurrentIndex(2)}} enabled={currentIndex === 2} image={chocolate} title="Шоколад" dimensions="w-24 h-12"></TopingItem>
        <TopingItem index={3} handler={() => {if (currentIndex == 3) setCurrentIndex(-1); else setCurrentIndex(3)}} enabled={currentIndex === 3} image={caramel} title="Карамель" dimensions="w-24 h-14"></TopingItem>
        </div>
    )
}

function TopingItem(props)
{
    return (
        <div onClick={props.handler} className={props.enabled?
            "p-3 w-24 h-28 flex flex-col justify-between items-center border-2 rounded-xl border-neutral-900":
        "p-3 w-24 h-28 flex flex-col justify-between items-center border-2 rounded-xl border-neutral-900/50"}>
            <img className={props.dimensions+" "} src={props.image}/>
            <p className="text-sm font-semibold">{props.title}</p>
        </div>
    )
}