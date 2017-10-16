const autoAdjustOverflow = {
  adjustX: 1,
  adjustY: 1,
};

const targetOffset = [0, 0];

const placements = {
  bottomLeft: {
    points: ['tl', 'tl'],
    overflow: autoAdjustOverflow,
<<<<<<< master
    offset: [0, -3],
=======
    offset: [0, 25],
>>>>>>> local
    targetOffset,
  },
  bottomRight: {
    points: ['tr', 'tr'],
    overflow: autoAdjustOverflow,
<<<<<<< master
    offset: [0, -3],
=======
    offset: [0, 25],
>>>>>>> local
    targetOffset,
  },
  topRight: {
    points: ['br', 'br'],
    overflow: autoAdjustOverflow,
<<<<<<< master
    offset: [0, 3],
=======
    offset: [0, 25],
>>>>>>> local
    targetOffset,
  },
  topLeft: {
    points: ['bl', 'bl'],
    overflow: autoAdjustOverflow,
<<<<<<< master
    offset: [0, 3],
=======
    offset: [0, 25],
>>>>>>> local
    targetOffset,
  },
};

export default placements;
