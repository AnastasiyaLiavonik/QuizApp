export const shuffleArray = (array: any[]) =>
    [...array].sort(() => Math.random() - 0.5);

/** keeps a small funcs to randomize the answers to the questions */