import MonacoEditor from '@monaco-editor/react';
import React from 'react';
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';

export interface CodeEditorProps {
  initialValue: string;

  onChange(value: string): void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ initialValue, onChange }) => {
  const onMount = (editor: monaco.editor.IStandaloneCodeEditor) => {
    editor.onDidChangeModelContent(() => {
      onChange(editor.getValue());
    });

    editor.getModel()?.updateOptions({ tabSize: 2 });
  };

  return (
    <MonacoEditor
      onMount={onMount}
      value={initialValue}
      height="500px"
      language="javascript"
      theme="vs-dark"
      options={{
        wordWrap: 'on',
        minimap: { enabled: false },
        showUnused: false,
        folding: false,
        lineNumbersMinChars: 3,
        fontSize: 16,
        scrollBeyondLastLine: false,
        automaticLayout: true,
      }}
    />
  );
};

export default CodeEditor;
