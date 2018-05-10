import glamorous from 'glamorous';

export const Circle = glamorous.div({
    borderRadius: '50%',
    border: '1px solid black'
  }, ({ diameter }) => ({
    height: diameter,
    width: diameter
  }),
  ({ diameter, background }) => ({
    background: `url(${background}) center`,
    backgroundSize: 'cover'
  })
);
