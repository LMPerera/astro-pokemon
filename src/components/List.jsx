import React from 'react'

let ListItem = (array) => {
    return array.length > 0 ? array.map((row, i) => <li key={i} className="form-list-item">{row.name}</li>) : <div>No Pokemons Available!</div>
}

function List({ data }) {
    return (
        <ul className="form-list">
            {ListItem(data)}
        </ul>
    )
}

export default List
