function maximumLength(nums: number[]): number {
    let freqs = new Map<number, number>();

    for (let i = 0; i < nums.length; i++) {
        if (freqs.has(nums[i])) {
            freqs.set(nums[i], freqs.get(nums[i])! + 1);
        } else {
            freqs.set(nums[i], 1);
        }
    }

    let ans = 1

    for (const v of freqs.keys()) {
        if (v === 1) {
            const c = freqs.get(1)!;
            ans = Math.max(ans, c % 2 === 1 ? c : c - 1);
            continue;
        }

        let length = 0;
        let current = v;

        while (true) {
            const c = freqs.get(current)!;
            const next = current * current;

            if (c >= 2 && freqs.has(next)) {
                length += 2;
                current = next;
            } else {
                length += 1;
                break;
            }
        }

        ans = Math.max(ans, length);
    }

    return ans
};
