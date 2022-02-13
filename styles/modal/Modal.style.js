import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Modal__backdrop = styled(motion.div)`
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  backdrop-filter: blur(5px);
  background: rgba(0, 0, 0, 0.6);
  z-index: 999;
`;

export const Modal__content__wrapper = styled(motion.div)`
  position: fixed;
  min-width: 400px;
  width: 400px;
  height: 400px;
  min-height: 500px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  margin: auto;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  padding: 10px;
`;

export const Modal__content = styled(motion.div)`
  display: flex;
`;
