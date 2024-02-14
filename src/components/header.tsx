import { useLocalStorage } from "usehooks-ts";
import { characterName, AC, maxHP } from "../fakeData"

export function Header(){
    const [currentHP, setCurrentHP] = useLocalStorage("currentHP", maxHP)

    return <><h1>{characterName}</h1><h3>AC {AC}</h3><h3 onClick={()=>setCurrentHP(maxHP)}>Max HP {maxHP}</h3><h3 onClick={()=>{if(currentHP > 0)setCurrentHP(currentHP - 1)}}>current HP {currentHP}</h3></>
}