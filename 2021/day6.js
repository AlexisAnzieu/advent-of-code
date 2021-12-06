const fish = [4, 1, 4, 1, 3, 3, 1, 4, 3, 3, 2, 1, 1, 3, 5, 1, 3, 5, 2, 5, 1, 5, 5, 1, 3, 2, 5, 3, 1, 3, 4, 2, 3, 2, 3, 3, 2, 1, 5, 4, 1, 1, 1, 2, 1, 4, 4, 4, 2, 1, 2, 1, 5, 1, 5, 1, 2, 1, 4, 4, 5, 3, 3, 4, 1, 4, 4, 2, 1, 4, 4, 3, 5, 2, 5, 4, 1, 5, 1, 1, 1, 4, 5, 3, 4, 3, 4, 2, 2, 2, 2, 4, 5, 3, 5, 2, 4, 2, 3, 4, 1, 4, 4, 1, 4, 5, 3, 4, 2, 2, 2, 4, 3, 3, 3, 3, 4, 2, 1, 2, 5, 5, 3, 2, 3, 5, 5, 5, 4, 4, 5, 5, 4, 3, 4, 1, 5, 1, 3, 4, 4, 1, 3, 1, 3, 1, 1, 2, 4, 5, 3, 1, 2, 4, 3, 3, 5, 4, 4, 5, 4, 1, 3, 1, 1, 4, 4, 4, 4, 3, 4, 3, 1, 4, 5, 1, 2, 4, 3, 5, 1, 1, 2, 1, 1, 5, 4, 2, 1, 5, 4, 5, 2, 4, 4, 1, 5, 2, 2, 5, 3, 3, 2, 3, 1, 5, 5, 5, 4, 3, 1, 1, 5, 1, 4, 5, 2, 1, 3, 1, 2, 4, 4, 1, 1, 2, 5, 3, 1, 5, 2, 4, 5, 1, 2, 3, 1, 2, 2, 1, 2, 2, 1, 4, 1, 3, 4, 2, 1, 1, 5, 4, 1, 5, 4, 4, 3, 1, 3, 3, 1, 1, 3, 3, 4, 2, 3, 4, 2, 3, 1, 4, 1, 5, 3, 1, 1, 5, 3, 2, 3, 5, 1, 3, 1, 1, 3, 5, 1, 5, 1, 1, 3, 1, 1, 1, 1, 3, 3, 1]

const fishPopulation = Array(9).fill(0)

for (let i = 0; i < fish.length; i++) {
    fishPopulation[fish[i]]++
}

for (let day = 0; day < 256; day++) {
    const parent = fishPopulation[0]
    fishPopulation[0] = fishPopulation[1]
    fishPopulation[1] = fishPopulation[2]
    fishPopulation[2] = fishPopulation[3]
    fishPopulation[3] = fishPopulation[4]
    fishPopulation[4] = fishPopulation[5]
    fishPopulation[5] = fishPopulation[6]
    fishPopulation[6] = fishPopulation[7] + parent
    fishPopulation[7] = fishPopulation[8]
    fishPopulation[8] = parent

}

console.log(fishPopulation.reduce((sum, pop) => sum + pop))
