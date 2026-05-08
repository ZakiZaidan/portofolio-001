import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

/* ══════════════════════════════════════
   LINE CHART
   data: [{ label, value }]  (value 0–100)
   ══════════════════════════════════════ */
export function LineChart({ data, color = '#3B5BDB', height = 160 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })

  const w = 500
  const h = height
  const pad = { t: 16, r: 16, b: 32, l: 40 }
  const aw = w - pad.l - pad.r
  const ah = h - pad.t - pad.b

  const pts = data.map((d, i) => ({
    x: pad.l + (i / (data.length - 1)) * aw,
    y: pad.t + (1 - d.value / 100) * ah,
    ...d,
  }))

  const linePath = pts.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ')
  const areaPath = `${linePath} L ${pts[pts.length - 1].x} ${h - pad.b} L ${pts[0].x} ${h - pad.b} Z`

  return (
    <div ref={ref}>
      <svg viewBox={`0 0 ${w} ${h}`} style={{ width: '100%', height: 'auto', overflow: 'visible' }}>
        {/* grid lines */}
        {[0, 25, 50, 75, 100].map((v) => {
          const y = pad.t + (1 - v / 100) * ah
          return (
            <g key={v}>
              <line x1={pad.l} y1={y} x2={w - pad.r} y2={y}
                stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
              <text x={pad.l - 8} y={y + 4} fill="rgba(255,255,255,0.3)"
                fontSize="11" textAnchor="end">{v}</text>
            </g>
          )
        })}

        {/* area fill */}
        <defs>
          <linearGradient id={`lg-${color.replace('#','')}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity="0.25" />
            <stop offset="100%" stopColor={color} stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d={areaPath} fill={`url(#lg-${color.replace('#','')})`} />

        {/* animated line */}
        <motion.path
          d={linePath}
          fill="none"
          stroke={color}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={inView ? { pathLength: 1, opacity: 1 } : {}}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* dots */}
        {pts.map((p, i) => (
          <motion.circle
            key={i}
            cx={p.x} cy={p.y} r="4"
            fill={color}
            stroke="var(--bg-card)"
            strokeWidth="2"
            initial={{ scale: 0, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ delay: 0.8 + i * 0.08, duration: 0.3 }}
          />
        ))}

        {/* x-axis labels */}
        {pts.map((p, i) => (
          <text key={i} x={p.x} y={h - 4} fill="rgba(255,255,255,0.35)"
            fontSize="11" textAnchor="middle">{p.label}</text>
        ))}
      </svg>
    </div>
  )
}

/* ══════════════════════════════════════
   BAR CHART
   data: [{ label, value }]  (value 0–100)
   ══════════════════════════════════════ */
export function BarChart({ data, color = '#3B5BDB', height = 180 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })

  const w = 500
  const h = height
  const pad = { t: 16, r: 16, b: 36, l: 40 }
  const aw = w - pad.l - pad.r
  const ah = h - pad.t - pad.b
  const gap = 10
  const barW = (aw - gap * (data.length - 1)) / data.length

  return (
    <div ref={ref}>
      <svg viewBox={`0 0 ${w} ${h}`} style={{ width: '100%', height: 'auto' }}>
        {/* grid */}
        {[0, 25, 50, 75, 100].map((v) => {
          const y = pad.t + (1 - v / 100) * ah
          return (
            <g key={v}>
              <line x1={pad.l} y1={y} x2={w - pad.r} y2={y}
                stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
              <text x={pad.l - 8} y={y + 4} fill="rgba(255,255,255,0.3)"
                fontSize="11" textAnchor="end">{v}</text>
            </g>
          )
        })}

        <defs>
          <linearGradient id={`bar-lg-${color.replace('#','')}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity="0.9" />
            <stop offset="100%" stopColor={color} stopOpacity="0.3" />
          </linearGradient>
        </defs>

        {data.map((d, i) => {
          const x = pad.l + i * (barW + gap)
          const barH = (d.value / 100) * ah
          const y = pad.t + ah - barH
          return (
            <g key={i}>
              <motion.rect
                x={x} y={y} width={barW} height={barH}
                rx="4"
                fill={`url(#bar-lg-${color.replace('#','')})`}
                initial={{ scaleY: 0, originY: 1 }}
                animate={inView ? { scaleY: 1 } : {}}
                style={{ transformOrigin: `${x + barW / 2}px ${pad.t + ah}px` }}
                transition={{ delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              />
              <motion.text
                x={x + barW / 2} y={y - 6}
                fill="rgba(255,255,255,0.6)"
                fontSize="11" textAnchor="middle"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.5 + i * 0.08 }}
              >
                {d.value}%
              </motion.text>
              <text x={x + barW / 2} y={h - 6}
                fill="rgba(255,255,255,0.35)" fontSize="10" textAnchor="middle">
                {d.label}
              </text>
            </g>
          )
        })}
      </svg>
    </div>
  )
}

/* ══════════════════════════════════════
   DONUT CHART
   segments: [{ label, value, color }]
   ══════════════════════════════════════ */
export function DonutChart({ segments, size = 180 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })

  const cx = size / 2
  const cy = size / 2
  const r = size * 0.38
  const strokeW = size * 0.13
  const circumference = 2 * Math.PI * r

  const total = segments.reduce((s, d) => s + d.value, 0)
  let cumulative = 0

  return (
    <div ref={ref} style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
      <svg width={size} height={size} style={{ flexShrink: 0 }}>
        {/* bg ring */}
        <circle cx={cx} cy={cy} r={r}
          fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth={strokeW} />

        {segments.map((seg, i) => {
          const frac = seg.value / total
          const offset = circumference * (1 - frac)
          const rotation = (cumulative / total) * 360 - 90
          cumulative += seg.value
          return (
            <motion.circle
              key={i}
              cx={cx} cy={cy} r={r}
              fill="none"
              stroke={seg.color}
              strokeWidth={strokeW}
              strokeDasharray={`${circumference} ${circumference}`}
              style={{ rotate: rotation, transformOrigin: `${cx}px ${cy}px` }}
              initial={{ strokeDashoffset: circumference }}
              animate={inView ? { strokeDashoffset: offset } : {}}
              transition={{ delay: i * 0.15, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            />
          )
        })}
      </svg>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {segments.map((seg) => (
          <div key={seg.label} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{
              width: 10, height: 10, borderRadius: '50%',
              background: seg.color, flexShrink: 0,
            }} />
            <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
              {seg.label}
            </span>
            <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-primary)', marginLeft: 'auto' }}>
              {seg.value}%
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ══════════════════════════════════════
   ANIMATED COUNTER
   ══════════════════════════════════════ */
export function Counter({ to, suffix = '', duration = 1.5 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.8 })
  return (
    <span ref={ref}>
      <motion.span
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.3 }}
      >
        {inView
          ? <AnimCount to={to} duration={duration} suffix={suffix} />
          : '0' + suffix}
      </motion.span>
    </span>
  )
}

function AnimCount({ to, duration, suffix }) {
  const ref = useRef(null)
  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.span
        initial={0}
        animate={to}
        transition={{ duration, ease: 'easeOut' }}
        onUpdate={(v) => {
          if (ref.current) ref.current.textContent = Math.round(v) + suffix
        }}
      />
    </motion.span>
  )
}
