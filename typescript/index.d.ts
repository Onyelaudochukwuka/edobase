declare global {
  declare namespace Types {
    export interface IconProps {
      className?: string
    }
    export type Props = any;
    export type PropTypes<T, P> = T & P;
  }
}
export = Types;
