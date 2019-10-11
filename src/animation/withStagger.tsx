export const staggerList = {
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.3
    }
  },
  hidden: {
    opacity: 0,
    transition: {
      when: 'afterChildren'
    }
  }
}

export const staggerItem = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 100 }
}
