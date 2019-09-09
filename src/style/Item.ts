export default {
  '@global': {
    '.kuc-list-outer': {
      'margin-top': '-6px',
      padding: '12px 0 0 0',
      border: '1px solid #e3e7e8',
      'background-color': '#fff',
      'box-shadow': '1px 1px 12px #f5f5f5 inset, -1px -1px 12px #f5f5f5 inset',
      'line-height': '1',
      '-webkit-user-select': 'none',
      '-moz-user-select': 'none',
      '-ms-user-select': 'none',
      'user-select': 'none'
    },
    '.kuc-list-item': {
      position: 'relative',
      'font-size': '14px',
      padding: '6px 16px 8px 10px',
      'line-height': '1',
      cursor: 'pointer'
    },
    '.kuc-list-item:hover, .kuc-list-item:active': {
      'background-color': '#e2f2fe'
    },
    '.kuc-list-item-selected': {
      background: 'none'
    },
    '.kuc-list-item .kuc-icon-check': {
      display: 'none'
    },
    '.kuc-list-item .kuc-list-item-label': {
      'font-size': '13px',
      'word-wrap': 'normal'
    },
    '.kuc-list-item-selected span': {
      color: '#3498db'
    },
    '.kuc-list-item-disable span': {
      color: '#888888'
    },
    '.kuc-list-item-disable.kuc-list-item-selected .kuc-list-item-label, .kuc-list-item-selected .kuc-list-item-label': {
      'margin-left': '16px'
    },
    '.kuc-list-item-disable.kuc-list-item-selected .kuc-icon-check, .kuc-list-item-selected .kuc-icon-check': {
      display: 'block',
      'font-size': '13px',
      'line-height': '1.5',
      position: 'absolute'
    },
    '.kuc-list-item-selected .kuc-icon-check svg': {
      width: '24px',
      height: '24px',
      transform: 'scale(0.6)',
      'transform-origin': '0px 0px'
    },
    '.kuc-list-item-selected .kuc-icon-check svg path': {
      fill: '#3498db'
    },
    '.kuc-list-item-disable .kuc-icon-check svg path': {
      fill: '#888888'
    },
    '.kuc-arrow': {
      color: '#727272',
      position: 'relative',
      margin: '10px 8px 0 0'
    },
    '.kuc-arrow::before': {
      content: '\'\'',
      position: 'absolute',
      right: '0',
      width: '8px',
      height: '8px',
      'border-top': 'solid 1px currentColor',
      'border-right': 'solid 1px currentColor'
    },
    '.kuc-arrow.right:before': {
      top: '4px',
      '-webkit-transform': 'rotate(45deg)',
      transform: 'rotate(45deg)'
    },
    '.kuc-arrow.down:before': {
      top: '2px',
      '-webkit-transform': 'rotate(135deg)',
      transform: 'rotate(135deg)'
    }
  }
};
