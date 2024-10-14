import { m } from 'umai';

export const Input = () => {
  let value = '';

  return () => (
    <div>
      <h2>JSX Input Component</h2>
      <input
        type="text"
        value={value}
        oninput={(ev) => value = ev.target.value}
      />

      <h3>{ value || 'this component uses JSX' }</h3>
    </div>
  );
};
