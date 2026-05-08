import {
  DollarSign,
  CreditCard,
  Users,
  TrendingUp,
  Download,
  Filter,
  ArrowUpRight,
} from 'lucide-react'
import { AtlButton, AtlBadge, AtlCard, AtlCardHeader, AtlCardContent, AtlCardFooter } from '@ds'
import type { AtlBadgeProps } from '@ds'
import { PageHeader } from '@/components/shared/PageHeader'
import { StatCard } from '@/components/shared/StatCard'
import { Avatar } from '@/components/ui/avatar'
import { formatCurrency, formatNumber } from '@/lib/utils'

type AtlBadgeType = NonNullable<AtlBadgeProps['type']>

/* ─── Mock data ─── */

const STATS = [
  {
    title: 'Receita Total',
    value: formatCurrency(284500),
    change: 12.5,
    period: 'vs. mês anterior',
    icon: DollarSign,
    iconColor: 'primary' as const,
  },
  {
    title: 'Transações',
    value: formatNumber(1847),
    change: 8.2,
    period: 'vs. mês anterior',
    icon: CreditCard,
    iconColor: 'info' as const,
  },
  {
    title: 'Clientes Ativos',
    value: formatNumber(3242),
    change: 4.7,
    period: 'vs. mês anterior',
    icon: Users,
    iconColor: 'success' as const,
  },
  {
    title: 'Taxa de Conversão',
    value: '68,4%',
    change: -2.1,
    period: 'vs. mês anterior',
    icon: TrendingUp,
    iconColor: 'warning' as const,
  },
]

type TxStatus = 'approved' | 'pending' | 'rejected' | 'processing'

const STATUS_CONFIG: Record<TxStatus, { label: string; badgeType: AtlBadgeType }> = {
  approved:   { label: 'Aprovado',   badgeType: 'success' },
  pending:    { label: 'Pendente',   badgeType: 'caution' },
  rejected:   { label: 'Rejeitado',  badgeType: 'alert' },
  processing: { label: 'Em análise', badgeType: 'processing' },
}

const TRANSACTIONS = [
  { id: '#TXN-0847', customer: 'Maria Silva',    amount: 1250.00, status: 'approved'   as TxStatus, date: '08/05/2026' },
  { id: '#TXN-0846', customer: 'João Costa',     amount: 3780.00, status: 'pending'    as TxStatus, date: '08/05/2026' },
  { id: '#TXN-0845', customer: 'Ana Pereira',    amount: 890.50,  status: 'approved'   as TxStatus, date: '07/05/2026' },
  { id: '#TXN-0844', customer: 'Carlos Mendes',  amount: 5200.00, status: 'rejected'   as TxStatus, date: '07/05/2026' },
  { id: '#TXN-0843', customer: 'Lucia Oliveira', amount: 2100.00, status: 'processing' as TxStatus, date: '07/05/2026' },
  { id: '#TXN-0842', customer: 'Pedro Alves',    amount: 640.00,  status: 'approved'   as TxStatus, date: '06/05/2026' },
]

const TOP_CUSTOMERS = [
  { name: 'Empresa Alfa Ltda',  value: 48200, percent: 17 },
  { name: 'Tech Solutions SA',  value: 36750, percent: 13 },
  { name: 'Grupo Meridian',     value: 29400, percent: 10 },
  { name: 'Nova Fintech Ltda',  value: 21100, percent: 7  },
]

/* ─── Page ─── */

