import { vars } from './theme.css';

// vanilla-extract CSS 변수를 참조하는 타입 정의
export const Colors = {
  // Opacity 계열
  opacity50: vars.colors.opacity50,
  opacity100: vars.colors.opacity100,
  opacity200: vars.colors.opacity200,
  opacity300: vars.colors.opacity300,
  opacity400: vars.colors.opacity400,
  opacity500: vars.colors.opacity500,
  opacity600: vars.colors.opacity600,
  opacity700: vars.colors.opacity700,
  opacity800: vars.colors.opacity800,
  opacity900: vars.colors.opacity900,

  // Grey 계열
  grey50: vars.colors.grey50,
  grey100: vars.colors.grey100,
  grey200: vars.colors.grey200,
  grey300: vars.colors.grey300,
  grey400: vars.colors.grey400,
  grey500: vars.colors.grey500,
  grey600: vars.colors.grey600,
  grey700: vars.colors.grey700,
  grey800: vars.colors.grey800,
  grey900: vars.colors.grey900,

  // Blue 계열
  blue50: vars.colors.blue50,
  blue100: vars.colors.blue100,
  blue200: vars.colors.blue200,
  blue300: vars.colors.blue300,
  blue400: vars.colors.blue400,
  blue500: vars.colors.blue500,
  blue600: vars.colors.blue600,
  blue700: vars.colors.blue700,
  blue800: vars.colors.blue800,
  blue900: vars.colors.blue900,

  // Red 계열
  red50: vars.colors.red50,
  red100: vars.colors.red100,
  red200: vars.colors.red200,
  red300: vars.colors.red300,
  red400: vars.colors.red400,
  red500: vars.colors.red500,
  red600: vars.colors.red600,
  red700: vars.colors.red700,
  red800: vars.colors.red800,
  red900: vars.colors.red900,

  // Orange 계열
  orange50: vars.colors.orange50,
  orange100: vars.colors.orange100,
  orange200: vars.colors.orange200,
  orange300: vars.colors.orange300,
  orange400: vars.colors.orange400,
  orange500: vars.colors.orange500,
  orange600: vars.colors.orange600,
  orange700: vars.colors.orange700,
  orange800: vars.colors.orange800,
  orange900: vars.colors.orange900,

  // Yellow 계열
  yellow50: vars.colors.yellow50,
  yellow100: vars.colors.yellow100,
  yellow200: vars.colors.yellow200,
  yellow300: vars.colors.yellow300,
  yellow400: vars.colors.yellow400,
  yellow500: vars.colors.yellow500,
  yellow600: vars.colors.yellow600,
  yellow700: vars.colors.yellow700,
  yellow800: vars.colors.yellow800,
  yellow900: vars.colors.yellow900,

  // Green 계열
  green50: vars.colors.green50,
  green100: vars.colors.green100,
  green200: vars.colors.green200,
  green300: vars.colors.green300,
  green400: vars.colors.green400,
  green500: vars.colors.green500,
  green600: vars.colors.green600,
  green700: vars.colors.green700,
  green800: vars.colors.green800,
  green900: vars.colors.green900,

  // Teal 계열
  teal50: vars.colors.teal50,
  teal100: vars.colors.teal100,
  teal200: vars.colors.teal200,
  teal300: vars.colors.teal300,
  teal400: vars.colors.teal400,
  teal500: vars.colors.teal500,
  teal600: vars.colors.teal600,
  teal700: vars.colors.teal700,
  teal800: vars.colors.teal800,
  teal900: vars.colors.teal900,

  // Purple 계열
  purple50: vars.colors.purple50,
  purple100: vars.colors.purple100,
  purple200: vars.colors.purple200,
  purple300: vars.colors.purple300,
  purple400: vars.colors.purple400,
  purple500: vars.colors.purple500,
  purple600: vars.colors.purple600,
  purple700: vars.colors.purple700,
  purple800: vars.colors.purple800,
  purple900: vars.colors.purple900,
  
  // Pink 계열
  pink50: vars.colors.pink50,
  pink100: vars.colors.pink100,
  pink200: vars.colors.pink200,
  pink300: vars.colors.pink300,
  pink400: vars.colors.pink400,
  pink500: vars.colors.pink500,
  pink600: vars.colors.pink600,
  pink700: vars.colors.pink700,
  pink800: vars.colors.pink800,
  pink900: vars.colors.pink900,
} as const;

// 타입 정의 (기존 코드와의 호환성을 위해)
export type ColorToken = typeof Colors[keyof typeof Colors];