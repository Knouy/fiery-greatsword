export function resetUtilitySkillMenu (string) {
  const UTILITY_SKILL = ['signetOfAgility', 'signetOfFire', 'signetOfFury'];
  for (const A_UTILITY_SKILL in UTILITY_SKILL) {
    if (Object.prototype.hasOwnProperty.call(UTILITY_SKILL, A_UTILITY_SKILL)) {
      if (UTILITY_SKILL[A_UTILITY_SKILL] !== string) {
        document.getElementById(UTILITY_SKILL[A_UTILITY_SKILL]).style
          .borderColor = 'transparent';
      }
    }
  }
}
