import React, {useState, useEffect} from 'react';
import '../../css/font.css';
import '../../css/Tabs.css';
import Message from '../../constant/Message';

type TabsItem = {
  tabName: string;
  tabContent?: any;
  isDisabled?: boolean;
};

type TabsProps = {
  items?: TabsItem[];
  value?: number;
  onClickTabItem?: (tabIndex: number) => void;
};

const Tabs = ({items, value, onClickTabItem}: TabsProps) => {
  const [defaultValue, setDefaultValue] = useState(value);
  const _onClickTabItem = (tabIndex: number) => {
    onClickTabItem && onClickTabItem(tabIndex);
  };

  if (defaultValue) {
    if (typeof defaultValue !== 'number') {
      throw new Error(Message.common.INVALID_ARGUMENT);
    }
    if (!items || defaultValue > items.length - 1 || defaultValue < 0) {
      throw new Error(Message.common.INVALID_ARGUMENT);
    }
  }
  useEffect(() => {
    setDefaultValue(value);
  }, [value]);

  useEffect(() => {
    if (!defaultValue && items && items.length > 0) {
      setDefaultValue(0);
    }
  }, [defaultValue, items]);

  const tabNames = (
    <ul className="kuc-tabs-tab-list">
      {items &&
        items.map((item: TabsItem, tabIndex: number) => {
          if (!item.tabName) {
            throw new Error(Message.tabs.MISSING_TAB_NAME.replace('{{index}}', tabIndex.toString()));
          }
          let className = 'kuc-tabs-container';
          if (defaultValue === tabIndex) {
            className += ' kuc-tabs-container-selection';
            if (item.isDisabled) {
              throw new Error(Message.tabs.INVALID_ACTION);
            }
          } else if (item.isDisabled) {
            className += ' kuc-tabs-disabled';
            return (
              <li className={className} key={tabIndex}>
                {item.tabName}
              </li>
            );
          }
          return (
            <li
              role="none"
              className={className}
              key={tabIndex}
              onClick={() => _onClickTabItem(tabIndex)}
              onKeyUp={() => _onClickTabItem(tabIndex)}
            >
              {item.tabName}
            </li>
          );
        })}
    </ul>
  );
  const tabContents =
    items &&
    items.map((item: TabsItem, tabIndex: number) => {
      if (tabIndex !== defaultValue) return undefined;
      return (
        <div className="kuc-tabs-tab-contents" key={tabIndex}>
          <div>{item.tabContent}</div>
        </div>
      );
    });
  return (
    <div className="kuc-tabs-tabs">
      {tabNames}
      {tabContents}
    </div>
  );
};

export default Tabs;
