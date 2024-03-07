export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto max-w-screen-md flex justify-center">
                <p className="text-sm">
                    &copy; {new Date().getFullYear()} LMU Developers. All rights reserved.
                </p>
            </div>
        </footer>
    );
};
