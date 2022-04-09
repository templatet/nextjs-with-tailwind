export default function Footer() {
    return (
        <div className="w-full flex items-center justify-between">
            <h1 className="font-light text-white">Designed with <i className="fal fa-heart mx-1 text-blue-400" /> by Templatet</h1>
            <a target="_blank" href="https://github.com/templatet/nextjs-with-tailwind">
                <h1 className="font-light text-white hover:text-blue-400 transition-all cursor-pointer">This is an open source project.</h1>
            </a>
        </div>
    );
};
