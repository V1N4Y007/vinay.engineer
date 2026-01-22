import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="py-8 border-t border-white/10 bg-black/50 backdrop-blur-sm mt-20">
            <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-sm text-secondary font-mono">
                    &copy; {new Date().getFullYear()} Vinay Trivedi. Securing the digital world.
                </p>
                <div className="flex gap-6">
                    <a href="#" className="text-secondary hover:text-green text-xl transition-colors"><FaGithub /></a>
                    <a href="#" className="text-secondary hover:text-blue text-xl transition-colors"><FaLinkedin /></a>
                    <a href="#" className="text-secondary hover:text-red text-xl transition-colors"><FaEnvelope /></a>
                </div>
            </div>
        </footer>
    );
}
