import {SvgIconTypeMap} from '@mui/material';
import {OverridableComponent} from '@mui/material/OverridableComponent';

export interface ButtonInterface {
  text: string;
  bg: string;
  color: string;
  icon?: OverridableComponent<SvgIconTypeMap<{}, 'svg'>>;
  classes?: string;
  onClick: () => any;
}
