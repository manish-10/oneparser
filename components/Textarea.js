
export const Textarea = ({ disabled, title }) => {

    return (
        <div className="box border rounded flex flex-col shadow bg-white min-h-screen mt-7 ">
            <div className="box__title bg-grey-lighter px-3 py-2 border-b"><h3 className="text-sm text-grey-darker font-medium">{title}</h3></div>
            <textarea placeholder="hey" className="text-grey-darkest flex-1 p-2 m-1 bg-transparent overflow-y-visible max-h-screen" name={title} disabled={disabled}>hello world</textarea>
        </div>
    )
}
