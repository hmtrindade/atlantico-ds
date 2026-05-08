import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AdminLayout } from '@/layout/AdminLayout'
import { DashboardPage } from '@/pages/dashboard/DashboardPage'
import { AnalyticsPage } from '@/pages/analytics/AnalyticsPage'
import { NotFoundPage } from '@/pages/not-found/NotFoundPage'
import { PlaceholderPage } from '@/pages/PlaceholderPage'

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AdminLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path="analytics" element={<AnalyticsPage />} />
          <Route path="customers" element={<PlaceholderPage title="Clientes" />} />
          <Route path="transactions" element={<PlaceholderPage title="Transações" />} />
          <Route path="reports" element={<PlaceholderPage title="Relatórios" />} />
          <Route path="settings" element={<PlaceholderPage title="Configurações" />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}
