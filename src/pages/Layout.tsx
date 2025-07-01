import { useAtomValue } from 'jotai';
import { stepAtom } from '../stores/step-store';
import Header from '../components/Header';
import { Outlet } from 'react-router-dom';

const GITHUB_URL = 'https://github.com/oilater';
const VELOG_URL = 'https://velog.io/@oilater';

export default function Layout() {
  const step = useAtomValue(stepAtom);
  const shouldShowHeader = step !== 'init';
  
  return (
    <>
      {shouldShowHeader && <Header 
        className="header"
        onGithub={() => {window.open(GITHUB_URL, '_blank');}}
        onVelog={() => {window.open(VELOG_URL, '_blank');}}
      />}
      <Outlet />
    </>
  );
}