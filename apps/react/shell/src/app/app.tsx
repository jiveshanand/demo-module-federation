import * as React from 'react';

// import NxWelcome from './nx-welcome';
import { Link, Route, Routes } from 'react-router-dom';
import { Home } from './Home';
const MyRemote = React.lazy(() => import('myremote/Module'));

export function App() {
  const [value, setValue] = React.useState('');
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <Link to="/myremote">myremote</Link>
      </ul>
      <Routes>
        <Route path="/" element={<Home setValue={setValue} />} />
        <Route path="/myremote" element={<MyRemote value={{ val: value }} />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
