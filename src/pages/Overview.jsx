// src/pages/Overview.jsx
import './Overview.css'

function Overview() {
  // For now these can be hardcoded or later come from props / API / context
  const stats = {
    totalCompanies: 18,
    atRiskCompanies: 3,
    openTasks: 12,
    activeAutomations: 4,
  }

  return (
    <div className="overview">
      <h1 className="overview__title">Venture OS Overview</h1>
      <p className="overview__subtitle">
        High-level snapshot of your portfolio, tasks, and automations.
      </p>

      <div className="overview__stats-grid">
        <StatCard label="Total Companies" value={stats.totalCompanies} />
        <StatCard label="At-Risk Companies" value={stats.atRiskCompanies} variant="warning" />
        <StatCard label="Open / Overdue Tasks" value={stats.openTasks} />
        <StatCard label="Active Automations" value={stats.activeAutomations} variant="success" />
      </div>
    </div>
  )
}

function StatCard({ label, value, variant }) {
  const cardClass = ['stat-card']
  if (variant === 'warning') cardClass.push('stat-card--warning')
  if (variant === 'success') cardClass.push('stat-card--success')

  return (
    <div className={cardClass.join(' ')}>
      <div className="stat-card__label">{label}</div>
      <div className="stat-card__value">{value}</div>
    </div>
  )
}

export default Overview
