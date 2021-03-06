const areRectsIntersecting = (rect1, rect2) => {
  const areIntersectingHorizontally =
    rect1.left + rect1.width > rect2.left
    && rect1.left < rect2.left + rect2.width;

  const areIntersectingVertically = 
    rect1.top + rect1.height > rect2.top
    && rect1.top < rect2.top + rect2.height;


  return areIntersectingHorizontally && areIntersectingVertically;
};


// const areRectsIntersecting = (rect1, rect2) => 
//   (rect1.left < rect2.left + rect2.width
//     && rect1.left + rect1.width > rect2.left
//     && rect1.top < rect2.top + rect2.height
//     && rect1.top + rect1.height > rect2.top);

export default areRectsIntersecting;
