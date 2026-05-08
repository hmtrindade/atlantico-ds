import { Construction } from 'lucide-react'
import { AtlCard, AtlCardContent } from '@ds'
import { PageHeader } from '@/components/shared/PageHeader'
import { EmptyState } from '@/components/shared/EmptyState'

export function PlaceholderPage({ title }: { title: string }) {
  return (
    <div className="space-y-6">
      <PageHeader title={title} description={`Módulo de ${title.toLowerCase()} em desenvolvimento`} />
      <AtlCard>
        <AtlCardContent className="py-2">
          <EmptyState
            icon={Construction}
            title="Em construção"
            description="Esta seção está sendo desenvolvida. Em breve estará disponível."
          />
        </AtlCardContent>
      </AtlCard>
    </div>
  )
}
