import React, {FormEvent, FormEventHandler, useState} from 'react';

const ImageSearch = ({setSearchTerm} : {setSearchTerm: (v: string) => void}) => {
    const [text, setText] = useState('');

    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        setSearchTerm(text);
    };

    return (
    <div className='w-full flex pb-6'>
        <form onSubmit={onSubmit} className='mx-auto pl-1 border-slate-600 border-b-[3px] focus-within:border-slate-400'>
            <input onChange={e => setText(e.target.value)} className='focus:outline-none peer' placeholder='Search Term' type="text" />
            <button className='font-semibold text-gray-100 rounded-t-md bg-slate-600 p-1 peer-focus:bg-slate-400' type='submit'>Search</button>
        </form>
    </div>
    )
}

export default ImageSearch;