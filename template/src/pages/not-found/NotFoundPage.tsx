import { useNavigate } from 'react-router-dom'
import { Map } from 'lucide-react'
import { AtlButton } from '@ds'

export function NotFoundPage() {
  const navigate = useNavigate()

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-background px-4 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-surface-muted text-foreground-subtle">
        <Map className="h-8 w-8" />
      </div>
      <div className="space-y-2">
        <h1 className="text-4xl font-bold text-foreground">404</h1>
        <p className="text-lg font-medium text-foreground-muted">Página não encontrada</p>
        <p className="text-sm text-foreground-subtle max-w-sm">
          A rota que você tentou acessar não existe ou foi movida.
        </p>
      </div>
      <AtlButton typeButton="primary" onClick={() => navigate('/')}>
        Voltar ao Dashboard
      </AtlButton>
    </div>
  )
}
