function menuLinks() {
  let links = document.querySelectorAll('a');

links.forEach(link => link.addEventListener('mouseenter', shootLines));

function shootLines(e) {

    const itemDim = this.getBoundingClientRect(),
          itemSize = {
            x: itemDim.right - itemDim.left,
            y: itemDim.bottom - itemDim.top,
          },
          shapes = ['line', 'zigzag'],
          colors = ['#2FB5F3',
                    '#FF0A47',
                    '#FF0AC2',
                    '#47FF0A'];
    
    const chosenC = Math.floor(Math.random() * colors.length),
          chosenS = Math.floor(Math.random() * shapes.length);
  };
}

module.exports = menuLinks;