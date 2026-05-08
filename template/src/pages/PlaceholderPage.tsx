import { Construction } from 'lucide-react'
import { PageHeader } from '@/components/shared/PageHeader'
import { EmptyState } from '@/components/shared/EmptyState'
import { Card, CardContent } from '@/components/ui/card'

export function PlaceholderPage({ title }: { title: string }) {
  return (
    <div className="space-y-6">
      <PageHeader title={title} description={`Módulo de ${title.toLowerCase()} em desenvolvimento`} />
      <Card>
        <CardContent className="py-2">
          <EmptyState
            icon={Construction}
            title="Em construção"
            description="Esta seção está sendo desenvolvida. Em breve estará disponível."
          />
        </CardContent>
      </Card>
    </div>
  )
}
