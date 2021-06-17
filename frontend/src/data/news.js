export default (() =>
        JSON.stringify([...new Array(7)].map(
            (elem, i, arr) => {
                return {
                        title: ` a random news title n.${i}`,
                        timeAgo:
                            Math.floor(Math.random() * 10) +
                            ' ' + ['days', 'hours'][Math.floor(Math.random())],
                        readers: Math.floor(Math.random() * 10000) + ' ' + 'readers'
                    }}



        ))
)()

