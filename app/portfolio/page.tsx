'use client'

import { useState } from 'react'

const projects = [
  // Websites
  { title: 'Anita Mbinya Foundation', url: 'https://anitambinyafoundation.org/', category: 'Websites', img: '/images/portfolio/anitambinya.webp' },
  { title: 'Devlan Solutions LTD', url: 'https://devlan.co.ke/', category: 'Websites', img: '/images/portfolio/devlan_site.webp' },
  { title: 'Emuki Bees Hub', url: 'https://emukibeeshub.co.ke/', category: 'Websites', img: '/images/portfolio/emuki_bees_hub.webp' },
  { title: 'Kibwezi-Makindu Water Company', url: 'https://kibmawasco.com/', category: 'Websites', img: '/images/portfolio/kibmawasco.webp' },
  { title: 'Kibwezi Teachers Training College', url: 'https://kibweziteachers.com', category: 'Websites', img: '/images/portfolio/kibwezi.webp' },
  { title: 'Makueni Boys High School', url: 'https://www.makueniboys.sc.ke/', category: 'Websites', img: '/images/portfolio/makueni boys.webp' },
  { title: 'The Masinga School', url: 'https://masingaboys.sc.ke/', category: 'Websites', img: '/images/portfolio/masinga_boys.webp' },
  { title: 'The Kitondo School', url: 'https://thekitondoschool.sc.ke/', category: 'Websites', img: '/images/portfolio/thekitondo.webp' },
  { title: "Mwaani Girls' High School", url: 'https://mwaanigirls.sc.ke/', category: 'Websites', img: '/images/portfolio/mwaani_girls.webp' },
  { title: 'St Martin Kathonzweni Boys', url: 'https://stmartinkathonzweni.sc.ke/', category: 'Websites', img: '/images/portfolio/kathonzweni_boys.webp' },
  { title: 'Ukamba Bible College', url: 'https://ubc.co.ke', category: 'Websites', img: '/images/portfolio/ubc.webp' },
  { title: 'InterlPro LTD', url: 'https://intelproltd.com', category: 'Websites', img: '/images/portfolio/intel_pro_ltd.webp' },
  { title: 'Tana Solutions LTD', url: 'https://tanasolutions.co.ke', category: 'Websites', img: '/images/portfolio/tana_solutions_ltd.webp' },
  { title: 'Native Beecare LTD', url: 'https://nativebeecare.co.ke/', category: 'Websites', img: '/images/portfolio/native_beecare.webp' },
  { title: 'Soo TV', url: 'https://sootv.co.ke', category: 'Websites', img: '/images/portfolio/soo_tv.webp' },
  // Government Systems
  { title: 'CIFMIS', url: 'https://cifmis.makueni.go.ke', category: 'Government Systems', img: '/images/portfolio/cifmis.webp' },
  { title: 'IVAs', url: 'https://ivas.makueni.go.ke', category: 'Government Systems', img: '/images/portfolio/ivamis.webp' },
  { title: 'Umanyi Center', url: 'https://umanyi.makueni.go.ke', category: 'Government Systems', img: '/images/portfolio/umanyi_center.webp' },
  { title: 'Projects Monitoring & Tracking System', url: 'https://pmts.makueni.go.ke', category: 'Government Systems', img: '/images/portfolio/pmts.webp' },
  { title: 'Supplier Registration Portal', url: 'https://procurement.makueni.go.ke', category: 'Government Systems', img: '/images/portfolio/iSupplier.webp' },
  { title: 'Destination Makueni', url: 'https://destinationmakueni.com', category: 'Government Systems', img: '/images/portfolio/destination-makueni.webp' },
  { title: 'CIC MIS', url: 'https://cic.makueni.go.ke', category: 'Government Systems', img: '/images/portfolio/makueni_cic_mis.webp' },
  { title: 'ECDE MIS', url: 'https://ecde.makueni.go.ke', category: 'Government Systems', img: '/images/portfolio/ecde_database.webp' },
  { title: 'Kilimo Makueni', url: 'https://kilimo.makueni.go.ke', category: 'Government Systems', img: '/images/portfolio/kilimo_makueni.webp' },
  { title: 'Wanarika Makueni', url: 'https://youth.makueni.go.ke', category: 'Government Systems', img: '/images/portfolio/makueni_youth.webp' },
  { title: 'Michezo Makueni', url: 'https://sports.makueni.go.ke', category: 'Government Systems', img: '/images/portfolio/makueni_sports.webp' },
  { title: 'Makueni VTC', url: 'https://vtc.makueni.go.ke', category: 'Government Systems', img: '/images/portfolio/vtc.webp' },
  // Enterprise
  { title: 'NCA — Assets & Inventory MIS', url: 'https://nca.go.ke/', category: 'Enterprise & SaaS Platforms', img: '/images/portfolio/nca_aims.webp' },
  { title: 'Ukamba Bible College ERP', url: 'https://ubc.co.ke/', category: 'Enterprise & SaaS Platforms', img: '/images/portfolio/ubc_erp.webp' },
  { title: 'Makueni Crestwood College MIS', url: '#', category: 'Enterprise & SaaS Platforms', img: '/images/portfolio/college_erp.webp' },
  { title: 'Lite Inventory MIS', url: '#', category: 'Enterprise & SaaS Platforms', img: '/images/portfolio/LiteInventory.webp' },
  { title: 'Crib360 Rental MIS', url: 'https://makaziproperties.com', category: 'Enterprise & SaaS Platforms', img: '/images/portfolio/crib360.webp' },
]

