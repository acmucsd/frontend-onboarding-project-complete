let timesClicked = 0;

document.getElementById('later').onclick = () => {
  timesClicked += 1;
  document.getElementById('later').innerHTML = `nifty (clicked ${timesClicked} times!)`;
};
