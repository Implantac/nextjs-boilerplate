import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Package, AlertTriangle, ArrowDownUp, Warehouse, BarChart2 } from "lucide-react"

export default function EstoquePage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Estoque</h1>
        <p className="text-muted-foreground">
          Gestão de produtos e controle de estoque
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total de Produtos
            </CardTitle>
            <Package className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2.456</div>
            <p className="text-xs text-muted-foreground">
              Em 5 categorias
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Produtos em Baixa
            </CardTitle>
            <AlertTriangle className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">18</div>
            <p className="text-xs text-muted-foreground">
              Abaixo do mínimo
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Movimentações
            </CardTitle>
            <ArrowDownUp className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">342</div>
            <p className="text-xs text-muted-foreground">
              Últimos 30 dias
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Valor em Estoque
            </CardTitle>
            <BarChart2 className="h-4 w-4 text-violet-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ 458.920,00</div>
            <p className="text-xs text-muted-foreground">
              Em produtos
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
              <Package className="mr-2 h-4 w-4" />
              Entrada de Produtos
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <ArrowDownUp className="mr-2 h-4 w-4" />
              Movimentação Manual
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <Warehouse className="mr-2 h-4 w-4" />
              Inventário
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <BarChart2 className="mr-2 h-4 w-4" />
              Relatórios
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Produtos em Baixa</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Papel A4</p>
                  <p className="text-sm text-muted-foreground">Código: PRD001</p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-red-500">2 unid.</p>
                  <p className="text-sm text-muted-foreground">Mín: 10 unid.</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Toner Impressora</p>
                  <p className="text-sm text-muted-foreground">Código: PRD045</p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-red-500">1 unid.</p>
                  <p className="text-sm text-muted-foreground">Mín: 5 unid.</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Mouse USB</p>
                  <p className="text-sm text-muted-foreground">Código: PRD123</p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-orange-500">3 unid.</p>
                  <p className="text-sm text-muted-foreground">Mín: 8 unid.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
