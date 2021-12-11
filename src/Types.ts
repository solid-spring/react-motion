import type React from 'react'
// Babel 5.x doesn't support type parameters, so we make this alias here out of
// Babel's sight.

/* eslint-disable spaced-comment, no-undef */

/*::
import {Element} from 'react';
export type ReactElement = Element<*>;
*/
// === basic reused types ===
// type of the second parameter of `spring(val, config)` all fields are optional
export type SpringHelperConfig = {
  stiffness?: number;
  damping?: number;
  precision?: number;
};
// the object returned by `spring(value, yourConfig)`. For internal usage only!
export type OpaqueConfig = {
  val: number;
  stiffness: number;
  damping: number;
  precision: number;
};
// your typical style object given in props. Maps to a number or a spring config
export type Style = Record<string, number | OpaqueConfig>;
// the interpolating style object, with the same keys as the above Style object,
// with the values mapped to numbers, naturally
export type PlainStyle = Record<string, number>;
// internal velocity object. Similar to PlainStyle, but whose numbers represent
// speed. Might be exposed one day.
export type Velocity = Record<string, number>;
// === Motion ===
export type MotionProps = {
  defaultStyle?: PlainStyle;
  style: Style;
  children: (interpolatedStyle: PlainStyle) => React.ReactElement<any>;
  onRest?: () => void;
};
// === StaggeredMotion ===
export type StaggeredProps = {
  defaultStyles?: Array<PlainStyle>;
  styles: (
    previousInterpolatedStyles?: Array<PlainStyle>,
  ) => Array<Style>;
  children: (interpolatedStyles: Array<PlainStyle>) => React.ReactElement<any>;
};
// === TransitionMotion ===
export type TransitionStyle = {
  key: string;
  // unique ID to identify component across render animations
  data?: any;
  // optional data you want to carry along the style, e.g. itemText
  style: Style; // actual style you're passing
};
export type TransitionPlainStyle = {
  key: string;
  data?: any;
  // same as TransitionStyle, passed as argument to style/children function
  style: PlainStyle;
};
export type WillEnter = (styleThatEntered: TransitionStyle) => PlainStyle;
export type WillLeave = (
  styleThatLeft: TransitionStyle,
) => Style | null | undefined;
export type DidLeave = (
  styleThatLeft: {
    key: string;
    data?: any;
  },
) => void;
export type TransitionProps = {
  defaultStyles?: Array<TransitionPlainStyle>;
  styles:
    | Array<TransitionStyle>
    | ((
        previousInterpolatedStyles:
          | Array<TransitionPlainStyle>
          | null
          | undefined,
      ) => Array<TransitionStyle>);
  children: (interpolatedStyles: Array<TransitionPlainStyle>) => React.ReactElement<any>;
  willEnter?: WillEnter;
  willLeave?: WillLeave;
  didLeave?: DidLeave;
};
