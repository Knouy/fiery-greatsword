export function resetUtilitySkillMenu (string) {
  const UTILITY_SKILL = ['P.SIGNET_OF_AGILITY', 'P.SIGNET_OF_FIRE',
    'P.SIGNET_OF_FURY'];
  for (const A_UTILITY_SKILL in UTILITY_SKILL) {
    if (Object.prototype.hasOwnProperty.call(UTILITY_SKILL, A_UTILITY_SKILL)) {
      if (UTILITY_SKILL[A_UTILITY_SKILL] !== string) {
        document.getElementById(UTILITY_SKILL[A_UTILITY_SKILL]).style
          .borderColor = 'transparent';
      }
    }
  }
}
