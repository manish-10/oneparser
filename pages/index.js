import { useState } from 'react'
import { Textarea } from '../components/Textarea'

export default function Home() {
    const supportedInputLanguages = ["a", "2", "3"];
    const supportedOutputLanguages = ["o", "2", "3"]
    const [valueInput, setValueInput] = useState(supportedInputLanguages[0]);
    const [valueOutput, setValueOutput] = useState(supportedOutputLanguages[0]);
    return (
        <div className="grid grid-cols-12 gap-7 p-7">
            <div className="col-span-6 text-center">
                <select className="border px-6 " value={valueInput} onChange={(e) => setValueInput(e.target.value)}>
                    {supportedInputLanguages.filter((lang) => lang !== valueOutput).map(lang => (<option key={lang} value={lang}>{lang}</option>))}
                </select>
                <Textarea disabled={false} title="Input" />
            </div>
            <div className="col-span-6 text-center">
                <select className="border px-6 " value={valueOutput} onChange={(e) => setValueOutput(e.target.value)}>
                    {supportedOutputLanguages.filter((lang) => lang !== valueInput).map(lang => (<option key={lang} value={lang}>{lang}</option>))}
                </select>
                <Textarea disabled={true} title="Output" />
            </div>
        </div>
    )
}
