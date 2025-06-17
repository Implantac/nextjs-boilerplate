import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ShoppingBag, Users, TrendingUp, Receipt, FileText, UserPlus, BarChart } from "lucide-react"

export default function VendasPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Vendas</h1>
        <p className="text-muted-foreground">
          Gestão de vendas e faturamento
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Vendas do Mês
            </CardTitle>
            <ShoppingBag className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ 125.430,00</div>
            <p className="text-xs text-muted-foreground">
              +12% em relação ao mês anterior
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Novos Clientes
            </CardTitle>
            <Users className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">34</div>
            <p className="text-xs text-muted-foreground">
              Este mês
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Taxa de Conversão
            </CardTitle>
            <TrendingUp className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3.2%</div>
            <p className="text-xs text-muted-foreground">
              +0.5% em relação à média
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Notas Fiscais
            </CardTitle>
            <Receipt className="h-4 w-4 text-violet-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">285</div>
            <p className="text-xs text-muted-foreground">
              Emitidas este mês
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Ações Rápidas</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-2">
            <Button className="w-full justify-start">
              <ShoppingBag className="mr-2 h-4 w-4" />
              Nova Venda
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <UserPlus className="mr-2 h-4 w-4" />
              Cadastrar Cliente
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <FileText className="mr-2 h-4 w-4" />
              Emitir Nota Fiscal
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <BarChart className="mr-2 h-4 w-4" />
              Relatório de Vendas
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Últimas Vendas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Cliente A</p>
                  <p className="text-sm text-muted-foreground">Pedido #12345</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">R$ 2.850,00</p>
                  <p className="text-sm text-green-500">Concluída</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Cliente B</p>
                  <p className="text-sm text-muted-foreground">Pedido #12344</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">R$ 1.250,00</p>
                  <p className="text-sm text-orange-500">Em aprovação</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Cliente C</p>
                  <p className="text-sm text-muted-foreground">Pedido #12343</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">R$ 4.520,00</p>
                  <p className="text-sm text-blue-500">Em separação</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
