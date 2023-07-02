const getSize = (sm, m, lg) => ({ sm: sm, m: m, lg: lg })
const getShade = () => IconTypeOption.SHADE
const getColor = colors => {
  const mapColor = {}
  colors.forEach(c => {
    mapColor[c] = c
  })
  return mapColor
}

export const IconTypeOption = {
  SIZE: { sm: 'sm', m: 'm', lg: 'lg' },
  SHADE: { primary: 'primary', secondary: 'secondary' },
}
export const MapIconStylingTemplate = {
  star: {
    width: getSize(10, 16, 20),
    height: getSize(10, 16, 20),
    shade: getShade(),
    color: getColor(['yellow', 'lynch']),
  },
  people: {
    width: getSize(null, 32, 40),
    height: getSize(null, 32, 40),
    shade: getShade(),
    color: getColor(['maroon']),
  },
  video: {
    width: getSize(null, 32, 40),
    height: getSize(null, 32, 40),
    shade: getShade(),
    color: getColor(['maroon']),
  },
  flag: {
    width: getSize(null, 32, 40),
    height: getSize(null, 32, 40),
    shade: getShade(),
    color: getColor(['maroon']),
  },
  check: {
    width: getSize(17, 24, 40),
    height: getSize(17, 24, 40),
    shade: getShade(),
    color: getColor(['maroon', 'yellow']),
  },
  arrow: {
    width: getSize(13, 18, 25),
    height: getSize(13, 18, 19),
    shade: getShade(),
    color: getColor(['gray', 'white', 'default']),
  },
  occupation: {
    width: getSize(15, 18, 22),
    height: getSize(15, 18, 22),
    shade: getShade(),
    color: getColor(['gray', 'white']),
  },
  education: {
    width: getSize(15, 18, 22),
    height: getSize(15, 18, 22),
    shade: getShade(),
    color: getColor(['gray', 'white']),
  },
  computer: {
    width: getSize(null, 32, 40),
    height: getSize(null, 32, 40),
    shade: getShade(),
    color: getColor(['maroon']),
  },
  scales: {
    width: getSize(null, 32, 40),
    height: getSize(null, 32, 40),
    shade: getShade(),
    color: getColor(['maroon']),
  },
  trophy: {
    width: getSize(null, 32, 40),
    height: getSize(null, 32, 40),
    shade: getShade(),
    color: getColor(['maroon']),
  },
  linkedin: {
    width: getSize(16, 20, 28),
    height: getSize(16, 20, 28),
    shade: getShade(),
    color: getColor(['gray']),
  },
  plusCircle: {
    width: getSize(null, 20, 24),
    height: getSize(null, 20, 24),
    shade: getShade(),
    color: getColor(['gray']),
  },
  minusCircle: {
    width: getSize(null, 18, 20),
    height: getSize(null, 18, 20),
    shade: getShade(),
    color: getColor(['gray']),
  },
}
