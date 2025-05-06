import React, { ReactElement } from 'react';

export function renderRichText(text: string): ReactElement[] {
  const parts = text.split(/(<br\/>|<li>.*?<\/li>)/);

  return parts.map((part, index) => {
    if (part === '<br/>') {
      return <br key={index} />;
    }

    if (part.startsWith('<li>') && part.endsWith('</li>')) {
      const content = part.replace('<li>', '').replace('</li>', '');
      return (
        <li key={index} style={{ marginLeft: '1rem' }}>
          {parseInlineTags(content, index)}
        </li>
      );
    }

    return <React.Fragment key={index}>{parseInlineTags(part, index)}</React.Fragment>;
  });
}

function parseInlineTags(text: string, keyOffset: number): ReactElement[] {
  const regex = /(<b>.*?<\/b>|<i>.*?<\/i>)/;
  const segments = text.split(regex);

  return segments.map((segment, i) => {
    const key = `${keyOffset}-${i}`;

    if (segment.startsWith('<b>') && segment.endsWith('</b>')) {
      return <strong key={key}>{segment.slice(3, -4)}</strong>;
    }

    if (segment.startsWith('<i>') && segment.endsWith('</i>')) {
      return <em key={key}>{segment.slice(3, -4)}</em>;
    }

    return <React.Fragment key={key}>{segment}</React.Fragment>;
  });
}
