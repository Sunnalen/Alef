export type TSizeBtn = 'l' | 'm' | 's'
export type TColorBtn = 'white' | 'blue' | 'transparent'

export interface ISharedButtonProps {
  size?: TSizeBtn,
  color: TColorBtn,
}

export type TButtonSizeClass = Record<TSizeBtn, string>
export type TButtonColorClass = Record<TColorBtn, string>