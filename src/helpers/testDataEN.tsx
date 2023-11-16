const quizEN = [
  {
    question: "A discrete source without memory is characterized by:",
    answers: [
      "Symbols are finite but dependent",
      "Symbols are infinite and independent",
      "Symbols are finite and independent",
      "The statistical model is a discrete random variable",
    ],
    correctAnswers: [
      "Symbols are finite and independent",
      "The statistical model is a discrete random variable",
    ],
  },
  {
    question: "Information entropy:",
    answers: [
      "Is the amount of information corresponding to each emitted symbol",
      "Is the average amount of information per emitted symbol",
      "Is strictly positive",
      "Is positive",
    ],
    correctAnswers: [
      "Is the average amount of information per emitted symbol",
      "Is positive",
    ],
  },
  {
    question: "Information entropy:",
    answers: [
      "Is the quantity of information corresponding to each emitted symbol",
      "Is the average quantity of information corresponding to each emitted symbol",
      "Is measured in bits",
      "Is maximum for equiprobability of symbols",
    ],
    correctAnswers: [
      "Is the average quantity of information corresponding to each emitted symbol",
      "Is maximum for equiprobability of symbols",
    ],
  },
  {
    question: "Decision rate:",
    answers: [
      "Speed of the decision quantity transmission",
      "Is measured in bits per symbol",
      "Is measured in Bd (Baud)",
      "Is equal to the moment rate for an equiprobable binary source",
    ],
    correctAnswers: [
      "Speed of the decision quantity transmission",
      "Is equal to the moment rate for an equiprobable binary source",
    ],
  },
  {
    question:
      "For channels, the quantity allowing their quantitative comparison is:",
    answers: [
      "Output entropy",
      "Mutual information",
      "Average error",
      "Transinformation",
    ],
    correctAnswers: ["Transinformation"],
  },
  {
    question: "For a disturbance-free channel, we have:",
    answers: [
      "Null transinformation",
      "Transinformation equal to the source entropy",
      "Transinformation equal to the reception entropy",
      "Null average error",
    ],
    correctAnswers: [
      "Transinformation equal to the source entropy",
      "Transinformation equal to the reception entropy",
      "Null average error",
    ],
  },
  {
    question: "For an independent channel, we have:",
    answers: [
      "Average error equal to the source entropy",
      "Equiprobability equal to the source entropy",
      "Null transinformation",
      "Transinformation equal to the source entropy",
    ],
    correctAnswers: [
      "Equiprobability equal to the source entropy",
      "Null transinformation",
    ],
  },
  {
    question: "For an independent channel, we have:",
    answers: [
      "Conditioned probabilities equal to unconditioned ones",
      "Input and output are independent",
      "Average error equal to the output entropy",
      "Null transinformation",
    ],
    correctAnswers: [
      "Conditioned probabilities equal to unconditioned ones",
      "Input and output are independent",
      "Average error equal to the output entropy",
      "Null transinformation",
    ],
  },
  {
    question: "Channel capacity:",
    answers: [
      "Is the maximum transinformation obtained by processing the source",
      "Is the maximum transinformation obtained by adapting the source to the channel",
      "Is measured in bits/symbol",
      "Is measured in bits",
    ],
    correctAnswers: [
      "Is the maximum transinformation obtained by processing the source",
      "Is the maximum transinformation obtained by adapting the source to the channel",
      "Is measured in bits/symbol",
    ],
  },
  {
    question: "Consider a symmetric binary channel with p = 0.5. This channel:",
    answers: [
      "Is disturbance-free",
      "Has efficiency 1",
      "Has null transinformation",
      "Is an independent channel",
    ],
    correctAnswers: ["Has null transinformation", "Is an independent channel"],
  },
  {
    question: "Consider a symmetric binary channel with p = 1. This channel:",
    answers: [
      "Is an independent channel",
      "Has efficiency 1",
      "Has transinformation equal to the source entropy",
      "Is a disturbance-free channel",
    ],
    correctAnswers: [
      "Has transinformation equal to the source entropy",
      "Is a disturbance-free channel",
    ],
  },
  {
    question:
      "For a channel defined by bandwidth and signal-to-noise ratio (SNR), the following are valid:",
    answers: [
      "Any amount of information can be transmitted",
      "Real-time transmission of a maximum rate equal to capacity is possible",
      "Real-time transmission is possible only at a maximum rate equal to capacity",
      "Achieving capacity is only possible if time and amplitude resolution are met",
    ],
    correctAnswers: [
      "Any amount of information can be transmitted",
      "Real-time transmission is possible only at a maximum rate equal to capacity",
      "Achieving capacity is only possible if time and amplitude resolution are met",
    ],
  },
  {
    question: "Channel capacity:",
    answers: [
      "Is directly proportional to bandwidth and SNR",
      "Is equal to the maximum information rate transmitted in real-time",
      "Can be achieved with high SNR channels and wide bandwidth without other conditions",
      "Can be achieved only by meeting time and amplitude resolution",
    ],
    correctAnswers: [
      "Is equal to the maximum information rate transmitted in real-time",
      "Can be achieved only by meeting time and amplitude resolution",
    ],
  },
  {
    question:
      "For a channel with a bandwidth of 1MHz, what is the maximum moment rate that can be transmitted?",
    answers: ["2 Mbit/s", "1.25 Mbit/s", "500 Kbit/s", "800 Kbit/s "],
    correctAnswers: ["2 Mbit/s", "1.25 Mbit/s"],
  },
  {
    question: "The purpose of source coding is:",
    answers: [
      "Statistical adaptation of the source to the channel through compression",
      "Adapting the nature of the source to the nature of the channel",
      "Reducing the effects of noise on the channel",
      "Confidentiality in transmission/storage",
    ],
    correctAnswers: [
      "Statistical adaptation of the source to the channel through compression",
      "Adapting the nature of the source to the nature of the channel",
    ],
  },
  {
    question: "Lossless compression codes are:",
    answers: ["Uniform", "Non-uniform", "Uniquely decodable", "Instantaneous"],
    correctAnswers: ["Non-uniform", "Uniquely decodable", "Instantaneous"],
  },
  {
    question: "AO (Absolutely Optimal) codes have:",
    answers: [
      "Unitary efficiency",
      "Average length equal to the average emitted length",
      "Average length equal to the length of uniform coding",
      "Average length equal to the length of the shortest code word",
    ],
    correctAnswers: [
      "Unitary efficiency",
      "Average length equal to the average emitted length",
    ],
  },
  {
    question: "AO (Absolutely Optimal) codes have:",
    answers: [
      "Unitary efficiency",
      "Can be obtained for any source",
      "Cannot be obtained for any source",
      "Achieve statistical adaptation of the source to the channel",
    ],
    correctAnswers: [
      "Unitary efficiency",
      "Cannot be obtained for any source",
      "Achieve statistical adaptation of the source to the channel",
    ],
  },
  {
    question:
      "Introduction of redundancy for coding channels with disturbances:",
    answers: [
      "Allows error detection/correction",
      "Leads to increased bandwidth in transmission",
      "Leads to compression",
      "Allows efficient channel use by reducing bandwidth",
    ],
    correctAnswers: [
      "Allows error detection/correction",
      "Leads to increased bandwidth in transmission",
    ],
  },
  {
    question:
      "Error prediction codes can be classified in terms of information processing into:",
    answers: [
      "Block",
      "Convolutional (continuous)",
      "Separable",
      "Non-separable",
    ],
    correctAnswers: ["Block", "Convolutional (continuous)"],
  },
  {
    question: "Huffman coding algorithm results in obtaining a code:",
    answers: [
      "unique",
      "optimal",
      "instantaneous",
      "of minimum average length",
    ],
    correctAnswers: ["optimal", "instantaneous", "of minimum average length"],
  },
  {
    question: "For the words v1 = [1101010] and v2 = [0111100]:",
    answers: [
      "Hamming weights are: 4",
      "Hamming weights are: 3",
      "Hamming distance between v1 and v2 is: 4",
      "Hamming distance between v1 and v2 is: 3",
    ],
    correctAnswers: [
      "Hamming weights are: 4",
      "Hamming distance between v1 and v2 is: 4",
    ],
  },
  {
    question: "The code distance is:",
    answers: [
      "Minimum Hamming weight of code words",
      "Average Hamming weight of code words",
      "Minimum Hamming distance between any two code words",
      "Maximum Hamming distance between any two code words",
    ],
    correctAnswers: [
      "Minimum Hamming weight of code words",
      "Minimum Hamming distance between any two code words",
    ],
  },
  {
    question:
      "The necessary and sufficient condition for correcting t errors and detecting errors is:",
    answers: [
      "d >= t + e + 1, e > t",
      "d >= t + e + 1, t > e",
      "d >= e + 1",
      "d >= 2t + 1",
    ],
    correctAnswers: ["d >= t + e + 1, e > t"],
  },
  {
    question: "For block codes, the size of the generator matrix is:",
    answers: ["[k x n]", "[m x n]", "[1 x m]", "[1 x k]"],
    correctAnswers: ["[m x n]"],
  },
  {
    question: "The control matrix of a block code:",
    answers: [
      "Has dimensions [n x k]",
      "Has dimensions [k x n]",
      "Is orthogonal to the generator matrix",
      "Is orthogonal to the code word",
    ],
    correctAnswers: [
      "Has dimensions [k x n]",
      "Is orthogonal to the generator matrix",
      "Is orthogonal to the code word",
    ],
  },
  {
    question: "Error syndrome:",
    answers: [
      "Is a function of the transmitted code word",
      "Is a function of the error word",
      "Is not a function of the error word",
      "Allows error detection",
    ],
    correctAnswers: [
      "Allows error detection",
      "Is a function of the error word",
    ],
  },
  {
    question: "For detecting t errors, the control matrix has:",
    answers: [
      "The modulo-2 sum of 2t columns different from zero",
      "The modulo-2 sum of t columns different from zero",
      "All columns are different from 0 and distinct",
      "All columns are distinct",
    ],
    correctAnswers: ["The modulo-2 sum of t columns different from zero"],
  },
  {
    question: "The perfect Hamming code is:",
    answers: ["perfect", "corrector of one error", "separable", "systematic"],
    correctAnswers: ["perfect", "corrector of one error", "separable"],
  },
  {
    question: "The perfect Hamming code has:",
    answers: [
      "code distance 4",
      "is a corrector of one error and a double error detector",
      "control matrix with all columns distinct and non-zero",
      "encoding relationship is v = i*G",
    ],
    correctAnswers: [
      "control matrix with all columns distinct and non-zero",
      "encoding relationship is v = i*G",
    ],
  },
  {
    question: "The extended Hamming code has:",
    answers: [
      "generator matrix of size [m x n]",
      "generator matrix of size [m x (n + 1)]",
      "control matrix of size [k x (n + 1)]",
      "control matrix of size [(k + 1) x (n + 1)]",
    ],
    correctAnswers: ["generator matrix of size [m x (n + 1)]"],
  },
  {
    question: "For the extended Hamming code, if:",
    answers: [
      "S1 = 0, S2 = 1 => an+1 is in error",
      "S1 != 0, S2 = 0 => detection of 2 errors",
      "S1 != 0, S2 = 1 => one correctable error at positions 1, n",
      "S1 = 0, S2 = 0  => no errors or undetectable errors",
    ],
    correctAnswers: [
      "S1 != 0, S2 = 0 => detection of 2 errors",
      "S1 != 0, S2 = 1 => one correctable error at positions 1, n",
      "S1 = 0, S2 = 0  => no errors or undetectable errors",
    ],
  },
  {
    question: "Cyclic codes are:",
    answers: [
      "separable block codes",
      "systematic",
      "non-systematic",
      "represented vectorially",
    ],
    correctAnswers: ["separable block codes", "systematic", "non-systematic"],
  },
  {
    question: "BCH codes (m, n):",
    answers: [
      "the degree of the generator polynomial is n-m",
      "the degree of the generator polynomial is k' = kt",
      "the extension field of Galois in which k' operates from the relation n = 2^k - 1",
      "the systematic encoding relationship is: v(x) = i(x)g(x)",
    ],
    correctAnswers: [
      "the degree of the generator polynomial is n-m",
      "the degree of the generator polynomial is k' = kt",
      "the extension field of Galois in which k' operates from the relation n = 2^k - 1",
    ],
  },
  {
    question: "BCH codes (m, n):",
    answers: [
      "the number of correctable errors is t = k'/k",
      "the number of correctable errors is t = k'/2",
      "detection is done at the end of block reception",
      "the error syndrome for detection is the remainder r(x)/g(x) != 0",
    ],
    correctAnswers: [
      "the number of correctable errors is t = k'/k",
      "detection is done at the end of block reception",
      "the error syndrome for detection is the remainder r(x)/g(x) != 0",
    ],
  },
  {
    question: "For BCH codes (m, n):",
    answers: [
      "correction is possible at the end of n",
      "correction is possible during the period (n+1, 2n)",
      "for an error at position i = 0, n-1 at time n, the syndrom register reaches a fixed state",
      "for an error at position i = 0, n-1 at time n + (n - i - 1), the syndrom register reaches a fixed state",
    ],
    correctAnswers: ["correction is possible during the period (n+1, 2n)"],
  },
  {
    question:
      "For systematic BCH code (4,7), for i = [1 1 1 1], the codeword using g(x) = x^3 + x + 1 is:",
    answers: [
      "[1 1 1 1 0 0 1] with LSB on the right",
      "[1 0 0 1 1 1 1] with MSB on the left",
      "[1 1 1 0 1 1 0] with MSB on the left",
      "[1 1 1 1 1 1 1]",
    ],
    correctAnswers: ["[1 1 1 1 1 1 1]"],
  },
  {
    question:
      "For systematic BCH code (4,7) with g(x) = x^3+x^2+1 and reception of [1 1 1 0 1 1 1], what is the correct word it comes from and at what time is the correction made?",
    answers: [
      "1111111 at time 12",
      "1111011 at time 14",
      "1111111 at time 10",
      "1110111 at time 9",
    ],
    correctAnswers: ["1111111 at time 10"],
  },
  {
    question: "Reed-Solomon (RS) codes are:",
    answers: [
      "non-binary cyclic codes correcting only independent errors",
      "non-binary cyclic codes correcting only independent and packet errors",
      "separable or non-separable block codes",
      "codes with a low coding rate",
    ],
    correctAnswers: [
      "non-binary cyclic codes correcting only independent and packet errors",
      "separable or non-separable block codes",
    ],
  },
  {
    question: "RS code (7,5):",
    answers: [
      "has a length of 14 bits",
      "has a length of 21 bits",
      "is a 2-error corrector",
      "is a 1-error corrector",
    ],
    correctAnswers: ["is a 1-error corrector", "has a length of 21 bits"],
  },
  {
    question:
      "For RS code (7,5) if the error is at position r4, at what time is the Chien search equation satisfied?",
    answers: ["10", "9", "11", "12"],
    correctAnswers: ["9"],
  },
  {
    question: "RS code (7,5):",
    answers: [
      "operates in the 4th extension of the Galois field",
      "the generator polynomial has a degree of 4",
      "is a 1-error corrector",
      "the generator polynomial has a degree of 2",
    ],
    correctAnswers: ["is a 1-error corrector"],
  },
  {
    question: "Convolutional codes are:",
    answers: [
      "block codes",
      "continuous codes",
      "with a coding rate lower compared to block codes",
      "suitable for applications where bandwidth requirements are limited",
    ],
    correctAnswers: [
      "continuous codes",
      "with a coding rate lower compared to block codes",
    ],
  },
  {
    question:
      "For the convolutional code R = ½, K=3, systematic variant with g(x) = x^2 + x +1. The code has:",
    answers: [
      "d3= 3, d∞= 3",
      "d3= 3, d∞ = 8",
      "the code can correct at most one error",
      "the code can correct one error and detect 2 errors",
    ],
    correctAnswers: [
      "d3= 3, d∞ = 8",
      "the code can correct one error and detect 2 errors",
    ],
  },
];
export default quizEN;
