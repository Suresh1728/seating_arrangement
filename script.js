function calculateAvailableSeatingOptions() {
  const seatingArrangement = document.getElementById("seatingArrangement").value;
  const numOfFriends = parseInt(document.getElementById("numOfFriends").value);

  try {
    const seatingArr = JSON.parse(seatingArrangement);
    const count = countAvailableSeatingOptions(seatingArr, numOfFriends);
    document.getElementById("outputCount").textContent = `Available Seating Options: ${count}`;
  } catch (error) {
    document.getElementById("outputCount").textContent = "Invalid seating arrangement!";
  }
}

function countAvailableSeatingOptions(seatingArrangement, n) {
  const rows = seatingArrangement.length;
  let count = 0;

  for (let i = 0; i < rows; i++) {
    const seats = seatingArrangement[i];
    const vacantGroups = [];
    let vacantCount = 0;

    for (let j = 0; j < seats.length; j++) {
      if (seats[j] === 0) {
        vacantCount++;
      } else {
        if (vacantCount >= n) {
          vacantGroups.push(vacantCount);
        }
        vacantCount = 0;
      }
    }

    if (vacantCount >= n) {
      vacantGroups.push(vacantCount);
    }

    for (let k = 0; k < vacantGroups.length; k++) {
      count += vacantGroups[k] - n + 1;
    }
  }

  return count;
}