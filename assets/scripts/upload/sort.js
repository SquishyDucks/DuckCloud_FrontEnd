const onSortTitle = function () {
  onSortTable(0)
}
const onSortDateCreated = function () {
  onSortTable(1)
}

const onSortDateModified = function () {
  onSortTable(2)
}

const onSortTags = function () {
  onSortTable(3)
}

const onSortTable = function (heading) {
  console.log('a heading was clicked!')
  let table, rows, switching, i, x, y, shouldSwitch
  table = document.getElementById('the-table')
  switching = true
  /* Make a loop that will continue until
  no switching has been done: */
  while (switching) {
    // Start by saying: no switching is done:
    switching = false
    rows = table.getElementsByTagName('TR')
    /* Loop through all table rows (except the
    first, which contains table headers): */
    for (i = 1; i < (rows.length - 1); i++) {
      // Start by saying there should be no switching:
      shouldSwitch = false
      /* Get the two elements you want to compare,
      one from current row and one from the next: */
      x = rows[i].getElementsByTagName('TD')[heading]
      y = rows[i + 1].getElementsByTagName('TD')[heading]
      // Check if the two rows should switch place:
      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
        // If so, mark as a switch and break the loop:
        shouldSwitch = true
        break
      }
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
      and mark that a switch has been done: */
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i])
      switching = true
    }
  }
}

module.exports = {
  onSortTable,
  onSortTitle,
  onSortDateCreated,
  onSortDateModified,
  onSortTags
}
