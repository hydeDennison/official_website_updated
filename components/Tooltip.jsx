import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import { FiHelpCircle } from 'react-icons/fi';
export default function ArrowTooltips({ title }) {
  return (
    <Tooltip title={title} arrow>
      <Button className="tooltip__btn">
        <FiHelpCircle />
      </Button>
    </Tooltip>
  );
}
