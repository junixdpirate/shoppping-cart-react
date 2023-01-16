export default function Input({ name, value, placeholder, cbchanged, children, ...props })
{
    return (
        <>
        <label>{children}</label>
        <br />
        <input type="text" name={name} defaultValue={value} placeholder={placeholder} onChange={e => cbchanged && cbchanged(name, e.target.value)} />
        </>
    );
}

Input.defaultProps = {
    name : "DefaultName",
    value : "Default Value",
    placeholder : "Default Placeholder"
}
