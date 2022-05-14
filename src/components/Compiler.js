import React, { useEffect, useState } from 'react'
import Editor from "@monaco-editor/react";

const Compiler = () => {


    // eslint-disable-next-line 
    const [result, setResult] = useState("");
    useEffect(() => {
        output();
        // eslint-disable-next-line 
    }, [])
    console.log(result);

    const output = async () => {
        const url = 'https://codexweb.netlify.app/.netlify/functions/enforceCode'
        const res = await fetch(url, {
            mode:'no-cors',
            method: "POST",
            headers: {
                'Access-Control-Allow-Origin':'*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "code": "print('Hello')",
                "language": "py",
                "input": "3"
            })
        });
        // const response = await res.json();
        console.log(res);
        setResult(JSON.stringify(res.output));
    }

    return (
        <div className='my-4 mx-5 '>
            <div className='w-[80%] px-11 shadow-lg shadow-gray-500 m-auto'>
                <form action="" className=''>
                    <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                        <option>New Mexico</option>
                        <option>Missouri</option>
                        <option>Texas</option>
                    </select>
                </form>

                <div className='text-xl'>
                    <Editor
                        height="90vh"
                        defaultLanguage="python"
                        defaultValue="# some comment"
                        theme="vs-dark"
                    />
                </div>

                <div className="input"></div> <br />
                <h2 className='mt-11 text-2xl'>Output</h2>
                <div id='output' className="output my-2 py-3 px-5 bg-black text-white h-[30vh] w-full">{result}
                </div>
            </div>
        </div>
    )
}

export default Compiler