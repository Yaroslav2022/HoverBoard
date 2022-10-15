  const board = document.querySelector('#board');
  const colors = ['pink', 'blue', 'green', 'yellow', 'olive', 'silver', 'red'];
  const SQUARES_NUMBER = 990;

  for (let i = 0; i < SQUARES_NUMBER; i++) {
      const square = document.createElement('div');
      square.classList.add('square')

      square.addEventListener('mousemove', () => setColor(square))
      square.addEventListener('mouseleave', () => removeColor(square))


      board.append(square);
  }

  function setColor(element) {
      const color = getRandomColor();
      element.style.background = color;
      elrment.style.boxShadow = `0 0 2px${color}`
  }

  function removeColor(element) {
      element.style.background = '#1d1d1d'


  }


  function getRandomColor() {
      const index = Math.floor(Math.random() * colors.length)
      return colors[index]
  }