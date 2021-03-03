import React, {useContext, useState} from 'react'
import {DataContext} from './DataProvider'
import Delete from '../icons/delete.svg'

export default function Footer() {
    const [checkAll, setCheckAll] = useState(false)
    const [todos, setTodos] = useContext(DataContext)

    

    const handleCheckAll = () => {
        const newTodos = [...todos]
        newTodos.forEach(todo => {
            todo.complete = !checkAll
        })
        setTodos(newTodos)
        setCheckAll(!checkAll)
    }

    const deleteTodo = () => {
        const newTodos = todos.filter( todo => {
            return todo.complete === false
        })
        setTodos(newTodos)
        setCheckAll(false)
    }

    const ArrPrise = todos.filter(todo => todo.complete === false)
    // console.log(ArrPrise)
    const Prise = ArrPrise.reduce(function(total, item) {
        return total - item.prise * -1
    }, 0)
    // console.log(Prise)
    // const SumPrise = Prise.reduce(function(result, num) {
    //     return result + num
    // }, 0);
    // console.log(SumPrise)

    const ArrItog = todos.filter(todo => todo.complete === true)
    const PriseItog = ArrItog.reduce(function(total, item) {
        return total - item.prise * -1
    }, 0)

    return (
        
        <>
            { todos.length === 0 ? <h2>Запланируйте свои покупки!</h2>
                    : <> <div className="row">
                            <label>
                                <input
                                    id="all"
                                    name="all"
                                    type="checkbox"
                                    onChange={handleCheckAll}
                                    checked={checkAll}
                                />
                                Все покупки
                            </label>
                            <button id="delete" onClick={deleteTodo}><img src={Delete} alt={"Удаление"} /></button>
                        </div>
                        <div className="footer">
                            <div className="planned">
                                <div className="planned-shop">
                                    <p>запланировано</p> <p style={{color: "#fff"}} className="planned-shop-text">{todos.filter(todo => todo.complete === false).length} </p>
                                    <p>сумма </p> <p style={{color: "#fff"}} className="planned-prise-text"> {Prise}</p>
                                </div>
                            </div>
                            <div className="realized">
                                <div className="realized-shop">
                                    <p> приобретено</p> <p style={{color: "#fff"}} className="realized-shop-text"> {todos.filter(todo => todo.complete === true).length} </p>
                                    <p> сумма </p> <p style={{color: "#fff"}} className="realized-prise-text"> {PriseItog} </p>
                                </div>
                            </div>
                        </div>

                </>
            }
            
        </>

    )
}
