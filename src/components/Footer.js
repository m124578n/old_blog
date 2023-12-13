import { VscGithubInverted } from "react-icons/vsc";
import { AiFillLinkedin } from "react-icons/ai";
import { BsMedium } from "react-icons/bs";


const Footer = () => {
    return (
        <footer className="footer">
            <a href="https://github.com/m124578n" className="github" alt="">
                <VscGithubInverted/>
            </a>
            <a href="https://www.linkedin.com/in/john19980215/" className="linkedin" alt="">
                <AiFillLinkedin/>
            </a>
            <a href="https://medium.com/@m23568n" className="medium" alt="">
                <BsMedium/>
            </a>
        </footer>
    )
}

export default Footer
