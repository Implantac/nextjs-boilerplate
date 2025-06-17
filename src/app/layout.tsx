import { Header } from "@/components/header"
import { Sidebar } from "@/components/sidebar"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: 'Dashboard ERP',
  description: 'Sistema de gestão empresarial moderno e eficiente',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={inter.className}>
      <body className="flex h-screen bg-background">
        <Sidebar />
        <div className="flex flex-col flex-1">
          <Header />
          <main className="flex-1 overflow-y-auto p-6 bg-secondary/20">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
