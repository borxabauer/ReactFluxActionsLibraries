function StatesCounter ({states}) {

    const counters = []

    for (let item in states) {
        counters.push(
            <p key={item}>
                {item}: {states[item].length}
            </p>
        )
    }

    return counters

}

export default StatesCounter