export function DashboardPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Dashboard"
        description="Visão geral das métricas do período atual"
        actions={
          <>
            <AtlButton typeButton="standard" style="outline" size="small">
              <Filter className="h-4 w-4" /> Filtrar
            </AtlButton>
            <AtlButton typeButton="primary" size="small">
              <Download className="h-4 w-4" /> Exportar
            </AtlButton>
          </>
        }
      />

      {/* KPI Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {STATS.map(stat => (
          <StatCard key={stat.title} {...stat} />
        ))}
      </div>

      {/* Main content */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Transactions table */}
        <AtlCard className="lg:col-span-2">
          <AtlCardHeader
            headline="Transações Recentes"
            subheadline="Últimas 6 movimentações"
            action={
              <AtlButton typeButton="standard" style="text" size="small">
                Ver todas <ArrowUpRight className="h-4 w-4" />
              </AtlButton>
            }
          />
          <AtlCardContent className="px-0 pb-0">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="px-5 pb-2 text-left text-xs font-medium text-foreground-muted uppercase tracking-wider">ID</th>
                  <th className="px-5 pb-2 text-left text-xs font-medium text-foreground-muted uppercase tracking-wider">Cliente</th>
                  <th className="px-5 pb-2 text-right text-xs font-medium text-foreground-muted uppercase tracking-wider">Valor</th>
                  <th className="px-5 pb-2 text-left text-xs font-medium text-foreground-muted uppercase tracking-wider">Status</th>
                  <th className="px-5 pb-2 text-left text-xs font-medium text-foreground-muted uppercase tracking-wider hidden sm:table-cell">Data</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {TRANSACTIONS.map(tx => {
                  const { label, badgeType } = STATUS_CONFIG[tx.status]
                  return (
                    <tr
                      key={tx.id}
                      className="group hover:bg-surface-subtle transition-colors cursor-pointer"
                    >
                      <td className="px-5 py-3 font-mono text-xs text-foreground-muted">{tx.id}</td>
                      <td className="px-5 py-3">
                        <div className="flex items-center gap-2.5">
                          <Avatar name={tx.customer} size="sm" />
                          <span className="font-medium text-foreground truncate max-w-[140px]">
                            {tx.customer}
                          </span>
                        </div>
                      </td>
                      <td className="px-5 py-3 text-right font-medium text-foreground tabular-nums">
                        {formatCurrency(tx.amount)}
                      </td>
                      <td className="px-5 py-3">
                        <AtlBadge type={badgeType} badgeContent={label} />
                      </td>
                      <td className="px-5 py-3 text-foreground-muted hidden sm:table-cell">{tx.date}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </AtlCardContent>
          <AtlCardFooter className="justify-between">
            <span className="text-xs text-foreground-muted">
              Exibindo {TRANSACTIONS.length} de 1.847 transações
            </span>
            <AtlButton typeButton="standard" style="outline" size="small">
              Próxima página
            </AtlButton>
          </AtlCardFooter>
        </AtlCard>

        {/* Top customers */}
        <AtlCard>
          <AtlCardHeader
            headline="Maiores Clientes"
            subheadline="Participação na receita do mês"
          />
          <AtlCardContent className="space-y-4">
            {TOP_CUSTOMERS.map((c, i) => (
              <div key={c.name} className="space-y-1.5">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="text-xs font-medium text-foreground-subtle w-4 shrink-0">
                      {i + 1}.
                    </span>
                    <span className="text-sm font-medium text-foreground truncate">
                      {c.name}
                    </span>
                  </div>
                  <span className="text-xs font-semibold text-foreground tabular-nums shrink-0">
                    {formatCurrency(c.value)}
                  </span>
                </div>
                <div className="h-1.5 w-full rounded-full bg-surface-muted overflow-hidden">
                  <div
                    className="h-full rounded-full bg-primary/70 transition-all duration-500"
                    style={{ width: `${c.percent}%` }}
                  />
                </div>
                <p className="text-right text-[10px] text-foreground-subtle">{c.percent}%</p>
              </div>
            ))}
          </AtlCardContent>
          <AtlCardFooter>
            <AtlButton typeButton="standard" style="outline" size="small" className="w-full">
              Ver relatório completo
            </AtlButton>
          </AtlCardFooter>
        </AtlCard>
      </div>
    </div>
  )
}
