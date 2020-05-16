export function setTooltip (string) {
  const TOOLTIP = [
    ['elementalist',
      '<h1 class="marginLeftRight15">Elementalist</h1>' +
      '<p class="fontSize13 marginLeftRight15">• Favors Ranged<br>' +
      '• Elemental Magic<br>' +
      '• Versatile Caster<br></p>' +
      '<p class="marginLeftRight15">Elementalists harness the power of the fo' +
      'ur elements—water, earth, fire, and air—to cast powerful spells. Their' +
      ' ability to change their elemental attunement midcombat is versatile b' +
      'ut difficult to master.</p>'],
    ['engineer',
      '<h1 class="marginLeftRight15">Engineer</h1>' +
      '<p class="fontSize13 marginLeftRight15">• Melee or Ranged<br>' +
      '• Gadgets, Turrets, and Toolkits<br>' +
      '• Technomancer<br></p>' +
      '<p class="marginLeftRight15">Engineers are jacks-of-all-trades and, wi' +
      'th enough time, masters of many. Able to bring dozens of abilities and' +
      ' toolbelt skills to a fight, their art is in choosing the right one to' +
      ' utilize at the perfect time.</p>'],
    ['guardian',
      '<h1 class="marginLeftRight15">Guardian</h1>' +
      '<p class="fontSize13 marginLeftRight15">• Favors Melee<br>' +
      '• Supports Allies<br>' +
      '• Defensive Magic<br></p>' +
      '<p class="marginLeftRight15">Guardians gain powerful personal enhancem' +
      'ents from their virtues, which they can briefly expend to aid friends ' +
      'or damage foes. Formidable on their own, guardians shine brightest in ' +
      'the company of allies.</p>'],
    ['mesmer',
      '<h1 class="marginLeftRight15">Mesmer</h1>' +
      '<p class="fontSize13 marginLeftRight15">• Favors Ranged<br>' +
      '• Creates Illusions<br>' +
      '• Finesse and Misdirection<br></p>' +
      '<p class="marginLeftRight15">Masters of magical misdirection, mesmers ' +
      'create and shatter clones and illusions of themselves in battle. Mesme' +
      'rs rely on evasion and subterfuge requiring finesse and practice to pe' +
      'rfect.</p>'],
    ['necromancer',
      '<h1 class="marginLeftRight15">Necromancer</h1>' +
      '<p class="fontSize13 marginLeftRight15">• Favors Ranged<br>' +
      '• Summons Minions<br>' +
      '• Dark Magic<br></p>' +
      '<p class="marginLeftRight15">Necromancers of Tyria are monsters on the' +
      ' battlefield, draining life force from their enemies and entering a de' +
      'ath shroud that temporarily grants them powerful abilities and protect' +
      's them from harm.</p>'],
    ['ranger',
      '<h1 class="marginLeftRight15">Ranger</h1>' +
      '<p class="fontSize13 marginLeftRight15">• Favors Ranged<br>' +
      '• Pet Companion<br>' +
      '• Naturalist<br></p>' +
      '<p class="marginLeftRight15">Rangers tame a variety of pet companions ' +
      'to complement their fighting style. Rounding out their arsenal with tr' +
      'aps, nature spirits, and survival skills, they have the tools to take ' +
      'on any type of foe.</p>'],
    ['revenant',
      '<h1 class="marginLeftRight15">Revenant</h1>' +
      '<p class="fontSize13 marginLeftRight15">• Melee or Ranged<br>' +
      '• Invokes Legendary Heroes<br>' +
      '• Magic-Wielding Fighter<br></p>' +
      '<p class="marginLeftRight15">Revenants invoke the power of legendary h' +
      'eroes from Tyria\'s past, spending their own energy to channel the abi' +
      'lities used by those figures. They are reliable allies and dangerous e' +
      'nemies.</p>'],
    ['thief',
      '<h1 class="marginLeftRight15">Thief</h1>' +
      '<p class="fontSize13 marginLeftRight15">• Favors Melee<br>' +
      '• Stealth and Evasion<br>' +
      '• Acrobatic Combat<br></p>' +
      '<p class="marginLeftRight15">Thieves manage their initiative during co' +
      'mbat, expending it to unleash carefully timed attacks. What they lack ' +
      'in defense, they make up for with skills to debilitate, teleport, or v' +
      'anish from sight.</p>'],
    ['warrior',
      '<h1 class="marginLeftRight15">Warrior</h1>' +
      '<p class="fontSize13 marginLeftRight15">• Favors Melee<br>' +
      '• High Survivability<br>' +
      '• Weaponsmaster<br></p>' +
      '<p class="marginLeftRight15">Warriors build their adrenaline by succes' +
      'sfully striking an enemy, then expend it to unleash devastating burst ' +
      'attacks. Warriors are versatile and resilient fighters.</p>']
  ];
  TOOLTIP.forEach(element => {
    if (element[0] === string) {
      document.getElementById('tooltipPrecisionCalculator').innerHTML =
        element[1];
    }
  });
}
