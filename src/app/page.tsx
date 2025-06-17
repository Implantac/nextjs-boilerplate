import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart3, CircleDollarSign, ShoppingCart, Users } from "lucide-react"

const stats = [
  {
    title: "Vendas do Mês",
    value: "R$ 45.231,89",
    icon: CircleDollarSign,
    description: "+20.1% em relação ao mês anterior",
    trend: "positive"
  },
  {
    title: "Novos Pedidos",
    value: "124",
    icon: ShoppingCart,
    description: "+15 pedidos hoje",
    trend: "positive"
  },
  {
    title: "Clientes Ativos",
    value: "573",
    icon: Users,
    description: "+5 novos clientes esta semana",
    trend: "positive"
  },
  {
    title: "Taxa de Conversão",
    value: "3.9%",
    icon: BarChart3,
    description: "+2.4% em relação à média",
    trend: "positive"
  },
]

export default function Home() {
  return (
    <div className="space-y-8">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <Card key={stat.title} className="metric-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-foreground/70">
                  {stat.title}
                </CardTitle>
                <Icon className="h-4 w-4 text-accent" />
              </CardHeader>
              <CardContent>
                <div className="metric-value">{stat.value}</div>
                <p className={`text-xs ${stat.trend === 'positive' ? 'text-accent' : 'text-danger'}`}>
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="bg-secondary">
          <CardHeader>
            <CardTitle className="text-foreground">Atividades Recentes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="activity-item">
                <div className="border-l-4 border-accent pl-4">
                  <p className="text-sm font-medium text-foreground">Novo pedido registrado</p>
                  <p className="text-xs text-foreground/70">Há 5 minutos</p>
                </div>
              </div>
              <div className="activity-item">
                <div className="border-l-4 border-accent/70 pl-4">
                  <p className="text-sm font-medium text-foreground">Pagamento recebido</p>
                  <p className="text-xs text-foreground/70">Há 15 minutos</p>
                </div>
              </div>
              <div className="activity-item">
                <div className="border-l-4 border-accent/50 pl-4">
                  <p className="text-sm font-medium text-foreground">Estoque atualizado</p>
                  <p className="text-xs text-foreground/70">Há 30 minutos</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-secondary">
          <CardHeader>
            <CardTitle className="text-foreground">Tarefas Pendentes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="task-item">
                <input 
                  type="checkbox" 
                  className="h-4 w-4 rounded border-accent bg-secondary text-accent focus:ring-accent"
                />
                <span className="text-sm text-foreground">Aprovar pedidos de compra</span>
              </div>
              <div className="task-item">
                <input 
                  type="checkbox" 
                  className="h-4 w-4 rounded border-accent bg-secondary text-accent focus:ring-accent"
                />
                <span className="text-sm text-foreground">Revisar relatório mensal</span>
              </div>
              <div className="task-item">
                <input 
                  type="checkbox" 
                  className="h-4 w-4 rounded border-accent bg-secondary text-accent focus:ring-accent"
                />
                <span className="text-sm text-foreground">Atualizar cadastro de fornecedores</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
