function maximumElementAfterDecrementingAndRearranging(arr: number[]): number {
    arr.sort((a, b) => a - b)

    let prev = 1
    for (let i=1; i<arr.length; i++) {
        prev = Math.min(arr[i], prev + 1)
    }

    return prev
};
