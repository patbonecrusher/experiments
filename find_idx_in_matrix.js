
const foo = [
	['a', 'b', 'c', 'd', 'e'],
	['g', 'h', 'i', 'j', 'k'],
	['o', 'p', 'q', 'r', 's'],
]

console.log(foo)

// This will go through an array
x = [].concat(...foo.map((row, i) => row.map((item, j) => item === 'j' ? [
	[i, j]
  ] : [])
  .filter(coord => coord.length)
 )
)

console.log(x)



const rows = [
	['a', 'f', 'k', 'p', 'u'],
	['b', 'g', 'l', 'q', 'v'],
	['c', 'h', 'm', 'r', 'w'],
	['d', 'i', 'n', 's', 'x'],
	['e', 'j', 'o', 't', 'y']
  ];
  let colIndex = -1;
  const rowIndex = rows.findIndex((row) => {
	colIndex = row.findIndex(item => item == 's')
	return colIndex != -1
  });
  console.log(rowIndex, colIndex);

frows = rows.flat()
console.log(frows)
idx = frows.findIndex(item => item == 's')
console.log(idx)

// This solution will not work if the matrix rows have different column size
console.log(idx%rows[0].length)

findByIndexMatching = (m, search_string) => {
	let colIndex = -1;
	m.findIndex((row) => {
		colIndex = row.findIndex(item => item == search_string)
		return colIndex != -1
	});
	return colIndex
}
console.log(`column idx for s is: ${findByIndexMatching(rows, 's')}`)