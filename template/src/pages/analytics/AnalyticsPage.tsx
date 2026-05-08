import { BarChart3 } from 'lucide-react'
import { PageHeader } from '@/components/shared/PageHeader'
import { EmptyState } from '@/components/shared/EmptyState'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

export function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Analytics"
        description="Análise detalhada de desempenho e tendências"
        actions={
          <Button variant="outline" size="sm">
            Últimos 30 dias
          </Button>
        }
      />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Receita Mensal</CardTitle>
          </CardHeader>
          <CardContent>
            <EmptyState
              icon={BarChart3}
              title="Gráficos em breve"
              description="Integre uma biblioteca de charts como Recharts ou Chart.js para exibir os dados."
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader><CardTitle>Distribuição por Canal</CardTitle></CardHeader>
          <CardContent>
            <EmptyState
              icon={BarChart3}
              title="Aguardando dados"
              description="Conecte sua fonte de dados para visualizar."
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader><CardTitle>Retenção de Clientes</CardTitle></CardHeader>
          <CardContent>
            <EmptyState
              icon={BarChart3}
              title="Aguardando dados"
              description="Conecte sua fonte de dados para visualizar."
            />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
