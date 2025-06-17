import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  Settings, 
  Users, 
  Building2, 
  Shield, 
  Globe,
  Database,
  Bell,
  Mail
} from "lucide-react"

export default function ConfiguracoesPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Configurações</h1>
        <p className="text-muted-foreground">
          Administração e configurações do sistema
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-4">
              <Users className="h-6 w-6 text-blue-500" />
              <div>
                <CardTitle>Usuários</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Gerenciar usuários e permissões
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Button className="w-full justify-start" variant="outline">
                Listar Usuários
              </Button>
              <Button className="w-full justify-start" variant="outline">
                Grupos e Permissões
              </Button>
              <Button className="w-full justify-start" variant="outline">
                Logs de Acesso
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-4">
              <Building2 className="h-6 w-6 text-green-500" />
              <div>
                <CardTitle>Empresa</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Dados da empresa e filiais
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Button className="w-full justify-start" variant="outline">
                Dados Cadastrais
              </Button>
              <Button className="w-full justify-start" variant="outline">
                Gerenciar Filiais
              </Button>
              <Button className="w-full justify-start" variant="outline">
                Configurações Fiscais
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-4">
              <Shield className="h-6 w-6 text-orange-500" />
              <div>
                <CardTitle>Segurança</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Configurações de segurança
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Button className="w-full justify-start" variant="outline">
                Política de Senhas
              </Button>
              <Button className="w-full justify-start" variant="outline">
                Autenticação 2FA
              </Button>
              <Button className="w-full justify-start" variant="outline">
                Backup e Restauração
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-4">
              <Globe className="h-6 w-6 text-violet-500" />
              <div>
                <CardTitle>Localização</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Configurações regionais
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Button className="w-full justify-start" variant="outline">
                Idioma e Região
              </Button>
              <Button className="w-full justify-start" variant="outline">
                Fuso Horário
              </Button>
              <Button className="w-full justify-start" variant="outline">
                Formatos de Data/Hora
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-4">
              <Database className="h-6 w-6 text-red-500" />
              <div>
                <CardTitle>Integrações</CardTitle>
                <p className="text-sm text-muted-foreground">
                  APIs e serviços externos
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Button className="w-full justify-start" variant="outline">
                APIs Disponíveis
              </Button>
              <Button className="w-full justify-start" variant="outline">
                Webhooks
              </Button>
              <Button className="w-full justify-start" variant="outline">
                Logs de Integração
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-4">
              <Bell className="h-6 w-6 text-yellow-500" />
              <div>
                <CardTitle>Notificações</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Configurar alertas
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Button className="w-full justify-start" variant="outline">
                Alertas do Sistema
              </Button>
              <Button className="w-full justify-start" variant="outline">
                Notificações Email
              </Button>
              <Button className="w-full justify-start" variant="outline">
                Preferências
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Informações do Sistema</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b pb-2">
              <p className="font-medium">Versão do Sistema</p>
              <p className="text-muted-foreground">2.5.0</p>
            </div>
            <div className="flex items-center justify-between border-b pb-2">
              <p className="font-medium">Última Atualização</p>
              <p className="text-muted-foreground">15/03/2024</p>
            </div>
            <div className="flex items-center justify-between border-b pb-2">
              <p className="font-medium">Licença</p>
              <p className="text-green-500">Ativa</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="font-medium">Suporte</p>
              <Button variant="link" className="h-auto p-0">
                Contatar Suporte
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
