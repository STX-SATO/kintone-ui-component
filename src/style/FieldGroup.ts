export default {
  '@global': {
    '.kuc-fieldgroup-container': {
      '-moz-box-sizing': 'border-box',
      'box-sizing': 'border-box',
      'border-color': '#e3e7e8',
      'border-width': '1px',
      'border-style': 'solid',
      display: 'inline-block',
      'max-width': '98%',
      'min-width': '517px',
      margin: '4px 10px 4px 8px',
      padding: '0px 8px'
    },
    '.kuc-fieldgroup-label': {
      display: 'inline-block',
      margin: '12px 0 8px 8px',
      padding: '4px 8px 4px 24px',
      color: '#333',
      'font-size': '16px',
      cursor: 'pointer',
      border: '1px solid transparent'
    },
    '.kuc-fieldgroup-label:focus': {
      outline: '0',
      border: '1px solid #3498db'
    },
    '.kuc-fieldgroup-contents': {
      margin: '0 8px 12px 8px',
      'white-space': 'nowrap',
      'word-wrap': 'normal',
      'overflow-x': 'auto'
    },
    '.kuc-fieldgroup-label.collapse + .kuc-fieldgroup-contents': {
      display: 'none'
    }
  }
};
