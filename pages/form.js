import Head from 'next/head'
import { useState } from 'react';
import Input from '../components/Input'
import Textarea from '../components/Textarea'
import SubmitButton from '../components/SubmitButton'

const defaultPerson = {
    firstName : "Jhun",
    lastName : "Tiballa"
}
export default function Form()
{   
    const [person, setPerson] = useState(defaultPerson);

    const onSubmit = e => {
        e.preventDefault();
        console.log(person);
        alert(person);
    }

    const onInputChanged = (name, value) => {
        person[name] = value;
        setPerson({...person});
        //console.log([name, value]);
        //person[name] = value;
        //console.log('onInputChanged : ' + name + ':' + value);
        //console.log(person);
        
    };

    return (
        <div>
            <form onSubmit={onSubmit}> 
                <div><Input name="firstName" value={person.firstName} cbchanged={onInputChanged} /></div>
                <div><Input name="lastName" value={person.lastName} placeholder="Enter last name" cbchanged={onInputChanged} /></div>
                <div><Input name="nickName" value="Default Value Nickname" placeholder="Enter nick name" cbchanged={onInputChanged} /></div>
                <div><Textarea /></div>
                <div><SubmitButton /></div>
            </form>

            <br /><br />
            <div>
                <input type="text" onChange={e => setPerson({...person, firstName : e.target.value}) } value={person.firstName} />
                <br />
                <br />
                <input type="text" onChange={e => setPerson({...person, lastName : e.target.value}) } value={person.lastName} />
            </div>
        </div>
    )
}