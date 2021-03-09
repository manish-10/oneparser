import {useState} from 'react'
import { Textarea } from '../components/Textarea'

export default function Home() {
  const supportedLanguages=["a","2","3"];
  const [value, setValue] = useState(supportedLanguages[0]);
  return (
    

  <div className="grid grid-cols-12 gap-7 p-7">
    
    
    <div className="col-span-6 text-center">
    <select className="border px-6 " value={value} onChange={(e)=>setValue(e.target.value)}>
      {supportedLanguages.map(lang=>(<option value={lang}>{lang}</option>))}
    </select>
    <Textarea disabled={false} title="Input"/>
    </div>
    <div className="col-span-6 text-center">
    <select className="border px-6 " value={value} onChange={(e)=>setValue(e.target.value)}>
    {supportedLanguages.map(lang=>(<option value={lang}>{lang}</option>))}
    </select>
    <Textarea disabled={true} title="Output"/>
    </div>
  </div>
    
  )
}
