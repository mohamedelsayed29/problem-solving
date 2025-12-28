function firstNonRepeatingChar(s) {
    const freq = {};

    // Count frequency of each character
    for (let char of s) {
        freq[char] = (freq[char] || 0) + 1;
    }

    // Find first character with frequency 1
    for (let char of s) {
        if (freq[char] === 1) {
        return char;
        }
    }

    return null;
}

// console.log(firstNonRepeatingChar("aabbcde")); // c
// console.log(firstNonRepeatingChar("aabbcc"));  // null
// console.log(firstNonRepeatingChar("javascript")); // j
