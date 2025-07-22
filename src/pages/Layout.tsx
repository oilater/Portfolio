import Header from '../components/Header.tsx';
import { Outlet, useNavigate } from 'react-router-dom';
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react";

const GITHUB_URL = 'https://github.com/oilater';
const VELOG_URL = 'https://velog.io/@oilater';

export default function Layout() {
  const navigate = useNavigate();

  return (
    <>
      <Header 
        className="header"
        onGithub={() => {window.open(GITHUB_URL, '_blank');}}
        onVelog={() => {window.open(VELOG_URL, '_blank');}}
        onHome={() => {
            navigate('/');
        }}
      />
      <Outlet />
      <Analytics />
      <SpeedInsights />
    </>
  );
}