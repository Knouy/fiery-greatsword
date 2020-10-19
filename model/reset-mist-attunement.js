export const resetMistAttunement = _ => {
  // noinspection JSUnresolvedVariable
  P.AGONY_RESISTANCE -= P.MIST_ATTUNEMENT_1 + P.MIST_ATTUNEMENT_2 + P
    .MIST_ATTUNEMENT_3 + P.MIST_ATTUNEMENT_4;
  // noinspection JSUnresolvedVariable
  P.MIST_ATTUNEMENT_1 = P.MIST_ATTUNEMENT_2 = P.MIST_ATTUNEMENT_3 = P
    .MIST_ATTUNEMENT_4 = 0;
};
