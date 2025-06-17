import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Calculator, BarChart, ClipboardCheck, BookOpen } from "lucide-react"

export default function ContabilidadePage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Contabilidade</h1>
        <p className="text-muted-foreground">
          Gestão contábil e fiscal da empresa
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Lançamentos do Mês
            </CardTitle>
            <BookOpen className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1.248</div>
            <p className="text-xs text-muted-foreground">
              +123 novos lançamentos
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Obrigações Fiscais
            </CardTitle>
            <ClipboardCheck className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">15</div>
            <p className="text-xs text-muted-foreground">
              3 pendentes para este mês
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total de Ativos
            </CardTitle>
            <BarChart className="h-4 w-4 text-violet-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ 1.250.890,00</div>
            <p className="text-xs text-muted-foreground">
              +5% em relação ao mês anterior
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Índice de Liquidez
            </CardTitle>
            <Calculator className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2.4</div>
            <p className="text-xs text-muted-foreground">
              Índice saudável {'>'}2.0
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
              <FileText className="mr-2 h-4 w-4" />
              Novo Lançamento Contábil
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <BookOpen className="mr-2 h-4 w-4" />
              Plano de Contas
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <ClipboardCheck className="mr-2 h-4 w-4" />
              Obrigações Fiscais
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <BarChart className="mr-2 h-4 w-4" />
              Relatórios Contábeis
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Próximas Obrigações</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">DARF - IRPJ</p>
                  <p className="text-sm text-muted-foreground">Vence em 5 dias</p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-red-500">R$ 12.450,00</p>
                  <p className="text-sm text-muted-foreground">Período: 03/2024</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">GISS</p>
                  <p className="text-sm text-muted-foreground">Vence em 8 dias</p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-red-500">R$ 3.850,00</p>
                  <p className="text-sm text-muted-foreground">Período: 03/2024</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">EFD Contribuições</p>
                  <p className="text-sm text-muted-foreground">Vence em 15 dias</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">Declaração</p>
                  <p className="text-sm text-muted-foreground">Período: 03/2024</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
