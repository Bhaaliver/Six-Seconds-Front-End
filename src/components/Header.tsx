import { useLocalStorage } from "usehooks-ts";
import { characterName, AC, maxHP, stats } from "../fakeData"
import { StatDisplay } from "./StatDisplay";

export function Header(){
    const [currentHP, setCurrentHP] = useLocalStorage("currentHP", maxHP)

    return (
        <>
            <h2>{characterName}</h2>
            <h3>AC {AC}</h3>
            <h3 onClick={()=>setCurrentHP(maxHP)}>Max HP {maxHP}</h3>
            <h3 onClick={()=>{if(currentHP > 0)setCurrentHP(currentHP - 1)}}>current HP {currentHP}</h3>
            
            <div className="statContainer">{stats.map((stat, index)=><StatDisplay id={index} value={stat} key={index}/>)}</div>
        </>
    )
}
