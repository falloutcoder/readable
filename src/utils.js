export const sortUtil = (field) => {
    return (post1,post2) => {
      const p1 = post1[field]
      const p2 = post2[field]
      if (p1 < p2) {
        return -1
      }
      if (p1 > p2) {
        return 1
      }
      return 0
    }
}

export const formatTimeStamp = (rawTimeStamp) => {
    const timeStamp = new Date(parseInt(rawTimeStamp, 10))
    return timeStamp.toLocaleString()
}
