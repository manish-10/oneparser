import Link from 'next/link'
const Navbar=()=>{
    return (
        <div>
            <div className="container text-center">
            <div className="text-xl bg-gradient-to-r from-green-400 to-blue-500 py-4 px-4 font-bold text-black hover:text-white">
                <Link href="/" as="https://oneparser-1.ayushk1804.repl.co/">OneParser</Link>
            </div>            
        </div>
        </div>
    )
}
export default Navbar