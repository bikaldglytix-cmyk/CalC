import efData from '../data/emission-factors.json';

/*
 * CRITICAL SCORING RULES:
 * 1. A3 firewood is region-dependent (GQ2) and COOKING-ONLY.
 * 2. A4 stove type is a MULTIPLIER on A3's firewood value.
 * 3. A2 home size is a MULTIPLIER on A1's construction material value.
 * 4. A8 heating is region-dependent (GQ1) SEASON TOTALS applied EXACTLY ONCE.
 * 5. B1 "By my own motorbike/car" option must score 0. (Counted in B2)
 * 6. C4 (food source) and D2 (second-hand) are MULTIPLIERS on other questions' base values.
 */

export function calculateFootprint(answers, region) {
  const gq1 = answers.GQ1 || region || 'terai'; 
  const gq2 = answers.GQ2 || 'urban'; 

  let byDomain = { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0 };

  const getRaw = (q, ans) => {
    if (!ans) return 0;
    const qData = efData.questions[q];
    if (!qData) return 0;
    const opt = qData.options[ans];
    if (!opt) return 0;
    
    if (opt.value !== undefined) return opt.value;
    if (opt.values) {
       if (q === 'A3') return opt.values[gq2] || 0;
       if (q === 'A8') return opt.values[gq1] || 0;
    }
    return 0;
  };

  // Domain A
  let a1Val = getRaw('A1', answers.A1);
  let a2Mult = 1.0;
  if (answers.A2 === 'actual' && answers.A2_value !== undefined) {
      a2Mult = answers.A2_value / 55.3;
  } else if (answers.A2 === 'custom_rooms' && answers.A2_value !== undefined) {
      a2Mult = answers.A2_value / 4.8;
  } else if (answers.A2 && efData.questions.A2.options[answers.A2]) {
      a2Mult = efData.questions.A2.options[answers.A2].multiplier;
  }
  a1Val *= a2Mult;
  byDomain.A += a1Val;

  let a3Val = getRaw('A3', answers.A3);
  if (answers.A3 === 'firewood') {
     let a4Mult = 1.0;
     if (answers.A4 && efData.questions.A4.options[answers.A4]) {
         a4Mult = efData.questions.A4.options[answers.A4].multiplier;
     }
     a3Val *= a4Mult;
  }
  byDomain.A += a3Val;

  byDomain.A += getRaw('A5', answers.A5);
  byDomain.A += getRaw('A6', answers.A6);
  byDomain.A += getRaw('A7', answers.A7);
  byDomain.A += getRaw('A8', answers.A8);

  // Domain B
  byDomain.B += getRaw('B1', answers.B1);
  byDomain.B += getRaw('B2', answers.B2);
  byDomain.B += getRaw('B3', answers.B3);
  byDomain.B += getRaw('B4', answers.B4);
  byDomain.B += getRaw('B5', answers.B5);

  // Domain C
  let cTotal = 0;
  cTotal += getRaw('C1', answers.C1);
  cTotal += getRaw('C2', answers.C2);
  cTotal += getRaw('C3', answers.C3);
  cTotal += getRaw('C5', answers.C5);
  cTotal += getRaw('C6', answers.C6);
  
  let c4Mult = 1.0;
  if (answers.C4 && efData.questions.C4.options[answers.C4]) {
      c4Mult = efData.questions.C4.options[answers.C4].multiplier;
  }
  byDomain.C += (cTotal * c4Mult);

  // Domain D
  let d1Val = getRaw('D1', answers.D1);
  let d3Val = getRaw('D3', answers.D3);
  let d2Mult = 1.0;
  if (answers.D2 && efData.questions.D2.options[answers.D2]) {
      d2Mult = efData.questions.D2.options[answers.D2].multiplier;
  }
  byDomain.D += (d1Val * d2Mult) + (d3Val * d2Mult);
  byDomain.D += getRaw('D4', answers.D4);

  // Domain E
  byDomain.E += getRaw('E1', answers.E1);
  byDomain.E += getRaw('E2', answers.E2);
  byDomain.E += getRaw('E3', answers.E3);
  byDomain.E += getRaw('E4', answers.E4);

  // Domain F
  byDomain.F += getRaw('F1', answers.F1);
  byDomain.F += getRaw('F2', answers.F2);
  byDomain.F += getRaw('F3', answers.F3);
  byDomain.F += getRaw('F4', answers.F4);

  const total = byDomain.A + byDomain.B + byDomain.C + byDomain.D + byDomain.E + byDomain.F;
  
  let topDomain = 'A';
  let max = byDomain.A;
  for (const [dom, val] of Object.entries(byDomain)) {
      if (val > max) {
          max = val;
          topDomain = dom;
      }
  }

  return {
      total,
      byDomain,
      topDomain,
      comparisons: {
          nepalAverage: efData.baselines.nepalAverage,
          globalAverage: efData.baselines.globalAverage
      }
  };
}
