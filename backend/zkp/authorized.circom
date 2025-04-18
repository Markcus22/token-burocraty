
pragma circom 2.0.0;

include "circomlib/circuits/comparators.circom";

template CheckHashInList(n) {
    signal input hash;
    signal input validHashes[n];
    signal output result;

    signal matches[n];
    component eqs[n];

    for (var i = 0; i < n; i++) {
        eqs[i] = IsEqual();
        eqs[i].in[0] <== hash;
        eqs[i].in[1] <== validHashes[i];
        matches[i] <== eqs[i].out;
    }

    signal acc[n + 1];
    acc[0] <== 0;

    for (var i = 0; i < n; i++) {
        acc[i + 1] <== acc[i] + matches[i];
    }

    component isOne = IsEqual();
    isOne.in[0] <== acc[n];
    isOne.in[1] <== 1;
    result <== isOne.out;
}

component main = CheckHashInList(3);
