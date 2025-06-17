import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CircleDollarSign, ArrowUpCircle, ArrowDownCircle, LineChart, Wallet } from "lucide-react"

export default function FinanceiroPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Gestão Financeira</h1>
        <p className="text-muted-foreground">
          Gerencie contas a pagar, receber e fluxo de caixa
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Contas a Receber
            </CardTitle>
            <ArrowUpCircle className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ 28.650,00</div>
            <p className="text-xs text-muted-foreground">
              12 títulos pendentes
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Contas a Pagar
            </CardTitle>
            <ArrowDownCircle className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ 15.420,00</div>
            <p className="text-xs text-muted-foreground">
              8 títulos pendentes
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Saldo em Caixa
            </CardTitle>
            <Wallet className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ 42.890,00</div>
            <p className="text-xs text-muted-foreground">
              Atualizado há 5 minutos
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Fluxo Mensal
            </CardTitle>
            <LineChart className="h-4 w-4 text-violet-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+R$ 13.230,00</div>
            <p className="text-xs text-muted-foreground">
              +15% em relação ao mês anterior
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
              <CircleDollarSign className="mr-2 h-4 w-4" />
              Novo Lançamento
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <ArrowUpCircle className="mr-2 h-4 w-4" />
              Contas a Receber
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <ArrowDownCircle className="mr-2 h-4 w-4" />
              Contas a Pagar
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <LineChart className="mr-2 h-4 w-4" />
              Relatórios
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Próximos Vencimentos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Fornecedor ABC</p>
                  <p className="text-sm text-muted-foreground">Vence em 3 dias</p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-red-500">R$ 2.500,00</p>
                  <p className="text-sm text-muted-foreground">NF: 12345</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Cliente XYZ</p>
                  <p className="text-sm text-muted-foreground">Vence em 5 dias</p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-green-500">R$ 4.800,00</p>
                  <p className="text-sm text-muted-foreground">NF: 54321</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
