import { Typography } from '../../styles/globals.style';
import { AiFillCloseCircle } from 'react-icons/ai';
import Input from '../../components/Input';
import {
  Token__container,
  Token__info,
  Token__list__option,
  Token__Search,
  Token__select__header,
  Token__select__wrapper,
  Token__sidebar__select,
} from '../../styles/screen/token.style';
import Image from 'next/image';

const TokenSelectList = ({ setOpen }) => {
  return (
    <>
      <Token__select__wrapper>
        <Token__select__header>
          <Typography
            as="h2"
            fontSize="16px"
            color="var(--primary-bg)"
            fontWeight="800"
          >
            Select Token
          </Typography>
          <AiFillCloseCircle
            className="closeBtn"
            onClick={() => setOpen(false)}
          />
        </Token__select__header>
        <Token__Search>
          <Input placeholder="Search token name" />
        </Token__Search>
        <Token__container>
          <Token__sidebar__select>
            <ul>
              <li>
                <Image
                  src="https://avatars.githubusercontent.com/u/6250754?s=280&v=4"
                  width="40px"
                  height="40px"
                />
              </li>
              <li>
                <Image
                  src="https://avatars.githubusercontent.com/u/6250754?s=280&v=4"
                  width="40px"
                  height="40px"
                />
              </li>
              <li>
                <Image
                  src="https://avatars.githubusercontent.com/u/6250754?s=280&v=4"
                  width="40px"
                  height="40px"
                />
              </li>
              <li>
                <Image
                  src="https://avatars.githubusercontent.com/u/6250754?s=280&v=4"
                  width="40px"
                  height="40px"
                />
              </li>
              <li>
                <Image
                  src="https://avatars.githubusercontent.com/u/6250754?s=280&v=4"
                  width="40px"
                  height="40px"
                />
              </li>
            </ul>
          </Token__sidebar__select>
          <Token__list__option>
            <ul>
              <li onClick={() => setOpen(false)}>
                <Token__info>
                  <Image
                    src="https://avatars.githubusercontent.com/u/6250754?s=280&v=4"
                    width="40px"
                    height="40px"
                  />
                  <span className="name">ETH</span>
                </Token__info>
                <div className="Token__balance">
                  <span>0</span>
                </div>
              </li>
              <li onClick={() => setOpen(false)}>
                <Token__info>
                  <Image
                    src="https://avatars.githubusercontent.com/u/6250754?s=280&v=4"
                    width="40px"
                    height="40px"
                  />
                  <span className="name">ETH</span>
                </Token__info>
                <div className="Token__balance">
                  <span>0</span>
                </div>
              </li>
              <li>
                <Token__info>
                  <Image
                    src="https://avatars.githubusercontent.com/u/6250754?s=280&v=4"
                    width="40px"
                    height="40px"
                  />
                  <span className="name">ETH</span>
                </Token__info>
                <div className="Token__balance">
                  <span>0</span>
                </div>
              </li>
              <li>
                <Token__info>
                  <Image
                    src="https://avatars.githubusercontent.com/u/6250754?s=280&v=4"
                    width="40px"
                    height="40px"
                  />
                  <span className="name">ETH</span>
                </Token__info>
                <div className="Token__balance">
                  <span>0</span>
                </div>
              </li>
              <li>
                <Token__info>
                  <Image
                    src="https://avatars.githubusercontent.com/u/6250754?s=280&v=4"
                    width="40px"
                    height="40px"
                  />
                  <span className="name">ETH</span>
                </Token__info>
                <div className="Token__balance">
                  <span>0</span>
                </div>
              </li>
              <li>
                <Token__info>
                  <Image
                    src="https://avatars.githubusercontent.com/u/6250754?s=280&v=4"
                    width="40px"
                    height="40px"
                  />
                  <span className="name">ETH</span>
                </Token__info>
                <div className="Token__balance">
                  <span>0</span>
                </div>
              </li>
              <li>
                <Token__info>
                  <Image
                    src="https://avatars.githubusercontent.com/u/6250754?s=280&v=4"
                    width="40px"
                    height="40px"
                  />
                  <span className="name">ETH</span>
                </Token__info>
                <div className="Token__balance">
                  <span>0</span>
                </div>
              </li>
              <li>
                <Token__info>
                  <Image
                    src="https://avatars.githubusercontent.com/u/6250754?s=280&v=4"
                    width="40px"
                    height="40px"
                  />
                  <span className="name">ETH</span>
                </Token__info>
                <div className="Token__balance">
                  <span>0</span>
                </div>
              </li>
              <li>
                <Token__info>
                  <Image
                    src="https://avatars.githubusercontent.com/u/6250754?s=280&v=4"
                    width="40px"
                    height="40px"
                  />
                  <span className="name">ETH</span>
                </Token__info>
                <div className="Token__balance">
                  <span>0</span>
                </div>
              </li>
              <li>
                <Token__info>
                  <Image
                    src="https://avatars.githubusercontent.com/u/6250754?s=280&v=4"
                    width="40px"
                    height="40px"
                  />
                  <span className="name">ETH</span>
                </Token__info>
                <div className="Token__balance">
                  <span>0</span>
                </div>
              </li>
              <li>
                <Token__info>
                  <Image
                    src="https://avatars.githubusercontent.com/u/6250754?s=280&v=4"
                    width="40px"
                    height="40px"
                  />
                  <span className="name">ETH</span>
                </Token__info>
                <div className="Token__balance">
                  <span>0</span>
                </div>
              </li>
              <li>
                <Token__info>
                  <Image
                    src="https://avatars.githubusercontent.com/u/6250754?s=280&v=4"
                    width="40px"
                    height="40px"
                  />
                  <span className="name">ETH</span>
                </Token__info>
                <div className="Token__balance">
                  <span>0</span>
                </div>
              </li>
              <li>
                <Token__info>
                  <Image
                    src="https://avatars.githubusercontent.com/u/6250754?s=280&v=4"
                    width="40px"
                    height="40px"
                  />
                  <span className="name">ETH</span>
                </Token__info>
                <div className="Token__balance">
                  <span>0</span>
                </div>
              </li>
              <li>
                <Token__info>
                  <Image
                    src="https://avatars.githubusercontent.com/u/6250754?s=280&v=4"
                    width="40px"
                    height="40px"
                  />
                  <span className="name">ETH</span>
                </Token__info>
                <div className="Token__balance">
                  <span>0</span>
                </div>
              </li>
              <li>
                <Token__info>
                  <Image
                    src="https://avatars.githubusercontent.com/u/6250754?s=280&v=4"
                    width="40px"
                    height="40px"
                  />
                  <span className="name">ETH</span>
                </Token__info>
                <div className="Token__balance">
                  <span>0</span>
                </div>
              </li>
              <li>
                <Token__info>
                  <Image
                    src="https://avatars.githubusercontent.com/u/6250754?s=280&v=4"
                    width="40px"
                    height="40px"
                  />
                  <span className="name">ETH</span>
                </Token__info>
                <div className="Token__balance">
                  <span>0</span>
                </div>
              </li>
              <li>
                <Token__info>
                  <Image
                    src="https://avatars.githubusercontent.com/u/6250754?s=280&v=4"
                    width="40px"
                    height="40px"
                  />
                  <span className="name">ETH</span>
                </Token__info>
                <div className="Token__balance">
                  <span>0</span>
                </div>
              </li>
              <li>
                <Token__info>
                  <Image
                    src="https://avatars.githubusercontent.com/u/6250754?s=280&v=4"
                    width="40px"
                    height="40px"
                  />
                  <span className="name">ETH</span>
                </Token__info>
                <div className="Token__balance">
                  <span>0</span>
                </div>
              </li>
              <li>
                <Token__info>
                  <Image
                    src="https://avatars.githubusercontent.com/u/6250754?s=280&v=4"
                    width="40px"
                    height="40px"
                  />
                  <span className="name">ETH</span>
                </Token__info>
                <div className="Token__balance">
                  <span>0</span>
                </div>
              </li>
              <li>
                <Token__info>
                  <Image
                    src="https://avatars.githubusercontent.com/u/6250754?s=280&v=4"
                    width="40px"
                    height="40px"
                  />
                  <span className="name">ETH</span>
                </Token__info>
                <div className="Token__balance">
                  <span>0</span>
                </div>
              </li>
              <li>
                <Token__info>
                  <Image
                    src="https://avatars.githubusercontent.com/u/6250754?s=280&v=4"
                    width="40px"
                    height="40px"
                  />
                  <span className="name">ETH</span>
                </Token__info>
                <div className="Token__balance">
                  <span>0</span>
                </div>
              </li>
              <li>
                <Token__info>
                  <Image
                    src="https://avatars.githubusercontent.com/u/6250754?s=280&v=4"
                    width="40px"
                    height="40px"
                  />
                  <span className="name">ETH</span>
                </Token__info>
                <div className="Token__balance">
                  <span>0</span>
                </div>
              </li>
              <li>
                <Token__info>
                  <Image
                    src="https://avatars.githubusercontent.com/u/6250754?s=280&v=4"
                    width="40px"
                    height="40px"
                  />
                  <span className="name">ETH</span>
                </Token__info>
                <div className="Token__balance">
                  <span>0</span>
                </div>
              </li>
              <li>
                <Token__info>
                  <Image
                    src="https://avatars.githubusercontent.com/u/6250754?s=280&v=4"
                    width="40px"
                    height="40px"
                  />
                  <span className="name">ETH</span>
                </Token__info>
                <div className="Token__balance">
                  <span>0</span>
                </div>
              </li>
              <li>
                <Token__info>
                  <Image
                    src="https://avatars.githubusercontent.com/u/6250754?s=280&v=4"
                    width="40px"
                    height="40px"
                  />
                  <span className="name">ETH</span>
                </Token__info>
                <div className="Token__balance">
                  <span>0</span>
                </div>
              </li>
              <li>
                <Token__info>
                  <Image
                    src="https://avatars.githubusercontent.com/u/6250754?s=280&v=4"
                    width="40px"
                    height="40px"
                  />
                  <span className="name">ETH</span>
                </Token__info>
                <div className="Token__balance">
                  <span>0</span>
                </div>
              </li>
              <li>
                <Token__info>
                  <Image
                    src="https://avatars.githubusercontent.com/u/6250754?s=280&v=4"
                    width="40px"
                    height="40px"
                  />
                  <span className="name">ETH</span>
                </Token__info>
                <div className="Token__balance">
                  <span>0</span>
                </div>
              </li>
              <li>
                <Token__info>
                  <Image
                    src="https://avatars.githubusercontent.com/u/6250754?s=280&v=4"
                    width="40px"
                    height="40px"
                  />
                  <span className="name">ETH</span>
                </Token__info>
                <div className="Token__balance">
                  <span>0</span>
                </div>
              </li>
              <li>
                <Token__info>
                  <Image
                    src="https://avatars.githubusercontent.com/u/6250754?s=280&v=4"
                    width="40px"
                    height="40px"
                  />
                  <span className="name">ETH</span>
                </Token__info>
                <div className="Token__balance">
                  <span>0</span>
                </div>
              </li>
            </ul>
          </Token__list__option>
        </Token__container>
      </Token__select__wrapper>
    </>
  );
};

export default TokenSelectList;
