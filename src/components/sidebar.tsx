"use client"

"use client"

import Link from "next/link"
import { FaBuilding, FaShoppingCart, FaUsers, FaBoxes, FaTruck, FaFileInvoiceDollar, FaUserTie, FaChartBar, FaCogs, FaTasks } from "react-icons/fa"

export function Sidebar() {
  return (
    <aside className="w-64 bg-gray-900 text-white h-full p-4">
      <nav className="space-y-2">
        <Link href="/comercial" className="flex items-center p-2 hover:bg-gray-700 rounded">
          <FaBuilding className="mr-2" /> Comercial
        </Link>
        <Link href="/vendas" className="flex items-center p-2 hover:bg-gray-700 rounded">
          <FaShoppingCart className="mr-2" /> Vendas
        </Link>
        <Link href="/crm" className="flex items-center p-2 hover:bg-gray-700 rounded">
          <FaUsers className="mr-2" /> CRM
        </Link>
        <Link href="/estoque" className="flex items-center p-2 hover:bg-gray-700 rounded">
          <FaBoxes className="mr-2" /> Estoque
        </Link>
        <Link href="/compras" className="flex items-center p-2 hover:bg-gray-700 rounded">
          <FaTruck className="mr-2" /> Compras
        </Link>
        <Link href="/faturamento" className="flex items-center p-2 hover:bg-gray-700 rounded">
          <FaFileInvoiceDollar className="mr-2" /> Faturamento
        </Link>
        <Link href="/rh" className="flex items-center p-2 hover:bg-gray-700 rounded">
          <FaUserTie className="mr-2" /> RH
        </Link>
        <Link href="/bi" className="flex items-center p-2 hover:bg-gray-700 rounded">
          <FaChartBar className="mr-2" /> BI
        </Link>
        <Link href="/processos" className="flex items-center p-2 hover:bg-gray-700 rounded">
          <FaTasks className="mr-2" /> Processos
        </Link>
        <Link href="/configuracoes" className="flex items-center p-2 hover:bg-gray-700 rounded">
          <FaCogs className="mr-2" /> Configurações
        </Link>
      </nav>
    </aside>
  )
}
