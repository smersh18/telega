const brands = ['Antminer', 'Innosilicon', 'Whatsminer']
const models = ['L3', 'L3+', 'S9', 'S9i', 'T17', 'S19']
const input  = 'Antminer L3+ 508 Mh/s - 95000\n' +
    'Antminer S9 13.5 Th/s - 40000\n' +
    'Antminer S9i 13.5/14 Th/s - 42000\n' +
    'Antminer T17 42Th/s - 180000\n' +
    'Antminer T17 40Th/s - 175000\n' +
    'Antminer S19 (new) 90 Th/s - 750000\n' +
    'Antminer S19 (new) 95 Th/s - 800000\n'


function parseData(input) {
    const inputLine = input.toLocaleLowerCase()
    let foundItem   = {}

    // process brands (via simple search)
    for (const brand of brands) {
        if (inputLine.includes(brand.toLocaleLowerCase())) {
            foundItem.brand = brand
        }
    }

    // process models (via regexp)
    const modelMatch = inputLine.match(/^\w+\s+(\w+\+?)\s+/i)
    if (!modelMatch || !modelMatch[1])
        return []

    // use first group from match
    foundItem.model = modelMatch[1]

    // TODO
    // process compute power
    foundItem.compute = "0 Th/s"
    foundItem.price = "0 RUB"

    return foundItem;
}


// parse and print
const lines = input.split('\n')
let parsed = []

for (const line of lines) {
    const data = parseData(line)
    parsed.push(data)
}

console.log(parsed.flat())
