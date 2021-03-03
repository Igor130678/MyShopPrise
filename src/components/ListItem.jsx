import React, { useState } from 'react'
import Edit from '../icons/edit.svg'
import Save from '../icons/save.svg'


export default function ListItem({ todo, id, checkComplete, handleEditTodos, handleEditPrise}) {
    const [onEdit, setOnEdit] = useState(false)
    const [editValue, setEditValue] = useState(todo.name)
    const [onEditPrise, setOnEditPrise] = useState(false)
    const [editValuePrise, setEditValuePrise] = useState(todo.prise)


    const handleOnEditPrise = () => {
        setOnEditPrise(true)
    }

    const handleOnEdit = () => {
        setOnEdit(true)
    }

    const handleSave = () => {
        setOnEdit(false)
        if (editValue) {
            handleEditTodos(editValue, id)
        } else {
            setEditValue(todo.name)
        }
    }

    const handleSavePrise = () => {
        setOnEditPrise(false)
        if (editValuePrise) {
            handleEditPrise(editValuePrise, id)
        } else {
            setEditValuePrise(todo.prise)
        }
    }

    if (onEdit) {
        return (
            <li>
                <div className="shop">
                    <input
                        id={editValue}
                        type="text"
                        value={editValue}
                        name="editValue"
                        onChange={e => setEditValue(e.target.value.toLocaleLowerCase())}
                    />
                    <button
                        style={{background:"rgb(59, 209, 59)"}}
                        onClick={() => handleSave(id)}
                    >
                        <img src={Save} alt={"Сохранить"} />
                    </button>
                </div>
                <div className="prise">
                    <label htmlFor={id} className={todo.complete ? "active" : ""}>
                        {todo.prise}
                    </label>
                    <button disabled={todo.complete}><img src={Edit} alt={"Редактирование"} /></button>
                </div>
            </li>

        )
    } else if (onEditPrise) {
        return (
            <li>
                <div className="shop">
                    <label htmlFor={id} className={todo.complete ? "active" : ""}>
                        <input
                            id=""
                            type="checkbox"
                            checked={todo.complete}
                            onChange={() => checkComplete(id)}
                        />
                        {todo.name}
                    </label>
                    <button
                        onClick={() => handleSave(id)}
                    >
                        <img src={Edit} alt={"Редактирование"} />
                    </button>
                </div>
                <div className="prise">
                    <input
                        id={editValuePrise}
                        type="number"
                        value={editValuePrise}
                        name="editValue"
                        onChange={e => setEditValuePrise(e.target.value.toLocaleLowerCase())}
                    />

                    <button
                        style={{background:"rgb(59, 209, 59)"}}
                        onClick={() => handleSavePrise(id)}
                    >
                        <img src={Save} alt={"Сохранить"} />
                    </button>
                </div>
            </li>

        )
    } else {
        return (
            <li>
                <div className="shop">
                    <label htmlFor={id} className={todo.complete ? "active" : ""}>
                        <input
                            id={id}
                            type="checkbox"
                            checked={todo.complete}
                            onChange={() => checkComplete(id)}
                        />
                        {todo.name}
                    </label>
                    <button
                        disabled={todo.complete}
                        onClick={handleOnEdit}
                    >
                        <img src={Edit} alt={"Редактирование"} />
                    </button>
                </div>
                <div className="prise">
                    <label htmlFor={id} className={todo.complete ? "active" : ""}>
                        {todo.prise} р.
                    </label>
                    <button
                        disabled={todo.complete}
                        onClick={handleOnEditPrise}
                    >
                        <img src={Edit} alt={"Редактирование"} />
                    </button>
                </div>
            </li>
        )
    }


}
