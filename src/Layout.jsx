import { AppSidebar } from './components/AppSidebar'
import { NavBar } from './components/NavBar'
import { Separator } from './components/ui/separator';
import { SidebarProvider, SidebarTrigger, SidebarInset } from './components/ui/sidebar'

export function Layout({ children }) {
    return (
        <div className="h-screen">
            {/* Navbar siempre arriba */}
            {/* Contenido principal con Sidebar */}
            <SidebarProvider>
                {/* Sidebar */}
                <SidebarInset>
                    <div className="flex flex-row justify-start">
                        <AppSidebar />
                        {/* Contenido */}
                        <div className='w-full'>
                            <header className="flex h-16 shrink-0 items-center gap-2 border-b">
                                <div className="flex items-center gap-2 px-3">

                                    <SidebarTrigger />
                                    <Separator orientation="vertical" className="mr-2 h-4" />
                                    <NavBar />

                                </div>
                            </header>
                            <main className="flex-1 p-1 ">
                                {children}
                            </main>
                        </div>
                    </div>
                </SidebarInset>
            </SidebarProvider>
        </div>
    );
}