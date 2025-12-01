'use client';

import { useEffect } from 'react';

export const Signature: React.FC = () => {
  useEffect(() => {
    console.log(
      '%c My By Dean Stavenuiter 🤙',
      `
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: #ffffff;
        font-size: 20px;
        font-weight: bold;
        padding: 20px 30px;
        border-radius: 8px;
        line-height: 1.5;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        margin: 10px 0;
      `
    );
  }, []);

  return null;
};

