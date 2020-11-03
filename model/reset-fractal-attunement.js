/* eslint-disable no-undef */
export const resetFractalAttunement = _ => {
  // noinspection JSUnresolvedVariable
  P.AGONY_RESISTANCE -= (P.ANGUISHED_TEAR_OF_ALBA * (10 + (P.AGONY_CHANNELER +
  P.RECURSIVE_RESOURCING + P.MISTLOCK_SINGULARITIES > 0
    ? 5
    : 0)));
  // noinspection JSUnresolvedVariable
  P.AGONY_CHANNELER = P.RECURSIVE_RESOURCING = P.MISTLOCK_SINGULARITIES = 0;
};
