import * as React from "react"
import * as ReactDOM from "react-dom"

const Select = ({ options, value, onChange }) => {
    const createOption = (v, index) => (<option key={index} value={v.value}>{v.text}</option>);
    return (
        <select value={value} onChange={onChange}>
            {options.map(createOption)}
        </select>
    )
}

module.exports = Select;
