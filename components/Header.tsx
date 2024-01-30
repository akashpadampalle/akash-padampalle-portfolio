import Link from "next/link"

const Header = () => {
  return (
    <div className="px-10 py-4 mb-4 text-right">
      <Link href="/contact" className="text-purple-600 border-2 rounded-full border-purple-500 px-4 py-2 hover:bg-purple-500 hover:text-white transition-all duration-500 ">
        Contact Me
      </Link>
    </div>
  )
}

export default Header