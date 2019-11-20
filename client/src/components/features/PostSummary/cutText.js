import React from 'react';

const cutText = (content, maxLength) => {
  if (maxLength < 1) return 'Error';
  if (content.length <= maxLength) return content;
  return content.substr(0, content.lastIndexOf(' ', maxLength)) + '...';
}; 

export default cutText;
