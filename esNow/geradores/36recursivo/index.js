const nestObj = {
  att1: 0,
  att2: "2",
  att3: {
    att4: 4,
    att5: "5",
    att6: ["6", 6],
    att7: [
      {
        att8: ["8", 8]
      },
      {
        att9: 9,
      },
      {
        att10: {
          att11: {
            att12: "12",
          },
        },
      },
    ],
  },
}

const entries = obj => Object.entries(obj).map(
  ([k, v]) => ([k, v instanceof Object ? entries(v) : v])
)

console.log(JSON.stringify(entries(nestObj), null, 2))

/**
 * criar a versao com gerador da funcao entries, mas que retorne achatado
 * [
 *   ['/att1', 0],
 *   ['/att2', '2'],
 *   ['/att3/att4', 4],
 *   ['/att3/att5', '5'],
 *   ['/att3/att6/0', '6'],
 *   ['/att3/att6/1', 6],
 *   ['/att3/att7/0/att8/0', '8'],
 *   ['/att3/att7/0/att8/1', 8],
 *   ['/att3/att7/1/att9', 9],
 *   ['/att3/att7/2/att10/att11/att12', 12],
 * ]
 */
