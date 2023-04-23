export default function fetch_maze(maze_radius=5, centreX=0, centreY=0, 
  branch_factor=0.5, seed=Math.floor(Math.random() * 10000) + 1, boardOnly=0, colored=1) {
  const url = 'http://titus125.pythonanywhere.com/generate_image';

  const mazeParams = new URLSearchParams({
    maze_radius: maze_radius,
    centreX: centreX,
    centreY: centreY,
    branch_factor: branch_factor,
    seed: seed,
    board_only: boardOnly,
    solution: 0,
    colored: colored
  });

  const solutionParams = new URLSearchParams({
    maze_radius: maze_radius,
    centreX: centreX,
    centreY: centreY,
    branch_factor: branch_factor,
    seed: seed,
    board_only: boardOnly,
    solution: 1,
    colored: colored
  });

  const mazeUrl = `${url}?${mazeParams.toString()}`;
  const solutionUrl = `${url}?${solutionParams.toString()}`;

  function fetch_specific_maze(requestUrl) {
    return fetch(requestUrl)
    .then(response => response.blob())
    .then(blob => {
      return URL.createObjectURL(blob);
    });  
  }

  let mazePromise = fetch_specific_maze(mazeUrl);
  let solutionPromise = fetch_specific_maze(solutionUrl);

  return Promise.all([mazePromise, solutionPromise]).then(values => {
    let maze = values[0];
    let solution = values[1];
    return {maze: maze, solution: solution};
  });
}