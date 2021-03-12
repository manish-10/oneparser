export const Textarea = ({ disabled, title, data, setInputData, lang, renderHTML }) => {

	return (
		<>
			{(!renderHTML) ? <div className="box border rounded flex flex-col shadow bg-white min-h-screen mt-7 container max-h-screen ">
				<div className="box__title bg-grey-lighter px-3 py-2 border-b">
					<h3 className="text-sm text-grey-darker font-medium">
						{title}
					</h3>
				</div>
				<textarea placeholder={`Expected data of ${lang} type`} className="text-grey-darkest flex-1 p-2 m-1 bg-transparent overflow-y-visible max-h-screen" name={title} disabled={disabled} value={data} onChange={(e) => {
					if (disabled === false) {
						setInputData(e.target.value);
					}
				}} />
			</div> : <div className="box border rounded flex flex-col shadow bg-white min-h-screen mt-7 container max-h-screen ">
					<div className="box__title bg-grey-lighter px-3 py-2 border-b">
						<h3 className="text-sm text-grey-darker font-medium">
							{title}
						</h3>
					</div>
					<div className="text-grey-darkest flex-1 p-2 m-1 bg-transparent overflow-y-scroll max-h-screen text-left" name={title} disabled={disabled} dangerouslySetInnerHTML={{ __html: data}}></div>
				</div>}
		</>
	)
}
