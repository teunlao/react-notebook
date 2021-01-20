import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import CodeEditor from './components/code-editor/code-editor';
import Preview from './components/preview/preview';
import bundle from './bundler';

const App = () => {
  const [code, setCode] = useState('');
  const [input, setInput] = useState('');

  const onClick = async () => {
    const output = await bundle(input);
    setCode(output);
  };

  return (
    <div>
      <CodeEditor initialValue="const a = 1" onChange={(value) => setInput(value)} />
      <div>
        <button type="submit" onClick={onClick}>
          Submit
        </button>
        <Preview code={code} />
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
