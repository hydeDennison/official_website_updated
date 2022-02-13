import { Typography } from '../../styles/globals.style';
import { MdSettings } from 'react-icons/md';
import { FiHelpCircle } from 'react-icons/fi';

import Image from 'next/image';
import {
  Swap__btn,
  Swap__form,
  Swap__screen_wrapper,
  Swap__screen__body,
  Swap__screen__container,
  Swap__screen__header,
  Swap__summary,
  Swap__toggle,
} from '../../styles/screen/swap.style';
import Button from '../../components/Button';
import Select from '../../components/Select';
import ArrowTooltips from '../../components/Tooltip';
import Modal from '../../components/Modal';
import TokenSelectList from '../token/Token';
import { useState } from 'react';
const SwapScreen = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Modal open={open}>
        <TokenSelectList setOpen={setOpen} />
      </Modal>
      <Swap__screen_wrapper>
        <Swap__screen__header>
          <div className="Swap__screen__text">
            <Typography
              as="h2"
              fontSize="20px"
              fontWeight="800"
              color="var(--primary-bg)"
            >
              Swap
            </Typography>
            <Typography as="p" fontSize="12px" color="var(--primary-bg)">
              Swap two tokens for one, pay less.
            </Typography>
          </div>
          <div className="Swap__screen__setting">
            <MdSettings onClick={() => setOpen(true)} />
          </div>
        </Swap__screen__header>
        <Swap__screen__body>
          <div className="Swap__from">
            <Typography as="p" fontSize="10px">
              From
            </Typography>
          </div>
          <Swap__screen__container>
            <Swap__form>
              <Select setOpen={setOpen} />
            </Swap__form>
            <Swap__form>
              <Select setOpen={setOpen} />
            </Swap__form>
          </Swap__screen__container>
          <Swap__toggle>
            <div className="Swap__toggle__bg">
              <Image
                src="/images/refresh.svg"
                width="20px"
                height="20px"
                alt="toggle"
              />
            </div>
          </Swap__toggle>
          <div className="Swap__from">
            <Typography as="p" fontSize="10px">
              To
            </Typography>
          </div>
          <Swap__screen__container>
            <Swap__form>
              <Select swapto setOpen={setOpen} />
            </Swap__form>
          </Swap__screen__container>
          <Swap__summary>
            <div className="summary">
              <Typography
                as="p"
                fontSize="12px"
                fontWeight="400"
                color="#9978C5"
                lineHeight="24px"
              >
                Minimum received <ArrowTooltips title="Title goes here" />
              </Typography>
              <Typography
                as="h2"
                fontSize="14px"
                color="#350870"
                fontWeight="500"
              >
                0.00
              </Typography>
            </div>
            <div className="summary">
              <Typography
                as="p"
                fontSize="12px"
                fontWeight="400"
                color="#9978C5"
                lineHeight="24px"
              >
                Price impact <ArrowTooltips title="Title goes here" />
              </Typography>
              <Typography
                as="h2"
                fontSize="14px"
                color="#1C8D61"
                fontWeight="500"
              >
                0.05%
              </Typography>
            </div>
            <div className="summary">
              <Typography
                as="p"
                fontSize="12px"
                fontWeight="400"
                color="#9978C5"
                lineHeight="24px"
              >
                Liquidity provider <ArrowTooltips title="Title goes here" />
              </Typography>
              <Typography
                as="h2"
                fontSize="14px"
                color="#350870"
                fontWeight="500"
              >
                0.00000001 BTC
              </Typography>
            </div>
          </Swap__summary>
          <Swap__btn>
            <Button label="Swap" bgColor="#B1B1B1" color="#fff" />
          </Swap__btn>
        </Swap__screen__body>
      </Swap__screen_wrapper>
    </>
  );
};

export default SwapScreen;