const filters = ['All', 'Websites', 'Government Systems', 'Enterprise & SaaS Platforms']

export default function Portfolio() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active)

  return (
    <div style={{ paddingTop: '64px' }}>
      {/* Header */}
      <section
        className="grid-bg"
        style={{
          padding: '5rem 2rem 3rem',
          borderBottom: '1px solid var(--border)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse at 70% 40%, rgba(0, 229, 160, 0.04) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>
          <p className="section-label" style={{ marginBottom: '1rem' }}>// portfolio.ts</p>
          <h1
            style={{
              fontFamily: 'Sora, sans-serif',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 800,
              color: 'var(--text-primary)',
              lineHeight: 1.15,
              marginBottom: '1rem',
            }}
          >
            Shipped <span className="gradient-text">Projects</span>
          </h1>
          <p
            style={{
              color: 'var(--text-secondary)',
              fontSize: '0.95rem',
              maxWidth: '600px',
              lineHeight: 1.75,
            }}
          >
            A proven track record of designing, developing, and supporting scalable information systems
            across government, enterprise, and community sectors — from service automation to digital
            transformation.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section
        style={{
          background: 'var(--surface)',
          borderBottom: '1px solid var(--border)',
          padding: '1.25rem 2rem',
          position: 'sticky',
          top: '64px',
          zIndex: 40,
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'flex',
            gap: '0.5rem',
            flexWrap: 'wrap',
            alignItems: 'center',
          }}
        >
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.73rem',
                fontWeight: active === f ? 600 : 400,
                color: active === f ? 'var(--bg)' : 'var(--text-secondary)',
                background: active === f ? 'var(--accent)' : 'transparent',
                border: active === f ? '1px solid var(--accent)' : '1px solid var(--border)',
                borderRadius: '4px',
                padding: '0.4rem 0.9rem',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              {f === 'All' ? `all (${projects.length})` : f.toLowerCase().replace(/ & /g, ' & ')}
            </button>
          ))}
          <span
            style={{
              marginLeft: 'auto',
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.7rem',
              color: 'var(--text-muted)',
            }}
          >
            {filtered.length} results
          </span>
        </div>
      </section>

      {/* Grid */}
      <section style={{ padding: '3rem 2rem 6rem', maxWidth: '1200px', margin: '0 auto' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '1.25rem',
          }}
        >
          {filtered.map((project, idx) => (
            <a
              key={idx}
              href={project.url === '#' ? undefined : project.url}
              target={project.url !== '#' ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="project-card"
              style={{
                display: 'block',
                borderRadius: '10px',
                overflow: 'hidden',
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                textDecoration: 'none',
                position: 'relative',
                transition: 'all 0.25s',
                cursor: project.url === '#' ? 'default' : 'pointer',
              }}
            >
              {/* Image */}
              <div style={{ position: 'relative', height: '180px', overflow: 'hidden', background: 'var(--bg)' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.img}
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'top',
                    transition: 'transform 0.4s ease',
                  }}
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none'
                  }}
                />
                <div className="project-overlay" />

                {/* Category badge */}
                <div
                  style={{
                    position: 'absolute',
                    top: '0.75rem',
                    right: '0.75rem',
                    background: 'rgba(8,12,16,0.85)',
                    border: '1px solid var(--border)',
                    borderRadius: '3px',
                    padding: '0.15rem 0.5rem',
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '0.6rem',
                    color: 'var(--text-muted)',
                  }}
                >
                  {project.category === 'Government Systems' ? 'gov' :
                    project.category === 'Enterprise & SaaS Platforms' ? 'enterprise' : 'web'}
                </div>
              </div>

              {/* Footer */}
              <div style={{ padding: '1rem 1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem' }}>
                <h3
                  style={{
                    fontFamily: 'Sora, sans-serif',
                    fontSize: '0.88rem',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                    lineHeight: 1.3,
                  }}
                >
                  {project.title}
                </h3>
                {project.url !== '#' && (
                  <span style={{ color: 'var(--accent)', fontSize: '0.85rem', flexShrink: 0 }}>↗</span>
                )}
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  )
}
