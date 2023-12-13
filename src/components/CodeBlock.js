import React, { useEffect, useRef } from 'react';
import hljs from '../highlight';
import Clipboard from 'clipboard';

import 'highlight.js/styles/default.css';

function CodeBlock({ language, code }) {
  const preRef = useRef(null);

  useEffect(() => {
    if (preRef.current) {
      hljs.highlightElement(preRef.current);

      const clipboard = new Clipboard(`#${language}copy_btn`, {
        text: () => code,
      });

      return () => {
        clipboard.destroy();
      };
    }
  }, [code, language]);

  return (
    <div className="code-block" style={{ position: 'relative', marginTop: 8 }}>
      <pre>
        <code id={language} ref={preRef} className={language}>
          {code}
        </code>
      </pre>
    </div>
  );
}

export default CodeBlock;