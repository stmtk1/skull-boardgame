import * as React from "react";

type OptionObj = {value: number; text: string};
type Props = { options: OptionObj[]; value: string, onChange: React.ChangeEventHandler<HTMLSelectElement>};

const Select = ({ options, value, onChange}: Props) => {
    const createOption = (v: OptionObj, index: number) => (<option key={index} value={v.value}>{v.text}</option>);
    return (
        <select value={value} onChange={onChange}>
            {options.map(createOption)}
        </select>
    );
};

export default Select;
