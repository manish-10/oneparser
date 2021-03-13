import Link from 'next/link'
import { useTheme } from 'next-themes'
export const Navbar = ({ HOST }) => {
	const { theme, setTheme } = useTheme('dark')
	return (
		<div>
			<div className="text-center dark:bg-gray-900">
				<div className="text-xl bg-gradient-to-r from-green-400 via-green-300 to-green-400 py-4 px-4 font-bold text-black rounded-b-xl shadow dark:bg-gradient-to-r dark:from-gray-800 dark:to-gray-800 dark:text-gray-50">
					<Link href="/" as={HOST} >OneParser</Link>
					<button
						aria-label="Toggle Dark Mode"
						type="button"
						className="float-right m-0 rounded focus:outline-none"
						onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
					>{theme === 'dark' ? (
						<svg className="w-8 h-8 md:w-10 md:h-10" xmlns="http://www.w3.org/2000/svg" fill="#9ea6b0" viewBox="0 0 24 24" stroke="#213145">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={1.5}
								d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
							/>
						</svg>
					) : (
							<svg className="w-8 h-8 md:w-10 md:h-10" xmlns="http://www.w3.org/2000/svg" fill="yellow" viewBox="0 0 24 24" stroke="orange">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={1.7}
									d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
								/>
							</svg>
						)}</button>
				</div>
			</div>
		</div>
	)
}

export async function getStaticProps() {
	const HOST = process.env.HOST
	return {
		props: { HOST }
	}
}