import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  ClipboardList, 
  CheckCircle, 
  Clock, 
  AlertCircle, 
  Play,
  Plus,
  Settings,
  FileText
} from "lucide-react"

export default function ProcessosPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Automação de Processos</h1>
        <p className="text-muted-foreground">
          Gestão e automação de workflows
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Processos Ativos
            </CardTitle>
            <Play className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">
              Em 6 departamentos
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Tarefas Concluídas
            </CardTitle>
            <CheckCircle className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1.284</div>
            <p className="text-xs text-muted-foreground">
              Este mês
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Tempo Médio
            </CardTitle>
            <Clock className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2.5h</div>
            <p className="text-xs text-muted-foreground">
              Por tarefa
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Pendências
            </CardTitle>
            <AlertCircle className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">
              Necessitam atenção
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
              <Plus className="mr-2 h-4 w-4" />
              Novo Processo
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <Settings className="mr-2 h-4 w-4" />
              Configurar Workflow
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <FileText className="mr-2 h-4 w-4" />
              Relatórios
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <ClipboardList className="mr-2 h-4 w-4" />
              Lista de Tarefas
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Processos em Andamento</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Aprovação de Despesas</p>
                  <p className="text-sm text-muted-foreground">Financeiro</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-orange-500">3 pendentes</p>
                  <p className="text-sm text-muted-foreground">2h restantes</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Onboarding de Funcionários</p>
                  <p className="text-sm text-muted-foreground">RH</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-green-500">Em dia</p>
                  <p className="text-sm text-muted-foreground">5 ativos</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Validação de Contratos</p>
                  <p className="text-sm text-muted-foreground">Jurídico</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-red-500">Atrasado</p>
                  <p className="text-sm text-muted-foreground">1d em atraso</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Status dos Workflows</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium">Aguardando Início</p>
                <span className="text-sm text-muted-foreground">12</span>
              </div>
              <div className="h-2 w-full rounded-full bg-gray-100">
                <div className="h-2 w-1/4 rounded-full bg-blue-500" />
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium">Em Andamento</p>
                <span className="text-sm text-muted-foreground">28</span>
              </div>
              <div className="h-2 w-full rounded-full bg-gray-100">
                <div className="h-2 w-3/5 rounded-full bg-orange-500" />
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium">Concluídos</p>
                <span className="text-sm text-muted-foreground">45</span>
              </div>
              <div className="h-2 w-full rounded-full bg-gray-100">
                <div className="h-2 w-4/5 rounded-full bg-green-500" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
