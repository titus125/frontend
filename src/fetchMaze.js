export default function fetch_maze(maze_radius=5, centreX=0, centreY=0, 
  branch_factor=0.5, seed=Math.floor(Math.random() * 10000) + 1, boardOnly=0, solution=1, colored=1) {
  const url = 'http://titus125.pythonanywhere.com/generate_image';

  const params = new URLSearchParams({
    maze_radius: maze_radius,
    centreX: centreX,
    centreY: centreY,
    branch_factor: branch_factor,
    seed: seed,
    board_only: boardOnly,
    solution: solution,
    colored: colored
  });

  const requestUrl = `${url}?${params.toString()}`;

  return fetch(requestUrl)
    .then(response => response.blob())
    .then(blob => {
      return URL.createObjectURL(blob);
    });
  }