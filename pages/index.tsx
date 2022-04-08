export default function Index() {
    return (
        <div className="h-96 flex items-center justify-center">
            <div>
                <h1 className="font-bold text-white text-6xl text-center">Templatet</h1>
                <p className="mt-3 font-light text-center mx-auto text-zinc-300">Templatet is an open source project with templates that you can use.</p>
                <a target="_blank" href="https://github.com/templatet" className="bg-blue-400 hover:bg-white shadow-blue-800/20 hover:shadow-white/20 shadow-xl py-3 px-6 mx-auto mt-5 w-36 flex items-center justify-center rounded-lg text-zinc-900 transition-all">
                    <i className="mr-1.5 fab fa-github" /> GitHub
                </a>
            </div>
        </div>
    );
};
