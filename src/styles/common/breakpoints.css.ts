export const breakpoints = {
  mobile: '768px',
  tablet: '1024px',
  desktop: '1200px'
};

export const mediaQueries = {
  mobile: `(max-width: ${breakpoints.mobile})`,
  tablet: `(min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet})`,
  desktop: `(min-width: ${breakpoints.tablet})`
};
