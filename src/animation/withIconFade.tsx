export const iconFade = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fillOpacity: 0
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fillOpacity: 1
  }
}

export const iconTransition = {
  default: { duration: 2, ease: 'easeInOut' },
  fillOpacity: { duration: 2, ease: [1, 0, 0.8, 1] }
}
