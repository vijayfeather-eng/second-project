export default function DashboardLayout({
  children,
  appointments,
  notifications,
}: {
  children: React.ReactNode;
  appointments: React.ReactNode;
  notifications: React.ReactNode;
}) {
  return (
    <div className="dashboard-layout">

      {/* Sidebar */}
      <aside className="sidebar">

        <div className="sidebar-logo">
          <span>✦</span>
          Nova
        </div>

        <nav className="sidebar-nav">
          <a href="/Dashboard" className="active">
            Dashboard
          </a>

          <a href="#">Appointments</a>
          <a href="#">Patients</a>
          <a href="#">Reports</a>
          <a href="#">Settings</a>
        </nav>

        <div className="sidebar-bottom">
          <a href="/">Logout</a>
        </div>

      </aside>

      {/* Main Content */}
      <main className="dashboard-main">

        <header className="dashboard-header">
          <div>
            <h1>Dashboard</h1>
            <p>Welcome back! Here is your overview.</p>
          </div>

          <div className="profile">
            <div className="profile-avatar">S</div>
            <div>
              <strong>Sid</strong>
              <span>Admin</span>
            </div>
          </div>
        </header>

        {/* Main Page */}
        {children}

        {/* Parallel Route Cards */}
        <div className="dashboard-grid">

          <section className="dashboard-card">
            {appointments}
          </section>

          <section className="dashboard-card">
            {notifications}
          </section>

        </div>

      </main>

    </div>
  );
}