import Image from 'next/image';
import React, { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import TokenSelectList from '../screen/token/Token';
import { Typography } from '../styles/globals.style';
import {
  Swap__token,
  Swap__token__form,
  Swap__token__input,
  Swap__token__select,
  Swap__token__selected__balance,
} from '../styles/screen/select.style';

const Select = ({ swapto, setOpen }) => {
  const [tokenSelected, setTokenSelected] = useState('Select');

  return (
    <>
      <Swap__token>
        <Swap__token__form>
          <Swap__token__select
            onClick={() => {
              setOpen(true);
            }}
          >
            <div className="Swap__token__icon">
              <Image
                src="data:image/png;base64,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"
                width="15px"
                height="15px"
              />
            </div>
            <div className="Swap__token__label">
              <Typography as="h2" fontSize="14px" fontWeight="400">
                {tokenSelected}
              </Typography>
            </div>
            <span>
              <FiChevronDown />
            </span>
          </Swap__token__select>
          <Swap__token__input>
            {!swapto ? (
              <>
                <div className="Swap__token__input__value">
                  <input type="text" value="Enter Amount" readOnly />
                </div>
                <div className="Swap__token__input__max">
                  <button>Max</button>
                </div>
              </>
            ) : (
              <>
                <div className="Swap__token__input__value">
                  <input type="text" value="0.0000" readOnly />
                </div>
              </>
            )}
          </Swap__token__input>
        </Swap__token__form>
        {!swapto && (
          <Swap__token__selected__balance>
            <Typography as="p" fontSize="10px">
              Balance: 0 {tokenSelected}
            </Typography>
          </Swap__token__selected__balance>
        )}
      </Swap__token>
    </>
  );
};

export default Select;
