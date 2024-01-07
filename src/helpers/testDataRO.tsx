const quizRO = [
  {
    question: "O sursă discretă fără memorie este caracterizată prin:",
    answers: [
      "Simbolurile sunt finite, dar dependente",
      "Simbolurile sunt infinite, dar independente",
      "Simbolurile sunt finite și independente",
      "Modelul statistic este o variabilă aleatoare discretă",
    ],
    correctAnswers: [
      "Simbolurile sunt finite și independente",
      "Modelul statistic este o variabilă aleatoare discretă",
    ],
  },
  {
    question: "Entropia informațională:",
    answers: [
      "Este cantitatea de informație corespunzătoare fiecărui simbol emis",
      "Este cantitatea medie de informație pe simbol emis",
      "Este strict pozitivă",
      "Este pozitivă",
    ],
    correctAnswers: [
      "Este cantitatea medie de informație pe simbol emis",
      "Este pozitivă",
    ],
  },
  {
    question: "Entropia informațională:",
    answers: [
      "Este cantitatea de informație corespunzătoare fiecărui simbol emis   ",
      "Este cantitatea medie de informație  corespunzătoare pe simbol emis ",
      "Se măsoară în biți",
      "Este maximă pentru echiprobabilitatea simbolurilor",
    ],
    correctAnswers: [
      "Este cantitatea medie de informație  corespunzătoare pe simbol emis ",
      "Este maximă pentru echiprobabilitatea simbolurilor",
    ],
  },
  {
    question: "Debitul de decizie:",
    answers: [
      "Viteza cantității de transmitere a cantității de decizie",
      "Se măsoară în biți pe simbol",
      "Se măsoară în Bd",
      "Este egal cu debitul de momente pentru o sursă binară echiprobabilă",
    ],
    correctAnswers: [
      "Viteza cantității de transmitere a cantității de decizie",
      "Este egal cu debitul de momente pentru o sursă binară echiprobabilă",
    ],
  },

  {
    question:
      "Pentru canale, mărimea ce permite comparația cantitativă a acestora este:",
    answers: [
      "Entropia de ieșire",
      "Informația mutuală",
      "Eroare medie",
      "Transinformația",
    ],
    correctAnswers: ["Transinformația"],
  },
  {
    question: "Pentru un canal fără perturbații avem:",
    answers: [
      "transinformația nulă",
      "transinformația egală cu entropia sursei",
      "transinformația egală cu entropia la recepție",
      "eroare medie nulă",
    ],
    correctAnswers: [
      "transinformația egală cu entropia sursei",
      "transinformația egală cu entropia la recepție",
      "eroare medie nulă",
    ],
  },
  {
    question: "Pentru un canal independent avem :",
    answers: [
      "eroarea medie egală cu entropia sursei",
      "echivocația egală cu entropia sursei",
      "transinformația nulă",
      "transinformația egală cu entropia sursei",
    ],
    correctAnswers: [
      "echivocația egală cu entropia sursei",
      "transinformația nulă",
    ],
  },
  {
    question: "Pentru un canal independent avem :",
    answers: [
      "probabilitățile condiționate egale cu cele necondiționate",
      "intrarea și ieșirea sunt independente",
      "eroarea medie egală cu entropia la ieșire",
      "transinformația nulă",
    ],
    correctAnswers: [
      "probabilitățile condiționate egale cu cele necondiționate",
      "intrarea și ieșirea sunt independente",
      "eroarea medie egală cu entropia la ieșire",
      "transinformația nulă",
    ],
  },
  {
    question: "Capacitatea unui canal: ",
    answers: [
      "este maximul transinformației, obținut prin prelucrarea sursei",
      "este maximul transinformației, obținut prin adaptarea sursei la canal",
      "se măsoară în biți/ simbol ",
      "se măsoară în biți",
    ],
    correctAnswers: [
      "este maximul transinformației, obținut prin prelucrarea sursei",
      "este maximul transinformației, obținut prin adaptarea sursei la canal",
      "se măsoară în biți/ simbol ",
    ],
  },
  {
    question: "Fie un canal binar simetric cu p = 0.5. Acest canal: ",
    answers: [
      "este fără perturbații",
      "are eficiență 1",
      "transinformația este nulă ",
      "este un canal independent ",
    ],
    correctAnswers: [
      "transinformația este nulă ",
      "este un canal independent ",
    ],
  },
  {
    question: "Fie un canal binar simetric cu p = 1. Acest canal: ",
    answers: [
      "este canal independent",
      "are eficiență 1",
      "transinformația este egală cu entropia sursei",
      "este un canal fără perturbații ",
    ],
    correctAnswers: [
      "transinformația este egală cu entropia sursei",
      "este un canal fără perturbații ",
    ],
  },
  {
    question:
      "Pentru un canal dat prin bandă și RSZ sunt valabile următoarele:    ",
    answers: [
      "se poate transmite orice cantitate de informație",
      "se poate transmite în timp real orice debit de informație",
      "se poate transmite în timp real doar un debit maxim egal cu capacitatea",
      "atingerea capacității se obține doar dacă sunt îndeplinite rezoluția în timp și amplitudine ",
    ],
    correctAnswers: [
      "se poate transmite orice cantitate de informație",
      "se poate transmite în timp real doar un debit maxim egal cu capacitatea",
      "atingerea capacității se obține doar dacă sunt îndeplinite rezoluția în timp și amplitudine ",
    ],
  },
  {
    question: "Capacitatea unui canal:",
    answers: [
      "este direct proporțională cu banda și RSZ",
      "este egală cu debitul maxim de informație transmis în timp real",
      "poate fi atinsă cu canale RSZ mare și bandă largă fără alte condiții",
      "poate fi atinsă doar prin îndeplinirea rezoluției în timp și în amplitudine ",
    ],
    correctAnswers: [
      "este egală cu debitul maxim de informație transmis în timp real",
      "poate fi atinsă doar prin îndeplinirea rezoluției în timp și în amplitudine ",
    ],
  },
  {
    question:
      "Pentru un canal cu bandă de 1MHz care este debitul de momente maxim transmisibil?",
    answers: ["2 Mbiți/s", "1,25 Mbiți/s", "500 Kbiți/s", "800 Kbiți/s "],
    correctAnswers: ["2 Mbiți/s", "1,25 Mbiți/s"],
  },
  {
    question: "Scopul codării sursei este:",
    answers: [
      "adaptarea statistică a sursei la canal prin compresie",
      "adaptarea naturii sursei la natura canalului",
      "reducerea efectelor zgomotului de pe canal",
      "confidențialitate în transmisiune/stocare ",
    ],
    correctAnswers: [
      "adaptarea statistică a sursei la canal prin compresie",
      "adaptarea naturii sursei la natura canalului",
    ],
  },
  {
    question: "Codurile pentru compresie fără pierderi sunt:",
    answers: ["uniforme", "neuniforme", "unic decodabile", "instantanee "],
    correctAnswers: ["neuniforme", "unic decodabile", "instantanee "],
  },
  {
    question: "CAO( coduri absolut optimale) au:",
    answers: [
      "eficiență unitară",
      "lungimea medie egală cu lungimea medie emise",
      "lungimea medie egală cu lungimea de codare uniformă",
      "lungimea medie egală cu lungimea celui mai scurt cuvânt de cod ",
    ],
    correctAnswers: [
      "eficiență unitară",
      "lungimea medie egală cu lungimea medie emise",
    ],
  },
  {
    question: "CAO( coduri absolut optimale) au:",
    answers: [
      "eficiență unitară",
      "se pot obține pentru orice sursă",
      "nu se pot obține pentru orice sursă",
      "realizează adaptarea statistică a sursei la canal ",
    ],
    correctAnswers: [
      "eficiență unitară",
      "nu se pot obține pentru orice sursă",
      "realizează adaptarea statistică a sursei la canal ",
    ],
  },
  {
    question:
      "Introducerea redundanței pentru codarea canalelor cu perturbații:",
    answers: [
      "permit detecția/corecția erorilor",
      "conduce la creșterea benzii în transmisiune",
      "conduce la compresie",
      "permite o utilizare eficientă a canalului prin reducerea benzii",
    ],
    correctAnswers: [
      "permit detecția/corecția erorilor",
      "conduce la creșterea benzii în transmisiune",
    ],
  },
  {
    question:
      "Codurile pentru predicție la erori pot fi clasificate din punct de vedere al procesării informației în:",
    answers: [
      "bloc",
      "convoluționale (continue)",
      "separabile",
      "neseparabile",
    ],
    correctAnswers: ["bloc", "convoluționale (continue)"],
  },
  {
    question: "Algoritmul de codare Huffman duce la obținerea unui cod :",
    answers: ["unic", "optimal", "instantaneu", "de lungime medie minimă"],
    correctAnswers: ["optimal", "instantaneu", "de lungime medie minimă"],
  },
  {
    question: "Pentru cuvintele  v1 = [ 1101010] și v2 = [ 0111100] :",
    answers: [
      "ponderile Hamming sunt : 4",
      "ponderile Hamming sunt : 3",
      "distanța Hamming dintre v1 și v2 este : 4",
      "distanța Hamming dintre v1 și v2 este : 3",
    ],
    correctAnswers: [
      "ponderile Hamming sunt : 4",
      "distanța Hamming dintre v1 și v2 este : 4",
    ],
  },
  {
    question: " Distanța de cod este:",
    answers: [
      "ponderea Hamming minimă a cuvintelor de cod",
      "ponderea Hamming medie a cuvintelor de cod",
      "distanța Hamming minimă dintre oricare două cuvinte ale codului",
      "distanța Hamming maximă dintre oricare două cuvinte de cod",
    ],
    correctAnswers: [
      "ponderea Hamming minimă a cuvintelor de cod",
      "distanța Hamming minimă dintre oricare două cuvinte ale codului",
    ],
  },
  {
    question:
      " Condiția necesară și suficientă pentru corecția a t erori și detecția de erori este :",
    answers: [
      "d >= t + e + 1, e > t",
      "d >= t + e + 1, t > e",
      "d >= e + 1",
      "d >= 2t + 1",
    ],
    correctAnswers: ["d >= t + e + 1, e > t"],
  },
  {
    question: " Pentru coduri bloc dimensiunea matricii generatoare este :",
    answers: ["[ k x n ]", "[ m x n ] ", "[ 1 x m ]", "[ 1 x k ]"],
    correctAnswers: ["[ m x n ] "],
  },
  {
    question: "Matricea de control a unui cod bloc :",
    answers: [
      "are dimensiunea [ n x k]",
      "are dimensiunea [ k x n] ",
      "este ortogonală pe matricea generatoare",
      "este ortogonală pe cuvântul de cod",
    ],
    correctAnswers: [
      "are dimensiunea [ k x n] ",
      "este ortogonală pe matricea generatoare",
      "este ortogonală pe cuvântul de cod",
    ],
  },
  {
    question: " Sindromul erorii:",
    answers: [
      "este funcție de cuvântul de cod transmis",
      "este funcție de cuvântul eroare ",
      "nu este funcție de cuvântul eroare",
      "permite detecția erorilor",
    ],
    correctAnswers: [
      "permite detecția erorilor",
      "este funcție de cuvântul eroare ",
    ],
  },
  {
    question: " Pentru dectecția a t erori, matricea de control are:",
    answers: [
      "suma modulo 2 a 2t coloane este diferită de zero",
      "suma modulo 2 a t coloane este diferită de zero",
      "toate coloanele sunt diferite de 0 și distincte",
      "toate coloanele sunt distincte",
    ],
    correctAnswers: ["suma modulo 2 a t coloane este diferită de zero"],
  },
  {
    question: " Codul Hamming grup perfect este:",
    answers: ["perfect", "corector de o eroare", "separabil", "sistematic"],
    correctAnswers: ["perfect", "corector de o eroare", "separabil"],
  },
  {
    question: " Codul Hamming grup perfect are:",
    answers: [
      "distanța de cod 4",
      "este corector de o eroare și detector de erori duble",
      "matricea de control cu toate coloanele distincte și nenule",
      "relația de codare este v = i*G",
    ],
    correctAnswers: [
      "matricea de control cu toate coloanele distincte și nenule",
      "relația de codare este v = i*G",
    ],
  },
  {
    question: " Codul Hamming extins are:",
    answers: [
      "matricea generatoare de dimensiune [ m x n]",
      "matricea generatoare de dimensiune [ m x ( n + 1) ]",
      "matricea de control de dimensiune [  k x ( n + 1) ]",
      "matricea de control de dimensiune [  (k + 1) x ( n + 1) ]",
    ],
    correctAnswers: ["matricea generatoare de dimensiune [ m x ( n + 1) ]"],
  },
  {
    question: "Pentru codul Hamming extins dacă:",
    answers: [
      "S1 = 0, S2 = 1 => an+1 eronat",
      "S1 != 0, S2 = 0 => detecția a 2 erori",
      "S1 != 0, S2 = 1 => o eroare corectabilă pe pozițiile 1,n",
      "S1 = 0, S2 = 0  => nu există erori sau sunt nedetectabile",
    ],
    correctAnswers: [
      "S1 != 0, S2 = 0 => detecția a 2 erori",
      "S1 != 0, S2 = 1 => o eroare corectabilă pe pozițiile 1,n",
      "S1 = 0, S2 = 0  => nu există erori sau sunt nedetectabile",
    ],
  },
  {
    question: "Codurile ciclice sunt: ",
    answers: [
      "coduri bloc separabile",
      "sistematice",
      "nesistematice",
      "reprezentate vectorial",
    ],
    correctAnswers: ["coduri bloc separabile", "sistematice", "nesistematice"],
  },
  {
    question: "Codurile BCH (m,n): ",
    answers: [
      "gradul polinomului generator este n-m",
      "gradul polinomului generator este  k’ = kt",
      "extensia câmpului Galois în care operează k’ din relația n = 2^k -1",
      "relația de codare sistematică este : v(x) = i(x)g(x)",
    ],
    correctAnswers: [
      "gradul polinomului generator este n-m",
      "gradul polinomului generator este  k’ = kt",
      "extensia câmpului Galois în care operează k’ din relația n = 2^k -1",
    ],
  },
  {
    question: "Codurile BCH (m,n): ",
    answers: [
      "numărul erorilor corectabile este t = k’/k",
      "numărul erorilor corectabile este t = k’/2",
      "detecția se face la sfârșitul recepționării blocului",
      "sindromul erorii pentru detecție este restul r(x)/g(x) != 0",
    ],
    correctAnswers: [
      "numărul erorilor corectabile este t = k’/k",
      "detecția se face la sfârșitul recepționării blocului",
      "sindromul erorii pentru detecție este restul r(x)/g(x) != 0",
    ],
  },
  {
    question: "Codurile BCH (m,n): ",
    answers: [
      "corecția este posibilă la sfârșitul lui n",
      "corecția este posibilă pe perioada (n+1, 2n)",
      "pentru eroare pe poziția i = 0, n-1 la tactul n se obține starea fixă a registrului sindrom",
      "pentru eroare pe poziția i = 0, n-1 la tactul n + ( n - i - 1) se obține starea fixă a registrului sindrom",
    ],
    correctAnswers: ["corecția este posibilă pe perioada (n+1, 2n)"],
  },
  {
    question:
      "Pentru codul BCH (4,7) sistematic, pentru i = [ 1 1 1 1], cuvântul de cod utilizând g(x) = x^3 + x + 1 este:",
    answers: [
      "[ 1 1 1 1 0 0 1] cu LSB la dreapta",
      "[ 1 0 0 1 1 1 1] cu MSB la stânga",
      "[ 1 1 1 0 1 1 0] cu MSB la stânga",
      "[ 1 1 1 1 1 1 1]",
    ],
    correctAnswers: ["[ 1 1 1 1 1 1 1]"],
  },
  {
    question:
      "Pentru codul BCH(4,7) sistematic cu g(x) = x^3+x^2+1 și recepția lui [ 1 1 1 0 1 1 1] care este cuvântul corect din care provine și la ce tact se face corecția?",
    answers: [
      "1111111 la tactul 12",
      "1111011 la tactul 14",
      "1111111 la tactul 10",
      "1110111 la tactul 9	",
    ],
    correctAnswers: ["1111111 la tactul 10"],
  },
  {
    question: "Coduri Reed-Solomon (RS) sunt:",
    answers: [
      "coduri ciclice nebinare corectoare doar de erori independente",
      "coduri ciclice nebinare corectoare doar de erori independente și pachete",
      "coduri bloc separabile sau neseparabile",
      "coduri cu o rată mică de codare	",
    ],
    correctAnswers: [
      "coduri ciclice nebinare corectoare doar de erori independente și pachete",
      "coduri bloc separabile sau neseparabile",
    ],
  },
  {
    question: "Codul RS (7,5) :",
    answers: [
      "are lungimea de 14 biți",
      "are lungimea de 21 biți",
      "este corector de 2 erori",
      "este corector de o eroare	",
    ],
    correctAnswers: ["este corector de o eroare	", "are lungimea de 21 biți"],
  },
  {
    question:
      "Pentru codul RS(7,5) dacă eroare este pe poziția r4 la ce tact este îndeplinită ecuația de căutare Chien: ",
    answers: ["10", "9", "11", "12	"],
    correctAnswers: ["9"],
  },
  {
    question: "Codul RS(7,5): ",
    answers: [
      "operează în extensia 4 a câmpului Galois",
      "polinomul generator are gradul 4",
      "este corector de 1 eroare",
      "polinomul generator are gradul 2",
    ],
    correctAnswers: ["este corector de 1 eroare"],
  },
  {
    question: "Codurile convoluționale sunt: ",
    answers: [
      "coduri bloc",
      "coduri continue",
      "cu rate de codare mică comparativ cu codurile bloc",
      "sunt potrivite pentru aplicații în care cerințele de bandă sunt limitate",
    ],
    correctAnswers: [
      "coduri continue",
      "cu rate de codare mică comparativ cu codurile bloc",
    ],
  },
  {
    question:
      "Fie codul convoluțional R = ½, K=3, variantă sistematică cu g(x) = x^2 + x +1. Codul are:",
    answers: [
      "d3= 3, d∞= 3",
      "d3= 3, d∞ = 8",
      "codul poate corecte cel mult o eroare",
      "codul poate corecta o eroare și poate dectecta 2 erori",
    ],
    correctAnswers: [
      "d3= 3, d∞ = 8",
      "codul poate corecta o eroare și poate dectecta 2 erori",
    ],
  },
];
export default quizRO;
