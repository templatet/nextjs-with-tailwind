export default function Header() {
    return (
        <div className="w-full flex items-center justify-between">
            <div className="flex items-center space-x-3">
                <i className="text-blue-400 fal fa-brush fa-2x" />
                <h1 className="font-semibold text-2xl text-white">Next.js with TailwindCSS</h1>
            </div>
            <a target="_blank" href="https://github.com/templatet">
                <i className="fab fa-github fa-2x text-blue-400 hover:text-white transition-all" />
            </a>
        </div>
    );
};