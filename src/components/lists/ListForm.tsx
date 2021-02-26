import React, { useState } from 'react';

const ListForm = () => {

    const [name, setName] = useState("");

    function onChange(e: React.ChangeEvent<HTMLInputElement>) {
        setName(e.target.value);
    }

    return (
        <form>
            <input name={name} onChange={onChange} id="name"/>
            {console.log(name)}
        </form>
    )

};

export default ListForm;