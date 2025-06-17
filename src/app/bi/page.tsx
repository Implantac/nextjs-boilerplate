import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  BarChart, 
  PieChart, 
  LineChart, 
  TrendingUp, 
  Download, 
  Share2, 
  Filter,
  RefreshCcw 
} from "lucide-react"

export default function BIPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Business Intelligence</h1>
        <p className="text-muted-foreground">
          Análise de dados e indicadores
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Faturamento Total
            </CardTitle>
            <TrendingUp className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ 1.458.920</div>
            <p className="text-xs text-muted-foreground">
              +12% vs mês anterior
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Ticket Médio
            </CardTitle>
            <BarChart className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ 850</div>
            <p className="text-xs text-muted-foreground">
              +5% vs média anual
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Margem de Lucro
            </CardTitle>
            <PieChart className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">32.5%</div>
            <p className="text-xs text-muted-foreground">
              +2.1% vs meta
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              ROI Marketing
            </CardTitle>
            <LineChart className="h-4 w-4 text-violet-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">285%</div>
            <p className="text-xs text-muted-foreground">
              Últimos 30 dias
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
              <Filter className="mr-2 h-4 w-4" />
              Filtrar Dados
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Exportar Relatórios
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <Share2 className="mr-2 h-4 w-4" />
              Compartilhar Dashboard
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <RefreshCcw className="mr-2 h-4 w-4" />
              Atualizar Dados
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>KPIs por Departamento</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Vendas</p>
                  <div className="mt-1 h-2 w-32 rounded-full bg-gray-100">
                    <div className="h-2 w-24 rounded-full bg-blue-500" />
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium">85%</p>
                  <p className="text-sm text-green-500">+12%</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Marketing</p>
                  <div className="mt-1 h-2 w-32 rounded-full bg-gray-100">
                    <div className="h-2 w-28 rounded-full bg-green-500" />
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium">92%</p>
                  <p className="text-sm text-green-500">+8%</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Operações</p>
                  <div className="mt-1 h-2 w-32 rounded-full bg-gray-100">
                    <div className="h-2 w-20 rounded-full bg-orange-500" />
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium">78%</p>
                  <p className="text-sm text-orange-500">-3%</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Relatórios Disponíveis</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="flex items-center gap-4 rounded-lg border p-4">
              <BarChart className="h-6 w-6 text-blue-500" />
              <div>
                <p className="font-medium">Vendas por Região</p>
                <p className="text-sm text-muted-foreground">Atualizado hoje</p>
              </div>
            </div>
            <div className="flex items-center gap-4 rounded-lg border p-4">
              <PieChart className="h-6 w-6 text-green-500" />
              <div>
                <p className="font-medium">Mix de Produtos</p>
                <p className="text-sm text-muted-foreground">Atualizado ontem</p>
              </div>
            </div>
            <div className="flex items-center gap-4 rounded-lg border p-4">
              <LineChart className="h-6 w-6 text-violet-500" />
              <div>
                <p className="font-medium">Tendências</p>
                <p className="text-sm text-muted-foreground">Últimos 12 meses</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
