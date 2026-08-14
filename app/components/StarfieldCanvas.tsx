'use client';

import { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

/* ─── Types ────────────────────────────────────────────────────── */
interface Star      { x:number; y:number; z:number; radius:number; opacity:number; speed:number; color:string; }
interface Shooter   { x:number; y:number; length:number; speed:number; angle:number; opacity:number; active:boolean; trail:number; }
interface Nebula    { x:number; y:number; radius:number; color:string; opacity:number; driftX:number; driftY:number; phase:number; }
interface LightOrb  { x:number; y:number; radius:number; color:string; opacity:number; driftX:number; driftY:number; phase:number; speedMul:number; }

const STAR_COLORS   = ['#ffffff','#ffe8c0','#c8d8ff','#ffd6a5','#d6eaff'];
const NEBULA_COLORS = ['rgba(245,130,50,','rgba(80,60,180,','rgba(30,100,200,','rgba(180,50,120,','rgba(60,180,160,'];
const LIGHT_ORBS    = [
  'rgba(245,130,50,',  // amber
  'rgba(255,200,100,', // gold
  'rgba(200,220,255,', // soft blue
  'rgba(180,230,200,', // mint
  'rgba(255,180,200,', // pink
];

export default function StarfieldCanvas() {
  const { theme }      = useTheme();
  const canvasRef      = useRef<HTMLCanvasElement>(null);
  const animRef        = useRef<number>(0);
  const starsRef       = useRef<Star[]>([]);
  const shootersRef    = useRef<Shooter[]>([]);
  const nebulasRef     = useRef<Nebula[]>([]);
  const lightOrbsRef   = useRef<LightOrb[]>([]);
  const themeRef       = useRef(theme);

  // keep themeRef in sync without restarting the whole animation loop
  useEffect(() => { themeRef.current = theme; }, [theme]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    /* ── helpers ───────────────────────────────────────────────── */
    const mkShooter = (W:number, H:number): Shooter => ({
      x: Math.random() * W, y: Math.random() * H * 0.5,
      length: Math.random() * 180 + 80, speed: Math.random() * 10 + 6,
      angle: Math.PI / 4 + (Math.random() - 0.5) * 0.4,
      opacity: 0, active: false, trail: Math.random() * 60 + 40,
    });

    const mkNebula = (W:number, H:number): Nebula => ({
      x: Math.random() * W, y: Math.random() * H,
      radius: Math.random() * 350 + 150,
      color: NEBULA_COLORS[Math.floor(Math.random() * NEBULA_COLORS.length)],
      opacity: Math.random() * 0.06 + 0.02,
      driftX: (Math.random() - 0.5) * 0.15, driftY: (Math.random() - 0.5) * 0.08,
      phase: Math.random() * Math.PI * 2,
    });

    const mkLightOrb = (W:number, H:number): LightOrb => ({
      x: Math.random() * W, y: Math.random() * H,
      radius: Math.random() * 300 + 120,
      color: LIGHT_ORBS[Math.floor(Math.random() * LIGHT_ORBS.length)],
      opacity: Math.random() * 0.10 + 0.04,
      driftX: (Math.random() - 0.5) * 0.20, driftY: (Math.random() - 0.5) * 0.12,
      phase: Math.random() * Math.PI * 2,
      speedMul: Math.random() * 0.6 + 0.5,
    });

    /* ── init ──────────────────────────────────────────────────── */
    const init = () => {
      const W = canvas.width, H = canvas.height;
      const count = Math.floor((W * H) / 3200);
      starsRef.current    = Array.from({length: count}, () => ({
        x: Math.random()*W, y: Math.random()*H, z: Math.random(),
        radius: Math.random()*1.6+0.2, opacity: Math.random()*0.7+0.3,
        speed: Math.random()*0.03+0.005,
        color: STAR_COLORS[Math.floor(Math.random()*STAR_COLORS.length)],
      }));
      shootersRef.current  = Array.from({length: 6}, () => mkShooter(W, H));
      nebulasRef.current   = Array.from({length: 5}, () => mkNebula(W, H));
      lightOrbsRef.current = Array.from({length: 6}, () => mkLightOrb(W, H));
    };

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    /* ── dark draw ─────────────────────────────────────────────── */
    const drawDark = (t: number) => {
      const W = canvas.width, H = canvas.height;

      // background
      const bg = ctx.createLinearGradient(0,0,W,H);
      bg.addColorStop(0, '#03060f'); bg.addColorStop(0.4,'#060918');
      bg.addColorStop(0.7,'#080d1a'); bg.addColorStop(1,'#030610');
      ctx.fillStyle = bg; ctx.fillRect(0,0,W,H);

      // nebulas
      nebulasRef.current.forEach(n => {
        n.x += n.driftX; n.y += n.driftY;
        if (n.x < -n.radius) n.x = W+n.radius;
        if (n.x >  W+n.radius) n.x = -n.radius;
        if (n.y < -n.radius) n.y = H+n.radius;
        if (n.y >  H+n.radius) n.y = -n.radius;
        const p = Math.sin(t*0.0008+n.phase)*0.012+n.opacity;
        const g = ctx.createRadialGradient(n.x,n.y,0,n.x,n.y,n.radius);
        g.addColorStop(0,`${n.color}${p.toFixed(3)})`);
        g.addColorStop(0.5,`${n.color}${(p*0.4).toFixed(3)})`);
        g.addColorStop(1,`${n.color}0)`);
        ctx.fillStyle=g; ctx.beginPath(); ctx.arc(n.x,n.y,n.radius,0,Math.PI*2); ctx.fill();
      });

      // stars
      starsRef.current.forEach(s => {
        const twinkle = Math.sin(t*s.speed*3+s.z*10)*0.3+0.7;
        ctx.save();
        ctx.globalAlpha = s.opacity*twinkle;
        ctx.fillStyle   = s.color;
        ctx.shadowBlur  = s.radius>1 ? 4 : 0;
        ctx.shadowColor = s.color;
        ctx.beginPath(); ctx.arc(s.x,s.y,s.radius*twinkle,0,Math.PI*2); ctx.fill();
        ctx.restore();
      });

      // shooting stars
      shootersRef.current.forEach((ss,i) => {
        if (!ss.active && Math.random()<0.002) {
          shootersRef.current[i] = {...mkShooter(W,H), active:true, opacity:1};
          return;
        }
        if (!ss.active) return;
        ss.x += Math.cos(ss.angle)*ss.speed;
        ss.y += Math.sin(ss.angle)*ss.speed;
        ss.opacity -= 0.016;
        if (ss.opacity<=0||ss.x>W+200||ss.y>H+200) { ss.active=false; return; }
        const tx=ss.x-Math.cos(ss.angle)*ss.trail, ty=ss.y-Math.sin(ss.angle)*ss.trail;
        const g=ctx.createLinearGradient(tx,ty,ss.x,ss.y);
        g.addColorStop(0,'rgba(255,255,255,0)');
        g.addColorStop(0.6,`rgba(255,230,180,${ss.opacity*0.4})`);
        g.addColorStop(1,`rgba(255,255,255,${ss.opacity})`);
        ctx.save(); ctx.strokeStyle=g; ctx.lineWidth=1.5;
        ctx.beginPath(); ctx.moveTo(tx,ty); ctx.lineTo(ss.x,ss.y); ctx.stroke();
        ctx.globalAlpha=ss.opacity; ctx.fillStyle='white';
        ctx.shadowBlur=8; ctx.shadowColor='#ffe8c0';
        ctx.beginPath(); ctx.arc(ss.x,ss.y,1.5,0,Math.PI*2); ctx.fill();
        ctx.restore();
      });
    };

    /* ── light draw ────────────────────────────────────────────── */
    const drawLight = (t: number) => {
      const W = canvas.width, H = canvas.height;

      // soft white background
      ctx.fillStyle = '#f4f6fb'; ctx.fillRect(0,0,W,H);

      // subtle grid
      ctx.save();
      ctx.globalAlpha = 0.35;
      ctx.strokeStyle = 'rgba(200,210,230,0.8)';
      ctx.lineWidth   = 0.5;
      const step = 55;
      for (let x=0;x<W;x+=step){ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,H);ctx.stroke();}
      for (let y=0;y<H;y+=step){ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(W,y);ctx.stroke();}
      ctx.restore();

      // drifting pastel orbs
      lightOrbsRef.current.forEach(orb => {
        orb.x += orb.driftX; orb.y += orb.driftY;
        if (orb.x < -orb.radius) orb.x = W+orb.radius;
        if (orb.x >  W+orb.radius) orb.x = -orb.radius;
        if (orb.y < -orb.radius) orb.y = H+orb.radius;
        if (orb.y >  H+orb.radius) orb.y = -orb.radius;
        const pulse = Math.sin(t*0.0006*orb.speedMul+orb.phase)*0.025+orb.opacity;
        const g = ctx.createRadialGradient(orb.x,orb.y,0,orb.x,orb.y,orb.radius);
        g.addColorStop(0, `${orb.color}${Math.min(pulse,0.18).toFixed(3)})`);
        g.addColorStop(0.5,`${orb.color}${(pulse*0.3).toFixed(3)})`);
        g.addColorStop(1, `${orb.color}0)`);
        ctx.fillStyle=g; ctx.beginPath(); ctx.arc(orb.x,orb.y,orb.radius,0,Math.PI*2); ctx.fill();
      });

      // tiny floating dots
      starsRef.current.forEach(s => {
        const pulse = Math.sin(t*s.speed*2+s.z*8)*0.15+0.25;
        ctx.save();
        ctx.globalAlpha = pulse * 0.45;
        ctx.fillStyle   = 'rgba(180,140,80,0.8)';
        ctx.beginPath(); ctx.arc(s.x,s.y,s.radius*0.7,0,Math.PI*2); ctx.fill();
        ctx.restore();
      });
    };

    /* ── loop ──────────────────────────────────────────────────── */
    const animate = (ts: number) => {
      ctx.clearRect(0,0,canvas.width,canvas.height);
      if (themeRef.current === 'dark') drawDark(ts);
      else                             drawLight(ts);
      animRef.current = requestAnimationFrame(animate);
    };

    resize();
    window.addEventListener('resize', resize);
    animRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener('resize', resize);
    };
  }, []); // intentionally empty — themeRef handles live updates

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    />
  );
}
