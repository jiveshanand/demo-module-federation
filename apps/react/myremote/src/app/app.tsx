// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';

// import NxWelcome from './nx-welcome';

export function App(props: { value?: { val?: string } }) {
  const { value } = props;
  return (
    <div>
      {/* <NxWelcome title="myremote" /> */}
      <div>{value?.val}</div>
    </div>
  );
}

export default App;
