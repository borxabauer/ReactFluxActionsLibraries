function StatesCounter ({states}) {

    const counters = []

    for (let item in states) {
        counters.push(
            <p>{item}: {states[item].length}</p>
        )
    }

    return counters

}

export default StatesCounter