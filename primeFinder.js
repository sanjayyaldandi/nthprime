let nthPrime = +process.argv[2];
let isPrime = true;
let count = 0;
let primeCandidate = 2;

while (count < nthPrime) {

    for (let index = 2; index <= Math.sqrt(primeCandidate); index++) {
        if (primeCandidate % index == 0) {
            isPrime = false;
        }
    }

    if (isPrime == true) {
        count++;
    }

    isPrime = true;
    primeCandidate++;
}

console.log(--primeCandidate);