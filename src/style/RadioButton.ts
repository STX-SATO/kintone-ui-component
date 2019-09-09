export default {
  '@global': {
    '.kuc-input-radio-item': {
      display: 'block',
      'margin-right': '16px',
      'margin-bottom': '8px',
      'padding-left': '1px',
      'max-width': '98%',
      'font-size': '14px'
    },
    '.kuc-input-radio-item:hover + label': {
      color: '#666'
    },
    '.kuc-input-radio-item input[type="radio"]': {
      display: 'none',
      cursor: 'pointer'
    },
    '.kuc-input-radio-item input[type="radio"] + label': {
      position: 'relative',
      display: 'inline-block',
      'margin-left': '32px',
      'vertical-align': 'middle',
      cursor: 'pointer'
    },
    '.kuc-input-radio-item input[type="radio"][disabled] + label': {
      color: '#bababa',
      cursor: 'not-allowed'
    },
    '.kuc-input-radio-item input[type="radio"] + label:before': {
      position: 'absolute',
      top: '50%',
      left: '-30px',
      'box-sizing': 'border-box',
      'margin-top': '-11px',
      width: '21px',
      height: '21px',
      border: '1px solid #e3e7e8',
      'border-radius': '50%',
      background: '#fff',
      'box-shadow': '1px 1px 3px #f5f5f5 inset, -1px -1px 3px #f5f5f5 inset',
      content: '""',
      'font-size': '14px'
    },
    '.kuc-input-radio-item input[type="radio"]:checked + label:after': {
      position: 'absolute',
      top: '50%',
      left: '-26px',
      'margin-top': '-7px',
      width: '13px',
      height: '13px',
      'border-radius': '50%',
      'background-color': '#3498db',
      content: '""'
    }
  }
};
