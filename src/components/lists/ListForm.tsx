import React, { useState } from 'react';

const ListForm = () => {

    const API = "http://localhost:3000/lists"

    const [name, setName] = useState("");

    function onChange(e: React.ChangeEvent<HTMLInputElement>) {
        setName(e.target.value);
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        fetch(API, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'}, 
            body: JSON.stringify({name: name})
        })
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>List name</label>
                <input name={name} onChange={onChange} id="name" type="text"/>
                <input type="submit"/>
            </form>
        </div>
    )

};

export default ListForm;