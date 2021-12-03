import * as React from "react"
import * as ReactDOM from "react-dom"

type OnChange = (e: { target: HTMLSelectElement }, index: number) => void;
type Option = {value: number; text: string};
type Props = { options: Option[]; value: string, onChange: React.ChangeEventHandler<HTMLSelectElement>};

const Select = ({ options, value, onChange}: Props) => {
    const createOption = (v: Option, index: number) => (<option key={index} value={v.value}>{v.text}</option>);
    return (
        <select value={value} onChange={onChange}>
            {options.map(createOption)}
        </select>
    )
}

export default Select;
