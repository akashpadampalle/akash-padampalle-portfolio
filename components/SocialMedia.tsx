import { FaLinkedinIn, FaGithubAlt } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { SiLeetcode } from "react-icons/si";

const socialMedias = [
    {
        name: "Linked-in",
        link: "https://www.linkedin.com/in/akash-padampalle/",
        icon: FaLinkedinIn
    },
    {
        name: "Github",
        link: "https://github.com/akashpadampalle/",
        icon: FaGithubAlt 
    },
    {
        name: "Email",
        link: "mailto:akashpadampalle780@gmail.com",
        icon: MdEmail 
    },
    {
        name: "Leetcode",
        link: "https://leetcode.com/Padampalle/",
        icon: SiLeetcode 
    }
]

const SocialMedia = () => {

    return (
        <div className="px-10 py-32 text-center">
            <h2 className="text-3xl mb-8">Social</h2>
            <div className="flex justify-center gap-8">
                {socialMedias.map((item) => (
                    <a
                        key={item.name}
                        href={item.link}
                        target="_blank"
                        className={`border border-purple-500 text-purple-500 p-4 rounded-full hover:bg-purple-500 hover:border-purbg-purple-500 hover:text-white transition-all duration-500`}
                    >
                        {<item.icon className="h-8 w-8" />}
                    </a>
                ))}
            </div>
        </div>
    )
}

export default SocialMedia