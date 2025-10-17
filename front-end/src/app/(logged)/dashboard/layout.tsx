import { AppSidebar } from "@/components/ui/appSidebar"
import { SidebarProvider } from "@/components/ui/sidebar"
import { ReactNode } from "react"

type Props = {
    children: ReactNode
}

export default function DashboardLayout ({children}: Props) {
    return (
        <div>
            <SidebarProvider defaultOpen={true}>
                
                    <AppSidebar/>
                    {children}
            
            </SidebarProvider>
        </div>
    )
}