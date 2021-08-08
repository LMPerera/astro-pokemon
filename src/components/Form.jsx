import React, { useState } from "react";
import List from './List';

let initialState = { name: '', power: '', description: '' }

function Form() {
    let [pokemons, setPokemons] = useState([]);
    let [data, setData] = useState(initialState);

    let onChange = (type, value) => {
        console.log(type, value);
        setData({ ...data, [type]: value })
    }

    let clear = () => {
        setData(initialState);
    }

    let createPokemon = (e) => {
        e.preventDefault()
        setPokemons([...pokemons, data]);
        clear();
    }

    return (
        <div className="pokemon-container">
            <div className="pokemon-form">
                <form >
                    <label className="form-label">Name</label>
                    <input className="form-input"
                        type="input"
                        name="name"
                        placeholder="Name"
                        value={data.name}
                        onChange={(e) => onChange('name', e.target.value)} />
                    <label className="form-label">Power</label>
                    <input className="form-input"
                        type="input"
                        name="power"
                        placeholder="Power"
                        value={data.power}
                        onChange={(e) => onChange('power', e.target.value)} />
                    <label className="form-label">Description</label>
                    <input className="form-input"
                        type="input"
                        name="description"
                        placeholder="Description"
                        value={data.description}
                        onChange={(e) => onChange('description', e.target.value)} />
                    <button className="save" onClick={createPokemon}>Save</button>
                    <button className="cancel" onClick={clear}>Cancel</button>
                </form>
            </div>
            <List data={pokemons} />
        </div>
    )
}

export default Form
