const quizFR = [
  {
    question: "Une source discrète sans mémoire est caractérisée par :",
    answers: [
      "Les symboles sont finis mais dépendants",
      "Les symboles sont infinis mais indépendants",
      "Les symboles sont finis et indépendants",
      "Le modèle statistique est une variable aléatoire discrète",
    ],
    correctAnswers: [
      "Les symboles sont finis et indépendants",
      "Le modèle statistique est une variable aléatoire discrète",
    ],
  },
  {
    question: "L'entropie informationnelle :",
    answers: [
      "Est la quantité d'information correspondant à chaque symbole émis",
      "Est la quantité moyenne d'information par symbole émis",
      "Est strictement positive",
      "Est positive",
    ],
    correctAnswers: [
      "Est la quantité moyenne d'information par symbole émis",
      "Est positive",
    ],
  },
  {
    question: "L'entropie informationnelle :",
    answers: [
      "Est la quantité d'information correspondant à chaque symbole émis   ",
      "Est la quantité moyenne d'information  correspondant à chaque symbole émis ",
      "Se mesure en bits",
      "Est maximale pour l'équiprobabilité des symboles",
    ],
    correctAnswers: [
      "Est la quantité moyenne d'information  correspondant à chaque symbole émis",
      "Est maximale pour l'équiprobabilité des symboles",
    ],
  },
  {
    question: "Le débit de décision :",
    answers: [
      "La vitesse de transmission de la quantité de décision",
      "Se mesure en bits par symbole",
      "Se mesure en Bd",
      "Est égal au débit de moments pour une source binaire équiprobable",
    ],
    correctAnswers: [
      "La vitesse de transmission de la quantité de décision",
      "Est égal au débit de moments pour une source binaire équiprobable",
    ],
  },
  {
    question:
      "Pour les canaux, la grandeur permettant une comparaison quantitative est :",
    answers: [
      "L'entropie de sortie",
      "L'information mutuelle",
      "L'erreur moyenne",
      "La transinformation",
    ],
    correctAnswers: ["La transinformation"],
  },
  {
    question: "Pour un canal sans perturbation, nous avons :",
    answers: [
      "La transinformation nulle",
      "La transinformation égale à l'entropie de la source",
      "La transinformation égale à l'entropie à la réception",
      "L'erreur moyenne nulle",
    ],
    correctAnswers: [
      "La transinformation égale à l'entropie de la source",
      "La transinformation égale à l'entropie à la réception",
      "L'erreur moyenne nulle",
    ],
  },
  {
    question: "Pour un canal indépendant, nous avons :",
    answers: [
      "L'erreur moyenne égale à l'entropie de la source",
      "L'équivoque égale à l'entropie de la source",
      "La transinformation nulle",
      "La transinformation égale à l'entropie de la source",
    ],
    correctAnswers: [
      "L'équivoque égale à l'entropie de la source",
      "La transinformation nulle",
    ],
  },
  {
    question: "Pour un canal indépendant, nous avons :",
    answers: [
      "Les probabilités conditionnelles égales aux non conditionnelles",
      "L'entrée et la sortie sont indépendantes",
      "L'erreur moyenne égale à l'entropie à la sortie",
      "La transinformation nulle",
    ],
    correctAnswers: [
      "Les probabilités conditionnelles égales aux non conditionnelles",
      "L'entrée et la sortie sont indépendantes",
      "L'erreur moyenne égale à l'entropie à la sortie",
      "La transinformation nulle",
    ],
  },
  {
    question: "La capacité d'un canal :",
    answers: [
      "Est le maximum de la transinformation obtenu par le traitement de la source",
      "Est le maximum de la transinformation obtenu par l'adaptation de la source au canal",
      "Se mesure en bits par symbole",
      "Se mesure en bits",
    ],
    correctAnswers: [
      "Est le maximum de la transinformation obtenu par le traitement de la source",
      "Est le maximum de la transinformation obtenu par l'adaptation de la source au canal",
      "Se mesure en bits par symbole",
    ],
  },
  {
    question: "Soit un canal binaire symétrique avec p = 0.5. Ce canal :",
    answers: [
      "Est sans perturbation",
      "A une efficacité de 1",
      "La transinformation est nulle",
      "Est un canal indépendant",
    ],
    correctAnswers: [
      "La transinformation est nulle",
      "Est un canal indépendant",
    ],
  },
  {
    question: "Soit un canal binaire symétrique avec p = 1. Ce canal :",
    answers: [
      "Est un canal indépendant",
      "A une efficacité de 1",
      "La transinformation est égale à l'entropie de la source",
      "Est un canal sans perturbation",
    ],
    correctAnswers: [
      "La transinformation est égale à l'entropie de la source",
      "Est un canal sans perturbation",
    ],
  },
  {
    question:
      "Pour un canal donné par la bande passante et RSZ, les affirmations suivantes sont vraies :",
    answers: [
      "On peut transmettre n'importe quelle quantité d'information",
      "On peut transmettre en temps réel n'importe quel débit d'information",
      "On peut transmettre en temps réel seulement un débit maximal égal à la capacité",
      "Atteindre la capacité nécessite uniquement le respect de la résolution en temps et en amplitude",
    ],
    correctAnswers: [
      "On peut transmettre n'importe quelle quantité d'information",
      "On peut transmettre en temps réel seulement un débit maximal égal à la capacité",
      "Atteindre la capacité nécessite uniquement le respect de la résolution en temps et en amplitude",
    ],
  },
  {
    question: "Capacité d'un canal :",
    answers: [
      "est directement proportionnelle à la bande et à la RSZ",
      "est égale au débit maximal d'informations transmis en temps réel",
      "peut être atteinte avec des canaux RSZ de grande taille et une bande large sans autres conditions",
      "peut être atteinte uniquement en respectant la résolution dans le temps et en amplitude",
    ],
    correctAnswers: [
      "est égale au débit maximal d'informations transmis en temps réel",
      "peut être atteinte uniquement en respectant la résolution dans le temps et en amplitude",
    ],
  },
  {
    question:
      "Pour un canal avec une bande de 1 MHz, quel est le débit de moments maximum transmissible ?",
    answers: ["2 Mbiți/s", "1,25 Mbiți/s", "500 Kbiți/s", "800 Kbiți/s "],
    correctAnswers: ["2 Mbiți/s", "1,25 Mbiți/s"],
  },
  {
    question: "Objectif du codage de la source :",
    answers: [
      "adaptation statistique de la source au canal par compression",
      "adaptation de la nature de la source à la nature du canal",
      "réduction des effets du bruit sur le canal",
      "confidentialité dans la transmission/le stockage",
    ],
    correctAnswers: [
      "adaptation statistique de la source au canal par compression",
      "adaptation de la nature de la source à la nature du canal",
    ],
  },
  {
    question: "Les codes pour la compression sans perte sont :",
    answers: [
      "uniformes",
      "non uniformes",
      "uniquement décodables",
      "instantanés",
    ],
    correctAnswers: ["non uniformes", "uniquement décodables", "instantanés"],
  },
  {
    question: "Les CAO (codes absolument optimaux) ont :",
    answers: [
      "efficacité unitaire",
      "longueur moyenne égale à la longueur moyenne émise",
      "longueur moyenne égale à la longueur de codage uniforme",
      "longueur moyenne égale à la longueur du mot de code le plus court",
    ],
    correctAnswers: [
      "efficacité unitaire",
      "longueur moyenne égale à la longueur moyenne émise",
    ],
  },
  {
    question: "Les CAO (codes absolument optimaux) ont :",
    answers: [
      "efficacité unitaire",
      "peuvent être obtenus pour n'importe quelle source",
      "ne peuvent pas être obtenus pour n'importe quelle source",
      "réalisent l'adaptation statistique de la source au canal",
    ],
    correctAnswers: [
      "efficacité unitaire",
      "ne peuvent pas être obtenus pour n'importe quelle source",
      "réalisent l'adaptation statistique de la source au canal",
    ],
  },
  {
    question:
      "Introduction de la redondance pour le codage des canaux avec perturbations :",
    answers: [
      "permet la détection/correction des erreurs",
      "conduit à une augmentation de la bande en transmission",
      "conduit à la compression",
      "permet une utilisation efficace du canal en réduisant la bande",
    ],
    correctAnswers: [
      "permet la détection/correction des erreurs",
      "conduit à une augmentation de la bande en transmission",
    ],
  },
  {
    question:
      "Les codes de prédiction des erreurs peuvent être classés du point de vue du traitement de l'information en :",
    answers: [
      "bloc",
      "convolutionnels (continus)",
      "séparables",
      "non séparables",
    ],
    correctAnswers: ["bloc", "convolutionnels (continus)"],
  },
  {
    question:
      "L'algorithme de codage Huffman conduit à l'obtention d'un code :",
    answers: [
      "unique",
      "optimal",
      "instantané",
      "de longueur moyenne minimale",
    ],
    correctAnswers: ["optimal", "instantané", "de longueur moyenne minimale"],
  },
  {
    question: "Pour les mots v1 = [1101010] et v2 = [0111100] :",
    answers: [
      "les poids de Hamming sont : 4",
      "les poids de Hamming sont : 3",
      "la distance de Hamming entre v1 et v2 est : 4",
      "la distance de Hamming entre v1 et v2 est : 3",
    ],
    correctAnswers: [
      "les poids de Hamming sont : 4",
      "la distance de Hamming entre v1 et v2 est : 4",
    ],
  },
  {
    question: "La distance de code est :",
    answers: [
      "le poids de Hamming minimum des mots de code",
      "le poids de Hamming moyen des mots de code",
      "la distance de Hamming minimum entre n'importe quels deux mots du code",
      "la distance de Hamming maximum entre n'importe quels deux mots de code",
    ],
    correctAnswers: [
      "le poids de Hamming minimum des mots de code",
      "la distance de Hamming minimum entre n'importe quels deux mots du code",
    ],
  },
  {
    question:
      "La condition nécessaire et suffisante pour la correction de t erreurs et la détection d'erreurs est :",
    answers: [
      "d >= t + e + 1, e > t",
      "d >= t + e + 1, t > e",
      "d >= e + 1",
      "d >= 2t + 1",
    ],
    correctAnswers: ["d >= t + e + 1, e > t"],
  },
  {
    question: "Pour les codes blocs, la taille de la matrice génératrice est :",
    answers: ["[k x n]", "[m x n]", "[1 x m]", "[1 x k]"],
    correctAnswers: ["[m x n]"],
  },
  {
    question: "La matrice de contrôle d'un code bloc :",
    answers: [
      "a une taille [n x k]",
      "a une taille [k x n]",
      "est orthogonale à la matrice génératrice",
      "est orthogonale au mot de code",
    ],
    correctAnswers: [
      "a une taille [k x n]",
      "est orthogonale à la matrice génératrice",
      "est orthogonale au mot de code",
    ],
  },
  {
    question: "Le syndrome d'erreur :",
    answers: [
      "est une fonction du mot de code transmis",
      "est une fonction du mot d'erreur",
      "n'est pas une fonction du mot d'erreur",
      "permet la détection des erreurs",
    ],
    correctAnswers: [
      "permet la détection des erreurs",
      "est une fonction du mot d'erreur",
    ],
  },
  {
    question: "Pour la détection de t erreurs, la matrice de contrôle a :",
    answers: [
      "la somme modulo 2 de 2t colonnes différente de zéro",
      "la somme modulo 2 de t colonnes différente de zéro",
      "toutes les colonnes sont différentes de 0 et distinctes",
      "toutes les colonnes sont distinctes de 0",
    ],
    correctAnswers: ["la somme modulo 2 de t colonnes différente de zéro"],
  },
  {
    question: "Le code Hamming groupe parfait est :",
    answers: [
      "parfait",
      "correcteur d'une erreur",
      "séparable",
      "systématique",
    ],
    correctAnswers: ["parfait", "correcteur d'une erreur", "séparable"],
  },
  {
    question: "Le code Hamming groupe parfait a :",
    answers: [
      "une distance de code de 4",
      "est correcteur d'une erreur et détecteur de deux erreurs",
      "une matrice de contrôle avec toutes les colonnes distinctes et non nulles",
      "une relation de codage v = i*G",
    ],
    correctAnswers: [
      "une matrice de contrôle avec toutes les colonnes distinctes et non nulles",
      "une relation de codage v = i*G",
    ],
  },
  {
    question: "Le code Hamming étendu a :",
    answers: [
      "une matrice génératrice de taille [m x n]",
      "une matrice génératrice de taille [m x (n + 1)]",
      "une matrice de contrôle de taille [k x (n + 1)]",
      "une matrice de contrôle de taille [(k + 1) x (n + 1)]",
    ],
    correctAnswers: ["une matrice génératrice de taille [m x (n + 1)]"],
  },
  {
    question: "Pour le code Hamming étendu, si :",
    answers: [
      "S1 = 0, S2 = 1 => an+1 erroné",
      "S1 != 0, S2 = 0 => détection de 2 erreurs",
      "S1 != 0, S2 = 1 => une erreur correctible aux positions 1, n",
      "S1 = 0, S2 = 0  => pas d'erreurs ou elles sont indétectables",
    ],
    correctAnswers: [
      "S1 != 0, S2 = 0 => détection de 2 erreurs",
      "S1 != 0, S2 = 1 => une erreur correctible aux positions 1, n",
      "S1 = 0, S2 = 0  => pas d'erreurs ou elles sont indétectables",
    ],
  },
  {
    question: "Les codes cycliques sont :",
    answers: [
      "des codes blocs séparables",
      "systématiques",
      "non systématiques",
      "représentés de manière vectorielle",
    ],
    correctAnswers: [
      "des codes blocs séparables",
      "systématiques",
      "non systématiques",
    ],
  },
  {
    question: "Les codes BCH (m, n) :",
    answers: [
      "le degré du polynôme générateur est n-m",
      "le degré du polynôme générateur est k’ = kt",
      "l'extension du corps de Galois dans lequel opère k’ de la relation n = 2^k -1",
      "la relation de codage systématique est : v(x) = i(x)g(x)",
    ],
    correctAnswers: [
      "le degré du polynôme générateur est n-m",
      "le degré du polynôme générateur est k’ = kt",
      "l'extension du corps de Galois dans lequel opère k’ de la relation n = 2^k -1",
    ],
  },
  {
    question: "Les codes BCH (m, n) :",
    answers: [
      "le nombre d'erreurs correctables est t = k’/k",
      "le nombre d'erreurs correctables est t = k’/2",
      "la détection se fait à la fin de la réception du bloc",
      "le syndrome d'erreur pour la détection est le reste r(x)/g(x) != 0",
    ],
    correctAnswers: [
      "le nombre d'erreurs correctables est t = k’/k",
      "la détection se fait à la fin de la réception du bloc",
      "le syndrome d'erreur pour la détection est le reste r(x)/g(x) != 0",
    ],
  },
  {
    question: "Les codes BCH (m, n) :",
    answers: [
      "la correction est possible à la fin de n",
      "la correction est possible pendant la période (n+1, 2n)",
      "pour une erreur à la position i = 0, n-1 à l'instant n, l'état fixe du registre de syndrome est obtenu",
      "pour une erreur à la position i = 0, n-1 à l'instant n + ( n - i - 1), l'état fixe du registre de syndrome est obtenu",
    ],
    correctAnswers: ["la correction est possible pendant la période (n+1, 2n)"],
  },
  {
    question:
      "Pour le code BCH (4,7) systématique, pour i = [ 1 1 1 1], le mot de code en utilisant g(x) = x^3 + x + 1 est :",
    answers: [
      "[ 1 1 1 1 0 0 1] avec LSB à droite",
      "[ 1 0 0 1 1 1 1] avec MSB à gauche",
      "[ 1 1 1 0 1 1 0] avec MSB à gauche",
      "[ 1 1 1 1 1 1 1]",
    ],
    correctAnswers: ["[ 1 1 1 1 1 1 1]"],
  },
  {
    question:
      "Pour le code BCH(4,7) systématique avec g(x) = x^3+x^2+1 et la réception de [ 1 1 1 0 1 1 1], quel est le mot correct d'où il provient et à quel instant la correction est effectuée ?",
    answers: [
      "1111111 à l'instant 12",
      "1111011 à l'instant 14",
      "1111111 à l'instant 10",
      "1110111 à l'instant 9",
    ],
    correctAnswers: ["1111111 à l'instant 10"],
  },
  {
    question: "Les codes Reed-Solomon (RS) sont :",
    answers: [
      "des codes cycliques non binaires correcteurs uniquement pour des erreurs indépendantes",
      "des codes cycliques non binaires correcteurs uniquement pour des erreurs indépendantes et des paquets",
      "des codes blocs séparables ou non séparables",
      "des codes avec un faible taux de codage",
    ],
    correctAnswers: [
      "des codes cycliques non binaires correcteurs uniquement pour des erreurs indépendantes et des paquets",
      "des codes blocs séparables ou non séparables",
    ],
  },
  {
    question: "Le code RS (7,5) :",
    answers: [
      "a une longueur de 14 bits",
      "a une longueur de 21 bits",
      "est correcteur de 2 erreurs",
      "est correcteur d'une erreur",
    ],
    correctAnswers: [
      "est correcteur d'une erreur",
      "a une longueur de 21 bits",
    ],
  },
  {
    question:
      "Pour le code RS(7,5) si l'erreur est à la position r4, à quel instant l'équation de recherche de Chien est-elle satisfaite ?",
    answers: ["10", "9", "11", "12"],
    correctAnswers: ["9"],
  },
  {
    question: "Le code RS(7,5) :",
    answers: [
      "fonctionne dans l'extension 4 du corps de Galois",
      "le polynôme générateur a un degré de 4",
      "est correcteur d'une erreur",
      "le polynôme générateur a un degré de 2",
    ],
    correctAnswers: ["est correcteur d'une erreur"],
  },
  {
    question: "Les codes convolutifs sont :",
    answers: [
      "des codes blocs",
      "des codes continus",
      "avec un faible taux de codage par rapport aux codes blocs",
      "adaptés aux applications où les exigences de bande passante sont limitées",
    ],
    correctAnswers: [
      "des codes continus",
      "avec un faible taux de codage par rapport aux codes blocs",
    ],
  },
  {
    question:
      "Pour le code convolutif R = ½, K=3, variante systématique avec g(x) = x^2 + x +1. Le code a :",
    answers: [
      "d3= 3, d∞= 3",
      "d3= 3, d∞ = 8",
      "le code peut corriger au maximum une erreur",
      "le code peut corriger une erreur et détecter 2 erreurs",
    ],
    correctAnswers: [
      "d3= 3, d∞ = 8",
      "le code peut corriger une erreur et détecter 2 erreurs",
    ],
  },
];
export default quizFR;
