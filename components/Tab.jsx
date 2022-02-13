import { Tab } from '@headlessui/react';
import styled from 'styled-components';
import SwapScreen from '../screen/swap/SwapScreen';
// import SwapScreen from '../../screen/swap/SwapScreen';

const TabWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
  text-align: center;
  width: 100%;

  .tab__group {
    margin-top: 50px;
  }
  .tab__list {
    margin-bottom: 50px;
  }
  .tab__panels {
    transition: all 300ms ease-in-out;
  }
  .button {
    border: none;
    padding: 10px 20px;
    border-radius: 15px;

    cursor: pointer;
    background: #fff;
    width: 25%;
    &:nth-child(2) {
      border-top-left-radius: 0px;
      border-bottom-left-radius: 0px;
      margin-left: -10px;
    }
    &:nth-child(1) {
      border-top-right-radius: 0px;
      border-bottom-right-radius: 0px;
    }
  }
  .active {
    background: var(--primary-bg);
    &:nth-child(1) {
      border-top-right-radius: 15px;
      border-bottom-right-radius: 15px;
      color: #fff;
      position: relative;
      right: -8px;
    }
    &:nth-child(2) {
      color: #fff;
      border-top-left-radius: 15px;
      border-bottom-left-radius: 15px;
      position: relative;
      left: -8px;
    }
  }
`;
const Tabs = () => {
  return (
    <TabWrapper>
      <Tab.Group as="div" className="tab__group">
        <Tab.List as="div" className="tab__list">
          <Tab
            className={({ selected }) =>
              selected ? 'active button' : 'button'
            }
          >
            Swap
          </Tab>
          <Tab
            className={({ selected }) =>
              selected ? 'active button' : 'button'
            }
          >
            Liquidity
          </Tab>
        </Tab.List>
        <Tab.Panels as="div" className="tab__panels">
          <Tab.Panel>
            <SwapScreen />
          </Tab.Panel>
          <Tab.Panel>Content 2</Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </TabWrapper>
  );
};

export default Tabs;
