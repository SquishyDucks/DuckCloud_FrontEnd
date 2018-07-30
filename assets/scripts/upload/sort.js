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
  let rows, i, x, y, shouldSwitch
  const table = document.getElementById('the-table')
  let switching = true
  while (switching) {
    switching = false
    rows = table.getElementsByTagName('TR')
    for (i = 1; i < (rows.length - 1); i++) {
      shouldSwitch = false
      x = rows[i].getElementsByTagName('TD')[heading]
      y = rows[i + 1].getElementsByTagName('TD')[heading]
      if (heading === 0 || heading === 3) {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          shouldSwitch = true
          break
        }
      } else {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          shouldSwitch = true
          break
        }
      }
    }
    if (shouldSwitch) {
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
