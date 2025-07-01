import { useAtom } from 'jotai';
import { stepAtom } from '../stores/step-store.ts';
import Header from '../components/Header.tsx';
import { Outlet, useNavigate } from 'react-router-dom';

const GITHUB_URL = 'https://github.com/oilater';
const VELOG_URL = 'https://velog.io/@oilater';

export default function Layout() {
  const [step, setStep] = useAtom(stepAtom);
  const shouldShowHeader = step !== 'init';
  const navigate = useNavigate();

  return (
    <>
      {shouldShowHeader && <Header 
        className="header"
        onGithub={() => {window.open(GITHUB_URL, '_blank');}}
        onVelog={() => {window.open(VELOG_URL, '_blank');}}
        onHome={() => {
            setStep('introduce');
            navigate('/');
        }}
      />}
      <Outlet />
    </>
  );
}