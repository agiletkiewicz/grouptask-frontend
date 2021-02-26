import React, { useState } from 'react';

const ListForm = () => {

    const [name, setName] = useState("");

    function onChange(e: React.ChangeEvent<HTMLInputElement>) {
        setName(e.target.value);
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        console.log(name);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>List name</label>
            <input name={name} onChange={onChange} id="name" type="text"/>
            <input type="submit"/>
        </form>
    )

};

export default ListForm;