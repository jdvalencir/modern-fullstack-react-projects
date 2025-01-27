import { ModeToggle } from "./ModeToggle";

export function NavBar() {
    return (
        <nav className="w-full relative top-0 shadow-md">
            <div className="h-[10vh] flex justify-between items-center px-5 lg:px-20 border-b">
                <ModeToggle />

            </div>
        </nav>
    );
}