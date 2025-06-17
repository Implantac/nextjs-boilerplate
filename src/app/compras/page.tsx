import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Package, Truck, ClipboardList, Building2 } from "lucide-react"

export default function ComprasPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Compras</h1>
        <p className="text-muted-foreground">
          Gestão de compras e fornecedores
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Pedidos em Aberto
            </CardTitle>
            <ShoppingCart className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">
              5 aguardando aprovação
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Entregas Pendentes
            </CardTitle>
            <Truck className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">
              3 em atraso
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Fornecedores Ativos
            </CardTitle>
            <Building2 className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">156</div>
            <p className="text-xs text-muted-foreground">
              +3 este mês
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Cotações
            </CardTitle>
            <ClipboardList className="h-4 w-4 text-violet-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">
              Aguardando retorno
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
              <ShoppingCart className="mr-2 h-4 w-4" />
              Nova Solicitação de Compra
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <Building2 className="mr-2 h-4 w-4" />
              Cadastrar Fornecedor
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <ClipboardList className="mr-2 h-4 w-4" />
              Nova Cotação
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <Package className="mr-2 h-4 w-4" />
              Recebimento de Mercadorias
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Últimos Pedidos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Materiais de Escritório</p>
                  <p className="text-sm text-muted-foreground">Fornecedor: Papelaria ABC</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">R$ 1.250,00</p>
                  <p className="text-sm text-muted-foreground">PC: 2024/0123</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Equipamentos de TI</p>
                  <p className="text-sm text-muted-foreground">Fornecedor: Tech Solutions</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">R$ 8.500,00</p>
                  <p className="text-sm text-muted-foreground">PC: 2024/0122</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Material de Limpeza</p>
                  <p className="text-sm text-muted-foreground">Fornecedor: Clean Ltda</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">R$ 950,00</p>
                  <p className="text-sm text-muted-foreground">PC: 2024/0121</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
