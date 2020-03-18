function solution(n) {
    var answer = 0;
    const half = parseInt(n / 2);

    let sum;
    let i;
    let j;

    i = 0;
    while (++i <= half) {
        sum = i;
        j = i;
        while (++j) {
            sum += j
            if (sum > n)
                break;
            if (sum === n)
                answer++;
        }
    }
    answer++;
    return answer;
}