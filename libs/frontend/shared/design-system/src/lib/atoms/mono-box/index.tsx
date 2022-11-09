import { RefObject } from 'react'
import styled, { CSSObject } from 'styled-components'

import {
  variant,
  layout,
  space,
  flexbox,
  grid,
  color,
  ColorProps,
  width,
  WidthProps,
  JustifyContentProps,
  AlignItemsProps,
  GridTemplateColumnsProps,
  GridTemplateRowsProps,
  FlexProps,
  compose,
  SpaceProps,
  LayoutProps,
  position,
  PositionProps,
  BorderProps,
  GridAutoRowsProps,
  GridAutoColumnsProps,
  GridColumnProps,
  GridColumnGapProps,
} from 'styled-system'

type BoxProps = {
  ref?: RefObject<HTMLDivElement>
  variant?: string
} & WidthProps &
  ColorProps &
  SpaceProps &
  LayoutProps &
  PositionProps &
  BorderProps

const handleProps = (props: BoxProps) => ({
  ...props,
})

const defaults: CSSObject = {
  boxSizing: 'border-box',
  '-webkit-box-sizing': 'border-box',
  '-moz-box-sizing': 'border-box',
}
export const MonoBox = styled('div').attrs<BoxProps>(handleProps)<BoxProps>(
  defaults,
  compose(space, layout, width, color, position),
)
export const SvgRect = styled('rect').attrs<BoxProps>(handleProps)<BoxProps>(
  defaults,
  compose(space, layout, width, color, position),
)

type FlexBoxProps = JustifyContentProps & AlignItemsProps & FlexProps

const flexVariants = {
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  flexCol: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
}
export const MonoFlexBox = styled(MonoBox)<FlexBoxProps>(
  compose(flexbox, position, variant({ variants: flexVariants })),
)

type GridBoxProps = GridTemplateColumnsProps &
  GridTemplateRowsProps &
  FlexBoxProps &
  GridAutoRowsProps &
  GridAutoColumnsProps &
  GridColumnProps &
  GridColumnGapProps

export const MonoGridBox = styled(MonoBox)<GridBoxProps>(compose(grid, position, flexbox, grid))
MonoGridBox.defaultProps = {
  display: 'grid',
  gridAutoRows: 'auto',
  gridAutoColumns: 'auto',
}

export const MonoModalBox = styled(MonoBox)(() => ({
  overflow: 'auto',
  height: '100%',
  width: '100%',
}))
