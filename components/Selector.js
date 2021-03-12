import { useEffect } from "react";
export const Selector = ({
    inputFormat,
    setInputFormat,
    supportedInputLanguages,
    supportedInputLanguagesDescripition,
    outputFormat,
    renderHTML,
    sType,
}) => {
    const handleSelectorChange = (e) => {
        setInputFormat(e.target.value);
    }
    return (<>
        {(!renderHTML) ? <select
            className="border rounded shadow px-2 cursor-pointer dark:bg-gray-600"
            value={inputFormat}
            onChange={(e) => handleSelectorChange(e)}
        >{supportedInputLanguages
            .filter((lang) => lang !== outputFormat)
            .map((lang, index) => (
                <option key={lang} value={lang}>
                    {lang}
                </option>
            ))}
        </select> : <select
            className="border rounded px-2 dark:bg-gray-500 dark:text-gray-700 cursor-not-allowed"
            value='html5'
            disabled
        >

                {supportedInputLanguages
                    .filter((lang) => lang !== outputFormat)
                    .map((lang, index) => (
                        <option key={lang} value={lang}>
                            {lang}
                        </option>
                    ))}
            </select>}
    </>
    );
}
  