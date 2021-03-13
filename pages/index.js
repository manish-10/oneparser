import { useState, useEffect } from "react";
import { Textarea } from "../components/Textarea";
import { Selector } from "../components/Selector";
import { defaultInput } from '../data/defaultInput';
import {
	supportedInputLanguages,
	supportedInputLanguagesDescription,
	supportedOutputLanguages,
	supportedOutputLanguagesDescription,
} from "../data/Languages";
import { useTheme } from 'next-themes'


export default function Home({ API_URL }) {
	const [inputFormat, setInputFormat] = useState(supportedInputLanguages[0]);
	const [outputFormat, setOutputFormat] = useState(supportedOutputLanguages[0]);
	const [cmd, setCmd] = useState("pandoc -f commonmark stext -t S5 -o otext");
	const [inputData, setInputData] = useState(defaultInput);
	const [outputData, setOutputData] = useState("");
	const [renderHTML, setRenderHTML] = useState(false);
	const { theme, setTheme } = useTheme()

	const handleRenderHTML = () => {
		if (renderHTML === true) { setCmd(`pandoc -f ${inputFormat} stext -t html -o otext`) };
		setRenderHTML(!renderHTML);
	}
	//Server fetching opertation
	const apiData = {
		inputData: inputData,
		cmd: cmd,
	};

	const fetchOptions = {
		method: "POST",
		headers: { "content-type": "application/json" },
		body: JSON.stringify(apiData),
	};

	const getOutput = async () => {
		await fetch(API_URL, fetchOptions)
			.then((response) => response.json())
			.then((data) => setOutputData(data));
	};

	useEffect(() => {
		setCmd(`pandoc -f ${inputFormat} stext -t ${outputFormat} -o otext`);
	}, [inputFormat, outputFormat, renderHTML]);
	// Server fetch ends

	return (
		<>
			<div className="grid grid-cols-12 gap-7 p-7 dark:bg-gray-900 w-full dark:text-gray-100">
				<div className="col-span-full md:col-span-6 text-center place-items-center" style={{height:'80vh'}}>
					<Selector
						inputFormat={inputFormat}
						setInputFormat={setInputFormat}
						supportedInputLanguages={supportedInputLanguages}
						supportedInputLanguagesDescription={
							supportedInputLanguagesDescription
						}
						outputFormat={outputFormat}
						renderHTML={false}
						sType="Input"
					/>
					<button className="md:float-right shadow sm:items-center  focus:outline-none mt-1 px-1 rounded-md border border-5 hover:bg-gray-100 items-center truncate dark:hover:bg-transparent" onClick={async () => await getOutput()}>Generate Output</button>
					<Textarea
						disabled={false}
						title="Input"
						data={inputData}
						setInputData={setInputData}
						lang={inputFormat}
						renderHTML={false}
					/>
				</div>
				<div className="col-span-full md:col-span-6 text-center place-items-center mt-12 md:mt-0">

					<input type="checkbox" className="float-left ml-5 mt-2 shadow-inner cursor-pointer" value={renderHTML} onClick={() => handleRenderHTML()} defaultChecked={renderHTML} />

					<span className="float-left ml-2 cursor-default">Render HTML</span>
					<Selector
						inputFormat={outputFormat}
						setInputFormat={setOutputFormat}
						supportedInputLanguages={supportedOutputLanguages}
						outputFormat={inputFormat}
						supportedOutputLanguagesDescription={
							supportedOutputLanguagesDescription
						}
						renderHTML={renderHTML}
						sType="Output"
					/>
					<Textarea
						disabled={true}
						title="Output"
						data={outputData}
						setInputData={setOutputData}
						lang={outputFormat}
						renderHTML={renderHTML}
					/>
				</div>
			</div>
		</>
	);
}

export async function getStaticProps() {
	const API_URL = `${process.env.API_HOST}/api/pandoc`;
	return {
		props: { API_URL },
	};
}