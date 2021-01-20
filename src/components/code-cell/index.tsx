import React, { useState } from 'react';
import Preview from '../preview';
import bundle from '../../bundler';
import CodeEditor from '../code-editor';

const CodeCell = () => {
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
      </div>
      <Preview code={code} />
    </div>
  );
};

export default CodeCell;
