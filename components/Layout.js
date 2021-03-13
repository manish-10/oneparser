import Head from "next/head"
import { Navbar } from "./Navbar"
export const Layout = ({ children }) => {
	const defaultTitle = "OneParser"
	const defaultDescription = "An all in one document parsing and rendering solution" 
	return (
		<div className="place-items-center dark:bg-gray-800 shadow-inner shadow">
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta charSet="utf-8" />
				<meta name="description" content={defaultDescription} /><meta property="og:title" content={defaultTitle} key="ogtitle" />
				<meta property="og:description" content={defaultDescription} key="ogdesc" />
				<title>OneParser</title>
			</Head>
			<Navbar />
			<main>
				{children}
			</main>
		</div>
	)
}
