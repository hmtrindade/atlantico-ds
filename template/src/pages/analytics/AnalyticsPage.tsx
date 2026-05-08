import { BarChart3 } from 'lucide-react'
import { AtlButton, AtlCard, AtlCardHeader, AtlCardContent } from '@ds'
import { PageHeader } from '@/components/shared/PageHeader'
import { EmptyState } from '@/components/shared/EmptyState'

export function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Analytics"
        description="Análise detalhada de desempenho e tendências"
        actions={
          <AtlButton typeButton="standard" style="outline" size="small">
            Últimos 30 dias
          </AtlButton>
        }
      />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <AtlCard className="md:col-span-2">
          <AtlCardHeader headline="Receita Mensal" />
          <AtlCardContent>
            <EmptyState
              icon={BarChart3}
              title="Gráficos em breve"
              description="Integre uma biblioteca de charts como Recharts ou Chart.js para exibir os dados."
            />
          </AtlCardContent>
        </AtlCard>

        <AtlCard>
          <AtlCardHeader headline="Distribuição por Canal" />
          <AtlCardContent>
            <EmptyState
              icon={BarChart3}
              title="Aguardando dados"
              description="Conecte sua fonte de dados para visualizar."
            />
          </AtlCardContent>
        </AtlCard>

        <AtlCard>
          <AtlCardHeader headline="Retenção de Clientes" />
          <AtlCardContent>
            <EmptyState
              icon={BarChart3}
              title="Aguardando dados"
              description="Conecte sua fonte de dados para visualizar."
            />
          </AtlCardContent>
        </AtlCard>
      </div>
    </div>
  )
}
