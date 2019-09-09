import Control, {ControlProps} from '../Control';

import style from '../../style/FieldGroup'

type FieldGroupProps = ControlProps & {
  content?: any;
  name?: string;
  toggle?: string;
  onToggle?: (toggle: string) => void;
  isVisible?: boolean;
}

class FieldGroup extends Control {
  protected _props: FieldGroupProps = {
    ...this._props,
    ...{
      name: '',
      toggle: 'collapse'
    }
  }

  private fgTab: HTMLElement;
  private fgTabArrow: HTMLElement;
  private fgTabLabel: HTMLElement;
  private fgContents: HTMLElement;

  constructor(params: FieldGroupProps) {
    super([style])
    if (params) {
      this._props = { ...this._props, ...params };
    }
    this.element = document.createElement('div');
    this.element.className = 'kuc-fieldgroup';
    const container = document.createElement('div');
    container.className = 'kuc-fieldgroup-container';
    
    this.fgTab = document.createElement('span');
    this.fgTab.className = this._getClassName();
    this.fgTab.setAttribute('role', 'button');
    this.fgTab.setAttribute('tabindex', '0');
    this.fgTab.onclick =this._handleToggleClick.bind(this);
    this.fgTabArrow = document.createElement('span');
    this.fgTabArrow.className = this._getArrowClassName();
    this.fgTabLabel = document.createElement('span');
    if(this._props.name) {
      this.fgTabLabel.innerText = this._props.name;
    }
    this.fgTab.appendChild(this.fgTabArrow);
    this.fgTab.appendChild(this.fgTabLabel);

    this.fgContents = document.createElement('div');
    this.fgContents.className = 'kuc-fieldgroup-contents';
    if (this._props.content) {
      this.fgContents.appendChild(this._props.content);
    }
    container.appendChild(this.fgTab);
    container.appendChild(this.fgContents);
    this.element.appendChild(container);
  }

  private _getClassName() {
    return [
      'kuc-fieldgroup-label',
      'label',
      this._props.toggle === 'expand' ? 'expand' : 'collapse'
    ].join(' ').trim();
  };

  private _getArrowClassName() {
    return [
      'kuc-arrow',
      this._props.toggle === 'expand' ? 'down' : 'right'
    ].join(' ').trim();
  }

  private _handleToggleClick() {
    this._props.toggle = (this._props.toggle === 'expand' ? 'collapse' : 'expand');
    this.fgTab.className = this._getClassName();
    this.fgTabArrow.className = this._getArrowClassName();
  };

  render() {
    return super.render();
  }

  setContent(content: any) {
    this._props.content = content;
    while (this.fgContents.firstChild) {
      this.fgContents.removeChild(this.fgContents.firstChild);
    }
    this.fgContents.appendChild(this._props.content);
  }

  getContent() {
    return this._props.content;
  }

  setName(name: string) {
    this._props.name = name;
    this.fgTabLabel.innerText = this._props.name;
  }

  getName() {
    return this._props.name;
  }

  setToggle(toggle: string) {
    this._props.toggle = toggle;
    this.fgTab.className = this._getClassName();
    this.fgTabArrow.className = this._getArrowClassName();
  }

  getToggle() {
    return this._props.toggle;
  }
}

export default FieldGroup;