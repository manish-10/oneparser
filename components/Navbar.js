import Link from 'next/link'
export const Navbar = ({HOST}) => {
    return (
        <div>
            <div className="text-center ">
                <div className="text-xl bg-gradient-to-r from-green-400 to-blue-500 py-4 px-4 font-bold text-black rounded-b-xl shadow ">
                    <Link href="/" as={HOST} >OneParser</Link>
                </div>
               
            </div>
        </div>
    )
}

export async function getStaticProps() {
    const HOST = process.env.HOST
    return {
        props: {HOST}
    }
}